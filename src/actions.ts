import { ResultEventCode, FeedbackEventCode, EventCallback } from "./events";
import { OutcomeCode } from "./outcomes";
import { DeepRequired, BaseAPI } from "./types";
import { Security,HumanInterventionRequired,LedCommand,Site,OngoingAction,SiteLight,SiteRaw,Map,MapRaw,MapElements,MapWithoutImages,RoutesGraph,RoutesVertex,RoutesEdge,RoutesSettings,Module,ModuleDescription,PortRedirection,ModuleConfiguration,MapLight,ForbiddenArea,CustomArea,SavedPose,Fiducial,ChargingStation,DockedPose,Marker,TeleopCmd,Pose,Position,BatteryState,User,MoveStep,DiagnosticElement,DiagnosticError,AutopilotConfig,AutopilotStepParamsMove,AutopilotStepParams,AutopilotStep,LedSoundAnimBehaviour,Areas,Behaviour,DockingState,SoundScenarioVolume,SoundScenarioSample,WifiAp,NetworkWanState,SystemInfo,RocSecurity,InvalidDataBySection,InvalidData,WaitingSound,EventSound,ExternalPortRedirection,LiftStatus,Group,SoftVersions,ControllerConstraint,MissionConfigDestination,MissionConfig,ButtonConfig,WaitingPose,LoraMessage,CustomCommand,ControllerLoraContact,ControllerLora,MapElementRestriction,DockedPoseConfig,RocMapElementConfig,ControllerLoraContactConfig,VehConfig,VehInfosStats,VehInfos,VehDelayConfig,ButtonInfos,ManagerMissions,Mission,DailyStats,MissionStep,InstallConfigDone,ResponseDeadlineConfig,Log,CompleteData,StatsData,ExportedStats,RocUser,TimelineStep,VehTimelineData,CallByButton,HirByType,DestByUuid,NbByOutcome,StandardStats,StandardStatsByUuid,HeatMapData,SlotHours,ModuleParams,ManagerMap,UpdateStatus,SubscribeResult,FollowMeParams,AuthUserResult,LoginParams,LoginResult,ImportSiteResult,ImportSoundsConfigResult,ExportSiteParams2,ExportSitesParams1Item,ExportSitesParams2SitesItem,ExportSitesParams2,ExportSitesResultItem,UpdateChargingStationConfigParams,UpdateDockedPoseConfigParams,SetUserParams,SetObtCbtParams,SetChargingStationResult,SetSavedPoseResult,SetDockedPoseResult,SetForbiddenAreaResult,SetCustomAreaResult,CheckPoseParams,Check3dBoxParamsPoint,Check3dBoxParamsMarker,Check3dBoxParams,Check3dBoxActionParamsPoint,Check3dBoxActionParamsMarker,Check3dBoxActionParams,Check3dBoxActionFeedback,SimAddShelfParams,SetCustomLedParams,SetCustomSoundParams,SimSetDiffDriveStateParams,SetModuleParamsParams,VehToPoseParamsProgressChecker,VehToPoseParams,VehToPoseFeedback,VehToChargingStationParams,VehToChargingStationFeedback,VehToChargingStationApproachParams,VehToChargingStationApproachFeedback,VehToDockedPoseParamsShelfParameters,VehToDockedPoseParams,VehToDockedPoseFeedback,VehToDockedPoseApproachParams,VehToDockedPoseApproachFeedback,VehToSavedPoseParamsSuccessParams,VehToSavedPoseParams,VehToSavedPoseFeedback,VehToSegmentParams,VehToSegmentFeedback,SetVehiclePoseParams,SetVehiclePoseFeedback,SetMapFeedback,SetActiveMapFeedback,GetMarkersFeedback,InstallModuleParams,InstallModuleFeedback,DisableModuleFeedback,RecoveryFeedback,ResetDatabaseFeedback,GetPathParams,GetPathResult,GetPathFeedback,MappingStartParams,MappingStartFeedback,MappingStopResult,MappingStopFeedback,EraseActiveMapParams,EraseActiveMapFeedback,ReloadMapFeedback,MergeMapsParams,MergeMapsFeedback,NetworkWanConfigParams,NetworkRedirectPortParams,SystemRestartParams,GenerateForbiddenAreasParams,GetShelvesParams,AddSoundParams,AddSoundFeedback,AddCallButtonParams,AddRestockingButtonParams,AddMultidestinationButtonParams,AddOrderedMultidestinationButtonParams,AddVehParams,AddPortRedirectionParams,UpdatePortRedirectionParams,DeletePortRedirectionParams,ControllerLoraSetContactConfigParams,NextStepMissionWithMessageParams,SetMultidestinationParams,SetMultidestinationWithMessagesParamsUuidsItem,SetMultidestinationWithMessagesParams,GetStatsParams,GetLightStatsParams,ExportStatsParams,GetVehsTimelineParams,AddRocUserParams,UpdateRocUserParams,CreateMissionParams,ExtendMissionParams,StartButtonMissionParams,FollowMeStatusEventData,SoundCommandEventData,VehicleDirectionEventData,MappingErrorEventData,SafetyDiagnosticEventData,VelocityEventData,VehToFeedbackEventData,UpdateStatusEventData } from "./types";
import { Path,MoveSequence,AutopilotSequence,SoundLoopNumber,OperatingHours } from "./types";
import { NetworkProtocol,MoveStepMoveType,DiagnosticElementType,DiagnosticElementError,DiagnosticCriticalLevel,AutopilotStepType,AutopilotTargetType,AutopilotOnError,Direction,OnOff,DirectionStrict,FollowMode,VehToDockedStepCode,DockingStatus,FollowMeStatus,DockingType,VehToStepCode,LedAnim,LedCornerAnim,PoseReference,NetworkType,NetworkStatus,NetworkGlobalStatus,SoundScenario,StopSource,ComputerType,McuType,MotorType,RocEvent,ContactState,DockedPoseStationType,LoraControllerCommand,ContactType,ContactNonc,ContactTrigger,RelayAction,VehStatus,ModuleType,VehDirection,MapElementType,AuthenticatedType,LogSeverity,LogType,UpdateStatusStatus,SetMapFeedbackCurrentStepCode,SetActiveMapFeedbackCurrentStepCode,InstallModuleFeedbackCurrentStepCode,DisableModuleFeedbackCurrentStepCode,ResetDatabaseFeedbackCurrentStepCode,MappingStopFeedbackCurrentStepCode,EraseActiveMapFeedbackCurrentStepCode,ReloadMapFeedbackCurrentStepCode,MergeMapsFeedbackCurrentStepCode,SystemRestartParamsStage,MappingErrorEventDataOutcome,AutopilotStepResultEventData,AutopilotStatusEventData,UpdateStatusEventDataStatus } from "./types";


