import { ActionOperationResponseMsg } from "./actions";
import { OutcomeCode } from "./outcomes";
import { DeepRequired } from "./types";
import { SecurityEvent,Security,HumanInterventionRequired,LedCommand,Site,OngoingAction,SiteLight,SiteRaw,Map,MapRaw,MapElements,MapWithoutImages,RoutesGraph,RoutesVertex,RoutesEdge,RoutesSettings,Module,ModuleDescription,PortRedirection,ModuleConfiguration,MapLight,ForbiddenArea,CustomArea,SavedPose,Fiducial,ChargingStation,DockedPose,Marker,TeleopCmd,Pose,Position,BatteryState,User,MoveStep,DiagnosticElement,DiagnosticError,AutopilotConfig,AutopilotStepParamsMove,AutopilotStepParams,AutopilotStep,LedSoundAnimBehaviour,Areas,Behaviour,DockingState,SoundScenarioVolume,SoundScenarioSample,WifiAp,NetworkWanState,SystemInfo,SecurityLog,LoraEquipment,RocSecurity,InvalidDataBySection,InvalidData,WaitingSound,EventSound,ExternalPortRedirection,LiftStatus,Group,SoftVersions,ControllerConstraint,MissionConfigDestination,MissionConfig,ButtonConfig,WaitingPose,LoraMessage,CustomCommand,ControllerLoraContact,ControllerLora,MapElementRestriction,DockedPoseConfig,RocMapElementConfig,RocAreaConfig,ControllerLoraContactConfig,ControllerLoraContactsConfig,VehConfig,VehInfosStats,VehInfos,VehDelayConfig,ButtonInfos,ManagerMissionsItem,Mission,DailyStats,MissionStep,InstallConfigDone,ResponseDeadlineConfig,Log,CompleteData,StatsData,ExportedStats,RocUser,TimelineStep,VehTimelineData,CallByButton,HirByType,DestByUuid,NbByOutcome,StandardStats,StandardStatsByUuid,HeatMapData,SlotHours,ManagerMap,UpdateStatus,ModuleParams,SubscribeResult,FollowMeParams,AuthSessionResult,AuthModuleParams,LoginParams,LoginResult,ImportSiteResult,ImportSoundsConfigResult,ExportSiteParams2,ExportSitesParams1Item,ExportSitesParams2SitesItem,ExportSitesParams2,ExportSitesResultItem,UpdateChargingStationConfigParams,UpdateDockedPoseConfigParams,SetUserParams,SetObtCbtParams,SetChargingStationResult,SetSavedPoseResult,SetDockedPoseResult,SetForbiddenAreaResult,SetCustomAreaResult,CheckPoseParams,Check3dBoxParamsPoint,Check3dBoxParamsMarker,Check3dBoxParams,Check3dBoxActionParamsPoint,Check3dBoxActionParamsMarker,Check3dBoxActionParams,Check3dBoxActionFeedback,SimResetWorldResult,SimResetWorldFeedback,SimAddChargingStationParams,SimAddChargingStationResult,SimAddFiducialParams,SimAddFiducialResult,SimAddShelfParams,SimAddShelfResult,SimAddCylinderParams,SimAddCylinderResult,SimClearCylindersResult,SimClearShelvesResult,SetCustomLedParams,SetCustomSoundParams,StopNavigationFeedback,SimSetDiffDriveStateParams,SetModuleParamsParams,VehToPoseParamsProgressChecker,VehToPoseParams,VehToPoseFeedback,VehToChargingStationParams,VehToChargingStationFeedback,VehToChargingStationApproachParams,VehToChargingStationApproachFeedback,VehToDockedPoseParamsShelfParameters,VehToDockedPoseParams,VehToDockedPoseFeedback,VehToDockedPoseApproachParams,VehToDockedPoseApproachFeedback,VehToSavedPoseParamsSuccessParams,VehToSavedPoseParams,VehToSavedPoseFeedback,VehToSegmentParams,VehToSegmentFeedback,SetVehiclePoseParams,SetVehiclePoseFeedback,SetMapFeedback,SetActiveMapFeedback,GetMarkersFeedback,InstallModuleParams,InstallModuleFeedback,DisableModuleFeedback,RecoveryFeedback,ResetDatabaseFeedback,GetPathParams,GetPathResult,GetPathFeedback,MappingStartParams,MappingStartFeedback,MappingStopResult,MappingStopFeedback,EraseActiveMapParams,EraseActiveMapFeedback,ReloadMapFeedback,MergeMapsParams,MergeMapsFeedback,NetworkWanConfigParams,NetworkRedirectPortParams,SystemRestartParams,GenerateForbiddenAreasParams,GetShelvesParams,AddSoundParams,AddSoundFeedback,AddButtonParams,UpdatePortRedirectionParams,DeletePortRedirectionParams,ControllerLoraSetContactConfigParams,NextStepMissionWithMessageParams,CheckHmiPasswordResult,SetMissionPriorityParams,SetMultidestinationParams,SetMultidestinationWithMessagesParamsUuidsItem,SetMultidestinationWithMessagesParams,GetStatsParams,GetLightStatsParams,ExportStatsParams,GetVehsTimelineParams,AddRocUserParams,UpdateRocUserParams,UpdateActiveCredentialsParams,CreateMissionParams,ExtendMissionParams,StartButtonMissionParams,GetSecurityLoggingParams,ExportSecurityLoggingParams,SetUseSyncButtonsParams,FollowMeStatusEventData,SoundCommandEventData,VehicleDirectionEventData,MappingErrorEventData,SafetyDiagnosticEventData,VelocityEventData,VehToFeedbackEventData,UpdateStatusEventData } from "./types";
import { Path,MoveSequence,AutopilotSequence,SoundLoopNumber,ManagerMissions,OperatingHours } from "./types";
import { Rbac,ChassisIntrusionStatus,SecuritySeverity,NetworkProtocol,MoveStepMoveType,DiagnosticElementType,DiagnosticElementError,DiagnosticCriticalLevel,AutopilotStepType,AutopilotTargetType,AutopilotOnError,Direction,OnOff,DirectionStrict,FollowMode,VehToDockedStepCode,DockingStatus,FollowMeStatus,DockingType,VehToStepCode,LedAnim,LedCornerAnim,PoseReference,NetworkType,NetworkStatus,NetworkGlobalStatus,SoundScenario,StopSource,ComputerType,McuType,MotorType,NavigationState,Language,InvalidDataSection,PeerType,RocEvent,ContactState,DockedPoseStationType,LoraControllerCommand,ContactType,ContactNonc,ContactTrigger,RelayAction,VehStatus,ModuleType,VehDirection,MapElementType,AuthenticatedType,LogSeverity,LogType,UpdateStatusStatus,SetMapFeedbackCurrentStepCode,SetActiveMapFeedbackCurrentStepCode,InstallModuleFeedbackCurrentStepCode,DisableModuleFeedbackCurrentStepCode,ResetDatabaseFeedbackCurrentStepCode,MappingStopFeedbackCurrentStepCode,EraseActiveMapFeedbackCurrentStepCode,ReloadMapFeedbackCurrentStepCode,MergeMapsFeedbackCurrentStepCode,SystemRestartParamsStage,MappingErrorEventDataOutcome,AutopilotStepResultEventData,AutopilotStatusEventData,UpdateStatusEventDataStatus } from "./types";

/* Enums for each type of event */
export enum TopicEventCode {
    AuthOK = -7,
    AuthError = -6,
    VehicleConnectionError = -5,
    VehicleConnectionOpen = -4,
    VehicleConnectionClose = -3,
    Ready = -2,
    ReceivedFragmentedMessage = -1,
  
