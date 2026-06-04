"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _RocApi_instances, _RocApi_defaultOptions, _RocApi_ws, _RocApi_wsstate, _RocApi_timeoutRetryConnection, _RocApi_fragmentedMessages, _RocApi_wsOnOpen, _RocApi_wsOnError, _RocApi_wsOnClose, _RocApi_forceReconnection, _RocApi_wsOnMessage, _RocApi_throw, _RocApi_processMessage, _RocApi_subscribeTopic, _RocApi_unsubscribeTopic;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RocApi = void 0;
const actions_1 = require("./actions");
const events_1 = require("./events");
const outcomes_1 = require("./outcomes");
const services_1 = require("./services");
const types_1 = require("./types");
var WebSocketState;
(function (WebSocketState) {
    WebSocketState[WebSocketState["IDLE"] = 0] = "IDLE";
    WebSocketState[WebSocketState["OPENED"] = 1] = "OPENED";
    WebSocketState[WebSocketState["AUTHENTIFIED"] = 2] = "AUTHENTIFIED";
    WebSocketState[WebSocketState["ERROR"] = 3] = "ERROR";
})(WebSocketState || (WebSocketState = {}));
class RocApiException extends Error {
}
class RocApi extends types_1.BaseAPI {
    constructor(options) {
        super();
        _RocApi_instances.add(this);
        _RocApi_defaultOptions.set(this, {
            host: "10.81.0.254:7523",
            use_ssl: false,
        });
        _RocApi_ws.set(this, null);
        _RocApi_wsstate.set(this, WebSocketState.IDLE);
        _RocApi_timeoutRetryConnection.set(this, null);
        _RocApi_fragmentedMessages.set(this, []);
        this.subscribed = [];
        this._serviceOperationCallbacks = (0, services_1.initServiceOperationCallbacks)();
        this._actionOperationCallbacks = (0, actions_1.initActionOperationCallbacks)();
        this._eventTopicCallbacks = (0, events_1.initEventTopicCallbacks)();
        this._eventResultCallbacks = (0, events_1.initEventResultCallbacks)();
        this._eventFeedbackCallbacks = (0, events_1.initEventFeedbackCallbacks)();
        this.options = Object.assign(Object.assign({}, __classPrivateFieldGet(this, _RocApi_defaultOptions, "f")), options);
    }
    _sendOperation(op_code, params) {
        if (!__classPrivateFieldGet(this, _RocApi_ws, "f") ||
            (__classPrivateFieldGet(this, _RocApi_wsstate, "f") != WebSocketState.OPENED &&
                __classPrivateFieldGet(this, _RocApi_wsstate, "f") != WebSocketState.AUTHENTIFIED)) {
            // console.debug("Not sending message on ws :", this.#wsstate);
            throw new RocApiException("Not connected");
        }
        // console.debug("Sending on ws", { op_code: op_code, params: params });
        if (params === null)
            __classPrivateFieldGet(this, _RocApi_ws, "f").send(JSON.stringify({ op_code: op_code }));
        else
            __classPrivateFieldGet(this, _RocApi_ws, "f").send(JSON.stringify({ op_code: op_code, params: params }));
    }
    _subscribeTopics() {
        console.debug("Triggering all subscriptions...");
        let succeed = true;
        for (const event in this._eventTopicCallbacks) {
            const event_code = Number(event);
            if (this._eventTopicCallbacks[event_code].length == 0) {
                continue;
            }
            succeed = succeed && __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_subscribeTopic).call(this, event_code);
        }
        if (succeed) {
            __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_throw).call(this, events_1.TopicEventCode.Ready);
        }
    }
    _unsubscribeTopics() {
        if (__classPrivateFieldGet(this, _RocApi_wsstate, "f") != WebSocketState.AUTHENTIFIED)
            return false;
        try {
            this._sendOperation(services_1.ServiceOperationCode.UnsubscribeAll, null);
            this.subscribed = [];
        }
        catch (e) {
            // console.debug("Unable to unsubscribe all for now");
            return false;
        }
        return true;
    }
    /*
     * Public methods
     */
    /** RefreshTopicsSubscription RocApi */
    refreshTopicsSubscription() {
        this._unsubscribeTopics();
        this._subscribeTopics();
    }
    /** Start RocApi */
    start() {
        var _a;
        __classPrivateFieldSet(this, _RocApi_timeoutRetryConnection, null, "f");
        if (typeof window != "undefined" &&
            !("WebSocket" in window) &&
            !("MozWebSocket" in window)) {
            throw new RocApiException("This Browser does not support WebSockets");
        }
        if ((_a = this.options.host) === null || _a === void 0 ? void 0 : _a.startsWith(":"))
            this.options.host = location.hostname + this.options.host;
        console.info("RocApi starting on host ", this.options.host);
        const WebSocketClass = typeof window != "undefined" ? window.WebSocket : require("ws");
        __classPrivateFieldSet(this, _RocApi_ws, new WebSocketClass((this.options.use_ssl ? "wss" : "ws") + "://" + this.options.host), "f");
        __classPrivateFieldGet(this, _RocApi_ws, "f").onopen = __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_wsOnOpen).bind(this);
        __classPrivateFieldGet(this, _RocApi_ws, "f").onerror = __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_wsOnError).bind(this);
        __classPrivateFieldGet(this, _RocApi_ws, "f").onclose = __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_wsOnClose).bind(this);
        __classPrivateFieldGet(this, _RocApi_ws, "f").onmessage = __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_wsOnMessage).bind(this);
        // Force reconnection after 5s
        setTimeout(__classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_forceReconnection).bind(this), 5000);
    }
    /** Subscribe to a topic event and attach callback */
    on(event, callback) {
        // console.debug("Registering new callback for event ", event.toString());
        __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_subscribeTopic).call(this, event);
        this._eventTopicCallbacks[event].push(callback);
    }
    /** Subscribe to a topic event and attach callback */
    off(event, callback) {
        // console.debug("Unregistering callback for event ", event.toString());
        __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_unsubscribeTopic).call(this, event);
        const index = this._eventTopicCallbacks[event].indexOf(callback);
        if (index > -1) { // only splice array when item is found
            this._eventTopicCallbacks[event].splice(index, 1); // 2nd parameter means remove one item only
        }
    }
    /** Manually call a service via its ServiceOperationCode. Prefer direct method call for services */
    callService(operation, params) {
        this._sendOperation(operation, params);
        return new Promise((resolve, reject) => {
            this._serviceOperationCallbacks[operation].resolve = resolve;
            this._serviceOperationCallbacks[operation].reject = reject;
        });
    }
    /** Manually call a service via its ActionOperationCode. Prefer direct method call for actions */
    callAction(operation, params, feedback_cb) {
        this._sendOperation(operation, params);
        if (feedback_cb) {
            this._eventFeedbackCallbacks[actions_1.actionFeedbackCode[operation]] = feedback_cb;
        }
        return new Promise((resolve, reject) => {
            this._actionOperationCallbacks[operation].resolve = resolve;
            this._actionOperationCallbacks[operation].reject = reject;
        });
    }
}
exports.RocApi = RocApi;
_RocApi_defaultOptions = new WeakMap(), _RocApi_ws = new WeakMap(), _RocApi_wsstate = new WeakMap(), _RocApi_timeoutRetryConnection = new WeakMap(), _RocApi_fragmentedMessages = new WeakMap(), _RocApi_instances = new WeakSet(), _RocApi_wsOnOpen = function _RocApi_wsOnOpen() {
    // console.debug("RocApi websocket opened");
    __classPrivateFieldSet(this, _RocApi_wsstate, WebSocketState.OPENED, "f");
    __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_throw).call(this, events_1.TopicEventCode.VehicleConnectionOpen);
    if (this.options.api_key) {
        this._sendOperation(services_1.ServiceOperationCode.Login, { "api_key": this.options.api_key });
    }
    else if (this.options.module_key) {
        this._sendOperation(services_1.ServiceOperationCode.AuthModule, this.options.module_key);
    }
}, _RocApi_wsOnError = function _RocApi_wsOnError() {
    console.warn("RocApi websocket error");
    __classPrivateFieldSet(this, _RocApi_wsstate, WebSocketState.ERROR, "f");
    this.subscribed = [];
    __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_throw).call(this, events_1.TopicEventCode.VehicleConnectionError);
    if (__classPrivateFieldGet(this, _RocApi_timeoutRetryConnection, "f") == null)
        __classPrivateFieldSet(this, _RocApi_timeoutRetryConnection, setTimeout(this.start.bind(this), 1000), "f");
}, _RocApi_wsOnClose = function _RocApi_wsOnClose() {
    console.warn("RocApi websocket closed");
    __classPrivateFieldSet(this, _RocApi_wsstate, WebSocketState.ERROR, "f");
    this.subscribed = [];
    __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_throw).call(this, events_1.TopicEventCode.VehicleConnectionClose);
    if (__classPrivateFieldGet(this, _RocApi_timeoutRetryConnection, "f") == null)
        __classPrivateFieldSet(this, _RocApi_timeoutRetryConnection, setTimeout(this.start.bind(this), 1000), "f");
}, _RocApi_forceReconnection = function _RocApi_forceReconnection() {
    if (!__classPrivateFieldGet(this, _RocApi_ws, "f") ||
        (__classPrivateFieldGet(this, _RocApi_wsstate, "f") != WebSocketState.OPENED &&
            __classPrivateFieldGet(this, _RocApi_wsstate, "f") != WebSocketState.AUTHENTIFIED)) {
        console.warn("RocApi force reconnection");
        if (__classPrivateFieldGet(this, _RocApi_ws, "f"))
            __classPrivateFieldGet(this, _RocApi_ws, "f").close();
        if (__classPrivateFieldGet(this, _RocApi_timeoutRetryConnection, "f") == null)
            __classPrivateFieldSet(this, _RocApi_timeoutRetryConnection, setTimeout(this.start.bind(this), 1000), "f");
    }
}, _RocApi_wsOnMessage = function _RocApi_wsOnMessage(e) {
    const msg_raw = e.data;
    if (msg_raw == "ack")
        return;
    const msg = JSON.parse(msg_raw);
    __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_processMessage).call(this, msg);
}, _RocApi_throw = function _RocApi_throw(event_code, data = null) {
    __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_processMessage).call(this, {
        event_code: event_code,
        data: data,
    });
}, _RocApi_processMessage = function _RocApi_processMessage(msg) {
    var _a;
    if ("outcome" in msg && msg.outcome != outcomes_1.OutcomeCode.NO_ERROR) {
        console.warn("Got error outcome: ", outcomes_1.OutcomeCodeDescription[msg.outcome], msg);
    }
    if ("data" in msg &&
        msg.data != null &&
        msg.data.is_fragmented != undefined &&
        msg.data.is_fragmented) {
        // Send ack
        (_a = __classPrivateFieldGet(this, _RocApi_ws, "f")) === null || _a === void 0 ? void 0 : _a.send("ack_fragmented");
        let message_id = "";
        if ("op_code" in msg) {
            message_id = "op_" + msg.op_code;
            __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_processMessage).call(this, {
                event_code: events_1.TopicEventCode.ReceivedFragmentedMessage,
                outcome: outcomes_1.OutcomeCode.NO_ERROR,
                data: {
                    op_code: msg.op_code,
                    index: msg.data.index_fragment,
                    nb: msg.data.nb_fragment,
                },
            });
        }
        else {
            message_id = "event_" + msg.event_code;
        }
        if (msg.data.index_fragment == 1) {
            __classPrivateFieldGet(this, _RocApi_fragmentedMessages, "f")[message_id] = msg.data.fragment;
        }
        else {
            __classPrivateFieldGet(this, _RocApi_fragmentedMessages, "f")[message_id] += msg.data.fragment;
        }
        if (msg.data.index_fragment == msg.data.nb_fragment) {
            msg.data = JSON.parse(__classPrivateFieldGet(this, _RocApi_fragmentedMessages, "f")[message_id]);
        }
        else {
            return;
        }
    }
    // console.debug("Processing ", msg);
    if ("op_code" in msg) {
        switch (msg.op_code) {
            case services_1.ServiceOperationCode.Sink:
            case services_1.ServiceOperationCode.SetUseFragmentedMessage:
                break;
            case services_1.ServiceOperationCode.Logout:
                this._unsubscribeTopics();
                break;
            case services_1.ServiceOperationCode.AuthSession:
                if (msg.outcome == outcomes_1.OutcomeCode.NO_ERROR) {
                    if ("data" in msg)
                        __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_throw).call(this, events_1.TopicEventCode.AuthOK, msg.data);
                    else
                        __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_throw).call(this, events_1.TopicEventCode.AuthOK);
                }
            case services_1.ServiceOperationCode.AuthModule:
                if (msg.outcome == outcomes_1.OutcomeCode.NO_ERROR) {
                    __classPrivateFieldSet(this, _RocApi_wsstate, WebSocketState.AUTHENTIFIED, "f");
                    this._sendOperation(services_1.ServiceOperationCode.SetUseFragmentedMessage, true);
                    this.refreshTopicsSubscription();
                }
                else {
                    if (msg.op_code == services_1.ServiceOperationCode.AuthModule &&
                        this.options.module_key &&
                        this.options.crypted_module_file &&
                        this.options.crypted_module_file != "") {
                        this._sendOperation(actions_1.ActionOperationCode.InstallModule, {
                            api_key: this.options.module_key,
                            crypted_module_file: this.options.crypted_module_file,
                        });
                    }
                    else {
                        __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_throw).call(this, events_1.TopicEventCode.AuthError);
                        console.warn("Error in authentication", msg);
                    }
                }
                break;
            case services_1.ServiceOperationCode.Unsubscribe:
            case services_1.ServiceOperationCode.UnsubscribeAll:
                break;
            case services_1.ServiceOperationCode.Subscribe:
                if (msg.outcome == outcomes_1.OutcomeCode.NO_ERROR &&
                    "data" in msg &&
                    msg.data.data != undefined) {
                    // Transform service response in message event
                    const new_msg = {
                        event_code: msg.data.event_code,
                        data: msg.data.data,
                    };
                    __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_processMessage).call(this, new_msg);
                }
                break;
            case services_1.ServiceOperationCode.Login:
                if (msg.outcome == outcomes_1.OutcomeCode.NO_ERROR) {
                    this._sendOperation(services_1.ServiceOperationCode.AuthSession, msg.data.token);
                }
            default:
                if (msg.op_code in
                    this._serviceOperationCallbacks) {
                    /* Service response -> we resolve/reject callback depending on outcome */
                    const op_cb = this._serviceOperationCallbacks[msg.op_code];
                    if (op_cb != undefined && (op_cb === null || op_cb === void 0 ? void 0 : op_cb.reject) && (op_cb === null || op_cb === void 0 ? void 0 : op_cb.resolve)) {
                        if (msg.outcome == outcomes_1.OutcomeCode.NO_ERROR) {
                            // console.debug("Resolving service call", msg);
                            op_cb.resolve("data" in msg ? msg.data : null);
                        }
                        else {
                            op_cb.reject(msg);
                            // console.debug("Rejecting service call", msg);
                        }
                    }
                    else {
                        console.warn("Unexpected service response: ", msg);
                    }
                }
                else if (Object.values(actions_1.ActionOperationCode).includes(msg.op_code)) {
                    /* Action response -> we reject callback depending on outcome and register event callbacks for feedback/responses */
                    const op_cb = this._actionOperationCallbacks[msg.op_code];
                    if (op_cb != undefined && (op_cb === null || op_cb === void 0 ? void 0 : op_cb.reject) && (op_cb === null || op_cb === void 0 ? void 0 : op_cb.resolve)) {
                        if (msg.outcome == outcomes_1.OutcomeCode.NO_ERROR) {
                            const feedbackCode = actions_1.actionFeedbackCode[msg.op_code];
                            const resultCode = actions_1.actionResultCode[msg.op_code];
                            const promise = new Promise((resolve, reject) => {
                                this._eventResultCallbacks[resultCode].resolve = (value) => {
                                    /* Empty feedback cb for this action */
                                    this._eventFeedbackCallbacks[feedbackCode] = undefined;
                                    /* Resolve cb */
                                    resolve(value);
                                };
                                this._eventResultCallbacks[resultCode].reject = reject;
                            });
                            op_cb === null || op_cb === void 0 ? void 0 : op_cb.resolve({
                                promise: promise,
                            });
                            /* console.debug(
                              "Resolving action call with another promise",
                              msg
                            );*/
                        }
                        else {
                            op_cb.reject(msg);
                            // console.debug("Rejecting action call", msg);
                        }
                    }
                    else {
                        console.warn("Unexpected action response: ", msg);
                    }
                }
                break;
        }
    }
    else if ("event_code" in msg) {
        if (Object.values(events_1.ResultEventCode).includes(msg.event_code) ||
            msg.event_code in this._eventResultCallbacks) {
            const result_msg = msg.data; /* op_code is not set in event */
            if (msg.event_code == events_1.ResultEventCode.InstallModuleResult) {
                if (result_msg.outcome == outcomes_1.OutcomeCode.NO_ERROR) {
                    this._sendOperation(services_1.ServiceOperationCode.AuthModule, this.options.module_key);
                    return;
                }
                else {
                    __classPrivateFieldGet(this, _RocApi_instances, "m", _RocApi_throw).call(this, events_1.TopicEventCode.AuthError);
                }
            }
            else {
                const cb = this._eventResultCallbacks[msg.event_code];
                if (cb) {
                    if (result_msg.outcome == outcomes_1.OutcomeCode.NO_ERROR) {
                        if (cb.resolve) {
                            cb.resolve("data" in result_msg ? result_msg.data : null);
                            // console.debug("Resolving action result promise", result_msg);
                        }
                    }
                    else {
                        if (cb.reject) {
                            cb.reject(result_msg);
                            // console.debug("Rejecting action result promise", result_msg);
                        }
                    }
                }
            }
        }
        else if (msg.event_code in this._eventFeedbackCallbacks) {
            const cb = this._eventFeedbackCallbacks[msg.event_code];
            if (cb) {
                // console.debug("Resolving action feedback promise", msg);
                cb("data" in msg ? msg.data : null);
            }
        }
        else {
            for (const event_callback of this._eventTopicCallbacks[msg.event_code] || []) {
                // console.debug("Calling cb for event", event_callback, msg);
                event_callback("data" in msg ? msg.data : null);
            }
        }
    }
}, _RocApi_subscribeTopic = function _RocApi_subscribeTopic(event) {
    if (__classPrivateFieldGet(this, _RocApi_wsstate, "f") != WebSocketState.AUTHENTIFIED)
        return false;
    if (event < 0)
        return true;
    try {
        if (!this.subscribed.includes(event)) {
            console.debug("Subscribing to ", event.toString());
            this._sendOperation(services_1.ServiceOperationCode.Subscribe, event);
            this.subscribed.push(event);
        }
    }
    catch (e) {
        // console.debug("Unable to subscribe for now");
        return false;
    }
    return true;
}, _RocApi_unsubscribeTopic = function _RocApi_unsubscribeTopic(event) {
    if (__classPrivateFieldGet(this, _RocApi_wsstate, "f") != WebSocketState.AUTHENTIFIED)
        return false;
    if (event < 0)
        return true;
    try {
        if (this.subscribed.includes(event)) {
            console.debug("Unsubscribing to ", event.toString());
            this._sendOperation(services_1.ServiceOperationCode.Unsubscribe, event);
            const index = this.subscribed.indexOf(event);
            if (index > -1) { // only splice array when item is found
                this.subscribed.splice(index, 1); // 2nd parameter means remove one item only
            }
        }
    }
    catch (e) {
        // console.debug("Unable to unsubscribe for now");
        return false;
    }
    return true;
};
applyMixins(RocApi, [actions_1.ActionsMixin, services_1.ServicesMixin]);
function applyMixins(derivedCtor, constructors) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
}