/* Enums for all actions */
/** @internal */
export enum ActionOperationCode {
    /**
      * **Check 3D box**
      *
      * Check if a box is free 
      * @group Navigation
      * @category Navigation
      
      */
      Check3dBoxAction = 141,
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
      NetworkWanScanAps = 79,
    /**
      * **Generate forbidden areas**
      *
      * Automatically creates forbidden areas for the active map 
      * @group Map
      * @category Forbidden area
      
      */
      GenerateForbiddenAreas = 139,
    /**
      * **Add sound**
      *
      * Add new sound in library 
      * @group Database
      * @category Sound
      
      */
      AddSound = 147,
    
}

/* Lookup tables for feedback and results */
/** @internal */
export const actionResultCode = {
    [ActionOperationCode.Check3dBoxAction]: ResultEventCode.Check3dBoxActionResult,
    [ActionOperationCode.VehToPose]: ResultEventCode.VehToPoseResult,
    [ActionOperationCode.VehToChargingStation]: ResultEventCode.VehToChargingStationResult,
    [ActionOperationCode.VehToChargingStationApproach]: ResultEventCode.VehToChargingStationApproachResult,
    [ActionOperationCode.VehToDockedPose]: ResultEventCode.VehToDockedPoseResult,
    [ActionOperationCode.VehToDockedPoseApproach]: ResultEventCode.VehToDockedPoseApproachResult,
    [ActionOperationCode.VehToSavedPose]: ResultEventCode.VehToSavedPoseResult,
    [ActionOperationCode.VehToSegment]: ResultEventCode.VehToSegmentResult,
    [ActionOperationCode.SetVehiclePose]: ResultEventCode.SetVehiclePoseResult,
    [ActionOperationCode.SetMap]: ResultEventCode.SetMapResult,
    [ActionOperationCode.SetActiveMap]: ResultEventCode.SetActiveMapResult,
    [ActionOperationCode.Undock]: ResultEventCode.UndockResult,
    [ActionOperationCode.UndockFromShelf]: ResultEventCode.UndockFromShelfResult,
    [ActionOperationCode.GetMarkers]: ResultEventCode.GetMarkersResult,
    [ActionOperationCode.InstallModule]: ResultEventCode.InstallModuleResult,
    [ActionOperationCode.DisableModule]: ResultEventCode.DisableModuleResult,
    [ActionOperationCode.Recovery]: ResultEventCode.RecoveryResult,
    [ActionOperationCode.ResetDatabase]: ResultEventCode.ResetDatabaseResult,
    [ActionOperationCode.GetPath]: ResultEventCode.GetPathResult,
    [ActionOperationCode.MappingStart]: ResultEventCode.MappingStartResult,
    [ActionOperationCode.MappingStop]: ResultEventCode.MappingStopResult,
    [ActionOperationCode.EraseActiveMap]: ResultEventCode.EraseActiveMapResult,
    [ActionOperationCode.ReloadMap]: ResultEventCode.ReloadMapResult,
    [ActionOperationCode.MergeMaps]: ResultEventCode.MergeMapsResult,
    [ActionOperationCode.NetworkWanConfig]: ResultEventCode.NetworkWanConfigResult,
    [ActionOperationCode.NetworkWanEnable]: ResultEventCode.NetworkWanEnableResult,
    [ActionOperationCode.NetworkHotspotEnable]: ResultEventCode.NetworkHotspotEnableResult,
    [ActionOperationCode.NetworkWanScanAps]: ResultEventCode.NetworkWanScanApsResult,
    [ActionOperationCode.GenerateForbiddenAreas]: ResultEventCode.GenerateForbiddenAreasResult,
    [ActionOperationCode.AddSound]: ResultEventCode.AddSoundResult,
    
}
/** @internal */
export const actionFeedbackCode = {
    [ActionOperationCode.Check3dBoxAction]: FeedbackEventCode.Check3dBoxActionFeedback,
    [ActionOperationCode.VehToPose]: FeedbackEventCode.VehToPoseFeedback,
    [ActionOperationCode.VehToChargingStation]: FeedbackEventCode.VehToChargingStationFeedback,
    [ActionOperationCode.VehToChargingStationApproach]: FeedbackEventCode.VehToChargingStationApproachFeedback,
    [ActionOperationCode.VehToDockedPose]: FeedbackEventCode.VehToDockedPoseFeedback,
    [ActionOperationCode.VehToDockedPoseApproach]: FeedbackEventCode.VehToDockedPoseApproachFeedback,
    [ActionOperationCode.VehToSavedPose]: FeedbackEventCode.VehToSavedPoseFeedback,
    [ActionOperationCode.VehToSegment]: FeedbackEventCode.VehToSegmentFeedback,
    [ActionOperationCode.SetVehiclePose]: FeedbackEventCode.SetVehiclePoseFeedback,
    [ActionOperationCode.SetMap]: FeedbackEventCode.SetMapFeedback,
    [ActionOperationCode.SetActiveMap]: FeedbackEventCode.SetActiveMapFeedback,
    [ActionOperationCode.Undock]: FeedbackEventCode.UndockFeedback,
    [ActionOperationCode.UndockFromShelf]: FeedbackEventCode.UndockFromShelfFeedback,
    [ActionOperationCode.GetMarkers]: FeedbackEventCode.GetMarkersFeedback,
    [ActionOperationCode.InstallModule]: FeedbackEventCode.InstallModuleFeedback,
    [ActionOperationCode.DisableModule]: FeedbackEventCode.DisableModuleFeedback,
    [ActionOperationCode.Recovery]: FeedbackEventCode.RecoveryFeedback,
    [ActionOperationCode.ResetDatabase]: FeedbackEventCode.ResetDatabaseFeedback,
    [ActionOperationCode.GetPath]: FeedbackEventCode.GetPathFeedback,
    [ActionOperationCode.MappingStart]: FeedbackEventCode.MappingStartFeedback,
    [ActionOperationCode.MappingStop]: FeedbackEventCode.MappingStopFeedback,
    [ActionOperationCode.EraseActiveMap]: FeedbackEventCode.EraseActiveMapFeedback,
    [ActionOperationCode.ReloadMap]: FeedbackEventCode.ReloadMapFeedback,
    [ActionOperationCode.MergeMaps]: FeedbackEventCode.MergeMapsFeedback,
    [ActionOperationCode.NetworkWanConfig]: FeedbackEventCode.NetworkWanConfigFeedback,
    [ActionOperationCode.NetworkWanEnable]: FeedbackEventCode.NetworkWanEnableFeedback,
    [ActionOperationCode.NetworkHotspotEnable]: FeedbackEventCode.NetworkHotspotEnableFeedback,
    [ActionOperationCode.NetworkWanScanAps]: FeedbackEventCode.NetworkWanScanApsFeedback,
    [ActionOperationCode.GenerateForbiddenAreas]: FeedbackEventCode.GenerateForbiddenAreasFeedback,
    [ActionOperationCode.AddSound]: FeedbackEventCode.AddSoundFeedback,
    
}

