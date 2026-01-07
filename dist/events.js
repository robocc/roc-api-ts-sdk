"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initEventFeedbackCallbacks = exports.initEventResultCallbacks = exports.initEventTopicCallbacks = exports.FeedbackEventCode = exports.ResultEventCode = exports.TopicEventCode = void 0;
/* Enums for each type of event */
var TopicEventCode;
(function (TopicEventCode) {
    TopicEventCode[TopicEventCode["AuthOK"] = -7] = "AuthOK";
    TopicEventCode[TopicEventCode["AuthError"] = -6] = "AuthError";
    TopicEventCode[TopicEventCode["VehicleConnectionError"] = -5] = "VehicleConnectionError";
    TopicEventCode[TopicEventCode["VehicleConnectionOpen"] = -4] = "VehicleConnectionOpen";
    TopicEventCode[TopicEventCode["VehicleConnectionClose"] = -3] = "VehicleConnectionClose";
    TopicEventCode[TopicEventCode["Ready"] = -2] = "Ready";
    TopicEventCode[TopicEventCode["ReceivedFragmentedMessage"] = -1] = "ReceivedFragmentedMessage";
    /**
      * **Battery state**
      *
      * Battery information with power status and some electrical data 🔋
      
      * @data {@link BatteryState}
      * @category Battery management
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["BatteryState"] = 1] = "BatteryState";
    /**
      * **Active map updated**
      *
      * Triggered when active map is updated, boolean returns the information that map images have changed 🗺
      
      * @data {@link boolean}
      * @category Map management
      * @group Map
      
    */
    TopicEventCode[TopicEventCode["ActiveMapUpdated"] = 4] = "ActiveMapUpdated";
    /**
      * **Vehicle pose**
      *
      * Vehicle pose on its map, relevant only if navigation is running 🚗
      
      * @data {@link Pose}
      * @category Navigation
      * @group Navigation
      
    */
    TopicEventCode[TopicEventCode["VehiclePose"] = 5] = "VehiclePose";
    /**
      * **Docking status**
      *
      * Vehicle docking status docked, undocked or in between state 🔌
      
      * @data {@link DockingState}
      * @category Docking
      * @group Navigation
      
    */
    TopicEventCode[TopicEventCode["DockingStatus"] = 6] = "DockingStatus";
    /**
      * **Follow me status**
      *
      * Status of the follow me feature 👣
      
      * @data {@link FollowMeStatusEventData}
      * @category Navigation
      * @group Navigation
      
    */
    TopicEventCode[TopicEventCode["FollowMeStatus"] = 113] = "FollowMeStatus";
    /**
      * **Navigation started**
      *
      * Triggered when navigation status is updated, boolean returns the status of navigation 🧭
      
      * @data {@link boolean}
      * @category Navigation
      * @group Navigation
      
    */
    TopicEventCode[TopicEventCode["NavigationStarted"] = 7] = "NavigationStarted";
    /**
      * **LED command**
      *
      * LED displayed on the vehicle with animation, color, corner animation, etc. 🚥
      
      * @data {@link LedCommand}
      * @category LED
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["LedCommand"] = 102] = "LedCommand";
    /**
      * **Sound scenario**
      *
      * Sound scenario ID 🔉
      
      * @data {@link SoundScenario}
      * @category Sound
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["SoundScenario"] = 103] = "SoundScenario";
    /**
      * **Sound command**
      *
      * Sound command played by the vehicle, with sample ID, volume and loop count 🔉
      
      * @data {@link SoundCommandEventData}
      * @category Sound
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["SoundCommand"] = 104] = "SoundCommand";
    /**
      * **External speaker**
      *
      * Use an external speaker for sound
      
      * @data {@link boolean}
      * @category Sound
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["SoundExternalSpeaker"] = 136] = "SoundExternalSpeaker";
    /**
      * **Vehicle direction**
      *
      * Vehicle direction ↔️
      
      * @data {@link VehicleDirectionEventData}
      * @category Navigation
      * @group Navigation
      
    */
    TopicEventCode[TopicEventCode["VehicleDirection"] = 46] = "VehicleDirection";
    /**
      * **Freewheel**
      *
      * Vehicle freewheel status
      
      * @data {@link boolean}
      * @category Vehicle state
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["Freewheel"] = 45] = "Freewheel";
    /**
      * **Ongoing action**
      *
      * Vehicle ongoing action, false if no current action
      
      * @data {@link OngoingAction}
      * @category Current action
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["OngoingAction"] = 47] = "OngoingAction";
    /**
      * **Mapping vehicle pose**
      *
      * Vehicle pose in under construction map
      
      * @data {@link Pose}
      * @category Mapping
      * @group Mapping
      
    */
    TopicEventCode[TopicEventCode["MappingVehiclePose"] = 51] = "MappingVehiclePose";
    /**
      * **Mapping map origin**
      *
      * Under construction map origin
      
      * @data {@link Pose}
      * @category Mapping
      * @group Mapping
      
    */
    TopicEventCode[TopicEventCode["MappingMapOrigin"] = 52] = "MappingMapOrigin";
    /**
      * **Mapping error**
      *
      * Error occured in mapping mode
      
      * @data {@link MappingErrorEventData}
      * @category Mapping
      * @group Mapping
      
    */
    TopicEventCode[TopicEventCode["MappingError"] = 53] = "MappingError";
    /**
      * **Mapping is started**
      *
      * Mapping is started or not
      
      * @data {@link boolean}
      * @category Mapping
      * @group Mapping
      
    */
    TopicEventCode[TopicEventCode["MappingIsStarted"] = 54] = "MappingIsStarted";
    /**
      * **Current areas**
      *
      * Areas's behaviour in which the vehicle is currently located, behaviour of global area if vehicle is not in a specific area
      
      * @data {@link Areas}
      * @category Navigation
      * @group Navigation
      
    */
    TopicEventCode[TopicEventCode["CurrentAreas"] = 63] = "CurrentAreas";
    /**
      * **Current areas Uuid**
      *
      * Area's uuid in which the vehicle is currently located, 0 if vehicle is not in a specific area
      
      * @data {@link number}[]
      * @category Navigation
      * @group Navigation
      
    */
    TopicEventCode[TopicEventCode["CurrentAreasUuid"] = 110] = "CurrentAreasUuid";
    /**
      * **Maintenance mode on**
      *
      * Maintenance mode is enabled or not 🚧
      
      * @data {@link boolean}
      * @category Maintenance
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["MaintenanceMode"] = 83] = "MaintenanceMode";
    /**
      * **Sound is playing**
      *
      * Sound is playing or not 🔉
      
      * @data {@link boolean}
      * @category Sound
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["SoundIsPlaying"] = 95] = "SoundIsPlaying";
    /**
      * **Safety diagnostic**
      *
      * Diagnostic state with diagnostic error set to true if an error occured, with critical level associated 📋
      
      * @data {@link SafetyDiagnosticEventData}
      * @category Diagnostic
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["SafetyDiagnostic"] = 84] = "SafetyDiagnostic";
    /**
      * **Mapping feature operational**
      *
      * Wether a mapping can be performed or not
      
      * @data {@link boolean}
      * @category Diagnostic
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["MappingFeatureOperational"] = 140] = "MappingFeatureOperational";
    /**
      * **Human intervention required**
      *
      * Human intervention required event, human_intervention_required field is set to true if human assistance needed to unlock robot, the others boolean defines which kind of intervention is required 👨🏽‍🔧
      
      * @data {@link HumanInterventionRequired}
      * @category Diagnostic
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["HumanInterventionRequired"] = 86] = "HumanInterventionRequired";
    /**
      * **Autopilot step result**
      *
      * Last autopilot step result
      
      * @data {@link AutopilotStepResultEventData}
      * @category Autopilot
      * @group Navigation
      
    */
    TopicEventCode[TopicEventCode["AutopilotStepResult"] = 68] = "AutopilotStepResult";
    /**
      * **Autopilot status**
      *
      * Autopilot current status
      
      * @data {@link AutopilotStatusEventData}
      * @category Autopilot
      * @group Navigation
      
    */
    TopicEventCode[TopicEventCode["AutopilotStatus"] = 69] = "AutopilotStatus";
    /**
      * **Autopilot current step**
      *
      * Autopilot current step executed on the vehicle
      
      * @data {@link AutopilotIndexedStep}
      * @category Autopilot
      * @group Navigation
      
    */
    TopicEventCode[TopicEventCode["AutopilotCurrentStep"] = 70] = "AutopilotCurrentStep";
    /**
      * **Autopilot current step**
      *
      * Autopilot current config set on vehicle
      
      * @data {@link AutopilotSequence}
      * @category Autopilot
      * @group Navigation
      
    */
    TopicEventCode[TopicEventCode["AutopilotConfig"] = 85] = "AutopilotConfig";
    /**
      * **Network global state**
      *
      * Network global state 🌐
      
      * @data {@link NetworkGlobalStatus}
      * @category Network
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["NetworkGlobalStatus"] = 81] = "NetworkGlobalStatus";
    /**
      * **Network wan state**
      *
      * Sent upon WAN configuration update 🌐
      
      * @data {@link NetworkWanState}
      * @category Network
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["NetworkWanState"] = 91] = "NetworkWanState";
    /**
      * **Network hotspot state**
      *
      * Sent upon vehicle hotspot configuration update 🛜
      
      * @data {@link NetworkStatus}
      * @category Network
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["NetworkHotspotStatus"] = 92] = "NetworkHotspotStatus";
    /**
      * **Critical battery**
      *
      * Critical battery level threshold reached 🪫
      
      * @data {@link boolean}
      * @category Battery management
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["CriticalBattery"] = 71] = "CriticalBattery";
    /**
      * **Operational battery**
      *
      * Operational battery level threshold reached 🔋
      
      * @data {@link boolean}
      * @category Battery management
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["OperationalBattery"] = 72] = "OperationalBattery";
    /**
      * **Movement prohibited**
      *
      * Movement prohibited from module 🚫
      
      * @data {@link boolean}
      * @category Navigation
      * @group Navigation
      
    */
    TopicEventCode[TopicEventCode["MovementProhibited"] = 88] = "MovementProhibited";
    /**
      * **Odometer since boot**
      *
      * Odometer since last boot in meters
      
      * @data {@link number}
      * @category Vehicle state
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["OdometerSinceBoot"] = 90] = "OdometerSinceBoot";
    /**
      * **Odometer**
      *
      * Vehicle total odometer in meters
      
      * @data {@link number}
      * @category Vehicle state
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["Odometer"] = 89] = "Odometer";
    /**
      * **Velocity**
      *
      * Vehicle velocity
      
      * @data {@link VelocityEventData}
      * @category Vehicle state
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["Velocity"] = 121] = "Velocity";
    /**
      * **Current active path**
      *
      * Current path executed by the vehicle
      
      * @data {@link Path}
      * @category Navigation
      * @group Navigation
      
    */
    TopicEventCode[TopicEventCode["CurrentActivePath"] = 96] = "CurrentActivePath";
    /**
      * **Internal data**
      *
      * Internal data 💾
      
      * @data {@link string}
      * @category Internal data
      * @group Internal
      
    */
    TopicEventCode[TopicEventCode["InternalData"] = 98] = "InternalData";
    /**
      * **Cycle started**
      *
      * Vehicle cycle has started or not, cycle must be started at each boot before any order
      
      * @data {@link boolean}
      * @category Vehicle state
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["CycleStarted"] = 99] = "CycleStarted";
    /**
      * **Active module**
      *
      * Vehicle active module, false if not active module
      
      * @data {@link false | Module}
      * @category Module
      * @group Module
      
    */
    TopicEventCode[TopicEventCode["ActiveModule"] = 107] = "ActiveModule";
    /**
      * **Active module params**
      *
      * Vehicle active module configuration
      
      * @data {@link ModuleConfiguration}
      * @category Module
      * @group Module
      
    */
    TopicEventCode[TopicEventCode["ActiveModuleConfiguration"] = 130] = "ActiveModuleConfiguration";
    /**
      * **Routes graph obstacles**
      *
      * List of obstacles across the routes
      
      * @data {@link Position}[]
      * @category Navigation
      * @group Navigation
      
    */
    TopicEventCode[TopicEventCode["RoutesGraphObstacles"] = 118] = "RoutesGraphObstacles";
    /**
      * **Sleeping**
      *
      * Vehicle in sleeping mode or not
      
      * @data {@link boolean}
      * @category Battery management
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["Sleeping"] = 119] = "Sleeping";
    /**
      * **Hibernate**
      *
      * Vehicle in hibernation mode or not
      
      * @data {@link boolean}
      * @category Battery management
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["Hibernate"] = 120] = "Hibernate";
    /**
      * **Veh to feedback**
      *
      * Feedback on current move order to an element
      
      * @data {@link VehToFeedbackEventData}
      * @category Navigation
      * @group Navigation
      
    */
    TopicEventCode[TopicEventCode["VehToFeedback"] = 97] = "VehToFeedback";
    /**
      * **Update status**
      *
      * System update information
      
      * @data {@link UpdateStatusEventData}
      * @category Version
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["UpdateStatus"] = 122] = "UpdateStatus";
    /**
      * **Automatic updates**
      *
      * Automatic updates are enabled or disabled
      
      * @data {@link boolean}
      * @category Version
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["AutomaticUpdates"] = 123] = "AutomaticUpdates";
    /**
      * **Flash Roboteq requested**
      *
      * The roboteq motor controller will be flashed at next reboot
      
      * @data {@link boolean}
      * @category System
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["FlashRoboteqRequested"] = 126] = "FlashRoboteqRequested";
    /**
      * **Flash MCU requested**
      *
      * The teensy/pico mcu will be flashed at next reboot
      
      * @data {@link boolean}
      * @category System
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["FlashMcuRequested"] = 127] = "FlashMcuRequested";
    /**
      * **Lidar points in robot frame**
      *
      * Lidar points in robot frame
      
      * @data {@link Position}[]
      * @category Vehicle state
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["LidarFromRobot"] = 133] = "LidarFromRobot";
    /**
      * **Lidar points in map**
      *
      * Lidar points in map
      
      * @data {@link Position}[]
      * @category Vehicle state
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["LidarInMap"] = 134] = "LidarInMap";
    /**
      * **Lidar markers in map**
      *
      * Markers points in map
      
      * @data {@link Marker}[]
      * @category Vehicle state
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["LidarMarkers"] = 135] = "LidarMarkers";
    /**
      * **Stop sources**
      *
      * Sources that is currently stopping vehicle motion
      
      * @data {@link StopSource}[]
      * @category Vehicle state
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["StopSources"] = 143] = "StopSources";
    /**
      * **System information**
      *
      * System information
      
      * @data {@link SystemInfo}
      * @category Diagnostic
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["SystemInfo"] = 144] = "SystemInfo";
    /**
      * **Secuirty configuration**
      *
      * Security information
      
      * @data {@link Security}
      * @category System
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["Security"] = 145] = "Security";
    /**
      * **Blocked ip**
      *
      * Last blocked ip
      
      * @data {@link string}
      * @category System
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["BlockedIp"] = 146] = "BlockedIp";
    /**
      * **List of sound**
      *
      * List of sound in library
      
      * @data {@link string}[]
      * @category Sound
      * @group Database
      
    */
    TopicEventCode[TopicEventCode["SoundSamples"] = 149] = "SoundSamples";
    /**
      * **Connected to vehicle**
      *
      * Triggered when app is connected to vehicle API
      
      * @data {@link boolean}
      * @category State
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["ConnectedToVeh"] = 7000] = "ConnectedToVeh";
    /**
      * **Is vehicle**
      *
      * Is vehicle
      
      * @data {@link boolean}
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["IsVeh"] = 7001] = "IsVeh";
    /**
      * **Is manager**
      *
      * Is manager
      
      * @data {@link boolean}
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["IsManager"] = 7002] = "IsManager";
    /**
      * **Buttons configuration**
      *
      * Buttons configuration
      
      * @data {@link ButtonConfig}[]
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["ButtonsConfig"] = 7003] = "ButtonsConfig";
    /**
      * **Vehicles configuration**
      *
      * Vehicles configuration
      
      * @data {@link VehConfig}[]
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["VehsConfig"] = 7004] = "VehsConfig";
    /**
      * **Module LoRa ID**
      *
      * Module LoRa ID
      
      * @data {@link number}
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["IdModule"] = 7006] = "IdModule";
    /**
      * **Map**
      *
      * Map
      
      * @data {@link Map}
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["Map"] = 7007] = "Map";
    /**
      * **LoRa SP**
      *
      * LoRa SP
      
      * @data {@link number}
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["LoraSp"] = 7008] = "LoraSp";
    /**
      * **Mission log**
      *
      * Mission log
      
      * @data {@link string}
      * @category Mission
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["MissionLog"] = 7009] = "MissionLog";
    /**
      * **Missions lists updated**
      *
      * Missions lists updated
      
      * @data {@link ManagerMissions}
      * @category Mission
      * @group Manager
      
    */
    TopicEventCode[TopicEventCode["ListsUpdated"] = 7010] = "ListsUpdated";
    /**
      * **Wait release**
      *
      * Wait release
      
      * @data {@link boolean}
      * @category Mission
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["WaitRelease"] = 7011] = "WaitRelease";
    /**
      * **In pause**
      *
      * In pause
      
      * @data {@link boolean}
      * @category Mission
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["InPause"] = 7012] = "InPause";
    /**
      * **In configuration mode**
      *
      * In configuration mode
      
      * @data {@link boolean}
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["InConfigMode"] = 7013] = "InConfigMode";
    /**
      * **Call recevied from a button in configuration mode**
      *
      * Call recevied from a button in configuration mode
      
      * @data {@link number}
      * @category Mission
      * @group Manager
      
    */
    TopicEventCode[TopicEventCode["CallFromButtonInConfigMode"] = 7014] = "CallFromButtonInConfigMode";
    /**
      * **In Multi Destinations**
      *
      * In Multi Destinations
      
      * @data {@link boolean}
      * @category Mission
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["InMultiDestinations"] = 7015] = "InMultiDestinations";
    /**
      * **Vehicles information**
      *
      * Vehicles information
      
      * @data {@link VehInfos}[]
      * @category Mission
      * @group Manager
      
    */
    TopicEventCode[TopicEventCode["VehsInfos"] = 7016] = "VehsInfos";
    /**
      * **Module type**
      *
      * Module type
      
      * @data {@link ModuleType}
      * @category Mission
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["ModuleType"] = 7017] = "ModuleType";
    /**
      * **Vehicle delay configuration**
      *
      * Vehicle delay configuration
      
      * @data {@link VehDelayConfig}
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["VehDelayConfig"] = 7020] = "VehDelayConfig";
    /**
      * **Buttons Informations**
      *
      * Buttons Informations
      
      * @data {@link ButtonInfos}[]
      * @category Configuration
      * @group Manager
      
    */
    TopicEventCode[TopicEventCode["ButtonsInfos"] = 7021] = "ButtonsInfos";
    /**
      * **Mission title**
      *
      * Mission title
      
      * @data {@link string}
      * @category Mission
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["MissionTitle"] = 7022] = "MissionTitle";
    /**
      * **Only release**
      *
      * Only release
      
      * @data {@link boolean}
      * @category Mission
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["OnlyRelease"] = 7023] = "OnlyRelease";
    /**
      * **Vehicle direction - mast position**
      *
      * Vehicle direction - mast position
      
      * @data {@link VehDirection}
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["VehDirection"] = 7024] = "VehDirection";
    /**
      * **Dock direction**
      *
      * Dock direction
      
      * @data {@link VehDirection}
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["DockDirection"] = 7076] = "DockDirection";
    /**
      * **Daily stats**
      *
      * Daily stats
      
      * @data {@link DailyStats}
      * @category Stats
      * @group Manager
      
    */
    TopicEventCode[TopicEventCode["DailyStats"] = 7025] = "DailyStats";
    /**
      * **Import configuration done**
      *
      * Import configuration done
      
      * @data {@link InstallConfigDone}
      * @category State
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["ImportConfigDone"] = 7026] = "ImportConfigDone";
    /**
      * **Application version**
      *
      * Application version
      
      * @data {@link string}
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["AppVersion"] = 7027] = "AppVersion";
    /**
      * **Response deadline**
      *
      * Response deadline
      
      * @data {@link ResponseDeadlineConfig}
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["ResponseDeadline"] = 7028] = "ResponseDeadline";
    /**
      * **LoRa connected**
      *
      * LoRa connected
      
      * @data {@link boolean}
      * @category State
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["LoraConnected"] = 7029] = "LoraConnected";
    /**
      * **Move failed, retrying**
      *
      * Move failed, retrying
      
      * @data {@link boolean}
      * @category Mission
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["MoveFailedRetrying"] = 7030] = "MoveFailedRetrying";
    /**
      * **In maintenance mode**
      *
      * In maintenance mode
      
      * @data {@link boolean}
      * @category State
      * @group Manager
      
    */
    TopicEventCode[TopicEventCode["InMaintenanceMode"] = 7031] = "InMaintenanceMode";
    /**
      * **Waiting poses**
      *
      * Waiting poses
      
      * @data {@link WaitingPose}[]
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["WaitingPoses"] = 7032] = "WaitingPoses";
    /**
      * **Wait on waiting pose**
      *
      * Wait on waiting pose
      
      * @data {@link boolean}
      * @category Mission
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["WaitOnWaitingPose"] = 7033] = "WaitOnWaitingPose";
    /**
      * **Custom commands**
      *
      * Custom commands
      
      * @data {@link CustomCommand}[]
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["CustomCommands"] = 7034] = "CustomCommands";
    /**
      * **Controller LoRas**
      *
      * Controller LoRas
      
      * @data {@link ControllerLora}[]
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["ControllerLoras"] = 7035] = "ControllerLoras";
    /**
      * **Map element restrictions**
      *
      * Map element restrictions
      
      * @data {@link MapElementRestriction}[]
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["MapElementRestrictions"] = 7036] = "MapElementRestrictions";
    /**
      * **Is Touch Screen**
      *
      * Is Touch Screen
      
      * @data {@link boolean}
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["IsTouchScreen"] = 7037] = "IsTouchScreen";
    /**
      * **Docked pose configurations**
      *
      * Docked pose configurations
      
      * @data {@link DockedPoseConfig}[]
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["DockedPoseConfigs"] = 7039] = "DockedPoseConfigs";
    /**
      * **Bad lift position**
      *
      * Bad lift position
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["BadLiftPosition"] = 7040] = "BadLiftPosition";
    /**
      * **Bad lift configuration**
      *
      * Bad lift configuration
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["BadLiftConfiguration"] = 7078] = "BadLiftConfiguration";
    /**
      * **Allow move from dock**
      *
      * Allow move from dock
      
      * @data {@link boolean}
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["AllowMoveFromDock"] = 7041] = "AllowMoveFromDock";
    /**
      * **Allow multiple mission for the same button**
      *
      * Allow multiple mission for the same button
      
      * @data {@link boolean}
      * @category Configuration
      * @group Manager
      
    */
    TopicEventCode[TopicEventCode["AllowMultipleMissions"] = 7080] = "AllowMultipleMissions";
    /**
      * **Softwares versions**
      *
      * Softwares versions
      
      * @data {@link SoftVersions}
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["SoftVersions"] = 7042] = "SoftVersions";
    /**
      * **New softwares versions**
      *
      * New softwares versions
      
      * @data {@link boolean}
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["NewSoftVersions"] = 7043] = "NewSoftVersions";
    /**
      * **Waiting contact**
      *
      * Waiting contact from LoRa controller
      
      * @data {@link boolean}
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["WaitingContact"] = 7044] = "WaitingContact";
    /**
      * **Sleeping**
      *
      * Sleeping
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["ModuleSleeping"] = 7045] = "ModuleSleeping";
    /**
      * **Hibernate**
      *
      * Hibernate
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["ModuleHibernate"] = 7046] = "ModuleHibernate";
    /**
      * **Operating hours**
      *
      * Operating hours
      
      * @data {@link OperatingHours}
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["OperatingHours"] = 7047] = "OperatingHours";
    /**
      * **Current destination**
      *
      * Current destination
      
      * @data {@link number}
      * @category Mission
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["CurrentDestination"] = 7048] = "CurrentDestination";
    /**
      * **LoRa Message**
      *
      * LoRa Message
      
      * @data {@link LoraMessage}
      * @category State
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["LoraMessage"] = 7049] = "LoraMessage";
    /**
      * **LoRa Message error**
      *
      * LoRa Message error
      
      * @data {@link string}
      * @category State
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["LoraMessageError"] = 7050] = "LoraMessageError";
    /**
      * **LoRa ping**
      *
      * LoRa ping
      
      * @data {@link boolean}
      * @category State
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["LoraPing"] = 7051] = "LoraPing";
    /**
      * **LoRa ping robot**
      *
      * LoRa ping robot
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["LoraPingRobot"] = 7052] = "LoraPingRobot";
    /**
      * **Specific data of the current mission**
      *
      * Specific data of the current mission
      
      * @data {@link number}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["MissionSpecificData"] = 7053] = "MissionSpecificData";
    /**
      * **List of groups**
      *
      * List of groups
      
      * @data {@link Group}[]
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["Groups"] = 7054] = "Groups";
    /**
      * **On uuid**
      *
      * Current position uuid of robot
      
      * @data {@link number}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["OnUuid"] = 7055] = "OnUuid";
    /**
      * **ROC Soft update**
      *
      * Current status of update
      
      * @data {@link UpdateStatus}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["RocSoftUpdate"] = 7056] = "RocSoftUpdate";
    /**
      * **ROC Automatic updates**
      *
      * ROC Automatic updates activated
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["RocAutomaticUpdates"] = 7057] = "RocAutomaticUpdates";
    /**
      * **Tare module params**
      *
      * Tare module params
      
      * @data {@link ModuleParams}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["TareModuleParams"] = 7058] = "TareModuleParams";
    /**
      * **Loaded module params**
      *
      * Loaded module params
      
      * @data {@link ModuleParams}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["LoadedModuleParams"] = 7059] = "LoadedModuleParams";
    /**
      * **Lift connected**
      *
      * Lift conected
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["LiftConnected"] = 7060] = "LiftConnected";
    /**
      * **Lift state**
      *
      * Lift state
      
      * @data {@link LiftStatus}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["LiftState"] = 7061] = "LiftState";
    /**
      * **Lift have box on**
      *
      * Lift have box on
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["LiftHaveBoxOn"] = 7067] = "LiftHaveBoxOn";
    /**
      * **Lift box is a shelf**
      *
      * Lift box is a shelf
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["LiftIsShelfOn"] = 7079] = "LiftIsShelfOn";
    /**
      * **Current origin**
      *
      * Current origin uuid
      
      * @data {@link number}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["CurrentOrigin"] = 7062] = "CurrentOrigin";
    /**
      * **Sleep screen**
      *
      * Sleep screen
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["SleepScreen"] = 7063] = "SleepScreen";
    /**
      * **Map element config**
      *
      * Map element config
      
      * @data {@link RocMapElementConfig}[]
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["MapElementConfigs"] = 7064] = "MapElementConfigs";
    /**
      * **Controller LoRa Contacts configuration**
      *
      * Controller LoRa Contacts configuration
      
      * @data {@link ControllerLoraContactConfig}[]
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["ControllerLoraContactsConfig"] = 7065] = "ControllerLoraContactsConfig";
    /**
      * **Predefined messages**
      *
      * Predefined messages
      
      * @data {@link string}[]
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["PredefinedMessages"] = 7066] = "PredefinedMessages";
    /**
      * **Mission step title**
      *
      * Mission step title
      
      * @data {@link string}
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["MissionStepTitle"] = 7068] = "MissionStepTitle";
    /**
      * **Mission step title**
      *
      * Mission step title
      
      * @data {@link string}
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["InPauseTitle"] = 7069] = "InPauseTitle";
    /**
      * **Follow me allowed**
      *
      * Follow me allowed
      
      * @data {@link boolean}
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["FollowMeAllowed"] = 7070] = "FollowMeAllowed";
    /**
      * **Max button ID search**
      *
      * Max button ID search
      
      * @data {@link number}
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["MaxButtonIdSearch"] = 7071] = "MaxButtonIdSearch";
    /**
      * **Default Wait Release Sound**
      *
      * Default Wait Release Sound
      
      * @data {@link string}
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["DefaultWaitReleaseSound"] = 7072] = "DefaultWaitReleaseSound";
    /**
      * **Port redirection**
      *
      * Port redirection
      
      * @data {@link ExternalPortRedirection}[]
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["PortRedirections"] = 7073] = "PortRedirections";
    /**
      * **External speaker**
      *
      * Use external speaker
      
      * @data {@link boolean}
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["ExternalSpeaker"] = 7074] = "ExternalSpeaker";
    /**
      * **Error on lift**
      *
      * Error on lift
      
      * @data {@link boolean}
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["LiftError"] = 7075] = "LiftError";
    /**
      * **Invalid data list**
      *
      * Lift of invalid data
      
      * @data {@link InvalidDataBySection}[]
      * @category State
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["InvalidDataList"] = 7077] = "InvalidDataList";
    /**
      * **Waiting sounds**
      *
      * List of waiting sound
      
      * @data {@link WaitingSound}[]
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["WaitingSounds"] = 7081] = "WaitingSounds";
    /**
      * **Event sounds**
      *
      * List of event sound
      
      * @data {@link EventSound}[]
      * @category Configuration
      * @group Vehicle
      
    */
    TopicEventCode[TopicEventCode["EventsSounds"] = 7082] = "EventsSounds";
    /**
      * **ROC Security**
      *
      * ROC Security
      
      * @data {@link RocSecurity}
      * @category Configuration
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["RocSecurity"] = 7083] = "RocSecurity";
    /**
      * **Hotspot enabled**
      *
      * Hotspot enabled
      
      * @data {@link boolean}
      * @category Network
      * @group ROC
      
    */
    TopicEventCode[TopicEventCode["HotspotEnabled"] = 7084] = "HotspotEnabled";
})(TopicEventCode || (exports.TopicEventCode = TopicEventCode = {}));
/** @internal */
var ResultEventCode;
(function (ResultEventCode) {
    /**
      * **Check 3D box result**
      *
      * Result of check 3D box
    */
    ResultEventCode[ResultEventCode["Check3dBoxResult"] = 142] = "Check3dBoxResult";
    /**
      * **Veh to pose result**
      *
      * Result of move order to pose
    */
    ResultEventCode[ResultEventCode["VehToPoseResult"] = 3] = "VehToPoseResult";
    /**
      * **Nav segment result**
      *
      * Result of nav segment order
    */
    ResultEventCode[ResultEventCode["VehToSegmentResult"] = 112] = "VehToSegmentResult";
    /**
      * **Set vehicule pose result**
      *
      * Result of set vehicle pose operation
    */
    ResultEventCode[ResultEventCode["SetVehiclePoseResult"] = 94] = "SetVehiclePoseResult";
    /**
      * **Set map result**
      *
      * Result of set map operation
    */
    ResultEventCode[ResultEventCode["SetMapResult"] = 21] = "SetMapResult";
    /**
      * **Set active map result**
      *
      * Result of set active map operation
    */
    ResultEventCode[ResultEventCode["SetActiveMapResult"] = 30] = "SetActiveMapResult";
    /**
      * **Veh to charging station result**
      *
      * Result of move order to a charging station operation
    */
    ResultEventCode[ResultEventCode["VehToChargingStationResult"] = 32] = "VehToChargingStationResult";
    /**
      * **Veh to charging station approach result**
      *
      * Result of move order to a charging station approach operation
    */
    ResultEventCode[ResultEventCode["VehToChargingStationApproachResult"] = 115] = "VehToChargingStationApproachResult";
    /**
      * **Veh to docked pose result**
      *
      * Result of move order to a docked pose operation
    */
    ResultEventCode[ResultEventCode["VehToDockedPoseResult"] = 106] = "VehToDockedPoseResult";
    /**
      * **Veh to docked pose approach result**
      *
      * Result of move order to a docked pose approach operation
    */
    ResultEventCode[ResultEventCode["VehToDockedPoseApproachResult"] = 117] = "VehToDockedPoseApproachResult";
    /**
      * **Veh to saved pose result**
      *
      * Result of move order to a saved pose operation
    */
    ResultEventCode[ResultEventCode["VehToSavedPoseResult"] = 34] = "VehToSavedPoseResult";
    /**
      * **Undock result**
      *
      * Result of undock operation
    */
    ResultEventCode[ResultEventCode["UndockResult"] = 36] = "UndockResult";
    /**
      * **Undock from shelf result**
      *
      * Result of undock from shelf operation
    */
    ResultEventCode[ResultEventCode["UndockFromShelfResult"] = 125] = "UndockFromShelfResult";
    /**
      * **Get markers result**
      *
      * Result of get markers operation with list of detected markers
    */
    ResultEventCode[ResultEventCode["GetMarkersResult"] = 38] = "GetMarkersResult";
    /**
      * **Install module result**
      *
      * Result of install module operation
    */
    ResultEventCode[ResultEventCode["InstallModuleResult"] = 40] = "InstallModuleResult";
    /**
      * **Disable module result**
      *
      * Result of disable module operation
    */
    ResultEventCode[ResultEventCode["DisableModuleResult"] = 42] = "DisableModuleResult";
    /**
      * **Recovery result**
      *
      * Result of recovery operation
    */
    ResultEventCode[ResultEventCode["RecoveryResult"] = 44] = "RecoveryResult";
    /**
      * **Reset database result**
      *
      * Result of reset database operation
    */
    ResultEventCode[ResultEventCode["ResetDatabaseResult"] = 109] = "ResetDatabaseResult";
    /**
      * **Get path result**
      *
      * Result of get path operation with path (list of poses) and distance in meter
    */
    ResultEventCode[ResultEventCode["GetPathResult"] = 50] = "GetPathResult";
    /**
      * **Mapping start result**
      *
      * Result of mapping start operation
    */
    ResultEventCode[ResultEventCode["MappingStartResult"] = 56] = "MappingStartResult";
    /**
      * **Mapping stop result**
      *
      * Result of mapping stop operation
    */
    ResultEventCode[ResultEventCode["MappingStopResult"] = 58] = "MappingStopResult";
    /**
      * **Erase active map result**
      *
      * Result of erase active map operation
    */
    ResultEventCode[ResultEventCode["EraseActiveMapResult"] = 65] = "EraseActiveMapResult";
    /**
      * **Reload map result**
      *
      * Result of reload map operation
    */
    ResultEventCode[ResultEventCode["ReloadMapResult"] = 67] = "ReloadMapResult";
    /**
      * **Merge maps result**
      *
      * Result of merge maps operation
    */
    ResultEventCode[ResultEventCode["MergeMapsResult"] = 132] = "MergeMapsResult";
    /**
      * **Network WAN configuration result**
      *
      * Result of network WAN config operation
    */
    ResultEventCode[ResultEventCode["NetworkWanConfigResult"] = 74] = "NetworkWanConfigResult";
    /**
      * **Network WAN enable result**
      *
      * Result of network WAN enable operation
    */
    ResultEventCode[ResultEventCode["NetworkWanEnableResult"] = 76] = "NetworkWanEnableResult";
    /**
      * **Network WAN scan APs result**
      *
      * Result of network WAN scan APs operation, list of detected APs
    */
    ResultEventCode[ResultEventCode["NetworkWanScanApsResult"] = 78] = "NetworkWanScanApsResult";
    /**
      * **Network hotspot enable result**
      *
      * Result of network hotspot enable operation
    */
    ResultEventCode[ResultEventCode["NetworkHotspotEnableResult"] = 80] = "NetworkHotspotEnableResult";
    /**
      * **Generate forbidden area result**
      *
      * Result of generate forbidden area operation
    */
    ResultEventCode[ResultEventCode["GenerateForbiddenAreasResult"] = 139] = "GenerateForbiddenAreasResult";
    /**
      * **Add sound result**
      *
      * Result of add sound operation
    */
    ResultEventCode[ResultEventCode["AddSoundResult"] = 148] = "AddSoundResult";
})(ResultEventCode || (exports.ResultEventCode = ResultEventCode = {}));
/** @internal */
var FeedbackEventCode;
(function (FeedbackEventCode) {
    /**
      * **Check 3D box feedback**
      *
      * Feedback on current check 3D box
    */
    FeedbackEventCode[FeedbackEventCode["Check3dBoxFeedback"] = 141] = "Check3dBoxFeedback";
    /**
      * **Veh to pose feedback**
      *
      * Feedback on current move order to pose
    */
    FeedbackEventCode[FeedbackEventCode["VehToPoseFeedback"] = 2] = "VehToPoseFeedback";
    /**
      * **Nav segment feedback**
      *
      * Feedback on current nav segment order
    */
    FeedbackEventCode[FeedbackEventCode["VehToSegmentFeedback"] = 111] = "VehToSegmentFeedback";
    /**
      * **Set vehicule pose feedback**
      *
      * Feedback on set vehicle pose operation
    */
    FeedbackEventCode[FeedbackEventCode["SetVehiclePoseFeedback"] = 93] = "SetVehiclePoseFeedback";
    /**
      * **Set map feedback**
      *
      * Feedback on set map operation
    */
    FeedbackEventCode[FeedbackEventCode["SetMapFeedback"] = 20] = "SetMapFeedback";
    /**
      * **Set active map feedback**
      *
      * Feedback on set active map operation
    */
    FeedbackEventCode[FeedbackEventCode["SetActiveMapFeedback"] = 29] = "SetActiveMapFeedback";
    /**
      * **Veh to charging station feedback**
      *
      * Feedback on move order to a charging station operation
    */
    FeedbackEventCode[FeedbackEventCode["VehToChargingStationFeedback"] = 31] = "VehToChargingStationFeedback";
    /**
      * **Veh to charging station approach feedback**
      *
      * Feedback on move order to a charging station approach operation
    */
    FeedbackEventCode[FeedbackEventCode["VehToChargingStationApproachFeedback"] = 114] = "VehToChargingStationApproachFeedback";
    /**
      * **Veh to docked pose feedback**
      *
      * Feedback on move order to a docked pose operation
    */
    FeedbackEventCode[FeedbackEventCode["VehToDockedPoseFeedback"] = 105] = "VehToDockedPoseFeedback";
    /**
      * **Veh to docked pose approach feedback**
      *
      * Feedback on move order to a docked pose approach operation
    */
    FeedbackEventCode[FeedbackEventCode["VehToDockedPoseApproachFeedback"] = 116] = "VehToDockedPoseApproachFeedback";
    /**
      * **Veh to saved pose feedback**
      *
      * Feedback on move order to a saved pose operation
    */
    FeedbackEventCode[FeedbackEventCode["VehToSavedPoseFeedback"] = 33] = "VehToSavedPoseFeedback";
    /**
      * **Undock feedback**
      *
      * Feedback on undock operation
    */
    FeedbackEventCode[FeedbackEventCode["UndockFeedback"] = 35] = "UndockFeedback";
    /**
      * **Undock from shelf feedback**
      *
      * Feedback on undock from shelf operation
    */
    FeedbackEventCode[FeedbackEventCode["UndockFromShelfFeedback"] = 124] = "UndockFromShelfFeedback";
    /**
      * **Get markers feedback**
      *
      * Feedback on get markers operation
    */
    FeedbackEventCode[FeedbackEventCode["GetMarkersFeedback"] = 37] = "GetMarkersFeedback";
    /**
      * **Install module feedback**
      *
      * Feedback on install module operation
    */
    FeedbackEventCode[FeedbackEventCode["InstallModuleFeedback"] = 39] = "InstallModuleFeedback";
    /**
      * **Disable module feedback**
      *
      * Feedback on disable module operation
    */
    FeedbackEventCode[FeedbackEventCode["DisableModuleFeedback"] = 41] = "DisableModuleFeedback";
    /**
      * **Recovery feedback**
      *
      * Feedback on recovery operation
    */
    FeedbackEventCode[FeedbackEventCode["RecoveryFeedback"] = 43] = "RecoveryFeedback";
    /**
      * **Reset database feedback**
      *
      * Feedback on reset database operation
    */
    FeedbackEventCode[FeedbackEventCode["ResetDatabaseFeedback"] = 108] = "ResetDatabaseFeedback";
    /**
      * **Get path feedback**
      *
      * Feedback on get path operation
    */
    FeedbackEventCode[FeedbackEventCode["GetPathFeedback"] = 49] = "GetPathFeedback";
    /**
      * **Mapping start feedback**
      *
      * Feedback on mapping start operation
    */
    FeedbackEventCode[FeedbackEventCode["MappingStartFeedback"] = 55] = "MappingStartFeedback";
    /**
      * **Mapping stop feedback**
      *
      * Feedback on mapping stop operation
    */
    FeedbackEventCode[FeedbackEventCode["MappingStopFeedback"] = 57] = "MappingStopFeedback";
    /**
      * **Erase active map feedback**
      *
      * Feedback on erase active map operation
    */
    FeedbackEventCode[FeedbackEventCode["EraseActiveMapFeedback"] = 64] = "EraseActiveMapFeedback";
    /**
      * **Reload map feedback**
      *
      * Feedback on reload map operation
    */
    FeedbackEventCode[FeedbackEventCode["ReloadMapFeedback"] = 66] = "ReloadMapFeedback";
    /**
      * **Merge maps feedback**
      *
      * Feedback on merge maps operation
    */
    FeedbackEventCode[FeedbackEventCode["MergeMapsFeedback"] = 131] = "MergeMapsFeedback";
    /**
      * **Network WAN configuration feedback**
      *
      * Feedback on network WAN config operation
    */
    FeedbackEventCode[FeedbackEventCode["NetworkWanConfigFeedback"] = 73] = "NetworkWanConfigFeedback";
    /**
      * **Network WAN enable feedback**
      *
      * Feedback on network WAN enable operation
    */
    FeedbackEventCode[FeedbackEventCode["NetworkWanEnableFeedback"] = 75] = "NetworkWanEnableFeedback";
    /**
      * **Network WAN scan APs feedback**
      *
      * Feedback on network WAN scan APs operation
    */
    FeedbackEventCode[FeedbackEventCode["NetworkWanScanApsFeedback"] = 77] = "NetworkWanScanApsFeedback";
    /**
      * **Network hotspot enable feedback**
      *
      * Feedback on network hotspot enable operation
    */
    FeedbackEventCode[FeedbackEventCode["NetworkHotspotEnableFeedback"] = 79] = "NetworkHotspotEnableFeedback";
    /**
      * **Generate forbidden area feedback**
      *
      * Feedback on generate forbidden area operation
    */
    FeedbackEventCode[FeedbackEventCode["GenerateForbiddenAreasFeedback"] = 137] = "GenerateForbiddenAreasFeedback";
    /**
      * **Add sound feedback**
      *
      * Feedback on add sound operation
    */
    FeedbackEventCode[FeedbackEventCode["AddSoundFeedback"] = 147] = "AddSoundFeedback";
})(FeedbackEventCode || (exports.FeedbackEventCode = FeedbackEventCode = {}));
/** @internal */
const initEventTopicCallbacks = () => ({
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
    [TopicEventCode.NavigationStarted]: [],
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
    [TopicEventCode.BlockedIp]: [],
    [TopicEventCode.SoundSamples]: [],
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
    [TopicEventCode.IsTouchScreen]: [],
    [TopicEventCode.DockedPoseConfigs]: [],
    [TopicEventCode.BadLiftPosition]: [],
    [TopicEventCode.BadLiftConfiguration]: [],
    [TopicEventCode.AllowMoveFromDock]: [],
    [TopicEventCode.AllowMultipleMissions]: [],
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
    [TopicEventCode.ControllerLoraContactsConfig]: [],
    [TopicEventCode.PredefinedMessages]: [],
    [TopicEventCode.MissionStepTitle]: [],
    [TopicEventCode.InPauseTitle]: [],
    [TopicEventCode.FollowMeAllowed]: [],
    [TopicEventCode.MaxButtonIdSearch]: [],
    [TopicEventCode.DefaultWaitReleaseSound]: [],
    [TopicEventCode.PortRedirections]: [],
    [TopicEventCode.ExternalSpeaker]: [],
    [TopicEventCode.LiftError]: [],
    [TopicEventCode.InvalidDataList]: [],
    [TopicEventCode.WaitingSounds]: [],
    [TopicEventCode.EventsSounds]: [],
    [TopicEventCode.RocSecurity]: [],
    [TopicEventCode.HotspotEnabled]: [],
});
exports.initEventTopicCallbacks = initEventTopicCallbacks;
/** @internal */
const initEventResultCallbacks = () => ({
    [ResultEventCode.Check3dBoxResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.VehToPoseResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.VehToSegmentResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.SetVehiclePoseResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.SetMapResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.SetActiveMapResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.VehToChargingStationResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.VehToChargingStationApproachResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.VehToDockedPoseResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.VehToDockedPoseApproachResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.VehToSavedPoseResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.UndockResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.UndockFromShelfResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.GetMarkersResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.InstallModuleResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.DisableModuleResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.RecoveryResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.ResetDatabaseResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.GetPathResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.MappingStartResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.MappingStopResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.EraseActiveMapResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.ReloadMapResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.MergeMapsResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.NetworkWanConfigResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.NetworkWanEnableResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.NetworkWanScanApsResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.NetworkHotspotEnableResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.GenerateForbiddenAreasResult]: { resolve: undefined, reject: undefined },
    [ResultEventCode.AddSoundResult]: { resolve: undefined, reject: undefined },
});
exports.initEventResultCallbacks = initEventResultCallbacks;
/** @internal */
const initEventFeedbackCallbacks = () => ({
    [FeedbackEventCode.Check3dBoxFeedback]: undefined,
    [FeedbackEventCode.VehToPoseFeedback]: undefined,
    [FeedbackEventCode.VehToSegmentFeedback]: undefined,
    [FeedbackEventCode.SetVehiclePoseFeedback]: undefined,
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
});
exports.initEventFeedbackCallbacks = initEventFeedbackCallbacks;
