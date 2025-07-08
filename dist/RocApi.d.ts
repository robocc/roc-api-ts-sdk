import { ActionOperationCode, ActionPromiseCallbacks, ActionsMixin, ActionParamsType, ActionFeedbackType, ActionResultType } from "./actions";
import { EventCallback, EventDataType, EventResultPromiseCallbacks, FeedbackEventCode, ResultEventCode, TopicEventCode } from "./events";
import { ServiceOperationCode, ServiceParamsType, ServicePromiseCallbacks, ServiceResultType, ServicesMixin } from "./services";
import { BaseAPI } from "./types";
export interface RocApiOptions {
    host: string;
    use_ssl: boolean;
    api_key?: string;
    module_key?: string;
    crypted_module_file?: string;
}
export declare class RocApi extends BaseAPI {
    #private;
    options: RocApiOptions;
    protected subscribed: TopicEventCode[];
    protected _serviceOperationCallbacks: {
        [op in ServiceOperationCode]: ServicePromiseCallbacks;
    };
    protected _actionOperationCallbacks: {
        [op in ActionOperationCode]: ActionPromiseCallbacks;
    };
    protected _eventTopicCallbacks: {
        [ev in TopicEventCode]: EventCallback<any>[];
    };
    protected _eventResultCallbacks: {
        [ev in ResultEventCode]: EventResultPromiseCallbacks;
    };
    protected _eventFeedbackCallbacks: {
        [ev in FeedbackEventCode]: EventCallback<any> | undefined;
    };
    constructor(options: RocApiOptions);
    protected _sendOperation(op_code: ServiceOperationCode | ActionOperationCode, params: any): void;
    protected _subscribeTopics(): void;
    /** Start RocApi */
    start(): void;
    /** Subscribe to a topic event and attach callback */
    on<T extends TopicEventCode>(event: T, callback: EventCallback<EventDataType[T]>): void;
    /** Subscribe to a topic event and attach callback */
    off<T extends TopicEventCode>(event: T, callback: EventCallback<EventDataType[T]>): void;
    /** Manually call a service via its ServiceOperationCode. Prefer direct method call for services */
    callService<T extends ServiceOperationCode>(operation: T, params: ServiceParamsType[T]): Promise<ServiceResultType[T]>;
    /** Manually call a service via its ActionOperationCode. Prefer direct method call for actions */
    callAction<T extends ActionOperationCode>(operation: T, params: ActionParamsType[T], feedback_cb?: EventCallback<ActionFeedbackType[T]>): Promise<{
        promise: Promise<ActionResultType[T]>;
    }>;
}
export interface RocApi extends ActionsMixin, ServicesMixin {
}