/* Callbacks interfaces and init */
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
export type ActionOperationResponseMsg<T> = T extends null? ActionOperationResponseMsgNoData: ActionOperationResponseMsgData<T>;

/** @internal */
export interface ActionPromiseCallbacks {
    resolve?: (value: {
        promise: Promise<any>;
    }) => void;
    reject?: (reason: ActionOperationResponseMsg<any>) => void;
}
/** @internal */
export const initActionOperationCallbacks = () => ({
    [ActionOperationCode.Check3dBoxAction]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.VehToPose]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.VehToChargingStation]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.VehToChargingStationApproach]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.VehToDockedPose]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.VehToDockedPoseApproach]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.VehToSavedPose]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.VehToSegment]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.SetVehiclePose]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.SetMap]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.SetActiveMap]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.Undock]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.UndockFromShelf]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.GetMarkers]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.InstallModule]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.DisableModule]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.Recovery]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.ResetDatabase]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.GetPath]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.MappingStart]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.MappingStop]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.EraseActiveMap]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.ReloadMap]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.MergeMaps]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.NetworkWanConfig]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.NetworkWanEnable]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.NetworkHotspotEnable]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.NetworkWanScanAps]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.GenerateForbiddenAreas]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.AddSound]: { resolve: undefined, reject: undefined },
    
})

