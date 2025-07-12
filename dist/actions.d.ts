import { ResultEventCode, FeedbackEventCode, EventCallback } from "./events";
import { OutcomeCode } from "./outcomes";
import { DeepRequired, BaseAPI } from "./types";
import { Map, Marker, WifiAp, VehToPoseParams, VehToPoseFeedback, VehToChargingStationParams, VehToChargingStationFeedback, VehToChargingStationApproachParams, VehToChargingStationApproachFeedback, VehToDockedPoseParams, VehToDockedPoseFeedback, VehToDockedPoseApproachParams, VehToDockedPoseApproachFeedback, VehToSavedPoseParams, VehToSavedPoseFeedback, VehToSegmentParams, VehToSegmentFeedback, SetVehiclePoseParams, SetVehiclePoseFeedback, SetMapFeedback, SetActiveMapFeedback, GetMarkersFeedback, InstallModuleParams, InstallModuleFeedback, DisableModuleFeedback, RecoveryFeedback, ResetDatabaseFeedback, GetPathParams, GetPathResult, GetPathFeedback, MappingStartParams, MappingStartFeedback, MappingStopFeedback, EraseActiveMapParams, EraseActiveMapFeedback, ReloadMapFeedback, MergeMapsParams, MergeMapsFeedback, NetworkWanConfigParams } from "./types";
import { PoseReference } from "./types";
/** @internal */
export declare enum ActionOperationCode {
    /**
      * **Veh to pose**
      *
      * Ask vehicle to move to the given pose 🎯
      * @group Navigation
      * @category Navigation
      
      */
    VehToPose = 14,
    /**
      * **Veh to charging station**
      *
      * Ask vehicle to move to given uuid charging_station. Set -1 for preferred charging station
      * @group Navigation
      * @category Navigation
      
      */
    VehToChargingStation = 31,
    /**
      * **Veh to charging station approach**
      *
      * Ask vehicle to move to given uuid charging_station approach. Set -1 for preferred charging station
      * @group Navigation
      * @category Navigation
      
      */
    VehToChargingStationApproach = 119,
    /**
      * **Veh to docked pose**
      *
      * Ask vehicle to move and dock to given uuid docked pose
      * @group Navigation
      * @category Navigation
      
      */
    VehToDockedPose = 107,
    /**
      * **Veh to docked pose approach**
      *
      * Ask vehicle to move to given uuid docked pose approach
      * @group Navigation
      * @category Navigation
      
      */
    VehToDockedPoseApproach = 120,
    /**
      * **Veh to saved pose**
      *
      * Ask vehicle to move to given uuid saved pose
      * @group Navigation
      * @category Navigation
      
      */
    VehToSavedPose = 32,
    /**
      * **Nav segment**
      *
      * Ask vehicle to move straight between two poses ↗️
      * @group Navigation
      * @category Navigation
      
      */
    VehToSegment = 117,
    /**
      * **Set vehicle pose**
      *
      * Indicate to the vehicle where it's located on the map. Can be used if the vehicle lost its localization, although relocation via docked pose or charging station provides better accuracy. Navigation will be started if needed 🎯
      * @group Navigation
      * @category Navigation
      
      */
    SetVehiclePose = 90,
    /**
      * **Set map**
      *
      * Set map by giving all its attributes and elements. Set id to -1 to create a new element, omit some attributes to not change them 🗺️
      * @group Map
      * @category Map management
      
      */
    SetMap = 20,
    /**
      * **Set active map**
      *
      * Set given ID map as active vehicle's map. It will also change active site if different than current 🗺️
      * @group Map
      * @category Map management
      
      */
    SetActiveMap = 29,
    /**
      * **Undock**
      *
      * Undock the vehicle from a docked pose or a charging station
      * @group Navigation
      * @category Docking
      
      */
    Undock = 34,
    /**
      * **Undock from shelf**
      *
      * Undock the vehicle from a shelf
      * @group Navigation
      * @category Docking
      
      */
    UndockFromShelf = 128,
    /**
      * **Get markers around the vehicle**
      *
      * Get markers visible by the vehicle at its current position 🚨
      * @group Map
      * @category Marker
      
      */
    GetMarkers = 36,
    /**
      * **Install module**
      *
      * Install module from module file and API key 🛠
      * @group Module
      * @category Module
      
      */
    InstallModule = 41,
    /**
      * **Disable module**
      *
      * Disable active module, it will be forced to authenticate itself again ⛔
      * @group Module
      * @category Module
      
      */
    DisableModule = 43,
    /**
      * **Recovery**
      *
      * Start the recovery process, vehicle will scan for markers around it, and set its position correctly from a known marker in map 🔍
      * @group Navigation
      * @category Recovery
      
      */
    Recovery = 46,
    /**
      * **Reset database**
      *
      * Reset all the database 🗑
      * @group Database
      * @category Database
      
      */
    ResetDatabase = 109,
    /**
      * **Get path**
      *
      * Ask vehicle for the path between start and target pose. If start pose is not provided, current vehicle pose will be used instead
      * @group Navigation
      * @category Navigation
      
      */
    GetPath = 50,
    /**
      * **Start mapping**
      *
      * Start a mapping from a given site ID and map name to save it at the end of the process ▶️
      * @group Mapping
      * @category Mapping
      
      */
    MappingStart = 52,
    /**
      * **Stop mapping**
      *
      * Stop mapping and save the created map if save_map is true ⏹
      * @group Mapping
      * @category Mapping
      
      */
    MappingStop = 53,
    /**
      * **Erase active map**
      *
      * Apply eraser polygons on the current map
      * @group Map
      * @category Eraser
      
      */
    EraseActiveMap = 70,
    /**
      * **Reload map**
      *
      * Reload current map
      * @group Map
      * @category Map management
      * @internal
      */
    ReloadMap = 71,
    /**
      * **Merge maps**
      *
      * Merge maps
      * @group Map
      * @category Map management
      
      */
    MergeMaps = 137,
    /**
      * **WAN network configuration**
      *
      * Set wifi and IP configuration for WAN network 🌐
      * @group Vehicle
      * @category Network
      
      */
    NetworkWanConfig = 77,
    /**
      * **WAN network enable**
      *
      * Enable or disable WAN network 🌐
      * @group Vehicle
      * @category Network
      
      */
    NetworkWanEnable = 78,
    /**
      * **Hotspot enable**
      *
      * Enable or disable vehicle emitted hotspot 🛜
      * @group Vehicle
      * @category Network
      
      */
    NetworkHotspotEnable = 82,
    /**
      * **WAN scan APs**
      *
      * Start scan and list all detected Wi-Fi access points by the vehicle. Can take up to 10 seconds 🛜
      * @group Vehicle
      * @category Network
      
      */
    NetworkWanScanAps = 79
}
/** @internal */
export declare const actionResultCode: {
    14: ResultEventCode;
    31: ResultEventCode;
    119: ResultEventCode;
    107: ResultEventCode;
    120: ResultEventCode;
    32: ResultEventCode;
    117: ResultEventCode;
    90: ResultEventCode;
    20: ResultEventCode;
    29: ResultEventCode;
    34: ResultEventCode;
    128: ResultEventCode;
    36: ResultEventCode;
    41: ResultEventCode;
    43: ResultEventCode;
    46: ResultEventCode;
    109: ResultEventCode;
    50: ResultEventCode;
    52: ResultEventCode;
    53: ResultEventCode;
    70: ResultEventCode;
    71: ResultEventCode;
    137: ResultEventCode;
    77: ResultEventCode;
    78: ResultEventCode;
    82: ResultEventCode;
    79: ResultEventCode;
};
/** @internal */
export declare const actionFeedbackCode: {
    14: FeedbackEventCode;
    31: FeedbackEventCode;
    119: FeedbackEventCode;
    107: FeedbackEventCode;
    120: FeedbackEventCode;
    32: FeedbackEventCode;
    117: FeedbackEventCode;
    90: FeedbackEventCode;
    20: FeedbackEventCode;
    29: FeedbackEventCode;
    34: FeedbackEventCode;
    128: FeedbackEventCode;
    36: FeedbackEventCode;
    41: FeedbackEventCode;
    43: FeedbackEventCode;
    46: FeedbackEventCode;
    109: FeedbackEventCode;
    50: FeedbackEventCode;
    52: FeedbackEventCode;
    53: FeedbackEventCode;
    70: FeedbackEventCode;
    71: FeedbackEventCode;
    137: FeedbackEventCode;
    77: FeedbackEventCode;
    78: FeedbackEventCode;
    82: FeedbackEventCode;
    79: FeedbackEventCode;
};
/** @internal */
export interface ActionOperationResponseMsgNoData {
    op_code: ActionOperationCode;
    outcome: OutcomeCode;
    message: string;
}
/** @internal */
export interface ActionOperationResponseMsgData<T> extends ActionOperationResponseMsgNoData {
    data: T;
}
/** @internal */
export type ActionOperationResponseMsg<T> = T extends null ? ActionOperationResponseMsgNoData : ActionOperationResponseMsgData<T>;
/** @internal */
export interface ActionPromiseCallbacks {
    resolve?: (value: {
        promise: Promise<any>;
    }) => void;
    reject?: (reason: ActionOperationResponseMsg<any>) => void;
}
/** @internal */
export declare const initActionOperationCallbacks: () => {
    14: {
        resolve: undefined;
        reject: undefined;
    };
    31: {
        resolve: undefined;
        reject: undefined;
    };
    119: {
        resolve: undefined;
        reject: undefined;
    };
    107: {
        resolve: undefined;
        reject: undefined;
    };
    120: {
        resolve: undefined;
        reject: undefined;
    };
    32: {
        resolve: undefined;
        reject: undefined;
    };
    117: {
        resolve: undefined;
        reject: undefined;
    };
    90: {
        resolve: undefined;
        reject: undefined;
    };
    20: {
        resolve: undefined;
        reject: undefined;
    };
    29: {
        resolve: undefined;
        reject: undefined;
    };
    34: {
        resolve: undefined;
        reject: undefined;
    };
    128: {
        resolve: undefined;
        reject: undefined;
    };
    36: {
        resolve: undefined;
        reject: undefined;
    };
    41: {
        resolve: undefined;
        reject: undefined;
    };
    43: {
        resolve: undefined;
        reject: undefined;
    };
    46: {
        resolve: undefined;
        reject: undefined;
    };
    109: {
        resolve: undefined;
        reject: undefined;
    };
    50: {
        resolve: undefined;
        reject: undefined;
    };
    52: {
        resolve: undefined;
        reject: undefined;
    };
    53: {
        resolve: undefined;
        reject: undefined;
    };
    70: {
        resolve: undefined;
        reject: undefined;
    };
    71: {
        resolve: undefined;
        reject: undefined;
    };
    137: {
        resolve: undefined;
        reject: undefined;
    };
    77: {
        resolve: undefined;
        reject: undefined;
    };
    78: {
        resolve: undefined;
        reject: undefined;
    };
    82: {
        resolve: undefined;
        reject: undefined;
    };
    79: {
        resolve: undefined;
        reject: undefined;
    };
};
/** @internal */
export type ActionParamsType = {
    [ActionOperationCode.VehToPose]: VehToPoseParams;
    [ActionOperationCode.VehToChargingStation]: VehToChargingStationParams;
    [ActionOperationCode.VehToChargingStationApproach]: VehToChargingStationApproachParams;
    [ActionOperationCode.VehToDockedPose]: VehToDockedPoseParams;
    [ActionOperationCode.VehToDockedPoseApproach]: VehToDockedPoseApproachParams;
    [ActionOperationCode.VehToSavedPose]: VehToSavedPoseParams;
    [ActionOperationCode.VehToSegment]: VehToSegmentParams;
    [ActionOperationCode.SetVehiclePose]: SetVehiclePoseParams;
    [ActionOperationCode.SetMap]: Map;
    [ActionOperationCode.SetActiveMap]: number;
    [ActionOperationCode.Undock]: boolean | undefined;
    [ActionOperationCode.UndockFromShelf]: number | undefined;
    [ActionOperationCode.GetMarkers]: PoseReference;
    [ActionOperationCode.InstallModule]: InstallModuleParams;
    [ActionOperationCode.DisableModule]: null;
    [ActionOperationCode.Recovery]: null;
    [ActionOperationCode.ResetDatabase]: null;
    [ActionOperationCode.GetPath]: GetPathParams;
    [ActionOperationCode.MappingStart]: MappingStartParams;
    [ActionOperationCode.MappingStop]: boolean;
    [ActionOperationCode.EraseActiveMap]: EraseActiveMapParams;
    [ActionOperationCode.ReloadMap]: null;
    [ActionOperationCode.MergeMaps]: MergeMapsParams;
    [ActionOperationCode.NetworkWanConfig]: NetworkWanConfigParams;
    [ActionOperationCode.NetworkWanEnable]: boolean;
    [ActionOperationCode.NetworkHotspotEnable]: boolean;
    [ActionOperationCode.NetworkWanScanAps]: null;
};
/** @internal */
export type ActionFeedbackType = {
    [ActionOperationCode.VehToPose]: DeepRequired<VehToPoseFeedback>;
    [ActionOperationCode.VehToChargingStation]: DeepRequired<VehToChargingStationFeedback>;
    [ActionOperationCode.VehToChargingStationApproach]: DeepRequired<VehToChargingStationApproachFeedback>;
    [ActionOperationCode.VehToDockedPose]: DeepRequired<VehToDockedPoseFeedback>;
    [ActionOperationCode.VehToDockedPoseApproach]: DeepRequired<VehToDockedPoseApproachFeedback>;
    [ActionOperationCode.VehToSavedPose]: DeepRequired<VehToSavedPoseFeedback>;
    [ActionOperationCode.VehToSegment]: DeepRequired<VehToSegmentFeedback>;
    [ActionOperationCode.SetVehiclePose]: DeepRequired<SetVehiclePoseFeedback>;
    [ActionOperationCode.SetMap]: DeepRequired<SetMapFeedback>;
    [ActionOperationCode.SetActiveMap]: DeepRequired<SetActiveMapFeedback>;
    [ActionOperationCode.Undock]: DeepRequired<string>;
    [ActionOperationCode.UndockFromShelf]: DeepRequired<string>;
    [ActionOperationCode.GetMarkers]: DeepRequired<GetMarkersFeedback>;
    [ActionOperationCode.InstallModule]: DeepRequired<InstallModuleFeedback>;
    [ActionOperationCode.DisableModule]: DeepRequired<DisableModuleFeedback>;
    [ActionOperationCode.Recovery]: DeepRequired<RecoveryFeedback>;
    [ActionOperationCode.ResetDatabase]: DeepRequired<ResetDatabaseFeedback>;
    [ActionOperationCode.GetPath]: DeepRequired<GetPathFeedback>;
    [ActionOperationCode.MappingStart]: DeepRequired<MappingStartFeedback>;
    [ActionOperationCode.MappingStop]: DeepRequired<MappingStopFeedback>;
    [ActionOperationCode.EraseActiveMap]: DeepRequired<EraseActiveMapFeedback>;
    [ActionOperationCode.ReloadMap]: DeepRequired<ReloadMapFeedback>;
    [ActionOperationCode.MergeMaps]: DeepRequired<MergeMapsFeedback>;
    [ActionOperationCode.NetworkWanConfig]: DeepRequired<null>;
    [ActionOperationCode.NetworkWanEnable]: DeepRequired<null>;
    [ActionOperationCode.NetworkHotspotEnable]: DeepRequired<null>;
    [ActionOperationCode.NetworkWanScanAps]: DeepRequired<WifiAp[]>;
};
/** @internal */
export type ActionResultType = {
    [ActionOperationCode.VehToPose]: DeepRequired<null>;
    [ActionOperationCode.VehToChargingStation]: DeepRequired<null>;
    [ActionOperationCode.VehToChargingStationApproach]: DeepRequired<null>;
    [ActionOperationCode.VehToDockedPose]: DeepRequired<null>;
    [ActionOperationCode.VehToDockedPoseApproach]: DeepRequired<null>;
    [ActionOperationCode.VehToSavedPose]: DeepRequired<null>;
    [ActionOperationCode.VehToSegment]: DeepRequired<null>;
    [ActionOperationCode.SetVehiclePose]: DeepRequired<null>;
    [ActionOperationCode.SetMap]: DeepRequired<number>;
    [ActionOperationCode.SetActiveMap]: DeepRequired<null>;
    [ActionOperationCode.Undock]: DeepRequired<null>;
    [ActionOperationCode.UndockFromShelf]: DeepRequired<null>;
    [ActionOperationCode.GetMarkers]: DeepRequired<Marker[]>;
    [ActionOperationCode.InstallModule]: DeepRequired<null>;
    [ActionOperationCode.DisableModule]: DeepRequired<null>;
    [ActionOperationCode.Recovery]: DeepRequired<null>;
    [ActionOperationCode.ResetDatabase]: DeepRequired<null>;
    [ActionOperationCode.GetPath]: DeepRequired<GetPathResult>;
    [ActionOperationCode.MappingStart]: DeepRequired<null>;
    [ActionOperationCode.MappingStop]: DeepRequired<number>;
    [ActionOperationCode.EraseActiveMap]: DeepRequired<null>;
    [ActionOperationCode.ReloadMap]: DeepRequired<null>;
    [ActionOperationCode.MergeMaps]: DeepRequired<null>;
    [ActionOperationCode.NetworkWanConfig]: DeepRequired<null>;
    [ActionOperationCode.NetworkWanEnable]: DeepRequired<null>;
    [ActionOperationCode.NetworkHotspotEnable]: DeepRequired<null>;
    [ActionOperationCode.NetworkWanScanAps]: DeepRequired<WifiAp[]>;
};
/** @internal */
export declare abstract class ActionsMixin extends BaseAPI {
    /**
    * **Veh to pose**
    *
    * Ask vehicle to move to the given pose 🎯
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_pose_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#VehToPose RoboccDocs} for further information
    */
    VehToPose(veh_to_pose_params: VehToPoseParams, feedback_cb?: EventCallback<VehToPoseFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Veh to charging station**
    *
    * Ask vehicle to move to given uuid charging_station. Set -1 for preferred charging station
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_charging_station_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#VehToChargingStation RoboccDocs} for further information
    */
    VehToChargingStation(veh_to_charging_station_params: VehToChargingStationParams, feedback_cb?: EventCallback<VehToChargingStationFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Veh to charging station approach**
    *
    * Ask vehicle to move to given uuid charging_station approach. Set -1 for preferred charging station
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_charging_station_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#VehToChargingStationApproach RoboccDocs} for further information
    */
    VehToChargingStationApproach(veh_to_charging_station_params: VehToChargingStationApproachParams, feedback_cb?: EventCallback<VehToChargingStationApproachFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Veh to docked pose**
    *
    * Ask vehicle to move and dock to given uuid docked pose
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_docked_pose_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#VehToDockedPose RoboccDocs} for further information
    */
    VehToDockedPose(veh_to_docked_pose_params: VehToDockedPoseParams, feedback_cb?: EventCallback<VehToDockedPoseFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Veh to docked pose approach**
    *
    * Ask vehicle to move to given uuid docked pose approach
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_docked_pose_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#VehToDockedPoseApproach RoboccDocs} for further information
    */
    VehToDockedPoseApproach(veh_to_docked_pose_params: VehToDockedPoseApproachParams, feedback_cb?: EventCallback<VehToDockedPoseApproachFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Veh to saved pose**
    *
    * Ask vehicle to move to given uuid saved pose
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_saved_pose_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#VehToSavedPose RoboccDocs} for further information
    */
    VehToSavedPose(veh_to_saved_pose_params: VehToSavedPoseParams, feedback_cb?: EventCallback<VehToSavedPoseFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Nav segment**
    *
    * Ask vehicle to move straight between two poses ↗️
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_segment_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#VehToSegment RoboccDocs} for further information
    */
    VehToSegment(veh_to_segment_params: VehToSegmentParams, feedback_cb?: EventCallback<VehToSegmentFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Set vehicle pose**
    *
    * Indicate to the vehicle where it's located on the map. Can be used if the vehicle lost its localization, although relocation via docked pose or charging station provides better accuracy. Navigation will be started if needed 🎯
    * @category Navigation
    * @group Navigation
    
    * @param set_vehicle_pose_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#SetVehiclePose RoboccDocs} for further information
    */
    SetVehiclePose(set_vehicle_pose_params: SetVehiclePoseParams, feedback_cb?: EventCallback<SetVehiclePoseFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Set map**
    *
    * Set map by giving all its attributes and elements. Set id to -1 to create a new element, omit some attributes to not change them 🗺️
    * @category Map management
    * @group Map
    
    * @param map Map object
    * @param feedback_cb - Feedback callback of action
    
    * @data Promise<{@link number}>
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#SetMap RoboccDocs} for further information
    */
    SetMap(map: Map, feedback_cb?: EventCallback<SetMapFeedback>): Promise<{
        promise: Promise<number>;
    }>;
    /**
    * **Set active map**
    *
    * Set given ID map as active vehicle's map. It will also change active site if different than current 🗺️
    * @category Map management
    * @group Map
    
    * @param map_id Id of map
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#SetActiveMap RoboccDocs} for further information
    */
    SetActiveMap(map_id: number, feedback_cb?: EventCallback<SetActiveMapFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Undock**
    *
    * Undock the vehicle from a docked pose or a charging station
    * @category Docking
    * @group Navigation
    
    * @param override_battery_safety Override battery safety
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#Undock RoboccDocs} for further information
    */
    Undock(override_battery_safety?: boolean, feedback_cb?: EventCallback<string>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Undock from shelf**
    *
    * Undock the vehicle from a shelf
    * @category Docking
    * @group Navigation
    
    * @param d Undock distance
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#UndockFromShelf RoboccDocs} for further information
    */
    UndockFromShelf(d?: number, feedback_cb?: EventCallback<string>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Get markers around the vehicle**
    *
    * Get markers visible by the vehicle at its current position 🚨
    * @category Marker
    * @group Map
    
    * @param pose_reference Reference
    * @param feedback_cb - Feedback callback of action
    
    * @data Promise<{@link Marker}[]>
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#GetMarkers RoboccDocs} for further information
    */
    GetMarkers(pose_reference: PoseReference, feedback_cb?: EventCallback<GetMarkersFeedback>): Promise<{
        promise: Promise<DeepRequired<Marker>[]>;
    }>;
    /**
    * **Install module**
    *
    * Install module from module file and API key 🛠
    * @category Module
    * @group Module
    
    * @param module_data Module data
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#InstallModule RoboccDocs} for further information
    */
    InstallModule(module_data: InstallModuleParams, feedback_cb?: EventCallback<InstallModuleFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Disable module**
    *
    * Disable active module, it will be forced to authenticate itself again ⛔
    * @category Module
    * @group Module
    
    
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#DisableModule RoboccDocs} for further information
    */
    DisableModule(feedback_cb?: EventCallback<DisableModuleFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Recovery**
    *
    * Start the recovery process, vehicle will scan for markers around it, and set its position correctly from a known marker in map 🔍
    * @category Recovery
    * @group Navigation
    
    
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#Recovery RoboccDocs} for further information
    */
    Recovery(feedback_cb?: EventCallback<RecoveryFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Reset database**
    *
    * Reset all the database 🗑
    * @category Database
    * @group Database
    
    
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#ResetDatabase RoboccDocs} for further information
    */
    ResetDatabase(feedback_cb?: EventCallback<ResetDatabaseFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Get path**
    *
    * Ask vehicle for the path between start and target pose. If start pose is not provided, current vehicle pose will be used instead
    * @category Navigation
    * @group Navigation
    
    * @param get_path_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    * @data Promise<{@link GetPathResult}>
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#GetPath RoboccDocs} for further information
    */
    GetPath(get_path_params: GetPathParams, feedback_cb?: EventCallback<GetPathFeedback>): Promise<{
        promise: Promise<DeepRequired<GetPathResult>>;
    }>;
    /**
    * **Start mapping**
    *
    * Start a mapping from a given site ID and map name to save it at the end of the process ▶️
    * @category Mapping
    * @group Mapping
    
    * @param mapping_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#MappingStart RoboccDocs} for further information
    */
    MappingStart(mapping_params: MappingStartParams, feedback_cb?: EventCallback<MappingStartFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Stop mapping**
    *
    * Stop mapping and save the created map if save_map is true ⏹
    * @category Mapping
    * @group Mapping
    
    * @param save_map Save mapping
    * @param feedback_cb - Feedback callback of action
    
    * @data Promise<{@link number}>
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#MappingStop RoboccDocs} for further information
    */
    MappingStop(save_map: boolean, feedback_cb?: EventCallback<MappingStopFeedback>): Promise<{
        promise: Promise<number>;
    }>;
    /**
    * **Erase active map**
    *
    * Apply eraser polygons on the current map
    * @category Eraser
    * @group Map
    
    * @param erase_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#EraseActiveMap RoboccDocs} for further information
    */
    EraseActiveMap(erase_params: EraseActiveMapParams, feedback_cb?: EventCallback<EraseActiveMapFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Reload map**
    *
    * Reload current map
    * @category Map management
    * @group Map
    * @internal
    
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#ReloadMap RoboccDocs} for further information
    */
    ReloadMap(feedback_cb?: EventCallback<ReloadMapFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Merge maps**
    *
    * Merge maps
    * @category Map management
    * @group Map
    
    * @param d Parameters for merge maps
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#MergeMaps RoboccDocs} for further information
    */
    MergeMaps(d: MergeMapsParams, feedback_cb?: EventCallback<MergeMapsFeedback>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **WAN network configuration**
    *
    * Set wifi and IP configuration for WAN network 🌐
    * @category Network
    * @group Vehicle
    
    * @param wan_config Parameters for WAN configuration
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#NetworkWanConfig RoboccDocs} for further information
    */
    NetworkWanConfig(wan_config: NetworkWanConfigParams, feedback_cb?: EventCallback<null>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **WAN network enable**
    *
    * Enable or disable WAN network 🌐
    * @category Network
    * @group Vehicle
    
    * @param enable Enable WAN connection
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#NetworkWanEnable RoboccDocs} for further information
    */
    NetworkWanEnable(enable: boolean, feedback_cb?: EventCallback<null>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **Hotspot enable**
    *
    * Enable or disable vehicle emitted hotspot 🛜
    * @category Network
    * @group Vehicle
    
    * @param enable Enable hotspot
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#NetworkHotspotEnable RoboccDocs} for further information
    */
    NetworkHotspotEnable(enable: boolean, feedback_cb?: EventCallback<null>): Promise<{
        promise: Promise<null>;
    }>;
    /**
    * **WAN scan APs**
    *
    * Start scan and list all detected Wi-Fi access points by the vehicle. Can take up to 10 seconds 🛜
    * @category Network
    * @group Vehicle
    
    
    * @param feedback_cb - Feedback callback of action
    
    * @data Promise<{@link WifiAp}[]>
    * @see {@link https://docs.robocc.com/roc-api-ts/8.19.7-selene-7/classes/RocApi.RocApi.html#NetworkWanScanAps RoboccDocs} for further information
    */
    NetworkWanScanAps(feedback_cb?: EventCallback<WifiAp[]>): Promise<{
        promise: Promise<DeepRequired<WifiAp>[]>;
    }>;
}
