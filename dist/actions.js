"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsMixin = exports.initActionOperationCallbacks = exports.actionFeedbackCode = exports.actionResultCode = exports.ActionOperationCode = void 0;
const events_1 = require("./events");
const types_1 = require("./types");
/* Enums for all actions */
/** @internal */
var ActionOperationCode;
(function (ActionOperationCode) {
    /**
      * **Check 3D box**
      *
      * Check if a box is free
      * @group Navigation
      * @category Navigation
      
      */
    ActionOperationCode[ActionOperationCode["Check3dBoxAction"] = 141] = "Check3dBoxAction";
    /**
      * **Simulation - Reset gazebo world 🔄**
      *
      * Clear all simulation world's elements (charging stations, fiducials, cylinders, shelves, and walls), create all map config's elements and walls in simulation world, and reset vehicle's position to the preferred charging station. Used to remove the elements that were added to simulation world, but that are not saved in map config (or deleted).
      * @group Simulation
      * @category Simulation
      
      */
    ActionOperationCode[ActionOperationCode["SimResetWorld"] = 100] = "SimResetWorld";
    /**
      * **Simulation - Add charging station**
      *
      * Add a charging station and its marker to simulation world, with marker ID and pose passed as goal (not added to map config)
      * @group Simulation
      * @category Simulation
      
      */
    ActionOperationCode[ActionOperationCode["SimAddChargingStation"] = 151] = "SimAddChargingStation";
    /**
      * **Simulation - Add charging station**
      *
      * Add a fiducial (i.e. a lidar marker and its support) to simulation world, with marker ID and pose passed as goal (not added to map config)
      * @group Simulation
      * @category Simulation
      
      */
    ActionOperationCode[ActionOperationCode["SimAddFiducial"] = 152] = "SimAddFiducial";
    /**
      * **Simulation - Add shelf**
      *
      * Add a shelf to simulation world, with the size and pose passed as goal (not added to map config)
      * @group Simulation
      * @category Simulation
      
      */
    ActionOperationCode[ActionOperationCode["SimAddShelf"] = 126] = "SimAddShelf";
    /**
      * **Simulation - Add cylinder**
      *
      * Add a cylinder to simulation world, with size and pose passed as goal (used to simulate dynamic obstacles)
      * @group Simulation
      * @category Simulation
      
      */
    ActionOperationCode[ActionOperationCode["SimAddCylinder"] = 150] = "SimAddCylinder";
    /**
      * **Simulation - Clear cylinders**
      *
      * Remove all cylinders added to simulation world
      * @group Simulation
      * @category Simulation
      
      */
    ActionOperationCode[ActionOperationCode["SimClearCylinders"] = 153] = "SimClearCylinders";
    /**
      * **Simulation - Clear shelves**
      *
      * Remove all shelves from simulation world, no matter if they are saved or not in map config (map config not impacted)
      * @group Simulation
      * @category Simulation
      
      */
    ActionOperationCode[ActionOperationCode["SimClearShelves"] = 127] = "SimClearShelves";
    /**
      * **Stop navigation**
      *
      * Stop the navigation on the vehicle, it will no longer be able to move autonomously ⛔
      * @group Navigation
      * @category Navigation
      
      */
    ActionOperationCode[ActionOperationCode["StopNavigation"] = 56] = "StopNavigation";
    /**
      * **Veh to pose**
      *
      * Ask vehicle to move to the given pose 🎯
      * @group Navigation
      * @category Navigation
      
      */
    ActionOperationCode[ActionOperationCode["VehToPose"] = 14] = "VehToPose";
    /**
      * **Veh to charging station**
      *
      * Ask vehicle to move to given uuid charging_station. Set -1 for preferred charging station
      * @group Navigation
      * @category Navigation
      
      */
    ActionOperationCode[ActionOperationCode["VehToChargingStation"] = 31] = "VehToChargingStation";
    /**
      * **Veh to charging station approach**
      *
      * Ask vehicle to move to given uuid charging_station approach. Set -1 for preferred charging station
      * @group Navigation
      * @category Navigation
      
      */
    ActionOperationCode[ActionOperationCode["VehToChargingStationApproach"] = 119] = "VehToChargingStationApproach";
    /**
      * **Veh to docked pose**
      *
      * Ask vehicle to move and dock to given uuid docked pose
      * @group Navigation
      * @category Navigation
      
      */
    ActionOperationCode[ActionOperationCode["VehToDockedPose"] = 107] = "VehToDockedPose";
    /**
      * **Veh to docked pose approach**
      *
      * Ask vehicle to move to given uuid docked pose approach
      * @group Navigation
      * @category Navigation
      
      */
    ActionOperationCode[ActionOperationCode["VehToDockedPoseApproach"] = 120] = "VehToDockedPoseApproach";
    /**
      * **Veh to saved pose**
      *
      * Ask vehicle to move to given uuid saved pose
      * @group Navigation
      * @category Navigation
      
      */
    ActionOperationCode[ActionOperationCode["VehToSavedPose"] = 32] = "VehToSavedPose";
    /**
      * **Nav segment**
      *
      * Ask vehicle to move straight between two poses ↗️
      * @group Navigation
      * @category Navigation
      
      */
    ActionOperationCode[ActionOperationCode["VehToSegment"] = 117] = "VehToSegment";
    /**
      * **Set vehicle pose**
      *
      * Indicate to the vehicle where it's located on the map. Can be used if the vehicle lost its localization, although relocation via docked pose or charging station provides better accuracy. Navigation will be started if needed 🎯
      * @group Navigation
      * @category Navigation
      
      */
    ActionOperationCode[ActionOperationCode["SetVehiclePose"] = 90] = "SetVehiclePose";
    /**
      * **Set map**
      *
      * Set map by giving all its attributes and elements. Set id to -1 to create a new element, omit some attributes to not change them 🗺️
      * @group Map
      * @category Map management
      
      */
    ActionOperationCode[ActionOperationCode["SetMap"] = 20] = "SetMap";
    /**
      * **Set active map**
      *
      * Set given ID map as active vehicle's map. It will also change active site if different than current 🗺️
      * @group Map
      * @category Map management
      
      */
    ActionOperationCode[ActionOperationCode["SetActiveMap"] = 29] = "SetActiveMap";
    /**
      * **Undock**
      *
      * Undock the vehicle from a docked pose or a charging station
      * @group Navigation
      * @category Docking
      
      */
    ActionOperationCode[ActionOperationCode["Undock"] = 34] = "Undock";
    /**
      * **Undock from shelf**
      *
      * Undock the vehicle from a shelf
      * @group Navigation
      * @category Docking
      
      */
    ActionOperationCode[ActionOperationCode["UndockFromShelf"] = 128] = "UndockFromShelf";
    /**
      * **Get markers around the vehicle**
      *
      * Get markers visible by the vehicle at its current position 🚨
      * @group Map
      * @category Marker
      
      */
    ActionOperationCode[ActionOperationCode["GetMarkers"] = 36] = "GetMarkers";
    /**
      * **Install module**
      *
      * Install module from module file and API key 🛠
      * @group Module
      * @category Module
      
      */
    ActionOperationCode[ActionOperationCode["InstallModule"] = 41] = "InstallModule";
    /**
      * **Disable module**
      *
      * Disable active module, it will be forced to authenticate itself again ⛔
      * @group Module
      * @category Module
      
      */
    ActionOperationCode[ActionOperationCode["DisableModule"] = 43] = "DisableModule";
    /**
      * **Recovery**
      *
      * Start the recovery process, vehicle will scan for markers around it, and set its position correctly from a known marker in map 🔍
      * @group Navigation
      * @category Recovery
      
      */
    ActionOperationCode[ActionOperationCode["Recovery"] = 46] = "Recovery";
    /**
      * **Reset database**
      *
      * Reset all the database 🗑
      * @group Database
      * @category Database
      
      */
    ActionOperationCode[ActionOperationCode["ResetDatabase"] = 109] = "ResetDatabase";
    /**
      * **Get path**
      *
      * Ask vehicle for the path between start and target pose. If start pose is not provided, current vehicle pose will be used instead
      * @group Navigation
      * @category Navigation
      
      */
    ActionOperationCode[ActionOperationCode["GetPath"] = 50] = "GetPath";
    /**
      * **Start mapping**
      *
      * Start a mapping from a given site ID and map name to save it at the end of the process ▶️
      * @group Mapping
      * @category Mapping
      
      */
    ActionOperationCode[ActionOperationCode["MappingStart"] = 52] = "MappingStart";
    /**
      * **Stop mapping**
      *
      * Stop mapping and save the created map if save_map is true ⏹
      * @group Mapping
      * @category Mapping
      
      */
    ActionOperationCode[ActionOperationCode["MappingStop"] = 53] = "MappingStop";
    /**
      * **Erase active map**
      *
      * Apply eraser polygons on the current map
      * @group Map
      * @category Eraser
      
      */
    ActionOperationCode[ActionOperationCode["EraseActiveMap"] = 70] = "EraseActiveMap";
    /**
      * **Reload map**
      *
      * Reload current map
      * @group Map
      * @category Map management
      * @internal
      */
    ActionOperationCode[ActionOperationCode["ReloadMap"] = 71] = "ReloadMap";
    /**
      * **Merge maps**
      *
      * Merge maps
      * @group Map
      * @category Map management
      
      */
    ActionOperationCode[ActionOperationCode["MergeMaps"] = 137] = "MergeMaps";
    /**
      * **WAN network configuration**
      *
      * Set wifi and IP configuration for WAN network 🌐
      * @group Vehicle
      * @category Network
      
      */
    ActionOperationCode[ActionOperationCode["NetworkWanConfig"] = 77] = "NetworkWanConfig";
    /**
      * **WAN network enable**
      *
      * Enable or disable WAN network 🌐
      * @group Vehicle
      * @category Network
      
      */
    ActionOperationCode[ActionOperationCode["NetworkWanEnable"] = 78] = "NetworkWanEnable";
    /**
      * **Hotspot enable**
      *
      * Enable or disable vehicle emitted hotspot 🛜
      * @group Vehicle
      * @category Network
      
      */
    ActionOperationCode[ActionOperationCode["NetworkHotspotEnable"] = 82] = "NetworkHotspotEnable";
    /**
      * **WAN scan APs**
      *
      * Start scan and list all detected Wi-Fi access points by the vehicle. Can take up to 10 seconds 🛜
      * @group Vehicle
      * @category Network
      
      */
    ActionOperationCode[ActionOperationCode["NetworkWanScanAps"] = 79] = "NetworkWanScanAps";
    /**
      * **Generate forbidden areas**
      *
      * Automatically creates forbidden areas for the active map
      * @group Map
      * @category Forbidden area
      
      */
    ActionOperationCode[ActionOperationCode["GenerateForbiddenAreas"] = 139] = "GenerateForbiddenAreas";
    /**
      * **Add sound**
      *
      * Add new sound in library
      * @group Database
      * @category Sound
      
      */
    ActionOperationCode[ActionOperationCode["AddSound"] = 147] = "AddSound";
})(ActionOperationCode || (exports.ActionOperationCode = ActionOperationCode = {}));
/* Lookup tables for feedback and results */
/** @internal */
exports.actionResultCode = {
    [ActionOperationCode.Check3dBoxAction]: events_1.ResultEventCode.Check3dBoxActionResult,
    [ActionOperationCode.SimResetWorld]: events_1.ResultEventCode.SimResetWorldResult,
    [ActionOperationCode.SimAddChargingStation]: events_1.ResultEventCode.SimAddChargingStationResult,
    [ActionOperationCode.SimAddFiducial]: events_1.ResultEventCode.SimAddFiducialResult,
    [ActionOperationCode.SimAddShelf]: events_1.ResultEventCode.SimAddShelfResult,
    [ActionOperationCode.SimAddCylinder]: events_1.ResultEventCode.SimAddCylinderResult,
    [ActionOperationCode.SimClearCylinders]: events_1.ResultEventCode.SimClearCylindersResult,
    [ActionOperationCode.SimClearShelves]: events_1.ResultEventCode.SimClearShelvesResult,
    [ActionOperationCode.StopNavigation]: events_1.ResultEventCode.StopNavigationResult,
    [ActionOperationCode.VehToPose]: events_1.ResultEventCode.VehToPoseResult,
    [ActionOperationCode.VehToChargingStation]: events_1.ResultEventCode.VehToChargingStationResult,
    [ActionOperationCode.VehToChargingStationApproach]: events_1.ResultEventCode.VehToChargingStationApproachResult,
    [ActionOperationCode.VehToDockedPose]: events_1.ResultEventCode.VehToDockedPoseResult,
    [ActionOperationCode.VehToDockedPoseApproach]: events_1.ResultEventCode.VehToDockedPoseApproachResult,
    [ActionOperationCode.VehToSavedPose]: events_1.ResultEventCode.VehToSavedPoseResult,
    [ActionOperationCode.VehToSegment]: events_1.ResultEventCode.VehToSegmentResult,
    [ActionOperationCode.SetVehiclePose]: events_1.ResultEventCode.SetVehiclePoseResult,
    [ActionOperationCode.SetMap]: events_1.ResultEventCode.SetMapResult,
    [ActionOperationCode.SetActiveMap]: events_1.ResultEventCode.SetActiveMapResult,
    [ActionOperationCode.Undock]: events_1.ResultEventCode.UndockResult,
    [ActionOperationCode.UndockFromShelf]: events_1.ResultEventCode.UndockFromShelfResult,
    [ActionOperationCode.GetMarkers]: events_1.ResultEventCode.GetMarkersResult,
    [ActionOperationCode.InstallModule]: events_1.ResultEventCode.InstallModuleResult,
    [ActionOperationCode.DisableModule]: events_1.ResultEventCode.DisableModuleResult,
    [ActionOperationCode.Recovery]: events_1.ResultEventCode.RecoveryResult,
    [ActionOperationCode.ResetDatabase]: events_1.ResultEventCode.ResetDatabaseResult,
    [ActionOperationCode.GetPath]: events_1.ResultEventCode.GetPathResult,
    [ActionOperationCode.MappingStart]: events_1.ResultEventCode.MappingStartResult,
    [ActionOperationCode.MappingStop]: events_1.ResultEventCode.MappingStopResult,
    [ActionOperationCode.EraseActiveMap]: events_1.ResultEventCode.EraseActiveMapResult,
    [ActionOperationCode.ReloadMap]: events_1.ResultEventCode.ReloadMapResult,
    [ActionOperationCode.MergeMaps]: events_1.ResultEventCode.MergeMapsResult,
    [ActionOperationCode.NetworkWanConfig]: events_1.ResultEventCode.NetworkWanConfigResult,
    [ActionOperationCode.NetworkWanEnable]: events_1.ResultEventCode.NetworkWanEnableResult,
    [ActionOperationCode.NetworkHotspotEnable]: events_1.ResultEventCode.NetworkHotspotEnableResult,
    [ActionOperationCode.NetworkWanScanAps]: events_1.ResultEventCode.NetworkWanScanApsResult,
    [ActionOperationCode.GenerateForbiddenAreas]: events_1.ResultEventCode.GenerateForbiddenAreasResult,
    [ActionOperationCode.AddSound]: events_1.ResultEventCode.AddSoundResult,
};
/** @internal */
exports.actionFeedbackCode = {
    [ActionOperationCode.Check3dBoxAction]: events_1.FeedbackEventCode.Check3dBoxActionFeedback,
    [ActionOperationCode.SimResetWorld]: events_1.FeedbackEventCode.SimResetWorldFeedback,
    [ActionOperationCode.SimAddChargingStation]: events_1.FeedbackEventCode.SimAddChargingStationFeedback,
    [ActionOperationCode.SimAddFiducial]: events_1.FeedbackEventCode.SimAddFiducialFeedback,
    [ActionOperationCode.SimAddShelf]: events_1.FeedbackEventCode.SimAddShelfFeedback,
    [ActionOperationCode.SimAddCylinder]: events_1.FeedbackEventCode.SimAddCylinderFeedback,
    [ActionOperationCode.SimClearCylinders]: events_1.FeedbackEventCode.SimClearCylindersFeedback,
    [ActionOperationCode.SimClearShelves]: events_1.FeedbackEventCode.SimClearShelvesFeedback,
    [ActionOperationCode.StopNavigation]: events_1.FeedbackEventCode.StopNavigationFeedback,
    [ActionOperationCode.VehToPose]: events_1.FeedbackEventCode.VehToPoseFeedback,
    [ActionOperationCode.VehToChargingStation]: events_1.FeedbackEventCode.VehToChargingStationFeedback,
    [ActionOperationCode.VehToChargingStationApproach]: events_1.FeedbackEventCode.VehToChargingStationApproachFeedback,
    [ActionOperationCode.VehToDockedPose]: events_1.FeedbackEventCode.VehToDockedPoseFeedback,
    [ActionOperationCode.VehToDockedPoseApproach]: events_1.FeedbackEventCode.VehToDockedPoseApproachFeedback,
    [ActionOperationCode.VehToSavedPose]: events_1.FeedbackEventCode.VehToSavedPoseFeedback,
    [ActionOperationCode.VehToSegment]: events_1.FeedbackEventCode.VehToSegmentFeedback,
    [ActionOperationCode.SetVehiclePose]: events_1.FeedbackEventCode.SetVehiclePoseFeedback,
    [ActionOperationCode.SetMap]: events_1.FeedbackEventCode.SetMapFeedback,
    [ActionOperationCode.SetActiveMap]: events_1.FeedbackEventCode.SetActiveMapFeedback,
    [ActionOperationCode.Undock]: events_1.FeedbackEventCode.UndockFeedback,
    [ActionOperationCode.UndockFromShelf]: events_1.FeedbackEventCode.UndockFromShelfFeedback,
    [ActionOperationCode.GetMarkers]: events_1.FeedbackEventCode.GetMarkersFeedback,
    [ActionOperationCode.InstallModule]: events_1.FeedbackEventCode.InstallModuleFeedback,
    [ActionOperationCode.DisableModule]: events_1.FeedbackEventCode.DisableModuleFeedback,
    [ActionOperationCode.Recovery]: events_1.FeedbackEventCode.RecoveryFeedback,
    [ActionOperationCode.ResetDatabase]: events_1.FeedbackEventCode.ResetDatabaseFeedback,
    [ActionOperationCode.GetPath]: events_1.FeedbackEventCode.GetPathFeedback,
    [ActionOperationCode.MappingStart]: events_1.FeedbackEventCode.MappingStartFeedback,
    [ActionOperationCode.MappingStop]: events_1.FeedbackEventCode.MappingStopFeedback,
    [ActionOperationCode.EraseActiveMap]: events_1.FeedbackEventCode.EraseActiveMapFeedback,
    [ActionOperationCode.ReloadMap]: events_1.FeedbackEventCode.ReloadMapFeedback,
    [ActionOperationCode.MergeMaps]: events_1.FeedbackEventCode.MergeMapsFeedback,
    [ActionOperationCode.NetworkWanConfig]: events_1.FeedbackEventCode.NetworkWanConfigFeedback,
    [ActionOperationCode.NetworkWanEnable]: events_1.FeedbackEventCode.NetworkWanEnableFeedback,
    [ActionOperationCode.NetworkHotspotEnable]: events_1.FeedbackEventCode.NetworkHotspotEnableFeedback,
    [ActionOperationCode.NetworkWanScanAps]: events_1.FeedbackEventCode.NetworkWanScanApsFeedback,
    [ActionOperationCode.GenerateForbiddenAreas]: events_1.FeedbackEventCode.GenerateForbiddenAreasFeedback,
    [ActionOperationCode.AddSound]: events_1.FeedbackEventCode.AddSoundFeedback,
};
/** @internal */
const initActionOperationCallbacks = () => ({
    [ActionOperationCode.Check3dBoxAction]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.SimResetWorld]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.SimAddChargingStation]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.SimAddFiducial]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.SimAddShelf]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.SimAddCylinder]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.SimClearCylinders]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.SimClearShelves]: { resolve: undefined, reject: undefined },
    [ActionOperationCode.StopNavigation]: { resolve: undefined, reject: undefined },
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
});
exports.initActionOperationCallbacks = initActionOperationCallbacks;
/* Mixin */
/** @internal */
class ActionsMixin extends types_1.BaseAPI {
    /**
    * **Check 3D box**
    *
    * Check if a box is free
    * @category Navigation
    * @group Navigation
    
    * @param check_pose_data Pose parameters. Don't send params to use the current robot pose
    * @param feedback_cb - Feedback callback of action
    
    * @data Promise<{@link boolean}>
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#Check3dBoxAction RoboccDocs} for further information
    */
    Check3dBoxAction(check_pose_data, feedback_cb) {
        return this.callAction(ActionOperationCode.Check3dBoxAction, check_pose_data, feedback_cb);
    }
    /**
    * **Simulation - Reset gazebo world 🔄**
    *
    * Clear all simulation world's elements (charging stations, fiducials, cylinders, shelves, and walls), create all map config's elements and walls in simulation world, and reset vehicle's position to the preferred charging station. Used to remove the elements that were added to simulation world, but that are not saved in map config (or deleted).
    * @category Simulation
    * @group Simulation
    
    
    * @param feedback_cb - Feedback callback of action
    
    * @data Promise<{@link SimResetWorldResult}>
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#SimResetWorld RoboccDocs} for further information
    */
    SimResetWorld(feedback_cb) {
        return this.callAction(ActionOperationCode.SimResetWorld, null, feedback_cb);
    }
    /**
    * **Simulation - Add charging station**
    *
    * Add a charging station and its marker to simulation world, with marker ID and pose passed as goal (not added to map config)
    * @category Simulation
    * @group Simulation
    
    * @param d Parameters
    * @param feedback_cb - Feedback callback of action
    
    * @data Promise<{@link SimAddChargingStationResult}>
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#SimAddChargingStation RoboccDocs} for further information
    */
    SimAddChargingStation(d, feedback_cb) {
        return this.callAction(ActionOperationCode.SimAddChargingStation, d, feedback_cb);
    }
    /**
    * **Simulation - Add charging station**
    *
    * Add a fiducial (i.e. a lidar marker and its support) to simulation world, with marker ID and pose passed as goal (not added to map config)
    * @category Simulation
    * @group Simulation
    
    * @param d Parameters
    * @param feedback_cb - Feedback callback of action
    
    * @data Promise<{@link SimAddFiducialResult}>
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#SimAddFiducial RoboccDocs} for further information
    */
    SimAddFiducial(d, feedback_cb) {
        return this.callAction(ActionOperationCode.SimAddFiducial, d, feedback_cb);
    }
    /**
    * **Simulation - Add shelf**
    *
    * Add a shelf to simulation world, with the size and pose passed as goal (not added to map config)
    * @category Simulation
    * @group Simulation
    
    * @param sim_add_shelf_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    * @data Promise<{@link SimAddShelfResult}>
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#SimAddShelf RoboccDocs} for further information
    */
    SimAddShelf(sim_add_shelf_params, feedback_cb) {
        return this.callAction(ActionOperationCode.SimAddShelf, sim_add_shelf_params, feedback_cb);
    }
    /**
    * **Simulation - Add cylinder**
    *
    * Add a cylinder to simulation world, with size and pose passed as goal (used to simulate dynamic obstacles)
    * @category Simulation
    * @group Simulation
    
    * @param sim_add_cylinder_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    * @data Promise<{@link SimAddCylinderResult}>
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#SimAddCylinder RoboccDocs} for further information
    */
    SimAddCylinder(sim_add_cylinder_params, feedback_cb) {
        return this.callAction(ActionOperationCode.SimAddCylinder, sim_add_cylinder_params, feedback_cb);
    }
    /**
    * **Simulation - Clear cylinders**
    *
    * Remove all cylinders added to simulation world
    * @category Simulation
    * @group Simulation
    
    
    * @param feedback_cb - Feedback callback of action
    
    * @data Promise<{@link SimClearCylindersResult}>
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#SimClearCylinders RoboccDocs} for further information
    */
    SimClearCylinders(feedback_cb) {
        return this.callAction(ActionOperationCode.SimClearCylinders, null, feedback_cb);
    }
    /**
    * **Simulation - Clear shelves**
    *
    * Remove all shelves from simulation world, no matter if they are saved or not in map config (map config not impacted)
    * @category Simulation
    * @group Simulation
    
    
    * @param feedback_cb - Feedback callback of action
    
    * @data Promise<{@link SimClearShelvesResult}>
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#SimClearShelves RoboccDocs} for further information
    */
    SimClearShelves(feedback_cb) {
        return this.callAction(ActionOperationCode.SimClearShelves, null, feedback_cb);
    }
    /**
    * **Stop navigation**
    *
    * Stop the navigation on the vehicle, it will no longer be able to move autonomously ⛔
    * @category Navigation
    * @group Navigation
    
    
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#StopNavigation RoboccDocs} for further information
    */
    StopNavigation(feedback_cb) {
        return this.callAction(ActionOperationCode.StopNavigation, null, feedback_cb);
    }
    /**
    * **Veh to pose**
    *
    * Ask vehicle to move to the given pose 🎯
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_pose_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#VehToPose RoboccDocs} for further information
    */
    VehToPose(veh_to_pose_params, feedback_cb) {
        return this.callAction(ActionOperationCode.VehToPose, veh_to_pose_params, feedback_cb);
    }
    /**
    * **Veh to charging station**
    *
    * Ask vehicle to move to given uuid charging_station. Set -1 for preferred charging station
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_charging_station_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#VehToChargingStation RoboccDocs} for further information
    */
    VehToChargingStation(veh_to_charging_station_params, feedback_cb) {
        return this.callAction(ActionOperationCode.VehToChargingStation, veh_to_charging_station_params, feedback_cb);
    }
    /**
    * **Veh to charging station approach**
    *
    * Ask vehicle to move to given uuid charging_station approach. Set -1 for preferred charging station
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_charging_station_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#VehToChargingStationApproach RoboccDocs} for further information
    */
    VehToChargingStationApproach(veh_to_charging_station_params, feedback_cb) {
        return this.callAction(ActionOperationCode.VehToChargingStationApproach, veh_to_charging_station_params, feedback_cb);
    }
    /**
    * **Veh to docked pose**
    *
    * Ask vehicle to move and dock to given uuid docked pose
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_docked_pose_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#VehToDockedPose RoboccDocs} for further information
    */
    VehToDockedPose(veh_to_docked_pose_params, feedback_cb) {
        return this.callAction(ActionOperationCode.VehToDockedPose, veh_to_docked_pose_params, feedback_cb);
    }
    /**
    * **Veh to docked pose approach**
    *
    * Ask vehicle to move to given uuid docked pose approach
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_docked_pose_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#VehToDockedPoseApproach RoboccDocs} for further information
    */
    VehToDockedPoseApproach(veh_to_docked_pose_params, feedback_cb) {
        return this.callAction(ActionOperationCode.VehToDockedPoseApproach, veh_to_docked_pose_params, feedback_cb);
    }
    /**
    * **Veh to saved pose**
    *
    * Ask vehicle to move to given uuid saved pose
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_saved_pose_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#VehToSavedPose RoboccDocs} for further information
    */
    VehToSavedPose(veh_to_saved_pose_params, feedback_cb) {
        return this.callAction(ActionOperationCode.VehToSavedPose, veh_to_saved_pose_params, feedback_cb);
    }
    /**
    * **Nav segment**
    *
    * Ask vehicle to move straight between two poses ↗️
    * @category Navigation
    * @group Navigation
    
    * @param veh_to_segment_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#VehToSegment RoboccDocs} for further information
    */
    VehToSegment(veh_to_segment_params, feedback_cb) {
        return this.callAction(ActionOperationCode.VehToSegment, veh_to_segment_params, feedback_cb);
    }
    /**
    * **Set vehicle pose**
    *
    * Indicate to the vehicle where it's located on the map. Can be used if the vehicle lost its localization, although relocation via docked pose or charging station provides better accuracy. Navigation will be started if needed 🎯
    * @category Navigation
    * @group Navigation
    
    * @param set_vehicle_pose_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#SetVehiclePose RoboccDocs} for further information
    */
    SetVehiclePose(set_vehicle_pose_params, feedback_cb) {
        return this.callAction(ActionOperationCode.SetVehiclePose, set_vehicle_pose_params, feedback_cb);
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
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#SetMap RoboccDocs} for further information
    */
    SetMap(map, feedback_cb) {
        return this.callAction(ActionOperationCode.SetMap, map, feedback_cb);
    }
    /**
    * **Set active map**
    *
    * Set given ID map as active vehicle's map. It will also change active site if different than current 🗺️
    * @category Map management
    * @group Map
    
    * @param map_id Id of map
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#SetActiveMap RoboccDocs} for further information
    */
    SetActiveMap(map_id, feedback_cb) {
        return this.callAction(ActionOperationCode.SetActiveMap, map_id, feedback_cb);
    }
    /**
    * **Undock**
    *
    * Undock the vehicle from a docked pose or a charging station
    * @category Docking
    * @group Navigation
    
    * @param override_battery_safety Override battery safety
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#Undock RoboccDocs} for further information
    */
    Undock(override_battery_safety, feedback_cb) {
        return this.callAction(ActionOperationCode.Undock, override_battery_safety, feedback_cb);
    }
    /**
    * **Undock from shelf**
    *
    * Undock the vehicle from a shelf
    * @category Docking
    * @group Navigation
    
    * @param d Undock distance
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#UndockFromShelf RoboccDocs} for further information
    */
    UndockFromShelf(d, feedback_cb) {
        return this.callAction(ActionOperationCode.UndockFromShelf, d, feedback_cb);
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
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#GetMarkers RoboccDocs} for further information
    */
    GetMarkers(pose_reference, feedback_cb) {
        return this.callAction(ActionOperationCode.GetMarkers, pose_reference, feedback_cb);
    }
    /**
    * **Install module**
    *
    * Install module from module file and API key 🛠
    * @category Module
    * @group Module
    
    * @param module_data Module data
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#InstallModule RoboccDocs} for further information
    */
    InstallModule(module_data, feedback_cb) {
        return this.callAction(ActionOperationCode.InstallModule, module_data, feedback_cb);
    }
    /**
    * **Disable module**
    *
    * Disable active module, it will be forced to authenticate itself again ⛔
    * @category Module
    * @group Module
    
    
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#DisableModule RoboccDocs} for further information
    */
    DisableModule(feedback_cb) {
        return this.callAction(ActionOperationCode.DisableModule, null, feedback_cb);
    }
    /**
    * **Recovery**
    *
    * Start the recovery process, vehicle will scan for markers around it, and set its position correctly from a known marker in map 🔍
    * @category Recovery
    * @group Navigation
    
    
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#Recovery RoboccDocs} for further information
    */
    Recovery(feedback_cb) {
        return this.callAction(ActionOperationCode.Recovery, null, feedback_cb);
    }
    /**
    * **Reset database**
    *
    * Reset all the database 🗑
    * @category Database
    * @group Database
    
    
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#ResetDatabase RoboccDocs} for further information
    */
    ResetDatabase(feedback_cb) {
        return this.callAction(ActionOperationCode.ResetDatabase, null, feedback_cb);
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
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#GetPath RoboccDocs} for further information
    */
    GetPath(get_path_params, feedback_cb) {
        return this.callAction(ActionOperationCode.GetPath, get_path_params, feedback_cb);
    }
    /**
    * **Start mapping**
    *
    * Start a mapping from a given site ID and map name to save it at the end of the process ▶️
    * @category Mapping
    * @group Mapping
    
    * @param mapping_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#MappingStart RoboccDocs} for further information
    */
    MappingStart(mapping_params, feedback_cb) {
        return this.callAction(ActionOperationCode.MappingStart, mapping_params, feedback_cb);
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
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#MappingStop RoboccDocs} for further information
    */
    MappingStop(save_map, feedback_cb) {
        return this.callAction(ActionOperationCode.MappingStop, save_map, feedback_cb);
    }
    /**
    * **Erase active map**
    *
    * Apply eraser polygons on the current map
    * @category Eraser
    * @group Map
    
    * @param erase_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#EraseActiveMap RoboccDocs} for further information
    */
    EraseActiveMap(erase_params, feedback_cb) {
        return this.callAction(ActionOperationCode.EraseActiveMap, erase_params, feedback_cb);
    }
    /**
    * **Reload map**
    *
    * Reload current map
    * @category Map management
    * @group Map
    * @internal
    
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#ReloadMap RoboccDocs} for further information
    */
    ReloadMap(feedback_cb) {
        return this.callAction(ActionOperationCode.ReloadMap, null, feedback_cb);
    }
    /**
    * **Merge maps**
    *
    * Merge maps
    * @category Map management
    * @group Map
    
    * @param d Parameters for merge maps
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#MergeMaps RoboccDocs} for further information
    */
    MergeMaps(d, feedback_cb) {
        return this.callAction(ActionOperationCode.MergeMaps, d, feedback_cb);
    }
    /**
    * **WAN network configuration**
    *
    * Set wifi and IP configuration for WAN network 🌐
    * @category Network
    * @group Vehicle
    
    * @param wan_config Parameters for WAN configuration
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#NetworkWanConfig RoboccDocs} for further information
    */
    NetworkWanConfig(wan_config, feedback_cb) {
        return this.callAction(ActionOperationCode.NetworkWanConfig, wan_config, feedback_cb);
    }
    /**
    * **WAN network enable**
    *
    * Enable or disable WAN network 🌐
    * @category Network
    * @group Vehicle
    
    * @param enable Enable WAN connection
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#NetworkWanEnable RoboccDocs} for further information
    */
    NetworkWanEnable(enable, feedback_cb) {
        return this.callAction(ActionOperationCode.NetworkWanEnable, enable, feedback_cb);
    }
    /**
    * **Hotspot enable**
    *
    * Enable or disable vehicle emitted hotspot 🛜
    * @category Network
    * @group Vehicle
    
    * @param enable Enable hotspot
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#NetworkHotspotEnable RoboccDocs} for further information
    */
    NetworkHotspotEnable(enable, feedback_cb) {
        return this.callAction(ActionOperationCode.NetworkHotspotEnable, enable, feedback_cb);
    }
    /**
    * **WAN scan APs**
    *
    * Start scan and list all detected Wi-Fi access points by the vehicle. Can take up to 10 seconds 🛜
    * @category Network
    * @group Vehicle
    
    
    * @param feedback_cb - Feedback callback of action
    
    * @data Promise<{@link WifiAp}[]>
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#NetworkWanScanAps RoboccDocs} for further information
    */
    NetworkWanScanAps(feedback_cb) {
        return this.callAction(ActionOperationCode.NetworkWanScanAps, null, feedback_cb);
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
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#GenerateForbiddenAreas RoboccDocs} for further information
    */
    GenerateForbiddenAreas(d, feedback_cb) {
        return this.callAction(ActionOperationCode.GenerateForbiddenAreas, d, feedback_cb);
    }
    /**
    * **Add sound**
    *
    * Add new sound in library
    * @category Sound
    * @group Database
    
    * @param add_sound_params Parameters
    * @param feedback_cb - Feedback callback of action
    
    
    * @see {@link https://docs.robocc.com/roc-api-ts/9.1.6-athena-6/classes/RocApi.RocApi.html#AddSound RoboccDocs} for further information
    */
    AddSound(add_sound_params, feedback_cb) {
        return this.callAction(ActionOperationCode.AddSound, add_sound_params, feedback_cb);
    }
}
exports.ActionsMixin = ActionsMixin;
;