/* Param, feedback and results types */
/** @internal */
export type ActionParamsType = {
[ActionOperationCode.Check3dBoxAction]: Check3dBoxActionParams
[ActionOperationCode.VehToPose]: VehToPoseParams
[ActionOperationCode.VehToChargingStation]: VehToChargingStationParams
[ActionOperationCode.VehToChargingStationApproach]: VehToChargingStationApproachParams
[ActionOperationCode.VehToDockedPose]: VehToDockedPoseParams
[ActionOperationCode.VehToDockedPoseApproach]: VehToDockedPoseApproachParams
[ActionOperationCode.VehToSavedPose]: VehToSavedPoseParams
[ActionOperationCode.VehToSegment]: VehToSegmentParams
[ActionOperationCode.SetVehiclePose]: SetVehiclePoseParams
[ActionOperationCode.SetMap]: Map
[ActionOperationCode.SetActiveMap]: number
[ActionOperationCode.Undock]: boolean| undefined
[ActionOperationCode.UndockFromShelf]: number| undefined
[ActionOperationCode.GetMarkers]: PoseReference
[ActionOperationCode.InstallModule]: InstallModuleParams
[ActionOperationCode.DisableModule]: null
[ActionOperationCode.Recovery]: null
[ActionOperationCode.ResetDatabase]: null
[ActionOperationCode.GetPath]: GetPathParams
[ActionOperationCode.MappingStart]: MappingStartParams
[ActionOperationCode.MappingStop]: boolean
[ActionOperationCode.EraseActiveMap]: EraseActiveMapParams
[ActionOperationCode.ReloadMap]: null
[ActionOperationCode.MergeMaps]: MergeMapsParams
[ActionOperationCode.NetworkWanConfig]: NetworkWanConfigParams
[ActionOperationCode.NetworkWanEnable]: boolean
[ActionOperationCode.NetworkHotspotEnable]: boolean
[ActionOperationCode.NetworkWanScanAps]: null
[ActionOperationCode.GenerateForbiddenAreas]: GenerateForbiddenAreasParams
[ActionOperationCode.AddSound]: AddSoundParams
}

/** @internal */
export type ActionFeedbackType = {
[ActionOperationCode.Check3dBoxAction]: DeepRequired<Check3dBoxActionFeedback>
[ActionOperationCode.VehToPose]: DeepRequired<VehToPoseFeedback>
[ActionOperationCode.VehToChargingStation]: DeepRequired<VehToChargingStationFeedback>
[ActionOperationCode.VehToChargingStationApproach]: DeepRequired<VehToChargingStationApproachFeedback>
[ActionOperationCode.VehToDockedPose]: DeepRequired<VehToDockedPoseFeedback>
[ActionOperationCode.VehToDockedPoseApproach]: DeepRequired<VehToDockedPoseApproachFeedback>
[ActionOperationCode.VehToSavedPose]: DeepRequired<VehToSavedPoseFeedback>
[ActionOperationCode.VehToSegment]: DeepRequired<VehToSegmentFeedback>
[ActionOperationCode.SetVehiclePose]: DeepRequired<SetVehiclePoseFeedback>
[ActionOperationCode.SetMap]: DeepRequired<SetMapFeedback>
[ActionOperationCode.SetActiveMap]: DeepRequired<SetActiveMapFeedback>
[ActionOperationCode.Undock]: DeepRequired<string>
[ActionOperationCode.UndockFromShelf]: DeepRequired<string>
[ActionOperationCode.GetMarkers]: DeepRequired<GetMarkersFeedback>
[ActionOperationCode.InstallModule]: DeepRequired<InstallModuleFeedback>
[ActionOperationCode.DisableModule]: DeepRequired<DisableModuleFeedback>
[ActionOperationCode.Recovery]: DeepRequired<RecoveryFeedback>
[ActionOperationCode.ResetDatabase]: DeepRequired<ResetDatabaseFeedback>
[ActionOperationCode.GetPath]: DeepRequired<GetPathFeedback>
[ActionOperationCode.MappingStart]: DeepRequired<MappingStartFeedback>
[ActionOperationCode.MappingStop]: DeepRequired<MappingStopFeedback>
[ActionOperationCode.EraseActiveMap]: DeepRequired<EraseActiveMapFeedback>
[ActionOperationCode.ReloadMap]: DeepRequired<ReloadMapFeedback>
[ActionOperationCode.MergeMaps]: DeepRequired<MergeMapsFeedback>
[ActionOperationCode.NetworkWanConfig]: DeepRequired<null>
[ActionOperationCode.NetworkWanEnable]: DeepRequired<null>
[ActionOperationCode.NetworkHotspotEnable]: DeepRequired<null>
[ActionOperationCode.NetworkWanScanAps]: DeepRequired<WifiAp[]>
[ActionOperationCode.GenerateForbiddenAreas]: DeepRequired<null>
[ActionOperationCode.AddSound]: DeepRequired<AddSoundFeedback>
}