    /**
      * **Battery state**
      *
      * Battery information with power status and some electrical data 🔋
      
      * @data {@link BatteryState}
      * @category Battery management
      * @group Vehicle
      
    */
    BatteryState = 1,
    /**
      * **Active map updated**
      *
      * Triggered when active map is updated, boolean returns the information that map images have changed 🗺
      
      * @data {@link boolean}
      * @category Map management
      * @group Map
      
    */
    ActiveMapUpdated = 4,
    /**
      * **Vehicle pose**
      *
      * Vehicle pose on its map, relevant only if navigation is running 🚗
      
      * @data {@link Pose}
      * @category Navigation
      * @group Navigation
      
    */
    VehiclePose = 5,
    /**
      * **Docking status**
      *
      * Vehicle docking status docked, undocked or in between state 🔌
      
      * @data {@link DockingState}
      * @category Docking
      * @group Navigation
      
    */
    DockingStatus = 6,
    /**
      * **Follow me status**
      *
      * Status of the follow me feature 👣
      
      * @data {@link FollowMeStatusEventData}
      * @category Navigation
      * @group Navigation
      
    */
    FollowMeStatus = 113,
    /**
      * **Navigation state**
      *
      * Triggered when navigation status is updated, int returns the status of navigation: unknown, stopped, starting, or started🧭
      
      * @data {@link NavigationState}
      * @category Navigation
      * @group Navigation
      
    */
    NavigationState = 7,
    /**
      * **LED command**
      *
      * LED displayed on the vehicle with animation, color, corner animation, etc. 🚥
      
      * @data {@link LedCommand}
      * @category LED
      * @group Vehicle
      
    */
    LedCommand = 102,
    /**
      * **Sound scenario**
      *
      * Sound scenario ID 🔉
      
      * @data {@link SoundScenario}
      * @category Sound
      * @group Vehicle
      
    */
    SoundScenario = 103,
    /**
      * **Sound command**
      *
      * Sound command played by the vehicle, with sample ID, volume and loop count 🔉
      
      * @data {@link SoundCommandEventData}
      * @category Sound
      * @group Vehicle
      
    */
    SoundCommand = 104,
    /**
      * **External speaker**
      *
      * Use an external speaker for sound
      
      * @data {@link boolean}
      * @category Sound
      * @group Vehicle
      
    */
    SoundExternalSpeaker = 136,
    /**
      * **Vehicle direction**
      *
      * Vehicle direction ↔️
      
      * @data {@link VehicleDirectionEventData}
      * @category Navigation
      * @group Navigation
      
    */
    VehicleDirection = 46,
    /**
      * **Freewheel**
      *
      * Vehicle freewheel status
      
      * @data {@link boolean}
      * @category Vehicle state
      * @group Vehicle
      
    */
    Freewheel = 45,
    /**
      * **Ongoing action**
      *
      * Vehicle ongoing action, false if no current action
      
      * @data {@link OngoingAction}
      * @category Current action
      * @group Vehicle
      
    */
    OngoingAction = 47,
    /**
      * **Mapping vehicle pose**
      *
      * Vehicle pose in under construction map
      
      * @data {@link Pose}
      * @category Mapping
      * @group Mapping
      
    */
    MappingVehiclePose = 51,
    /**
      * **Mapping map origin**
      *
      * Under construction map origin
      
      * @data {@link Pose}
      * @category Mapping
      * @group Mapping
      
    */
    MappingMapOrigin = 52,
    /**
      * **Mapping error**
      *
      * Error occured in mapping mode
      
      * @data {@link MappingErrorEventData}
      * @category Mapping
      * @group Mapping
      
    */
    MappingError = 53,
    /**
      * **Mapping is started**
      *
      * Mapping is started or not
      
      * @data {@link boolean}
      * @category Mapping
      * @group Mapping
      
    */
    MappingIsStarted = 54,
    /**
      * **Current areas**
      *
      * Areas's behaviour in which the vehicle is currently located, behaviour of global area if vehicle is not in a specific area
      
      * @data {@link Areas}
      * @category Navigation
      * @group Navigation
      
    */
    CurrentAreas = 63,
    /**
      * **Current areas Uuid**
      *
      * Area's uuid in which the vehicle is currently located, 0 if vehicle is not in a specific area
      
      * @data {@link number}[]
      * @category Navigation
      * @group Navigation
      
    */
    CurrentAreasUuid = 110,
    /**
      * **Maintenance mode on**
      *
      * Maintenance mode is enabled or not 🚧
      
      * @data {@link boolean}
      * @category Maintenance
      * @group Vehicle
      
    */
    MaintenanceMode = 83,
    /**
      * **Sound is playing**
      *
      * Sound is playing or not 🔉
      
      * @data {@link boolean}
      * @category Sound
      * @group Vehicle
      
    */
    SoundIsPlaying = 95,
    /**
      * **Safety diagnostic**
      *
      * Diagnostic state with diagnostic error set to true if an error occured, with critical level associated 📋
      
      * @data {@link SafetyDiagnosticEventData}
      * @category Diagnostic
      * @group Vehicle
      
    */
    SafetyDiagnostic = 84,
    /**
      * **Mapping feature operational**
      *
      * Wether a mapping can be performed or not
      
      * @data {@link boolean}
      * @category Diagnostic
      * @group Vehicle
      
    */
    MappingFeatureOperational = 140,
    /**
      * **Human intervention required**
      *
      * Human intervention required event, human_intervention_required field is set to true if human assistance needed to unlock robot, the others boolean defines which kind of intervention is required 👨🏽‍🔧
      
      * @data {@link HumanInterventionRequired}
      * @category Diagnostic
      * @group Vehicle
      
    */
    HumanInterventionRequired = 86,
    /**
      * **Autopilot step result**
      *
      * Last autopilot step result
      
      * @data {@link AutopilotStepResultEventData}
      * @category Autopilot
      * @group Navigation
      
    */
    AutopilotStepResult = 68,
    /**
      * **Autopilot status**
      *
      * Autopilot current status
      
      * @data {@link AutopilotStatusEventData}
      * @category Autopilot
      * @group Navigation
      
    */
    AutopilotStatus = 69,
    /**
      * **Autopilot current step**
      *
      * Autopilot current step executed on the vehicle
      
      * @data {@link AutopilotStep}
      * @category Autopilot
      * @group Navigation
      
    */
    AutopilotCurrentStep = 70,
    /**
      * **Autopilot current step**
      *
      * Autopilot current config set on vehicle
      
      * @data {@link AutopilotSequence}
      * @category Autopilot
      * @group Navigation
      
    */
    AutopilotConfig = 85,
    /**
      * **Network global state**
      *
      * Network global state 🌐
      
      * @data {@link NetworkGlobalStatus}
      * @category Network
      * @group Vehicle
      
    */
    NetworkGlobalStatus = 81,
    /**
      * **Network wan state**
      *
      * Sent upon WAN configuration update 🌐
      
      * @data {@link NetworkWanState}
      * @category Network
      * @group Vehicle
      
    */
    NetworkWanState = 91,
    /**
      * **Network hotspot state**
      *
      * Sent upon vehicle hotspot configuration update 🛜
      
      * @data {@link NetworkStatus}
      * @category Network
      * @group Vehicle
      
    */
    NetworkHotspotStatus = 92,
    /**
      * **Critical battery**
      *
      * Critical battery level threshold reached 🪫
      
      * @data {@link boolean}
      * @category Battery management
      * @group Vehicle
      
    */
    CriticalBattery = 71,
    /**
      * **Operational battery**
      *
      * Operational battery level threshold reached 🔋
      
      * @data {@link boolean}
      * @category Battery management
      * @group Vehicle
      
    */
    OperationalBattery = 72,
    /**
      * **Movement prohibited**
      *
      * Movement prohibited from module 🚫
      
      * @data {@link boolean}
      * @category Navigation
      * @group Navigation
      
    */
    MovementProhibited = 88,
    /**
      * **Odometer since boot**
      *
      * Odometer since last boot in meters
      
      * @data {@link number}
      * @category Vehicle state
      * @group Vehicle
      
    */
    OdometerSinceBoot = 90,
    /**
      * **Odometer**
      *
      * Vehicle total odometer in meters
      
      * @data {@link number}
      * @category Vehicle state
      * @group Vehicle
      
    */
    Odometer = 89,
    /**
      * **Velocity**
      *
      * Vehicle velocity
      
      * @data {@link VelocityEventData}
      * @category Vehicle state
      * @group Vehicle
      
    */
    Velocity = 121,
    /**
      * **Current active path**
      *
      * Current path executed by the vehicle
      
      * @data {@link Path}
      * @category Navigation
      * @group Navigation
      
    */
    CurrentActivePath = 96,
    /**
      * **Internal data**
      *
      * Internal data 💾
      
      * @data {@link string}
      * @category Internal data
      * @group Internal
      
    */
    InternalData = 98,
    /**
      * **Cycle started**
      *
      * Vehicle cycle has started or not, cycle must be started at each boot before any order
      
      * @data {@link boolean}
      * @category Vehicle state
      * @group Vehicle
      
    */
    CycleStarted = 99,
    /**
      * **Active module**
      *
      * Vehicle active module, false if not active module
      
      * @data {@link Module}
      * @category Module
      * @group Module
      
    */
    ActiveModule = 107,
    /**
      * **Active module params**
      *
      * Vehicle active module configuration
      
      * @data {@link ModuleConfiguration}
      * @category Module
      * @group Module
      
    */
    ActiveModuleConfiguration = 130,
    /**
      * **Routes graph obstacles**
      *
      * List of obstacles across the routes
      
      * @data {@link Position}[]
      * @category Navigation
      * @group Navigation
      
    */
    RoutesGraphObstacles = 118,
    /**
      * **Sleeping**
      *
      * Vehicle in sleeping mode or not
      
      * @data {@link boolean}
      * @category Battery management
      * @group Vehicle
      
    */
    Sleeping = 119,
    /**
      * **Hibernate**
      *
      * Vehicle in hibernation mode or not
      
      * @data {@link boolean}
      * @category Battery management
      * @group Vehicle
      
    */
    Hibernate = 120,
    /**
      * **Veh to feedback**
      *
      * Feedback on current move order to an element
      
      * @data {@link VehToFeedbackEventData}
      * @category Navigation
      * @group Navigation
      
    */
    VehToFeedback = 97,
    /**
      * **Update status**
      *
      * System update information
      
      * @data {@link UpdateStatusEventData}
      * @category Version
      * @group Vehicle
      
    */
    UpdateStatus = 122,
    /**
      * **Automatic updates**
      *
      * Automatic updates are enabled or disabled
      
      * @data {@link boolean}
      * @category Version
      * @group Vehicle
      
    */
    AutomaticUpdates = 123,
    /**
      * **Flash Roboteq requested**
      *
      * The roboteq motor controller will be flashed at next reboot
      
      * @data {@link boolean}
      * @category System
      * @group Vehicle
      
    */
    FlashRoboteqRequested = 126,
    /**
      * **Flash MCU requested**
      *
      * The teensy/pico mcu will be flashed at next reboot
      
      * @data {@link boolean}
      * @category System
      * @group Vehicle
      
    */
    FlashMcuRequested = 127,
    /**
      * **Lidar points in robot frame**
      *
      * Lidar points in robot frame
      
      * @data {@link Position}[]
      * @category Vehicle state
      * @group Vehicle
      
    */
    LidarFromRobot = 133,
    /**
      * **Lidar points in map**
      *
      * Lidar points in map
      
      * @data {@link Position}[]
      * @category Vehicle state
      * @group Vehicle
      
    */
    LidarInMap = 134,
    /**
      * **Lidar markers in map**
      *
      * Markers points in map
      
      * @data {@link Marker}[]
      * @category Vehicle state
      * @group Vehicle
      
    */
    LidarMarkers = 135,
    /**
      * **Stop sources**
      *
      * Sources that is currently stopping vehicle motion
      
      * @data {@link StopSource}[]
      * @category Vehicle state
      * @group Vehicle
      
    */
    StopSources = 143,
    /**
      * **System information**
      *
      * System information
      
      * @data {@link SystemInfo}
      * @category Diagnostic
      * @group Vehicle
      
    */
    SystemInfo = 144,
    /**
      * **Secuirty configuration**
      *
      * Security information
      
      * @data {@link Security}
      * @category System
      * @group Vehicle
      
    */
    Security = 145,
    /**
      * **Chassis intrusion detection**
      *
      * Chassis intrusion detection status
      
      * @data {@link ChassisIntrusionStatus}
      * @category System
      * @group Vehicle
      
    */
    ChassisIntrusionDetection = 166,
    /**
      * **Blocked ip**
      *
      * Last blocked ip
      
      * @data {@link string}
      * @category System
      * @group Vehicle
      
    */
    BlockedIp = 146,
    /**
      * **List of sound**
      *
      * List of sound in library
      
      * @data {@link string}[]
      * @category Sound
      * @group Database
      
    */
    SoundSamples = 149,
    /**
      * **Security event**
      *
      * Security event
      
      * @data {@link SecurityEvent}
      * @category Vehicle
      * @group System
      
    */
    SecurityEvent = 167,
    /**
      * **Connected to vehicle**
      *
      * Triggered when app is connected to vehicle API
      
      * @data {@link boolean}
      * @category State
      * @group ROC
      
    */
    ConnectedToVeh = 7000,
    /**
      * **Is vehicle**
      *
      * Is vehicle
      
      * @data {@link boolean}
      * @category Configuration
      * @group ROC
      
    */
    IsVeh = 7001,
    /**
      * **Is manager**
      *
      * Is manager
      
      * @data {@link boolean}
      * @category Configuration
      * @group ROC
      
    */
    IsManager = 7002,
    /**
      * **Buttons configuration**
      *
      * Buttons configuration
      
      * @data {@link ButtonConfig}[]
      * @category Configuration
      * @group ROC
      
    */
    ButtonsConfig = 7003,
    /**
      * **Vehicles configuration**
      *
      * Vehicles configuration
      
      * @data {@link VehConfig}[]
      * @category Configuration
      * @group ROC
      
    */
    VehsConfig = 7004,
    /**
      * **Module LoRa ID**
      *
      * Module LoRa ID
      
      * @data {@link number}
      * @category Configuration
      * @group Vehicle
      
    */
    IdModule = 7006,
    /**
      * **Map**
      *
      * Map
      
      * @data {@link Map}
      * @category Configuration
      * @group ROC
      
    */
    Map = 7007,
    /**
      * **LoRa SP**
      *
      * LoRa SP
      
      * @data {@link number}
      * @category Configuration
      * @group ROC
      
    */
    LoraSp = 7008,
    /**
      * **Mission log**
      *
      * Mission log
      
      * @data {@link string}
      * @category Mission
      * @group ROC
      
    */
    MissionLog = 7009,
    /**
      * **Missions lists updated**
      *
      * Missions lists updated
      
      * @data {@link ManagerMissions}
      * @category Mission
      * @group Manager
      
    */
    ListsUpdated = 7010,
    /**
      * **Wait release**
      *
      * Wait release
      
      * @data {@link boolean}
      * @category Mission
      * @group Vehicle
      
    */
    WaitRelease = 7011,
    /**
      * **In pause**
      *
      * In pause
      
      * @data {@link boolean}
      * @category Mission
      * @group Vehicle
      
    */
    InPause = 7012,
    /**
      * **In configuration mode**
      *
      * In configuration mode
      
      * @data {@link boolean}
      * @category Configuration
      * @group ROC
      
    */
    InConfigMode = 7013,
    /**
      * **Call recevied from a button in configuration mode**
      *
      * Call recevied from a button in configuration mode
      
      * @data {@link number}
      * @category Mission
      * @group Manager
      
    */
    CallFromButtonInConfigMode = 7014,
    /**
      * **In Multi Destinations**
      *
      * In Multi Destinations
      
      * @data {@link boolean}
      * @category Mission
      * @group Vehicle
      
    */
    InMultiDestinations = 7015,
    /**
      * **Vehicles information**
      *
      * Vehicles information
      
      * @data {@link VehInfos}[]
      * @category Mission
      * @group Manager
      
    */
    VehsInfos = 7016,
    /**
      * **Module type**
      *
      * Module type
      
      * @data {@link ModuleType}
      * @category Mission
      * @group Vehicle
      
    */
    ModuleType = 7017,
    /**
      * **Vehicle delay configuration**
      *
      * Vehicle delay configuration
      
      * @data {@link VehDelayConfig}
      * @category Configuration
      * @group Vehicle
      
    */
    VehDelayConfig = 7020,
    /**
      * **Buttons Informations**
      *
      * Buttons Informations
      
      * @data {@link ButtonInfos}[]
      * @category Configuration
      * @group Manager
      
    */
    ButtonsInfos = 7021,
    /**
      * **Mission title**
      *
      * Mission title
      
      * @data {@link string}
      * @category Mission
      * @group Vehicle
      
    */
    MissionTitle = 7022,
    /**
      * **Only release**
      *
      * Only release
      
      * @data {@link boolean}
      * @category Mission
      * @group Vehicle
      
    */
    OnlyRelease = 7023,
    /**
      * **Vehicle direction - mast position**
      *
      * Vehicle direction - mast position
      
      * @data {@link VehDirection}
      * @category Configuration
      * @group Vehicle
      
    */
    VehDirection = 7024,
    /**
      * **Dock direction**
      *
      * Dock direction
      
      * @data {@link VehDirection}
      * @category Configuration
      * @group Vehicle
      
    */
    DockDirection = 7076,
    /**
      * **Daily stats**
      *
      * Daily stats
      
      * @data {@link DailyStats}
      * @category Stats
      * @group Manager
      
    */
    DailyStats = 7025,
    /**
      * **Import configuration done**
      *
      * Import configuration done
      
      * @data {@link InstallConfigDone}
      * @category State
      * @group ROC
      
    */
    ImportConfigDone = 7026,
    /**
      * **Application version**
      *
      * Application version
      
      * @data {@link string}
      * @category Configuration
      * @group ROC
      
    */
    AppVersion = 7027,
    /**
      * **Response deadline**
      *
      * Response deadline
      
      * @data {@link ResponseDeadlineConfig}
      * @category Configuration
      * @group ROC
      
    */
    ResponseDeadline = 7028,
    /**
      * **LoRa connected**
      *
      * LoRa connected
      
      * @data {@link boolean}
      * @category State
      * @group ROC
      
    */
    LoraConnected = 7029,
    /**
      * **Move failed, retrying**
      *
      * Move failed, retrying
      
      * @data {@link boolean}
      * @category Mission
      * @group Vehicle
      
    */
    MoveFailedRetrying = 7030,
    /**
      * **In maintenance mode**
      *
      * In maintenance mode
      
      * @data {@link boolean}
      * @category State
      * @group Manager
      
    */
    InMaintenanceMode = 7031,
    /**
      * **Waiting poses**
      *
      * Waiting poses
      
      * @data {@link WaitingPose}[]
      * @category Configuration
      * @group ROC
      
    */
    WaitingPoses = 7032,
    /**
      * **Wait on waiting pose**
      *
      * Wait on waiting pose
      
      * @data {@link boolean}
      * @category Mission
      * @group Vehicle
      
    */
    WaitOnWaitingPose = 7033,
    /**
      * **Custom commands**
      *
      * Custom commands
      
      * @data {@link CustomCommand}[]
      * @category Configuration
      * @group ROC
      
    */
    CustomCommands = 7034,
    /**
      * **Controller LoRas**
      *
      * Controller LoRas
      
      * @data {@link ControllerLora}[]
      * @category Configuration
      * @group ROC
      
    */
    ControllerLoras = 7035,
    /**
      * **Map element restrictions**
      *
      * Map element restrictions
      
      * @data {@link MapElementRestriction}[]
      * @category Configuration
      * @group ROC
      
    */
    MapElementRestrictions = 7036,
    /**
      * **Docked pose configurations**
      *
      * Docked pose configurations
      
      * @data {@link DockedPoseConfig}[]
      * @category Configuration
      * @group ROC
      
    */
    DockedPoseConfigs = 7039,
    /**
      * **Bad lift position**
      *
      * Bad lift position
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    BadLiftPosition = 7040,
    /**
      * **Allow move from dock**
      *
      * Allow move from dock
      
      * @data {@link boolean}
      * @category Configuration
      * @group Vehicle
      
    */
    AllowMoveFromDock = 7041,
    /**
      * **Allow multiple mission for the same button**
      *
      * Allow multiple mission for the same button
      
      * @data {@link boolean}
      * @category Configuration
      * @group Manager
      
    */
    AllowMultipleMissions = 7080,
    /**
      * **Show all destinations on home**
      *
      * Show all destinations on home
      
      * @data {@link boolean}
      * @category Configuration
      * @group ROC
      
    */
    ShowAllDestinationsOnHome = 7085,
    /**
      * **Softwares versions**
      *
      * Softwares versions
      
      * @data {@link SoftVersions}
      * @category Configuration
      * @group ROC
      
    */
    SoftVersions = 7042,
    /**
      * **New softwares versions**
      *
      * New softwares versions
      
      * @data {@link boolean}
      * @category Configuration
      * @group ROC
      
    */
    NewSoftVersions = 7043,
    /**
      * **Waiting contact**
      *
      * Waiting contact from LoRa controller
      
      * @data {@link boolean}
      * @category Configuration
      * @group Vehicle
      
    */
    WaitingContact = 7044,
    /**
      * **Sleeping**
      *
      * Sleeping
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    ModuleSleeping = 7045,
    /**
      * **Hibernate**
      *
      * Hibernate
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    ModuleHibernate = 7046,
    /**
      * **Operating hours**
      *
      * Operating hours
      
      * @data {@link OperatingHours}
      * @category Configuration
      * @group Vehicle
      
    */
    OperatingHours = 7047,
    /**
      * **Current destination**
      *
      * Current destination
      
      * @data {@link number}
      * @category Mission
      * @group Vehicle
      
    */
    CurrentDestination = 7048,
    /**
      * **LoRa Message**
      *
      * LoRa Message
      
      * @data {@link LoraMessage}
      * @category State
      * @group ROC
      
    */
    LoraMessage = 7049,
    /**
      * **LoRa Message error**
      *
      * LoRa Message error
      
      * @data {@link string}
      * @category State
      * @group ROC
      
    */
    LoraMessageError = 7050,
    /**
      * **LoRa ping**
      *
      * LoRa ping
      
      * @data {@link boolean}
      * @category State
      * @group ROC
      
    */
    LoraPing = 7051,
    /**
      * **LoRa ping robot**
      *
      * LoRa ping robot
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    LoraPingRobot = 7052,
    /**
      * **Specific data of the current mission**
      *
      * Specific data of the current mission
      
      * @data {@link number}
      * @category State
      * @group Vehicle
      
    */
    MissionSpecificData = 7053,
    /**
      * **List of groups**
      *
      * List of groups
      
      * @data {@link Group}[]
      * @category Configuration
      * @group Vehicle
      
    */
    Groups = 7054,
    /**
      * **On uuid**
      *
      * Current position uuid of robot
      
      * @data {@link number}
      * @category State
      * @group Vehicle
      
    */
    OnUuid = 7055,
    /**
      * **ROC Soft update**
      *
      * Current status of update
      
      * @data {@link UpdateStatus}
      * @category State
      * @group Vehicle
      
    */
    RocSoftUpdate = 7056,
    /**
      * **ROC Automatic updates**
      *
      * ROC Automatic updates activated
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    RocAutomaticUpdates = 7057,
    /**
      * **Tare module params**
      *
      * Tare module params
      
      * @data {@link ModuleParams}
      * @category State
      * @group Vehicle
      
    */
    TareModuleParams = 7058,
    /**
      * **Loaded module params**
      *
      * Loaded module params
      
      * @data {@link ModuleParams}
      * @category State
      * @group Vehicle
      
    */
    LoadedModuleParams = 7059,
    /**
      * **Lift connected**
      *
      * Lift conected
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    LiftConnected = 7060,
    /**
      * **Lift state**
      *
      * Lift state
      
      * @data {@link LiftStatus}
      * @category State
      * @group Vehicle
      
    */
    LiftState = 7061,
    /**
      * **Lift have box on**
      *
      * Lift have box on
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    LiftHaveBoxOn = 7067,
    /**
      * **Lift box is a shelf**
      *
      * Lift box is a shelf
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    LiftIsShelfOn = 7079,
    /**
      * **Current origin**
      *
      * Current origin uuid
      
      * @data {@link number}
      * @category State
      * @group Vehicle
      
    */
    CurrentOrigin = 7062,
    /**
      * **Sleep screen**
      *
      * Sleep screen
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    SleepScreen = 7063,
    /**
      * **Map elements config**
      *
      * Map elements config
      
      * @data {@link RocMapElementConfig}[]
      * @category Configuration
      * @group Vehicle
      
    */
    MapElementConfigs = 7064,
    /**
      * **Areas config**
      *
      * Areas config
      
      * @data {@link RocAreaConfig}[]
      * @category Configuration
      * @group Vehicle
      
    */
    AreaConfigs = 7091,
    /**
      * **Controller LoRa Contacts configuration**
      *
      * Controller LoRa Contacts configuration
      
      * @data {@link ControllerLoraContactsConfig}
      * @category Configuration
      * @group Vehicle
      
    */
    ControllerLoraContactsConfig = 7065,
    /**
      * **Predefined messages**
      *
      * Predefined messages
      
      * @data {@link string}[]
      * @category State
      * @group Vehicle
      
    */
    PredefinedMessages = 7066,
    /**
      * **Mission step title**
      *
      * Mission step title
      
      * @data {@link string}
      * @category Configuration
      * @group Vehicle
      
    */
    MissionStepTitle = 7068,
    /**
      * **Mission step title**
      *
      * Mission step title
      
      * @data {@link string}
      * @category Configuration
      * @group Vehicles
      
    */
    InPauseTitle = 7069,
    /**
      * **Follow me allowed**
      *
      * Follow me allowed
      
      * @data {@link boolean}
      * @category Configuration
      * @group Vehicle
      
    */
    FollowMeAllowed = 7070,
    /**
      * **Max button ID search**
      *
      * Max button ID search
      
      * @data {@link number}
      * @category Configuration
      * @group Vehicle
      
    */
    MaxButtonIdSearch = 7071,
    /**
      * **Default Wait Release Sound**
      *
      * Default Wait Release Sound
      
      * @data {@link string}
      * @category Configuration
      * @group Vehicle
      
    */
    DefaultWaitReleaseSound = 7072,
    /**
      * **Port redirection**
      *
      * Port redirection
      
      * @data {@link ExternalPortRedirection}[]
      * @category Configuration
      * @group Vehicle
      
    */
    PortRedirections = 7073,
    /**
      * **Error on lift**
      *
      * Error on lift
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    LiftError = 7075,
    /**
      * **Invalid data list**
      *
      * List of invalid data
      
      * @data {@link InvalidDataBySection}[]
      * @category State
      * @group Vehicle
      
    */
    InvalidDataList = 7077,
    /**
      * **Waiting sounds**
      *
      * List of waiting sound
      
      * @data {@link WaitingSound}[]
      * @category Configuration
      * @group Vehicle
      
    */
    WaitingSounds = 7081,
    /**
      * **Event sounds**
      *
      * List of event sound
      
      * @data {@link EventSound}[]
      * @category Configuration
      * @group Vehicle
      
    */
    EventsSounds = 7082,
    /**
      * **ROC Security**
      *
      * ROC Security
      
      * @data {@link RocSecurity}
      * @category Configuration
      * @group ROC
      
    */
    RocSecurity = 7083,
    /**
      * **Hotspot enabled**
      *
      * Hotspot enabled
      
      * @data {@link boolean}
      * @category Network
      * @group ROC
      
    */
    HotspotEnabled = 7084,
    /**
      * **Language**
      *
      * Langauge
      
      * @data {@link Language}
      * @category Configuration
      * @group ROC
      
    */
    Language = 7086,
    /**
      * **Pairing enabled**
      *
      * Pairing enabled
      
      * @data {@link boolean}
      * @category Configuration
      * @group ROC
      
    */
    PairingEnabled = 7087,
    /**
      * **Pairing list of equipment**
      *
      * Pairing list of equipment
      
      * @data {@link LoraEquipment}[]
      * @category Configuration
      * @group ROC
      
    */
    PairingList = 7088,
    /**
      * **Paired list of equipment**
      *
      * Paired list of equipment
      
      * @data {@link LoraEquipment}[]
      * @category Configuration
      * @group ROC
      
    */
    PairedList = 7089,
    /**
      * **Pairing ok**
      *
      * Pairing ok
      
      * @data {@link boolean}
      * @category Configuration
      * @group ROC
      
    */
    PairingOk = 7090,
    /**
      * **Global emergency stop**
      *
      * Global emergency stop
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    GlobalEmergencyStop = 7092,
    /**
      * **Global emergency stop is muted**
      *
      * Global emergency stop is muted
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    GlobalEmergencyStopMuted = 7093,
    /**
      * **Delay before promoting mission in priority**
      *
      * Delay before promoting mission in priority
      
      * @data {@link number}
      * @category Configuration
      * @group Manager
      
    */
    DelayBeforePromotingMission = 7094,
    /**
      * **Use sync buttons**
      *
      * If on, sync all buttons in same time
      
      * @data {@link boolean}
      * @category Configuration
      * @group Manager
      
    */
    UseSyncButtons = 7095,
    /**
      * **Sync buttons wait time**
      *
      * If sync buttons, wait time for replies
      
      * @data {@link number}
      * @category Configuration
      * @group Manager
      
    */
    SyncButtonsWaitTime = 7096,
    
}
/** @internal */
export enum ResultEventCode {
    /**
      * **Check 3D box result**
      *
      * Result of check 3D box
    */
    Check3dBoxActionResult = 142,
    /**
      * **Veh to pose result**
      *
      * Result of move order to pose
    */
    VehToPoseResult = 3,
    /**
      * **Nav segment result**
      *
      * Result of nav segment order
    */
    VehToSegmentResult = 112,
    /**
      * **Set vehicule pose result**
      *
      * Result of set vehicle pose operation
    */
    SetVehiclePoseResult = 94,
    /**
      * **Stop navigation result**
      *
      * Result of stop navigation operation
    */
    StopNavigationResult = 151,
    /**
      * **Set map result**
      *
      * Result of set map operation
    */
    SetMapResult = 21,
    /**
      * **Set active map result**
      *
      * Result of set active map operation
    */
    SetActiveMapResult = 30,
    /**
      * **Veh to charging station result**
      *
      * Result of move order to a charging station operation
    */
    VehToChargingStationResult = 32,
    /**
      * **Veh to charging station approach result**
      *
      * Result of move order to a charging station approach operation
    */
    VehToChargingStationApproachResult = 115,
    /**
      * **Veh to docked pose result**
      *
      * Result of move order to a docked pose operation
    */
    VehToDockedPoseResult = 106,
    /**
      * **Veh to docked pose approach result**
      *
      * Result of move order to a docked pose approach operation
    */
    VehToDockedPoseApproachResult = 117,
    /**
      * **Veh to saved pose result**
      *
      * Result of move order to a saved pose operation
    */
    VehToSavedPoseResult = 34,
    /**
      * **Undock result**
      *
      * Result of undock operation
    */
    UndockResult = 36,
    /**
      * **Undock from shelf result**
      *
      * Result of undock from shelf operation
    */
    UndockFromShelfResult = 125,
    /**
      * **Get markers result**
      *
      * Result of get markers operation with list of detected markers
    */
    GetMarkersResult = 38,
    /**
      * **Install module result**
      *
      * Result of install module operation
    */
    InstallModuleResult = 40,
    /**
      * **Disable module result**
      *
      * Result of disable module operation
    */
    DisableModuleResult = 42,
    /**
      * **Recovery result**
      *
      * Result of recovery operation
    */
    RecoveryResult = 44,
    /**
      * **Reset database result**
      *
      * Result of reset database operation
    */
    ResetDatabaseResult = 109,
    /**
      * **Get path result**
      *
      * Result of get path operation with path (list of poses) and distance in meter
    */
    GetPathResult = 50,
    /**
      * **Mapping start result**
      *
      * Result of mapping start operation
    */
    MappingStartResult = 56,
    /**
      * **Mapping stop result**
      *
      * Result of mapping stop operation
    */
    MappingStopResult = 58,
    /**
      * **Erase active map result**
      *
      * Result of erase active map operation
    */
    EraseActiveMapResult = 65,
    /**
      * **Reload map result**
      *
      * Result of reload map operation
    */
    ReloadMapResult = 67,
    /**
      * **Merge maps result**
      *
      * Result of merge maps operation
    */
    MergeMapsResult = 132,
    /**
      * **Network WAN configuration result**
      *
      * Result of network WAN config operation
    */
    NetworkWanConfigResult = 74,
    /**
      * **Network WAN enable result**
      *
      * Result of network WAN enable operation
    */
    NetworkWanEnableResult = 76,
    /**
      * **Network WAN scan APs result**
      *
      * Result of network WAN scan APs operation, list of detected APs
    */
    NetworkWanScanApsResult = 78,
    /**
      * **Network hotspot enable result**
      *
      * Result of network hotspot enable operation
    */
    NetworkHotspotEnableResult = 80,
    /**
      * **Generate forbidden area result**
      *
      * Result of generate forbidden area operation
    */
    GenerateForbiddenAreasResult = 139,
    /**
      * **Add sound result**
      *
      * Result of add sound operation
    */
    AddSoundResult = 148,
    /**
      * **Add charging station result**
      *
      * Result of add charging station operation
    */
    SimAddChargingStationResult = 163,
    /**
      * **Add fiducial result**
      *
      * Result of add fiducial operation
    */
    SimAddFiducialResult = 165,
    /**
      * **Add cylinder result**
      *
      * Result of add cylinder operation
    */
    SimAddCylinderResult = 155,
    /**
      * **Add shelf result**
      *
      * Result of add shelf operation
    */
    SimAddShelfResult = 157,
    /**
      * **Clear cylinders result**
      *
      * Result of clear cylinders operation
    */
    SimClearCylindersResult = 161,
    /**
      * **Clear shelves result**
      *
      * Result of clear shelves operation
    */
    SimClearShelvesResult = 159,
    /**
      * **Reset sim world result**
      *
      * Result of reset sim world operation
    */
    SimResetWorldResult = 153,
    
}

