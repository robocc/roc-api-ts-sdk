import {
  actionFeedbackCode,
  ActionOperationCode,
  ActionOperationResponseMsg,
  ActionPromiseCallbacks,
  actionResultCode,
  initActionOperationCallbacks,
  ActionsMixin,
  ActionParamsType,
  ActionFeedbackType,
  ActionResultType,
} from "./actions";
import {
  EventCallback,
  EventDataType,
  EventMsg,
  EventResultPromiseCallbacks,
  FeedbackEventCode,
  initEventFeedbackCallbacks,
  initEventResultCallbacks,
  initEventTopicCallbacks,
  ResultEventCode,
  TopicEventCode,
} from "./events";
import { OutcomeCode, OutcomeCodeDescription } from "./outcomes";
import {
  initServiceOperationCallbacks,
  ServiceOperationCode,
  ServiceOperationResponseMsg,
  ServiceParamsType,
  ServicePromiseCallbacks,
  ServiceResultType,
  ServicesMixin,
} from "./services";
import { LoginResult, BaseAPI } from "./types";

export interface RocApiOptions {
  host: string;
  use_ssl: boolean;
  api_key?: string;
  module_key?: string;
  crypted_module_file?: string;
}

enum WebSocketState {
  IDLE,
  OPENED,
  AUTHENTIFIED,
  ERROR,
}

class RocApiException extends Error { }