/** @internal */
export type ActionResultType = {
[ActionOperationCode.Check3dBoxAction]: DeepRequired<boolean>
[ActionOperationCode.VehToPose]: DeepRequired<null>
[ActionOperationCode.VehToChargingStation]: DeepRequired<null>
[ActionOperationCode.VehToChargingStationApproach]: DeepRequired<null>
[ActionOperationCode.VehToDockedPose]: DeepRequired<null>
[ActionOperationCode.VehToDockedPoseApproach]: DeepRequired<null>
[ActionOperationCode.VehToSavedPose]: DeepRequired<null>
[ActionOperationCode.VehToSegment]: DeepRequired<null>
[ActionOperationCode.SetVehiclePose]: DeepRequired<null>
[ActionOperationCode.SetMap]: DeepRequired<number>
[ActionOperationCode.SetActiveMap]: DeepRequired<null>
[ActionOperationCode.Undock]: DeepRequired<null>
[ActionOperationCode.UndockFromShelf]: DeepRequired<null>
[ActionOperationCode.GetMarkers]: DeepRequired<Marker[]>
[ActionOperationCode.InstallModule]: DeepRequired<null>
[ActionOperationCode.DisableModule]: DeepRequired<null>
[ActionOperationCode.Recovery]: DeepRequired<null>
[ActionOperationCode.ResetDatabase]: DeepRequired<null>
[ActionOperationCode.GetPath]: DeepRequired<GetPathResult>
[ActionOperationCode.MappingStart]: DeepRequired<null>
[ActionOperationCode.MappingStop]: DeepRequired<MappingStopResult>
[ActionOperationCode.EraseActiveMap]: DeepRequired<null>
[ActionOperationCode.ReloadMap]: DeepRequired<null>
[ActionOperationCode.MergeMaps]: DeepRequired<null>
[ActionOperationCode.NetworkWanConfig]: DeepRequired<null>
[ActionOperationCode.NetworkWanEnable]: DeepRequired<null>
[ActionOperationCode.NetworkHotspotEnable]: DeepRequired<null>
[ActionOperationCode.NetworkWanScanAps]: DeepRequired<WifiAp[]>
[ActionOperationCode.GenerateForbiddenAreas]: DeepRequired<ForbiddenArea[]>
[ActionOperationCode.AddSound]: DeepRequired<null>
}