/** @internal */
export enum FeedbackEventCode {
    /**
      * **Check 3D box feedback**
      *
      * Feedback on current check 3D box
    */   
    Check3dBoxActionFeedback = 141,
    /**
      * **Veh to pose feedback**
      *
      * Feedback on current move order to pose
    */   
    VehToPoseFeedback = 2,
    /**
      * **Nav segment feedback**
      *
      * Feedback on current nav segment order
    */   
    VehToSegmentFeedback = 111,
    /**
      * **Set vehicule pose feedback**
      *
      * Feedback on set vehicle pose operation
    */   
    SetVehiclePoseFeedback = 93,
    /**
      * **Stop navigation feedback**
      *
      * Feedback on stop navigation operation
    */   
    StopNavigationFeedback = 150,
    /**
      * **Set map feedback**
      *
      * Feedback on set map operation
    */   
    SetMapFeedback = 20,
    /**
      * **Set active map feedback**
      *
      * Feedback on set active map operation
    */   
    SetActiveMapFeedback = 29,
    /**
      * **Veh to charging station feedback**
      *
      * Feedback on move order to a charging station operation
    */   
    VehToChargingStationFeedback = 31,
    /**
      * **Veh to charging station approach feedback**
      *
      * Feedback on move order to a charging station approach operation
    */   
    VehToChargingStationApproachFeedback = 114,
    /**
      * **Veh to docked pose feedback**
      *
      * Feedback on move order to a docked pose operation
    */   
    VehToDockedPoseFeedback = 105,
    /**
      * **Veh to docked pose approach feedback**
      *
      * Feedback on move order to a docked pose approach operation
    */   
    VehToDockedPoseApproachFeedback = 116,
    /**
      * **Veh to saved pose feedback**
      *
      * Feedback on move order to a saved pose operation
    */   
    VehToSavedPoseFeedback = 33,
    /**
      * **Undock feedback**
      *
      * Feedback on undock operation
    */   
    UndockFeedback = 35,
    /**
      * **Undock from shelf feedback**
      *
      * Feedback on undock from shelf operation
    */   
    UndockFromShelfFeedback = 124,
    /**
      * **Get markers feedback**
      *
      * Feedback on get markers operation
    */   
    GetMarkersFeedback = 37,
    /**
      * **Install module feedback**
      *
      * Feedback on install module operation
    */   
    InstallModuleFeedback = 39,
    /**
      * **Disable module feedback**
      *
      * Feedback on disable module operation
    */   
    DisableModuleFeedback = 41,
    /**
      * **Recovery feedback**
      *
      * Feedback on recovery operation
    */   
    RecoveryFeedback = 43,
    /**
      * **Reset database feedback**
      *
      * Feedback on reset database operation
    */   
    ResetDatabaseFeedback = 108,
    /**
      * **Get path feedback**
      *
      * Feedback on get path operation
    */   
    GetPathFeedback = 49,
    /**
      * **Mapping start feedback**
      *
      * Feedback on mapping start operation
    */   
    MappingStartFeedback = 55,
    /**
      * **Mapping stop feedback**
      *
      * Feedback on mapping stop operation
    */   
    MappingStopFeedback = 57,
    /**
      * **Erase active map feedback**
      *
      * Feedback on erase active map operation
    */   
    EraseActiveMapFeedback = 64,
    /**
      * **Reload map feedback**
      *
      * Feedback on reload map operation
    */   
    ReloadMapFeedback = 66,
    /**
      * **Merge maps feedback**
      *
      * Feedback on merge maps operation
    */   
    MergeMapsFeedback = 131,
    /**
      * **Network WAN configuration feedback**
      *
      * Feedback on network WAN config operation
    */   
    NetworkWanConfigFeedback = 73,
    /**
      * **Network WAN enable feedback**
      *
      * Feedback on network WAN enable operation
    */   
    NetworkWanEnableFeedback = 75,
    /**
      * **Network WAN scan APs feedback**
      *
      * Feedback on network WAN scan APs operation
    */   
    NetworkWanScanApsFeedback = 77,
    /**
      * **Network hotspot enable feedback**
      *
      * Feedback on network hotspot enable operation
    */   
    NetworkHotspotEnableFeedback = 79,
    /**
      * **Generate forbidden area feedback**
      *
      * Feedback on generate forbidden area operation
    */   
    GenerateForbiddenAreasFeedback = 137,
    /**
      * **Add sound feedback**
      *
      * Feedback on add sound operation
    */   
    AddSoundFeedback = 147,
    /**
      * **Add charging station feedback**
      *
      * Feedback on add charging station operation
    */   
    SimAddChargingStationFeedback = 162,
    /**
      * **Add fiducial feedback**
      *
      * Feedback on add fiducial operation
    */   
    SimAddFiducialFeedback = 164,
    /**
      * **Add cylinder feedback**
      *
      * Feedback on add cylinder operation
    */   
    SimAddCylinderFeedback = 154,
    /**
      * **Add shelf feedback**
      *
      * Feedback on add shelf operation
    */   
    SimAddShelfFeedback = 156,
    /**
      * **Clear cylinders feedback**
      *
      * Feedback on clear cylinders operation
    */   
    SimClearCylindersFeedback = 160,
    /**
      * **Clear shelves feedback**
      *
      * Feedback on clear shelves operation
    */   
    SimClearShelvesFeedback = 158,
    /**
      * **Reset sim world feedback**
      *
      * Feedback on reset sim world operation
    */   
    SimResetWorldFeedback = 152,
    
}