export class RocApi extends BaseAPI {
  options: RocApiOptions;
  #defaultOptions: RocApiOptions = {
    host: "10.81.0.254:7523",
    use_ssl: false,
  };

  #ws: WebSocket | null = null;
  #wsstate: WebSocketState = WebSocketState.IDLE;
  #timeoutRetryConnection: ReturnType<typeof setTimeout> | null = null;

  #fragmentedMessages: Record<string, any> = [];

  protected subscribed: TopicEventCode[] = [];

  protected _serviceOperationCallbacks: {
    [op in ServiceOperationCode]: ServicePromiseCallbacks;
  } = initServiceOperationCallbacks();

  protected _actionOperationCallbacks: {
    [op in ActionOperationCode]: ActionPromiseCallbacks;
  } = initActionOperationCallbacks();

  protected _eventTopicCallbacks: {
    [ev in TopicEventCode]: EventCallback<any>[];
  } = initEventTopicCallbacks();
  protected _eventResultCallbacks: {
    [ev in ResultEventCode]: EventResultPromiseCallbacks;
  } = initEventResultCallbacks();
  protected _eventFeedbackCallbacks: {
    [ev in FeedbackEventCode]: EventCallback<any> | undefined;
  } = initEventFeedbackCallbacks();

  constructor(options: RocApiOptions) {
    super();
    this.options = { ...this.#defaultOptions, ...options };
  }

  /* Low level websocket operations */
  #wsOnOpen() {
    // console.debug("RocApi websocket opened");
    this.#wsstate = WebSocketState.OPENED;
    this.#throw(TopicEventCode.VehicleConnectionOpen);

    if (this.options.api_key) {
      this._sendOperation(ServiceOperationCode.AuthUser, this.options.api_key);
    } else if (this.options.module_key) {
      this._sendOperation(
        ServiceOperationCode.AuthModule,
        this.options.module_key
      );
    }
  }
  #wsOnError() {
    console.warn("RocApi websocket error");
    this.#wsstate = WebSocketState.ERROR;
    this.subscribed = [];
    this.#throw(TopicEventCode.VehicleConnectionError);
    if (this.#timeoutRetryConnection == null)
      this.#timeoutRetryConnection = setTimeout(this.start.bind(this), 1000);
  }
  #wsOnClose() {
    console.warn("RocApi websocket closed");
    this.#wsstate = WebSocketState.ERROR;
    this.subscribed = [];
    this.#throw(TopicEventCode.VehicleConnectionClose);
    if (this.#timeoutRetryConnection == null)
      this.#timeoutRetryConnection = setTimeout(this.start.bind(this), 1000);
  }
  #forceReconnection() {
    if (
      !this.#ws ||
      (this.#wsstate != WebSocketState.OPENED &&
        this.#wsstate != WebSocketState.AUTHENTIFIED)
    ) {
      console.warn("RocApi force reconnection");
      if (this.#ws) this.#ws.close();
      if (this.#timeoutRetryConnection == null)
        this.#timeoutRetryConnection = setTimeout(this.start.bind(this), 1000);
    }
  }
  #wsOnMessage(e: MessageEvent<any>) {
    const msg_raw = e.data;
    if (msg_raw == "ack") return;

    const msg = JSON.parse(msg_raw) as
      | ServiceOperationResponseMsg<any>
      | ActionOperationResponseMsg<any>
      | EventMsg<any>;
    this.#processMessage(msg);
  }
  protected _sendOperation(
    op_code: ServiceOperationCode | ActionOperationCode,
    params: any
  ) {
    if (
      !this.#ws ||
      (this.#wsstate != WebSocketState.OPENED &&
        this.#wsstate != WebSocketState.AUTHENTIFIED)
    ) {
      // console.debug("Not sending message on ws :", this.#wsstate);
      throw new RocApiException("Not connected");
    }
    // console.debug("Sending on ws", { op_code: op_code, params: params });
    if (params === null)
      this.#ws.send(JSON.stringify({ op_code: op_code }));
    else
      this.#ws.send(JSON.stringify({ op_code: op_code, params: params }));
  }

  /* Main message processing method */
  #throw(event_code: TopicEventCode, data: any = null) {
    this.#processMessage({
      event_code: event_code,
      data: data,
    });
  }
  #processMessage(
    msg:
      | ServiceOperationResponseMsg<any>
      | ActionOperationResponseMsg<any>
      | EventMsg<any>
  ) {
    if ("outcome" in msg && msg.outcome != OutcomeCode.NO_ERROR) {
      console.warn(
        "Got error outcome: ",
        OutcomeCodeDescription[msg.outcome],
        msg
      );
    }

    if (
      "data" in msg &&
      msg.data != null &&
      msg.data.is_fragmented != undefined &&
      msg.data.is_fragmented
    ) {
      // Send ack
      this.#ws?.send("ack_fragmented");

      let message_id = "";
      if ("op_code" in msg) {
        message_id = "op_" + msg.op_code;
        this.#processMessage({
          event_code: TopicEventCode.ReceivedFragmentedMessage,
          outcome: OutcomeCode.NO_ERROR,
          data: {
            op_code: msg.op_code,
            index: msg.data.index_fragment,
            nb: msg.data.nb_fragment,
          },
        });
      } else {
        message_id = "event_" + msg.event_code;
      }

      if (msg.data.index_fragment == 1) {
        this.#fragmentedMessages[message_id] = msg.data.fragment;
      } else {
        this.#fragmentedMessages[message_id] += msg.data.fragment;
      }

      if (msg.data.index_fragment == msg.data.nb_fragment) {
        msg.data = JSON.parse(this.#fragmentedMessages[message_id]);
      } else {
        return;
      }
    }

    // console.debug("Processing ", msg);
    if ("op_code" in msg) {
      switch (msg.op_code) {
        case ServiceOperationCode.Sink:
        case ServiceOperationCode.SetUseFragmentedMessage:
          break;
        case ServiceOperationCode.AuthUser:
          if (msg.outcome == OutcomeCode.NO_ERROR) {
            if ("data" in msg)
              this.#throw(TopicEventCode.AuthOK, msg.data);
            else
              this.#throw(TopicEventCode.AuthOK);
          }
        case ServiceOperationCode.AuthModule:
          if (msg.outcome == OutcomeCode.NO_ERROR) {
            this.#wsstate = WebSocketState.AUTHENTIFIED;
            this._sendOperation(
              ServiceOperationCode.SetUseFragmentedMessage,
              true
            );
            this._subscribeTopics();
          } else {
            if (
              msg.op_code == ServiceOperationCode.AuthModule &&
              this.options.module_key &&
              this.options.crypted_module_file &&
              this.options.crypted_module_file != ""
            ) {
              this._sendOperation(ActionOperationCode.InstallModule, {
                api_key: this.options.module_key,
                crypted_module_file: this.options.crypted_module_file,
              });
            } else {
              this.#throw(TopicEventCode.AuthError);
              console.warn("Error in authentication", msg);
            }
          }
          break;
        case ServiceOperationCode.Unsubscribe:
        case ServiceOperationCode.UnsubscribeAll:
          break;
        case ServiceOperationCode.Subscribe:
          if (
            msg.outcome == OutcomeCode.NO_ERROR &&
            "data" in msg &&
            msg.data.data != undefined
          ) {
            // Transform service response in message event
            const new_msg: EventMsg<any> = {
              event_code: msg.data.event_code,
              data: msg.data.data,
            };
            this.#processMessage(new_msg);
          }
          break;
        case ServiceOperationCode.Login:
          if (msg.outcome == OutcomeCode.NO_ERROR) {
            this.options.api_key = (
              msg as ServiceOperationResponseMsg<LoginResult>
            ).data.api_key;
            this._sendOperation(
              ServiceOperationCode.AuthUser,
              this.options.api_key
            );
          }
        default:
          if (
            (msg.op_code as ServiceOperationCode) in
            this._serviceOperationCallbacks
          ) {
            /* Service response -> we resolve/reject callback depending on outcome */
            const op_cb =
              this._serviceOperationCallbacks[
              msg.op_code as ServiceOperationCode
              ];
            if (op_cb != undefined && op_cb?.reject && op_cb?.resolve) {
              if (msg.outcome == OutcomeCode.NO_ERROR) {
                // console.debug("Resolving service call", msg);
                op_cb.resolve("data" in msg ? msg.data : null);
              } else {
                op_cb.reject(msg as ServiceOperationResponseMsg<any>);
                // console.debug("Rejecting service call", msg);
              }
            } else {
              console.warn("Unexpected service response: ", msg);
            }
          } else if (
            Object.values(ActionOperationCode).includes(
              msg.op_code as ActionOperationCode
            )
          ) {
            /* Action response -> we reject callback depending on outcome and register event callbacks for feedback/responses */
            const op_cb =
              this._actionOperationCallbacks[
              msg.op_code as ActionOperationCode
              ];
            if (op_cb != undefined && op_cb?.reject && op_cb?.resolve) {
              if (msg.outcome == OutcomeCode.NO_ERROR) {
                const feedbackCode =
                  actionFeedbackCode[msg.op_code as ActionOperationCode];
                const resultCode =
                  actionResultCode[msg.op_code as ActionOperationCode];
                const promise = new Promise<any>((resolve, reject) => {
                  this._eventResultCallbacks[resultCode].resolve = (value) => {
                    /* Empty feedback cb for this action */
                    this._eventFeedbackCallbacks[feedbackCode] = undefined;
                    /* Resolve cb */
                    resolve(value);
                  };
                  this._eventResultCallbacks[resultCode].reject = reject;
                });
                op_cb?.resolve({
                  promise: promise,
                });
                /* console.debug(
                  "Resolving action call with another promise",
                  msg
                );*/
              } else {
                op_cb.reject(msg as ActionOperationResponseMsg<any>);
                // console.debug("Rejecting action call", msg);
              }
            } else {
              console.warn("Unexpected action response: ", msg);
            }
          }
          break;
      }
    } else if ("event_code" in msg) {
      if (
        Object.values(ResultEventCode).includes(
          msg.event_code as ResultEventCode
        ) ||
        (msg.event_code as ResultEventCode) in this._eventResultCallbacks
      ) {
        const result_msg = msg.data as Omit<
          ActionOperationResponseMsg<any>,
          "op_code"
        >; /* op_code is not set in event */
        if (msg.event_code == ResultEventCode.InstallModuleResult) {
          if (result_msg.outcome == OutcomeCode.NO_ERROR) {
            this._sendOperation(
              ServiceOperationCode.AuthModule,
              this.options.module_key
            );
            return;
          } else {
            this.#throw(TopicEventCode.AuthError);
          }
        } else {
          const cb =
            this._eventResultCallbacks[msg.event_code as ResultEventCode];
          if (cb) {
            if (result_msg.outcome == OutcomeCode.NO_ERROR) {
              if (cb.resolve) {
                cb.resolve("data" in result_msg ? result_msg.data : null);
                // console.debug("Resolving action result promise", result_msg);
              }
            } else {
              if (cb.reject) {
                cb.reject(result_msg);
                // console.debug("Rejecting action result promise", result_msg);
              }
            }
          }
        }
      } else if (
        (msg.event_code as FeedbackEventCode) in this._eventFeedbackCallbacks
      ) {
        const cb =
          this._eventFeedbackCallbacks[msg.event_code as FeedbackEventCode];
        if (cb) {
          // console.debug("Resolving action feedback promise", msg);
          cb("data" in msg ? msg.data : null);
        }
      } else {
        for (const event_callback of this._eventTopicCallbacks[
          msg.event_code as TopicEventCode
        ] || []) {
          // console.debug("Calling cb for event", event_callback, msg);
          event_callback("data" in msg ? msg.data : null);
        }
      }
    }
  }

  /* Events related stuff */
  #subscribeTopic(event: TopicEventCode) {
    if (this.#wsstate != WebSocketState.AUTHENTIFIED) return false;

    if (event < 0) return true;

    try {
      if (!this.subscribed.includes(event)) {
        console.debug("Subscribing to ", event.toString());
        this._sendOperation(ServiceOperationCode.Subscribe, event);
        this.subscribed.push(event);
      }
    } catch (e) {
      // console.debug("Unable to subscribe for now");
      return false;
    }
    return true;
  }
  #unsubscribeTopic(event: TopicEventCode) {
    if (this.#wsstate != WebSocketState.AUTHENTIFIED) return false;

    if (event < 0) return true;

    try {
      if (this.subscribed.includes(event)) {
        console.debug("Unsubscribing to ", event.toString());
        this._sendOperation(ServiceOperationCode.Unsubscribe, event);
        const index = this.subscribed.indexOf(event);
        if (index > -1) { // only splice array when item is found
          this.subscribed.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
    } catch (e) {
      // console.debug("Unable to unsubscribe for now");
      return false;
    }
    return true;
  }
  protected _subscribeTopics() {
    console.debug("Triggering all subscriptions...");

    let succeed = true;
    for (const event in this._eventTopicCallbacks) {
      const event_code = Number(event) as TopicEventCode;
      if (this._eventTopicCallbacks[event_code].length == 0) {
        continue;
      }
      succeed = succeed && this.#subscribeTopic(event_code);
    }

    if (succeed) {
      this.#throw(TopicEventCode.Ready);
    }
  }

  /*
   * Public methods
   */

  /** Start RocApi */
  start() {
    this.#timeoutRetryConnection = null;

    if (
      typeof window != "undefined" &&
      !("WebSocket" in window) &&
      !("MozWebSocket" in window)
    ) {
      throw new RocApiException("This Browser does not support WebSockets");
    }
    if (this.options.host?.startsWith(":"))
      this.options.host = location.hostname + this.options.host;

    console.info("RocApi starting on host ", this.options.host);
    const WebSocketClass =
      typeof window != "undefined" ? window.WebSocket : require("ws");
    this.#ws = new WebSocketClass(
      (this.options.use_ssl ? "wss" : "ws") + "://" + this.options.host
    ) as WebSocket;
    this.#ws.onopen = this.#wsOnOpen.bind(this);
    this.#ws.onerror = this.#wsOnError.bind(this);
    this.#ws.onclose = this.#wsOnClose.bind(this);
    this.#ws.onmessage = this.#wsOnMessage.bind(this);

    // Force reconnection after 5s
    setTimeout(this.#forceReconnection.bind(this), 5000);
  }

  /** Subscribe to a topic event and attach callback */
  on<T extends TopicEventCode>(
    event: T,
    callback: EventCallback<EventDataType[T]>
  ) {
    // console.debug("Registering new callback for event ", event.toString());
    this.#subscribeTopic(event);
    this._eventTopicCallbacks[event]!.push(callback);
  }

  /** Subscribe to a topic event and attach callback */
  off<T extends TopicEventCode>(
    event: T,
    callback: EventCallback<EventDataType[T]>
  ) {
    // console.debug("Unregistering callback for event ", event.toString());
    this.#unsubscribeTopic(event);
    const index = this._eventTopicCallbacks[event].indexOf(callback);
    if (index > -1) { // only splice array when item is found
      this._eventTopicCallbacks[event].splice(index, 1); // 2nd parameter means remove one item only
    }
  }

  /** Manually call a service via its ServiceOperationCode. Prefer direct method call for services */
  callService<T extends ServiceOperationCode>(
    operation: T,
    params: ServiceParamsType[T]
  ) {
    this._sendOperation(operation, params);
    return new Promise<ServiceResultType[T]>((resolve, reject) => {
      this._serviceOperationCallbacks[operation].resolve = resolve as (
        value: ServiceResultType[T]
      ) => void;
      this._serviceOperationCallbacks[operation].reject = reject;
    });
  }

  /** Manually call a service via its ActionOperationCode. Prefer direct method call for actions */
  callAction<T extends ActionOperationCode>(
    operation: T,
    params: ActionParamsType[T],
    feedback_cb?: EventCallback<ActionFeedbackType[T]>
  ) {
    this._sendOperation(operation, params);
    if (feedback_cb) {
      this._eventFeedbackCallbacks[actionFeedbackCode[operation]] = feedback_cb;
    }
    return new Promise<{
      promise: Promise<ActionResultType[T]>;
    }>((resolve, reject) => {
      this._actionOperationCallbacks[operation].resolve = resolve as (value: {
        promise: Promise<ActionResultType[T]>;
      }) => void;
      this._actionOperationCallbacks[operation].reject = reject;
    });
  }
}

export interface RocApi extends ActionsMixin, ServicesMixin { }
applyMixins(RocApi, [ActionsMixin, ServicesMixin]);

function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
        Object.create(null)
      );
    });
  });
}