/* Mixin */
/** @internal */
export abstract class ActionsMixin extends BaseAPI {
    /** 
    * **Check 3D box**
    *
    * Check if a box is free 
    * @category Navigation
    * @group Navigation
    
    * @param check_pose_data Pose parameters. Don't send params to use the current robot pose
    * @param feedback_cb - Feedback callback of action  
    
    * @data Promise<{@link boolean}> 
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#Check3dBoxAction RoboccDocs} for further information
    */
    Check3dBoxAction(check_pose_data: Check3dBoxActionParams,feedback_cb?: EventCallback<Check3dBoxActionFeedback>) { 
      return this.callAction(ActionOperationCode.Check3dBoxAction, 
                            check_pose_data,
                            feedback_cb); 
    }
    /** 
    * **Veh to pose**
    *
    * Ask vehicle to move to the given pose 🎯 
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_pose_params Parameters
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#VehToPose RoboccDocs} for further information
    */
    VehToPose(veh_to_pose_params: VehToPoseParams,feedback_cb?: EventCallback<VehToPoseFeedback>) { 
      return this.callAction(ActionOperationCode.VehToPose, 
                            veh_to_pose_params,
                            feedback_cb); 
    }
    /** 
    * **Veh to charging station**
    *
    * Ask vehicle to move to given uuid charging_station. Set -1 for preferred charging station 
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_charging_station_params Parameters
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#VehToChargingStation RoboccDocs} for further information
    */
    VehToChargingStation(veh_to_charging_station_params: VehToChargingStationParams,feedback_cb?: EventCallback<VehToChargingStationFeedback>) { 
      return this.callAction(ActionOperationCode.VehToChargingStation, 
                            veh_to_charging_station_params,
                            feedback_cb); 
    }
    /** 
    * **Veh to charging station approach**
    *
    * Ask vehicle to move to given uuid charging_station approach. Set -1 for preferred charging station 
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_charging_station_params Parameters
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#VehToChargingStationApproach RoboccDocs} for further information
    */
    VehToChargingStationApproach(veh_to_charging_station_params: VehToChargingStationApproachParams,feedback_cb?: EventCallback<VehToChargingStationApproachFeedback>) { 
      return this.callAction(ActionOperationCode.VehToChargingStationApproach, 
                            veh_to_charging_station_params,
                            feedback_cb); 
    }
    /** 
    * **Veh to docked pose**
    *
    * Ask vehicle to move and dock to given uuid docked pose 
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_docked_pose_params Parameters
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#VehToDockedPose RoboccDocs} for further information
    */
    VehToDockedPose(veh_to_docked_pose_params: VehToDockedPoseParams,feedback_cb?: EventCallback<VehToDockedPoseFeedback>) { 
      return this.callAction(ActionOperationCode.VehToDockedPose, 
                            veh_to_docked_pose_params,
                            feedback_cb); 
    }
    /** 
    * **Veh to docked pose approach**
    *
    * Ask vehicle to move to given uuid docked pose approach 
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_docked_pose_params Parameters
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#VehToDockedPoseApproach RoboccDocs} for further information
    */
    VehToDockedPoseApproach(veh_to_docked_pose_params: VehToDockedPoseApproachParams,feedback_cb?: EventCallback<VehToDockedPoseApproachFeedback>) { 
      return this.callAction(ActionOperationCode.VehToDockedPoseApproach, 
                            veh_to_docked_pose_params,
                            feedback_cb); 
    }
    /** 
    * **Veh to saved pose**
    *
    * Ask vehicle to move to given uuid saved pose 
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_saved_pose_params Parameters
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#VehToSavedPose RoboccDocs} for further information
    */
    VehToSavedPose(veh_to_saved_pose_params: VehToSavedPoseParams,feedback_cb?: EventCallback<VehToSavedPoseFeedback>) { 
      return this.callAction(ActionOperationCode.VehToSavedPose, 
                            veh_to_saved_pose_params,
                            feedback_cb); 
    }
    /** 
    * **Nav segment**
    *
    * Ask vehicle to move straight between two poses ↗️ 
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_segment_params Parameters
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#VehToSegment RoboccDocs} for further information
    */
    VehToSegment(veh_to_segment_params: VehToSegmentParams,feedback_cb?: EventCallback<VehToSegmentFeedback>) { 
      return this.callAction(ActionOperationCode.VehToSegment, 
                            veh_to_segment_params,
                            feedback_cb); 
    }
    /** 
    * **Set vehicle pose**
    *
    * Indicate to the vehicle where it's located on the map. Can be used if the vehicle lost its localization, although relocation via docked pose or charging station provides better accuracy. Navigation will be started if needed 🎯 
    * @category Navigation
    * @group Navigation
    
    * @param set_vehicle_pose_params Parameters
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#SetVehiclePose RoboccDocs} for further information
    */
    SetVehiclePose(set_vehicle_pose_params: SetVehiclePoseParams,feedback_cb?: EventCallback<SetVehiclePoseFeedback>) { 
      return this.callAction(ActionOperationCode.SetVehiclePose, 
                            set_vehicle_pose_params,
                            feedback_cb); 
    }
    /** 
    * **Set map**
    *
    * Set map by giving all its attributes and elements. Set id to -1 to create a new element, omit some attributes to not change them 🗺️ 
    * @category Map management
    * @group Map
    
    * @param map Map object
    * @param feedback_cb - Feedback callback of action  
    
    * @data Promise<{@link number}> 
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#SetMap RoboccDocs} for further information
    */
    SetMap(map: Map,feedback_cb?: EventCallback<SetMapFeedback>) { 
      return this.callAction(ActionOperationCode.SetMap, 
                            map,
                            feedback_cb); 
    }
    /** 
    * **Set active map**
    *
    * Set given ID map as active vehicle's map. It will also change active site if different than current 🗺️ 
    * @category Map management
    * @group Map
    
    * @param map_id Id of map
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#SetActiveMap RoboccDocs} for further information
    */
    SetActiveMap(map_id: number,feedback_cb?: EventCallback<SetActiveMapFeedback>) { 
      return this.callAction(ActionOperationCode.SetActiveMap, 
                            map_id,
                            feedback_cb); 
    }
    /** 
    * **Undock**
    *
    * Undock the vehicle from a docked pose or a charging station 
    * @category Docking
    * @group Navigation
    
    * @param override_battery_safety Override battery safety
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#Undock RoboccDocs} for further information
    */
    Undock(override_battery_safety?: boolean,feedback_cb?: EventCallback<string>) { 
      return this.callAction(ActionOperationCode.Undock, 
                            override_battery_safety,
                            feedback_cb); 
    }
    /** 
    * **Undock from shelf**
    *
    * Undock the vehicle from a shelf 
    * @category Docking
    * @group Navigation
    
    * @param d Undock distance
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#UndockFromShelf RoboccDocs} for further information
    */
    UndockFromShelf(d?: number,feedback_cb?: EventCallback<string>) { 
      return this.callAction(ActionOperationCode.UndockFromShelf, 
                            d,
                            feedback_cb); 
    }
    /** 
    * **Get markers around the vehicle**
    *
    * Get markers visible by the vehicle at its current position 🚨 
    * @category Marker
    * @group Map
    
    * @param pose_reference Reference
    * @param feedback_cb - Feedback callback of action  
    
    * @data Promise<{@link Marker}[]> 
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#GetMarkers RoboccDocs} for further information
    */
    GetMarkers(pose_reference: PoseReference,feedback_cb?: EventCallback<GetMarkersFeedback>) { 
      return this.callAction(ActionOperationCode.GetMarkers, 
                            pose_reference,
                            feedback_cb); 
    }
    /** 
    * **Install module**
    *
    * Install module from module file and API key 🛠 
    * @category Module
    * @group Module
    
    * @param module_data Module data
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#InstallModule RoboccDocs} for further information
    */
    InstallModule(module_data: InstallModuleParams,feedback_cb?: EventCallback<InstallModuleFeedback>) { 
      return this.callAction(ActionOperationCode.InstallModule, 
                            module_data,
                            feedback_cb); 
    }
    /** 
    * **Disable module**
    *
    * Disable active module, it will be forced to authenticate itself again ⛔ 
    * @category Module
    * @group Module
    
    
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#DisableModule RoboccDocs} for further information
    */
    DisableModule(feedback_cb?: EventCallback<DisableModuleFeedback>) { 
      return this.callAction(ActionOperationCode.DisableModule, 
                            null,
                            feedback_cb); 
    }
    /** 
    * **Recovery**
    *
    * Start the recovery process, vehicle will scan for markers around it, and set its position correctly from a known marker in map 🔍 
    * @category Recovery
    * @group Navigation
    
    
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#Recovery RoboccDocs} for further information
    */
    Recovery(feedback_cb?: EventCallback<RecoveryFeedback>) { 
      return this.callAction(ActionOperationCode.Recovery, 
                            null,
                            feedback_cb); 
    }
    /** 
    * **Reset database**
    *
    * Reset all the database 🗑 
    * @category Database
    * @group Database
    
    
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#ResetDatabase RoboccDocs} for further information
    */
    ResetDatabase(feedback_cb?: EventCallback<ResetDatabaseFeedback>) { 
      return this.callAction(ActionOperationCode.ResetDatabase, 
                            null,
                            feedback_cb); 
    }
    /** 
    * **Get path**
    *
    * Ask vehicle for the path between start and target pose. If start pose is not provided, current vehicle pose will be used instead 
    * @category Navigation
    * @group Navigation
    
    * @param get_path_params Parameters
    * @param feedback_cb - Feedback callback of action  
    
    * @data Promise<{@link GetPathResult}> 
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#GetPath RoboccDocs} for further information
    */
    GetPath(get_path_params: GetPathParams,feedback_cb?: EventCallback<GetPathFeedback>) { 
      return this.callAction(ActionOperationCode.GetPath, 
                            get_path_params,
                            feedback_cb); 
    }
    /** 
    * **Start mapping**
    *
    * Start a mapping from a given site ID and map name to save it at the end of the process ▶️ 
    * @category Mapping
    * @group Mapping
    
    * @param mapping_params Parameters
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#MappingStart RoboccDocs} for further information
    */
    MappingStart(mapping_params: MappingStartParams,feedback_cb?: EventCallback<MappingStartFeedback>) { 
      return this.callAction(ActionOperationCode.MappingStart, 
                            mapping_params,
                            feedback_cb); 
    }
    /** 
    * **Stop mapping**
    *
    * Stop mapping and save the created map if save_map is true ⏹ 
    * @category Mapping
    * @group Mapping
    
    * @param save_map Save mapping
    * @param feedback_cb - Feedback callback of action  
    
    * @data Promise<{@link MappingStopResult}> 
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#MappingStop RoboccDocs} for further information
    */
    MappingStop(save_map: boolean,feedback_cb?: EventCallback<MappingStopFeedback>) { 
      return this.callAction(ActionOperationCode.MappingStop, 
                            save_map,
                            feedback_cb); 
    }
    /** 
    * **Erase active map**
    *
    * Apply eraser polygons on the current map 
    * @category Eraser
    * @group Map
    
    * @param erase_params Parameters
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#EraseActiveMap RoboccDocs} for further information
    */
    EraseActiveMap(erase_params: EraseActiveMapParams,feedback_cb?: EventCallback<EraseActiveMapFeedback>) { 
      return this.callAction(ActionOperationCode.EraseActiveMap, 
                            erase_params,
                            feedback_cb); 
    }
    /** 
    * **Reload map**
    *
    * Reload current map 
    * @category Map management
    * @group Map
    * @internal 
    
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#ReloadMap RoboccDocs} for further information
    */
    ReloadMap(feedback_cb?: EventCallback<ReloadMapFeedback>) { 
      return this.callAction(ActionOperationCode.ReloadMap, 
                            null,
                            feedback_cb); 
    }
    /** 
    * **Merge maps**
    *
    * Merge maps 
    * @category Map management
    * @group Map
    
    * @param d Parameters for merge maps
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#MergeMaps RoboccDocs} for further information
    */
    MergeMaps(d: MergeMapsParams,feedback_cb?: EventCallback<MergeMapsFeedback>) { 
      return this.callAction(ActionOperationCode.MergeMaps, 
                            d,
                            feedback_cb); 
    }
    /** 
    * **WAN network configuration**
    *
    * Set wifi and IP configuration for WAN network 🌐 
    * @category Network
    * @group Vehicle
    
    * @param wan_config Parameters for WAN configuration
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#NetworkWanConfig RoboccDocs} for further information
    */
    NetworkWanConfig(wan_config: NetworkWanConfigParams,feedback_cb?: EventCallback<null>) { 
      return this.callAction(ActionOperationCode.NetworkWanConfig, 
                            wan_config,
                            feedback_cb); 
    }
    /** 
    * **WAN network enable**
    *
    * Enable or disable WAN network 🌐 
    * @category Network
    * @group Vehicle
    
    * @param enable Enable WAN connection
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#NetworkWanEnable RoboccDocs} for further information
    */
    NetworkWanEnable(enable: boolean,feedback_cb?: EventCallback<null>) { 
      return this.callAction(ActionOperationCode.NetworkWanEnable, 
                            enable,
                            feedback_cb); 
    }
    /** 
    * **Hotspot enable**
    *
    * Enable or disable vehicle emitted hotspot 🛜 
    * @category Network
    * @group Vehicle
    
    * @param enable Enable hotspot
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#NetworkHotspotEnable RoboccDocs} for further information
    */
    NetworkHotspotEnable(enable: boolean,feedback_cb?: EventCallback<null>) { 
      return this.callAction(ActionOperationCode.NetworkHotspotEnable, 
                            enable,
                            feedback_cb); 
    }
    /** 
    * **WAN scan APs**
    *
    * Start scan and list all detected Wi-Fi access points by the vehicle. Can take up to 10 seconds 🛜 
    * @category Network
    * @group Vehicle
    
    
    * @param feedback_cb - Feedback callback of action  
    
    * @data Promise<{@link WifiAp}[]> 
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#NetworkWanScanAps RoboccDocs} for further information
    */
    NetworkWanScanAps(feedback_cb?: EventCallback<WifiAp[]>) { 
      return this.callAction(ActionOperationCode.NetworkWanScanAps, 
                            null,
                            feedback_cb); 
    }
    /** 
    * **Generate forbidden areas**
    *
    * Automatically creates forbidden areas for the active map 
    * @category Forbidden area
    * @group Map
    
    * @param d Parameters for auto generate forbidden areas
    * @param feedback_cb - Feedback callback of action  
    
    * @data Promise<{@link ForbiddenArea}[]> 
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#GenerateForbiddenAreas RoboccDocs} for further information
    */
    GenerateForbiddenAreas(d: GenerateForbiddenAreasParams,feedback_cb?: EventCallback<null>) { 
      return this.callAction(ActionOperationCode.GenerateForbiddenAreas, 
                            d,
                            feedback_cb); 
    }
    /** 
    * **Add sound**
    *
    * Add new sound in library 
    * @category Sound
    * @group Database
    
    * @param add_sound_params Parameters
    * @param feedback_cb - Feedback callback of action  
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.9-zeus-9/classes/RocApi.RocApi.html#AddSound RoboccDocs} for further information
    */
    AddSound(add_sound_params: AddSoundParams,feedback_cb?: EventCallback<AddSoundFeedback>) { 
      return this.callAction(ActionOperationCode.AddSound, 
                            add_sound_params,
                            feedback_cb); 
    }
};