/* Callbacks type and init */
/** @internal */
export interface EventMsg<T> {
    event_code: TopicEventCode | ResultEventCode | FeedbackEventCode;
    data: T;
}

/** @internal */
export interface EventResultPromiseCallbacks {
    resolve?: (value: any) => void;
    reject?: (reason: Omit<ActionOperationResponseMsg<any>, "op_code">) => void;
}
/** @internal */
export type EventCallback<T> = (data: T) => void;

/** @internal */
export const initEventTopicCallbacks = () =>
({
    [TopicEventCode.AuthOK]: [],
    [TopicEventCode.AuthError]: [],
    [TopicEventCode.VehicleConnectionError]: [],
    [TopicEventCode.VehicleConnectionOpen]: [],
    [TopicEventCode.VehicleConnectionClose]: [],
    [TopicEventCode.Ready]: [],
    [TopicEventCode.ReceivedFragmentedMessage]: [],

    [TopicEventCode.BatteryState]: [],
    [TopicEventCode.ActiveMapUpdated]: [],
    [TopicEventCode.VehiclePose]: [],
    [TopicEventCode.DockingStatus]: [],
    [TopicEventCode.FollowMeStatus]: [],
    [TopicEventCode.NavigationState]: [],
    [TopicEventCode.LedCommand]: [],
    [TopicEventCode.SoundScenario]: [],
    [TopicEventCode.SoundCommand]: [],
    [TopicEventCode.SoundExternalSpeaker]: [],
    [TopicEventCode.VehicleDirection]: [],
    [TopicEventCode.Freewheel]: [],
    [TopicEventCode.OngoingAction]: [],
    [TopicEventCode.MappingVehiclePose]: [],
    [TopicEventCode.MappingMapOrigin]: [],
    [TopicEventCode.MappingError]: [],
    [TopicEventCode.MappingIsStarted]: [],
    [TopicEventCode.CurrentAreas]: [],
    [TopicEventCode.CurrentAreasUuid]: [],
    [TopicEventCode.MaintenanceMode]: [],
    [TopicEventCode.SoundIsPlaying]: [],
    [TopicEventCode.SafetyDiagnostic]: [],
    [TopicEventCode.MappingFeatureOperational]: [],
    [TopicEventCode.HumanInterventionRequired]: [],
    [TopicEventCode.AutopilotStepResult]: [],
    [TopicEventCode.AutopilotStatus]: [],
    [TopicEventCode.AutopilotCurrentStep]: [],
    [TopicEventCode.AutopilotConfig]: [],
    [TopicEventCode.NetworkGlobalStatus]: [],
    [TopicEventCode.NetworkWanState]: [],
    [TopicEventCode.NetworkHotspotStatus]: [],
    [TopicEventCode.CriticalBattery]: [],
    [TopicEventCode.OperationalBattery]: [],
    [TopicEventCode.MovementProhibited]: [],
    [TopicEventCode.OdometerSinceBoot]: [],
    [TopicEventCode.Odometer]: [],
    [TopicEventCode.Velocity]: [],
    [TopicEventCode.CurrentActivePath]: [],
    [TopicEventCode.InternalData]: [],
    [TopicEventCode.CycleStarted]: [],
    [TopicEventCode.ActiveModule]: [],
    [TopicEventCode.ActiveModuleConfiguration]: [],
    [TopicEventCode.RoutesGraphObstacles]: [],
    [TopicEventCode.Sleeping]: [],
    [TopicEventCode.Hibernate]: [],
    [TopicEventCode.VehToFeedback]: [],
    [TopicEventCode.UpdateStatus]: [],
    [TopicEventCode.AutomaticUpdates]: [],
    [TopicEventCode.FlashRoboteqRequested]: [],
    [TopicEventCode.FlashMcuRequested]: [],
    [TopicEventCode.LidarFromRobot]: [],
    [TopicEventCode.LidarInMap]: [],
    [TopicEventCode.LidarMarkers]: [],
    [TopicEventCode.StopSources]: [],
    [TopicEventCode.SystemInfo]: [],
    [TopicEventCode.Security]: [],
    [TopicEventCode.ChassisIntrusionDetection]: [],
    [TopicEventCode.BlockedIp]: [],
    [TopicEventCode.SoundSamples]: [],
    [TopicEventCode.SecurityEvent]: [],
    [TopicEventCode.ConnectedToVeh]: [],
    [TopicEventCode.IsVeh]: [],
    [TopicEventCode.IsManager]: [],
    [TopicEventCode.ButtonsConfig]: [],
    [TopicEventCode.VehsConfig]: [],
    [TopicEventCode.IdModule]: [],
    [TopicEventCode.Map]: [],
    [TopicEventCode.LoraSp]: [],
    [TopicEventCode.MissionLog]: [],
    [TopicEventCode.ListsUpdated]: [],
    [TopicEventCode.WaitRelease]: [],
    [TopicEventCode.InPause]: [],
    [TopicEventCode.InConfigMode]: [],
    [TopicEventCode.CallFromButtonInConfigMode]: [],
    [TopicEventCode.InMultiDestinations]: [],
    [TopicEventCode.VehsInfos]: [],
    [TopicEventCode.ModuleType]: [],
    [TopicEventCode.VehDelayConfig]: [],
    [TopicEventCode.ButtonsInfos]: [],
    [TopicEventCode.MissionTitle]: [],
    [TopicEventCode.OnlyRelease]: [],
    [TopicEventCode.VehDirection]: [],
    [TopicEventCode.DockDirection]: [],
    [TopicEventCode.DailyStats]: [],
    [TopicEventCode.ImportConfigDone]: [],
    [TopicEventCode.AppVersion]: [],
    [TopicEventCode.ResponseDeadline]: [],
    [TopicEventCode.LoraConnected]: [],
    [TopicEventCode.MoveFailedRetrying]: [],
    [TopicEventCode.InMaintenanceMode]: [],
    [TopicEventCode.WaitingPoses]: [],
    [TopicEventCode.WaitOnWaitingPose]: [],
    [TopicEventCode.CustomCommands]: [],
    [TopicEventCode.ControllerLoras]: [],
    [TopicEventCode.MapElementRestrictions]: [],
    [TopicEventCode.DockedPoseConfigs]: [],
    [TopicEventCode.BadLiftPosition]: [],
    [TopicEventCode.AllowMoveFromDock]: [],
    [TopicEventCode.AllowMultipleMissions]: [],
    [TopicEventCode.ShowAllDestinationsOnHome]: [],
    [TopicEventCode.SoftVersions]: [],
    [TopicEventCode.NewSoftVersions]: [],
    [TopicEventCode.WaitingContact]: [],
    [TopicEventCode.ModuleSleeping]: [],
    [TopicEventCode.ModuleHibernate]: [],
    [TopicEventCode.OperatingHours]: [],
    [TopicEventCode.CurrentDestination]: [],
    [TopicEventCode.LoraMessage]: [],
    [TopicEventCode.LoraMessageError]: [],
    [TopicEventCode.LoraPing]: [],
    [TopicEventCode.LoraPingRobot]: [],
    [TopicEventCode.MissionSpecificData]: [],
    [TopicEventCode.Groups]: [],
    [TopicEventCode.OnUuid]: [],
    [TopicEventCode.RocSoftUpdate]: [],
    [TopicEventCode.RocAutomaticUpdates]: [],
    [TopicEventCode.TareModuleParams]: [],
    [TopicEventCode.LoadedModuleParams]: [],
    [TopicEventCode.LiftConnected]: [],
    [TopicEventCode.LiftState]: [],
    [TopicEventCode.LiftHaveBoxOn]: [],
    [TopicEventCode.LiftIsShelfOn]: [],
    [TopicEventCode.CurrentOrigin]: [],
    [TopicEventCode.SleepScreen]: [],
    [TopicEventCode.MapElementConfigs]: [],
    [TopicEventCode.AreaConfigs]: [],
    [TopicEventCode.ControllerLoraContactsConfig]: [],
    [TopicEventCode.PredefinedMessages]: [],
    [TopicEventCode.MissionStepTitle]: [],
    [TopicEventCode.InPauseTitle]: [],
    [TopicEventCode.FollowMeAllowed]: [],
    [TopicEventCode.MaxButtonIdSearch]: [],
    [TopicEventCode.DefaultWaitReleaseSound]: [],
    [TopicEventCode.PortRedirections]: [],
    [TopicEventCode.LiftError]: [],
    [TopicEventCode.InvalidDataList]: [],
    [TopicEventCode.WaitingSounds]: [],
    [TopicEventCode.EventsSounds]: [],
    [TopicEventCode.RocSecurity]: [],
    [TopicEventCode.HotspotEnabled]: [],
    [TopicEventCode.Language]: [],
    [TopicEventCode.PairingEnabled]: [],
    [TopicEventCode.PairingList]: [],
    [TopicEventCode.PairedList]: [],
    [TopicEventCode.PairingOk]: [],
    [TopicEventCode.GlobalEmergencyStop]: [],
    [TopicEventCode.GlobalEmergencyStopMuted]: [],
    [TopicEventCode.DelayBeforePromotingMission]: [],
    [TopicEventCode.UseSyncButtons]: [],
    [TopicEventCode.SyncButtonsWaitTime]: [],
    
})

