import { OutcomeCode } from "./outcomes";
import { DeepRequired, BaseAPI } from "./types";
import { Site, SiteLight, SiteRaw, Map, MapRaw, MapElements, MapWithoutImages, ForbiddenArea, CustomArea, SavedPose, ChargingStation, DockedPose, Marker, TeleopCmd, Pose, User, DiagnosticElement, SoundScenarioVolume, SoundScenarioSample, WifiAp, SecurityLog, WaitingSound, EventSound, ExternalPortRedirection, Group, ButtonConfig, WaitingPose, CustomCommand, ControllerLora, MapElementRestriction, DockedPoseConfig, RocMapElementConfig, RocAreaConfig, VehDelayConfig, Mission, DailyStats, StatsData, ExportedStats, RocUser, VehTimelineData, ManagerMap, ModuleParams, SubscribeResult, FollowMeParams, AuthSessionResult, AuthModuleParams, LoginParams, LoginResult, ImportSiteResult, ImportSoundsConfigResult, ExportSiteParams2, ExportSitesParams1Item, ExportSitesParams2, ExportSitesResultItem, UpdateChargingStationConfigParams, UpdateDockedPoseConfigParams, SetUserParams, SetObtCbtParams, SetChargingStationResult, SetSavedPoseResult, SetDockedPoseResult, SetForbiddenAreaResult, SetCustomAreaResult, CheckPoseParams, Check3dBoxParams, SetCustomLedParams, SetCustomSoundParams, SimSetDiffDriveStateParams, SetModuleParamsParams, NetworkRedirectPortParams, SystemRestartParams, GetShelvesParams, AddButtonParams, UpdatePortRedirectionParams, DeletePortRedirectionParams, ControllerLoraSetContactConfigParams, NextStepMissionWithMessageParams, CheckHmiPasswordResult, SetMultidestinationParams, SetMultidestinationWithMessagesParams, GetStatsParams, GetLightStatsParams, ExportStatsParams, GetVehsTimelineParams, AddRocUserParams, UpdateRocUserParams, UpdateActiveCredentialsParams, CreateMissionParams, ExtendMissionParams, StartButtonMissionParams, GetSecurityLoggingParams, ExportSecurityLoggingParams } from "./types";
import { AutopilotSequence, OperatingHours } from "./types";
import { Direction, FollowMode, Language, ModuleType, VehDirection } from "./types";
/** @internal */
export declare enum ServiceOperationCode {
    /**
    * **Get veh ID**
    *
    * Get vehicle ID 🆔
    * @group Vehicle
    * @category Vehicle state
    
    */
    GetVehId = 110,
    /**
    * **Subscribe**
    *
    * Operation to subscribe to event
    * @group Internal
    * @category Internal
    * @internal
    */
    Subscribe = 2,
    /**
    * **Unsubscribe**
    *
    * Operation to unsubscribe to event
    * @group Internal
    * @category Internal
    * @internal
    */
    Unsubscribe = 3,
    /**
    * **Unsubscribe all**
    *
    * Operation to unsubscribe to all events
    * @group Internal
    * @category Internal
    * @internal
    */
    UnsubscribeAll = 4,
    /**
    * **Cancel actions**
    *
    * Cancel ongoing action on vehicle ⏹
    * @group Vehicle
    * @category Current action
    
    */
    CancelActions = 13,
    /**
    * **Teleop**
    *
    * Send move orders to vehicle via angular and linear speed
    * @group Navigation
    * @category Teleop
    
    */
    Teleop = 12,
    /**
    * **Teleop - Assisted with map**
    *
    * Send move orders to vehicle via angular and linear speed, assistance allows tracking of walls and prohibited areas
    * @group Navigation
    * @category Teleop
    
    */
    TeleopAssistedWithMap = 113,
    /**
    * **Teleop - Assisted without map**
    *
    * Send move orders to vehicle via angular and linear speed, assistance allows tracking of walls
    * @group Navigation
    * @category Teleop
    
    */
    TeleopAssistedWithoutMap = 114,
    /**
    * **FollowMe**
    *
    * Start or Stop the follow me feature 👣
    * @group Navigation
    * @category Navigation
    
    */
    FollowMe = 118,
    /**
    * **Follow Me Reset tracking**
    *
    * Reset tracking of follow me
    * @group Navigation
    * @category Navigation
    
    */
    FollowMeResetTracking = 134,
    /**
    * **FollowMe Set Mode**
    *
    * Set follow mode
    * @group Navigation
    * @category Navigation
    
    */
    FollowMeSetMode = 135,
    /**
    * **Set sleeping**
    *
    * Start or stop the sleeping mode
    * @group Vehicle
    * @category Battery management
    
    */
    SetSleeping = 122,
    /**
    * **Set hibernate**
    *
    * Start or stop the hibernate mode
    * @group Vehicle
    * @category Battery management
    
    */
    SetHibernate = 123,
    /**
    * **Authenticate user**
    *
    * Authenticate user using token 🔐
    * @group User
    * @category Authentication
    
    */
    AuthSession = 7,
    /**
    * **Authenticate module**
    *
    * Authenticate module using API key 🔐
    * @group Module
    * @category Authentication
    
    */
    AuthModule = 8,
    /**
    * **Sink**
    *
    * Void operation. May be used as heartbeat
    * @group Internal
    * @category Internal
    * @internal
    */
    Sink = 9,
    /**
    * **Set use fragmented message**
    *
    * Enable fragmented message. Fragemented messages are meant for heavy data transfer message, API will divide message in several thiner messages, callbacks will be fired when all messages have been gathered
    * @group Internal
    * @category Internal
    * @internal
    */
    SetUseFragmentedMessage = 5,
    /**
    * **Logout**
    *
    * Logout
    * @group User
    * @category Authentication
    
    */
    Logout = 143,
    /**
    * **Login**
    *
    * Check user credentials and retrieve token and other infos from user api key or login and password 🔍
    * @group User
    * @category Authentication
    
    */
    Login = 6,
    /**
    * **Set telop active**
    *
    * Activate or deactivate teleop, vehicle will accept or ignore teleop orders
    * @group Navigation
    * @category Teleop
    
    */
    SetTeleopActive = 10,
    /**
    * **Get teleop Active**
    *
    * Check if teleop is active or not
    * @group Navigation
    * @category Teleop
    
    */
    GetTeleopActive = 11,
    /**
    * **Import site**
    *
    * Import site onto the vehicle from a Robocc exported file 📁
    * @group Map
    * @category Site management
    
    */
    ImportSite = 21,
    /**
    * **Import sounds config**
    *
    * Import sounds config onto the vehicle from a Robocc exported file 📁
    * @group Map
    * @category Site management
    
    */
    ImportSoundsConfig = 146,
    /**
    * **Export site**
    *
    * Export a site by providing its ID 📁
    * @group Map
    * @category Site management
    
    */
    ExportSite = 35,
    /**
    * **Export multiple sites**
    *
    * Export sites by providing array of ids. Returns an array of files with site ids 🗃️
    * @group Map
    * @category Site management
    
    */
    ExportSites = 49,
    /**
    * **Get new charging station from a marker**
    *
    * Ask vehicle for a charging station object from a given marker
    * @group Map
    * @category Charging station
    
    */
    GetNewChargingStationFromMarker = 51,
    /**
    * **Get new docked pose from a marker**
    *
    * Ask vehicle for a docked pose object from a given marker
    * @group Map
    * @category Docked pose
    
    */
    GetNewDockedPoseFromMarker = 97,
    /**
    * **Update charging station from new config**
    *
    * Update a charging station object from a given distance
    * @group Map
    * @category Charging station
    
    */
    UpdateChargingStationConfig = 115,
    /**
    * **Update docked pose from config**
    *
    * Update a docked pose object from a given distance
    * @group Map
    * @category Docked pose
    
    */
    UpdateDockedPoseConfig = 116,
    /**
    * **Simulate set sound is playing**
    *
    * In simulation mode, set that a sound is currently playing for developement purpose ⏯️
    * @group Simulation
    * @category Simulation
    
    */
    SimSetSoundIsPlaying = 106,
    /**
    * **Simulate set external speaker**
    *
    * In simulation mode, set external speaker is present purpose ⏯️
    * @group Simulation
    * @category Simulation
    
    */
    SimuSetExternalSpeaker = 145,
    /**
    * **Set user**
    *
    * Create or edit an user for the vehicle configuration application 👨🏽‍🦱
    * @group User
    * @category User management
    
    */
    SetUser = 17,
    /**
    * **Delete user**
    *
    * Delete user via its ID 🗑️
    * @group User
    * @category User management
    
    */
    DeleteUser = 99,
    /**
    * **Set OBT CBT**
    *
    * Set operational battery threshold (the vehicle is allowed to execute mission) and critical battery threshold (the vehicle is forced to charge itself) 🪫
    * @group Vehicle
    * @category Battery management
    
    */
    SetObtCbt = 89,
    /**
    * **List users**
    *
    * Get all users from vehicle configuration application
    * @group User
    * @category User management
    
    */
    ListUsers = 15,
    /**
    * **Get user**
    *
    * Get user for given id 👨🏽‍🦱
    * @group User
    * @category User management
    
    */
    GetUser = 108,
    /**
    * **List sites**
    *
    * Get all vehicle's sites
    * @group Map
    * @category Site management
    
    */
    ListSites = 22,
    /**
    * **List sites with maps**
    *
    * Get all vehicle's sites with maps
    * @group Map
    * @category Site management
    
    */
    ListSitesWithMaps = 30,
    /**
    * **Get site**
    *
    * Get a vehicle's site for given id
    * @group Map
    * @category Site management
    
    */
    GetSite = 23,
    /**
    * **Get site with maps**
    *
    * Get a vehicle's site with maps for given id
    * @group Map
    * @category Site management
    
    */
    GetSiteWithMaps = 38,
    /**
    * **Get map**
    *
    * Get a map for a given id 🗺️
    * @group Map
    * @category Map management
    
    */
    GetMap = 26,
    /**
    * **Get active site**
    *
    * Get the vehicle's current active site
    * @group Map
    * @category Site management
    
    */
    GetActiveSite = 28,
    /**
    * **Get active site with maps**
    *
    * Get the vehicle's current active site with maps
    * @group Map
    * @category Site management
    
    */
    GetActiveSiteWithMaps = 37,
    /**
    * **Set site**
    *
    * Set a vehicle site
    * @group Map
    * @category Site management
    
    */
    SetSite = 24,
    /**
    * **List maps**
    *
    * Get all maps in site for given site's ID 🗺️
    * @group Map
    * @category Map management
    
    */
    ListMaps = 25,
    /**
    * **Get active map**
    *
    * Get the vehicle's current map 🗺️
    * @group Map
    * @category Map management
    
    */
    GetActiveMap = 27,
    /**
    * **Get active map with images**
    *
    * Get the vehicle's current map with all its images 🗺️
    * @group Map
    * @category Map management
    
    */
    GetActiveMapImgRaw = 33,
    /**
    * **Get map elements**
    *
    * Get map elements for given map's ID
    * @group Map
    * @category Map management
    
    */
    GetMapElements = 39,
    /**
    * **Get active map elements**
    *
    * Get map elements for active map
    * @group Map
    * @category Map management
    
    */
    GetActiveMapElements = 40,
    /**
    * **Get map without images**
    *
    * Get map without images for given map's ID 🗺️
    * @group Map
    * @category Map management
    
    */
    GetMapWithoutImages = 111,
    /**
    * **Get active map without images**
    *
    * Get map without images for active map 🗺️
    * @group Map
    * @category Map management
    
    */
    GetActiveMapWithoutImages = 112,
    /**
    * **Delete site**
    *
    * Delete site via its ID 🗑
    * @group Map
    * @category Site management
    
    */
    DeleteSite = 58,
    /**
    * **Delete map**
    *
    * Delete map via its ID 🗑
    * @group Map
    * @category Map management
    
    */
    DeleteMap = 59,
    /**
    * **Set charging station**
    *
    * Set a charging station by giving all its attributes. Set id to -1 to create a new one
    * @group Map
    * @category Charging station
    
    */
    SetChargingStation = 62,
    /**
    * **Set saved pose**
    *
    * Set a saved pose by giving all its attributes. Set id to -1 to create a new one
    * @group Map
    * @category Saved pose
    
    */
    SetSavedPose = 60,
    /**
    * **Set docked pose**
    *
    * Set a docked pose by giving all its attributes. Set id to -1 to create a new one
    * @group Map
    * @category Docked pose
    
    */
    SetDockedPose = 61,
    /**
    * **Set forbidden area**
    *
    * Set a forbidden area by giving all its attributes. Set id to -1 to create a new one
    * @group Map
    * @category Forbidden area
    
    */
    SetForbiddenArea = 63,
    /**
    * **Set custom area**
    *
    * Set a custom area by giving all its attributes. Set id to -1 to create a new one
    * @group Map
    * @category Custom area
    
    */
    SetCustomArea = 64,
    /**
    * **Delete charging station**
    *
    * Delete charging station via its ID 🗑
    * @group Map
    * @category Charging station
    
    */
    DeleteChargingStation = 67,
    /**
    * **Delete saved pose**
    *
    * Delete saved pose via its ID 🗑
    * @group Map
    * @category Saved pose
    
    */
    DeleteSavedPose = 65,
    /**
    * **Delete docked pose**
    *
    * Delete docked pose via its ID 🗑
    * @group Map
    * @category Docked pose
    
    */
    DeleteDockedPose = 66,
    /**
    * **Delete forbidden area**
    *
    * Delete forbidden area via its ID 🗑
    * @group Map
    * @category Forbidden area
    
    */
    DeleteForbiddenArea = 68,
    /**
    * **Delete custom area**
    *
    * Delete custom area via its ID 🗑
    * @group Map
    * @category Custom area
    
    */
    DeleteCustomArea = 69,
    /**
    * **Check pose**
    *
    * Check if a pose is correct for vehicle in its current map. If no pose provided it will check vehicle's current pose 🔍
    * @group Map
    * @category Map management
    
    */
    CheckPose = 85,
    /**
    * **Check 3D box**
    *
    * Check if a box is free
    * @group Navigation
    * @category Navigation
    
    */
    Check3dBox = 129,
    /**
    * **Get module data**
    *
    * Get module data that are stored in the vehicle. The module can use this to store any data it wishes 💾
    * @group Module
    * @category Module
    
    */
    GetModuleData = 44,
    /**
    * **Set module data**
    *
    * Set module data that are stored in the vehicle. The module can use this to store any data it wishes 💾
    * @group Module
    * @category Module
    
    */
    SetModuleData = 45,
    /**
    * **Get internal data**
    *
    * Get internal data that are stored in the vehicle. API client can use this to store any data it wishes 💾
    * @group Internal
    * @category Internal data
    
    */
    GetInternalData = 94,
    /**
    * **Set internal data**
    *
    * Set internal data that are stored in the vehicle. API client can use this to store any data it wishes 💾
    * @group Internal
    * @category Internal data
    
    */
    SetInternalData = 95,
    /**
    * **Start cycle**
    *
    * Allow vehicle to move, need to be called at vehicle start or end of maintenance ▶
    * @group Vehicle
    * @category Maintenance
    
    */
    StartCycle = 96,
    /**
    * **Set car mode on leds**
    *
    * Enable or disable car mode (front LED corners in white, back LED corners in red) 🚗
    * @group Vehicle
    * @category LED
    
    */
    SetCarMode = 47,
    /**
    * **Set custom led**
    *
    * Set a custom LED display by giving a led animation, a color (optional depending on animation), an optional duration for the custom display 🚥
    * @group Vehicle
    * @category LED
    
    */
    SetCustomLed = 48,
    /**
    * **Set custom sound**
    *
    * Set a custom sound action by giving a sound sample, an optional volume between 0 and 100, an optional loop number to repeat the sample, and an optional loop delay to define the duration between each loop 🔉
    * @group Vehicle
    * @category Sound
    
    */
    SetCustomSound = 83,
    /**
    * **Get software version**
    *
    * Get the version of the vehicle's software
    * @group Vehicle
    * @category Version
    
    */
    GetSoftVersion = 93,
    /**
    * **Simulation - Set robot power consumption**
    *
    * Set the power consumption of the battery in simulation for developement purpose 🔌
    * @group Simulation
    * @category Simulation
    
    */
    SimBatterySetPowerConsumption = 101,
    /**
    * **Simulation - Set charge power delivery**
    *
    * Set the charge power delivered by the fake charging stations in simulation for developement purpose 🔌
    * @group Simulation
    * @category Simulation
    
    */
    SimBatterySetChargePower = 102,
    /**
    * **Simulation - Set battery percentage**
    *
    * Set the battery percentage in simulation for developement purpose 🔋
    * @group Simulation
    * @category Simulation
    
    */
    SimBatterySetPercentage = 103,
    /**
    * **Simulation - Set charger of charging stations on**
    *
    * Enable or disable power on the fake charging stations in simulation for developement purpose 🔌
    * @group Simulation
    * @category Simulation
    
    */
    SimBatterySetChargerOn = 104,
    /**
    * **Set maintenance mode**
    *
    * Enable or disable maintenance mode that blocks module orders but allows teleop and configuration application orders. Required for some API orders 🚧
    * @group Vehicle
    * @category Maintenance
    
    */
    SetMaintenanceMode = 84,
    /**
    * **Set prohibit movement**
    *
    * Set this to prohibit all movements of vehicle. Only callable from module 🚫
    * @group Navigation
    * @category Navigation
    
    */
    SetProhibitMovement = 86,
    /**
    * **Simulation - Set diff driver state**
    *
    * Set diff drive state in simulation to simulate some vehicule errors
    * @group Simulation
    * @category Simulation
    
    */
    SimSetDiffDriveState = 105,
    /**
    * **Set Hotspot passowrd**
    *
    * Set vehicle the password for the emitted wifi hotspot 🛜
    * @group Vehicle
    * @category Network
    
    */
    NetworkHotspotSetPassword = 87,
    /**
    * **Wifi list APs**
    *
    * List all detected Wi-Fi access points by the vehicle. This doesn't trigger a scan so list can be outdated. See network_wan_scan_aps 🛜
    * @group Vehicle
    * @category Network
    
    */
    NetworkWifiListAps = 80,
    /**
    * **Get vehicle elements list**
    *
    * Get all vehicle elements
    * @group Vehicle
    * @category Diagnostic
    
    */
    GetElementsList = 88,
    /**
    * **Set autopilot config**
    *
    * Set autopilot sequence
    * @group Navigation
    * @category Autopilot
    
    */
    AutopilotSetConfig = 73,
    /**
    * **Start autopilot**
    *
    * Start configured autopilot sequence ▶
    * @group Navigation
    * @category Autopilot
    
    */
    AutopilotStart = 74,
    /**
    * **Stop autopilot**
    *
    * Stop current autopilot sequence ⏹
    * @group Navigation
    * @category Autopilot
    
    */
    AutopilotStop = 75,
    /**
    * **Set scenario sound maximum volumes**
    *
    * Set maximum volume between 0 and 100 for each vehicle's sound scenarios 🔊
    * @group Vehicle
    * @category Sound
    
    */
    SetScenarioSoundMaxVolume = 91,
    /**
    * **Get scenario sound maximum volumes**
    *
    * Get maximum volume between 0 and 100 for each vehicle's sound scenarios 🔊
    * @group Vehicle
    * @category Sound
    
    */
    GetScenarioSoundMaxVolume = 92,
    /**
    * **Set scenario sample**
    *
    * Set sample for each vehicle's sound scenarios 🔊
    * @group Vehicle
    * @category Sound
    
    */
    SetScenarioSoundSamples = 148,
    /**
    * **Get scenario sound sample**
    *
    * Get sample for each vehicle's sound scenarios 🔊
    * @group Vehicle
    * @category Sound
    
    */
    GetScenarioSoundSamples = 144,
    /**
    * **Inhibit safety alert sound scenario**
    *
    * Temporarily mute the safety alert sound scenario when activated (automatically unmute at next scenario activation)
    * @group Vehicle
    * @category Sound
    
    */
    InhibitSafetyAlertSoundScenario = 158,
    /**
    * **Set module parameters**
    *
    * Set dynamically module parameters, i.e. max speed, height and weight ⚙
    * @group Module
    * @category Module
    
    */
    SetModuleParams = 98,
    /**
    * **Network redirect port**
    *
    * Start or stop redirect port form noeme to ip
    * @group Vehicle
    * @category Network
    
    */
    NetworkRedirectPort = 136,
    /**
    * **Force system update**
    *
    * Force a system update
    * @group Vehicle
    * @category Version
    
    */
    ForceUpdate = 124,
    /**
    * **Set automatic updates**
    *
    * Enable/disable automatic update
    * @group Vehicle
    * @category Version
    
    */
    SetAutomaticUpdates = 125,
    /**
    * **Enable dynamic filters**
    *
    * Enable/disable dynamic filters
    * @group Vehicle
    * @category Module
    
    */
    EnableDynamicFilters = 130,
    /**
    * **Restart system**
    *
    * Restart the system
    * @group Vehicle
    * @category System
    
    */
    SystemRestart = 131,
    /**
    * **Request firmware flash of Roboteq**
    *
    * Will request a flash of the firmware of the roboteq motor controller at next reboot
    * @group Vehicle
    * @category System
    
    */
    SystemRequestFlashRoboteq = 132,
    /**
    * **Request firmware flash of MCU**
    *
    * Will request a flash of the firmware of the Teensy/Pico
    * @group Vehicle
    * @category System
    
    */
    SystemRequestFlashMcu = 133,
    /**
    * **Get shelves around the vehicle**
    *
    * Get list of shelves relative to the vehicle
    * @group Map
    * @category Marker
    
    */
    GetShelves = 140,
    /**
    * **Delete sound**
    *
    * Delete sound from library
    * @group Database
    * @category Sound
    
    */
    DeleteSound = 149,
    /**
    * **Disable 3D cameras during mapping**
    *
    * Disable or enable 3D cameras sensors, in mapping mode only
    * @group Mapping
    * @category Mapping
    
    */
    DisableCam3dMapping = 154,
    /**
    * **Disable US sensors during mapping**
    *
    * Disable or enable ultrasonic sensors, in mapping mode only
    * @group Mapping
    * @category Mapping
    
    */
    DisableUsSensorsMapping = 155,
    /**
    * **Rearm chassis intrusion**
    *
    * Rearm chassis intrusion
    * @group Vehicle
    * @category System
    
    */
    RearmChassisIntrusion = 157,
    /**
    * **Logout HMI**
    *
    * Logout HMI
    * @group Module
    * @category Authentication
    
    */
    LogoutHmi = 7002,
    /**
    * **Add call button**
    *
    * Add call button
    * @group ROC
    * @category ROC Config
    
    */
    AddButton = 7000,
    /**
    * **Update button**
    *
    * Update button
    * @group ROC
    * @category Configuration
    
    */
    UpdateButton = 7044,
    /**
    * **Delete button**
    *
    * Delete button
    * @group ROC
    * @category Configuration
    
    */
    DeleteButton = 7003,
    /**
    * **Add vehicle**
    *
    * Add vehicle
    * @group ROC
    * @category Configuration
    
    */
    AddVeh = 7004,
    /**
    * **Delete vehicle**
    *
    * Delete vehicle
    * @group ROC
    * @category Configuration
    
    */
    DeleteVeh = 7005,
    /**
    * **Set module is vehicle**
    *
    * Set module is vehicle
    * @group ROC
    * @category Configuration
    
    */
    SetIsVeh = 7006,
    /**
    * **Set module is manager**
    *
    * Set module is manager
    * @group ROC
    * @category Configuration
    
    */
    SetIsManager = 7007,
    /**
    * **Set module type**
    *
    * Set module type
    * @group Vehicle
    * @category Configuration
    
    */
    SetModuleType = 7028,
    /**
    * **Set vehicle direction**
    *
    * Set vehicle direction
    * @group Vehicle
    * @category Configuration
    
    */
    SetVehDirection = 7038,
    /**
    * **Set dock direction**
    *
    * Set dock direction
    * @group Vehicle
    * @category Configuration
    
    */
    SetDockDirection = 7112,
    /**
    * **Release shelf on top**
    *
    * Release shelf on top
    * @group Vehicle
    * @category Mission
    
    */
    ReleaseShelf = 7113,
    /**
    * **Release shelf on top and release misison**
    *
    * Release shelf on top and release misison
    * @group Vehicle
    * @category Mission
    
    */
    ReleaseShelfAndRelease = 7115,
    /**
    * **Set module LoRa ID**
    *
    * Set module LoRa ID
    * @group Vehicle
    * @category Configuration
    
    */
    SetIdModule = 7009,
    /**
    * **Set LoRa SP**
    *
    * Set LoRa SP
    * @group ROC
    * @category Configuration
    
    */
    SetLoraSp = 7010,
    /**
    * **Add waiting pose**
    *
    * Add waiting pose
    * @group ROC
    * @category Configuration
    
    */
    AddWaitingPose = 7048,
    /**
    * **Update waiting pose**
    *
    * Update waiting pose
    * @group ROC
    * @category Configuration
    
    */
    UpdateWaitingPose = 7049,
    /**
    * **Delete waiting pose**
    *
    * Delete waiting pose
    * @group ROC
    * @category Configuration
    
    */
    DeleteWaitingPose = 7050,
    /**
    * **Add port redirection**
    *
    * Add port redirection
    * @group ROC
    * @category Configuration
    
    */
    AddPortRedirection = 7104,
    /**
    * **Update port redirection**
    *
    * Update port redirection
    * @group ROC
    * @category Configuration
    
    */
    UpdatePortRedirection = 7105,
    /**
    * **Delete port redirection**
    *
    * Delete port redirection
    * @group ROC
    * @category Configuration
    
    */
    DeletePortRedirection = 7106,
    /**
    * **Add custom command**
    *
    * Add custom command
    * @group ROC
    * @category Configuration
    
    */
    AddCustomCommand = 7051,
    /**
    * **Update custom command**
    *
    * Update custom command
    * @group ROC
    * @category Configuration
    
    */
    UpdateCustomCommand = 7052,
    /**
    * **Delete custom command**
    *
    * Delete custom command
    * @group ROC
    * @category Configuration
    
    */
    DeleteCustomCommand = 7053,
    /**
    * **Add controller LoRa**
    *
    * Add controller LoRa
    * @group ROC
    * @category Configuration
    
    */
    AddControllerLora = 7054,
    /**
    * **Update controller LoRa**
    *
    * Update controller LoRa
    * @group ROC
    * @category Configuration
    
    */
    UpdateControllerLora = 7055,
    /**
    * **Delete controller LoRa**
    *
    * Delete controller LoRa
    * @group ROC
    * @category Configuration
    
    */
    DeleteControllerLora = 7056,
    /**
    * **Add map element restriction**
    *
    * Add map element restriction
    * @group ROC
    * @category Configuration
    
    */
    AddMapElementRestriction = 7057,
    /**
    * **Update map element restriction**
    *
    * Update map element restriction
    * @group ROC
    * @category Configuration
    
    */
    UpdateMapElementRestriction = 7058,
    /**
    * **Delete map element restriction**
    *
    * Delete map element restriction
    * @group ROC
    * @category Configuration
    
    */
    DeleteMapElementRestriction = 7059,
    /**
    * **Add ROC docked pose configuration**
    *
    * Add ROC docked pose configuration
    * @group ROC
    * @category Configuration
    
    */
    AddRocDockedPoseConfig = 7062,
    /**
    * **Update ROC docked pose configuration**
    *
    * Update ROC docked pose configuration
    * @group ROC
    * @category Configuration
    
    */
    UpdateRocDockedPoseConfig = 7063,
    /**
    * **Delete ROC docked pose configuration**
    *
    * Delete ROC docked pose configuration
    * @group ROC
    * @category Configuration
    
    */
    DeleteRocDockedPoseConfig = 7064,
    /**
    * **Add ROC map element configuration**
    *
    * Add ROC map element configuration
    * @group ROC
    * @category Configuration
    
    */
    AddRocMapElementConfig = 7091,
    /**
    * **Update ROC map element configuration**
    *
    * Update ROC map element configuration
    * @group ROC
    * @category Configuration
    
    */
    UpdateRocMapElementConfig = 7092,
    /**
    * **Delete ROC map element configuration**
    *
    * Delete ROC map element configuration
    * @group ROC
    * @category Configuration
    
    */
    DeleteRocMapElementConfig = 7093,
    /**
    * **Add ROC area configuration**
    *
    * Add ROC area configuration
    * @group ROC
    * @category Configuration
    
    */
    AddRocAreaConfig = 7108,
    /**
    * **Update ROC area configuration**
    *
    * Update ROC areat configuration
    * @group ROC
    * @category Configuration
    
    */
    UpdateRocAreaConfig = 7109,
    /**
    * **Delete ROC area configuration**
    *
    * Delete ROC area configuration
    * @group ROC
    * @category Configuration
    
    */
    DeleteRocAreaConfig = 7110,
    /**
    * **Get contacts's configuration of a LoRa controller**
    *
    * Get contact's configuration of a LoRa controller
    * @group ROC
    * @category Configuration
    
    */
    ControllerLoraGetContactsConfig = 7094,
    /**
    * **Set contact's configuration of a LoRa controller**
    *
    * Set contact's configuration of a LoRa controller
    * @group ROC
    * @category Configuration
    
    */
    ControllerLoraSetContactConfig = 7095,
    /**
    * **Set predefined messages**
    *
    * Set predefined messages
    * @group ROC
    * @category Configuration
    
    */
    SetPredefinedMessages = 7096,
    /**
    * **Set vehicle delay config**
    *
    * Set vehicle delay config
    * @group Vehicle
    * @category Configuration
    
    */
    SetVehicleDelayConfig = 7031,
    /**
    * **Set vehicle response deadline**
    *
    * Set vehicle response deadline
    * @group Manager
    * @category Configuration
    
    */
    SetVehicleResponseDeadline = 7045,
    /**
    * **Set default response deadline**
    *
    * Set default response deadline
    * @group Manager
    * @category Configuration
    
    */
    SetDefaultResponseDeadline = 7046,
    /**
    * **End mission**
    *
    * End mission
    * @group Vehicle
    * @category Mission
    
    */
    Release = 7011,
    /**
    * **Next step mission**
    *
    * Next step mission
    * @group Vehicle
    * @category Mission
    
    */
    NextStepMission = 7012,
    /**
    * **Next step mission with message**
    *
    * Next step mission with message
    * @group Vehicle
    * @category Mission
    
    */
    NextStepMissionWithMessage = 7098,
    /**
    * **Pause move**
    *
    * Pause the current move
    * @group Vehicle
    * @category Mission
    
    */
    PauseMove = 7014,
    /**
    * **Resume paused move**
    *
    * Resume the paused move
    * @group Vehicle
    * @category Mission
    
    */
    ResumeMove = 7015,
    /**
    * **Cancel paused move**
    *
    * Cancel the paused move
    * @group Vehicle
    * @category Mission
    
    */
    CancelMove = 7016,
    /**
    * **Reboot ROC-E app**
    *
    * Reboot ROC-E app
    * @group ROC
    * @category App
    
    */
    Reboot = 7066,
    /**
    * **Set in config mode**
    *
    * Set in config mode
    * @group ROC
    * @category Configuration
    
    */
    SetInConfigMode = 7017,
    /**
    * **Set in maintenance mode**
    *
    * Set in maintenance mode
    * @group ROC
    * @category Configuration
    
    */
    SetInMaintenanceMode = 7047,
    /**
    * **Set allow move from dock**
    *
    * Set allow move from dock
    * @group Vehicle
    * @category Configuration
    
    */
    SetAllowMoveFromDock = 7067,
    /**
    * **Set allow multiple mission for the same button**
    *
    * Set allow multiple mission for the same button
    * @group Manager
    * @category Configuration
    
    */
    SetAllowMultipleMissions = 7114,
    /**
    * **Set show all destinations on home**
    *
    * Set show all destinations on home
    * @group Manager
    * @category Configuration
    
    */
    SetShowAllDestinationsOnHome = 7120,
    /**
    * **Set sleeping**
    *
    * Set module in sleeping mode
    * @group Vehicle
    * @category Mission
    
    */
    SetModuleSleeping = 7069,
    /**
    * **Set hibernate**
    *
    * Set module in hibernate mode
    * @group Vehicle
    * @category Mission
    
    */
    SetModuleHibernate = 7070,
    /**
    * **Set sleep screen**
    *
    * Set sleep screen
    * @group Vehicle
    * @category Mission
    
    */
    SetSleepScreen = 7088,
    /**
    * **Set operating hours**
    *
    * Set operating hours
    * @group Vehicle
    * @category Mission
    
    */
    SetOperatingHours = 7071,
    /**
    * **Check HMI password**
    *
    * Check HMI password
    * @group ROC
    * @category Configuration
    
    */
    CheckHmiPassword = 7019,
    /**
    * **Set high priority**
    *
    * Set high priority
    * @group Manager
    * @category Mission
    
    */
    SetHighPriority = 7020,
    /**
    * **Set normal priority**
    *
    * Set normal priority
    * @group Manager
    * @category Mission
    
    */
    SetNormalPriority = 7021,
    /**
    * **Remove mission**
    *
    * Remove mission
    * @group Manager
    * @category Mission
    
    */
    RemoveMission = 7022,
    /**
    * **Remove button mission**
    *
    * Remove button mission
    * @group Manager
    * @category Mission
    
    */
    RemoveButtonMission = 7029,
    /**
    * **Get mission**
    *
    * Get mission
    * @group Manager
    * @category Mission
    
    */
    GetMission = 7030,
    /**
    * **Set multidestination**
    *
    * Set multidestination
    * @group Manager
    * @category Mission
    
    */
    SetMultidestination = 7023,
    /**
    * **Set multidestination with messages**
    *
    * Set multidestination with messages
    * @group Manager
    * @category Mission
    
    */
    SetMultidestinationWithMessages = 7097,
    /**
    * **Import configuration**
    *
    * Import configuration
    * @group ROC
    * @category Configuration
    
    */
    ImportConfiguration = 7024,
    /**
    * **Export configuration**
    *
    * Export configuration
    * @group ROC
    * @category Configuration
    
    */
    ExportConfiguration = 7025,
    /**
    * **Import users**
    *
    * Import users
    * @group ROC
    * @category Configuration
    
    */
    ImportUsers = 7123,
    /**
    * **Export users**
    *
    * Export users
    * @group ROC
    * @category Configuration
    
    */
    ExportUsers = 7124,
    /**
    * **Get stats**
    *
    * Get stats
    * @group Stats
    * @category Configuration
    
    */
    GetStats = 7026,
    /**
    * **Get light stats**
    *
    * Get light stats
    * @group Stats
    * @category Configuration
    
    */
    GetLightStats = 7043,
    /**
    * **Export stats**
    *
    * Export stats
    * @group Stats
    * @category Configuration
    
    */
    ExportStats = 7039,
    /**
    * **Get list of maps for stats**
    *
    * Get list of maps for stats
    * @group Stats
    * @category Configuration
    
    */
    GetMapsForStats = 7040,
    /**
    * **Get vehicles timeline**
    *
    * Get vehicles timeline
    * @group Stats
    * @category Configuration
    
    */
    GetVehsTimeline = 7041,
    /**
    * **Remise stats**
    *
    * Remise stats
    * @group Stats
    * @category Configuration
    
    */
    ResetStats = 7027,
    /**
    * **Move down the lift**
    *
    * Move down the lift
    * @group Vehicle
    * @category Mission
    
    */
    LiftMoveDown = 7065,
    /**
    * **Move up the lift**
    *
    * Move up the lift
    * @group Vehicle
    * @category Mission
    
    */
    LiftMoveUp = 7084,
    /**
    * **Stop the lift**
    *
    * Stop the lift
    * @group Vehicle
    * @category Mission
    
    */
    LiftStop = 7085,
    /**
    * **Stop retrying**
    *
    * Stop retrying
    * @group Vehicle
    * @category Mission
    
    */
    StopRetrying = 7111,
    /**
    * **Add ROC user**
    *
    * Add ROC user
    * @group ROC
    * @category Configuration
    
    */
    AddRocUser = 7033,
    /**
    * **Update ROC user**
    *
    * Update ROC user
    * @group ROC
    * @category Configuration
    
    */
    UpdateRocUser = 7034,
    /**
    * **Update active ROC user credentials**
    *
    * Update active ROC user credentials
    * @group ROC
    * @category Configuration
    
    */
    UpdateActiveCredentials = 7107,
    /**
    * **Update ROC user**
    *
    * Remove ROC user
    * @group ROC
    * @category Configuration
    
    */
    RemoveRocUser = 7035,
    /**
    * **List ROC users**
    *
    * List ROC users
    * @group ROC
    * @category Configuration
    
    */
    ListRocUsers = 7036,
    /**
    * **Get ROC ID**
    *
    * Get ROC ID
    * @group ROC
    * @category Configuration
    
    */
    GetRocId = 7037,
    /**
    * **Update soft versions**
    *
    * Update soft versions
    * @group ROC
    * @category Configuration
    
    */
    UpdateSoftVersions = 7068,
    /**
    * **Hotspot set password**
    *
    * Hotspot set password
    * @group Vehicle
    * @category Configuration
    
    */
    HotspotSetPassword = 7042,
    /**
    * **Enable Hotspot**
    *
    * Enable Hotspot
    * @group Vehicle
    * @category Configuration
    
    */
    HotspotEnable = 7119,
    /**
    * **Create new mission**
    *
    * Create new mission
    * @group Manager
    * @category Mission
    
    */
    CreateMission = 7072,
    /**
    * **Create new mission**
    *
    * Create new mission
    * @group Manager
    * @category Mission
    
    */
    ExtendMission = 7073,
    /**
    * **Start button mission**
    *
    * Start button mission
    * @group Manager
    * @category Mission
    
    */
    StartButtonMission = 7074,
    /**
    * **Release module**
    *
    * Release module
    * @group Manager
    * @category Mission
    
    */
    ReleaseModule = 7075,
    /**
    * **Add group**
    *
    * Add new group
    * @group ROC
    * @category Configuration
    
    */
    AddGroup = 7076,
    /**
    * **Update group**
    *
    * Update group
    * @group ROC
    * @category Configuration
    
    */
    UpdateGroup = 7077,
    /**
    * **Delete group**
    *
    * Delete group
    * @group ROC
    * @category Configuration
    
    */
    DeleteGroup = 7078,
    /**
    * **Sub step mission**
    *
    * Sub step mission for groups
    * @group Vehicle
    * @category Mission
    
    */
    SubStepMission = 7079,
    /**
    * **Force a system update of ROC**
    *
    * Force a system update of ROC
    * @group Vehicle
    * @category Version
    
    */
    RocSoftForceUpdate = 7080,
    /**
    * **Set automatic updates for ROC**
    *
    * Enable/disable automatic update for ROC
    * @group Vehicle
    * @category Version
    
    */
    RocSoftSetAutomaticUpdates = 7081,
    /**
    * **Set tare module params**
    *
    * Set tare module params
    * @group Vehicle
    * @category Configuration
    
    */
    SetTareModuleParams = 7082,
    /**
    * **Set loaded module params**
    *
    * Set loaded module params
    * @group Vehicle
    * @category Configuration
    
    */
    SetLoadedModuleParams = 7083,
    /**
    * **Allow follow me**
    *
    * Allow follow me
    * @group Vehicle
    * @category Configuration
    
    */
    AllowFollowMe = 7101,
    /**
    * **Set max button id search**
    *
    * Set max button id search in config mode
    * @group Vehicle
    * @category Configuration
    
    */
    SetMaxButtonIdSearch = 7102,
    /**
    * **Set default wait release sound**
    *
    * Set default wait release sound
    * @group Vehicle
    * @category Configuration
    
    */
    SetDefaultWaitReleaseSound = 7103,
    /**
    * **Set manager active map**
    *
    * Set manager active map
    * @group Manager
    * @category Configuration
    
    */
    SetManagerActiveMap = 7090,
    /**
    * **Set manager active map**
    *
    * Set manager active map
    * @group Manager
    * @category Configuration
    
    */
    GetManagerMapsList = 7089,
    /**
    * **Set waiting sounds**
    *
    * Set list of waiting sound
    * @group Vehicle
    * @category Configuration
    
    */
    SetWaitingSounds = 7116,
    /**
    * **Set waiting sound**
    *
    * Set waiting sound
    * @group Vehicle
    * @category Configuration
    
    */
    SetWaitingSound = 7122,
    /**
    * **Set event sounds**
    *
    * Set list of event sound
    * @group Vehicle
    * @category Configuration
    
    */
    SetEventsSounds = 7117,
    /**
    * **Set language**
    *
    * Set language
    * @group ROC
    * @category Configuration
    
    */
    SetLanguage = 7121,
    /**
    * **Enable pairing**
    *
    * Enable pairing LoRa equipment
    * @group ROC
    * @category Configuration
    
    */
    EnablePairing = 7125,
    /**
    * **Pair equipment**
    *
    * Pair LoRa equipment
    * @group ROC
    * @category Configuration
    
    */
    PairEquipement = 7126,
    /**
    * **Revoke equipment**
    *
    * Revoke LoRa equipment
    * @group ROC
    * @category Configuration
    
    */
    RevokeEquipement = 7127,
    /**
    * **Ask pair**
    *
    * Ask pair on manager
    * @group ROC
    * @category Configuration
    
    */
    AskPair = 7128,
    /**
    * **Get security logging**
    *
    * Get security logging
    * @group Stats
    * @category Configuration
    
    */
    GetSecurityLogging = 7129,
    /**
    * **Export security logging**
    *
    * Export security logging
    * @group Stats
    * @category Configuration
    
    */
    ExportSecurityLogging = 7130,
    /**
    * **Mute or unmute Global emergency stop**
    *
    * Mute or unmute Global emergency stop
    * @group Vehicle
    * @category State
    
    */
    SetGlobalEmergencyStopMuted = 7131
}
/** @internal */
export interface ServiceOperationResponseMsgNoData {
    op_code: ServiceOperationCode;
    outcome: OutcomeCode;
    message: string;
}
/** @internal */
export interface ServiceOperationResponseMsgData<T> extends ServiceOperationResponseMsgNoData {
    data: T;
}
/** @internal */
export type ServiceOperationResponseMsg<T> = T extends null ? ServiceOperationResponseMsgNoData : ServiceOperationResponseMsgData<T>;
/** @internal */
export interface ServicePromiseCallbacks {
    resolve?: (value: any) => void;
    reject?: (reason: ServiceOperationResponseMsg<any>) => void;
}
/** @internal */
export declare const initServiceOperationCallbacks: () => {
    110: {
        resolve: undefined;
        reject: undefined;
    };
    2: {
        resolve: undefined;
        reject: undefined;
    };
    3: {
        resolve: undefined;
        reject: undefined;
    };
    4: {
        resolve: undefined;
        reject: undefined;
    };
    13: {
        resolve: undefined;
        reject: undefined;
    };
    12: {
        resolve: undefined;
        reject: undefined;
    };
    113: {
        resolve: undefined;
        reject: undefined;
    };
    114: {
        resolve: undefined;
        reject: undefined;
    };
    118: {
        resolve: undefined;
        reject: undefined;
    };
    134: {
        resolve: undefined;
        reject: undefined;
    };
    135: {
        resolve: undefined;
        reject: undefined;
    };
    122: {
        resolve: undefined;
        reject: undefined;
    };
    123: {
        resolve: undefined;
        reject: undefined;
    };
    7: {
        resolve: undefined;
        reject: undefined;
    };
    8: {
        resolve: undefined;
        reject: undefined;
    };
    9: {
        resolve: undefined;
        reject: undefined;
    };
    5: {
        resolve: undefined;
        reject: undefined;
    };
    143: {
        resolve: undefined;
        reject: undefined;
    };
    6: {
        resolve: undefined;
        reject: undefined;
    };
    10: {
        resolve: undefined;
        reject: undefined;
    };
    11: {
        resolve: undefined;
        reject: undefined;
    };
    21: {
        resolve: undefined;
        reject: undefined;
    };
    146: {
        resolve: undefined;
        reject: undefined;
    };
    35: {
        resolve: undefined;
        reject: undefined;
    };
    49: {
        resolve: undefined;
        reject: undefined;
    };
    51: {
        resolve: undefined;
        reject: undefined;
    };
    97: {
        resolve: undefined;
        reject: undefined;
    };
    115: {
        resolve: undefined;
        reject: undefined;
    };
    116: {
        resolve: undefined;
        reject: undefined;
    };
    106: {
        resolve: undefined;
        reject: undefined;
    };
    145: {
        resolve: undefined;
        reject: undefined;
    };
    17: {
        resolve: undefined;
        reject: undefined;
    };
    99: {
        resolve: undefined;
        reject: undefined;
    };
    89: {
        resolve: undefined;
        reject: undefined;
    };
    15: {
        resolve: undefined;
        reject: undefined;
    };
    108: {
        resolve: undefined;
        reject: undefined;
    };
    22: {
        resolve: undefined;
        reject: undefined;
    };
    30: {
        resolve: undefined;
        reject: undefined;
    };
    23: {
        resolve: undefined;
        reject: undefined;
    };
    38: {
        resolve: undefined;
        reject: undefined;
    };
    26: {
        resolve: undefined;
        reject: undefined;
    };
    28: {
        resolve: undefined;
        reject: undefined;
    };
    37: {
        resolve: undefined;
        reject: undefined;
    };
    24: {
        resolve: undefined;
        reject: undefined;
    };
    25: {
        resolve: undefined;
        reject: undefined;
    };
    27: {
        resolve: undefined;
        reject: undefined;
    };
    33: {
        resolve: undefined;
        reject: undefined;
    };
    39: {
        resolve: undefined;
        reject: undefined;
    };
    40: {
        resolve: undefined;
        reject: undefined;
    };
    111: {
        resolve: undefined;
        reject: undefined;
    };
    112: {
        resolve: undefined;
        reject: undefined;
    };
    58: {
        resolve: undefined;
        reject: undefined;
    };
    59: {
        resolve: undefined;
        reject: undefined;
    };
    62: {
        resolve: undefined;
        reject: undefined;
    };
    60: {
        resolve: undefined;
        reject: undefined;
    };
    61: {
        resolve: undefined;
        reject: undefined;
    };
    63: {
        resolve: undefined;
        reject: undefined;
    };
    64: {
        resolve: undefined;
        reject: undefined;
    };
    67: {
        resolve: undefined;
        reject: undefined;
    };
    65: {
        resolve: undefined;
        reject: undefined;
    };
    66: {
        resolve: undefined;
        reject: undefined;
    };
    68: {
        resolve: undefined;
        reject: undefined;
    };
    69: {
        resolve: undefined;
        reject: undefined;
    };
    85: {
        resolve: undefined;
        reject: undefined;
    };
    129: {
        resolve: undefined;
        reject: undefined;
    };
    44: {
        resolve: undefined;
        reject: undefined;
    };
    45: {
        resolve: undefined;
        reject: undefined;
    };
    94: {
        resolve: undefined;
        reject: undefined;
    };
    95: {
        resolve: undefined;
        reject: undefined;
    };
    96: {
        resolve: undefined;
        reject: undefined;
    };
    47: {
        resolve: undefined;
        reject: undefined;
    };
    48: {
        resolve: undefined;
        reject: undefined;
    };
    83: {
        resolve: undefined;
        reject: undefined;
    };
    93: {
        resolve: undefined;
        reject: undefined;
    };
    101: {
        resolve: undefined;
        reject: undefined;
    };
    102: {
        resolve: undefined;
        reject: undefined;
    };
    103: {
        resolve: undefined;
        reject: undefined;
    };
    104: {
        resolve: undefined;
        reject: undefined;
    };
    84: {
        resolve: undefined;
        reject: undefined;
    };
    86: {
        resolve: undefined;
        reject: undefined;
    };
    105: {
        resolve: undefined;
        reject: undefined;
    };
    87: {
        resolve: undefined;
        reject: undefined;
    };
    80: {
        resolve: undefined;
        reject: undefined;
    };
    88: {
        resolve: undefined;
        reject: undefined;
    };
    73: {
        resolve: undefined;
        reject: undefined;
    };
    74: {
        resolve: undefined;
        reject: undefined;
    };
    75: {
        resolve: undefined;
        reject: undefined;
    };
    91: {
        resolve: undefined;
        reject: undefined;
    };
    92: {
        resolve: undefined;
        reject: undefined;
    };
    148: {
        resolve: undefined;
        reject: undefined;
    };
    144: {
        resolve: undefined;
        reject: undefined;
    };
    158: {
        resolve: undefined;
        reject: undefined;
    };
    98: {
        resolve: undefined;
        reject: undefined;
    };
    136: {
        resolve: undefined;
        reject: undefined;
    };
    124: {
        resolve: undefined;
        reject: undefined;
    };
    125: {
        resolve: undefined;
        reject: undefined;
    };
    130: {
        resolve: undefined;
        reject: undefined;
    };
    131: {
        resolve: undefined;
        reject: undefined;
    };
    132: {
        resolve: undefined;
        reject: undefined;
    };
    133: {
        resolve: undefined;
        reject: undefined;
    };
    140: {
        resolve: undefined;
        reject: undefined;
    };
    149: {
        resolve: undefined;
        reject: undefined;
    };
    154: {
        resolve: undefined;
        reject: undefined;
    };
    155: {
        resolve: undefined;
        reject: undefined;
    };
    157: {
        resolve: undefined;
        reject: undefined;
    };
    7002: {
        resolve: undefined;
        reject: undefined;
    };
    7000: {
        resolve: undefined;
        reject: undefined;
    };
    7044: {
        resolve: undefined;
        reject: undefined;
    };
    7003: {
        resolve: undefined;
        reject: undefined;
    };
    7004: {
        resolve: undefined;
        reject: undefined;
    };
    7005: {
        resolve: undefined;
        reject: undefined;
    };
    7006: {
        resolve: undefined;
        reject: undefined;
    };
    7007: {
        resolve: undefined;
        reject: undefined;
    };
    7028: {
        resolve: undefined;
        reject: undefined;
    };
    7038: {
        resolve: undefined;
        reject: undefined;
    };
    7112: {
        resolve: undefined;
        reject: undefined;
    };
    7113: {
        resolve: undefined;
        reject: undefined;
    };
    7115: {
        resolve: undefined;
        reject: undefined;
    };
    7009: {
        resolve: undefined;
        reject: undefined;
    };
    7010: {
        resolve: undefined;
        reject: undefined;
    };
    7048: {
        resolve: undefined;
        reject: undefined;
    };
    7049: {
        resolve: undefined;
        reject: undefined;
    };
    7050: {
        resolve: undefined;
        reject: undefined;
    };
    7104: {
        resolve: undefined;
        reject: undefined;
    };
    7105: {
        resolve: undefined;
        reject: undefined;
    };
    7106: {
        resolve: undefined;
        reject: undefined;
    };
    7051: {
        resolve: undefined;
        reject: undefined;
    };
    7052: {
        resolve: undefined;
        reject: undefined;
    };
    7053: {
        resolve: undefined;
        reject: undefined;
    };
    7054: {
        resolve: undefined;
        reject: undefined;
    };
    7055: {
        resolve: undefined;
        reject: undefined;
    };
    7056: {
        resolve: undefined;
        reject: undefined;
    };
    7057: {
        resolve: undefined;
        reject: undefined;
    };
    7058: {
        resolve: undefined;
        reject: undefined;
    };
    7059: {
        resolve: undefined;
        reject: undefined;
    };
    7062: {
        resolve: undefined;
        reject: undefined;
    };
    7063: {
        resolve: undefined;
        reject: undefined;
    };
    7064: {
        resolve: undefined;
        reject: undefined;
    };
    7091: {
        resolve: undefined;
        reject: undefined;
    };
    7092: {
        resolve: undefined;
        reject: undefined;
    };
    7093: {
        resolve: undefined;
        reject: undefined;
    };
    7108: {
        resolve: undefined;
        reject: undefined;
    };
    7109: {
        resolve: undefined;
        reject: undefined;
    };
    7110: {
        resolve: undefined;
        reject: undefined;
    };
    7094: {
        resolve: undefined;
        reject: undefined;
    };
    7095: {
        resolve: undefined;
        reject: undefined;
    };
    7096: {
        resolve: undefined;
        reject: undefined;
    };
    7031: {
        resolve: undefined;
        reject: undefined;
    };
    7045: {
        resolve: undefined;
        reject: undefined;
    };
    7046: {
        resolve: undefined;
        reject: undefined;
    };
    7011: {
        resolve: undefined;
        reject: undefined;
    };
    7012: {
        resolve: undefined;
        reject: undefined;
    };
    7098: {
        resolve: undefined;
        reject: undefined;
    };
    7014: {
        resolve: undefined;
        reject: undefined;
    };
    7015: {
        resolve: undefined;
        reject: undefined;
    };
    7016: {
        resolve: undefined;
        reject: undefined;
    };
    7066: {
        resolve: undefined;
        reject: undefined;
    };
    7017: {
        resolve: undefined;
        reject: undefined;
    };
    7047: {
        resolve: undefined;
        reject: undefined;
    };
    7067: {
        resolve: undefined;
        reject: undefined;
    };
    7114: {
        resolve: undefined;
        reject: undefined;
    };
    7120: {
        resolve: undefined;
        reject: undefined;
    };
    7069: {
        resolve: undefined;
        reject: undefined;
    };
    7070: {
        resolve: undefined;
        reject: undefined;
    };
    7088: {
        resolve: undefined;
        reject: undefined;
    };
    7071: {
        resolve: undefined;
        reject: undefined;
    };
    7019: {
        resolve: undefined;
        reject: undefined;
    };
    7020: {
        resolve: undefined;
        reject: undefined;
    };
    7021: {
        resolve: undefined;
        reject: undefined;
    };
    7022: {
        resolve: undefined;
        reject: undefined;
    };
    7029: {
        resolve: undefined;
        reject: undefined;
    };
    7030: {
        resolve: undefined;
        reject: undefined;
    };
    7023: {
        resolve: undefined;
        reject: undefined;
    };
    7097: {
        resolve: undefined;
        reject: undefined;
    };
    7024: {
        resolve: undefined;
        reject: undefined;
    };
    7025: {
        resolve: undefined;
        reject: undefined;
    };
    7123: {
        resolve: undefined;
        reject: undefined;
    };
    7124: {
        resolve: undefined;
        reject: undefined;
    };
    7026: {
        resolve: undefined;
        reject: undefined;
    };
    7043: {
        resolve: undefined;
        reject: undefined;
    };
    7039: {
        resolve: undefined;
        reject: undefined;
    };
    7040: {
        resolve: undefined;
        reject: undefined;
    };
    7041: {
        resolve: undefined;
        reject: undefined;
    };
    7027: {
        resolve: undefined;
        reject: undefined;
    };
    7065: {
        resolve: undefined;
        reject: undefined;
    };
    7084: {
        resolve: undefined;
        reject: undefined;
    };
    7085: {
        resolve: undefined;
        reject: undefined;
    };
    7111: {
        resolve: undefined;
        reject: undefined;
    };
    7033: {
        resolve: undefined;
        reject: undefined;
    };
    7034: {
        resolve: undefined;
        reject: undefined;
    };
    7107: {
        resolve: undefined;
        reject: undefined;
    };
    7035: {
        resolve: undefined;
        reject: undefined;
    };
    7036: {
        resolve: undefined;
        reject: undefined;
    };
    7037: {
        resolve: undefined;
        reject: undefined;
    };
    7068: {
        resolve: undefined;
        reject: undefined;
    };
    7042: {
        resolve: undefined;
        reject: undefined;
    };
    7119: {
        resolve: undefined;
        reject: undefined;
    };
    7072: {
        resolve: undefined;
        reject: undefined;
    };
    7073: {
        resolve: undefined;
        reject: undefined;
    };
    7074: {
        resolve: undefined;
        reject: undefined;
    };
    7075: {
        resolve: undefined;
        reject: undefined;
    };
    7076: {
        resolve: undefined;
        reject: undefined;
    };
    7077: {
        resolve: undefined;
        reject: undefined;
    };
    7078: {
        resolve: undefined;
        reject: undefined;
    };
    7079: {
        resolve: undefined;
        reject: undefined;
    };
    7080: {
        resolve: undefined;
        reject: undefined;
    };
    7081: {
        resolve: undefined;
        reject: undefined;
    };
    7082: {
        resolve: undefined;
        reject: undefined;
    };
    7083: {
        resolve: undefined;
        reject: undefined;
    };
    7101: {
        resolve: undefined;
        reject: undefined;
    };
    7102: {
        resolve: undefined;
        reject: undefined;
    };
    7103: {
        resolve: undefined;
        reject: undefined;
    };
    7090: {
        resolve: undefined;
        reject: undefined;
    };
    7089: {
        resolve: undefined;
        reject: undefined;
    };
    7116: {
        resolve: undefined;
        reject: undefined;
    };
    7122: {
        resolve: undefined;
        reject: undefined;
    };
    7117: {
        resolve: undefined;
        reject: undefined;
    };
    7121: {
        resolve: undefined;
        reject: undefined;
    };
    7125: {
        resolve: undefined;
        reject: undefined;
    };
    7126: {
        resolve: undefined;
        reject: undefined;
    };
    7127: {
        resolve: undefined;
        reject: undefined;
    };
    7128: {
        resolve: undefined;
        reject: undefined;
    };
    7129: {
        resolve: undefined;
        reject: undefined;
    };
    7130: {
        resolve: undefined;
        reject: undefined;
    };
    7131: {
        resolve: undefined;
        reject: undefined;
    };
};
/** @internal */
export type ServiceParamsType = {
    [ServiceOperationCode.GetVehId]: null;
    [ServiceOperationCode.Subscribe]: number;
    [ServiceOperationCode.Unsubscribe]: number;
    [ServiceOperationCode.UnsubscribeAll]: null;
    [ServiceOperationCode.CancelActions]: null;
    [ServiceOperationCode.Teleop]: TeleopCmd;
    [ServiceOperationCode.TeleopAssistedWithMap]: TeleopCmd;
    [ServiceOperationCode.TeleopAssistedWithoutMap]: TeleopCmd;
    [ServiceOperationCode.FollowMe]: FollowMeParams;
    [ServiceOperationCode.FollowMeResetTracking]: Direction;
    [ServiceOperationCode.FollowMeSetMode]: FollowMode;
    [ServiceOperationCode.SetSleeping]: boolean;
    [ServiceOperationCode.SetHibernate]: boolean;
    [ServiceOperationCode.AuthSession]: string;
    [ServiceOperationCode.AuthModule]: AuthModuleParams;
    [ServiceOperationCode.Sink]: null;
    [ServiceOperationCode.SetUseFragmentedMessage]: boolean;
    [ServiceOperationCode.Logout]: null;
    [ServiceOperationCode.Login]: LoginParams;
    [ServiceOperationCode.SetTeleopActive]: boolean;
    [ServiceOperationCode.GetTeleopActive]: null;
    [ServiceOperationCode.ImportSite]: string;
    [ServiceOperationCode.ImportSoundsConfig]: string;
    [ServiceOperationCode.ExportSite]: number | ExportSiteParams2;
    [ServiceOperationCode.ExportSites]: ExportSitesParams1Item[] | ExportSitesParams2;
    [ServiceOperationCode.GetNewChargingStationFromMarker]: Marker;
    [ServiceOperationCode.GetNewDockedPoseFromMarker]: Marker;
    [ServiceOperationCode.UpdateChargingStationConfig]: UpdateChargingStationConfigParams;
    [ServiceOperationCode.UpdateDockedPoseConfig]: UpdateDockedPoseConfigParams;
    [ServiceOperationCode.SimSetSoundIsPlaying]: boolean;
    [ServiceOperationCode.SimuSetExternalSpeaker]: boolean;
    [ServiceOperationCode.SetUser]: SetUserParams;
    [ServiceOperationCode.DeleteUser]: number;
    [ServiceOperationCode.SetObtCbt]: SetObtCbtParams;
    [ServiceOperationCode.ListUsers]: null;
    [ServiceOperationCode.GetUser]: number;
    [ServiceOperationCode.ListSites]: null;
    [ServiceOperationCode.ListSitesWithMaps]: null;
    [ServiceOperationCode.GetSite]: number;
    [ServiceOperationCode.GetSiteWithMaps]: number;
    [ServiceOperationCode.GetMap]: number;
    [ServiceOperationCode.GetActiveSite]: null;
    [ServiceOperationCode.GetActiveSiteWithMaps]: null;
    [ServiceOperationCode.SetSite]: Site;
    [ServiceOperationCode.ListMaps]: number;
    [ServiceOperationCode.GetActiveMap]: null;
    [ServiceOperationCode.GetActiveMapImgRaw]: null;
    [ServiceOperationCode.GetMapElements]: number;
    [ServiceOperationCode.GetActiveMapElements]: null;
    [ServiceOperationCode.GetMapWithoutImages]: number;
    [ServiceOperationCode.GetActiveMapWithoutImages]: null;
    [ServiceOperationCode.DeleteSite]: number;
    [ServiceOperationCode.DeleteMap]: number;
    [ServiceOperationCode.SetChargingStation]: ChargingStation;
    [ServiceOperationCode.SetSavedPose]: SavedPose;
    [ServiceOperationCode.SetDockedPose]: DockedPose;
    [ServiceOperationCode.SetForbiddenArea]: ForbiddenArea;
    [ServiceOperationCode.SetCustomArea]: CustomArea;
    [ServiceOperationCode.DeleteChargingStation]: number;
    [ServiceOperationCode.DeleteSavedPose]: number;
    [ServiceOperationCode.DeleteDockedPose]: number;
    [ServiceOperationCode.DeleteForbiddenArea]: number;
    [ServiceOperationCode.DeleteCustomArea]: number;
    [ServiceOperationCode.CheckPose]: CheckPoseParams | undefined;
    [ServiceOperationCode.Check3dBox]: Check3dBoxParams;
    [ServiceOperationCode.GetModuleData]: null;
    [ServiceOperationCode.SetModuleData]: string;
    [ServiceOperationCode.GetInternalData]: null;
    [ServiceOperationCode.SetInternalData]: string;
    [ServiceOperationCode.StartCycle]: null;
    [ServiceOperationCode.SetCarMode]: boolean;
    [ServiceOperationCode.SetCustomLed]: SetCustomLedParams;
    [ServiceOperationCode.SetCustomSound]: SetCustomSoundParams;
    [ServiceOperationCode.GetSoftVersion]: null;
    [ServiceOperationCode.SimBatterySetPowerConsumption]: number;
    [ServiceOperationCode.SimBatterySetChargePower]: number;
    [ServiceOperationCode.SimBatterySetPercentage]: number;
    [ServiceOperationCode.SimBatterySetChargerOn]: boolean;
    [ServiceOperationCode.SetMaintenanceMode]: boolean;
    [ServiceOperationCode.SetProhibitMovement]: boolean;
    [ServiceOperationCode.SimSetDiffDriveState]: SimSetDiffDriveStateParams;
    [ServiceOperationCode.NetworkHotspotSetPassword]: string;
    [ServiceOperationCode.NetworkWifiListAps]: null;
    [ServiceOperationCode.GetElementsList]: null;
    [ServiceOperationCode.AutopilotSetConfig]: AutopilotSequence;
    [ServiceOperationCode.AutopilotStart]: boolean;
    [ServiceOperationCode.AutopilotStop]: null;
    [ServiceOperationCode.SetScenarioSoundMaxVolume]: SoundScenarioVolume[];
    [ServiceOperationCode.GetScenarioSoundMaxVolume]: null;
    [ServiceOperationCode.SetScenarioSoundSamples]: SoundScenarioSample[];
    [ServiceOperationCode.GetScenarioSoundSamples]: null;
    [ServiceOperationCode.InhibitSafetyAlertSoundScenario]: boolean;
    [ServiceOperationCode.SetModuleParams]: SetModuleParamsParams;
    [ServiceOperationCode.NetworkRedirectPort]: NetworkRedirectPortParams;
    [ServiceOperationCode.ForceUpdate]: null;
    [ServiceOperationCode.SetAutomaticUpdates]: boolean;
    [ServiceOperationCode.EnableDynamicFilters]: boolean;
    [ServiceOperationCode.SystemRestart]: SystemRestartParams;
    [ServiceOperationCode.SystemRequestFlashRoboteq]: null;
    [ServiceOperationCode.SystemRequestFlashMcu]: null;
    [ServiceOperationCode.GetShelves]: GetShelvesParams;
    [ServiceOperationCode.DeleteSound]: string;
    [ServiceOperationCode.DisableCam3dMapping]: boolean;
    [ServiceOperationCode.DisableUsSensorsMapping]: boolean;
    [ServiceOperationCode.RearmChassisIntrusion]: null;
    [ServiceOperationCode.LogoutHmi]: null;
    [ServiceOperationCode.AddButton]: AddButtonParams;
    [ServiceOperationCode.UpdateButton]: ButtonConfig;
    [ServiceOperationCode.DeleteButton]: number;
    [ServiceOperationCode.AddVeh]: number;
    [ServiceOperationCode.DeleteVeh]: number;
    [ServiceOperationCode.SetIsVeh]: boolean;
    [ServiceOperationCode.SetIsManager]: boolean;
    [ServiceOperationCode.SetModuleType]: ModuleType;
    [ServiceOperationCode.SetVehDirection]: VehDirection;
    [ServiceOperationCode.SetDockDirection]: VehDirection;
    [ServiceOperationCode.ReleaseShelf]: null;
    [ServiceOperationCode.ReleaseShelfAndRelease]: null;
    [ServiceOperationCode.SetIdModule]: number;
    [ServiceOperationCode.SetLoraSp]: number;
    [ServiceOperationCode.AddWaitingPose]: WaitingPose;
    [ServiceOperationCode.UpdateWaitingPose]: WaitingPose;
    [ServiceOperationCode.DeleteWaitingPose]: number;
    [ServiceOperationCode.AddPortRedirection]: ExternalPortRedirection;
    [ServiceOperationCode.UpdatePortRedirection]: UpdatePortRedirectionParams;
    [ServiceOperationCode.DeletePortRedirection]: DeletePortRedirectionParams;
    [ServiceOperationCode.AddCustomCommand]: CustomCommand;
    [ServiceOperationCode.UpdateCustomCommand]: CustomCommand;
    [ServiceOperationCode.DeleteCustomCommand]: number;
    [ServiceOperationCode.AddControllerLora]: ControllerLora;
    [ServiceOperationCode.UpdateControllerLora]: ControllerLora;
    [ServiceOperationCode.DeleteControllerLora]: number;
    [ServiceOperationCode.AddMapElementRestriction]: MapElementRestriction;
    [ServiceOperationCode.UpdateMapElementRestriction]: MapElementRestriction;
    [ServiceOperationCode.DeleteMapElementRestriction]: number;
    [ServiceOperationCode.AddRocDockedPoseConfig]: DockedPoseConfig;
    [ServiceOperationCode.UpdateRocDockedPoseConfig]: DockedPoseConfig;
    [ServiceOperationCode.DeleteRocDockedPoseConfig]: number;
    [ServiceOperationCode.AddRocMapElementConfig]: RocMapElementConfig;
    [ServiceOperationCode.UpdateRocMapElementConfig]: RocMapElementConfig;
    [ServiceOperationCode.DeleteRocMapElementConfig]: number;
    [ServiceOperationCode.AddRocAreaConfig]: RocAreaConfig;
    [ServiceOperationCode.UpdateRocAreaConfig]: RocAreaConfig;
    [ServiceOperationCode.DeleteRocAreaConfig]: number;
    [ServiceOperationCode.ControllerLoraGetContactsConfig]: number;
    [ServiceOperationCode.ControllerLoraSetContactConfig]: ControllerLoraSetContactConfigParams;
    [ServiceOperationCode.SetPredefinedMessages]: string[];
    [ServiceOperationCode.SetVehicleDelayConfig]: VehDelayConfig;
    [ServiceOperationCode.SetVehicleResponseDeadline]: number;
    [ServiceOperationCode.SetDefaultResponseDeadline]: number;
    [ServiceOperationCode.Release]: null;
    [ServiceOperationCode.NextStepMission]: number;
    [ServiceOperationCode.NextStepMissionWithMessage]: NextStepMissionWithMessageParams;
    [ServiceOperationCode.PauseMove]: null;
    [ServiceOperationCode.ResumeMove]: null;
    [ServiceOperationCode.CancelMove]: null;
    [ServiceOperationCode.Reboot]: null;
    [ServiceOperationCode.SetInConfigMode]: boolean;
    [ServiceOperationCode.SetInMaintenanceMode]: boolean;
    [ServiceOperationCode.SetAllowMoveFromDock]: boolean;
    [ServiceOperationCode.SetAllowMultipleMissions]: boolean;
    [ServiceOperationCode.SetShowAllDestinationsOnHome]: boolean;
    [ServiceOperationCode.SetModuleSleeping]: boolean;
    [ServiceOperationCode.SetModuleHibernate]: boolean;
    [ServiceOperationCode.SetSleepScreen]: boolean;
    [ServiceOperationCode.SetOperatingHours]: OperatingHours;
    [ServiceOperationCode.CheckHmiPassword]: string;
    [ServiceOperationCode.SetHighPriority]: number;
    [ServiceOperationCode.SetNormalPriority]: number;
    [ServiceOperationCode.RemoveMission]: number;
    [ServiceOperationCode.RemoveButtonMission]: number;
    [ServiceOperationCode.GetMission]: number;
    [ServiceOperationCode.SetMultidestination]: SetMultidestinationParams;
    [ServiceOperationCode.SetMultidestinationWithMessages]: SetMultidestinationWithMessagesParams;
    [ServiceOperationCode.ImportConfiguration]: string;
    [ServiceOperationCode.ExportConfiguration]: null;
    [ServiceOperationCode.ImportUsers]: string;
    [ServiceOperationCode.ExportUsers]: null;
    [ServiceOperationCode.GetStats]: GetStatsParams;
    [ServiceOperationCode.GetLightStats]: GetLightStatsParams;
    [ServiceOperationCode.ExportStats]: ExportStatsParams;
    [ServiceOperationCode.GetMapsForStats]: null;
    [ServiceOperationCode.GetVehsTimeline]: GetVehsTimelineParams;
    [ServiceOperationCode.ResetStats]: null;
    [ServiceOperationCode.LiftMoveDown]: null;
    [ServiceOperationCode.LiftMoveUp]: null;
    [ServiceOperationCode.LiftStop]: null;
    [ServiceOperationCode.StopRetrying]: null;
    [ServiceOperationCode.AddRocUser]: AddRocUserParams;
    [ServiceOperationCode.UpdateRocUser]: UpdateRocUserParams;
    [ServiceOperationCode.UpdateActiveCredentials]: UpdateActiveCredentialsParams;
    [ServiceOperationCode.RemoveRocUser]: number;
    [ServiceOperationCode.ListRocUsers]: null;
    [ServiceOperationCode.GetRocId]: null;
    [ServiceOperationCode.UpdateSoftVersions]: null;
    [ServiceOperationCode.HotspotSetPassword]: string;
    [ServiceOperationCode.HotspotEnable]: boolean;
    [ServiceOperationCode.CreateMission]: CreateMissionParams;
    [ServiceOperationCode.ExtendMission]: ExtendMissionParams;
    [ServiceOperationCode.StartButtonMission]: StartButtonMissionParams;
    [ServiceOperationCode.ReleaseModule]: number;
    [ServiceOperationCode.AddGroup]: Group;
    [ServiceOperationCode.UpdateGroup]: Group;
    [ServiceOperationCode.DeleteGroup]: number;
    [ServiceOperationCode.SubStepMission]: number;
    [ServiceOperationCode.RocSoftForceUpdate]: null;
    [ServiceOperationCode.RocSoftSetAutomaticUpdates]: boolean;
    [ServiceOperationCode.SetTareModuleParams]: ModuleParams;
    [ServiceOperationCode.SetLoadedModuleParams]: ModuleParams;
    [ServiceOperationCode.AllowFollowMe]: boolean;
    [ServiceOperationCode.SetMaxButtonIdSearch]: number;
    [ServiceOperationCode.SetDefaultWaitReleaseSound]: string;
    [ServiceOperationCode.SetManagerActiveMap]: number;
    [ServiceOperationCode.GetManagerMapsList]: null;
    [ServiceOperationCode.SetWaitingSounds]: WaitingSound[];
    [ServiceOperationCode.SetWaitingSound]: WaitingSound;
    [ServiceOperationCode.SetEventsSounds]: EventSound[];
    [ServiceOperationCode.SetLanguage]: Language;
    [ServiceOperationCode.EnablePairing]: boolean;
    [ServiceOperationCode.PairEquipement]: number;
    [ServiceOperationCode.RevokeEquipement]: number;
    [ServiceOperationCode.AskPair]: null;
    [ServiceOperationCode.GetSecurityLogging]: GetSecurityLoggingParams;
    [ServiceOperationCode.ExportSecurityLogging]: ExportSecurityLoggingParams;
    [ServiceOperationCode.SetGlobalEmergencyStopMuted]: boolean;
};
/** @internal */
export type ServiceResultType = {
    [ServiceOperationCode.GetVehId]: DeepRequired<string>;
    [ServiceOperationCode.Subscribe]: DeepRequired<SubscribeResult>;
    [ServiceOperationCode.Unsubscribe]: DeepRequired<null>;
    [ServiceOperationCode.UnsubscribeAll]: DeepRequired<null>;
    [ServiceOperationCode.CancelActions]: DeepRequired<null>;
    [ServiceOperationCode.Teleop]: DeepRequired<null>;
    [ServiceOperationCode.TeleopAssistedWithMap]: DeepRequired<null>;
    [ServiceOperationCode.TeleopAssistedWithoutMap]: DeepRequired<null>;
    [ServiceOperationCode.FollowMe]: DeepRequired<null>;
    [ServiceOperationCode.FollowMeResetTracking]: DeepRequired<null>;
    [ServiceOperationCode.FollowMeSetMode]: DeepRequired<null>;
    [ServiceOperationCode.SetSleeping]: DeepRequired<null>;
    [ServiceOperationCode.SetHibernate]: DeepRequired<null>;
    [ServiceOperationCode.AuthSession]: DeepRequired<AuthSessionResult>;
    [ServiceOperationCode.AuthModule]: DeepRequired<null>;
    [ServiceOperationCode.Sink]: DeepRequired<null>;
    [ServiceOperationCode.SetUseFragmentedMessage]: DeepRequired<null>;
    [ServiceOperationCode.Logout]: DeepRequired<null>;
    [ServiceOperationCode.Login]: DeepRequired<LoginResult>;
    [ServiceOperationCode.SetTeleopActive]: DeepRequired<null>;
    [ServiceOperationCode.GetTeleopActive]: DeepRequired<boolean>;
    [ServiceOperationCode.ImportSite]: DeepRequired<ImportSiteResult>;
    [ServiceOperationCode.ImportSoundsConfig]: DeepRequired<ImportSoundsConfigResult>;
    [ServiceOperationCode.ExportSite]: DeepRequired<string>;
    [ServiceOperationCode.ExportSites]: DeepRequired<ExportSitesResultItem[]>;
    [ServiceOperationCode.GetNewChargingStationFromMarker]: DeepRequired<ChargingStation>;
    [ServiceOperationCode.GetNewDockedPoseFromMarker]: DeepRequired<DockedPose>;
    [ServiceOperationCode.UpdateChargingStationConfig]: DeepRequired<ChargingStation>;
    [ServiceOperationCode.UpdateDockedPoseConfig]: DeepRequired<DockedPose>;
    [ServiceOperationCode.SimSetSoundIsPlaying]: DeepRequired<null>;
    [ServiceOperationCode.SimuSetExternalSpeaker]: DeepRequired<null>;
    [ServiceOperationCode.SetUser]: DeepRequired<number>;
    [ServiceOperationCode.DeleteUser]: DeepRequired<null>;
    [ServiceOperationCode.SetObtCbt]: DeepRequired<null>;
    [ServiceOperationCode.ListUsers]: DeepRequired<User[]>;
    [ServiceOperationCode.GetUser]: DeepRequired<User>;
    [ServiceOperationCode.ListSites]: DeepRequired<SiteRaw[]>;
    [ServiceOperationCode.ListSitesWithMaps]: DeepRequired<SiteLight[]>;
    [ServiceOperationCode.GetSite]: DeepRequired<SiteRaw>;
    [ServiceOperationCode.GetSiteWithMaps]: DeepRequired<SiteLight>;
    [ServiceOperationCode.GetMap]: DeepRequired<Map>;
    [ServiceOperationCode.GetActiveSite]: DeepRequired<SiteRaw>;
    [ServiceOperationCode.GetActiveSiteWithMaps]: DeepRequired<SiteRaw>;
    [ServiceOperationCode.SetSite]: DeepRequired<number>;
    [ServiceOperationCode.ListMaps]: DeepRequired<MapRaw[]>;
    [ServiceOperationCode.GetActiveMap]: DeepRequired<Map>;
    [ServiceOperationCode.GetActiveMapImgRaw]: DeepRequired<string>;
    [ServiceOperationCode.GetMapElements]: DeepRequired<MapElements>;
    [ServiceOperationCode.GetActiveMapElements]: DeepRequired<MapElements>;
    [ServiceOperationCode.GetMapWithoutImages]: DeepRequired<MapWithoutImages>;
    [ServiceOperationCode.GetActiveMapWithoutImages]: DeepRequired<MapWithoutImages>;
    [ServiceOperationCode.DeleteSite]: DeepRequired<null>;
    [ServiceOperationCode.DeleteMap]: DeepRequired<null>;
    [ServiceOperationCode.SetChargingStation]: DeepRequired<SetChargingStationResult>;
    [ServiceOperationCode.SetSavedPose]: DeepRequired<SetSavedPoseResult>;
    [ServiceOperationCode.SetDockedPose]: DeepRequired<SetDockedPoseResult>;
    [ServiceOperationCode.SetForbiddenArea]: DeepRequired<SetForbiddenAreaResult>;
    [ServiceOperationCode.SetCustomArea]: DeepRequired<SetCustomAreaResult>;
    [ServiceOperationCode.DeleteChargingStation]: DeepRequired<null>;
    [ServiceOperationCode.DeleteSavedPose]: DeepRequired<null>;
    [ServiceOperationCode.DeleteDockedPose]: DeepRequired<null>;
    [ServiceOperationCode.DeleteForbiddenArea]: DeepRequired<null>;
    [ServiceOperationCode.DeleteCustomArea]: DeepRequired<null>;
    [ServiceOperationCode.CheckPose]: DeepRequired<boolean>;
    [ServiceOperationCode.Check3dBox]: DeepRequired<boolean>;
    [ServiceOperationCode.GetModuleData]: DeepRequired<string>;
    [ServiceOperationCode.SetModuleData]: DeepRequired<null>;
    [ServiceOperationCode.GetInternalData]: DeepRequired<string>;
    [ServiceOperationCode.SetInternalData]: DeepRequired<null>;
    [ServiceOperationCode.StartCycle]: DeepRequired<null>;
    [ServiceOperationCode.SetCarMode]: DeepRequired<null>;
    [ServiceOperationCode.SetCustomLed]: DeepRequired<null>;
    [ServiceOperationCode.SetCustomSound]: DeepRequired<null>;
    [ServiceOperationCode.GetSoftVersion]: DeepRequired<string>;
    [ServiceOperationCode.SimBatterySetPowerConsumption]: DeepRequired<null>;
    [ServiceOperationCode.SimBatterySetChargePower]: DeepRequired<null>;
    [ServiceOperationCode.SimBatterySetPercentage]: DeepRequired<null>;
    [ServiceOperationCode.SimBatterySetChargerOn]: DeepRequired<null>;
    [ServiceOperationCode.SetMaintenanceMode]: DeepRequired<null>;
    [ServiceOperationCode.SetProhibitMovement]: DeepRequired<null>;
    [ServiceOperationCode.SimSetDiffDriveState]: DeepRequired<null>;
    [ServiceOperationCode.NetworkHotspotSetPassword]: DeepRequired<null>;
    [ServiceOperationCode.NetworkWifiListAps]: DeepRequired<WifiAp[]>;
    [ServiceOperationCode.GetElementsList]: DeepRequired<DiagnosticElement[]>;
    [ServiceOperationCode.AutopilotSetConfig]: DeepRequired<null>;
    [ServiceOperationCode.AutopilotStart]: DeepRequired<null>;
    [ServiceOperationCode.AutopilotStop]: DeepRequired<null>;
    [ServiceOperationCode.SetScenarioSoundMaxVolume]: DeepRequired<null>;
    [ServiceOperationCode.GetScenarioSoundMaxVolume]: DeepRequired<SoundScenarioVolume[]>;
    [ServiceOperationCode.SetScenarioSoundSamples]: DeepRequired<null>;
    [ServiceOperationCode.GetScenarioSoundSamples]: DeepRequired<SoundScenarioSample[]>;
    [ServiceOperationCode.InhibitSafetyAlertSoundScenario]: DeepRequired<null>;
    [ServiceOperationCode.SetModuleParams]: DeepRequired<null>;
    [ServiceOperationCode.NetworkRedirectPort]: DeepRequired<null>;
    [ServiceOperationCode.ForceUpdate]: DeepRequired<null>;
    [ServiceOperationCode.SetAutomaticUpdates]: DeepRequired<null>;
    [ServiceOperationCode.EnableDynamicFilters]: DeepRequired<null>;
    [ServiceOperationCode.SystemRestart]: DeepRequired<null>;
    [ServiceOperationCode.SystemRequestFlashRoboteq]: DeepRequired<null>;
    [ServiceOperationCode.SystemRequestFlashMcu]: DeepRequired<null>;
    [ServiceOperationCode.GetShelves]: DeepRequired<Pose[]>;
    [ServiceOperationCode.DeleteSound]: DeepRequired<null>;
    [ServiceOperationCode.DisableCam3dMapping]: DeepRequired<null>;
    [ServiceOperationCode.DisableUsSensorsMapping]: DeepRequired<null>;
    [ServiceOperationCode.RearmChassisIntrusion]: DeepRequired<null>;
    [ServiceOperationCode.LogoutHmi]: DeepRequired<null>;
    [ServiceOperationCode.AddButton]: DeepRequired<null>;
    [ServiceOperationCode.UpdateButton]: DeepRequired<null>;
    [ServiceOperationCode.DeleteButton]: DeepRequired<null>;
    [ServiceOperationCode.AddVeh]: DeepRequired<null>;
    [ServiceOperationCode.DeleteVeh]: DeepRequired<null>;
    [ServiceOperationCode.SetIsVeh]: DeepRequired<null>;
    [ServiceOperationCode.SetIsManager]: DeepRequired<null>;
    [ServiceOperationCode.SetModuleType]: DeepRequired<null>;
    [ServiceOperationCode.SetVehDirection]: DeepRequired<null>;
    [ServiceOperationCode.SetDockDirection]: DeepRequired<null>;
    [ServiceOperationCode.ReleaseShelf]: DeepRequired<null>;
    [ServiceOperationCode.ReleaseShelfAndRelease]: DeepRequired<null>;
    [ServiceOperationCode.SetIdModule]: DeepRequired<null>;
    [ServiceOperationCode.SetLoraSp]: DeepRequired<null>;
    [ServiceOperationCode.AddWaitingPose]: DeepRequired<null>;
    [ServiceOperationCode.UpdateWaitingPose]: DeepRequired<null>;
    [ServiceOperationCode.DeleteWaitingPose]: DeepRequired<null>;
    [ServiceOperationCode.AddPortRedirection]: DeepRequired<null>;
    [ServiceOperationCode.UpdatePortRedirection]: DeepRequired<null>;
    [ServiceOperationCode.DeletePortRedirection]: DeepRequired<null>;
    [ServiceOperationCode.AddCustomCommand]: DeepRequired<null>;
    [ServiceOperationCode.UpdateCustomCommand]: DeepRequired<null>;
    [ServiceOperationCode.DeleteCustomCommand]: DeepRequired<null>;
    [ServiceOperationCode.AddControllerLora]: DeepRequired<null>;
    [ServiceOperationCode.UpdateControllerLora]: DeepRequired<null>;
    [ServiceOperationCode.DeleteControllerLora]: DeepRequired<null>;
    [ServiceOperationCode.AddMapElementRestriction]: DeepRequired<null>;
    [ServiceOperationCode.UpdateMapElementRestriction]: DeepRequired<null>;
    [ServiceOperationCode.DeleteMapElementRestriction]: DeepRequired<null>;
    [ServiceOperationCode.AddRocDockedPoseConfig]: DeepRequired<null>;
    [ServiceOperationCode.UpdateRocDockedPoseConfig]: DeepRequired<null>;
    [ServiceOperationCode.DeleteRocDockedPoseConfig]: DeepRequired<null>;
    [ServiceOperationCode.AddRocMapElementConfig]: DeepRequired<null>;
    [ServiceOperationCode.UpdateRocMapElementConfig]: DeepRequired<null>;
    [ServiceOperationCode.DeleteRocMapElementConfig]: DeepRequired<null>;
    [ServiceOperationCode.AddRocAreaConfig]: DeepRequired<null>;
    [ServiceOperationCode.UpdateRocAreaConfig]: DeepRequired<null>;
    [ServiceOperationCode.DeleteRocAreaConfig]: DeepRequired<null>;
    [ServiceOperationCode.ControllerLoraGetContactsConfig]: DeepRequired<null>;
    [ServiceOperationCode.ControllerLoraSetContactConfig]: DeepRequired<null>;
    [ServiceOperationCode.SetPredefinedMessages]: DeepRequired<null>;
    [ServiceOperationCode.SetVehicleDelayConfig]: DeepRequired<null>;
    [ServiceOperationCode.SetVehicleResponseDeadline]: DeepRequired<null>;
    [ServiceOperationCode.SetDefaultResponseDeadline]: DeepRequired<null>;
    [ServiceOperationCode.Release]: DeepRequired<null>;
    [ServiceOperationCode.NextStepMission]: DeepRequired<null>;
    [ServiceOperationCode.NextStepMissionWithMessage]: DeepRequired<null>;
    [ServiceOperationCode.PauseMove]: DeepRequired<null>;
    [ServiceOperationCode.ResumeMove]: DeepRequired<null>;
    [ServiceOperationCode.CancelMove]: DeepRequired<null>;
    [ServiceOperationCode.Reboot]: DeepRequired<null>;
    [ServiceOperationCode.SetInConfigMode]: DeepRequired<null>;
    [ServiceOperationCode.SetInMaintenanceMode]: DeepRequired<null>;
    [ServiceOperationCode.SetAllowMoveFromDock]: DeepRequired<null>;
    [ServiceOperationCode.SetAllowMultipleMissions]: DeepRequired<null>;
    [ServiceOperationCode.SetShowAllDestinationsOnHome]: DeepRequired<null>;
    [ServiceOperationCode.SetModuleSleeping]: DeepRequired<null>;
    [ServiceOperationCode.SetModuleHibernate]: DeepRequired<null>;
    [ServiceOperationCode.SetSleepScreen]: DeepRequired<null>;
    [ServiceOperationCode.SetOperatingHours]: DeepRequired<null>;
    [ServiceOperationCode.CheckHmiPassword]: DeepRequired<CheckHmiPasswordResult>;
    [ServiceOperationCode.SetHighPriority]: DeepRequired<null>;
    [ServiceOperationCode.SetNormalPriority]: DeepRequired<null>;
    [ServiceOperationCode.RemoveMission]: DeepRequired<null>;
    [ServiceOperationCode.RemoveButtonMission]: DeepRequired<null>;
    [ServiceOperationCode.GetMission]: DeepRequired<Mission>;
    [ServiceOperationCode.SetMultidestination]: DeepRequired<null>;
    [ServiceOperationCode.SetMultidestinationWithMessages]: DeepRequired<null>;
    [ServiceOperationCode.ImportConfiguration]: DeepRequired<null>;
    [ServiceOperationCode.ExportConfiguration]: DeepRequired<string>;
    [ServiceOperationCode.ImportUsers]: DeepRequired<null>;
    [ServiceOperationCode.ExportUsers]: DeepRequired<string>;
    [ServiceOperationCode.GetStats]: DeepRequired<StatsData>;
    [ServiceOperationCode.GetLightStats]: DeepRequired<DailyStats>;
    [ServiceOperationCode.ExportStats]: DeepRequired<ExportedStats>;
    [ServiceOperationCode.GetMapsForStats]: DeepRequired<Map[]>;
    [ServiceOperationCode.GetVehsTimeline]: DeepRequired<VehTimelineData[]>;
    [ServiceOperationCode.ResetStats]: DeepRequired<null>;
    [ServiceOperationCode.LiftMoveDown]: DeepRequired<null>;
    [ServiceOperationCode.LiftMoveUp]: DeepRequired<null>;
    [ServiceOperationCode.LiftStop]: DeepRequired<null>;
    [ServiceOperationCode.StopRetrying]: DeepRequired<null>;
    [ServiceOperationCode.AddRocUser]: DeepRequired<null>;
    [ServiceOperationCode.UpdateRocUser]: DeepRequired<null>;
    [ServiceOperationCode.UpdateActiveCredentials]: DeepRequired<null>;
    [ServiceOperationCode.RemoveRocUser]: DeepRequired<null>;
    [ServiceOperationCode.ListRocUsers]: DeepRequired<RocUser[]>;
    [ServiceOperationCode.GetRocId]: DeepRequired<string>;
    [ServiceOperationCode.UpdateSoftVersions]: DeepRequired<null>;
    [ServiceOperationCode.HotspotSetPassword]: DeepRequired<null>;
    [ServiceOperationCode.HotspotEnable]: DeepRequired<null>;
    [ServiceOperationCode.CreateMission]: DeepRequired<number>;
    [ServiceOperationCode.ExtendMission]: DeepRequired<null>;
    [ServiceOperationCode.StartButtonMission]: DeepRequired<number>;
    [ServiceOperationCode.ReleaseModule]: DeepRequired<null>;
    [ServiceOperationCode.AddGroup]: DeepRequired<null>;
    [ServiceOperationCode.UpdateGroup]: DeepRequired<null>;
    [ServiceOperationCode.DeleteGroup]: DeepRequired<null>;
    [ServiceOperationCode.SubStepMission]: DeepRequired<null>;
    [ServiceOperationCode.RocSoftForceUpdate]: DeepRequired<null>;
    [ServiceOperationCode.RocSoftSetAutomaticUpdates]: DeepRequired<null>;
    [ServiceOperationCode.SetTareModuleParams]: DeepRequired<null>;
    [ServiceOperationCode.SetLoadedModuleParams]: DeepRequired<null>;
    [ServiceOperationCode.AllowFollowMe]: DeepRequired<null>;
    [ServiceOperationCode.SetMaxButtonIdSearch]: DeepRequired<null>;
    [ServiceOperationCode.SetDefaultWaitReleaseSound]: DeepRequired<null>;
    [ServiceOperationCode.SetManagerActiveMap]: DeepRequired<null>;
    [ServiceOperationCode.GetManagerMapsList]: DeepRequired<ManagerMap[]>;
    [ServiceOperationCode.SetWaitingSounds]: DeepRequired<null>;
    [ServiceOperationCode.SetWaitingSound]: DeepRequired<null>;
    [ServiceOperationCode.SetEventsSounds]: DeepRequired<null>;
    [ServiceOperationCode.SetLanguage]: DeepRequired<null>;
    [ServiceOperationCode.EnablePairing]: DeepRequired<null>;
    [ServiceOperationCode.PairEquipement]: DeepRequired<null>;
    [ServiceOperationCode.RevokeEquipement]: DeepRequired<null>;
    [ServiceOperationCode.AskPair]: DeepRequired<null>;
    [ServiceOperationCode.GetSecurityLogging]: DeepRequired<SecurityLog[]>;
    [ServiceOperationCode.ExportSecurityLogging]: DeepRequired<string>;
    [ServiceOperationCode.SetGlobalEmergencyStopMuted]: DeepRequired<null>;
};
/** @internal */
export declare abstract class ServicesMixin extends BaseAPI {
    /**
    * **Get veh ID**
    *
    * Get vehicle ID 🆔
    * @category Vehicle state
    * @group Vehicle
    
    
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetVehId RoboccDocs} for further information
    */
    GetVehId(): Promise<string>;
    /**
    * **Subscribe**
    *
    * Operation to subscribe to event
    * @category Internal
    * @group Internal
    * @internal
    * @param event_code Event code
    
    * @data {@link SubscribeResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#Subscribe RoboccDocs} for further information
    */
    Subscribe(event_code: number): Promise<DeepRequired<SubscribeResult>>;
    /**
    * **Unsubscribe**
    *
    * Operation to unsubscribe to event
    * @category Internal
    * @group Internal
    * @internal
    * @param event_code Event code
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#Unsubscribe RoboccDocs} for further information
    */
    Unsubscribe(event_code: number): Promise<null>;
    /**
    * **Unsubscribe all**
    *
    * Operation to unsubscribe to all events
    * @category Internal
    * @group Internal
    * @internal
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UnsubscribeAll RoboccDocs} for further information
    */
    UnsubscribeAll(): Promise<null>;
    /**
    * **Cancel actions**
    *
    * Cancel ongoing action on vehicle ⏹
    * @category Current action
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#CancelActions RoboccDocs} for further information
    */
    CancelActions(): Promise<null>;
    /**
    * **Teleop**
    *
    * Send move orders to vehicle via angular and linear speed
    * @category Teleop
    * @group Navigation
    
    * @param teleop_cmd Teleop command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#Teleop RoboccDocs} for further information
    */
    Teleop(teleop_cmd: TeleopCmd): Promise<null>;
    /**
    * **Teleop - Assisted with map**
    *
    * Send move orders to vehicle via angular and linear speed, assistance allows tracking of walls and prohibited areas
    * @category Teleop
    * @group Navigation
    
    * @param teleop_cmd Teleop command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#TeleopAssistedWithMap RoboccDocs} for further information
    */
    TeleopAssistedWithMap(teleop_cmd: TeleopCmd): Promise<null>;
    /**
    * **Teleop - Assisted without map**
    *
    * Send move orders to vehicle via angular and linear speed, assistance allows tracking of walls
    * @category Teleop
    * @group Navigation
    
    * @param teleop_cmd Teleop command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#TeleopAssistedWithoutMap RoboccDocs} for further information
    */
    TeleopAssistedWithoutMap(teleop_cmd: TeleopCmd): Promise<null>;
    /**
    * **FollowMe**
    *
    * Start or Stop the follow me feature 👣
    * @category Navigation
    * @group Navigation
    
    * @param d Start Stop command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#FollowMe RoboccDocs} for further information
    */
    FollowMe(d: FollowMeParams): Promise<null>;
    /**
    * **Follow Me Reset tracking**
    *
    * Reset tracking of follow me
    * @category Navigation
    * @group Navigation
    
    * @param d Direction of person to follow
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#FollowMeResetTracking RoboccDocs} for further information
    */
    FollowMeResetTracking(d: Direction): Promise<null>;
    /**
    * **FollowMe Set Mode**
    *
    * Set follow mode
    * @category Navigation
    * @group Navigation
    
    * @param d Follow mode
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#FollowMeSetMode RoboccDocs} for further information
    */
    FollowMeSetMode(d: FollowMode): Promise<null>;
    /**
    * **Set sleeping**
    *
    * Start or stop the sleeping mode
    * @category Battery management
    * @group Vehicle
    
    * @param enable Start Stop command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetSleeping RoboccDocs} for further information
    */
    SetSleeping(enable: boolean): Promise<null>;
    /**
    * **Set hibernate**
    *
    * Start or stop the hibernate mode
    * @category Battery management
    * @group Vehicle
    
    * @param enable Start Stop command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetHibernate RoboccDocs} for further information
    */
    SetHibernate(enable: boolean): Promise<null>;
    /**
    * **Authenticate user**
    *
    * Authenticate user using token 🔐
    * @category Authentication
    * @group User
    
    * @param auth_data Token
    
    * @data {@link AuthSessionResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AuthSession RoboccDocs} for further information
    */
    AuthSession(auth_data: string): Promise<DeepRequired<AuthSessionResult>>;
    /**
    * **Authenticate module**
    *
    * Authenticate module using API key 🔐
    * @category Authentication
    * @group Module
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AuthModule RoboccDocs} for further information
    */
    AuthModule(d: AuthModuleParams): Promise<null>;
    /**
    * **Sink**
    *
    * Void operation. May be used as heartbeat
    * @category Internal
    * @group Internal
    * @internal
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#Sink RoboccDocs} for further information
    */
    Sink(): Promise<null>;
    /**
    * **Set use fragmented message**
    *
    * Enable fragmented message. Fragemented messages are meant for heavy data transfer message, API will divide message in several thiner messages, callbacks will be fired when all messages have been gathered
    * @category Internal
    * @group Internal
    * @internal
    * @param enable Enable or disable fragmented message
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetUseFragmentedMessage RoboccDocs} for further information
    */
    SetUseFragmentedMessage(enable: boolean): Promise<null>;
    /**
    * **Logout**
    *
    * Logout
    * @category Authentication
    * @group User
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#Logout RoboccDocs} for further information
    */
    Logout(): Promise<null>;
    /**
    * **Login**
    *
    * Check user credentials and retrieve token and other infos from user api key or login and password 🔍
    * @category Authentication
    * @group User
    
    * @param login_data Send api_key or login and pwd
    
    * @data {@link LoginResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#Login RoboccDocs} for further information
    */
    Login(login_data: LoginParams): Promise<DeepRequired<LoginResult>>;
    /**
    * **Set telop active**
    *
    * Activate or deactivate teleop, vehicle will accept or ignore teleop orders
    * @category Teleop
    * @group Navigation
    
    * @param enable_teleop Set or not teleop active
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetTeleopActive RoboccDocs} for further information
    */
    SetTeleopActive(enable_teleop: boolean): Promise<null>;
    /**
    * **Get teleop Active**
    *
    * Check if teleop is active or not
    * @category Teleop
    * @group Navigation
    
    
    
    * @data {@link boolean}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetTeleopActive RoboccDocs} for further information
    */
    GetTeleopActive(): Promise<DeepRequired<boolean>>;
    /**
    * **Import site**
    *
    * Import site onto the vehicle from a Robocc exported file 📁
    * @category Site management
    * @group Map
    
    * @param site_b64 Base 64 of export file
    
    * @data {@link ImportSiteResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ImportSite RoboccDocs} for further information
    */
    ImportSite(site_b64: string): Promise<DeepRequired<ImportSiteResult>>;
    /**
    * **Import sounds config**
    *
    * Import sounds config onto the vehicle from a Robocc exported file 📁
    * @category Site management
    * @group Map
    
    * @param site_b64 Base 64 of export file
    
    * @data {@link ImportSoundsConfigResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ImportSoundsConfig RoboccDocs} for further information
    */
    ImportSoundsConfig(site_b64: string): Promise<DeepRequired<ImportSoundsConfigResult>>;
    /**
    * **Export site**
    *
    * Export a site by providing its ID 📁
    * @category Site management
    * @group Map
    
    * @param id_site
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ExportSite RoboccDocs} for further information
    */
    ExportSite(id_site: number | ExportSiteParams2): Promise<string>;
    /**
    * **Export multiple sites**
    *
    * Export sites by providing array of ids. Returns an array of files with site ids 🗃️
    * @category Site management
    * @group Map
    
    * @param export_sites_data
    
    * @data {@link ExportSitesResultItem}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ExportSites RoboccDocs} for further information
    */
    ExportSites(export_sites_data: ExportSitesParams1Item[] | ExportSitesParams2): Promise<DeepRequired<ExportSitesResultItem>[]>;
    /**
    * **Get new charging station from a marker**
    *
    * Ask vehicle for a charging station object from a given marker
    * @category Charging station
    * @group Map
    
    * @param marker Marker
    
    * @data {@link ChargingStation}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetNewChargingStationFromMarker RoboccDocs} for further information
    */
    GetNewChargingStationFromMarker(marker: Marker): Promise<DeepRequired<ChargingStation>>;
    /**
    * **Get new docked pose from a marker**
    *
    * Ask vehicle for a docked pose object from a given marker
    * @category Docked pose
    * @group Map
    
    * @param marker Marker
    
    * @data {@link DockedPose}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetNewDockedPoseFromMarker RoboccDocs} for further information
    */
    GetNewDockedPoseFromMarker(marker: Marker): Promise<DeepRequired<DockedPose>>;
    /**
    * **Update charging station from new config**
    *
    * Update a charging station object from a given distance
    * @category Charging station
    * @group Map
    
    * @param charging_station_data Charging station object and distances
    
    * @data {@link ChargingStation}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UpdateChargingStationConfig RoboccDocs} for further information
    */
    UpdateChargingStationConfig(charging_station_data: UpdateChargingStationConfigParams): Promise<DeepRequired<ChargingStation>>;
    /**
    * **Update docked pose from config**
    *
    * Update a docked pose object from a given distance
    * @category Docked pose
    * @group Map
    
    * @param docked_pose_data Docked pose object and distances
    
    * @data {@link DockedPose}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UpdateDockedPoseConfig RoboccDocs} for further information
    */
    UpdateDockedPoseConfig(docked_pose_data: UpdateDockedPoseConfigParams): Promise<DeepRequired<DockedPose>>;
    /**
    * **Simulate set sound is playing**
    *
    * In simulation mode, set that a sound is currently playing for developement purpose ⏯️
    * @category Simulation
    * @group Simulation
    
    * @param sound_is_playing Set sound is playing
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SimSetSoundIsPlaying RoboccDocs} for further information
    */
    SimSetSoundIsPlaying(sound_is_playing: boolean): Promise<null>;
    /**
    * **Simulate set external speaker**
    *
    * In simulation mode, set external speaker is present purpose ⏯️
    * @category Simulation
    * @group Simulation
    
    * @param external_speaker Set external speaker present
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SimuSetExternalSpeaker RoboccDocs} for further information
    */
    SimuSetExternalSpeaker(external_speaker: boolean): Promise<null>;
    /**
    * **Set user**
    *
    * Create or edit an user for the vehicle configuration application 👨🏽‍🦱
    * @category User management
    * @group User
    
    * @param user User data
    
    * @data {@link number}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetUser RoboccDocs} for further information
    */
    SetUser(user: SetUserParams): Promise<number>;
    /**
    * **Delete user**
    *
    * Delete user via its ID 🗑️
    * @category User management
    * @group User
    
    * @param user_id Id user
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteUser RoboccDocs} for further information
    */
    DeleteUser(user_id: number): Promise<null>;
    /**
    * **Set OBT CBT**
    *
    * Set operational battery threshold (the vehicle is allowed to execute mission) and critical battery threshold (the vehicle is forced to charge itself) 🪫
    * @category Battery management
    * @group Vehicle
    
    * @param obt_cbt Battery parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetObtCbt RoboccDocs} for further information
    */
    SetObtCbt(obt_cbt: SetObtCbtParams): Promise<null>;
    /**
    * **List users**
    *
    * Get all users from vehicle configuration application
    * @category User management
    * @group User
    
    
    
    * @data {@link User}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ListUsers RoboccDocs} for further information
    */
    ListUsers(): Promise<DeepRequired<User>[]>;
    /**
    * **Get user**
    *
    * Get user for given id 👨🏽‍🦱
    * @category User management
    * @group User
    
    * @param user_id id user
    
    * @data {@link User}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetUser RoboccDocs} for further information
    */
    GetUser(user_id: number): Promise<DeepRequired<User>>;
    /**
    * **List sites**
    *
    * Get all vehicle's sites
    * @category Site management
    * @group Map
    
    
    
    * @data {@link SiteRaw}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ListSites RoboccDocs} for further information
    */
    ListSites(): Promise<DeepRequired<SiteRaw>[]>;
    /**
    * **List sites with maps**
    *
    * Get all vehicle's sites with maps
    * @category Site management
    * @group Map
    
    
    
    * @data {@link SiteLight}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ListSitesWithMaps RoboccDocs} for further information
    */
    ListSitesWithMaps(): Promise<DeepRequired<SiteLight>[]>;
    /**
    * **Get site**
    *
    * Get a vehicle's site for given id
    * @category Site management
    * @group Map
    
    * @param site_id id site
    
    * @data {@link SiteRaw}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetSite RoboccDocs} for further information
    */
    GetSite(site_id: number): Promise<DeepRequired<SiteRaw>>;
    /**
    * **Get site with maps**
    *
    * Get a vehicle's site with maps for given id
    * @category Site management
    * @group Map
    
    * @param site_id id site
    
    * @data {@link SiteLight}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetSiteWithMaps RoboccDocs} for further information
    */
    GetSiteWithMaps(site_id: number): Promise<DeepRequired<SiteLight>>;
    /**
    * **Get map**
    *
    * Get a map for a given id 🗺️
    * @category Map management
    * @group Map
    
    * @param map_id id map
    
    * @data {@link Map}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetMap RoboccDocs} for further information
    */
    GetMap(map_id: number): Promise<DeepRequired<Map>>;
    /**
    * **Get active site**
    *
    * Get the vehicle's current active site
    * @category Site management
    * @group Map
    
    
    
    * @data {@link SiteRaw}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetActiveSite RoboccDocs} for further information
    */
    GetActiveSite(): Promise<DeepRequired<SiteRaw>>;
    /**
    * **Get active site with maps**
    *
    * Get the vehicle's current active site with maps
    * @category Site management
    * @group Map
    
    
    
    * @data {@link SiteRaw}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetActiveSiteWithMaps RoboccDocs} for further information
    */
    GetActiveSiteWithMaps(): Promise<DeepRequired<SiteRaw>>;
    /**
    * **Set site**
    *
    * Set a vehicle site
    * @category Site management
    * @group Map
    
    * @param site site
    
    * @data {@link number}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetSite RoboccDocs} for further information
    */
    SetSite(site: Site): Promise<number>;
    /**
    * **List maps**
    *
    * Get all maps in site for given site's ID 🗺️
    * @category Map management
    * @group Map
    
    * @param site_id Id site
    
    * @data {@link MapRaw}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ListMaps RoboccDocs} for further information
    */
    ListMaps(site_id: number): Promise<DeepRequired<MapRaw>[]>;
    /**
    * **Get active map**
    *
    * Get the vehicle's current map 🗺️
    * @category Map management
    * @group Map
    
    
    
    * @data {@link Map}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetActiveMap RoboccDocs} for further information
    */
    GetActiveMap(): Promise<DeepRequired<Map>>;
    /**
    * **Get active map with images**
    *
    * Get the vehicle's current map with all its images 🗺️
    * @category Map management
    * @group Map
    
    
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetActiveMapImgRaw RoboccDocs} for further information
    */
    GetActiveMapImgRaw(): Promise<string>;
    /**
    * **Get map elements**
    *
    * Get map elements for given map's ID
    * @category Map management
    * @group Map
    
    * @param map_id id map
    
    * @data {@link MapElements}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetMapElements RoboccDocs} for further information
    */
    GetMapElements(map_id: number): Promise<DeepRequired<MapElements>>;
    /**
    * **Get active map elements**
    *
    * Get map elements for active map
    * @category Map management
    * @group Map
    
    
    
    * @data {@link MapElements}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetActiveMapElements RoboccDocs} for further information
    */
    GetActiveMapElements(): Promise<DeepRequired<MapElements>>;
    /**
    * **Get map without images**
    *
    * Get map without images for given map's ID 🗺️
    * @category Map management
    * @group Map
    
    * @param map_id id map
    
    * @data {@link MapWithoutImages}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetMapWithoutImages RoboccDocs} for further information
    */
    GetMapWithoutImages(map_id: number): Promise<DeepRequired<MapWithoutImages>>;
    /**
    * **Get active map without images**
    *
    * Get map without images for active map 🗺️
    * @category Map management
    * @group Map
    
    
    
    * @data {@link MapWithoutImages}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetActiveMapWithoutImages RoboccDocs} for further information
    */
    GetActiveMapWithoutImages(): Promise<DeepRequired<MapWithoutImages>>;
    /**
    * **Delete site**
    *
    * Delete site via its ID 🗑
    * @category Site management
    * @group Map
    
    * @param id_site Id site
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteSite RoboccDocs} for further information
    */
    DeleteSite(id_site: number): Promise<null>;
    /**
    * **Delete map**
    *
    * Delete map via its ID 🗑
    * @category Map management
    * @group Map
    
    * @param id_map Id map
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteMap RoboccDocs} for further information
    */
    DeleteMap(id_map: number): Promise<null>;
    /**
    * **Set charging station**
    *
    * Set a charging station by giving all its attributes. Set id to -1 to create a new one
    * @category Charging station
    * @group Map
    
    * @param charging_station Charging station
    
    * @data {@link SetChargingStationResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetChargingStation RoboccDocs} for further information
    */
    SetChargingStation(charging_station: ChargingStation): Promise<DeepRequired<SetChargingStationResult>>;
    /**
    * **Set saved pose**
    *
    * Set a saved pose by giving all its attributes. Set id to -1 to create a new one
    * @category Saved pose
    * @group Map
    
    * @param saved_pose Saved pose
    
    * @data {@link SetSavedPoseResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetSavedPose RoboccDocs} for further information
    */
    SetSavedPose(saved_pose: SavedPose): Promise<DeepRequired<SetSavedPoseResult>>;
    /**
    * **Set docked pose**
    *
    * Set a docked pose by giving all its attributes. Set id to -1 to create a new one
    * @category Docked pose
    * @group Map
    
    * @param docked_pose Docked pose,
    
    * @data {@link SetDockedPoseResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetDockedPose RoboccDocs} for further information
    */
    SetDockedPose(docked_pose: DockedPose): Promise<DeepRequired<SetDockedPoseResult>>;
    /**
    * **Set forbidden area**
    *
    * Set a forbidden area by giving all its attributes. Set id to -1 to create a new one
    * @category Forbidden area
    * @group Map
    
    * @param forbidden_area Forbidden area
    
    * @data {@link SetForbiddenAreaResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetForbiddenArea RoboccDocs} for further information
    */
    SetForbiddenArea(forbidden_area: ForbiddenArea): Promise<DeepRequired<SetForbiddenAreaResult>>;
    /**
    * **Set custom area**
    *
    * Set a custom area by giving all its attributes. Set id to -1 to create a new one
    * @category Custom area
    * @group Map
    
    * @param custom_area Custom area
    
    * @data {@link SetCustomAreaResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetCustomArea RoboccDocs} for further information
    */
    SetCustomArea(custom_area: CustomArea): Promise<DeepRequired<SetCustomAreaResult>>;
    /**
    * **Delete charging station**
    *
    * Delete charging station via its ID 🗑
    * @category Charging station
    * @group Map
    
    * @param charging_station Id charging station
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteChargingStation RoboccDocs} for further information
    */
    DeleteChargingStation(charging_station: number): Promise<null>;
    /**
    * **Delete saved pose**
    *
    * Delete saved pose via its ID 🗑
    * @category Saved pose
    * @group Map
    
    * @param saved_pose_id Id saved pose
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteSavedPose RoboccDocs} for further information
    */
    DeleteSavedPose(saved_pose_id: number): Promise<null>;
    /**
    * **Delete docked pose**
    *
    * Delete docked pose via its ID 🗑
    * @category Docked pose
    * @group Map
    
    * @param docked_pose_id Id docked pose
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteDockedPose RoboccDocs} for further information
    */
    DeleteDockedPose(docked_pose_id: number): Promise<null>;
    /**
    * **Delete forbidden area**
    *
    * Delete forbidden area via its ID 🗑
    * @category Forbidden area
    * @group Map
    
    * @param forbidden_area_id Id forbidden area
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteForbiddenArea RoboccDocs} for further information
    */
    DeleteForbiddenArea(forbidden_area_id: number): Promise<null>;
    /**
    * **Delete custom area**
    *
    * Delete custom area via its ID 🗑
    * @category Custom area
    * @group Map
    
    * @param custom_area_id Id custom area
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteCustomArea RoboccDocs} for further information
    */
    DeleteCustomArea(custom_area_id: number): Promise<null>;
    /**
    * **Check pose**
    *
    * Check if a pose is correct for vehicle in its current map. If no pose provided it will check vehicle's current pose 🔍
    * @category Map management
    * @group Map
    
    * @param check_pose_data Pose parameters. Don't send params to use the current robot pose
    
    * @data {@link boolean}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#CheckPose RoboccDocs} for further information
    */
    CheckPose(check_pose_data?: CheckPoseParams): Promise<DeepRequired<boolean>>;
    /**
    * **Check 3D box**
    *
    * Check if a box is free
    * @category Navigation
    * @group Navigation
    
    * @param check_pose_data Pose parameters. Don't send params to use the current robot pose
    
    * @data {@link boolean}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#Check3dBox RoboccDocs} for further information
    */
    Check3dBox(check_pose_data: Check3dBoxParams): Promise<DeepRequired<boolean>>;
    /**
    * **Get module data**
    *
    * Get module data that are stored in the vehicle. The module can use this to store any data it wishes 💾
    * @category Module
    * @group Module
    
    
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetModuleData RoboccDocs} for further information
    */
    GetModuleData(): Promise<string>;
    /**
    * **Set module data**
    *
    * Set module data that are stored in the vehicle. The module can use this to store any data it wishes 💾
    * @category Module
    * @group Module
    
    * @param module_data Data
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetModuleData RoboccDocs} for further information
    */
    SetModuleData(module_data: string): Promise<null>;
    /**
    * **Get internal data**
    *
    * Get internal data that are stored in the vehicle. API client can use this to store any data it wishes 💾
    * @category Internal data
    * @group Internal
    
    
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetInternalData RoboccDocs} for further information
    */
    GetInternalData(): Promise<string>;
    /**
    * **Set internal data**
    *
    * Set internal data that are stored in the vehicle. API client can use this to store any data it wishes 💾
    * @category Internal data
    * @group Internal
    
    * @param internal_data Data
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetInternalData RoboccDocs} for further information
    */
    SetInternalData(internal_data: string): Promise<null>;
    /**
    * **Start cycle**
    *
    * Allow vehicle to move, need to be called at vehicle start or end of maintenance ▶
    * @category Maintenance
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#StartCycle RoboccDocs} for further information
    */
    StartCycle(): Promise<null>;
    /**
    * **Set car mode on leds**
    *
    * Enable or disable car mode (front LED corners in white, back LED corners in red) 🚗
    * @category LED
    * @group Vehicle
    
    * @param enable Mode on
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetCarMode RoboccDocs} for further information
    */
    SetCarMode(enable: boolean): Promise<null>;
    /**
    * **Set custom led**
    *
    * Set a custom LED display by giving a led animation, a color (optional depending on animation), an optional duration for the custom display 🚥
    * @category LED
    * @group Vehicle
    
    * @param led_cmd Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetCustomLed RoboccDocs} for further information
    */
    SetCustomLed(led_cmd: SetCustomLedParams): Promise<null>;
    /**
    * **Set custom sound**
    *
    * Set a custom sound action by giving a sound sample, an optional volume between 0 and 100, an optional loop number to repeat the sample, and an optional loop delay to define the duration between each loop 🔉
    * @category Sound
    * @group Vehicle
    
    * @param sound_cmd Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetCustomSound RoboccDocs} for further information
    */
    SetCustomSound(sound_cmd: SetCustomSoundParams): Promise<null>;
    /**
    * **Get software version**
    *
    * Get the version of the vehicle's software
    * @category Version
    * @group Vehicle
    
    
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetSoftVersion RoboccDocs} for further information
    */
    GetSoftVersion(): Promise<string>;
    /**
    * **Simulation - Set robot power consumption**
    *
    * Set the power consumption of the battery in simulation for developement purpose 🔌
    * @category Simulation
    * @group Simulation
    
    * @param power_consumption Power consumption
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SimBatterySetPowerConsumption RoboccDocs} for further information
    */
    SimBatterySetPowerConsumption(power_consumption: number): Promise<null>;
    /**
    * **Simulation - Set charge power delivery**
    *
    * Set the charge power delivered by the fake charging stations in simulation for developement purpose 🔌
    * @category Simulation
    * @group Simulation
    
    * @param charge_power_delivery Charge power delivery
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SimBatterySetChargePower RoboccDocs} for further information
    */
    SimBatterySetChargePower(charge_power_delivery: number): Promise<null>;
    /**
    * **Simulation - Set battery percentage**
    *
    * Set the battery percentage in simulation for developement purpose 🔋
    * @category Simulation
    * @group Simulation
    
    * @param battery_percentage Battery percentage
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SimBatterySetPercentage RoboccDocs} for further information
    */
    SimBatterySetPercentage(battery_percentage: number): Promise<null>;
    /**
    * **Simulation - Set charger of charging stations on**
    *
    * Enable or disable power on the fake charging stations in simulation for developement purpose 🔌
    * @category Simulation
    * @group Simulation
    
    * @param battery_charging Charger is on
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SimBatterySetChargerOn RoboccDocs} for further information
    */
    SimBatterySetChargerOn(battery_charging: boolean): Promise<null>;
    /**
    * **Set maintenance mode**
    *
    * Enable or disable maintenance mode that blocks module orders but allows teleop and configuration application orders. Required for some API orders 🚧
    * @category Maintenance
    * @group Vehicle
    
    * @param enable Mode maintenance on
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetMaintenanceMode RoboccDocs} for further information
    */
    SetMaintenanceMode(enable: boolean): Promise<null>;
    /**
    * **Set prohibit movement**
    *
    * Set this to prohibit all movements of vehicle. Only callable from module 🚫
    * @category Navigation
    * @group Navigation
    
    * @param enable Prohibit movement
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetProhibitMovement RoboccDocs} for further information
    */
    SetProhibitMovement(enable: boolean): Promise<null>;
    /**
    * **Simulation - Set diff driver state**
    *
    * Set diff drive state in simulation to simulate some vehicule errors
    * @category Simulation
    * @group Simulation
    
    * @param diff_drive_state Diff driver state
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SimSetDiffDriveState RoboccDocs} for further information
    */
    SimSetDiffDriveState(diff_drive_state: SimSetDiffDriveStateParams): Promise<null>;
    /**
    * **Set Hotspot passowrd**
    *
    * Set vehicle the password for the emitted wifi hotspot 🛜
    * @category Network
    * @group Vehicle
    
    * @param password New password
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#NetworkHotspotSetPassword RoboccDocs} for further information
    */
    NetworkHotspotSetPassword(password: string): Promise<null>;
    /**
    * **Wifi list APs**
    *
    * List all detected Wi-Fi access points by the vehicle. This doesn't trigger a scan so list can be outdated. See network_wan_scan_aps 🛜
    * @category Network
    * @group Vehicle
    
    
    
    * @data {@link WifiAp}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#NetworkWifiListAps RoboccDocs} for further information
    */
    NetworkWifiListAps(): Promise<DeepRequired<WifiAp>[]>;
    /**
    * **Get vehicle elements list**
    *
    * Get all vehicle elements
    * @category Diagnostic
    * @group Vehicle
    
    
    
    * @data {@link DiagnosticElement}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetElementsList RoboccDocs} for further information
    */
    GetElementsList(): Promise<DeepRequired<DiagnosticElement>[]>;
    /**
    * **Set autopilot config**
    *
    * Set autopilot sequence
    * @category Autopilot
    * @group Navigation
    
    * @param sequence Configuration
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AutopilotSetConfig RoboccDocs} for further information
    */
    AutopilotSetConfig(sequence: AutopilotSequence): Promise<null>;
    /**
    * **Start autopilot**
    *
    * Start configured autopilot sequence ▶
    * @category Autopilot
    * @group Navigation
    
    * @param resume Resume
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AutopilotStart RoboccDocs} for further information
    */
    AutopilotStart(resume: boolean): Promise<null>;
    /**
    * **Stop autopilot**
    *
    * Stop current autopilot sequence ⏹
    * @category Autopilot
    * @group Navigation
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AutopilotStop RoboccDocs} for further information
    */
    AutopilotStop(): Promise<null>;
    /**
    * **Set scenario sound maximum volumes**
    *
    * Set maximum volume between 0 and 100 for each vehicle's sound scenarios 🔊
    * @category Sound
    * @group Vehicle
    
    * @param sound_scenarios Array of scenarios and associated volumes
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetScenarioSoundMaxVolume RoboccDocs} for further information
    */
    SetScenarioSoundMaxVolume(sound_scenarios: SoundScenarioVolume[]): Promise<null>;
    /**
    * **Get scenario sound maximum volumes**
    *
    * Get maximum volume between 0 and 100 for each vehicle's sound scenarios 🔊
    * @category Sound
    * @group Vehicle
    
    
    
    * @data {@link SoundScenarioVolume}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetScenarioSoundMaxVolume RoboccDocs} for further information
    */
    GetScenarioSoundMaxVolume(): Promise<DeepRequired<SoundScenarioVolume>[]>;
    /**
    * **Set scenario sample**
    *
    * Set sample for each vehicle's sound scenarios 🔊
    * @category Sound
    * @group Vehicle
    
    * @param sound_samples Array of scenarios and associated samples
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetScenarioSoundSamples RoboccDocs} for further information
    */
    SetScenarioSoundSamples(sound_samples: SoundScenarioSample[]): Promise<null>;
    /**
    * **Get scenario sound sample**
    *
    * Get sample for each vehicle's sound scenarios 🔊
    * @category Sound
    * @group Vehicle
    
    
    
    * @data {@link SoundScenarioSample}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetScenarioSoundSamples RoboccDocs} for further information
    */
    GetScenarioSoundSamples(): Promise<DeepRequired<SoundScenarioSample>[]>;
    /**
    * **Inhibit safety alert sound scenario**
    *
    * Temporarily mute the safety alert sound scenario when activated (automatically unmute at next scenario activation)
    * @category Sound
    * @group Vehicle
    
    * @param inhibit Inhibit/uninhibit
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#InhibitSafetyAlertSoundScenario RoboccDocs} for further information
    */
    InhibitSafetyAlertSoundScenario(inhibit: boolean): Promise<null>;
    /**
    * **Set module parameters**
    *
    * Set dynamically module parameters, i.e. max speed, height and weight ⚙
    * @category Module
    * @group Module
    
    * @param module_params Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetModuleParams RoboccDocs} for further information
    */
    SetModuleParams(module_params: SetModuleParamsParams): Promise<null>;
    /**
    * **Network redirect port**
    *
    * Start or stop redirect port form noeme to ip
    * @category Network
    * @group Vehicle
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#NetworkRedirectPort RoboccDocs} for further information
    */
    NetworkRedirectPort(d: NetworkRedirectPortParams): Promise<null>;
    /**
    * **Force system update**
    *
    * Force a system update
    * @category Version
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ForceUpdate RoboccDocs} for further information
    */
    ForceUpdate(): Promise<null>;
    /**
    * **Set automatic updates**
    *
    * Enable/disable automatic update
    * @category Version
    * @group Vehicle
    
    * @param enable Enable/disable
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetAutomaticUpdates RoboccDocs} for further information
    */
    SetAutomaticUpdates(enable: boolean): Promise<null>;
    /**
    * **Enable dynamic filters**
    *
    * Enable/disable dynamic filters
    * @category Module
    * @group Vehicle
    
    * @param enable Enable/disable
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#EnableDynamicFilters RoboccDocs} for further information
    */
    EnableDynamicFilters(enable: boolean): Promise<null>;
    /**
    * **Restart system**
    *
    * Restart the system
    * @category System
    * @group Vehicle
    
    * @param d Parameters for restart
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SystemRestart RoboccDocs} for further information
    */
    SystemRestart(d: SystemRestartParams): Promise<null>;
    /**
    * **Request firmware flash of Roboteq**
    *
    * Will request a flash of the firmware of the roboteq motor controller at next reboot
    * @category System
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SystemRequestFlashRoboteq RoboccDocs} for further information
    */
    SystemRequestFlashRoboteq(): Promise<null>;
    /**
    * **Request firmware flash of MCU**
    *
    * Will request a flash of the firmware of the Teensy/Pico
    * @category System
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SystemRequestFlashMcu RoboccDocs} for further information
    */
    SystemRequestFlashMcu(): Promise<null>;
    /**
    * **Get shelves around the vehicle**
    *
    * Get list of shelves relative to the vehicle
    * @category Marker
    * @group Map
    
    * @param d Shelf size
    
    * @data {@link Pose}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetShelves RoboccDocs} for further information
    */
    GetShelves(d: GetShelvesParams): Promise<DeepRequired<Pose>[]>;
    /**
    * **Delete sound**
    *
    * Delete sound from library
    * @category Sound
    * @group Database
    
    * @param d Name of sound to delete
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteSound RoboccDocs} for further information
    */
    DeleteSound(d: string): Promise<null>;
    /**
    * **Disable 3D cameras during mapping**
    *
    * Disable or enable 3D cameras sensors, in mapping mode only
    * @category Mapping
    * @group Mapping
    
    * @param disable Disable or enable request
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DisableCam3dMapping RoboccDocs} for further information
    */
    DisableCam3dMapping(disable: boolean): Promise<null>;
    /**
    * **Disable US sensors during mapping**
    *
    * Disable or enable ultrasonic sensors, in mapping mode only
    * @category Mapping
    * @group Mapping
    
    * @param disable Disable or enable request
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DisableUsSensorsMapping RoboccDocs} for further information
    */
    DisableUsSensorsMapping(disable: boolean): Promise<null>;
    /**
    * **Rearm chassis intrusion**
    *
    * Rearm chassis intrusion
    * @category System
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#RearmChassisIntrusion RoboccDocs} for further information
    */
    RearmChassisIntrusion(): Promise<null>;
    /**
    * **Logout HMI**
    *
    * Logout HMI
    * @category Authentication
    * @group Module
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#LogoutHmi RoboccDocs} for further information
    */
    LogoutHmi(): Promise<null>;
    /**
    * **Add call button**
    *
    * Add call button
    * @category ROC Config
    * @group ROC
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AddButton RoboccDocs} for further information
    */
    AddButton(d: AddButtonParams): Promise<null>;
    /**
    * **Update button**
    *
    * Update button
    * @category Configuration
    * @group ROC
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UpdateButton RoboccDocs} for further information
    */
    UpdateButton(d: ButtonConfig): Promise<null>;
    /**
    * **Delete button**
    *
    * Delete button
    * @category Configuration
    * @group ROC
    
    * @param d Button LoRa ID
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteButton RoboccDocs} for further information
    */
    DeleteButton(d: number): Promise<null>;
    /**
    * **Add vehicle**
    *
    * Add vehicle
    * @category Configuration
    * @group ROC
    
    * @param d Veh LoRa ID
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AddVeh RoboccDocs} for further information
    */
    AddVeh(d: number): Promise<null>;
    /**
    * **Delete vehicle**
    *
    * Delete vehicle
    * @category Configuration
    * @group ROC
    
    * @param d Vehicle LoRa ID
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteVeh RoboccDocs} for further information
    */
    DeleteVeh(d: number): Promise<null>;
    /**
    * **Set module is vehicle**
    *
    * Set module is vehicle
    * @category Configuration
    * @group ROC
    
    * @param d Is vehicle
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetIsVeh RoboccDocs} for further information
    */
    SetIsVeh(d: boolean): Promise<null>;
    /**
    * **Set module is manager**
    *
    * Set module is manager
    * @category Configuration
    * @group ROC
    
    * @param d Is manager
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetIsManager RoboccDocs} for further information
    */
    SetIsManager(d: boolean): Promise<null>;
    /**
    * **Set module type**
    *
    * Set module type
    * @category Configuration
    * @group Vehicle
    
    * @param d Module type
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetModuleType RoboccDocs} for further information
    */
    SetModuleType(d: ModuleType): Promise<null>;
    /**
    * **Set vehicle direction**
    *
    * Set vehicle direction
    * @category Configuration
    * @group Vehicle
    
    * @param d Vehicle direction
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetVehDirection RoboccDocs} for further information
    */
    SetVehDirection(d: VehDirection): Promise<null>;
    /**
    * **Set dock direction**
    *
    * Set dock direction
    * @category Configuration
    * @group Vehicle
    
    * @param d Dock direction
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetDockDirection RoboccDocs} for further information
    */
    SetDockDirection(d: VehDirection): Promise<null>;
    /**
    * **Release shelf on top**
    *
    * Release shelf on top
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ReleaseShelf RoboccDocs} for further information
    */
    ReleaseShelf(): Promise<null>;
    /**
    * **Release shelf on top and release misison**
    *
    * Release shelf on top and release misison
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ReleaseShelfAndRelease RoboccDocs} for further information
    */
    ReleaseShelfAndRelease(): Promise<null>;
    /**
    * **Set module LoRa ID**
    *
    * Set module LoRa ID
    * @category Configuration
    * @group Vehicle
    
    * @param d LoRa ID
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetIdModule RoboccDocs} for further information
    */
    SetIdModule(d: number): Promise<null>;
    /**
    * **Set LoRa SP**
    *
    * Set LoRa SP
    * @category Configuration
    * @group ROC
    
    * @param d LoRA SP
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetLoraSp RoboccDocs} for further information
    */
    SetLoraSp(d: number): Promise<null>;
    /**
    * **Add waiting pose**
    *
    * Add waiting pose
    * @category Configuration
    * @group ROC
    
    * @param d Waiting pose
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AddWaitingPose RoboccDocs} for further information
    */
    AddWaitingPose(d: WaitingPose): Promise<null>;
    /**
    * **Update waiting pose**
    *
    * Update waiting pose
    * @category Configuration
    * @group ROC
    
    * @param d Waiting pose
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UpdateWaitingPose RoboccDocs} for further information
    */
    UpdateWaitingPose(d: WaitingPose): Promise<null>;
    /**
    * **Delete waiting pose**
    *
    * Delete waiting pose
    * @category Configuration
    * @group ROC
    
    * @param d Waiting pose Uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteWaitingPose RoboccDocs} for further information
    */
    DeleteWaitingPose(d: number): Promise<null>;
    /**
    * **Add port redirection**
    *
    * Add port redirection
    * @category Configuration
    * @group ROC
    
    * @param d Port redirection
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AddPortRedirection RoboccDocs} for further information
    */
    AddPortRedirection(d: ExternalPortRedirection): Promise<null>;
    /**
    * **Update port redirection**
    *
    * Update port redirection
    * @category Configuration
    * @group ROC
    
    * @param d Port redirection
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UpdatePortRedirection RoboccDocs} for further information
    */
    UpdatePortRedirection(d: UpdatePortRedirectionParams): Promise<null>;
    /**
    * **Delete port redirection**
    *
    * Delete port redirection
    * @category Configuration
    * @group ROC
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeletePortRedirection RoboccDocs} for further information
    */
    DeletePortRedirection(d: DeletePortRedirectionParams): Promise<null>;
    /**
    * **Add custom command**
    *
    * Add custom command
    * @category Configuration
    * @group ROC
    
    * @param d Custom command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AddCustomCommand RoboccDocs} for further information
    */
    AddCustomCommand(d: CustomCommand): Promise<null>;
    /**
    * **Update custom command**
    *
    * Update custom command
    * @category Configuration
    * @group ROC
    
    * @param d Custom command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UpdateCustomCommand RoboccDocs} for further information
    */
    UpdateCustomCommand(d: CustomCommand): Promise<null>;
    /**
    * **Delete custom command**
    *
    * Delete custom command
    * @category Configuration
    * @group ROC
    
    * @param d Saved pose uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteCustomCommand RoboccDocs} for further information
    */
    DeleteCustomCommand(d: number): Promise<null>;
    /**
    * **Add controller LoRa**
    *
    * Add controller LoRa
    * @category Configuration
    * @group ROC
    
    * @param d Controller LoRa
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AddControllerLora RoboccDocs} for further information
    */
    AddControllerLora(d: ControllerLora): Promise<null>;
    /**
    * **Update controller LoRa**
    *
    * Update controller LoRa
    * @category Configuration
    * @group ROC
    
    * @param d Controller LoRa
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UpdateControllerLora RoboccDocs} for further information
    */
    UpdateControllerLora(d: ControllerLora): Promise<null>;
    /**
    * **Delete controller LoRa**
    *
    * Delete controller LoRa
    * @category Configuration
    * @group ROC
    
    * @param d Saved pose Uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteControllerLora RoboccDocs} for further information
    */
    DeleteControllerLora(d: number): Promise<null>;
    /**
    * **Add map element restriction**
    *
    * Add map element restriction
    * @category Configuration
    * @group ROC
    
    * @param d Map element restriction
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AddMapElementRestriction RoboccDocs} for further information
    */
    AddMapElementRestriction(d: MapElementRestriction): Promise<null>;
    /**
    * **Update map element restriction**
    *
    * Update map element restriction
    * @category Configuration
    * @group ROC
    
    * @param d Map element restriction
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UpdateMapElementRestriction RoboccDocs} for further information
    */
    UpdateMapElementRestriction(d: MapElementRestriction): Promise<null>;
    /**
    * **Delete map element restriction**
    *
    * Delete map element restriction
    * @category Configuration
    * @group ROC
    
    * @param d Uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteMapElementRestriction RoboccDocs} for further information
    */
    DeleteMapElementRestriction(d: number): Promise<null>;
    /**
    * **Add ROC docked pose configuration**
    *
    * Add ROC docked pose configuration
    * @category Configuration
    * @group ROC
    
    * @param d Docked pose config
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AddRocDockedPoseConfig RoboccDocs} for further information
    */
    AddRocDockedPoseConfig(d: DockedPoseConfig): Promise<null>;
    /**
    * **Update ROC docked pose configuration**
    *
    * Update ROC docked pose configuration
    * @category Configuration
    * @group ROC
    
    * @param d Docked pose config
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UpdateRocDockedPoseConfig RoboccDocs} for further information
    */
    UpdateRocDockedPoseConfig(d: DockedPoseConfig): Promise<null>;
    /**
    * **Delete ROC docked pose configuration**
    *
    * Delete ROC docked pose configuration
    * @category Configuration
    * @group ROC
    
    * @param d Uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteRocDockedPoseConfig RoboccDocs} for further information
    */
    DeleteRocDockedPoseConfig(d: number): Promise<null>;
    /**
    * **Add ROC map element configuration**
    *
    * Add ROC map element configuration
    * @category Configuration
    * @group ROC
    
    * @param d Map element config
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AddRocMapElementConfig RoboccDocs} for further information
    */
    AddRocMapElementConfig(d: RocMapElementConfig): Promise<null>;
    /**
    * **Update ROC map element configuration**
    *
    * Update ROC map element configuration
    * @category Configuration
    * @group ROC
    
    * @param d Map element config
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UpdateRocMapElementConfig RoboccDocs} for further information
    */
    UpdateRocMapElementConfig(d: RocMapElementConfig): Promise<null>;
    /**
    * **Delete ROC map element configuration**
    *
    * Delete ROC map element configuration
    * @category Configuration
    * @group ROC
    
    * @param d Uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteRocMapElementConfig RoboccDocs} for further information
    */
    DeleteRocMapElementConfig(d: number): Promise<null>;
    /**
    * **Add ROC area configuration**
    *
    * Add ROC area configuration
    * @category Configuration
    * @group ROC
    
    * @param d Area config
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AddRocAreaConfig RoboccDocs} for further information
    */
    AddRocAreaConfig(d: RocAreaConfig): Promise<null>;
    /**
    * **Update ROC area configuration**
    *
    * Update ROC areat configuration
    * @category Configuration
    * @group ROC
    
    * @param d Area config
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UpdateRocAreaConfig RoboccDocs} for further information
    */
    UpdateRocAreaConfig(d: RocAreaConfig): Promise<null>;
    /**
    * **Delete ROC area configuration**
    *
    * Delete ROC area configuration
    * @category Configuration
    * @group ROC
    
    * @param d Uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteRocAreaConfig RoboccDocs} for further information
    */
    DeleteRocAreaConfig(d: number): Promise<null>;
    /**
    * **Get contacts's configuration of a LoRa controller**
    *
    * Get contact's configuration of a LoRa controller
    * @category Configuration
    * @group ROC
    
    * @param d Controller id
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ControllerLoraGetContactsConfig RoboccDocs} for further information
    */
    ControllerLoraGetContactsConfig(d: number): Promise<null>;
    /**
    * **Set contact's configuration of a LoRa controller**
    *
    * Set contact's configuration of a LoRa controller
    * @category Configuration
    * @group ROC
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ControllerLoraSetContactConfig RoboccDocs} for further information
    */
    ControllerLoraSetContactConfig(d: ControllerLoraSetContactConfigParams): Promise<null>;
    /**
    * **Set predefined messages**
    *
    * Set predefined messages
    * @category Configuration
    * @group ROC
    
    * @param d Predefined messages
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetPredefinedMessages RoboccDocs} for further information
    */
    SetPredefinedMessages(d: string[]): Promise<null>;
    /**
    * **Set vehicle delay config**
    *
    * Set vehicle delay config
    * @category Configuration
    * @group Vehicle
    
    * @param d Delays
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetVehicleDelayConfig RoboccDocs} for further information
    */
    SetVehicleDelayConfig(d: VehDelayConfig): Promise<null>;
    /**
    * **Set vehicle response deadline**
    *
    * Set vehicle response deadline
    * @category Configuration
    * @group Manager
    
    * @param d Response deadline in ms
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetVehicleResponseDeadline RoboccDocs} for further information
    */
    SetVehicleResponseDeadline(d: number): Promise<null>;
    /**
    * **Set default response deadline**
    *
    * Set default response deadline
    * @category Configuration
    * @group Manager
    
    * @param d Response deadline in ms
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetDefaultResponseDeadline RoboccDocs} for further information
    */
    SetDefaultResponseDeadline(d: number): Promise<null>;
    /**
    * **End mission**
    *
    * End mission
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#Release RoboccDocs} for further information
    */
    Release(): Promise<null>;
    /**
    * **Next step mission**
    *
    * Next step mission
    * @category Mission
    * @group Vehicle
    
    * @param d Uuid of next step
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#NextStepMission RoboccDocs} for further information
    */
    NextStepMission(d: number): Promise<null>;
    /**
    * **Next step mission with message**
    *
    * Next step mission with message
    * @category Mission
    * @group Vehicle
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#NextStepMissionWithMessage RoboccDocs} for further information
    */
    NextStepMissionWithMessage(d: NextStepMissionWithMessageParams): Promise<null>;
    /**
    * **Pause move**
    *
    * Pause the current move
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#PauseMove RoboccDocs} for further information
    */
    PauseMove(): Promise<null>;
    /**
    * **Resume paused move**
    *
    * Resume the paused move
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ResumeMove RoboccDocs} for further information
    */
    ResumeMove(): Promise<null>;
    /**
    * **Cancel paused move**
    *
    * Cancel the paused move
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#CancelMove RoboccDocs} for further information
    */
    CancelMove(): Promise<null>;
    /**
    * **Reboot ROC-E app**
    *
    * Reboot ROC-E app
    * @category App
    * @group ROC
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#Reboot RoboccDocs} for further information
    */
    Reboot(): Promise<null>;
    /**
    * **Set in config mode**
    *
    * Set in config mode
    * @category Configuration
    * @group ROC
    
    * @param d In config mode
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetInConfigMode RoboccDocs} for further information
    */
    SetInConfigMode(d: boolean): Promise<null>;
    /**
    * **Set in maintenance mode**
    *
    * Set in maintenance mode
    * @category Configuration
    * @group ROC
    
    * @param d In maintenance mode
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetInMaintenanceMode RoboccDocs} for further information
    */
    SetInMaintenanceMode(d: boolean): Promise<null>;
    /**
    * **Set allow move from dock**
    *
    * Set allow move from dock
    * @category Configuration
    * @group Vehicle
    
    * @param d Allow move from dock
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetAllowMoveFromDock RoboccDocs} for further information
    */
    SetAllowMoveFromDock(d: boolean): Promise<null>;
    /**
    * **Set allow multiple mission for the same button**
    *
    * Set allow multiple mission for the same button
    * @category Configuration
    * @group Manager
    
    * @param d Allow multiple mission for the same button
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetAllowMultipleMissions RoboccDocs} for further information
    */
    SetAllowMultipleMissions(d: boolean): Promise<null>;
    /**
    * **Set show all destinations on home**
    *
    * Set show all destinations on home
    * @category Configuration
    * @group Manager
    
    * @param d Show all destinations on home
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetShowAllDestinationsOnHome RoboccDocs} for further information
    */
    SetShowAllDestinationsOnHome(d: boolean): Promise<null>;
    /**
    * **Set sleeping**
    *
    * Set module in sleeping mode
    * @category Mission
    * @group Vehicle
    
    * @param d Activate
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetModuleSleeping RoboccDocs} for further information
    */
    SetModuleSleeping(d: boolean): Promise<null>;
    /**
    * **Set hibernate**
    *
    * Set module in hibernate mode
    * @category Mission
    * @group Vehicle
    
    * @param d Activate
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetModuleHibernate RoboccDocs} for further information
    */
    SetModuleHibernate(d: boolean): Promise<null>;
    /**
    * **Set sleep screen**
    *
    * Set sleep screen
    * @category Mission
    * @group Vehicle
    
    * @param d Activate
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetSleepScreen RoboccDocs} for further information
    */
    SetSleepScreen(d: boolean): Promise<null>;
    /**
    * **Set operating hours**
    *
    * Set operating hours
    * @category Mission
    * @group Vehicle
    
    * @param d Operating hours
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetOperatingHours RoboccDocs} for further information
    */
    SetOperatingHours(d: OperatingHours): Promise<null>;
    /**
    * **Check HMI password**
    *
    * Check HMI password
    * @category Configuration
    * @group ROC
    
    * @param d Password to check
    
    * @data {@link CheckHmiPasswordResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#CheckHmiPassword RoboccDocs} for further information
    */
    CheckHmiPassword(d: string): Promise<DeepRequired<CheckHmiPasswordResult>>;
    /**
    * **Set high priority**
    *
    * Set high priority
    * @category Mission
    * @group Manager
    
    * @param d Button LoRa ID
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetHighPriority RoboccDocs} for further information
    */
    SetHighPriority(d: number): Promise<null>;
    /**
    * **Set normal priority**
    *
    * Set normal priority
    * @category Mission
    * @group Manager
    
    * @param d Button LoRa ID
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetNormalPriority RoboccDocs} for further information
    */
    SetNormalPriority(d: number): Promise<null>;
    /**
    * **Remove mission**
    *
    * Remove mission
    * @category Mission
    * @group Manager
    
    * @param d Mission ID
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#RemoveMission RoboccDocs} for further information
    */
    RemoveMission(d: number): Promise<null>;
    /**
    * **Remove button mission**
    *
    * Remove button mission
    * @category Mission
    * @group Manager
    
    * @param d Button LoRa ID
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#RemoveButtonMission RoboccDocs} for further information
    */
    RemoveButtonMission(d: number): Promise<null>;
    /**
    * **Get mission**
    *
    * Get mission
    * @category Mission
    * @group Manager
    
    * @param d Mission ID
    
    * @data {@link Mission}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetMission RoboccDocs} for further information
    */
    GetMission(d: number): Promise<DeepRequired<Mission>>;
    /**
    * **Set multidestination**
    *
    * Set multidestination
    * @category Mission
    * @group Manager
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetMultidestination RoboccDocs} for further information
    */
    SetMultidestination(d: SetMultidestinationParams): Promise<null>;
    /**
    * **Set multidestination with messages**
    *
    * Set multidestination with messages
    * @category Mission
    * @group Manager
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetMultidestinationWithMessages RoboccDocs} for further information
    */
    SetMultidestinationWithMessages(d: SetMultidestinationWithMessagesParams): Promise<null>;
    /**
    * **Import configuration**
    *
    * Import configuration
    * @category Configuration
    * @group ROC
    
    * @param d File content
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ImportConfiguration RoboccDocs} for further information
    */
    ImportConfiguration(d: string): Promise<null>;
    /**
    * **Export configuration**
    *
    * Export configuration
    * @category Configuration
    * @group ROC
    
    
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ExportConfiguration RoboccDocs} for further information
    */
    ExportConfiguration(): Promise<string>;
    /**
    * **Import users**
    *
    * Import users
    * @category Configuration
    * @group ROC
    
    * @param d File content
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ImportUsers RoboccDocs} for further information
    */
    ImportUsers(d: string): Promise<null>;
    /**
    * **Export users**
    *
    * Export users
    * @category Configuration
    * @group ROC
    
    
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ExportUsers RoboccDocs} for further information
    */
    ExportUsers(): Promise<string>;
    /**
    * **Get stats**
    *
    * Get stats
    * @category Configuration
    * @group Stats
    
    * @param d
    
    * @data {@link StatsData}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetStats RoboccDocs} for further information
    */
    GetStats(d: GetStatsParams): Promise<DeepRequired<StatsData>>;
    /**
    * **Get light stats**
    *
    * Get light stats
    * @category Configuration
    * @group Stats
    
    * @param d
    
    * @data {@link DailyStats}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetLightStats RoboccDocs} for further information
    */
    GetLightStats(d: GetLightStatsParams): Promise<DeepRequired<DailyStats>>;
    /**
    * **Export stats**
    *
    * Export stats
    * @category Configuration
    * @group Stats
    
    * @param d
    
    * @data {@link ExportedStats}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ExportStats RoboccDocs} for further information
    */
    ExportStats(d: ExportStatsParams): Promise<DeepRequired<ExportedStats>>;
    /**
    * **Get list of maps for stats**
    *
    * Get list of maps for stats
    * @category Configuration
    * @group Stats
    
    
    
    * @data {@link Map}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetMapsForStats RoboccDocs} for further information
    */
    GetMapsForStats(): Promise<DeepRequired<Map>[]>;
    /**
    * **Get vehicles timeline**
    *
    * Get vehicles timeline
    * @category Configuration
    * @group Stats
    
    * @param d
    
    * @data {@link VehTimelineData}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetVehsTimeline RoboccDocs} for further information
    */
    GetVehsTimeline(d: GetVehsTimelineParams): Promise<DeepRequired<VehTimelineData>[]>;
    /**
    * **Remise stats**
    *
    * Remise stats
    * @category Configuration
    * @group Stats
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ResetStats RoboccDocs} for further information
    */
    ResetStats(): Promise<null>;
    /**
    * **Move down the lift**
    *
    * Move down the lift
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#LiftMoveDown RoboccDocs} for further information
    */
    LiftMoveDown(): Promise<null>;
    /**
    * **Move up the lift**
    *
    * Move up the lift
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#LiftMoveUp RoboccDocs} for further information
    */
    LiftMoveUp(): Promise<null>;
    /**
    * **Stop the lift**
    *
    * Stop the lift
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#LiftStop RoboccDocs} for further information
    */
    LiftStop(): Promise<null>;
    /**
    * **Stop retrying**
    *
    * Stop retrying
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#StopRetrying RoboccDocs} for further information
    */
    StopRetrying(): Promise<null>;
    /**
    * **Add ROC user**
    *
    * Add ROC user
    * @category Configuration
    * @group ROC
    
    * @param d
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AddRocUser RoboccDocs} for further information
    */
    AddRocUser(d: AddRocUserParams): Promise<null>;
    /**
    * **Update ROC user**
    *
    * Update ROC user
    * @category Configuration
    * @group ROC
    
    * @param d
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UpdateRocUser RoboccDocs} for further information
    */
    UpdateRocUser(d: UpdateRocUserParams): Promise<null>;
    /**
    * **Update active ROC user credentials**
    *
    * Update active ROC user credentials
    * @category Configuration
    * @group ROC
    
    * @param d
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UpdateActiveCredentials RoboccDocs} for further information
    */
    UpdateActiveCredentials(d: UpdateActiveCredentialsParams): Promise<null>;
    /**
    * **Update ROC user**
    *
    * Remove ROC user
    * @category Configuration
    * @group ROC
    
    * @param d ID User
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#RemoveRocUser RoboccDocs} for further information
    */
    RemoveRocUser(d: number): Promise<null>;
    /**
    * **List ROC users**
    *
    * List ROC users
    * @category Configuration
    * @group ROC
    
    
    
    * @data {@link RocUser}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ListRocUsers RoboccDocs} for further information
    */
    ListRocUsers(): Promise<DeepRequired<RocUser>[]>;
    /**
    * **Get ROC ID**
    *
    * Get ROC ID
    * @category Configuration
    * @group ROC
    
    
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetRocId RoboccDocs} for further information
    */
    GetRocId(): Promise<string>;
    /**
    * **Update soft versions**
    *
    * Update soft versions
    * @category Configuration
    * @group ROC
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UpdateSoftVersions RoboccDocs} for further information
    */
    UpdateSoftVersions(): Promise<null>;
    /**
    * **Hotspot set password**
    *
    * Hotspot set password
    * @category Configuration
    * @group Vehicle
    
    * @param d New password
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#HotspotSetPassword RoboccDocs} for further information
    */
    HotspotSetPassword(d: string): Promise<null>;
    /**
    * **Enable Hotspot**
    *
    * Enable Hotspot
    * @category Configuration
    * @group Vehicle
    
    * @param d Enable
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#HotspotEnable RoboccDocs} for further information
    */
    HotspotEnable(d: boolean): Promise<null>;
    /**
    * **Create new mission**
    *
    * Create new mission
    * @category Mission
    * @group Manager
    
    * @param d Parameters
    
    * @data {@link number}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#CreateMission RoboccDocs} for further information
    */
    CreateMission(d: CreateMissionParams): Promise<number>;
    /**
    * **Create new mission**
    *
    * Create new mission
    * @category Mission
    * @group Manager
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ExtendMission RoboccDocs} for further information
    */
    ExtendMission(d: ExtendMissionParams): Promise<null>;
    /**
    * **Start button mission**
    *
    * Start button mission
    * @category Mission
    * @group Manager
    
    * @param d Parameters
    
    * @data {@link number}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#StartButtonMission RoboccDocs} for further information
    */
    StartButtonMission(d: StartButtonMissionParams): Promise<number>;
    /**
    * **Release module**
    *
    * Release module
    * @category Mission
    * @group Manager
    
    * @param d Id module
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ReleaseModule RoboccDocs} for further information
    */
    ReleaseModule(d: number): Promise<null>;
    /**
    * **Add group**
    *
    * Add new group
    * @category Configuration
    * @group ROC
    
    * @param d Group
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AddGroup RoboccDocs} for further information
    */
    AddGroup(d: Group): Promise<null>;
    /**
    * **Update group**
    *
    * Update group
    * @category Configuration
    * @group ROC
    
    * @param d Group
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#UpdateGroup RoboccDocs} for further information
    */
    UpdateGroup(d: Group): Promise<null>;
    /**
    * **Delete group**
    *
    * Delete group
    * @category Configuration
    * @group ROC
    
    * @param d Main uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#DeleteGroup RoboccDocs} for further information
    */
    DeleteGroup(d: number): Promise<null>;
    /**
    * **Sub step mission**
    *
    * Sub step mission for groups
    * @category Mission
    * @group Vehicle
    
    * @param d Sub step uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SubStepMission RoboccDocs} for further information
    */
    SubStepMission(d: number): Promise<null>;
    /**
    * **Force a system update of ROC**
    *
    * Force a system update of ROC
    * @category Version
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#RocSoftForceUpdate RoboccDocs} for further information
    */
    RocSoftForceUpdate(): Promise<null>;
    /**
    * **Set automatic updates for ROC**
    *
    * Enable/disable automatic update for ROC
    * @category Version
    * @group Vehicle
    
    * @param enable Enable/disable
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#RocSoftSetAutomaticUpdates RoboccDocs} for further information
    */
    RocSoftSetAutomaticUpdates(enable: boolean): Promise<null>;
    /**
    * **Set tare module params**
    *
    * Set tare module params
    * @category Configuration
    * @group Vehicle
    
    * @param d
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetTareModuleParams RoboccDocs} for further information
    */
    SetTareModuleParams(d: ModuleParams): Promise<null>;
    /**
    * **Set loaded module params**
    *
    * Set loaded module params
    * @category Configuration
    * @group Vehicle
    
    * @param d
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetLoadedModuleParams RoboccDocs} for further information
    */
    SetLoadedModuleParams(d: ModuleParams): Promise<null>;
    /**
    * **Allow follow me**
    *
    * Allow follow me
    * @category Configuration
    * @group Vehicle
    
    * @param d Allow
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AllowFollowMe RoboccDocs} for further information
    */
    AllowFollowMe(d: boolean): Promise<null>;
    /**
    * **Set max button id search**
    *
    * Set max button id search in config mode
    * @category Configuration
    * @group Vehicle
    
    * @param d Max button id
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetMaxButtonIdSearch RoboccDocs} for further information
    */
    SetMaxButtonIdSearch(d: number): Promise<null>;
    /**
    * **Set default wait release sound**
    *
    * Set default wait release sound
    * @category Configuration
    * @group Vehicle
    
    * @param d Default sound
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetDefaultWaitReleaseSound RoboccDocs} for further information
    */
    SetDefaultWaitReleaseSound(d: string): Promise<null>;
    /**
    * **Set manager active map**
    *
    * Set manager active map
    * @category Configuration
    * @group Manager
    
    * @param d Map uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetManagerActiveMap RoboccDocs} for further information
    */
    SetManagerActiveMap(d: number): Promise<null>;
    /**
    * **Set manager active map**
    *
    * Set manager active map
    * @category Configuration
    * @group Manager
    
    
    
    * @data {@link ManagerMap}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetManagerMapsList RoboccDocs} for further information
    */
    GetManagerMapsList(): Promise<DeepRequired<ManagerMap>[]>;
    /**
    * **Set waiting sounds**
    *
    * Set list of waiting sound
    * @category Configuration
    * @group Vehicle
    
    * @param d Waiting sound list
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetWaitingSounds RoboccDocs} for further information
    */
    SetWaitingSounds(d: WaitingSound[]): Promise<null>;
    /**
    * **Set waiting sound**
    *
    * Set waiting sound
    * @category Configuration
    * @group Vehicle
    
    * @param d Waiting sound
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetWaitingSound RoboccDocs} for further information
    */
    SetWaitingSound(d: WaitingSound): Promise<null>;
    /**
    * **Set event sounds**
    *
    * Set list of event sound
    * @category Configuration
    * @group Vehicle
    
    * @param d Event sound list
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetEventsSounds RoboccDocs} for further information
    */
    SetEventsSounds(d: EventSound[]): Promise<null>;
    /**
    * **Set language**
    *
    * Set language
    * @category Configuration
    * @group ROC
    
    * @param d
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetLanguage RoboccDocs} for further information
    */
    SetLanguage(d: Language): Promise<null>;
    /**
    * **Enable pairing**
    *
    * Enable pairing LoRa equipment
    * @category Configuration
    * @group ROC
    
    * @param enable Enable/disable
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#EnablePairing RoboccDocs} for further information
    */
    EnablePairing(enable: boolean): Promise<null>;
    /**
    * **Pair equipment**
    *
    * Pair LoRa equipment
    * @category Configuration
    * @group ROC
    
    * @param d LoRa ID of equipment
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#PairEquipement RoboccDocs} for further information
    */
    PairEquipement(d: number): Promise<null>;
    /**
    * **Revoke equipment**
    *
    * Revoke LoRa equipment
    * @category Configuration
    * @group ROC
    
    * @param d LoRa ID of equipment
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#RevokeEquipement RoboccDocs} for further information
    */
    RevokeEquipement(d: number): Promise<null>;
    /**
    * **Ask pair**
    *
    * Ask pair on manager
    * @category Configuration
    * @group ROC
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#AskPair RoboccDocs} for further information
    */
    AskPair(): Promise<null>;
    /**
    * **Get security logging**
    *
    * Get security logging
    * @category Configuration
    * @group Stats
    
    * @param d
    
    * @data {@link SecurityLog}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#GetSecurityLogging RoboccDocs} for further information
    */
    GetSecurityLogging(d: GetSecurityLoggingParams): Promise<DeepRequired<SecurityLog>[]>;
    /**
    * **Export security logging**
    *
    * Export security logging
    * @category Configuration
    * @group Stats
    
    * @param d
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#ExportSecurityLogging RoboccDocs} for further information
    */
    ExportSecurityLogging(d: ExportSecurityLoggingParams): Promise<string>;
    /**
    * **Mute or unmute Global emergency stop**
    *
    * Mute or unmute Global emergency stop
    * @category State
    * @group Vehicle
    
    * @param d Mute sound
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/classes/RocApi.RocApi.html#SetGlobalEmergencyStopMuted RoboccDocs} for further information
    */
    SetGlobalEmergencyStopMuted(d: boolean): Promise<null>;
}
