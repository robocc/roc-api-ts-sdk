"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesMixin = exports.initServiceOperationCallbacks = exports.ServiceOperationCode = void 0;
const types_1 = require("./types");
/* Enums for all services */
/** @internal */
var ServiceOperationCode;
(function (ServiceOperationCode) {
    /**
    * **Get veh ID**
    *
    * Get vehicle ID 🆔
    * @group Vehicle
    * @category Vehicle state
    
    */
    ServiceOperationCode[ServiceOperationCode["GetVehId"] = 110] = "GetVehId";
    /**
    * **Subscribe**
    *
    * Operation to subscribe to event
    * @group Internal
    * @category Internal
    * @internal
    */
    ServiceOperationCode[ServiceOperationCode["Subscribe"] = 2] = "Subscribe";
    /**
    * **Unsubscribe**
    *
    * Operation to unsubscribe to event
    * @group Internal
    * @category Internal
    * @internal
    */
    ServiceOperationCode[ServiceOperationCode["Unsubscribe"] = 3] = "Unsubscribe";
    /**
    * **Unsubscribe all**
    *
    * Operation to unsubscribe to all events
    * @group Internal
    * @category Internal
    * @internal
    */
    ServiceOperationCode[ServiceOperationCode["UnsubscribeAll"] = 4] = "UnsubscribeAll";
    /**
    * **Cancel actions**
    *
    * Cancel ongoing action on vehicle ⏹
    * @group Vehicle
    * @category Current action
    
    */
    ServiceOperationCode[ServiceOperationCode["CancelActions"] = 13] = "CancelActions";
    /**
    * **Teleop**
    *
    * Send move orders to vehicle via angular and linear speed
    * @group Navigation
    * @category Teleop
    
    */
    ServiceOperationCode[ServiceOperationCode["Teleop"] = 12] = "Teleop";
    /**
    * **Teleop - Assisted with map**
    *
    * Send move orders to vehicle via angular and linear speed, assistance allows tracking of walls and prohibited areas
    * @group Navigation
    * @category Teleop
    
    */
    ServiceOperationCode[ServiceOperationCode["TeleopAssistedWithMap"] = 113] = "TeleopAssistedWithMap";
    /**
    * **Teleop - Assisted without map**
    *
    * Send move orders to vehicle via angular and linear speed, assistance allows tracking of walls
    * @group Navigation
    * @category Teleop
    
    */
    ServiceOperationCode[ServiceOperationCode["TeleopAssistedWithoutMap"] = 114] = "TeleopAssistedWithoutMap";
    /**
    * **FollowMe**
    *
    * Start or Stop the follow me feature 👣
    * @group Navigation
    * @category Navigation
    
    */
    ServiceOperationCode[ServiceOperationCode["FollowMe"] = 118] = "FollowMe";
    /**
    * **Follow Me Reset tracking**
    *
    * Reset tracking of follow me
    * @group Navigation
    * @category Navigation
    
    */
    ServiceOperationCode[ServiceOperationCode["FollowMeResetTracking"] = 134] = "FollowMeResetTracking";
    /**
    * **FollowMe Set Mode**
    *
    * Set follow mode
    * @group Navigation
    * @category Navigation
    
    */
    ServiceOperationCode[ServiceOperationCode["FollowMeSetMode"] = 135] = "FollowMeSetMode";
    /**
    * **Set sleeping**
    *
    * Start or stop the sleeping mode
    * @group Vehicle
    * @category Battery management
    
    */
    ServiceOperationCode[ServiceOperationCode["SetSleeping"] = 122] = "SetSleeping";
    /**
    * **Set hibernate**
    *
    * Start or stop the hibernate mode
    * @group Vehicle
    * @category Battery management
    
    */
    ServiceOperationCode[ServiceOperationCode["SetHibernate"] = 123] = "SetHibernate";
    /**
    * **Authenticate user**
    *
    * Authenticate user using API key 🔐
    * @group User
    * @category Authentication
    
    */
    ServiceOperationCode[ServiceOperationCode["AuthUser"] = 7] = "AuthUser";
    /**
    * **Authenticate module**
    *
    * Authenticate module using API key 🔐
    * @group Module
    * @category Authentication
    
    */
    ServiceOperationCode[ServiceOperationCode["AuthModule"] = 8] = "AuthModule";
    /**
    * **Sink**
    *
    * Void operation. May be used as heartbeat
    * @group Internal
    * @category Internal
    * @internal
    */
    ServiceOperationCode[ServiceOperationCode["Sink"] = 9] = "Sink";
    /**
    * **Set use fragmented message**
    *
    * Enable fragmented message. Fragemented messages are meant for heavy data transfer message, API will divide message in several thiner messages, callbacks will be fired when all messages have been gathered
    * @group Internal
    * @category Internal
    * @internal
    */
    ServiceOperationCode[ServiceOperationCode["SetUseFragmentedMessage"] = 5] = "SetUseFragmentedMessage";
    /**
    * **Logout**
    *
    * Logout
    * @group User
    * @category Authentication
    
    */
    ServiceOperationCode[ServiceOperationCode["Logout"] = 143] = "Logout";
    /**
    * **Login**
    *
    * Check user credentials and retrieve api key and other infos from user login and password 🔍
    * @group User
    * @category Authentication
    
    */
    ServiceOperationCode[ServiceOperationCode["Login"] = 6] = "Login";
    /**
    * **Set telop active**
    *
    * Activate or deactivate teleop, vehicle will accept or ignore teleop orders
    * @group Navigation
    * @category Teleop
    
    */
    ServiceOperationCode[ServiceOperationCode["SetTeleopActive"] = 10] = "SetTeleopActive";
    /**
    * **Get teleop Active**
    *
    * Check if teleop is active or not
    * @group Navigation
    * @category Teleop
    
    */
    ServiceOperationCode[ServiceOperationCode["GetTeleopActive"] = 11] = "GetTeleopActive";
    /**
    * **Import site**
    *
    * Import site onto the vehicle from a Robocc exported file 📁
    * @group Map
    * @category Site management
    
    */
    ServiceOperationCode[ServiceOperationCode["ImportSite"] = 21] = "ImportSite";
    /**
    * **Import sounds config**
    *
    * Import sounds config onto the vehicle from a Robocc exported file 📁
    * @group Map
    * @category Site management
    
    */
    ServiceOperationCode[ServiceOperationCode["ImportSoundsConfig"] = 146] = "ImportSoundsConfig";
    /**
    * **Export site**
    *
    * Export a site by providing its ID 📁
    * @group Map
    * @category Site management
    
    */
    ServiceOperationCode[ServiceOperationCode["ExportSite"] = 35] = "ExportSite";
    /**
    * **Export multiple sites**
    *
    * Export sites by providing array of ids. Returns an array of files with site ids 🗃️
    * @group Map
    * @category Site management
    
    */
    ServiceOperationCode[ServiceOperationCode["ExportSites"] = 49] = "ExportSites";
    /**
    * **Get new charging station from a marker**
    *
    * Ask vehicle for a charging station object from a given marker
    * @group Map
    * @category Charging station
    
    */
    ServiceOperationCode[ServiceOperationCode["GetNewChargingStationFromMarker"] = 51] = "GetNewChargingStationFromMarker";
    /**
    * **Get new docked pose from a marker**
    *
    * Ask vehicle for a docked pose object from a given marker
    * @group Map
    * @category Docked pose
    
    */
    ServiceOperationCode[ServiceOperationCode["GetNewDockedPoseFromMarker"] = 97] = "GetNewDockedPoseFromMarker";
    /**
    * **Update charging station from new config**
    *
    * Update a charging station object from a given distance
    * @group Map
    * @category Charging station
    
    */
    ServiceOperationCode[ServiceOperationCode["UpdateChargingStationConfig"] = 115] = "UpdateChargingStationConfig";
    /**
    * **Update docked pose from config**
    *
    * Update a docked pose object from a given distance
    * @group Map
    * @category Docked pose
    
    */
    ServiceOperationCode[ServiceOperationCode["UpdateDockedPoseConfig"] = 116] = "UpdateDockedPoseConfig";
    /**
    * **Simulate set sound is playing**
    *
    * In simulation mode, set that a sound is currently playing for developement purpose ⏯️
    * @group Simulation
    * @category Simulation
    
    */
    ServiceOperationCode[ServiceOperationCode["SimSetSoundIsPlaying"] = 106] = "SimSetSoundIsPlaying";
    /**
    * **Simulate set external speaker**
    *
    * In simulation mode, set external speaker is present purpose ⏯️
    * @group Simulation
    * @category Simulation
    
    */
    ServiceOperationCode[ServiceOperationCode["SimuSetExternalSpeaker"] = 145] = "SimuSetExternalSpeaker";
    /**
    * **Set user**
    *
    * Create or edit an user for the vehicle configuration application 👨🏽‍🦱
    * @group User
    * @category User management
    
    */
    ServiceOperationCode[ServiceOperationCode["SetUser"] = 17] = "SetUser";
    /**
    * **Delete user**
    *
    * Delete user via its ID 🗑️
    * @group User
    * @category User management
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteUser"] = 99] = "DeleteUser";
    /**
    * **Set OBT CBT**
    *
    * Set operational battery threshold (the vehicle is allowed to execute mission) and critical battery threshold (the vehicle is forced to charge itself) 🪫
    * @group Vehicle
    * @category Battery management
    
    */
    ServiceOperationCode[ServiceOperationCode["SetObtCbt"] = 89] = "SetObtCbt";
    /**
    * **List users**
    *
    * Get all users from vehicle configuration application
    * @group User
    * @category User management
    
    */
    ServiceOperationCode[ServiceOperationCode["ListUsers"] = 15] = "ListUsers";
    /**
    * **Get user**
    *
    * Get user for given id 👨🏽‍🦱
    * @group User
    * @category User management
    
    */
    ServiceOperationCode[ServiceOperationCode["GetUser"] = 108] = "GetUser";
    /**
    * **List sites**
    *
    * Get all vehicle's sites
    * @group Map
    * @category Site management
    
    */
    ServiceOperationCode[ServiceOperationCode["ListSites"] = 22] = "ListSites";
    /**
    * **List sites with maps**
    *
    * Get all vehicle's sites with maps
    * @group Map
    * @category Site management
    
    */
    ServiceOperationCode[ServiceOperationCode["ListSitesWithMaps"] = 30] = "ListSitesWithMaps";
    /**
    * **Get site**
    *
    * Get a vehicle's site for given id
    * @group Map
    * @category Site management
    
    */
    ServiceOperationCode[ServiceOperationCode["GetSite"] = 23] = "GetSite";
    /**
    * **Get site with maps**
    *
    * Get a vehicle's site with maps for given id
    * @group Map
    * @category Site management
    
    */
    ServiceOperationCode[ServiceOperationCode["GetSiteWithMaps"] = 38] = "GetSiteWithMaps";
    /**
    * **Get map**
    *
    * Get a map for a given id 🗺️
    * @group Map
    * @category Map management
    
    */
    ServiceOperationCode[ServiceOperationCode["GetMap"] = 26] = "GetMap";
    /**
    * **Get active site**
    *
    * Get the vehicle's current active site
    * @group Map
    * @category Site management
    
    */
    ServiceOperationCode[ServiceOperationCode["GetActiveSite"] = 28] = "GetActiveSite";
    /**
    * **Get active site with maps**
    *
    * Get the vehicle's current active site with maps
    * @group Map
    * @category Site management
    
    */
    ServiceOperationCode[ServiceOperationCode["GetActiveSiteWithMaps"] = 37] = "GetActiveSiteWithMaps";
    /**
    * **Set site**
    *
    * Set a vehicle site
    * @group Map
    * @category Site management
    
    */
    ServiceOperationCode[ServiceOperationCode["SetSite"] = 24] = "SetSite";
    /**
    * **List maps**
    *
    * Get all maps in site for given site's ID 🗺️
    * @group Map
    * @category Map management
    
    */
    ServiceOperationCode[ServiceOperationCode["ListMaps"] = 25] = "ListMaps";
    /**
    * **Get active map**
    *
    * Get the vehicle's current map 🗺️
    * @group Map
    * @category Map management
    
    */
    ServiceOperationCode[ServiceOperationCode["GetActiveMap"] = 27] = "GetActiveMap";
    /**
    * **Get active map with images**
    *
    * Get the vehicle's current map with all its images 🗺️
    * @group Map
    * @category Map management
    
    */
    ServiceOperationCode[ServiceOperationCode["GetActiveMapImgRaw"] = 33] = "GetActiveMapImgRaw";
    /**
    * **Get map elements**
    *
    * Get map elements for given map's ID
    * @group Map
    * @category Map management
    
    */
    ServiceOperationCode[ServiceOperationCode["GetMapElements"] = 39] = "GetMapElements";
    /**
    * **Get active map elements**
    *
    * Get map elements for active map
    * @group Map
    * @category Map management
    
    */
    ServiceOperationCode[ServiceOperationCode["GetActiveMapElements"] = 40] = "GetActiveMapElements";
    /**
    * **Get map without images**
    *
    * Get map without images for given map's ID 🗺️
    * @group Map
    * @category Map management
    
    */
    ServiceOperationCode[ServiceOperationCode["GetMapWithoutImages"] = 111] = "GetMapWithoutImages";
    /**
    * **Get active map without images**
    *
    * Get map without images for active map 🗺️
    * @group Map
    * @category Map management
    
    */
    ServiceOperationCode[ServiceOperationCode["GetActiveMapWithoutImages"] = 112] = "GetActiveMapWithoutImages";
    /**
    * **Delete site**
    *
    * Delete site via its ID 🗑
    * @group Map
    * @category Site management
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteSite"] = 58] = "DeleteSite";
    /**
    * **Delete map**
    *
    * Delete map via its ID 🗑
    * @group Map
    * @category Map management
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteMap"] = 59] = "DeleteMap";
    /**
    * **Set charging station**
    *
    * Set a charging station by giving all its attributes. Set id to -1 to create a new one
    * @group Map
    * @category Charging station
    
    */
    ServiceOperationCode[ServiceOperationCode["SetChargingStation"] = 62] = "SetChargingStation";
    /**
    * **Set saved pose**
    *
    * Set a saved pose by giving all its attributes. Set id to -1 to create a new one
    * @group Map
    * @category Saved pose
    
    */
    ServiceOperationCode[ServiceOperationCode["SetSavedPose"] = 60] = "SetSavedPose";
    /**
    * **Set docked pose**
    *
    * Set a docked pose by giving all its attributes. Set id to -1 to create a new one
    * @group Map
    * @category Docked pose
    
    */
    ServiceOperationCode[ServiceOperationCode["SetDockedPose"] = 61] = "SetDockedPose";
    /**
    * **Set forbidden area**
    *
    * Set a forbidden area by giving all its attributes. Set id to -1 to create a new one
    * @group Map
    * @category Forbidden area
    
    */
    ServiceOperationCode[ServiceOperationCode["SetForbiddenArea"] = 63] = "SetForbiddenArea";
    /**
    * **Set custom area**
    *
    * Set a custom area by giving all its attributes. Set id to -1 to create a new one
    * @group Map
    * @category Custom area
    
    */
    ServiceOperationCode[ServiceOperationCode["SetCustomArea"] = 64] = "SetCustomArea";
    /**
    * **Delete charging station**
    *
    * Delete charging station via its ID 🗑
    * @group Map
    * @category Charging station
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteChargingStation"] = 67] = "DeleteChargingStation";
    /**
    * **Delete saved pose**
    *
    * Delete saved pose via its ID 🗑
    * @group Map
    * @category Saved pose
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteSavedPose"] = 65] = "DeleteSavedPose";
    /**
    * **Delete docked pose**
    *
    * Delete docked pose via its ID 🗑
    * @group Map
    * @category Docked pose
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteDockedPose"] = 66] = "DeleteDockedPose";
    /**
    * **Delete forbidden area**
    *
    * Delete forbidden area via its ID 🗑
    * @group Map
    * @category Forbidden area
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteForbiddenArea"] = 68] = "DeleteForbiddenArea";
    /**
    * **Delete custom area**
    *
    * Delete custom area via its ID 🗑
    * @group Map
    * @category Custom area
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteCustomArea"] = 69] = "DeleteCustomArea";
    /**
    * **Check pose**
    *
    * Check if a pose is correct for vehicle in its current map. If no pose provided it will check vehicle's current pose 🔍
    * @group Map
    * @category Map management
    
    */
    ServiceOperationCode[ServiceOperationCode["CheckPose"] = 85] = "CheckPose";
    /**
    * **Check 3D box**
    *
    * Check if a box is free
    * @group Navigation
    * @category Navigation
    
    */
    ServiceOperationCode[ServiceOperationCode["Check3dBox"] = 129] = "Check3dBox";
    /**
    * **Simulation - Reset gazebo world 🔄**
    *
    * Reset simulation world
    * @group Simulation
    * @category Simulation
    
    */
    ServiceOperationCode[ServiceOperationCode["SimResetWord"] = 100] = "SimResetWord";
    /**
    * **Simulation - Add shelf**
    *
    * Add shelf in simulation world
    * @group Simulation
    * @category Simulation
    
    */
    ServiceOperationCode[ServiceOperationCode["SimAddShelf"] = 126] = "SimAddShelf";
    /**
    * **Simulation - Clear shelfs**
    *
    * Clear shelfs in simulation world
    * @group Simulation
    * @category Simulation
    
    */
    ServiceOperationCode[ServiceOperationCode["SimClearShelf"] = 127] = "SimClearShelf";
    /**
    * **Get module data**
    *
    * Get module data that are stored in the vehicle. The module can use this to store any data it wishes 💾
    * @group Module
    * @category Module
    
    */
    ServiceOperationCode[ServiceOperationCode["GetModuleData"] = 44] = "GetModuleData";
    /**
    * **Set module data**
    *
    * Set module data that are stored in the vehicle. The module can use this to store any data it wishes 💾
    * @group Module
    * @category Module
    
    */
    ServiceOperationCode[ServiceOperationCode["SetModuleData"] = 45] = "SetModuleData";
    /**
    * **Get internal data**
    *
    * Get internal data that are stored in the vehicle. API client can use this to store any data it wishes 💾
    * @group Internal
    * @category Internal data
    
    */
    ServiceOperationCode[ServiceOperationCode["GetInternalData"] = 94] = "GetInternalData";
    /**
    * **Set internal data**
    *
    * Set internal data that are stored in the vehicle. API client can use this to store any data it wishes 💾
    * @group Internal
    * @category Internal data
    
    */
    ServiceOperationCode[ServiceOperationCode["SetInternalData"] = 95] = "SetInternalData";
    /**
    * **Start cycle**
    *
    * Allow vehicle to move, need to be called at vehicle start or end of maintenance ▶
    * @group Vehicle
    * @category Maintenance
    
    */
    ServiceOperationCode[ServiceOperationCode["StartCycle"] = 96] = "StartCycle";
    /**
    * **Set car mode on leds**
    *
    * Enable or disable car mode (front LED corners in white, back LED corners in red) 🚗
    * @group Vehicle
    * @category LED
    
    */
    ServiceOperationCode[ServiceOperationCode["SetCarMode"] = 47] = "SetCarMode";
    /**
    * **Set custom led**
    *
    * Set a custom LED display by giving a led animation, a color (optional depending on animation), an optional duration for the custom display 🚥
    * @group Vehicle
    * @category LED
    
    */
    ServiceOperationCode[ServiceOperationCode["SetCustomLed"] = 48] = "SetCustomLed";
    /**
    * **Set custom sound**
    *
    * Set a custom sound action by giving a sound sample, an optional volume between 0 and 100, an optional loop number to repeat the sample, and an optional loop delay to define the duration between each loop 🔉
    * @group Vehicle
    * @category Sound
    
    */
    ServiceOperationCode[ServiceOperationCode["SetCustomSound"] = 83] = "SetCustomSound";
    /**
    * **Stop navigation**
    *
    * Stop the navigation on the vehicle, it will no longer be able to move autonomously ⛔
    * @group Navigation
    * @category Navigation
    
    */
    ServiceOperationCode[ServiceOperationCode["NavigationStop"] = 56] = "NavigationStop";
    /**
    * **Get software version**
    *
    * Get the version of the vehicle's software
    * @group Vehicle
    * @category Version
    
    */
    ServiceOperationCode[ServiceOperationCode["GetSoftVersion"] = 93] = "GetSoftVersion";
    /**
    * **Simulation - Set robot power consumption**
    *
    * Set the power consumption of the battery in simulation for developement purpose 🔌
    * @group Simulation
    * @category Simulation
    
    */
    ServiceOperationCode[ServiceOperationCode["SimBatterySetPowerConsumption"] = 101] = "SimBatterySetPowerConsumption";
    /**
    * **Simulation - Set charge power delivery**
    *
    * Set the charge power delivered by the fake charging stations in simulation for developement purpose 🔌
    * @group Simulation
    * @category Simulation
    
    */
    ServiceOperationCode[ServiceOperationCode["SimBatterySetChargePower"] = 102] = "SimBatterySetChargePower";
    /**
    * **Simulation - Set battery percentage**
    *
    * Set the battery percentage in simulation for developement purpose 🔋
    * @group Simulation
    * @category Simulation
    
    */
    ServiceOperationCode[ServiceOperationCode["SimBatterySetPercentage"] = 103] = "SimBatterySetPercentage";
    /**
    * **Simulation - Set charger of charging stations on**
    *
    * Enable or disable power on the fake charging stations in simulation for developement purpose 🔌
    * @group Simulation
    * @category Simulation
    
    */
    ServiceOperationCode[ServiceOperationCode["SimBatterySetChargerOn"] = 104] = "SimBatterySetChargerOn";
    /**
    * **Set maintenance mode**
    *
    * Enable or disable maintenance mode that blocks module orders but allows teleop and configuration application orders. Required for some API orders 🚧
    * @group Vehicle
    * @category Maintenance
    
    */
    ServiceOperationCode[ServiceOperationCode["SetMaintenanceMode"] = 84] = "SetMaintenanceMode";
    /**
    * **Set prohibit movement**
    *
    * Set this to prohibit all movements of vehicle. Only callable from module 🚫
    * @group Navigation
    * @category Navigation
    
    */
    ServiceOperationCode[ServiceOperationCode["SetProhibitMovement"] = 86] = "SetProhibitMovement";
    /**
    * **Simulation - Set diff driver state**
    *
    * Set diff drive state in simulation to simulate some vehicule errors
    * @group Simulation
    * @category Simulation
    
    */
    ServiceOperationCode[ServiceOperationCode["SimSetDiffDriveState"] = 105] = "SimSetDiffDriveState";
    /**
    * **Set Hotspot passowrd**
    *
    * Set vehicle the password for the emitted wifi hotspot 🛜
    * @group Vehicle
    * @category Network
    
    */
    ServiceOperationCode[ServiceOperationCode["NetworkHotspotSetPassword"] = 87] = "NetworkHotspotSetPassword";
    /**
    * **Wifi list APs**
    *
    * List all detected Wi-Fi access points by the vehicle. This doesn't trigger a scan so list can be outdated. See network_wan_scan_aps 🛜
    * @group Vehicle
    * @category Network
    
    */
    ServiceOperationCode[ServiceOperationCode["NetworkWifiListAps"] = 80] = "NetworkWifiListAps";
    /**
    * **Get vehicle elements list**
    *
    * Get all vehicle elements
    * @group Vehicle
    * @category Diagnostic
    
    */
    ServiceOperationCode[ServiceOperationCode["GetElementsList"] = 88] = "GetElementsList";
    /**
    * **Set autopilot config**
    *
    * Set autopilot sequence
    * @group Navigation
    * @category Autopilot
    
    */
    ServiceOperationCode[ServiceOperationCode["AutopilotSetConfig"] = 73] = "AutopilotSetConfig";
    /**
    * **Start autopilot**
    *
    * Start configured autopilot sequence ▶
    * @group Navigation
    * @category Autopilot
    
    */
    ServiceOperationCode[ServiceOperationCode["AutopilotStart"] = 74] = "AutopilotStart";
    /**
    * **Stop autopilot**
    *
    * Stop current autopilot sequence ⏹
    * @group Navigation
    * @category Autopilot
    
    */
    ServiceOperationCode[ServiceOperationCode["AutopilotStop"] = 75] = "AutopilotStop";
    /**
    * **Set scenario sound maximum volumes**
    *
    * Set maximum volume between 0 and 100 for each vehicle's sound scenarios 🔊
    * @group Vehicle
    * @category Sound
    
    */
    ServiceOperationCode[ServiceOperationCode["SetScenarioSoundMaxVolume"] = 91] = "SetScenarioSoundMaxVolume";
    /**
    * **Get scenario sound maximum volumes**
    *
    * Get maximum volume between 0 and 100 for each vehicle's sound scenarios 🔊
    * @group Vehicle
    * @category Sound
    
    */
    ServiceOperationCode[ServiceOperationCode["GetScenarioSoundMaxVolume"] = 92] = "GetScenarioSoundMaxVolume";
    /**
    * **Set scenario sample**
    *
    * Set sample for each vehicle's sound scenarios 🔊
    * @group Vehicle
    * @category Sound
    
    */
    ServiceOperationCode[ServiceOperationCode["SetScenarioSoundSamples"] = 148] = "SetScenarioSoundSamples";
    /**
    * **Get scenario sound sample**
    *
    * Get sample for each vehicle's sound scenarios 🔊
    * @group Vehicle
    * @category Sound
    
    */
    ServiceOperationCode[ServiceOperationCode["GetScenarioSoundSamples"] = 144] = "GetScenarioSoundSamples";
    /**
    * **Set module parameters**
    *
    * Set dynamically module parameters, i.e. max speed, height and weight ⚙
    * @group Module
    * @category Module
    
    */
    ServiceOperationCode[ServiceOperationCode["SetModuleParams"] = 98] = "SetModuleParams";
    /**
    * **Network redirect port**
    *
    * Start or stop redirect port form noeme to ip
    * @group Vehicle
    * @category Network
    
    */
    ServiceOperationCode[ServiceOperationCode["NetworkRedirectPort"] = 136] = "NetworkRedirectPort";
    /**
    * **Set camera streaming**
    *
    * Start streaming front and back camera video stream over WebRTC
    * @group Vehicle
    * @category Teleop
    
    */
    ServiceOperationCode[ServiceOperationCode["CameraStreaming"] = 121] = "CameraStreaming";
    /**
    * **Force system update**
    *
    * Force a system update
    * @group Vehicle
    * @category Version
    
    */
    ServiceOperationCode[ServiceOperationCode["ForceUpdate"] = 124] = "ForceUpdate";
    /**
    * **Set automatic updates**
    *
    * Enable/disable automatic update
    * @group Vehicle
    * @category Version
    
    */
    ServiceOperationCode[ServiceOperationCode["SetAutomaticUpdates"] = 125] = "SetAutomaticUpdates";
    /**
    * **Enable dynamic filters**
    *
    * Enable/disable dynamic filters
    * @group Vehicle
    * @category Module
    
    */
    ServiceOperationCode[ServiceOperationCode["EnableDynamicFilters"] = 130] = "EnableDynamicFilters";
    /**
    * **Restart system**
    *
    * Restart the system
    * @group Vehicle
    * @category System
    
    */
    ServiceOperationCode[ServiceOperationCode["SystemRestart"] = 131] = "SystemRestart";
    /**
    * **Request firmware flash of Roboteq**
    *
    * Will request a flash of the firmware of the roboteq motor controller at next reboot
    * @group Vehicle
    * @category System
    
    */
    ServiceOperationCode[ServiceOperationCode["SystemRequestFlashRoboteq"] = 132] = "SystemRequestFlashRoboteq";
    /**
    * **Request firmware flash of MCU**
    *
    * Will request a flash of the firmware of the Teensy/Pico
    * @group Vehicle
    * @category System
    
    */
    ServiceOperationCode[ServiceOperationCode["SystemRequestFlashMcu"] = 133] = "SystemRequestFlashMcu";
    /**
    * **Get shelves around the vehicle**
    *
    * Get list of shelves relative to the vehicle
    * @group Map
    * @category Marker
    
    */
    ServiceOperationCode[ServiceOperationCode["GetShelves"] = 140] = "GetShelves";
    /**
    * **Set security configuration**
    *
    * Set security configuration
    * @group Vehicle
    * @category System
    
    */
    ServiceOperationCode[ServiceOperationCode["SetSecurity"] = 142] = "SetSecurity";
    /**
    * **Delete sound**
    *
    * Delete sound from library
    * @group Database
    * @category Sound
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteSound"] = 149] = "DeleteSound";
    /**
    * **Add call button**
    *
    * Add call button
    * @group ROC
    * @category ROC Config
    
    */
    ServiceOperationCode[ServiceOperationCode["AddCallButton"] = 7000] = "AddCallButton";
    /**
    * **Add restocking button**
    *
    * Add restocking button
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["AddRestockingButton"] = 7001] = "AddRestockingButton";
    /**
    * **Add multidestination button**
    *
    * Add multidestination button
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["AddMultidestinationButton"] = 7032] = "AddMultidestinationButton";
    /**
    * **Add ordered multidestination button**
    *
    * Add ordered multidestination button
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["AddOrderedMultidestinationButton"] = 7060] = "AddOrderedMultidestinationButton";
    /**
    * **Update button**
    *
    * Update button
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["UpdateButton"] = 7044] = "UpdateButton";
    /**
    * **Delete button**
    *
    * Delete button
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteButton"] = 7003] = "DeleteButton";
    /**
    * **Add vehicle**
    *
    * Add vehicle
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["AddVeh"] = 7004] = "AddVeh";
    /**
    * **Delete vehicle**
    *
    * Delete vehicle
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteVeh"] = 7005] = "DeleteVeh";
    /**
    * **Set module is vehicle**
    *
    * Set module is vehicle
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetIsVeh"] = 7006] = "SetIsVeh";
    /**
    * **Set module is manager**
    *
    * Set module is manager
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetIsManager"] = 7007] = "SetIsManager";
    /**
    * **Set module type**
    *
    * Set module type
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetModuleType"] = 7028] = "SetModuleType";
    /**
    * **Set vehicle direction**
    *
    * Set vehicle direction
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetVehDirection"] = 7038] = "SetVehDirection";
    /**
    * **Set dock direction**
    *
    * Set dock direction
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetDockDirection"] = 7112] = "SetDockDirection";
    /**
    * **Release shelf on top**
    *
    * Release shelf on top
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["ReleaseShelf"] = 7113] = "ReleaseShelf";
    /**
    * **Release shelf on top and release misison**
    *
    * Release shelf on top and release misison
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["ReleaseShelfAndRelease"] = 7115] = "ReleaseShelfAndRelease";
    /**
    * **Set module LoRa ID**
    *
    * Set module LoRa ID
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetIdModule"] = 7009] = "SetIdModule";
    /**
    * **Set LoRa SP**
    *
    * Set LoRa SP
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetLoraSp"] = 7010] = "SetLoraSp";
    /**
    * **Add waiting pose**
    *
    * Add waiting pose
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["AddWaitingPose"] = 7048] = "AddWaitingPose";
    /**
    * **Update waiting pose**
    *
    * Update waiting pose
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["UpdateWaitingPose"] = 7049] = "UpdateWaitingPose";
    /**
    * **Delete waiting pose**
    *
    * Delete waiting pose
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteWaitingPose"] = 7050] = "DeleteWaitingPose";
    /**
    * **Add port redirection**
    *
    * Add port redirection
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["AddPortRedirection"] = 7104] = "AddPortRedirection";
    /**
    * **Update port redirection**
    *
    * Update port redirection
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["UpdatePortRedirection"] = 7105] = "UpdatePortRedirection";
    /**
    * **Delete port redirection**
    *
    * Delete port redirection
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["DeletePortRedirection"] = 7106] = "DeletePortRedirection";
    /**
    * **Add custom command**
    *
    * Add custom command
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["AddCustomCommand"] = 7051] = "AddCustomCommand";
    /**
    * **Update custom command**
    *
    * Update custom command
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["UpdateCustomCommand"] = 7052] = "UpdateCustomCommand";
    /**
    * **Delete custom command**
    *
    * Delete custom command
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteCustomCommand"] = 7053] = "DeleteCustomCommand";
    /**
    * **Add controller LoRa**
    *
    * Add controller LoRa
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["AddControllerLora"] = 7054] = "AddControllerLora";
    /**
    * **Update controller LoRa**
    *
    * Update controller LoRa
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["UpdateControllerLora"] = 7055] = "UpdateControllerLora";
    /**
    * **Delete controller LoRa**
    *
    * Delete controller LoRa
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteControllerLora"] = 7056] = "DeleteControllerLora";
    /**
    * **Add map element restriction**
    *
    * Add map element restriction
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["AddMapElementRestriction"] = 7057] = "AddMapElementRestriction";
    /**
    * **Update map element restriction**
    *
    * Update map element restriction
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["UpdateMapElementRestriction"] = 7058] = "UpdateMapElementRestriction";
    /**
    * **Delete map element restriction**
    *
    * Delete map element restriction
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteMapElementRestriction"] = 7059] = "DeleteMapElementRestriction";
    /**
    * **Add ROC docked pose configuration**
    *
    * Add ROC docked pose configuration
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["AddRocDockedPoseConfig"] = 7062] = "AddRocDockedPoseConfig";
    /**
    * **Update ROC docked pose configuration**
    *
    * Update ROC docked pose configuration
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["UpdateRocDockedPoseConfig"] = 7063] = "UpdateRocDockedPoseConfig";
    /**
    * **Delete ROC docked pose configuration**
    *
    * Delete ROC docked pose configuration
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteRocDockedPoseConfig"] = 7064] = "DeleteRocDockedPoseConfig";
    /**
    * **Add ROC map element configuration**
    *
    * Add ROC map element configuration
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["AddRocMapElementConfig"] = 7091] = "AddRocMapElementConfig";
    /**
    * **Update ROC map element configuration**
    *
    * Update ROC map element configuration
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["UpdateRocMapElementConfig"] = 7092] = "UpdateRocMapElementConfig";
    /**
    * **Delete ROC map element configuration**
    *
    * Delete ROC map element configuration
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteRocMapElementConfig"] = 7093] = "DeleteRocMapElementConfig";
    /**
    * **Get contacts's configuration of a LoRa controller**
    *
    * Get contact's configuration of a LoRa controller
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["ControllerLoraGetContactsConfig"] = 7094] = "ControllerLoraGetContactsConfig";
    /**
    * **Set contact's configuration of a LoRa controller**
    *
    * Set contact's configuration of a LoRa controller
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["ControllerLoraSetContactConfig"] = 7095] = "ControllerLoraSetContactConfig";
    /**
    * **Set predefined messages**
    *
    * Set predefined messages
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetPredefinedMessages"] = 7096] = "SetPredefinedMessages";
    /**
    * **Set vehicle delay config**
    *
    * Set vehicle delay config
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetVehicleDelayConfig"] = 7031] = "SetVehicleDelayConfig";
    /**
    * **Set vehicle response deadline**
    *
    * Set vehicle response deadline
    * @group Manager
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetVehicleResponseDeadline"] = 7045] = "SetVehicleResponseDeadline";
    /**
    * **Set default response deadline**
    *
    * Set default response deadline
    * @group Manager
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetDefaultResponseDeadline"] = 7046] = "SetDefaultResponseDeadline";
    /**
    * **End mission**
    *
    * End mission
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["Release"] = 7011] = "Release";
    /**
    * **Next step mission**
    *
    * Next step mission
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["NextStepMission"] = 7012] = "NextStepMission";
    /**
    * **Next step mission with message**
    *
    * Next step mission with message
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["NextStepMissionWithMessage"] = 7098] = "NextStepMissionWithMessage";
    /**
    * **End mission**
    *
    * End mission
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["MultidestinationMission"] = 7013] = "MultidestinationMission";
    /**
    * **Pause move**
    *
    * Pause the current move
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["PauseMove"] = 7014] = "PauseMove";
    /**
    * **Resume paused move**
    *
    * Resume the paused move
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["ResumeMove"] = 7015] = "ResumeMove";
    /**
    * **Cancel paused move**
    *
    * Cancel the paused move
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["CancelMove"] = 7016] = "CancelMove";
    /**
    * **Reboot ROC-E app**
    *
    * Reboot ROC-E app
    * @group ROC
    * @category App
    
    */
    ServiceOperationCode[ServiceOperationCode["Reboot"] = 7066] = "Reboot";
    /**
    * **Set in config mode**
    *
    * Set in config mode
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetInConfigMode"] = 7017] = "SetInConfigMode";
    /**
    * **Set in maintenance mode**
    *
    * Set in maintenance mode
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetInMaintenanceMode"] = 7047] = "SetInMaintenanceMode";
    /**
    * **Set touch screen**
    *
    * Set touch screen
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetTouchScreen"] = 7061] = "SetTouchScreen";
    /**
    * **Set allow move from dock**
    *
    * Set allow move from dock
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetAllowMoveFromDock"] = 7067] = "SetAllowMoveFromDock";
    /**
    * **Set allow multiple mission for the same button**
    *
    * Set allow multiple mission for the same button
    * @group Manager
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetAllowMultipleMissions"] = 7114] = "SetAllowMultipleMissions";
    /**
    * **Set sleeping**
    *
    * Set module in sleeping mode
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["SetModuleSleeping"] = 7069] = "SetModuleSleeping";
    /**
    * **Set hibernate**
    *
    * Set module in hibernate mode
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["SetModuleHibernate"] = 7070] = "SetModuleHibernate";
    /**
    * **Set sleep screen**
    *
    * Set sleep screen
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["SetSleepScreen"] = 7088] = "SetSleepScreen";
    /**
    * **Use external speaker**
    *
    * Use external speaker
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["UseExternalSpeaker"] = 7107] = "UseExternalSpeaker";
    /**
    * **Set operating hours**
    *
    * Set operating hours
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["SetOperatingHours"] = 7071] = "SetOperatingHours";
    /**
    * **Set HMI password**
    *
    * Set HMI password
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetHmiPassword"] = 7018] = "SetHmiPassword";
    /**
    * **Check HMI password**
    *
    * Check HMI password
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["CheckHmiPassword"] = 7019] = "CheckHmiPassword";
    /**
    * **Set high priority**
    *
    * Set high priority
    * @group Manager
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["SetHighPriority"] = 7020] = "SetHighPriority";
    /**
    * **Set normal priority**
    *
    * Set normal priority
    * @group Manager
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["SetNormalPriority"] = 7021] = "SetNormalPriority";
    /**
    * **Remove mission**
    *
    * Remove mission
    * @group Manager
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["RemoveMission"] = 7022] = "RemoveMission";
    /**
    * **Set multidestination**
    *
    * Set multidestination
    * @group Manager
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["SetMultidestination"] = 7023] = "SetMultidestination";
    /**
    * **Set multidestination with messages**
    *
    * Set multidestination with messages
    * @group Manager
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["SetMultidestinationWithMessages"] = 7097] = "SetMultidestinationWithMessages";
    /**
    * **Import configuration**
    *
    * Import configuration
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["ImportConfiguration"] = 7024] = "ImportConfiguration";
    /**
    * **Export configuration**
    *
    * Export configuration
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["ExportConfiguration"] = 7025] = "ExportConfiguration";
    /**
    * **Get stats**
    *
    * Get stats
    * @group Stats
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["GetStats"] = 7026] = "GetStats";
    /**
    * **Get light stats**
    *
    * Get light stats
    * @group Stats
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["GetLightStats"] = 7043] = "GetLightStats";
    /**
    * **Export stats**
    *
    * Export stats
    * @group Stats
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["ExportStats"] = 7039] = "ExportStats";
    /**
    * **Get list of maps for stats**
    *
    * Get list of maps for stats
    * @group Stats
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["GetMapsForStats"] = 7040] = "GetMapsForStats";
    /**
    * **Get vehicles timeline**
    *
    * Get vehicles timeline
    * @group Stats
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["GetVehsTimeline"] = 7041] = "GetVehsTimeline";
    /**
    * **Remise stats**
    *
    * Remise stats
    * @group Stats
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["ResetStats"] = 7027] = "ResetStats";
    /**
    * **Move down the lift**
    *
    * Move down the lift
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["LiftMoveDown"] = 7065] = "LiftMoveDown";
    /**
    * **Move up the lift**
    *
    * Move up the lift
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["LiftMoveUp"] = 7084] = "LiftMoveUp";
    /**
    * **Stop the lift**
    *
    * Stop the lift
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["LiftStop"] = 7085] = "LiftStop";
    /**
    * **Move the lift to the desired height**
    *
    * Move the lift to the desired height
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["LiftMoveTo"] = 7086] = "LiftMoveTo";
    /**
    * **Set tare height of lift**
    *
    * Set tare height of lift
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["LiftSetTareHeight"] = 7109] = "LiftSetTareHeight";
    /**
    * **Set real height of lift**
    *
    * Set real height of lift
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["LiftSetRealHeight"] = 7110] = "LiftSetRealHeight";
    /**
    * **Stop retrying**
    *
    * Stop retrying
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["StopRetrying"] = 7111] = "StopRetrying";
    /**
    * **Add ROC user**
    *
    * Add ROC user
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["AddRocUser"] = 7033] = "AddRocUser";
    /**
    * **Update ROC user**
    *
    * Update ROC user
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["UpdateRocUser"] = 7034] = "UpdateRocUser";
    /**
    * **Update ROC user**
    *
    * Remove ROC user
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["RemoveRocUser"] = 7035] = "RemoveRocUser";
    /**
    * **List ROC users**
    *
    * List ROC users
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["ListRocUsers"] = 7036] = "ListRocUsers";
    /**
    * **Get ROC ID**
    *
    * Get ROC ID
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["GetRocId"] = 7037] = "GetRocId";
    /**
    * **Update soft versions**
    *
    * Update soft versions
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["UpdateSoftVersions"] = 7068] = "UpdateSoftVersions";
    /**
    * **Hotspot set password**
    *
    * Hotspot set password
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["HotspotSetPassword"] = 7042] = "HotspotSetPassword";
    /**
    * **Enable Hotspot**
    *
    * Enable Hotspot
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["HotspotEnable"] = 7119] = "HotspotEnable";
    /**
    * **Create new mission**
    *
    * Create new mission
    * @group Manager
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["CreateMission"] = 7072] = "CreateMission";
    /**
    * **Create new mission**
    *
    * Create new mission
    * @group Manager
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["ExtendMission"] = 7073] = "ExtendMission";
    /**
    * **Start button mission**
    *
    * Start button mission
    * @group Manager
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["StartButtonMission"] = 7074] = "StartButtonMission";
    /**
    * **Release module**
    *
    * Release module
    * @group Manager
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["ReleaseModule"] = 7075] = "ReleaseModule";
    /**
    * **Add group**
    *
    * Add new group
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["AddGroup"] = 7076] = "AddGroup";
    /**
    * **Update group**
    *
    * Update group
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["UpdateGroup"] = 7077] = "UpdateGroup";
    /**
    * **Delete group**
    *
    * Delete group
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["DeleteGroup"] = 7078] = "DeleteGroup";
    /**
    * **Sub step mission**
    *
    * Sub step mission for groups
    * @group Vehicle
    * @category Mission
    
    */
    ServiceOperationCode[ServiceOperationCode["SubStepMission"] = 7079] = "SubStepMission";
    /**
    * **Force a system update of ROC**
    *
    * Force a system update of ROC
    * @group Vehicle
    * @category Version
    
    */
    ServiceOperationCode[ServiceOperationCode["RocSoftForceUpdate"] = 7080] = "RocSoftForceUpdate";
    /**
    * **Set automatic updates for ROC**
    *
    * Enable/disable automatic update for ROC
    * @group Vehicle
    * @category Version
    
    */
    ServiceOperationCode[ServiceOperationCode["RocSoftSetAutomaticUpdates"] = 7081] = "RocSoftSetAutomaticUpdates";
    /**
    * **Set tare module params**
    *
    * Set tare module params
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetTareModuleParams"] = 7082] = "SetTareModuleParams";
    /**
    * **Set loaded module params**
    *
    * Set loaded module params
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetLoadedModuleParams"] = 7083] = "SetLoadedModuleParams";
    /**
    * **Allow follow me**
    *
    * Allow follow me
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["AllowFollowMe"] = 7101] = "AllowFollowMe";
    /**
    * **Set max button id search**
    *
    * Set max button id search in config mode
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetMaxButtonIdSearch"] = 7102] = "SetMaxButtonIdSearch";
    /**
    * **Set default wait release sound**
    *
    * Set default wait release sound
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetDefaultWaitReleaseSound"] = 7103] = "SetDefaultWaitReleaseSound";
    /**
    * **Set manager active map**
    *
    * Set manager active map
    * @group Manager
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetManagerActiveMap"] = 7090] = "SetManagerActiveMap";
    /**
    * **Set manager active map**
    *
    * Set manager active map
    * @group Manager
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["GetManagerMapsList"] = 7089] = "GetManagerMapsList";
    /**
    * **Set waiting sounds**
    *
    * Set list of waiting sound
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetWaitingSounds"] = 7116] = "SetWaitingSounds";
    /**
    * **Set event sounds**
    *
    * Set list of event sound
    * @group Vehicle
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetEventsSounds"] = 7117] = "SetEventsSounds";
    /**
    * **Set ROC security**
    *
    * Set ROC security
    * @group ROC
    * @category Configuration
    
    */
    ServiceOperationCode[ServiceOperationCode["SetRocSecurity"] = 7118] = "SetRocSecurity";
})(ServiceOperationCode || (exports.ServiceOperationCode = ServiceOperationCode = {}));
/** @internal */
const initServiceOperationCallbacks = () => ({
    [ServiceOperationCode.GetVehId]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.Subscribe]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.Unsubscribe]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.UnsubscribeAll]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.CancelActions]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.Teleop]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.TeleopAssistedWithMap]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.TeleopAssistedWithoutMap]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.FollowMe]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.FollowMeResetTracking]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.FollowMeSetMode]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetSleeping]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetHibernate]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AuthUser]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AuthModule]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.Sink]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetUseFragmentedMessage]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.Logout]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.Login]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetTeleopActive]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetTeleopActive]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ImportSite]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ImportSoundsConfig]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ExportSite]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ExportSites]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetNewChargingStationFromMarker]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetNewDockedPoseFromMarker]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.UpdateChargingStationConfig]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.UpdateDockedPoseConfig]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SimSetSoundIsPlaying]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SimuSetExternalSpeaker]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetUser]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteUser]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetObtCbt]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ListUsers]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetUser]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ListSites]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ListSitesWithMaps]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetSite]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetSiteWithMaps]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetMap]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetActiveSite]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetActiveSiteWithMaps]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetSite]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ListMaps]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetActiveMap]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetActiveMapImgRaw]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetMapElements]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetActiveMapElements]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetMapWithoutImages]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetActiveMapWithoutImages]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteSite]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteMap]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetChargingStation]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetSavedPose]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetDockedPose]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetForbiddenArea]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetCustomArea]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteChargingStation]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteSavedPose]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteDockedPose]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteForbiddenArea]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteCustomArea]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.CheckPose]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.Check3dBox]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SimResetWord]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SimAddShelf]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SimClearShelf]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetModuleData]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetModuleData]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetInternalData]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetInternalData]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.StartCycle]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetCarMode]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetCustomLed]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetCustomSound]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.NavigationStop]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetSoftVersion]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SimBatterySetPowerConsumption]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SimBatterySetChargePower]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SimBatterySetPercentage]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SimBatterySetChargerOn]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetMaintenanceMode]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetProhibitMovement]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SimSetDiffDriveState]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.NetworkHotspotSetPassword]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.NetworkWifiListAps]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetElementsList]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AutopilotSetConfig]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AutopilotStart]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AutopilotStop]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetScenarioSoundMaxVolume]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetScenarioSoundMaxVolume]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetScenarioSoundSamples]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetScenarioSoundSamples]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetModuleParams]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.NetworkRedirectPort]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.CameraStreaming]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ForceUpdate]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetAutomaticUpdates]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.EnableDynamicFilters]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SystemRestart]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SystemRequestFlashRoboteq]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SystemRequestFlashMcu]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetShelves]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetSecurity]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteSound]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AddCallButton]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AddRestockingButton]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AddMultidestinationButton]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AddOrderedMultidestinationButton]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.UpdateButton]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteButton]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AddVeh]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteVeh]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetIsVeh]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetIsManager]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetModuleType]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetVehDirection]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetDockDirection]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ReleaseShelf]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ReleaseShelfAndRelease]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetIdModule]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetLoraSp]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AddWaitingPose]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.UpdateWaitingPose]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteWaitingPose]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AddPortRedirection]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.UpdatePortRedirection]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeletePortRedirection]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AddCustomCommand]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.UpdateCustomCommand]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteCustomCommand]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AddControllerLora]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.UpdateControllerLora]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteControllerLora]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AddMapElementRestriction]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.UpdateMapElementRestriction]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteMapElementRestriction]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AddRocDockedPoseConfig]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.UpdateRocDockedPoseConfig]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteRocDockedPoseConfig]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AddRocMapElementConfig]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.UpdateRocMapElementConfig]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteRocMapElementConfig]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ControllerLoraGetContactsConfig]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ControllerLoraSetContactConfig]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetPredefinedMessages]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetVehicleDelayConfig]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetVehicleResponseDeadline]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetDefaultResponseDeadline]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.Release]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.NextStepMission]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.NextStepMissionWithMessage]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.MultidestinationMission]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.PauseMove]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ResumeMove]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.CancelMove]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.Reboot]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetInConfigMode]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetInMaintenanceMode]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetTouchScreen]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetAllowMoveFromDock]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetAllowMultipleMissions]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetModuleSleeping]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetModuleHibernate]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetSleepScreen]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.UseExternalSpeaker]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetOperatingHours]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetHmiPassword]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.CheckHmiPassword]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetHighPriority]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetNormalPriority]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.RemoveMission]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetMultidestination]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetMultidestinationWithMessages]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ImportConfiguration]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ExportConfiguration]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetStats]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetLightStats]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ExportStats]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetMapsForStats]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetVehsTimeline]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ResetStats]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.LiftMoveDown]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.LiftMoveUp]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.LiftStop]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.LiftMoveTo]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.LiftSetTareHeight]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.LiftSetRealHeight]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.StopRetrying]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AddRocUser]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.UpdateRocUser]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.RemoveRocUser]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ListRocUsers]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetRocId]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.UpdateSoftVersions]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.HotspotSetPassword]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.HotspotEnable]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.CreateMission]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ExtendMission]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.StartButtonMission]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.ReleaseModule]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AddGroup]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.UpdateGroup]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.DeleteGroup]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SubStepMission]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.RocSoftForceUpdate]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.RocSoftSetAutomaticUpdates]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetTareModuleParams]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetLoadedModuleParams]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.AllowFollowMe]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetMaxButtonIdSearch]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetDefaultWaitReleaseSound]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetManagerActiveMap]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.GetManagerMapsList]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetWaitingSounds]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetEventsSounds]: { resolve: undefined, reject: undefined },
    [ServiceOperationCode.SetRocSecurity]: { resolve: undefined, reject: undefined },
});
exports.initServiceOperationCallbacks = initServiceOperationCallbacks;
/* Services calls mixin */
/** @internal */
class ServicesMixin extends types_1.BaseAPI {
    /**
    * **Get veh ID**
    *
    * Get vehicle ID 🆔
    * @category Vehicle state
    * @group Vehicle
    
    
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetVehId RoboccDocs} for further information
    */
    GetVehId() {
        return this.callService(ServiceOperationCode.GetVehId, null);
    }
    /**
    * **Subscribe**
    *
    * Operation to subscribe to event
    * @category Internal
    * @group Internal
    * @internal
    * @param event_code Event code
    
    * @data {@link SubscribeResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#Subscribe RoboccDocs} for further information
    */
    Subscribe(event_code) {
        return this.callService(ServiceOperationCode.Subscribe, event_code);
    }
    /**
    * **Unsubscribe**
    *
    * Operation to unsubscribe to event
    * @category Internal
    * @group Internal
    * @internal
    * @param event_code Event code
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#Unsubscribe RoboccDocs} for further information
    */
    Unsubscribe(event_code) {
        return this.callService(ServiceOperationCode.Unsubscribe, event_code);
    }
    /**
    * **Unsubscribe all**
    *
    * Operation to unsubscribe to all events
    * @category Internal
    * @group Internal
    * @internal
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#UnsubscribeAll RoboccDocs} for further information
    */
    UnsubscribeAll() {
        return this.callService(ServiceOperationCode.UnsubscribeAll, null);
    }
    /**
    * **Cancel actions**
    *
    * Cancel ongoing action on vehicle ⏹
    * @category Current action
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#CancelActions RoboccDocs} for further information
    */
    CancelActions() {
        return this.callService(ServiceOperationCode.CancelActions, null);
    }
    /**
    * **Teleop**
    *
    * Send move orders to vehicle via angular and linear speed
    * @category Teleop
    * @group Navigation
    
    * @param teleop_cmd Teleop command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#Teleop RoboccDocs} for further information
    */
    Teleop(teleop_cmd) {
        return this.callService(ServiceOperationCode.Teleop, teleop_cmd);
    }
    /**
    * **Teleop - Assisted with map**
    *
    * Send move orders to vehicle via angular and linear speed, assistance allows tracking of walls and prohibited areas
    * @category Teleop
    * @group Navigation
    
    * @param teleop_cmd Teleop command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#TeleopAssistedWithMap RoboccDocs} for further information
    */
    TeleopAssistedWithMap(teleop_cmd) {
        return this.callService(ServiceOperationCode.TeleopAssistedWithMap, teleop_cmd);
    }
    /**
    * **Teleop - Assisted without map**
    *
    * Send move orders to vehicle via angular and linear speed, assistance allows tracking of walls
    * @category Teleop
    * @group Navigation
    
    * @param teleop_cmd Teleop command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#TeleopAssistedWithoutMap RoboccDocs} for further information
    */
    TeleopAssistedWithoutMap(teleop_cmd) {
        return this.callService(ServiceOperationCode.TeleopAssistedWithoutMap, teleop_cmd);
    }
    /**
    * **FollowMe**
    *
    * Start or Stop the follow me feature 👣
    * @category Navigation
    * @group Navigation
    
    * @param d Start Stop command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#FollowMe RoboccDocs} for further information
    */
    FollowMe(d) {
        return this.callService(ServiceOperationCode.FollowMe, d);
    }
    /**
    * **Follow Me Reset tracking**
    *
    * Reset tracking of follow me
    * @category Navigation
    * @group Navigation
    
    * @param d Direction of person to follow
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#FollowMeResetTracking RoboccDocs} for further information
    */
    FollowMeResetTracking(d) {
        return this.callService(ServiceOperationCode.FollowMeResetTracking, d);
    }
    /**
    * **FollowMe Set Mode**
    *
    * Set follow mode
    * @category Navigation
    * @group Navigation
    
    * @param d Follow mode
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#FollowMeSetMode RoboccDocs} for further information
    */
    FollowMeSetMode(d) {
        return this.callService(ServiceOperationCode.FollowMeSetMode, d);
    }
    /**
    * **Set sleeping**
    *
    * Start or stop the sleeping mode
    * @category Battery management
    * @group Vehicle
    
    * @param enable Start Stop command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetSleeping RoboccDocs} for further information
    */
    SetSleeping(enable) {
        return this.callService(ServiceOperationCode.SetSleeping, enable);
    }
    /**
    * **Set hibernate**
    *
    * Start or stop the hibernate mode
    * @category Battery management
    * @group Vehicle
    
    * @param enable Start Stop command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetHibernate RoboccDocs} for further information
    */
    SetHibernate(enable) {
        return this.callService(ServiceOperationCode.SetHibernate, enable);
    }
    /**
    * **Authenticate user**
    *
    * Authenticate user using API key 🔐
    * @category Authentication
    * @group User
    
    * @param auth_data API Key
    
    * @data {@link AuthUserResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AuthUser RoboccDocs} for further information
    */
    AuthUser(auth_data) {
        return this.callService(ServiceOperationCode.AuthUser, auth_data);
    }
    /**
    * **Authenticate module**
    *
    * Authenticate module using API key 🔐
    * @category Authentication
    * @group Module
    
    * @param api_key API Key
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AuthModule RoboccDocs} for further information
    */
    AuthModule(api_key) {
        return this.callService(ServiceOperationCode.AuthModule, api_key);
    }
    /**
    * **Sink**
    *
    * Void operation. May be used as heartbeat
    * @category Internal
    * @group Internal
    * @internal
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#Sink RoboccDocs} for further information
    */
    Sink() {
        return this.callService(ServiceOperationCode.Sink, null);
    }
    /**
    * **Set use fragmented message**
    *
    * Enable fragmented message. Fragemented messages are meant for heavy data transfer message, API will divide message in several thiner messages, callbacks will be fired when all messages have been gathered
    * @category Internal
    * @group Internal
    * @internal
    * @param enable Enable or disable fragmented message
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetUseFragmentedMessage RoboccDocs} for further information
    */
    SetUseFragmentedMessage(enable) {
        return this.callService(ServiceOperationCode.SetUseFragmentedMessage, enable);
    }
    /**
    * **Logout**
    *
    * Logout
    * @category Authentication
    * @group User
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#Logout RoboccDocs} for further information
    */
    Logout() {
        return this.callService(ServiceOperationCode.Logout, null);
    }
    /**
    * **Login**
    *
    * Check user credentials and retrieve api key and other infos from user login and password 🔍
    * @category Authentication
    * @group User
    
    * @param login_data Parameters
    
    * @data {@link LoginResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#Login RoboccDocs} for further information
    */
    Login(login_data) {
        return this.callService(ServiceOperationCode.Login, login_data);
    }
    /**
    * **Set telop active**
    *
    * Activate or deactivate teleop, vehicle will accept or ignore teleop orders
    * @category Teleop
    * @group Navigation
    
    * @param enable_teleop Set or not teleop active
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetTeleopActive RoboccDocs} for further information
    */
    SetTeleopActive(enable_teleop) {
        return this.callService(ServiceOperationCode.SetTeleopActive, enable_teleop);
    }
    /**
    * **Get teleop Active**
    *
    * Check if teleop is active or not
    * @category Teleop
    * @group Navigation
    
    
    
    * @data {@link boolean}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetTeleopActive RoboccDocs} for further information
    */
    GetTeleopActive() {
        return this.callService(ServiceOperationCode.GetTeleopActive, null);
    }
    /**
    * **Import site**
    *
    * Import site onto the vehicle from a Robocc exported file 📁
    * @category Site management
    * @group Map
    
    * @param site_b64 Base 64 of export file
    
    * @data {@link ImportSiteResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ImportSite RoboccDocs} for further information
    */
    ImportSite(site_b64) {
        return this.callService(ServiceOperationCode.ImportSite, site_b64);
    }
    /**
    * **Import sounds config**
    *
    * Import sounds config onto the vehicle from a Robocc exported file 📁
    * @category Site management
    * @group Map
    
    * @param site_b64 Base 64 of export file
    
    * @data {@link ImportSoundsConfigResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ImportSoundsConfig RoboccDocs} for further information
    */
    ImportSoundsConfig(site_b64) {
        return this.callService(ServiceOperationCode.ImportSoundsConfig, site_b64);
    }
    /**
    * **Export site**
    *
    * Export a site by providing its ID 📁
    * @category Site management
    * @group Map
    
    * @param id_site
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ExportSite RoboccDocs} for further information
    */
    ExportSite(id_site) {
        return this.callService(ServiceOperationCode.ExportSite, id_site);
    }
    /**
    * **Export multiple sites**
    *
    * Export sites by providing array of ids. Returns an array of files with site ids 🗃️
    * @category Site management
    * @group Map
    
    * @param export_sites_data
    
    * @data {@link ExportSitesResultItem}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ExportSites RoboccDocs} for further information
    */
    ExportSites(export_sites_data) {
        return this.callService(ServiceOperationCode.ExportSites, export_sites_data);
    }
    /**
    * **Get new charging station from a marker**
    *
    * Ask vehicle for a charging station object from a given marker
    * @category Charging station
    * @group Map
    
    * @param marker Marker
    
    * @data {@link ChargingStation}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetNewChargingStationFromMarker RoboccDocs} for further information
    */
    GetNewChargingStationFromMarker(marker) {
        return this.callService(ServiceOperationCode.GetNewChargingStationFromMarker, marker);
    }
    /**
    * **Get new docked pose from a marker**
    *
    * Ask vehicle for a docked pose object from a given marker
    * @category Docked pose
    * @group Map
    
    * @param marker Marker
    
    * @data {@link DockedPose}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetNewDockedPoseFromMarker RoboccDocs} for further information
    */
    GetNewDockedPoseFromMarker(marker) {
        return this.callService(ServiceOperationCode.GetNewDockedPoseFromMarker, marker);
    }
    /**
    * **Update charging station from new config**
    *
    * Update a charging station object from a given distance
    * @category Charging station
    * @group Map
    
    * @param charging_station_data Charging station object and distances
    
    * @data {@link ChargingStation}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#UpdateChargingStationConfig RoboccDocs} for further information
    */
    UpdateChargingStationConfig(charging_station_data) {
        return this.callService(ServiceOperationCode.UpdateChargingStationConfig, charging_station_data);
    }
    /**
    * **Update docked pose from config**
    *
    * Update a docked pose object from a given distance
    * @category Docked pose
    * @group Map
    
    * @param docked_pose_data Docked pose object and distances
    
    * @data {@link DockedPose}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#UpdateDockedPoseConfig RoboccDocs} for further information
    */
    UpdateDockedPoseConfig(docked_pose_data) {
        return this.callService(ServiceOperationCode.UpdateDockedPoseConfig, docked_pose_data);
    }
    /**
    * **Simulate set sound is playing**
    *
    * In simulation mode, set that a sound is currently playing for developement purpose ⏯️
    * @category Simulation
    * @group Simulation
    
    * @param sound_is_playing Set sound is playing
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SimSetSoundIsPlaying RoboccDocs} for further information
    */
    SimSetSoundIsPlaying(sound_is_playing) {
        return this.callService(ServiceOperationCode.SimSetSoundIsPlaying, sound_is_playing);
    }
    /**
    * **Simulate set external speaker**
    *
    * In simulation mode, set external speaker is present purpose ⏯️
    * @category Simulation
    * @group Simulation
    
    * @param external_speaker Set external speaker present
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SimuSetExternalSpeaker RoboccDocs} for further information
    */
    SimuSetExternalSpeaker(external_speaker) {
        return this.callService(ServiceOperationCode.SimuSetExternalSpeaker, external_speaker);
    }
    /**
    * **Set user**
    *
    * Create or edit an user for the vehicle configuration application 👨🏽‍🦱
    * @category User management
    * @group User
    
    * @param user User data
    
    * @data {@link number}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetUser RoboccDocs} for further information
    */
    SetUser(user) {
        return this.callService(ServiceOperationCode.SetUser, user);
    }
    /**
    * **Delete user**
    *
    * Delete user via its ID 🗑️
    * @category User management
    * @group User
    
    * @param user_id Id user
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteUser RoboccDocs} for further information
    */
    DeleteUser(user_id) {
        return this.callService(ServiceOperationCode.DeleteUser, user_id);
    }
    /**
    * **Set OBT CBT**
    *
    * Set operational battery threshold (the vehicle is allowed to execute mission) and critical battery threshold (the vehicle is forced to charge itself) 🪫
    * @category Battery management
    * @group Vehicle
    
    * @param obt_cbt Battery parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetObtCbt RoboccDocs} for further information
    */
    SetObtCbt(obt_cbt) {
        return this.callService(ServiceOperationCode.SetObtCbt, obt_cbt);
    }
    /**
    * **List users**
    *
    * Get all users from vehicle configuration application
    * @category User management
    * @group User
    
    
    
    * @data {@link User}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ListUsers RoboccDocs} for further information
    */
    ListUsers() {
        return this.callService(ServiceOperationCode.ListUsers, null);
    }
    /**
    * **Get user**
    *
    * Get user for given id 👨🏽‍🦱
    * @category User management
    * @group User
    
    * @param user_id id user
    
    * @data {@link User}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetUser RoboccDocs} for further information
    */
    GetUser(user_id) {
        return this.callService(ServiceOperationCode.GetUser, user_id);
    }
    /**
    * **List sites**
    *
    * Get all vehicle's sites
    * @category Site management
    * @group Map
    
    
    
    * @data {@link SiteRaw}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ListSites RoboccDocs} for further information
    */
    ListSites() {
        return this.callService(ServiceOperationCode.ListSites, null);
    }
    /**
    * **List sites with maps**
    *
    * Get all vehicle's sites with maps
    * @category Site management
    * @group Map
    
    
    
    * @data {@link SiteLight}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ListSitesWithMaps RoboccDocs} for further information
    */
    ListSitesWithMaps() {
        return this.callService(ServiceOperationCode.ListSitesWithMaps, null);
    }
    /**
    * **Get site**
    *
    * Get a vehicle's site for given id
    * @category Site management
    * @group Map
    
    * @param site_id id site
    
    * @data {@link SiteRaw}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetSite RoboccDocs} for further information
    */
    GetSite(site_id) {
        return this.callService(ServiceOperationCode.GetSite, site_id);
    }
    /**
    * **Get site with maps**
    *
    * Get a vehicle's site with maps for given id
    * @category Site management
    * @group Map
    
    * @param site_id id site
    
    * @data {@link SiteLight}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetSiteWithMaps RoboccDocs} for further information
    */
    GetSiteWithMaps(site_id) {
        return this.callService(ServiceOperationCode.GetSiteWithMaps, site_id);
    }
    /**
    * **Get map**
    *
    * Get a map for a given id 🗺️
    * @category Map management
    * @group Map
    
    * @param map_id id map
    
    * @data {@link Map}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetMap RoboccDocs} for further information
    */
    GetMap(map_id) {
        return this.callService(ServiceOperationCode.GetMap, map_id);
    }
    /**
    * **Get active site**
    *
    * Get the vehicle's current active site
    * @category Site management
    * @group Map
    
    
    
    * @data {@link SiteRaw}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetActiveSite RoboccDocs} for further information
    */
    GetActiveSite() {
        return this.callService(ServiceOperationCode.GetActiveSite, null);
    }
    /**
    * **Get active site with maps**
    *
    * Get the vehicle's current active site with maps
    * @category Site management
    * @group Map
    
    
    
    * @data {@link SiteRaw}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetActiveSiteWithMaps RoboccDocs} for further information
    */
    GetActiveSiteWithMaps() {
        return this.callService(ServiceOperationCode.GetActiveSiteWithMaps, null);
    }
    /**
    * **Set site**
    *
    * Set a vehicle site
    * @category Site management
    * @group Map
    
    * @param site site
    
    * @data {@link number}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetSite RoboccDocs} for further information
    */
    SetSite(site) {
        return this.callService(ServiceOperationCode.SetSite, site);
    }
    /**
    * **List maps**
    *
    * Get all maps in site for given site's ID 🗺️
    * @category Map management
    * @group Map
    
    * @param site_id Id site
    
    * @data {@link MapRaw}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ListMaps RoboccDocs} for further information
    */
    ListMaps(site_id) {
        return this.callService(ServiceOperationCode.ListMaps, site_id);
    }
    /**
    * **Get active map**
    *
    * Get the vehicle's current map 🗺️
    * @category Map management
    * @group Map
    
    
    
    * @data {@link Map}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetActiveMap RoboccDocs} for further information
    */
    GetActiveMap() {
        return this.callService(ServiceOperationCode.GetActiveMap, null);
    }
    /**
    * **Get active map with images**
    *
    * Get the vehicle's current map with all its images 🗺️
    * @category Map management
    * @group Map
    
    
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetActiveMapImgRaw RoboccDocs} for further information
    */
    GetActiveMapImgRaw() {
        return this.callService(ServiceOperationCode.GetActiveMapImgRaw, null);
    }
    /**
    * **Get map elements**
    *
    * Get map elements for given map's ID
    * @category Map management
    * @group Map
    
    * @param map_id id map
    
    * @data {@link MapElements}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetMapElements RoboccDocs} for further information
    */
    GetMapElements(map_id) {
        return this.callService(ServiceOperationCode.GetMapElements, map_id);
    }
    /**
    * **Get active map elements**
    *
    * Get map elements for active map
    * @category Map management
    * @group Map
    
    
    
    * @data {@link MapElements}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetActiveMapElements RoboccDocs} for further information
    */
    GetActiveMapElements() {
        return this.callService(ServiceOperationCode.GetActiveMapElements, null);
    }
    /**
    * **Get map without images**
    *
    * Get map without images for given map's ID 🗺️
    * @category Map management
    * @group Map
    
    * @param map_id id map
    
    * @data {@link MapWithoutImages}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetMapWithoutImages RoboccDocs} for further information
    */
    GetMapWithoutImages(map_id) {
        return this.callService(ServiceOperationCode.GetMapWithoutImages, map_id);
    }
    /**
    * **Get active map without images**
    *
    * Get map without images for active map 🗺️
    * @category Map management
    * @group Map
    
    
    
    * @data {@link MapWithoutImages}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetActiveMapWithoutImages RoboccDocs} for further information
    */
    GetActiveMapWithoutImages() {
        return this.callService(ServiceOperationCode.GetActiveMapWithoutImages, null);
    }
    /**
    * **Delete site**
    *
    * Delete site via its ID 🗑
    * @category Site management
    * @group Map
    
    * @param id_site Id site
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteSite RoboccDocs} for further information
    */
    DeleteSite(id_site) {
        return this.callService(ServiceOperationCode.DeleteSite, id_site);
    }
    /**
    * **Delete map**
    *
    * Delete map via its ID 🗑
    * @category Map management
    * @group Map
    
    * @param id_map Id map
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteMap RoboccDocs} for further information
    */
    DeleteMap(id_map) {
        return this.callService(ServiceOperationCode.DeleteMap, id_map);
    }
    /**
    * **Set charging station**
    *
    * Set a charging station by giving all its attributes. Set id to -1 to create a new one
    * @category Charging station
    * @group Map
    
    * @param charging_station Charging station
    
    * @data {@link SetChargingStationResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetChargingStation RoboccDocs} for further information
    */
    SetChargingStation(charging_station) {
        return this.callService(ServiceOperationCode.SetChargingStation, charging_station);
    }
    /**
    * **Set saved pose**
    *
    * Set a saved pose by giving all its attributes. Set id to -1 to create a new one
    * @category Saved pose
    * @group Map
    
    * @param saved_pose Saved pose
    
    * @data {@link SetSavedPoseResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetSavedPose RoboccDocs} for further information
    */
    SetSavedPose(saved_pose) {
        return this.callService(ServiceOperationCode.SetSavedPose, saved_pose);
    }
    /**
    * **Set docked pose**
    *
    * Set a docked pose by giving all its attributes. Set id to -1 to create a new one
    * @category Docked pose
    * @group Map
    
    * @param docked_pose Docked pose,
    
    * @data {@link SetDockedPoseResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetDockedPose RoboccDocs} for further information
    */
    SetDockedPose(docked_pose) {
        return this.callService(ServiceOperationCode.SetDockedPose, docked_pose);
    }
    /**
    * **Set forbidden area**
    *
    * Set a forbidden area by giving all its attributes. Set id to -1 to create a new one
    * @category Forbidden area
    * @group Map
    
    * @param forbidden_area Forbidden area
    
    * @data {@link SetForbiddenAreaResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetForbiddenArea RoboccDocs} for further information
    */
    SetForbiddenArea(forbidden_area) {
        return this.callService(ServiceOperationCode.SetForbiddenArea, forbidden_area);
    }
    /**
    * **Set custom area**
    *
    * Set a custom area by giving all its attributes. Set id to -1 to create a new one
    * @category Custom area
    * @group Map
    
    * @param custom_area Custom area
    
    * @data {@link SetCustomAreaResult}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetCustomArea RoboccDocs} for further information
    */
    SetCustomArea(custom_area) {
        return this.callService(ServiceOperationCode.SetCustomArea, custom_area);
    }
    /**
    * **Delete charging station**
    *
    * Delete charging station via its ID 🗑
    * @category Charging station
    * @group Map
    
    * @param charging_station Id charging station
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteChargingStation RoboccDocs} for further information
    */
    DeleteChargingStation(charging_station) {
        return this.callService(ServiceOperationCode.DeleteChargingStation, charging_station);
    }
    /**
    * **Delete saved pose**
    *
    * Delete saved pose via its ID 🗑
    * @category Saved pose
    * @group Map
    
    * @param saved_pose_id Id saved pose
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteSavedPose RoboccDocs} for further information
    */
    DeleteSavedPose(saved_pose_id) {
        return this.callService(ServiceOperationCode.DeleteSavedPose, saved_pose_id);
    }
    /**
    * **Delete docked pose**
    *
    * Delete docked pose via its ID 🗑
    * @category Docked pose
    * @group Map
    
    * @param docked_pose_id Id docked pose
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteDockedPose RoboccDocs} for further information
    */
    DeleteDockedPose(docked_pose_id) {
        return this.callService(ServiceOperationCode.DeleteDockedPose, docked_pose_id);
    }
    /**
    * **Delete forbidden area**
    *
    * Delete forbidden area via its ID 🗑
    * @category Forbidden area
    * @group Map
    
    * @param forbidden_area_id Id forbidden area
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteForbiddenArea RoboccDocs} for further information
    */
    DeleteForbiddenArea(forbidden_area_id) {
        return this.callService(ServiceOperationCode.DeleteForbiddenArea, forbidden_area_id);
    }
    /**
    * **Delete custom area**
    *
    * Delete custom area via its ID 🗑
    * @category Custom area
    * @group Map
    
    * @param custom_area_id Id custom area
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteCustomArea RoboccDocs} for further information
    */
    DeleteCustomArea(custom_area_id) {
        return this.callService(ServiceOperationCode.DeleteCustomArea, custom_area_id);
    }
    /**
    * **Check pose**
    *
    * Check if a pose is correct for vehicle in its current map. If no pose provided it will check vehicle's current pose 🔍
    * @category Map management
    * @group Map
    
    * @param check_pose_data Pose parameters. Don't send params to use the current robot pose
    
    * @data {@link boolean}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#CheckPose RoboccDocs} for further information
    */
    CheckPose(check_pose_data) {
        return this.callService(ServiceOperationCode.CheckPose, check_pose_data);
    }
    /**
    * **Check 3D box**
    *
    * Check if a box is free
    * @category Navigation
    * @group Navigation
    
    * @param check_pose_data Pose parameters. Don't send params to use the current robot pose
    
    * @data {@link boolean}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#Check3dBox RoboccDocs} for further information
    */
    Check3dBox(check_pose_data) {
        return this.callService(ServiceOperationCode.Check3dBox, check_pose_data);
    }
    /**
    * **Simulation - Reset gazebo world 🔄**
    *
    * Reset simulation world
    * @category Simulation
    * @group Simulation
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SimResetWord RoboccDocs} for further information
    */
    SimResetWord() {
        return this.callService(ServiceOperationCode.SimResetWord, null);
    }
    /**
    * **Simulation - Add shelf**
    *
    * Add shelf in simulation world
    * @category Simulation
    * @group Simulation
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SimAddShelf RoboccDocs} for further information
    */
    SimAddShelf(d) {
        return this.callService(ServiceOperationCode.SimAddShelf, d);
    }
    /**
    * **Simulation - Clear shelfs**
    *
    * Clear shelfs in simulation world
    * @category Simulation
    * @group Simulation
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SimClearShelf RoboccDocs} for further information
    */
    SimClearShelf() {
        return this.callService(ServiceOperationCode.SimClearShelf, null);
    }
    /**
    * **Get module data**
    *
    * Get module data that are stored in the vehicle. The module can use this to store any data it wishes 💾
    * @category Module
    * @group Module
    
    
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetModuleData RoboccDocs} for further information
    */
    GetModuleData() {
        return this.callService(ServiceOperationCode.GetModuleData, null);
    }
    /**
    * **Set module data**
    *
    * Set module data that are stored in the vehicle. The module can use this to store any data it wishes 💾
    * @category Module
    * @group Module
    
    * @param module_data Data
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetModuleData RoboccDocs} for further information
    */
    SetModuleData(module_data) {
        return this.callService(ServiceOperationCode.SetModuleData, module_data);
    }
    /**
    * **Get internal data**
    *
    * Get internal data that are stored in the vehicle. API client can use this to store any data it wishes 💾
    * @category Internal data
    * @group Internal
    
    
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetInternalData RoboccDocs} for further information
    */
    GetInternalData() {
        return this.callService(ServiceOperationCode.GetInternalData, null);
    }
    /**
    * **Set internal data**
    *
    * Set internal data that are stored in the vehicle. API client can use this to store any data it wishes 💾
    * @category Internal data
    * @group Internal
    
    * @param internal_data Data
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetInternalData RoboccDocs} for further information
    */
    SetInternalData(internal_data) {
        return this.callService(ServiceOperationCode.SetInternalData, internal_data);
    }
    /**
    * **Start cycle**
    *
    * Allow vehicle to move, need to be called at vehicle start or end of maintenance ▶
    * @category Maintenance
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#StartCycle RoboccDocs} for further information
    */
    StartCycle() {
        return this.callService(ServiceOperationCode.StartCycle, null);
    }
    /**
    * **Set car mode on leds**
    *
    * Enable or disable car mode (front LED corners in white, back LED corners in red) 🚗
    * @category LED
    * @group Vehicle
    
    * @param enable Mode on
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetCarMode RoboccDocs} for further information
    */
    SetCarMode(enable) {
        return this.callService(ServiceOperationCode.SetCarMode, enable);
    }
    /**
    * **Set custom led**
    *
    * Set a custom LED display by giving a led animation, a color (optional depending on animation), an optional duration for the custom display 🚥
    * @category LED
    * @group Vehicle
    
    * @param led_cmd Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetCustomLed RoboccDocs} for further information
    */
    SetCustomLed(led_cmd) {
        return this.callService(ServiceOperationCode.SetCustomLed, led_cmd);
    }
    /**
    * **Set custom sound**
    *
    * Set a custom sound action by giving a sound sample, an optional volume between 0 and 100, an optional loop number to repeat the sample, and an optional loop delay to define the duration between each loop 🔉
    * @category Sound
    * @group Vehicle
    
    * @param sound_cmd Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetCustomSound RoboccDocs} for further information
    */
    SetCustomSound(sound_cmd) {
        return this.callService(ServiceOperationCode.SetCustomSound, sound_cmd);
    }
    /**
    * **Stop navigation**
    *
    * Stop the navigation on the vehicle, it will no longer be able to move autonomously ⛔
    * @category Navigation
    * @group Navigation
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#NavigationStop RoboccDocs} for further information
    */
    NavigationStop() {
        return this.callService(ServiceOperationCode.NavigationStop, null);
    }
    /**
    * **Get software version**
    *
    * Get the version of the vehicle's software
    * @category Version
    * @group Vehicle
    
    
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetSoftVersion RoboccDocs} for further information
    */
    GetSoftVersion() {
        return this.callService(ServiceOperationCode.GetSoftVersion, null);
    }
    /**
    * **Simulation - Set robot power consumption**
    *
    * Set the power consumption of the battery in simulation for developement purpose 🔌
    * @category Simulation
    * @group Simulation
    
    * @param power_consumption Power consumption
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SimBatterySetPowerConsumption RoboccDocs} for further information
    */
    SimBatterySetPowerConsumption(power_consumption) {
        return this.callService(ServiceOperationCode.SimBatterySetPowerConsumption, power_consumption);
    }
    /**
    * **Simulation - Set charge power delivery**
    *
    * Set the charge power delivered by the fake charging stations in simulation for developement purpose 🔌
    * @category Simulation
    * @group Simulation
    
    * @param charge_power_delivery Charge power delivery
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SimBatterySetChargePower RoboccDocs} for further information
    */
    SimBatterySetChargePower(charge_power_delivery) {
        return this.callService(ServiceOperationCode.SimBatterySetChargePower, charge_power_delivery);
    }
    /**
    * **Simulation - Set battery percentage**
    *
    * Set the battery percentage in simulation for developement purpose 🔋
    * @category Simulation
    * @group Simulation
    
    * @param battery_percentage Battery percentage
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SimBatterySetPercentage RoboccDocs} for further information
    */
    SimBatterySetPercentage(battery_percentage) {
        return this.callService(ServiceOperationCode.SimBatterySetPercentage, battery_percentage);
    }
    /**
    * **Simulation - Set charger of charging stations on**
    *
    * Enable or disable power on the fake charging stations in simulation for developement purpose 🔌
    * @category Simulation
    * @group Simulation
    
    * @param battery_charging Charger is on
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SimBatterySetChargerOn RoboccDocs} for further information
    */
    SimBatterySetChargerOn(battery_charging) {
        return this.callService(ServiceOperationCode.SimBatterySetChargerOn, battery_charging);
    }
    /**
    * **Set maintenance mode**
    *
    * Enable or disable maintenance mode that blocks module orders but allows teleop and configuration application orders. Required for some API orders 🚧
    * @category Maintenance
    * @group Vehicle
    
    * @param enable Mode maintenance on
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetMaintenanceMode RoboccDocs} for further information
    */
    SetMaintenanceMode(enable) {
        return this.callService(ServiceOperationCode.SetMaintenanceMode, enable);
    }
    /**
    * **Set prohibit movement**
    *
    * Set this to prohibit all movements of vehicle. Only callable from module 🚫
    * @category Navigation
    * @group Navigation
    
    * @param enable Prohibit movement
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetProhibitMovement RoboccDocs} for further information
    */
    SetProhibitMovement(enable) {
        return this.callService(ServiceOperationCode.SetProhibitMovement, enable);
    }
    /**
    * **Simulation - Set diff driver state**
    *
    * Set diff drive state in simulation to simulate some vehicule errors
    * @category Simulation
    * @group Simulation
    
    * @param diff_drive_state Diff driver state
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SimSetDiffDriveState RoboccDocs} for further information
    */
    SimSetDiffDriveState(diff_drive_state) {
        return this.callService(ServiceOperationCode.SimSetDiffDriveState, diff_drive_state);
    }
    /**
    * **Set Hotspot passowrd**
    *
    * Set vehicle the password for the emitted wifi hotspot 🛜
    * @category Network
    * @group Vehicle
    
    * @param password New password
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#NetworkHotspotSetPassword RoboccDocs} for further information
    */
    NetworkHotspotSetPassword(password) {
        return this.callService(ServiceOperationCode.NetworkHotspotSetPassword, password);
    }
    /**
    * **Wifi list APs**
    *
    * List all detected Wi-Fi access points by the vehicle. This doesn't trigger a scan so list can be outdated. See network_wan_scan_aps 🛜
    * @category Network
    * @group Vehicle
    
    
    
    * @data {@link WifiAp}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#NetworkWifiListAps RoboccDocs} for further information
    */
    NetworkWifiListAps() {
        return this.callService(ServiceOperationCode.NetworkWifiListAps, null);
    }
    /**
    * **Get vehicle elements list**
    *
    * Get all vehicle elements
    * @category Diagnostic
    * @group Vehicle
    
    
    
    * @data {@link DiagnosticElement}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetElementsList RoboccDocs} for further information
    */
    GetElementsList() {
        return this.callService(ServiceOperationCode.GetElementsList, null);
    }
    /**
    * **Set autopilot config**
    *
    * Set autopilot sequence
    * @category Autopilot
    * @group Navigation
    
    * @param sequence Configuration
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AutopilotSetConfig RoboccDocs} for further information
    */
    AutopilotSetConfig(sequence) {
        return this.callService(ServiceOperationCode.AutopilotSetConfig, sequence);
    }
    /**
    * **Start autopilot**
    *
    * Start configured autopilot sequence ▶
    * @category Autopilot
    * @group Navigation
    
    * @param resume Resume
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AutopilotStart RoboccDocs} for further information
    */
    AutopilotStart(resume) {
        return this.callService(ServiceOperationCode.AutopilotStart, resume);
    }
    /**
    * **Stop autopilot**
    *
    * Stop current autopilot sequence ⏹
    * @category Autopilot
    * @group Navigation
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AutopilotStop RoboccDocs} for further information
    */
    AutopilotStop() {
        return this.callService(ServiceOperationCode.AutopilotStop, null);
    }
    /**
    * **Set scenario sound maximum volumes**
    *
    * Set maximum volume between 0 and 100 for each vehicle's sound scenarios 🔊
    * @category Sound
    * @group Vehicle
    
    * @param sound_scenarios Array of scenarios and associated volumes
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetScenarioSoundMaxVolume RoboccDocs} for further information
    */
    SetScenarioSoundMaxVolume(sound_scenarios) {
        return this.callService(ServiceOperationCode.SetScenarioSoundMaxVolume, sound_scenarios);
    }
    /**
    * **Get scenario sound maximum volumes**
    *
    * Get maximum volume between 0 and 100 for each vehicle's sound scenarios 🔊
    * @category Sound
    * @group Vehicle
    
    
    
    * @data {@link SoundScenarioVolume}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetScenarioSoundMaxVolume RoboccDocs} for further information
    */
    GetScenarioSoundMaxVolume() {
        return this.callService(ServiceOperationCode.GetScenarioSoundMaxVolume, null);
    }
    /**
    * **Set scenario sample**
    *
    * Set sample for each vehicle's sound scenarios 🔊
    * @category Sound
    * @group Vehicle
    
    * @param sound_samples Array of scenarios and associated samples
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetScenarioSoundSamples RoboccDocs} for further information
    */
    SetScenarioSoundSamples(sound_samples) {
        return this.callService(ServiceOperationCode.SetScenarioSoundSamples, sound_samples);
    }
    /**
    * **Get scenario sound sample**
    *
    * Get sample for each vehicle's sound scenarios 🔊
    * @category Sound
    * @group Vehicle
    
    
    
    * @data {@link SoundScenarioSample}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetScenarioSoundSamples RoboccDocs} for further information
    */
    GetScenarioSoundSamples() {
        return this.callService(ServiceOperationCode.GetScenarioSoundSamples, null);
    }
    /**
    * **Set module parameters**
    *
    * Set dynamically module parameters, i.e. max speed, height and weight ⚙
    * @category Module
    * @group Module
    
    * @param module_params Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetModuleParams RoboccDocs} for further information
    */
    SetModuleParams(module_params) {
        return this.callService(ServiceOperationCode.SetModuleParams, module_params);
    }
    /**
    * **Network redirect port**
    *
    * Start or stop redirect port form noeme to ip
    * @category Network
    * @group Vehicle
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#NetworkRedirectPort RoboccDocs} for further information
    */
    NetworkRedirectPort(d) {
        return this.callService(ServiceOperationCode.NetworkRedirectPort, d);
    }
    /**
    * **Set camera streaming**
    *
    * Start streaming front and back camera video stream over WebRTC
    * @category Teleop
    * @group Vehicle
    
    * @param d Enable or disable streaming
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#CameraStreaming RoboccDocs} for further information
    */
    CameraStreaming(d) {
        return this.callService(ServiceOperationCode.CameraStreaming, d);
    }
    /**
    * **Force system update**
    *
    * Force a system update
    * @category Version
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ForceUpdate RoboccDocs} for further information
    */
    ForceUpdate() {
        return this.callService(ServiceOperationCode.ForceUpdate, null);
    }
    /**
    * **Set automatic updates**
    *
    * Enable/disable automatic update
    * @category Version
    * @group Vehicle
    
    * @param enable Enable/disable
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetAutomaticUpdates RoboccDocs} for further information
    */
    SetAutomaticUpdates(enable) {
        return this.callService(ServiceOperationCode.SetAutomaticUpdates, enable);
    }
    /**
    * **Enable dynamic filters**
    *
    * Enable/disable dynamic filters
    * @category Module
    * @group Vehicle
    
    * @param enable Enable/disable
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#EnableDynamicFilters RoboccDocs} for further information
    */
    EnableDynamicFilters(enable) {
        return this.callService(ServiceOperationCode.EnableDynamicFilters, enable);
    }
    /**
    * **Restart system**
    *
    * Restart the system
    * @category System
    * @group Vehicle
    
    * @param d Parameters for restart
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SystemRestart RoboccDocs} for further information
    */
    SystemRestart(d) {
        return this.callService(ServiceOperationCode.SystemRestart, d);
    }
    /**
    * **Request firmware flash of Roboteq**
    *
    * Will request a flash of the firmware of the roboteq motor controller at next reboot
    * @category System
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SystemRequestFlashRoboteq RoboccDocs} for further information
    */
    SystemRequestFlashRoboteq() {
        return this.callService(ServiceOperationCode.SystemRequestFlashRoboteq, null);
    }
    /**
    * **Request firmware flash of MCU**
    *
    * Will request a flash of the firmware of the Teensy/Pico
    * @category System
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SystemRequestFlashMcu RoboccDocs} for further information
    */
    SystemRequestFlashMcu() {
        return this.callService(ServiceOperationCode.SystemRequestFlashMcu, null);
    }
    /**
    * **Get shelves around the vehicle**
    *
    * Get list of shelves relative to the vehicle
    * @category Marker
    * @group Map
    
    * @param d Shelf size
    
    * @data {@link Pose}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetShelves RoboccDocs} for further information
    */
    GetShelves(d) {
        return this.callService(ServiceOperationCode.GetShelves, d);
    }
    /**
    * **Set security configuration**
    *
    * Set security configuration
    * @category System
    * @group Vehicle
    
    * @param d Security configuration
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetSecurity RoboccDocs} for further information
    */
    SetSecurity(d) {
        return this.callService(ServiceOperationCode.SetSecurity, d);
    }
    /**
    * **Delete sound**
    *
    * Delete sound from library
    * @category Sound
    * @group Database
    
    * @param d Name of sound to delete
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteSound RoboccDocs} for further information
    */
    DeleteSound(d) {
        return this.callService(ServiceOperationCode.DeleteSound, d);
    }
    /**
    * **Add call button**
    *
    * Add call button
    * @category ROC Config
    * @group ROC
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AddCallButton RoboccDocs} for further information
    */
    AddCallButton(d) {
        return this.callService(ServiceOperationCode.AddCallButton, d);
    }
    /**
    * **Add restocking button**
    *
    * Add restocking button
    * @category Configuration
    * @group ROC
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AddRestockingButton RoboccDocs} for further information
    */
    AddRestockingButton(d) {
        return this.callService(ServiceOperationCode.AddRestockingButton, d);
    }
    /**
    * **Add multidestination button**
    *
    * Add multidestination button
    * @category Configuration
    * @group ROC
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AddMultidestinationButton RoboccDocs} for further information
    */
    AddMultidestinationButton(d) {
        return this.callService(ServiceOperationCode.AddMultidestinationButton, d);
    }
    /**
    * **Add ordered multidestination button**
    *
    * Add ordered multidestination button
    * @category Configuration
    * @group ROC
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AddOrderedMultidestinationButton RoboccDocs} for further information
    */
    AddOrderedMultidestinationButton(d) {
        return this.callService(ServiceOperationCode.AddOrderedMultidestinationButton, d);
    }
    /**
    * **Update button**
    *
    * Update button
    * @category Configuration
    * @group ROC
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#UpdateButton RoboccDocs} for further information
    */
    UpdateButton(d) {
        return this.callService(ServiceOperationCode.UpdateButton, d);
    }
    /**
    * **Delete button**
    *
    * Delete button
    * @category Configuration
    * @group ROC
    
    * @param d Button LoRa ID
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteButton RoboccDocs} for further information
    */
    DeleteButton(d) {
        return this.callService(ServiceOperationCode.DeleteButton, d);
    }
    /**
    * **Add vehicle**
    *
    * Add vehicle
    * @category Configuration
    * @group ROC
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AddVeh RoboccDocs} for further information
    */
    AddVeh(d) {
        return this.callService(ServiceOperationCode.AddVeh, d);
    }
    /**
    * **Delete vehicle**
    *
    * Delete vehicle
    * @category Configuration
    * @group ROC
    
    * @param d Vehicle LoRa ID
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteVeh RoboccDocs} for further information
    */
    DeleteVeh(d) {
        return this.callService(ServiceOperationCode.DeleteVeh, d);
    }
    /**
    * **Set module is vehicle**
    *
    * Set module is vehicle
    * @category Configuration
    * @group ROC
    
    * @param d Is vehicle
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetIsVeh RoboccDocs} for further information
    */
    SetIsVeh(d) {
        return this.callService(ServiceOperationCode.SetIsVeh, d);
    }
    /**
    * **Set module is manager**
    *
    * Set module is manager
    * @category Configuration
    * @group ROC
    
    * @param d Is manager
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetIsManager RoboccDocs} for further information
    */
    SetIsManager(d) {
        return this.callService(ServiceOperationCode.SetIsManager, d);
    }
    /**
    * **Set module type**
    *
    * Set module type
    * @category Configuration
    * @group Vehicle
    
    * @param d Module type
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetModuleType RoboccDocs} for further information
    */
    SetModuleType(d) {
        return this.callService(ServiceOperationCode.SetModuleType, d);
    }
    /**
    * **Set vehicle direction**
    *
    * Set vehicle direction
    * @category Configuration
    * @group Vehicle
    
    * @param d Vehicle direction
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetVehDirection RoboccDocs} for further information
    */
    SetVehDirection(d) {
        return this.callService(ServiceOperationCode.SetVehDirection, d);
    }
    /**
    * **Set dock direction**
    *
    * Set dock direction
    * @category Configuration
    * @group Vehicle
    
    * @param d Dock direction
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetDockDirection RoboccDocs} for further information
    */
    SetDockDirection(d) {
        return this.callService(ServiceOperationCode.SetDockDirection, d);
    }
    /**
    * **Release shelf on top**
    *
    * Release shelf on top
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ReleaseShelf RoboccDocs} for further information
    */
    ReleaseShelf() {
        return this.callService(ServiceOperationCode.ReleaseShelf, null);
    }
    /**
    * **Release shelf on top and release misison**
    *
    * Release shelf on top and release misison
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ReleaseShelfAndRelease RoboccDocs} for further information
    */
    ReleaseShelfAndRelease() {
        return this.callService(ServiceOperationCode.ReleaseShelfAndRelease, null);
    }
    /**
    * **Set module LoRa ID**
    *
    * Set module LoRa ID
    * @category Configuration
    * @group Vehicle
    
    * @param d LoRa ID
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetIdModule RoboccDocs} for further information
    */
    SetIdModule(d) {
        return this.callService(ServiceOperationCode.SetIdModule, d);
    }
    /**
    * **Set LoRa SP**
    *
    * Set LoRa SP
    * @category Configuration
    * @group ROC
    
    * @param d LoRA SP
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetLoraSp RoboccDocs} for further information
    */
    SetLoraSp(d) {
        return this.callService(ServiceOperationCode.SetLoraSp, d);
    }
    /**
    * **Add waiting pose**
    *
    * Add waiting pose
    * @category Configuration
    * @group ROC
    
    * @param d Waiting pose
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AddWaitingPose RoboccDocs} for further information
    */
    AddWaitingPose(d) {
        return this.callService(ServiceOperationCode.AddWaitingPose, d);
    }
    /**
    * **Update waiting pose**
    *
    * Update waiting pose
    * @category Configuration
    * @group ROC
    
    * @param d Waiting pose
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#UpdateWaitingPose RoboccDocs} for further information
    */
    UpdateWaitingPose(d) {
        return this.callService(ServiceOperationCode.UpdateWaitingPose, d);
    }
    /**
    * **Delete waiting pose**
    *
    * Delete waiting pose
    * @category Configuration
    * @group ROC
    
    * @param d Saved pose Uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteWaitingPose RoboccDocs} for further information
    */
    DeleteWaitingPose(d) {
        return this.callService(ServiceOperationCode.DeleteWaitingPose, d);
    }
    /**
    * **Add port redirection**
    *
    * Add port redirection
    * @category Configuration
    * @group ROC
    
    * @param d Port redirection
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AddPortRedirection RoboccDocs} for further information
    */
    AddPortRedirection(d) {
        return this.callService(ServiceOperationCode.AddPortRedirection, d);
    }
    /**
    * **Update port redirection**
    *
    * Update port redirection
    * @category Configuration
    * @group ROC
    
    * @param d Port redirection
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#UpdatePortRedirection RoboccDocs} for further information
    */
    UpdatePortRedirection(d) {
        return this.callService(ServiceOperationCode.UpdatePortRedirection, d);
    }
    /**
    * **Delete port redirection**
    *
    * Delete port redirection
    * @category Configuration
    * @group ROC
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeletePortRedirection RoboccDocs} for further information
    */
    DeletePortRedirection(d) {
        return this.callService(ServiceOperationCode.DeletePortRedirection, d);
    }
    /**
    * **Add custom command**
    *
    * Add custom command
    * @category Configuration
    * @group ROC
    
    * @param d Custom command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AddCustomCommand RoboccDocs} for further information
    */
    AddCustomCommand(d) {
        return this.callService(ServiceOperationCode.AddCustomCommand, d);
    }
    /**
    * **Update custom command**
    *
    * Update custom command
    * @category Configuration
    * @group ROC
    
    * @param d Custom command
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#UpdateCustomCommand RoboccDocs} for further information
    */
    UpdateCustomCommand(d) {
        return this.callService(ServiceOperationCode.UpdateCustomCommand, d);
    }
    /**
    * **Delete custom command**
    *
    * Delete custom command
    * @category Configuration
    * @group ROC
    
    * @param d Saved pose uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteCustomCommand RoboccDocs} for further information
    */
    DeleteCustomCommand(d) {
        return this.callService(ServiceOperationCode.DeleteCustomCommand, d);
    }
    /**
    * **Add controller LoRa**
    *
    * Add controller LoRa
    * @category Configuration
    * @group ROC
    
    * @param d Controller LoRa
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AddControllerLora RoboccDocs} for further information
    */
    AddControllerLora(d) {
        return this.callService(ServiceOperationCode.AddControllerLora, d);
    }
    /**
    * **Update controller LoRa**
    *
    * Update controller LoRa
    * @category Configuration
    * @group ROC
    
    * @param d Controller LoRa
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#UpdateControllerLora RoboccDocs} for further information
    */
    UpdateControllerLora(d) {
        return this.callService(ServiceOperationCode.UpdateControllerLora, d);
    }
    /**
    * **Delete controller LoRa**
    *
    * Delete controller LoRa
    * @category Configuration
    * @group ROC
    
    * @param d Saved pose Uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteControllerLora RoboccDocs} for further information
    */
    DeleteControllerLora(d) {
        return this.callService(ServiceOperationCode.DeleteControllerLora, d);
    }
    /**
    * **Add map element restriction**
    *
    * Add map element restriction
    * @category Configuration
    * @group ROC
    
    * @param d Map element restriction
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AddMapElementRestriction RoboccDocs} for further information
    */
    AddMapElementRestriction(d) {
        return this.callService(ServiceOperationCode.AddMapElementRestriction, d);
    }
    /**
    * **Update map element restriction**
    *
    * Update map element restriction
    * @category Configuration
    * @group ROC
    
    * @param d Map element restriction
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#UpdateMapElementRestriction RoboccDocs} for further information
    */
    UpdateMapElementRestriction(d) {
        return this.callService(ServiceOperationCode.UpdateMapElementRestriction, d);
    }
    /**
    * **Delete map element restriction**
    *
    * Delete map element restriction
    * @category Configuration
    * @group ROC
    
    * @param d Uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteMapElementRestriction RoboccDocs} for further information
    */
    DeleteMapElementRestriction(d) {
        return this.callService(ServiceOperationCode.DeleteMapElementRestriction, d);
    }
    /**
    * **Add ROC docked pose configuration**
    *
    * Add ROC docked pose configuration
    * @category Configuration
    * @group ROC
    
    * @param d Docked pose config
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AddRocDockedPoseConfig RoboccDocs} for further information
    */
    AddRocDockedPoseConfig(d) {
        return this.callService(ServiceOperationCode.AddRocDockedPoseConfig, d);
    }
    /**
    * **Update ROC docked pose configuration**
    *
    * Update ROC docked pose configuration
    * @category Configuration
    * @group ROC
    
    * @param d Docked pose config
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#UpdateRocDockedPoseConfig RoboccDocs} for further information
    */
    UpdateRocDockedPoseConfig(d) {
        return this.callService(ServiceOperationCode.UpdateRocDockedPoseConfig, d);
    }
    /**
    * **Delete ROC docked pose configuration**
    *
    * Delete ROC docked pose configuration
    * @category Configuration
    * @group ROC
    
    * @param d Uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteRocDockedPoseConfig RoboccDocs} for further information
    */
    DeleteRocDockedPoseConfig(d) {
        return this.callService(ServiceOperationCode.DeleteRocDockedPoseConfig, d);
    }
    /**
    * **Add ROC map element configuration**
    *
    * Add ROC map element configuration
    * @category Configuration
    * @group ROC
    
    * @param d Map element config
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AddRocMapElementConfig RoboccDocs} for further information
    */
    AddRocMapElementConfig(d) {
        return this.callService(ServiceOperationCode.AddRocMapElementConfig, d);
    }
    /**
    * **Update ROC map element configuration**
    *
    * Update ROC map element configuration
    * @category Configuration
    * @group ROC
    
    * @param d Map element config
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#UpdateRocMapElementConfig RoboccDocs} for further information
    */
    UpdateRocMapElementConfig(d) {
        return this.callService(ServiceOperationCode.UpdateRocMapElementConfig, d);
    }
    /**
    * **Delete ROC map element configuration**
    *
    * Delete ROC map element configuration
    * @category Configuration
    * @group ROC
    
    * @param d Uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteRocMapElementConfig RoboccDocs} for further information
    */
    DeleteRocMapElementConfig(d) {
        return this.callService(ServiceOperationCode.DeleteRocMapElementConfig, d);
    }
    /**
    * **Get contacts's configuration of a LoRa controller**
    *
    * Get contact's configuration of a LoRa controller
    * @category Configuration
    * @group ROC
    
    * @param d Controller id
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ControllerLoraGetContactsConfig RoboccDocs} for further information
    */
    ControllerLoraGetContactsConfig(d) {
        return this.callService(ServiceOperationCode.ControllerLoraGetContactsConfig, d);
    }
    /**
    * **Set contact's configuration of a LoRa controller**
    *
    * Set contact's configuration of a LoRa controller
    * @category Configuration
    * @group ROC
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ControllerLoraSetContactConfig RoboccDocs} for further information
    */
    ControllerLoraSetContactConfig(d) {
        return this.callService(ServiceOperationCode.ControllerLoraSetContactConfig, d);
    }
    /**
    * **Set predefined messages**
    *
    * Set predefined messages
    * @category Configuration
    * @group ROC
    
    * @param d Predefined messages
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetPredefinedMessages RoboccDocs} for further information
    */
    SetPredefinedMessages(d) {
        return this.callService(ServiceOperationCode.SetPredefinedMessages, d);
    }
    /**
    * **Set vehicle delay config**
    *
    * Set vehicle delay config
    * @category Configuration
    * @group Vehicle
    
    * @param d Delays
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetVehicleDelayConfig RoboccDocs} for further information
    */
    SetVehicleDelayConfig(d) {
        return this.callService(ServiceOperationCode.SetVehicleDelayConfig, d);
    }
    /**
    * **Set vehicle response deadline**
    *
    * Set vehicle response deadline
    * @category Configuration
    * @group Manager
    
    * @param d Response deadline in ms
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetVehicleResponseDeadline RoboccDocs} for further information
    */
    SetVehicleResponseDeadline(d) {
        return this.callService(ServiceOperationCode.SetVehicleResponseDeadline, d);
    }
    /**
    * **Set default response deadline**
    *
    * Set default response deadline
    * @category Configuration
    * @group Manager
    
    * @param d Response deadline in ms
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetDefaultResponseDeadline RoboccDocs} for further information
    */
    SetDefaultResponseDeadline(d) {
        return this.callService(ServiceOperationCode.SetDefaultResponseDeadline, d);
    }
    /**
    * **End mission**
    *
    * End mission
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#Release RoboccDocs} for further information
    */
    Release() {
        return this.callService(ServiceOperationCode.Release, null);
    }
    /**
    * **Next step mission**
    *
    * Next step mission
    * @category Mission
    * @group Vehicle
    
    * @param d Uuid of next step
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#NextStepMission RoboccDocs} for further information
    */
    NextStepMission(d) {
        return this.callService(ServiceOperationCode.NextStepMission, d);
    }
    /**
    * **Next step mission with message**
    *
    * Next step mission with message
    * @category Mission
    * @group Vehicle
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#NextStepMissionWithMessage RoboccDocs} for further information
    */
    NextStepMissionWithMessage(d) {
        return this.callService(ServiceOperationCode.NextStepMissionWithMessage, d);
    }
    /**
    * **End mission**
    *
    * End mission
    * @category Mission
    * @group Vehicle
    
    * @param d List of uuids of next steps
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#MultidestinationMission RoboccDocs} for further information
    */
    MultidestinationMission(d) {
        return this.callService(ServiceOperationCode.MultidestinationMission, d);
    }
    /**
    * **Pause move**
    *
    * Pause the current move
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#PauseMove RoboccDocs} for further information
    */
    PauseMove() {
        return this.callService(ServiceOperationCode.PauseMove, null);
    }
    /**
    * **Resume paused move**
    *
    * Resume the paused move
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ResumeMove RoboccDocs} for further information
    */
    ResumeMove() {
        return this.callService(ServiceOperationCode.ResumeMove, null);
    }
    /**
    * **Cancel paused move**
    *
    * Cancel the paused move
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#CancelMove RoboccDocs} for further information
    */
    CancelMove() {
        return this.callService(ServiceOperationCode.CancelMove, null);
    }
    /**
    * **Reboot ROC-E app**
    *
    * Reboot ROC-E app
    * @category App
    * @group ROC
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#Reboot RoboccDocs} for further information
    */
    Reboot() {
        return this.callService(ServiceOperationCode.Reboot, null);
    }
    /**
    * **Set in config mode**
    *
    * Set in config mode
    * @category Configuration
    * @group ROC
    
    * @param d In config mode
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetInConfigMode RoboccDocs} for further information
    */
    SetInConfigMode(d) {
        return this.callService(ServiceOperationCode.SetInConfigMode, d);
    }
    /**
    * **Set in maintenance mode**
    *
    * Set in maintenance mode
    * @category Configuration
    * @group ROC
    
    * @param d In maintenance mode
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetInMaintenanceMode RoboccDocs} for further information
    */
    SetInMaintenanceMode(d) {
        return this.callService(ServiceOperationCode.SetInMaintenanceMode, d);
    }
    /**
    * **Set touch screen**
    *
    * Set touch screen
    * @category Configuration
    * @group Vehicle
    
    * @param d Touch screen
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetTouchScreen RoboccDocs} for further information
    */
    SetTouchScreen(d) {
        return this.callService(ServiceOperationCode.SetTouchScreen, d);
    }
    /**
    * **Set allow move from dock**
    *
    * Set allow move from dock
    * @category Configuration
    * @group Vehicle
    
    * @param d Allow move from dock
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetAllowMoveFromDock RoboccDocs} for further information
    */
    SetAllowMoveFromDock(d) {
        return this.callService(ServiceOperationCode.SetAllowMoveFromDock, d);
    }
    /**
    * **Set allow multiple mission for the same button**
    *
    * Set allow multiple mission for the same button
    * @category Configuration
    * @group Manager
    
    * @param d Allow multiple mission for the same button
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetAllowMultipleMissions RoboccDocs} for further information
    */
    SetAllowMultipleMissions(d) {
        return this.callService(ServiceOperationCode.SetAllowMultipleMissions, d);
    }
    /**
    * **Set sleeping**
    *
    * Set module in sleeping mode
    * @category Mission
    * @group Vehicle
    
    * @param d Activate
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetModuleSleeping RoboccDocs} for further information
    */
    SetModuleSleeping(d) {
        return this.callService(ServiceOperationCode.SetModuleSleeping, d);
    }
    /**
    * **Set hibernate**
    *
    * Set module in hibernate mode
    * @category Mission
    * @group Vehicle
    
    * @param d Activate
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetModuleHibernate RoboccDocs} for further information
    */
    SetModuleHibernate(d) {
        return this.callService(ServiceOperationCode.SetModuleHibernate, d);
    }
    /**
    * **Set sleep screen**
    *
    * Set sleep screen
    * @category Mission
    * @group Vehicle
    
    * @param d Activate
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetSleepScreen RoboccDocs} for further information
    */
    SetSleepScreen(d) {
        return this.callService(ServiceOperationCode.SetSleepScreen, d);
    }
    /**
    * **Use external speaker**
    *
    * Use external speaker
    * @category Configuration
    * @group Vehicle
    
    * @param d Use external speaker
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#UseExternalSpeaker RoboccDocs} for further information
    */
    UseExternalSpeaker(d) {
        return this.callService(ServiceOperationCode.UseExternalSpeaker, d);
    }
    /**
    * **Set operating hours**
    *
    * Set operating hours
    * @category Mission
    * @group Vehicle
    
    * @param d Operating hours
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetOperatingHours RoboccDocs} for further information
    */
    SetOperatingHours(d) {
        return this.callService(ServiceOperationCode.SetOperatingHours, d);
    }
    /**
    * **Set HMI password**
    *
    * Set HMI password
    * @category Configuration
    * @group ROC
    
    * @param d New password
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetHmiPassword RoboccDocs} for further information
    */
    SetHmiPassword(d) {
        return this.callService(ServiceOperationCode.SetHmiPassword, d);
    }
    /**
    * **Check HMI password**
    *
    * Check HMI password
    * @category Configuration
    * @group ROC
    
    * @param d Password to check
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#CheckHmiPassword RoboccDocs} for further information
    */
    CheckHmiPassword(d) {
        return this.callService(ServiceOperationCode.CheckHmiPassword, d);
    }
    /**
    * **Set high priority**
    *
    * Set high priority
    * @category Mission
    * @group Manager
    
    * @param d Button LoRa ID
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetHighPriority RoboccDocs} for further information
    */
    SetHighPriority(d) {
        return this.callService(ServiceOperationCode.SetHighPriority, d);
    }
    /**
    * **Set normal priority**
    *
    * Set normal priority
    * @category Mission
    * @group Manager
    
    * @param d Button LoRa ID
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetNormalPriority RoboccDocs} for further information
    */
    SetNormalPriority(d) {
        return this.callService(ServiceOperationCode.SetNormalPriority, d);
    }
    /**
    * **Remove mission**
    *
    * Remove mission
    * @category Mission
    * @group Manager
    
    * @param d Button LoRa ID
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#RemoveMission RoboccDocs} for further information
    */
    RemoveMission(d) {
        return this.callService(ServiceOperationCode.RemoveMission, d);
    }
    /**
    * **Set multidestination**
    *
    * Set multidestination
    * @category Mission
    * @group Manager
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetMultidestination RoboccDocs} for further information
    */
    SetMultidestination(d) {
        return this.callService(ServiceOperationCode.SetMultidestination, d);
    }
    /**
    * **Set multidestination with messages**
    *
    * Set multidestination with messages
    * @category Mission
    * @group Manager
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetMultidestinationWithMessages RoboccDocs} for further information
    */
    SetMultidestinationWithMessages(d) {
        return this.callService(ServiceOperationCode.SetMultidestinationWithMessages, d);
    }
    /**
    * **Import configuration**
    *
    * Import configuration
    * @category Configuration
    * @group ROC
    
    * @param d File content
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ImportConfiguration RoboccDocs} for further information
    */
    ImportConfiguration(d) {
        return this.callService(ServiceOperationCode.ImportConfiguration, d);
    }
    /**
    * **Export configuration**
    *
    * Export configuration
    * @category Configuration
    * @group ROC
    
    
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ExportConfiguration RoboccDocs} for further information
    */
    ExportConfiguration() {
        return this.callService(ServiceOperationCode.ExportConfiguration, null);
    }
    /**
    * **Get stats**
    *
    * Get stats
    * @category Configuration
    * @group Stats
    
    * @param d
    
    * @data {@link StatsData}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetStats RoboccDocs} for further information
    */
    GetStats(d) {
        return this.callService(ServiceOperationCode.GetStats, d);
    }
    /**
    * **Get light stats**
    *
    * Get light stats
    * @category Configuration
    * @group Stats
    
    * @param d
    
    * @data {@link DailyStats}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetLightStats RoboccDocs} for further information
    */
    GetLightStats(d) {
        return this.callService(ServiceOperationCode.GetLightStats, d);
    }
    /**
    * **Export stats**
    *
    * Export stats
    * @category Configuration
    * @group Stats
    
    * @param d
    
    * @data {@link ExportedStats}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ExportStats RoboccDocs} for further information
    */
    ExportStats(d) {
        return this.callService(ServiceOperationCode.ExportStats, d);
    }
    /**
    * **Get list of maps for stats**
    *
    * Get list of maps for stats
    * @category Configuration
    * @group Stats
    
    
    
    * @data {@link Map}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetMapsForStats RoboccDocs} for further information
    */
    GetMapsForStats() {
        return this.callService(ServiceOperationCode.GetMapsForStats, null);
    }
    /**
    * **Get vehicles timeline**
    *
    * Get vehicles timeline
    * @category Configuration
    * @group Stats
    
    * @param d
    
    * @data {@link VehTimelineData}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetVehsTimeline RoboccDocs} for further information
    */
    GetVehsTimeline(d) {
        return this.callService(ServiceOperationCode.GetVehsTimeline, d);
    }
    /**
    * **Remise stats**
    *
    * Remise stats
    * @category Configuration
    * @group Stats
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ResetStats RoboccDocs} for further information
    */
    ResetStats() {
        return this.callService(ServiceOperationCode.ResetStats, null);
    }
    /**
    * **Move down the lift**
    *
    * Move down the lift
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#LiftMoveDown RoboccDocs} for further information
    */
    LiftMoveDown() {
        return this.callService(ServiceOperationCode.LiftMoveDown, null);
    }
    /**
    * **Move up the lift**
    *
    * Move up the lift
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#LiftMoveUp RoboccDocs} for further information
    */
    LiftMoveUp() {
        return this.callService(ServiceOperationCode.LiftMoveUp, null);
    }
    /**
    * **Stop the lift**
    *
    * Stop the lift
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#LiftStop RoboccDocs} for further information
    */
    LiftStop() {
        return this.callService(ServiceOperationCode.LiftStop, null);
    }
    /**
    * **Move the lift to the desired height**
    *
    * Move the lift to the desired height
    * @category Mission
    * @group Vehicle
    
    * @param d Desired height
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#LiftMoveTo RoboccDocs} for further information
    */
    LiftMoveTo(d) {
        return this.callService(ServiceOperationCode.LiftMoveTo, d);
    }
    /**
    * **Set tare height of lift**
    *
    * Set tare height of lift
    * @category Configuration
    * @group Vehicle
    
    * @param d Tare height
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#LiftSetTareHeight RoboccDocs} for further information
    */
    LiftSetTareHeight(d) {
        return this.callService(ServiceOperationCode.LiftSetTareHeight, d);
    }
    /**
    * **Set real height of lift**
    *
    * Set real height of lift
    * @category Configuration
    * @group Vehicle
    
    * @param d Real height
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#LiftSetRealHeight RoboccDocs} for further information
    */
    LiftSetRealHeight(d) {
        return this.callService(ServiceOperationCode.LiftSetRealHeight, d);
    }
    /**
    * **Stop retrying**
    *
    * Stop retrying
    * @category Mission
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#StopRetrying RoboccDocs} for further information
    */
    StopRetrying() {
        return this.callService(ServiceOperationCode.StopRetrying, null);
    }
    /**
    * **Add ROC user**
    *
    * Add ROC user
    * @category Configuration
    * @group ROC
    
    * @param d
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AddRocUser RoboccDocs} for further information
    */
    AddRocUser(d) {
        return this.callService(ServiceOperationCode.AddRocUser, d);
    }
    /**
    * **Update ROC user**
    *
    * Update ROC user
    * @category Configuration
    * @group ROC
    
    * @param d
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#UpdateRocUser RoboccDocs} for further information
    */
    UpdateRocUser(d) {
        return this.callService(ServiceOperationCode.UpdateRocUser, d);
    }
    /**
    * **Update ROC user**
    *
    * Remove ROC user
    * @category Configuration
    * @group ROC
    
    * @param d ID User
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#RemoveRocUser RoboccDocs} for further information
    */
    RemoveRocUser(d) {
        return this.callService(ServiceOperationCode.RemoveRocUser, d);
    }
    /**
    * **List ROC users**
    *
    * List ROC users
    * @category Configuration
    * @group ROC
    
    
    
    * @data {@link RocUser}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ListRocUsers RoboccDocs} for further information
    */
    ListRocUsers() {
        return this.callService(ServiceOperationCode.ListRocUsers, null);
    }
    /**
    * **Get ROC ID**
    *
    * Get ROC ID
    * @category Configuration
    * @group ROC
    
    
    
    * @data {@link string}
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetRocId RoboccDocs} for further information
    */
    GetRocId() {
        return this.callService(ServiceOperationCode.GetRocId, null);
    }
    /**
    * **Update soft versions**
    *
    * Update soft versions
    * @category Configuration
    * @group ROC
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#UpdateSoftVersions RoboccDocs} for further information
    */
    UpdateSoftVersions() {
        return this.callService(ServiceOperationCode.UpdateSoftVersions, null);
    }
    /**
    * **Hotspot set password**
    *
    * Hotspot set password
    * @category Configuration
    * @group Vehicle
    
    * @param d New password
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#HotspotSetPassword RoboccDocs} for further information
    */
    HotspotSetPassword(d) {
        return this.callService(ServiceOperationCode.HotspotSetPassword, d);
    }
    /**
    * **Enable Hotspot**
    *
    * Enable Hotspot
    * @category Configuration
    * @group Vehicle
    
    * @param d Enable
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#HotspotEnable RoboccDocs} for further information
    */
    HotspotEnable(d) {
        return this.callService(ServiceOperationCode.HotspotEnable, d);
    }
    /**
    * **Create new mission**
    *
    * Create new mission
    * @category Mission
    * @group Manager
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#CreateMission RoboccDocs} for further information
    */
    CreateMission(d) {
        return this.callService(ServiceOperationCode.CreateMission, d);
    }
    /**
    * **Create new mission**
    *
    * Create new mission
    * @category Mission
    * @group Manager
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ExtendMission RoboccDocs} for further information
    */
    ExtendMission(d) {
        return this.callService(ServiceOperationCode.ExtendMission, d);
    }
    /**
    * **Start button mission**
    *
    * Start button mission
    * @category Mission
    * @group Manager
    
    * @param d Parameters
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#StartButtonMission RoboccDocs} for further information
    */
    StartButtonMission(d) {
        return this.callService(ServiceOperationCode.StartButtonMission, d);
    }
    /**
    * **Release module**
    *
    * Release module
    * @category Mission
    * @group Manager
    
    * @param d Id module
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#ReleaseModule RoboccDocs} for further information
    */
    ReleaseModule(d) {
        return this.callService(ServiceOperationCode.ReleaseModule, d);
    }
    /**
    * **Add group**
    *
    * Add new group
    * @category Configuration
    * @group ROC
    
    * @param d Group
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AddGroup RoboccDocs} for further information
    */
    AddGroup(d) {
        return this.callService(ServiceOperationCode.AddGroup, d);
    }
    /**
    * **Update group**
    *
    * Update group
    * @category Configuration
    * @group ROC
    
    * @param d Group
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#UpdateGroup RoboccDocs} for further information
    */
    UpdateGroup(d) {
        return this.callService(ServiceOperationCode.UpdateGroup, d);
    }
    /**
    * **Delete group**
    *
    * Delete group
    * @category Configuration
    * @group ROC
    
    * @param d Main uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#DeleteGroup RoboccDocs} for further information
    */
    DeleteGroup(d) {
        return this.callService(ServiceOperationCode.DeleteGroup, d);
    }
    /**
    * **Sub step mission**
    *
    * Sub step mission for groups
    * @category Mission
    * @group Vehicle
    
    * @param d Sub step uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SubStepMission RoboccDocs} for further information
    */
    SubStepMission(d) {
        return this.callService(ServiceOperationCode.SubStepMission, d);
    }
    /**
    * **Force a system update of ROC**
    *
    * Force a system update of ROC
    * @category Version
    * @group Vehicle
    
    
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#RocSoftForceUpdate RoboccDocs} for further information
    */
    RocSoftForceUpdate() {
        return this.callService(ServiceOperationCode.RocSoftForceUpdate, null);
    }
    /**
    * **Set automatic updates for ROC**
    *
    * Enable/disable automatic update for ROC
    * @category Version
    * @group Vehicle
    
    * @param enable Enable/disable
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#RocSoftSetAutomaticUpdates RoboccDocs} for further information
    */
    RocSoftSetAutomaticUpdates(enable) {
        return this.callService(ServiceOperationCode.RocSoftSetAutomaticUpdates, enable);
    }
    /**
    * **Set tare module params**
    *
    * Set tare module params
    * @category Configuration
    * @group Vehicle
    
    * @param d
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetTareModuleParams RoboccDocs} for further information
    */
    SetTareModuleParams(d) {
        return this.callService(ServiceOperationCode.SetTareModuleParams, d);
    }
    /**
    * **Set loaded module params**
    *
    * Set loaded module params
    * @category Configuration
    * @group Vehicle
    
    * @param d
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetLoadedModuleParams RoboccDocs} for further information
    */
    SetLoadedModuleParams(d) {
        return this.callService(ServiceOperationCode.SetLoadedModuleParams, d);
    }
    /**
    * **Allow follow me**
    *
    * Allow follow me
    * @category Configuration
    * @group Vehicle
    
    * @param d Allow
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#AllowFollowMe RoboccDocs} for further information
    */
    AllowFollowMe(d) {
        return this.callService(ServiceOperationCode.AllowFollowMe, d);
    }
    /**
    * **Set max button id search**
    *
    * Set max button id search in config mode
    * @category Configuration
    * @group Vehicle
    
    * @param d Max button id
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetMaxButtonIdSearch RoboccDocs} for further information
    */
    SetMaxButtonIdSearch(d) {
        return this.callService(ServiceOperationCode.SetMaxButtonIdSearch, d);
    }
    /**
    * **Set default wait release sound**
    *
    * Set default wait release sound
    * @category Configuration
    * @group Vehicle
    
    * @param d Default sound
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetDefaultWaitReleaseSound RoboccDocs} for further information
    */
    SetDefaultWaitReleaseSound(d) {
        return this.callService(ServiceOperationCode.SetDefaultWaitReleaseSound, d);
    }
    /**
    * **Set manager active map**
    *
    * Set manager active map
    * @category Configuration
    * @group Manager
    
    * @param d Map uuid
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetManagerActiveMap RoboccDocs} for further information
    */
    SetManagerActiveMap(d) {
        return this.callService(ServiceOperationCode.SetManagerActiveMap, d);
    }
    /**
    * **Set manager active map**
    *
    * Set manager active map
    * @category Configuration
    * @group Manager
    
    
    
    * @data {@link ManagerMap}[]
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#GetManagerMapsList RoboccDocs} for further information
    */
    GetManagerMapsList() {
        return this.callService(ServiceOperationCode.GetManagerMapsList, null);
    }
    /**
    * **Set waiting sounds**
    *
    * Set list of waiting sound
    * @category Configuration
    * @group Vehicle
    
    * @param d Waiting sound list
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetWaitingSounds RoboccDocs} for further information
    */
    SetWaitingSounds(d) {
        return this.callService(ServiceOperationCode.SetWaitingSounds, d);
    }
    /**
    * **Set event sounds**
    *
    * Set list of event sound
    * @category Configuration
    * @group Vehicle
    
    * @param d Event sound list
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetEventsSounds RoboccDocs} for further information
    */
    SetEventsSounds(d) {
        return this.callService(ServiceOperationCode.SetEventsSounds, d);
    }
    /**
    * **Set ROC security**
    *
    * Set ROC security
    * @category Configuration
    * @group ROC
    
    * @param d Security
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/8.26.0-zeus-0/classes/RocApi.RocApi.html#SetRocSecurity RoboccDocs} for further information
    */
    SetRocSecurity(d) {
        return this.callService(ServiceOperationCode.SetRocSecurity, d);
    }
}
exports.ServicesMixin = ServicesMixin;