/** @internal */
export const initEventResultCallbacks = () => ({
    [ResultEventCode.Check3dBoxActionResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.VehToPoseResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.VehToSegmentResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.SetVehiclePoseResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.StopNavigationResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.SetMapResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.SetActiveMapResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.VehToChargingStationResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.VehToChargingStationApproachResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.VehToDockedPoseResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.VehToDockedPoseApproachResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.VehToSavedPoseResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.UndockResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.UndockFromShelfResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.GetMarkersResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.InstallModuleResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.DisableModuleResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.RecoveryResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.ResetDatabaseResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.GetPathResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.MappingStartResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.MappingStopResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.EraseActiveMapResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.ReloadMapResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.MergeMapsResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.NetworkWanConfigResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.NetworkWanEnableResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.NetworkWanScanApsResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.NetworkHotspotEnableResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.GenerateForbiddenAreasResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.AddSoundResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.SimAddChargingStationResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.SimAddFiducialResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.SimAddCylinderResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.SimAddShelfResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.SimClearCylindersResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.SimClearShelvesResult]: {resolve: undefined, reject: undefined},
    [ResultEventCode.SimResetWorldResult]: {resolve: undefined, reject: undefined},
    
})

/** @internal */
export const initEventFeedbackCallbacks = () => ({
    [FeedbackEventCode.Check3dBoxActionFeedback]: undefined,
    [FeedbackEventCode.VehToPoseFeedback]: undefined,
    [FeedbackEventCode.VehToSegmentFeedback]: undefined,
    [FeedbackEventCode.SetVehiclePoseFeedback]: undefined,
    [FeedbackEventCode.StopNavigationFeedback]: undefined,
    [FeedbackEventCode.SetMapFeedback]: undefined,
    [FeedbackEventCode.SetActiveMapFeedback]: undefined,
    [FeedbackEventCode.VehToChargingStationFeedback]: undefined,
    [FeedbackEventCode.VehToChargingStationApproachFeedback]: undefined,
    [FeedbackEventCode.VehToDockedPoseFeedback]: undefined,
    [FeedbackEventCode.VehToDockedPoseApproachFeedback]: undefined,
    [FeedbackEventCode.VehToSavedPoseFeedback]: undefined,
    [FeedbackEventCode.UndockFeedback]: undefined,
    [FeedbackEventCode.UndockFromShelfFeedback]: undefined,
    [FeedbackEventCode.GetMarkersFeedback]: undefined,
    [FeedbackEventCode.InstallModuleFeedback]: undefined,
    [FeedbackEventCode.DisableModuleFeedback]: undefined,
    [FeedbackEventCode.RecoveryFeedback]: undefined,
    [FeedbackEventCode.ResetDatabaseFeedback]: undefined,
    [FeedbackEventCode.GetPathFeedback]: undefined,
    [FeedbackEventCode.MappingStartFeedback]: undefined,
    [FeedbackEventCode.MappingStopFeedback]: undefined,
    [FeedbackEventCode.EraseActiveMapFeedback]: undefined,
    [FeedbackEventCode.ReloadMapFeedback]: undefined,
    [FeedbackEventCode.MergeMapsFeedback]: undefined,
    [FeedbackEventCode.NetworkWanConfigFeedback]: undefined,
    [FeedbackEventCode.NetworkWanEnableFeedback]: undefined,
    [FeedbackEventCode.NetworkWanScanApsFeedback]: undefined,
    [FeedbackEventCode.NetworkHotspotEnableFeedback]: undefined,
    [FeedbackEventCode.GenerateForbiddenAreasFeedback]: undefined,
    [FeedbackEventCode.AddSoundFeedback]: undefined,
    [FeedbackEventCode.SimAddChargingStationFeedback]: undefined,
    [FeedbackEventCode.SimAddFiducialFeedback]: undefined,
    [FeedbackEventCode.SimAddCylinderFeedback]: undefined,
    [FeedbackEventCode.SimAddShelfFeedback]: undefined,
    [FeedbackEventCode.SimClearCylindersFeedback]: undefined,
    [FeedbackEventCode.SimClearShelvesFeedback]: undefined,
    [FeedbackEventCode.SimResetWorldFeedback]: undefined,
    
})

/* Event callback types */
/** @internal */
export type EventDataType = {
[TopicEventCode.AuthOK]: DeepRequired<AuthSessionResult>
[TopicEventCode.AuthError]: DeepRequired<null>
[TopicEventCode.VehicleConnectionError]: DeepRequired<null>
[TopicEventCode.VehicleConnectionOpen]: DeepRequired<null>
[TopicEventCode.VehicleConnectionClose]: DeepRequired<null>
[TopicEventCode.Ready]: DeepRequired<null>
[TopicEventCode.ReceivedFragmentedMessage]: DeepRequired<null>
[TopicEventCode.BatteryState]: DeepRequired<BatteryState>
[TopicEventCode.ActiveMapUpdated]: DeepRequired<boolean>
[TopicEventCode.VehiclePose]: DeepRequired<Pose>
[TopicEventCode.DockingStatus]: DeepRequired<DockingState>
[TopicEventCode.FollowMeStatus]: DeepRequired<FollowMeStatusEventData>
[TopicEventCode.NavigationState]: DeepRequired<NavigationState>
[TopicEventCode.LedCommand]: DeepRequired<LedCommand>
[TopicEventCode.SoundScenario]: DeepRequired<SoundScenario>
[TopicEventCode.SoundCommand]: DeepRequired<SoundCommandEventData>
[TopicEventCode.SoundExternalSpeaker]: DeepRequired<boolean>
[TopicEventCode.VehicleDirection]: DeepRequired<VehicleDirectionEventData>
[TopicEventCode.Freewheel]: DeepRequired<boolean>
[TopicEventCode.OngoingAction]: DeepRequired<OngoingAction>
[TopicEventCode.MappingVehiclePose]: DeepRequired<Pose>
[TopicEventCode.MappingMapOrigin]: DeepRequired<Pose>
[TopicEventCode.MappingError]: DeepRequired<MappingErrorEventData>
[TopicEventCode.MappingIsStarted]: DeepRequired<boolean>
[TopicEventCode.CurrentAreas]: DeepRequired<Areas>
[TopicEventCode.CurrentAreasUuid]: DeepRequired<number[]>
[TopicEventCode.MaintenanceMode]: DeepRequired<boolean>
[TopicEventCode.SoundIsPlaying]: DeepRequired<boolean>
[TopicEventCode.SafetyDiagnostic]: DeepRequired<SafetyDiagnosticEventData>
[TopicEventCode.MappingFeatureOperational]: DeepRequired<boolean>
[TopicEventCode.HumanInterventionRequired]: DeepRequired<HumanInterventionRequired>
[TopicEventCode.AutopilotStepResult]: DeepRequired<AutopilotStepResultEventData>
[TopicEventCode.AutopilotStatus]: DeepRequired<AutopilotStatusEventData>
[TopicEventCode.AutopilotCurrentStep]: DeepRequired<AutopilotStep>
[TopicEventCode.AutopilotConfig]: DeepRequired<AutopilotSequence>
[TopicEventCode.NetworkGlobalStatus]: DeepRequired<NetworkGlobalStatus>
[TopicEventCode.NetworkWanState]: DeepRequired<NetworkWanState>
[TopicEventCode.NetworkHotspotStatus]: DeepRequired<NetworkStatus>
[TopicEventCode.CriticalBattery]: DeepRequired<boolean>
[TopicEventCode.OperationalBattery]: DeepRequired<boolean>
[TopicEventCode.MovementProhibited]: DeepRequired<boolean>
[TopicEventCode.OdometerSinceBoot]: DeepRequired<number>
[TopicEventCode.Odometer]: DeepRequired<number>
[TopicEventCode.Velocity]: DeepRequired<VelocityEventData>
[TopicEventCode.CurrentActivePath]: DeepRequired<Path>
[TopicEventCode.InternalData]: DeepRequired<string>
[TopicEventCode.CycleStarted]: DeepRequired<boolean>
[TopicEventCode.ActiveModule]: DeepRequired<Module>
[TopicEventCode.ActiveModuleConfiguration]: DeepRequired<ModuleConfiguration>
[TopicEventCode.RoutesGraphObstacles]: DeepRequired<Position[]>
[TopicEventCode.Sleeping]: DeepRequired<boolean>
[TopicEventCode.Hibernate]: DeepRequired<boolean>
[TopicEventCode.VehToFeedback]: DeepRequired<VehToFeedbackEventData>
[TopicEventCode.UpdateStatus]: DeepRequired<UpdateStatusEventData>
[TopicEventCode.AutomaticUpdates]: DeepRequired<boolean>
[TopicEventCode.FlashRoboteqRequested]: DeepRequired<boolean>
[TopicEventCode.FlashMcuRequested]: DeepRequired<boolean>
[TopicEventCode.LidarFromRobot]: DeepRequired<Position[]>
[TopicEventCode.LidarInMap]: DeepRequired<Position[]>
[TopicEventCode.LidarMarkers]: DeepRequired<Marker[]>
[TopicEventCode.StopSources]: DeepRequired<StopSource[]>
[TopicEventCode.SystemInfo]: DeepRequired<SystemInfo>
[TopicEventCode.Security]: DeepRequired<Security>
[TopicEventCode.ChassisIntrusionDetection]: DeepRequired<ChassisIntrusionStatus>
[TopicEventCode.BlockedIp]: DeepRequired<string>
[TopicEventCode.SoundSamples]: DeepRequired<string[]>
[TopicEventCode.SecurityEvent]: DeepRequired<SecurityEvent>
[TopicEventCode.ConnectedToVeh]: DeepRequired<boolean>
[TopicEventCode.IsVeh]: DeepRequired<boolean>
[TopicEventCode.IsManager]: DeepRequired<boolean>
[TopicEventCode.ButtonsConfig]: DeepRequired<ButtonConfig[]>
[TopicEventCode.VehsConfig]: DeepRequired<VehConfig[]>
[TopicEventCode.IdModule]: DeepRequired<number>
[TopicEventCode.Map]: DeepRequired<Map>
[TopicEventCode.LoraSp]: DeepRequired<number>
[TopicEventCode.MissionLog]: DeepRequired<string>
[TopicEventCode.ListsUpdated]: DeepRequired<ManagerMissions>
[TopicEventCode.WaitRelease]: DeepRequired<boolean>
[TopicEventCode.InPause]: DeepRequired<boolean>
[TopicEventCode.InConfigMode]: DeepRequired<boolean>
[TopicEventCode.CallFromButtonInConfigMode]: DeepRequired<number>
[TopicEventCode.InMultiDestinations]: DeepRequired<boolean>
[TopicEventCode.VehsInfos]: DeepRequired<VehInfos[]>
[TopicEventCode.ModuleType]: DeepRequired<ModuleType>
[TopicEventCode.VehDelayConfig]: DeepRequired<VehDelayConfig>
[TopicEventCode.ButtonsInfos]: DeepRequired<ButtonInfos[]>
[TopicEventCode.MissionTitle]: DeepRequired<string>
[TopicEventCode.OnlyRelease]: DeepRequired<boolean>
[TopicEventCode.VehDirection]: DeepRequired<VehDirection>
[TopicEventCode.DockDirection]: DeepRequired<VehDirection>
[TopicEventCode.DailyStats]: DeepRequired<DailyStats>
[TopicEventCode.ImportConfigDone]: DeepRequired<InstallConfigDone>
[TopicEventCode.AppVersion]: DeepRequired<string>
[TopicEventCode.ResponseDeadline]: DeepRequired<ResponseDeadlineConfig>
[TopicEventCode.LoraConnected]: DeepRequired<boolean>
[TopicEventCode.MoveFailedRetrying]: DeepRequired<boolean>
[TopicEventCode.InMaintenanceMode]: DeepRequired<boolean>
[TopicEventCode.WaitingPoses]: DeepRequired<WaitingPose[]>
[TopicEventCode.WaitOnWaitingPose]: DeepRequired<boolean>
[TopicEventCode.CustomCommands]: DeepRequired<CustomCommand[]>
[TopicEventCode.ControllerLoras]: DeepRequired<ControllerLora[]>
[TopicEventCode.MapElementRestrictions]: DeepRequired<MapElementRestriction[]>
[TopicEventCode.DockedPoseConfigs]: DeepRequired<DockedPoseConfig[]>
[TopicEventCode.BadLiftPosition]: DeepRequired<boolean>
[TopicEventCode.AllowMoveFromDock]: DeepRequired<boolean>
[TopicEventCode.AllowMultipleMissions]: DeepRequired<boolean>
[TopicEventCode.ShowAllDestinationsOnHome]: DeepRequired<boolean>
[TopicEventCode.SoftVersions]: DeepRequired<SoftVersions>
[TopicEventCode.NewSoftVersions]: DeepRequired<boolean>
[TopicEventCode.WaitingContact]: DeepRequired<boolean>
[TopicEventCode.ModuleSleeping]: DeepRequired<boolean>
[TopicEventCode.ModuleHibernate]: DeepRequired<boolean>
[TopicEventCode.OperatingHours]: DeepRequired<OperatingHours>
[TopicEventCode.CurrentDestination]: DeepRequired<number>
[TopicEventCode.LoraMessage]: DeepRequired<LoraMessage>
[TopicEventCode.LoraMessageError]: DeepRequired<string>
[TopicEventCode.LoraPing]: DeepRequired<boolean>
[TopicEventCode.LoraPingRobot]: DeepRequired<boolean>
[TopicEventCode.MissionSpecificData]: DeepRequired<number>
[TopicEventCode.Groups]: DeepRequired<Group[]>
[TopicEventCode.OnUuid]: DeepRequired<number>
[TopicEventCode.RocSoftUpdate]: DeepRequired<UpdateStatus>
[TopicEventCode.RocAutomaticUpdates]: DeepRequired<boolean>
[TopicEventCode.TareModuleParams]: DeepRequired<ModuleParams>
[TopicEventCode.LoadedModuleParams]: DeepRequired<ModuleParams>
[TopicEventCode.LiftConnected]: DeepRequired<boolean>
[TopicEventCode.LiftState]: DeepRequired<LiftStatus>
[TopicEventCode.LiftHaveBoxOn]: DeepRequired<boolean>
[TopicEventCode.LiftIsShelfOn]: DeepRequired<boolean>
[TopicEventCode.CurrentOrigin]: DeepRequired<number>
[TopicEventCode.SleepScreen]: DeepRequired<boolean>
[TopicEventCode.MapElementConfigs]: DeepRequired<RocMapElementConfig[]>
[TopicEventCode.AreaConfigs]: DeepRequired<RocAreaConfig[]>
[TopicEventCode.ControllerLoraContactsConfig]: DeepRequired<ControllerLoraContactsConfig>
[TopicEventCode.PredefinedMessages]: DeepRequired<string[]>
[TopicEventCode.MissionStepTitle]: DeepRequired<string>
[TopicEventCode.InPauseTitle]: DeepRequired<string>
[TopicEventCode.FollowMeAllowed]: DeepRequired<boolean>
[TopicEventCode.MaxButtonIdSearch]: DeepRequired<number>
[TopicEventCode.DefaultWaitReleaseSound]: DeepRequired<string>
[TopicEventCode.PortRedirections]: DeepRequired<ExternalPortRedirection[]>
[TopicEventCode.LiftError]: DeepRequired<boolean>
[TopicEventCode.InvalidDataList]: DeepRequired<InvalidDataBySection[]>
[TopicEventCode.WaitingSounds]: DeepRequired<WaitingSound[]>
[TopicEventCode.EventsSounds]: DeepRequired<EventSound[]>
[TopicEventCode.RocSecurity]: DeepRequired<RocSecurity>
[TopicEventCode.HotspotEnabled]: DeepRequired<boolean>
[TopicEventCode.Language]: DeepRequired<Language>
[TopicEventCode.PairingEnabled]: DeepRequired<boolean>
[TopicEventCode.PairingList]: DeepRequired<LoraEquipment[]>
[TopicEventCode.PairedList]: DeepRequired<LoraEquipment[]>
[TopicEventCode.PairingOk]: DeepRequired<boolean>
[TopicEventCode.GlobalEmergencyStop]: DeepRequired<boolean>
[TopicEventCode.GlobalEmergencyStopMuted]: DeepRequired<boolean>
[TopicEventCode.DelayBeforePromotingMission]: DeepRequired<number>
[TopicEventCode.UseSyncButtons]: DeepRequired<boolean>
[TopicEventCode.SyncButtonsWaitTime]: DeepRequired<number>
}