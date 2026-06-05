"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogSeverity = exports.AuthenticatedType = exports.MapElementType = exports.VehDirection = exports.ModuleType = exports.VehStatus = exports.RelayAction = exports.ContactTrigger = exports.ContactNonc = exports.ContactType = exports.LoraControllerCommand = exports.DockedPoseStationType = exports.ContactState = exports.RocEvent = exports.PeerType = exports.InvalidDataSection = exports.Language = exports.NavigationState = exports.MotorType = exports.McuType = exports.ComputerType = exports.StopSource = exports.SoundScenario = exports.NetworkGlobalStatus = exports.NetworkStatus = exports.NetworkType = exports.PoseReference = exports.LedCornerAnim = exports.LedAnim = exports.VehToStepCode = exports.DockingType = exports.FollowMeStatus = exports.DockingStatus = exports.VehToDockedStepCode = exports.FollowMode = exports.DirectionStrict = exports.OnOff = exports.Direction = exports.AutopilotOnError = exports.AutopilotTargetType = exports.AutopilotStepType = exports.DiagnosticCriticalLevel = exports.DiagnosticElementError = exports.DiagnosticElementType = exports.MoveStepMoveType = exports.NetworkProtocol = exports.SecuritySeverity = exports.ChassisIntrusionStatus = exports.Rbac = exports.BaseAPI = void 0;
exports.UpdateStatusEventDataStatus = exports.AutopilotStatusEventData = exports.AutopilotStepResultEventData = exports.MappingErrorEventDataOutcome = exports.SystemRestartParamsStage = exports.MergeMapsFeedbackCurrentStepCode = exports.ReloadMapFeedbackCurrentStepCode = exports.EraseActiveMapFeedbackCurrentStepCode = exports.MappingStopFeedbackCurrentStepCode = exports.ResetDatabaseFeedbackCurrentStepCode = exports.DisableModuleFeedbackCurrentStepCode = exports.InstallModuleFeedbackCurrentStepCode = exports.SetActiveMapFeedbackCurrentStepCode = exports.SetMapFeedbackCurrentStepCode = exports.UpdateStatusStatus = exports.LogType = void 0;
/** @internal */
class BaseAPI {
}
exports.BaseAPI = BaseAPI;
;
/* Enums */
/**
 * **Role based access control**
 *
 * List of role based access control
 * @member `NOT_AUTH` - NOT_AUTH
 * @member `OPERATION` - OPERATION
 * @member `SUPERVISION` - SUPERVISION
 * @member `CONFIGURATION` - CONFIGURATION
 * @member `ADMINISTRATION` - ADMINISTRATION
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.Rbac.html RoboccDocs} for further information
*/
var Rbac;
(function (Rbac) {
    /** NOT_AUTH */
    Rbac[Rbac["NOT_AUTH"] = 0] = "NOT_AUTH";
    /** OPERATION */
    Rbac[Rbac["OPERATION"] = 1] = "OPERATION";
    /** SUPERVISION */
    Rbac[Rbac["SUPERVISION"] = 2] = "SUPERVISION";
    /** CONFIGURATION */
    Rbac[Rbac["CONFIGURATION"] = 3] = "CONFIGURATION";
    /** ADMINISTRATION */
    Rbac[Rbac["ADMINISTRATION"] = 4] = "ADMINISTRATION";
})(Rbac || (exports.Rbac = Rbac = {}));
/**
 * **Chassis intrusion status**
 *
 * Chassis intrusion status
 * @member `UNKNOWN` - Unknown
 * @member `OK` - OK
 * @member `CHASSIS_INTRUSION` - Chassis intrusion
 * @member `CORRUPTION` - Corruption
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.ChassisIntrusionStatus.html RoboccDocs} for further information
*/
var ChassisIntrusionStatus;
(function (ChassisIntrusionStatus) {
    /** Unknown */
    ChassisIntrusionStatus[ChassisIntrusionStatus["UNKNOWN"] = 0] = "UNKNOWN";
    /** OK */
    ChassisIntrusionStatus[ChassisIntrusionStatus["OK"] = 1] = "OK";
    /** Chassis intrusion */
    ChassisIntrusionStatus[ChassisIntrusionStatus["CHASSIS_INTRUSION"] = 2] = "CHASSIS_INTRUSION";
    /** Corruption */
    ChassisIntrusionStatus[ChassisIntrusionStatus["CORRUPTION"] = 3] = "CORRUPTION";
})(ChassisIntrusionStatus || (exports.ChassisIntrusionStatus = ChassisIntrusionStatus = {}));
/**
 * **Enum of security severity**
 *
 * List all severity
 * @member `INFO` - INFO
 * @member `WARNING` - WARNING
 * @member `ERROR` - ERROR
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.SecuritySeverity.html RoboccDocs} for further information
*/
var SecuritySeverity;
(function (SecuritySeverity) {
    /** INFO */
    SecuritySeverity[SecuritySeverity["INFO"] = 0] = "INFO";
    /** WARNING */
    SecuritySeverity[SecuritySeverity["WARNING"] = 1] = "WARNING";
    /** ERROR */
    SecuritySeverity[SecuritySeverity["ERROR"] = 2] = "ERROR";
})(SecuritySeverity || (exports.SecuritySeverity = SecuritySeverity = {}));
/**
 * **Network protocol**
 *
 * List network protocol
 * @member `UDP` - UDP
 * @member `TCP` - TCP
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.NetworkProtocol.html RoboccDocs} for further information
*/
var NetworkProtocol;
(function (NetworkProtocol) {
    /** UDP */
    NetworkProtocol[NetworkProtocol["UDP"] = 0] = "UDP";
    /** TCP */
    NetworkProtocol[NetworkProtocol["TCP"] = 1] = "TCP";
})(NetworkProtocol || (exports.NetworkProtocol = NetworkProtocol = {}));
/**
 * **MoveStepMoveType**
 *
 * `move_type` parameter of a `MoveStep` type
 * @member `LINEAR` - Linear distance in meters
 * @member `ANGULAR` - Angular distance in radians
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.MoveStepMoveType.html RoboccDocs} for further information
*/
var MoveStepMoveType;
(function (MoveStepMoveType) {
    /** Linear distance in meters */
    MoveStepMoveType[MoveStepMoveType["LINEAR"] = 1] = "LINEAR";
    /** Angular distance in radians */
    MoveStepMoveType[MoveStepMoveType["ANGULAR"] = 2] = "ANGULAR";
})(MoveStepMoveType || (exports.MoveStepMoveType = MoveStepMoveType = {}));
/**
 * **Enum diagnostic element type**
 *
 * List all vehicle hardware element types 🛠
 * @member `UNKNOWN_TYPE` - Unknown element type
 * @member `MOTOR_TYPE` - Motor element
 * @member `DIFF_DRIVE_MOTOR_CONTROLLER_TYPE` - Motor controller element
 * @member `LIDAR_TYPE` - LiDAR element
 * @member `STEREO_CAMERA_TYPE` - 3D camera element
 * @member `US_SENSOR_TYPE` - Sonar element
 * @member `BATTERY_TYPE` - Battery element
 * @member `ROS_NODE_TYPE` - Software ROS node
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.DiagnosticElementType.html RoboccDocs} for further information
*/
var DiagnosticElementType;
(function (DiagnosticElementType) {
    /** Unknown element type */
    DiagnosticElementType[DiagnosticElementType["UNKNOWN_TYPE"] = 0] = "UNKNOWN_TYPE";
    /** Motor element */
    DiagnosticElementType[DiagnosticElementType["MOTOR_TYPE"] = 1] = "MOTOR_TYPE";
    /** Motor controller element */
    DiagnosticElementType[DiagnosticElementType["DIFF_DRIVE_MOTOR_CONTROLLER_TYPE"] = 2] = "DIFF_DRIVE_MOTOR_CONTROLLER_TYPE";
    /** LiDAR element */
    DiagnosticElementType[DiagnosticElementType["LIDAR_TYPE"] = 3] = "LIDAR_TYPE";
    /** 3D camera element */
    DiagnosticElementType[DiagnosticElementType["STEREO_CAMERA_TYPE"] = 4] = "STEREO_CAMERA_TYPE";
    /** Sonar element */
    DiagnosticElementType[DiagnosticElementType["US_SENSOR_TYPE"] = 5] = "US_SENSOR_TYPE";
    /** Battery element */
    DiagnosticElementType[DiagnosticElementType["BATTERY_TYPE"] = 6] = "BATTERY_TYPE";
    /** Software ROS node */
    DiagnosticElementType[DiagnosticElementType["ROS_NODE_TYPE"] = 7] = "ROS_NODE_TYPE";
})(DiagnosticElementType || (exports.DiagnosticElementType = DiagnosticElementType = {}));
/**
 * **Enum diagnostic element error**
 *
 * List all vehicle hardware element errors 🛠
 * @member `UNKNOWN_ERROR` - Unknown error on element
 * @member `NO_ERROR` - No error on element
 * @member `INVALID_DATA_ERROR` - Data received is invalid
 * @member `FREQUENCY_ERROR` - Frequency error, no data received or abnormal frequency
 * @member `HARDWARE_ERROR` - Hardware error on element
 * @member `CONNECTION_ERROR` - Connection error on element, element might be disconnected
 * @member `NODE_CRASH_ERROR` - Node crash error on element can occur only on SOFTWARE_MODULE element
 * @member `UNAPPLIED_CONFIG_ERROR` - Configuration is not correctly applied on some elements
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.DiagnosticElementError.html RoboccDocs} for further information
*/
var DiagnosticElementError;
(function (DiagnosticElementError) {
    /** Unknown error on element */
    DiagnosticElementError[DiagnosticElementError["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
    /** No error on element */
    DiagnosticElementError[DiagnosticElementError["NO_ERROR"] = 1] = "NO_ERROR";
    /** Data received is invalid */
    DiagnosticElementError[DiagnosticElementError["INVALID_DATA_ERROR"] = 2] = "INVALID_DATA_ERROR";
    /** Frequency error, no data received or abnormal frequency */
    DiagnosticElementError[DiagnosticElementError["FREQUENCY_ERROR"] = 3] = "FREQUENCY_ERROR";
    /** Hardware error on element */
    DiagnosticElementError[DiagnosticElementError["HARDWARE_ERROR"] = 4] = "HARDWARE_ERROR";
    /** Connection error on element, element might be disconnected */
    DiagnosticElementError[DiagnosticElementError["CONNECTION_ERROR"] = 5] = "CONNECTION_ERROR";
    /** Node crash error on element can occur only on SOFTWARE_MODULE element */
    DiagnosticElementError[DiagnosticElementError["NODE_CRASH_ERROR"] = 6] = "NODE_CRASH_ERROR";
    /** Configuration is not correctly applied on some elements */
    DiagnosticElementError[DiagnosticElementError["UNAPPLIED_CONFIG_ERROR"] = 7] = "UNAPPLIED_CONFIG_ERROR";
})(DiagnosticElementError || (exports.DiagnosticElementError = DiagnosticElementError = {}));
/**
 * **Enum diagnostic element critical level**
 *
 * List all vehicle hardware element error levels 🛠
 * @member `UNKNOWN_CRITICALITY` - Unknown criticality
 * @member `NOT_CRITICAL` - Error is not critical
 * @member `WARN_CRITICAL` - Error should be seen as warning
 * @member `ERROR_CRITICAL` - Error should be seen as critical
 * @member `FATAL_CRITICAL` - Error should be seen as fatal
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.DiagnosticCriticalLevel.html RoboccDocs} for further information
*/
var DiagnosticCriticalLevel;
(function (DiagnosticCriticalLevel) {
    /** Unknown criticality */
    DiagnosticCriticalLevel[DiagnosticCriticalLevel["UNKNOWN_CRITICALITY"] = 0] = "UNKNOWN_CRITICALITY";
    /** Error is not critical */
    DiagnosticCriticalLevel[DiagnosticCriticalLevel["NOT_CRITICAL"] = 1] = "NOT_CRITICAL";
    /** Error should be seen as warning */
    DiagnosticCriticalLevel[DiagnosticCriticalLevel["WARN_CRITICAL"] = 2] = "WARN_CRITICAL";
    /** Error should be seen as critical */
    DiagnosticCriticalLevel[DiagnosticCriticalLevel["ERROR_CRITICAL"] = 3] = "ERROR_CRITICAL";
    /** Error should be seen as fatal */
    DiagnosticCriticalLevel[DiagnosticCriticalLevel["FATAL_CRITICAL"] = 4] = "FATAL_CRITICAL";
})(DiagnosticCriticalLevel || (exports.DiagnosticCriticalLevel = DiagnosticCriticalLevel = {}));
/**
 * **Enum autopilot step type**
 *
 * List all autopilot step types, Move, Anim or Wait
 * @member `NOT_SET` - Step type is not set
 * @member `MOVE` - Step is a move order
 * @member `WAIT` - Step is a pause for X seconds order
 * @member `BEHAVIOUR` - Step is a behaviour order to toggle on or off sound and LED on veh
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.AutopilotStepType.html RoboccDocs} for further information
*/
var AutopilotStepType;
(function (AutopilotStepType) {
    /** Step type is not set */
    AutopilotStepType[AutopilotStepType["NOT_SET"] = 0] = "NOT_SET";
    /** Step is a move order */
    AutopilotStepType[AutopilotStepType["MOVE"] = 1] = "MOVE";
    /** Step is a pause for X seconds order */
    AutopilotStepType[AutopilotStepType["WAIT"] = 2] = "WAIT";
    /** Step is a behaviour order to toggle on or off sound and LED on veh */
    AutopilotStepType[AutopilotStepType["BEHAVIOUR"] = 3] = "BEHAVIOUR";
})(AutopilotStepType || (exports.AutopilotStepType = AutopilotStepType = {}));
/**
 * **Enum autopilot target type**
 *
 * List all target types
 * @member `CHARGING_STATION` - Step move is aiming a charging station element
 * @member `SAVED_POSE` - Step move is aiming a saved pose element
 * @member `DOCKED_POSE` - Step move is aiming a docked pose element
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.AutopilotTargetType.html RoboccDocs} for further information
*/
var AutopilotTargetType;
(function (AutopilotTargetType) {
    /** Step move is aiming a charging station element */
    AutopilotTargetType[AutopilotTargetType["CHARGING_STATION"] = 0] = "CHARGING_STATION";
    /** Step move is aiming a saved pose element */
    AutopilotTargetType[AutopilotTargetType["SAVED_POSE"] = 1] = "SAVED_POSE";
    /** Step move is aiming a docked pose element */
    AutopilotTargetType[AutopilotTargetType["DOCKED_POSE"] = 2] = "DOCKED_POSE";
})(AutopilotTargetType || (exports.AutopilotTargetType = AutopilotTargetType = {}));
/**
 * **Enum autopilot on error**
 *
 * List all on error options
 * @member `NEXT_STEP` - On error, proceed next step
 * @member `RETRY` - On error, retry
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.AutopilotOnError.html RoboccDocs} for further information
*/
var AutopilotOnError;
(function (AutopilotOnError) {
    /** On error, proceed next step */
    AutopilotOnError[AutopilotOnError["NEXT_STEP"] = 0] = "NEXT_STEP";
    /** On error, retry */
    AutopilotOnError[AutopilotOnError["RETRY"] = 1] = "RETRY";
})(AutopilotOnError || (exports.AutopilotOnError = AutopilotOnError = {}));
/**
 * **Enum direction**
 *
 * List all direction supported by vehicle ↔️
 * @member `FRONT_OR_BACK` - The vehicle must be oriented in the same way as the goal, regardless the condition of the front or rear of the vehicle
 * @member `FRONT` - The vehicle must be oriented in the same way as the goal and forward
 * @member `BACK` - The vehicle must be oriented in the same way as the goal and backward
 * @member `NO_DIRECTION` - The vehicle has no constraint on orientation
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.Direction.html RoboccDocs} for further information
*/
var Direction;
(function (Direction) {
    /** The vehicle must be oriented in the same way as the goal, regardless the condition of the front or rear of the vehicle */
    Direction[Direction["FRONT_OR_BACK"] = 0] = "FRONT_OR_BACK";
    /** The vehicle must be oriented in the same way as the goal and forward */
    Direction[Direction["FRONT"] = 1] = "FRONT";
    /** The vehicle must be oriented in the same way as the goal and backward */
    Direction[Direction["BACK"] = 2] = "BACK";
    /** The vehicle has no constraint on orientation */
    Direction[Direction["NO_DIRECTION"] = 3] = "NO_DIRECTION";
})(Direction || (exports.Direction = Direction = {}));
/**
 * **Enum on off**
 *
 * List all state for on off
 * @member `NOT_SET` - Param not set, use parent or default value
 * @member `ON` - On
 * @member `OFF` - Off
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.OnOff.html RoboccDocs} for further information
*/
var OnOff;
(function (OnOff) {
    /** Param not set, use parent or default value */
    OnOff[OnOff["NOT_SET"] = 0] = "NOT_SET";
    /** On */
    OnOff[OnOff["ON"] = 1] = "ON";
    /** Off */
    OnOff[OnOff["OFF"] = 2] = "OFF";
})(OnOff || (exports.OnOff = OnOff = {}));
/**
 * **Enum direction**
 *
 * List all strict direction supported by vehicle ↔️
 * @member `FRONT_OR_BACK` - The vehicle must be oriented in the same way as the goal, regardless the condition of the front or rear of the vehicle
 * @member `FRONT` - The vehicle must be oriented in the same way as the goal and forward
 * @member `BACK` - The vehicle must be oriented in the same way as the goal and backward
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.DirectionStrict.html RoboccDocs} for further information
*/
var DirectionStrict;
(function (DirectionStrict) {
    /** The vehicle must be oriented in the same way as the goal, regardless the condition of the front or rear of the vehicle */
    DirectionStrict[DirectionStrict["FRONT_OR_BACK"] = 0] = "FRONT_OR_BACK";
    /** The vehicle must be oriented in the same way as the goal and forward */
    DirectionStrict[DirectionStrict["FRONT"] = 1] = "FRONT";
    /** The vehicle must be oriented in the same way as the goal and backward */
    DirectionStrict[DirectionStrict["BACK"] = 2] = "BACK";
})(DirectionStrict || (exports.DirectionStrict = DirectionStrict = {}));
/**
 * **Enum follow mode**
 *
 * List all mode supported by follow me
 * @member `MODE_FREE` - Free move
 * @member `MODE_ASSISTED` - The vehicle follow walls
 * @member `MODE_GUIDED` - The vehicle can't go on forbidden area
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.FollowMode.html RoboccDocs} for further information
*/
var FollowMode;
(function (FollowMode) {
    /** Free move */
    FollowMode[FollowMode["MODE_FREE"] = 0] = "MODE_FREE";
    /** The vehicle follow walls */
    FollowMode[FollowMode["MODE_ASSISTED"] = 1] = "MODE_ASSISTED";
    /** The vehicle can't go on forbidden area */
    FollowMode[FollowMode["MODE_GUIDED"] = 2] = "MODE_GUIDED";
})(FollowMode || (exports.FollowMode = FollowMode = {}));
/**
 * **Enum Veh to docked step code**
 *
 * List all steps through which move order to docked pose or charging station will pass
 * @member `UNDEFINED` - Undefined
 * @member `GET_DATA` - Get data before starting go to
 * @member `INIT_GOAL` - Retrieve goal of move order
 * @member `GET_PATH` - Calculate the path to goal
 * @member `UNDOCK` - Undock if needed
 * @member `FOLLOW_PATH` - Currently following path
 * @member `GET_NEW_PATH` - Recalculating a path due to obstacle
 * @member `DOCK` - Docking to goal
 * @member `SEGMENT` - Currently following segment
 * @member `FINISHED` - Move order finished
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.VehToDockedStepCode.html RoboccDocs} for further information
*/
var VehToDockedStepCode;
(function (VehToDockedStepCode) {
    /** Undefined */
    VehToDockedStepCode[VehToDockedStepCode["UNDEFINED"] = 0] = "UNDEFINED";
    /** Get data before starting go to */
    VehToDockedStepCode[VehToDockedStepCode["GET_DATA"] = 1] = "GET_DATA";
    /** Retrieve goal of move order */
    VehToDockedStepCode[VehToDockedStepCode["INIT_GOAL"] = 2] = "INIT_GOAL";
    /** Calculate the path to goal */
    VehToDockedStepCode[VehToDockedStepCode["GET_PATH"] = 3] = "GET_PATH";
    /** Undock if needed */
    VehToDockedStepCode[VehToDockedStepCode["UNDOCK"] = 4] = "UNDOCK";
    /** Currently following path */
    VehToDockedStepCode[VehToDockedStepCode["FOLLOW_PATH"] = 5] = "FOLLOW_PATH";
    /** Recalculating a path due to obstacle */
    VehToDockedStepCode[VehToDockedStepCode["GET_NEW_PATH"] = 6] = "GET_NEW_PATH";
    /** Docking to goal */
    VehToDockedStepCode[VehToDockedStepCode["DOCK"] = 7] = "DOCK";
    /** Currently following segment */
    VehToDockedStepCode[VehToDockedStepCode["SEGMENT"] = 8] = "SEGMENT";
    /** Move order finished */
    VehToDockedStepCode[VehToDockedStepCode["FINISHED"] = 100] = "FINISHED";
})(VehToDockedStepCode || (exports.VehToDockedStepCode = VehToDockedStepCode = {}));
/**
 * **Enum docking status**
 *
 * List all docking status the vehicle can be 🔌
 * @member `UNKNOWN` - Unknown docking status
 * @member `DOCKED` - Vehicle is docked
 * @member `DOCKING` - Vehicle is currently docking
 * @member `UNDOCKING` - Vehicle is currently undocking
 * @member `UNDOCKED` - Vehicle is currently undocked
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.DockingStatus.html RoboccDocs} for further information
*/
var DockingStatus;
(function (DockingStatus) {
    /** Unknown docking status */
    DockingStatus[DockingStatus["UNKNOWN"] = 0] = "UNKNOWN";
    /** Vehicle is docked */
    DockingStatus[DockingStatus["DOCKED"] = 1] = "DOCKED";
    /** Vehicle is currently docking */
    DockingStatus[DockingStatus["DOCKING"] = 2] = "DOCKING";
    /** Vehicle is currently undocking */
    DockingStatus[DockingStatus["UNDOCKING"] = 3] = "UNDOCKING";
    /** Vehicle is currently undocked */
    DockingStatus[DockingStatus["UNDOCKED"] = 4] = "UNDOCKED";
})(DockingStatus || (exports.DockingStatus = DockingStatus = {}));
/**
 * **Enum follow me status**
 *
 * List all follow me status 👣
 * @member `NOT_SET` - Unknown follow me status
 * @member `STOPPED` - Follow me is stopped
 * @member `FOLLOWING` - Vehicle is currently following a target
 * @member `TARGET_LOST` - Vehicle as lost its target
 * @member `RESETED` - Vehicle is waiting for target
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.FollowMeStatus.html RoboccDocs} for further information
*/
var FollowMeStatus;
(function (FollowMeStatus) {
    /** Unknown follow me status */
    FollowMeStatus[FollowMeStatus["NOT_SET"] = 0] = "NOT_SET";
    /** Follow me is stopped */
    FollowMeStatus[FollowMeStatus["STOPPED"] = 1] = "STOPPED";
    /** Vehicle is currently following a target */
    FollowMeStatus[FollowMeStatus["FOLLOWING"] = 2] = "FOLLOWING";
    /** Vehicle as lost its target */
    FollowMeStatus[FollowMeStatus["TARGET_LOST"] = 3] = "TARGET_LOST";
    /** Vehicle is waiting for target */
    FollowMeStatus[FollowMeStatus["RESETED"] = 4] = "RESETED";
})(FollowMeStatus || (exports.FollowMeStatus = FollowMeStatus = {}));
/**
 * **Enum docking type**
 *
 * List all docking type
 * @member `CHARGING_STATION` - CHARGING_STATION
 * @member `DOCKED_POSE` - DOCKED_POSE
 * @member `SHELF_PICKING` - SHELF_PICKING
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.DockingType.html RoboccDocs} for further information
*/
var DockingType;
(function (DockingType) {
    /** CHARGING_STATION */
    DockingType[DockingType["CHARGING_STATION"] = 0] = "CHARGING_STATION";
    /** DOCKED_POSE */
    DockingType[DockingType["DOCKED_POSE"] = 1] = "DOCKED_POSE";
    /** SHELF_PICKING */
    DockingType[DockingType["SHELF_PICKING"] = 2] = "SHELF_PICKING";
})(DockingType || (exports.DockingType = DockingType = {}));
/**
 * **Enum Veh to step code**
 *
 * List all steps through which move order will pass
 * @member `UNDEFINED` - Undefined
 * @member `GET_DATA` - Get data before starting go to
 * @member `INIT_GOAL` - Retrieve goal of move order
 * @member `GET_PATH` - Calculate the path to goal
 * @member `UNDOCK` - Undock if needed
 * @member `FOLLOW_PATH` - Currently following path
 * @member `GET_NEW_PATH` - Recalculating a path due to obstacle
 * @member `DOCK` - Dock if needed
 * @member `SEGMENT` - Currently following segment
 * @member `FINISHED` - Move order finished
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.VehToStepCode.html RoboccDocs} for further information
*/
var VehToStepCode;
(function (VehToStepCode) {
    /** Undefined */
    VehToStepCode[VehToStepCode["UNDEFINED"] = 0] = "UNDEFINED";
    /** Get data before starting go to */
    VehToStepCode[VehToStepCode["GET_DATA"] = 1] = "GET_DATA";
    /** Retrieve goal of move order */
    VehToStepCode[VehToStepCode["INIT_GOAL"] = 2] = "INIT_GOAL";
    /** Calculate the path to goal */
    VehToStepCode[VehToStepCode["GET_PATH"] = 3] = "GET_PATH";
    /** Undock if needed */
    VehToStepCode[VehToStepCode["UNDOCK"] = 4] = "UNDOCK";
    /** Currently following path */
    VehToStepCode[VehToStepCode["FOLLOW_PATH"] = 5] = "FOLLOW_PATH";
    /** Recalculating a path due to obstacle */
    VehToStepCode[VehToStepCode["GET_NEW_PATH"] = 6] = "GET_NEW_PATH";
    /** Dock if needed */
    VehToStepCode[VehToStepCode["DOCK"] = 7] = "DOCK";
    /** Currently following segment */
    VehToStepCode[VehToStepCode["SEGMENT"] = 8] = "SEGMENT";
    /** Move order finished */
    VehToStepCode[VehToStepCode["FINISHED"] = 100] = "FINISHED";
})(VehToStepCode || (exports.VehToStepCode = VehToStepCode = {}));
/**
 * **Enum LED animations**
 *
 * List of all animations supported of Noeme 🚥
 * @member `AUTO` - Auto animation used to modify color but still use the animation vehicle should use
 * @member `NOT_SET` - Void LED animation
 * @member `NO_ANIMATION` - No animation used to display a fixed color
 * @member `BLINK` - Blink animation like blinker's car
 * @member `BLINK_HALF` - Two-state cutted in half blink animation
 * @member `BLINK_HALF_WB` - Two-state cutted in half blink animation with battery indicator
 * @member `FADE` - Fade animation like breathing
 * @member `PROGRESSING` - Progressing animation beginning at middle rear and gradually turning on LED
 * @member `PROGRESSING_FROM_CENTER` - Progressing animation beginning at each corner and gradually turning on LED
 * @member `HEAD_LIGHT` - All LED turn to white with max power
 * @member `SPINNING` - Multiple evenly-dispatched batches of LED turned on that move along the strip
 * @member `CONVERGE` - Multiple symmetrically-dispatched batches of LED turned on that move along the strip from middle side to merge in middle rear and front
 * @member `DIVERGE` - Multiple symmetrically-dispatched batches of LED turned on that move along the strip from middle rear and front to merge in middle side
 * @member `FR_FLAG` - French flag fading with empty corners, no color needed
 * @member `RAINBOW` - Rainbow animation, no color needed
 * @member `K2000` - KITT LED strip animation from TV show Knight Rider
 * @member `PROGRESSING_FROM_CENTER_CHARGING` - PROGRESSING_FROM_CENTER_CHARGING
 * @member `PROGRESSING_FROM_CENTER_CHARGING_ALT` - PROGRESSING_FROM_CENTER_CHARGING_ALT
 * @member `MOVE` - MOVE
 * @member `MOVE_FRONT` - MOVE_FRONT
 * @member `MOVE_BACK` - MOVE_BACK
 * @member `MOVE_LEFT` - MOVE_LEFT
 * @member `MOVE_RIGHT` - MOVE_RIGHT
 * @member `MOVE_STOP` - MOVE_STOP
 * @member `FADE_1_LED` - FADE_1_LED
 * @member `FADE_2_LEDS` - FADE_2_LEDS
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.LedAnim.html RoboccDocs} for further information
*/
var LedAnim;
(function (LedAnim) {
    /** Auto animation used to modify color but still use the animation vehicle should use */
    LedAnim[LedAnim["AUTO"] = -1] = "AUTO";
    /** Void LED animation */
    LedAnim[LedAnim["NOT_SET"] = 0] = "NOT_SET";
    /** No animation used to display a fixed color */
    LedAnim[LedAnim["NO_ANIMATION"] = 1] = "NO_ANIMATION";
    /** Blink animation like blinker's car */
    LedAnim[LedAnim["BLINK"] = 2] = "BLINK";
    /** Two-state cutted in half blink animation */
    LedAnim[LedAnim["BLINK_HALF"] = 3] = "BLINK_HALF";
    /** Two-state cutted in half blink animation with battery indicator */
    LedAnim[LedAnim["BLINK_HALF_WB"] = 4] = "BLINK_HALF_WB";
    /** Fade animation like breathing */
    LedAnim[LedAnim["FADE"] = 5] = "FADE";
    /** Progressing animation beginning at middle rear and gradually turning on LED */
    LedAnim[LedAnim["PROGRESSING"] = 6] = "PROGRESSING";
    /** Progressing animation beginning at each corner and gradually turning on LED */
    LedAnim[LedAnim["PROGRESSING_FROM_CENTER"] = 7] = "PROGRESSING_FROM_CENTER";
    /** All LED turn to white with max power */
    LedAnim[LedAnim["HEAD_LIGHT"] = 8] = "HEAD_LIGHT";
    /** Multiple evenly-dispatched batches of LED turned on that move along the strip */
    LedAnim[LedAnim["SPINNING"] = 9] = "SPINNING";
    /** Multiple symmetrically-dispatched batches of LED turned on that move along the strip from middle side to merge in middle rear and front */
    LedAnim[LedAnim["CONVERGE"] = 10] = "CONVERGE";
    /** Multiple symmetrically-dispatched batches of LED turned on that move along the strip from middle rear and front to merge in middle side */
    LedAnim[LedAnim["DIVERGE"] = 11] = "DIVERGE";
    /** French flag fading with empty corners, no color needed */
    LedAnim[LedAnim["FR_FLAG"] = 12] = "FR_FLAG";
    /** Rainbow animation, no color needed */
    LedAnim[LedAnim["RAINBOW"] = 13] = "RAINBOW";
    /** KITT LED strip animation from TV show Knight Rider */
    LedAnim[LedAnim["K2000"] = 14] = "K2000";
    /** PROGRESSING_FROM_CENTER_CHARGING */
    LedAnim[LedAnim["PROGRESSING_FROM_CENTER_CHARGING"] = 15] = "PROGRESSING_FROM_CENTER_CHARGING";
    /** PROGRESSING_FROM_CENTER_CHARGING_ALT */
    LedAnim[LedAnim["PROGRESSING_FROM_CENTER_CHARGING_ALT"] = 16] = "PROGRESSING_FROM_CENTER_CHARGING_ALT";
    /** MOVE */
    LedAnim[LedAnim["MOVE"] = 17] = "MOVE";
    /** MOVE_FRONT */
    LedAnim[LedAnim["MOVE_FRONT"] = 18] = "MOVE_FRONT";
    /** MOVE_BACK */
    LedAnim[LedAnim["MOVE_BACK"] = 19] = "MOVE_BACK";
    /** MOVE_LEFT */
    LedAnim[LedAnim["MOVE_LEFT"] = 20] = "MOVE_LEFT";
    /** MOVE_RIGHT */
    LedAnim[LedAnim["MOVE_RIGHT"] = 21] = "MOVE_RIGHT";
    /** MOVE_STOP */
    LedAnim[LedAnim["MOVE_STOP"] = 22] = "MOVE_STOP";
    /** FADE_1_LED */
    LedAnim[LedAnim["FADE_1_LED"] = 23] = "FADE_1_LED";
    /** FADE_2_LEDS */
    LedAnim[LedAnim["FADE_2_LEDS"] = 24] = "FADE_2_LEDS";
})(LedAnim || (exports.LedAnim = LedAnim = {}));
/**
 * **Enum LED animations**
 *
 * List of all animations supported of Noeme 🚥
 * @member `CORNER_NOT_SET` - No corner animation set
 * @member `CORNER_NO_ANIMATION` - Corners are currently in no animation mode
 * @member `CORNER_BLINK` - Corners are currently in blink animation
 * @member `CORNER_FADE` - Corners are currently in fade animation
 * @member `CORNER_CAR_MODE` - Corners are currently in car mode
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.LedCornerAnim.html RoboccDocs} for further information
*/
var LedCornerAnim;
(function (LedCornerAnim) {
    /** No corner animation set */
    LedCornerAnim[LedCornerAnim["CORNER_NOT_SET"] = 0] = "CORNER_NOT_SET";
    /** Corners are currently in no animation mode */
    LedCornerAnim[LedCornerAnim["CORNER_NO_ANIMATION"] = 1] = "CORNER_NO_ANIMATION";
    /** Corners are currently in blink animation */
    LedCornerAnim[LedCornerAnim["CORNER_BLINK"] = 2] = "CORNER_BLINK";
    /** Corners are currently in fade animation */
    LedCornerAnim[LedCornerAnim["CORNER_FADE"] = 3] = "CORNER_FADE";
    /** Corners are currently in car mode */
    LedCornerAnim[LedCornerAnim["CORNER_CAR_MODE"] = 4] = "CORNER_CAR_MODE";
})(LedCornerAnim || (exports.LedCornerAnim = LedCornerAnim = {}));
/**
 * **Enum pose reference**
 *
 * List all pose reference
 * @member `MAP` - Pose reference is map
 * @member `VEHICLE` - Pose reference is vehicle
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.PoseReference.html RoboccDocs} for further information
*/
var PoseReference;
(function (PoseReference) {
    /** Pose reference is map */
    PoseReference[PoseReference["MAP"] = 0] = "MAP";
    /** Pose reference is vehicle */
    PoseReference[PoseReference["VEHICLE"] = 1] = "VEHICLE";
})(PoseReference || (exports.PoseReference = PoseReference = {}));
/**
 * **Enum network type**
 *
 * List all network type available on vehicle 🌐
 * @member `ETHERNET` - Ethernet connection
 * @member `WIFI` - Wi-Fi connection
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.NetworkType.html RoboccDocs} for further information
*/
var NetworkType;
(function (NetworkType) {
    /** Ethernet connection */
    NetworkType[NetworkType["ETHERNET"] = 0] = "ETHERNET";
    /** Wi-Fi connection */
    NetworkType[NetworkType["WIFI"] = 1] = "WIFI";
})(NetworkType || (exports.NetworkType = NetworkType = {}));
/**
 * **Enum network status**
 *
 * List all status WAN and Hotspot 🌐
 * @member `UNKNOWN` - Unknown network state
 * @member `DISCONNECTED` - Network is disconnected
 * @member `CONNECTED` - Network is connected
 * @member `CONNECTING` - Network is connecting
 * @member `DISABLED` - Network is disabled
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.NetworkStatus.html RoboccDocs} for further information
*/
var NetworkStatus;
(function (NetworkStatus) {
    /** Unknown network state */
    NetworkStatus[NetworkStatus["UNKNOWN"] = 0] = "UNKNOWN";
    /** Network is disconnected */
    NetworkStatus[NetworkStatus["DISCONNECTED"] = 1] = "DISCONNECTED";
    /** Network is connected */
    NetworkStatus[NetworkStatus["CONNECTED"] = 2] = "CONNECTED";
    /** Network is connecting */
    NetworkStatus[NetworkStatus["CONNECTING"] = 3] = "CONNECTING";
    /** Network is disabled */
    NetworkStatus[NetworkStatus["DISABLED"] = 254] = "DISABLED";
})(NetworkStatus || (exports.NetworkStatus = NetworkStatus = {}));
/**
 * **Enum global status of network**
 *
 * List all status global network 🌐
 * @member `UNKNOWN` - Unknown network global state
 * @member `DISCONNECTED` - Network is disconnected
 * @member `CONNECTED` - Network is connected
 * @member `CONNECTING` - Network is connecting
 * @member `CONNECTED_NOINTERNET` - Network is connected without internet connection
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.NetworkGlobalStatus.html RoboccDocs} for further information
*/
var NetworkGlobalStatus;
(function (NetworkGlobalStatus) {
    /** Unknown network global state */
    NetworkGlobalStatus[NetworkGlobalStatus["UNKNOWN"] = 0] = "UNKNOWN";
    /** Network is disconnected */
    NetworkGlobalStatus[NetworkGlobalStatus["DISCONNECTED"] = 1] = "DISCONNECTED";
    /** Network is connected */
    NetworkGlobalStatus[NetworkGlobalStatus["CONNECTED"] = 2] = "CONNECTED";
    /** Network is connecting */
    NetworkGlobalStatus[NetworkGlobalStatus["CONNECTING"] = 3] = "CONNECTING";
    /** Network is connected without internet connection */
    NetworkGlobalStatus[NetworkGlobalStatus["CONNECTED_NOINTERNET"] = 4] = "CONNECTED_NOINTERNET";
})(NetworkGlobalStatus || (exports.NetworkGlobalStatus = NetworkGlobalStatus = {}));
/**
 * **Enum sound scenario**
 *
 * List all scenarios that play sound on vehicle 🔉
 * @member `VEH_INIT` - Sound played at vehicle initialization at each boot
 * @member `HOTSPOT_CONNECTION` - Sound played at each connection on vehicle hotspot
 * @member `HIR` - Sound played when vehicle needs human intervention
 * @member `OBSTACLE` - Sound played when vehicle detects an obstacle
 * @member `SPECIAL_BEHAVIOUR_SCENARIO` - Sound played on special behaviour
 * @member `AUTOPILOT_SCENARIO` - Sound played on behaviour steps of autopilot sequence
 * @member `API_SCENARIO` - Sound played by API calls
 * @member `AREA_SCENARIO` - Sound defined in area behaviour and played when veh is in, enters, or exits area
 * @member `IDLE` - Sound played when veh is IDLE, anytime vehicle do nothing
 * @member `SAFETY_DISABLED` - Sound played when veh has its safety disabled
 * @member `SAFETY_ALERT` - Sound played when there is a safety alert on vehicle
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.SoundScenario.html RoboccDocs} for further information
*/
var SoundScenario;
(function (SoundScenario) {
    /** Sound played at vehicle initialization at each boot */
    SoundScenario[SoundScenario["VEH_INIT"] = 0] = "VEH_INIT";
    /** Sound played at each connection on vehicle hotspot */
    SoundScenario[SoundScenario["HOTSPOT_CONNECTION"] = 1] = "HOTSPOT_CONNECTION";
    /** Sound played when vehicle needs human intervention */
    SoundScenario[SoundScenario["HIR"] = 2] = "HIR";
    /** Sound played when vehicle detects an obstacle */
    SoundScenario[SoundScenario["OBSTACLE"] = 3] = "OBSTACLE";
    /** Sound played on special behaviour */
    SoundScenario[SoundScenario["SPECIAL_BEHAVIOUR_SCENARIO"] = 4] = "SPECIAL_BEHAVIOUR_SCENARIO";
    /** Sound played on behaviour steps of autopilot sequence */
    SoundScenario[SoundScenario["AUTOPILOT_SCENARIO"] = 5] = "AUTOPILOT_SCENARIO";
    /** Sound played by API calls */
    SoundScenario[SoundScenario["API_SCENARIO"] = 6] = "API_SCENARIO";
    /** Sound defined in area behaviour and played when veh is in, enters, or exits area */
    SoundScenario[SoundScenario["AREA_SCENARIO"] = 7] = "AREA_SCENARIO";
    /** Sound played when veh is IDLE, anytime vehicle do nothing */
    SoundScenario[SoundScenario["IDLE"] = 8] = "IDLE";
    /** Sound played when veh has its safety disabled */
    SoundScenario[SoundScenario["SAFETY_DISABLED"] = 9] = "SAFETY_DISABLED";
    /** Sound played when there is a safety alert on vehicle */
    SoundScenario[SoundScenario["SAFETY_ALERT"] = 10] = "SAFETY_ALERT";
})(SoundScenario || (exports.SoundScenario = SoundScenario = {}));
/**
 * **Enum of stop sources**
 *
 * List all stop sources
 * @member `UNKNOWN` - Stop source is unknown
 * @member `LIDAR_R2000_CENTER` - Vehicle stopped because of an obstacle detected by the LiDAR R2000 center
 * @member `CAMERA_FRONT` - Vehicle stopped because of an obstacle detected by the camera front
 * @member `CAMERA_BACK` - Vehicle stopped because of an obstacle detected by the camera back
 * @member `US_SENSOR_01_H` - Vehicle stopped because of an obstacle detected by the US sensor 01h
 * @member `US_SENSOR_02_H` - Vehicle stopped because of an obstacle detected by the US sensor 02h
 * @member `US_SENSOR_04_H` - Vehicle stopped because of an obstacle detected by the US sensor 04h
 * @member `US_SENSOR_05_H` - Vehicle stopped because of an obstacle detected by the US sensor 05h
 * @member `US_SENSOR_07_H` - Vehicle stopped because of an obstacle detected by the US sensor 07h
 * @member `US_SENSOR_08_H` - Vehicle stopped because of an obstacle detected by the US sensor 08h
 * @member `US_SENSOR_10_H` - Vehicle stopped because of an obstacle detected by the US sensor 10h
 * @member `US_SENSOR_11_H` - Vehicle stopped because of an obstacle detected by the US sensor 11h
 * @member `NAVIGATION` - Vehicle stopped because of a navigation algorithm
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.StopSource.html RoboccDocs} for further information
*/
var StopSource;
(function (StopSource) {
    /** Stop source is unknown */
    StopSource[StopSource["UNKNOWN"] = 0] = "UNKNOWN";
    /** Vehicle stopped because of an obstacle detected by the LiDAR R2000 center */
    StopSource[StopSource["LIDAR_R2000_CENTER"] = 1] = "LIDAR_R2000_CENTER";
    /** Vehicle stopped because of an obstacle detected by the camera front */
    StopSource[StopSource["CAMERA_FRONT"] = 2] = "CAMERA_FRONT";
    /** Vehicle stopped because of an obstacle detected by the camera back */
    StopSource[StopSource["CAMERA_BACK"] = 3] = "CAMERA_BACK";
    /** Vehicle stopped because of an obstacle detected by the US sensor 01h */
    StopSource[StopSource["US_SENSOR_01_H"] = 4] = "US_SENSOR_01_H";
    /** Vehicle stopped because of an obstacle detected by the US sensor 02h */
    StopSource[StopSource["US_SENSOR_02_H"] = 5] = "US_SENSOR_02_H";
    /** Vehicle stopped because of an obstacle detected by the US sensor 04h */
    StopSource[StopSource["US_SENSOR_04_H"] = 6] = "US_SENSOR_04_H";
    /** Vehicle stopped because of an obstacle detected by the US sensor 05h */
    StopSource[StopSource["US_SENSOR_05_H"] = 7] = "US_SENSOR_05_H";
    /** Vehicle stopped because of an obstacle detected by the US sensor 07h */
    StopSource[StopSource["US_SENSOR_07_H"] = 8] = "US_SENSOR_07_H";
    /** Vehicle stopped because of an obstacle detected by the US sensor 08h */
    StopSource[StopSource["US_SENSOR_08_H"] = 9] = "US_SENSOR_08_H";
    /** Vehicle stopped because of an obstacle detected by the US sensor 10h */
    StopSource[StopSource["US_SENSOR_10_H"] = 10] = "US_SENSOR_10_H";
    /** Vehicle stopped because of an obstacle detected by the US sensor 11h */
    StopSource[StopSource["US_SENSOR_11_H"] = 11] = "US_SENSOR_11_H";
    /** Vehicle stopped because of a navigation algorithm */
    StopSource[StopSource["NAVIGATION"] = 12] = "NAVIGATION";
})(StopSource || (exports.StopSource = StopSource = {}));
/**
 * **Enum of computer types**
 *
 * List all computer types
 * @member `COMPUTER_UNKNOWN` - Unknown computer
 * @member `COMPUTER_NUC13` - NUC 13
 * @member `COMPUTER_LATTEPANDA` - LattePanda
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.ComputerType.html RoboccDocs} for further information
*/
var ComputerType;
(function (ComputerType) {
    /** Unknown computer */
    ComputerType[ComputerType["COMPUTER_UNKNOWN"] = 0] = "COMPUTER_UNKNOWN";
    /** NUC 13 */
    ComputerType[ComputerType["COMPUTER_NUC13"] = 1] = "COMPUTER_NUC13";
    /** LattePanda */
    ComputerType[ComputerType["COMPUTER_LATTEPANDA"] = 2] = "COMPUTER_LATTEPANDA";
})(ComputerType || (exports.ComputerType = ComputerType = {}));
/**
 * **Enum of MCU types**
 *
 * List all MCU types
 * @member `MCU_UNKNOWN` - Unknown MCU
 * @member `MCU_TEENSY` - Pico
 * @member `MCU_PICO` - Pico
 * @member `MCU_LEONARDO` - Leonardo
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.McuType.html RoboccDocs} for further information
*/
var McuType;
(function (McuType) {
    /** Unknown MCU */
    McuType[McuType["MCU_UNKNOWN"] = 0] = "MCU_UNKNOWN";
    /** Pico */
    McuType[McuType["MCU_TEENSY"] = 1] = "MCU_TEENSY";
    /** Pico */
    McuType[McuType["MCU_PICO"] = 2] = "MCU_PICO";
    /** Leonardo */
    McuType[McuType["MCU_LEONARDO"] = 3] = "MCU_LEONARDO";
})(McuType || (exports.McuType = McuType = {}));
/**
 * **Enum of motor types**
 *
 * List all motor types
 * @member `MOTOR_UNKNOWN` - Unknown motor
 * @member `MOTOR_100` - Motor 100kg
 * @member `MOTOR_200` - Motor 200kg
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.MotorType.html RoboccDocs} for further information
*/
var MotorType;
(function (MotorType) {
    /** Unknown motor */
    MotorType[MotorType["MOTOR_UNKNOWN"] = 0] = "MOTOR_UNKNOWN";
    /** Motor 100kg */
    MotorType[MotorType["MOTOR_100"] = 1] = "MOTOR_100";
    /** Motor 200kg */
    MotorType[MotorType["MOTOR_200"] = 2] = "MOTOR_200";
})(MotorType || (exports.MotorType = MotorType = {}));
/**
 * **Enum of navigation state**
 *
 * List all navigation state
 * @member `UNKNOWN` - Unknown navigation state (start or stop might have failed)
 * @member `STOPPED` - Navigation is stopped
 * @member `STARTING` - Navigation is starting
 * @member `STARTED` - Navigation is started
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.NavigationState.html RoboccDocs} for further information
*/
var NavigationState;
(function (NavigationState) {
    /** Unknown navigation state (start or stop might have failed) */
    NavigationState[NavigationState["UNKNOWN"] = 0] = "UNKNOWN";
    /** Navigation is stopped */
    NavigationState[NavigationState["STOPPED"] = 1] = "STOPPED";
    /** Navigation is starting */
    NavigationState[NavigationState["STARTING"] = 2] = "STARTING";
    /** Navigation is started */
    NavigationState[NavigationState["STARTED"] = 3] = "STARTED";
})(NavigationState || (exports.NavigationState = NavigationState = {}));
/**
 * **Language**
 *
 * Language
 * @member `EN` - EN
 * @member `FR` - FR
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.Language.html RoboccDocs} for further information
*/
var Language;
(function (Language) {
    /** EN */
    Language["EN"] = "en";
    /** FR */
    Language["FR"] = "fr";
})(Language || (exports.Language = Language = {}));
/**
 * **Invalid data section**
 *
 * Invalid data section
 * @member `BUTTONS` - BUTTONS
 * @member `VEHS` - VEHS
 * @member `WAITING_POSES` - WAITING_POSES
 * @member `CUSTOM_COMMANDS` - CUSTOM_COMMANDS
 * @member `CONTROLLER_LORAS` - CONTROLLER_LORAS
 * @member `DOCKED_POSE_CONFIGS` - DOCKED_POSE_CONFIGS
 * @member `MAP_ELEMENT_CONFIGS` - MAP_ELEMENT_CONFIGS
 * @member `GROUPS` - GROUPS
 * @member `SOUNDS` - SOUNDS
 * @member `VEH_SIZE` - VEH_SIZE
 * @member `AREA_CONFIGS` - AREA_CONFIGS
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.InvalidDataSection.html RoboccDocs} for further information
*/
var InvalidDataSection;
(function (InvalidDataSection) {
    /** BUTTONS */
    InvalidDataSection[InvalidDataSection["BUTTONS"] = 0] = "BUTTONS";
    /** VEHS */
    InvalidDataSection[InvalidDataSection["VEHS"] = 1] = "VEHS";
    /** WAITING_POSES */
    InvalidDataSection[InvalidDataSection["WAITING_POSES"] = 2] = "WAITING_POSES";
    /** CUSTOM_COMMANDS */
    InvalidDataSection[InvalidDataSection["CUSTOM_COMMANDS"] = 3] = "CUSTOM_COMMANDS";
    /** CONTROLLER_LORAS */
    InvalidDataSection[InvalidDataSection["CONTROLLER_LORAS"] = 4] = "CONTROLLER_LORAS";
    /** DOCKED_POSE_CONFIGS */
    InvalidDataSection[InvalidDataSection["DOCKED_POSE_CONFIGS"] = 5] = "DOCKED_POSE_CONFIGS";
    /** MAP_ELEMENT_CONFIGS */
    InvalidDataSection[InvalidDataSection["MAP_ELEMENT_CONFIGS"] = 6] = "MAP_ELEMENT_CONFIGS";
    /** GROUPS */
    InvalidDataSection[InvalidDataSection["GROUPS"] = 7] = "GROUPS";
    /** SOUNDS */
    InvalidDataSection[InvalidDataSection["SOUNDS"] = 8] = "SOUNDS";
    /** VEH_SIZE */
    InvalidDataSection[InvalidDataSection["VEH_SIZE"] = 9] = "VEH_SIZE";
    /** AREA_CONFIGS */
    InvalidDataSection[InvalidDataSection["AREA_CONFIGS"] = 10] = "AREA_CONFIGS";
})(InvalidDataSection || (exports.InvalidDataSection = InvalidDataSection = {}));
/**
 * **Peer type**
 *
 * Peer type
 * @member `NONE` - NONE
 * @member `MANAGER` - MANAGER
 * @member `ROC` - ROC
 * @member `BUTTON` - BUTTON
 * @member `CONTROLLER` - CONTROLLER
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.PeerType.html RoboccDocs} for further information
*/
var PeerType;
(function (PeerType) {
    /** NONE */
    PeerType[PeerType["NONE"] = 0] = "NONE";
    /** MANAGER */
    PeerType[PeerType["MANAGER"] = 1] = "MANAGER";
    /** ROC */
    PeerType[PeerType["ROC"] = 2] = "ROC";
    /** BUTTON */
    PeerType[PeerType["BUTTON"] = 3] = "BUTTON";
    /** CONTROLLER */
    PeerType[PeerType["CONTROLLER"] = 4] = "CONTROLLER";
})(PeerType || (exports.PeerType = PeerType = {}));
/**
 * **Roc event**
 *
 * Roc event for sound
 * @member `ON_PAUSE` - ON_PAUSE
 * @member `RETRY_MOVE` - RETRY_MOVE
 * @member `ROC_L_BAD_LIFT_POSITION` - ROC_L_BAD_LIFT_POSITION
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.RocEvent.html RoboccDocs} for further information
*/
var RocEvent;
(function (RocEvent) {
    /** ON_PAUSE */
    RocEvent[RocEvent["ON_PAUSE"] = 5] = "ON_PAUSE";
    /** RETRY_MOVE */
    RocEvent[RocEvent["RETRY_MOVE"] = 7] = "RETRY_MOVE";
    /** ROC_L_BAD_LIFT_POSITION */
    RocEvent[RocEvent["ROC_L_BAD_LIFT_POSITION"] = 8] = "ROC_L_BAD_LIFT_POSITION";
})(RocEvent || (exports.RocEvent = RocEvent = {}));
/**
 * **Contact state**
 *
 * Contact state
 * @member `OFF` - OFF
 * @member `ON` - ON
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.ContactState.html RoboccDocs} for further information
*/
var ContactState;
(function (ContactState) {
    /** OFF */
    ContactState[ContactState["OFF"] = 0] = "OFF";
    /** ON */
    ContactState[ContactState["ON"] = 1] = "ON";
})(ContactState || (exports.ContactState = ContactState = {}));
/**
 * **Docked pose station type**
 *
 * Docked pose station type
 * @member `NONE` - NONE
 * @member `LOAD` - LOAD
 * @member `UNLOAD` - UNLOAD
 * @member `PICKING` - PICKING
 * @member `SHELF` - SHELF
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.DockedPoseStationType.html RoboccDocs} for further information
*/
var DockedPoseStationType;
(function (DockedPoseStationType) {
    /** NONE */
    DockedPoseStationType[DockedPoseStationType["NONE"] = 0] = "NONE";
    /** LOAD */
    DockedPoseStationType[DockedPoseStationType["LOAD"] = 1] = "LOAD";
    /** UNLOAD */
    DockedPoseStationType[DockedPoseStationType["UNLOAD"] = 2] = "UNLOAD";
    /** PICKING */
    DockedPoseStationType[DockedPoseStationType["PICKING"] = 3] = "PICKING";
    /** SHELF */
    DockedPoseStationType[DockedPoseStationType["SHELF"] = 4] = "SHELF";
})(DockedPoseStationType || (exports.DockedPoseStationType = DockedPoseStationType = {}));
/**
 * **LoRa Controller Command**
 *
 * Command for LoRa Controller
 * @member `UNDEFINED` - UNDEFINED
 * @member `ACTION_RELAY1_ON` - ACTION_RELAY1_ON
 * @member `ACTION_RELAY1_OFF` - ACTION_RELAY1_OFF
 * @member `ACTION_RELAY1_PULSE` - ACTION_RELAY1_PULSE
 * @member `ACTION_RELAY2_ON` - ACTION_RELAY2_ON
 * @member `ACTION_RELAY2_OFF` - ACTION_RELAY2_OFF
 * @member `ACTION_RELAY2_PULSE` - ACTION_RELAY2_PULSE
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.LoraControllerCommand.html RoboccDocs} for further information
*/
var LoraControllerCommand;
(function (LoraControllerCommand) {
    /** UNDEFINED */
    LoraControllerCommand[LoraControllerCommand["UNDEFINED"] = 0] = "UNDEFINED";
    /** ACTION_RELAY1_ON */
    LoraControllerCommand[LoraControllerCommand["ACTION_RELAY1_ON"] = 54] = "ACTION_RELAY1_ON";
    /** ACTION_RELAY1_OFF */
    LoraControllerCommand[LoraControllerCommand["ACTION_RELAY1_OFF"] = 55] = "ACTION_RELAY1_OFF";
    /** ACTION_RELAY1_PULSE */
    LoraControllerCommand[LoraControllerCommand["ACTION_RELAY1_PULSE"] = 56] = "ACTION_RELAY1_PULSE";
    /** ACTION_RELAY2_ON */
    LoraControllerCommand[LoraControllerCommand["ACTION_RELAY2_ON"] = 57] = "ACTION_RELAY2_ON";
    /** ACTION_RELAY2_OFF */
    LoraControllerCommand[LoraControllerCommand["ACTION_RELAY2_OFF"] = 58] = "ACTION_RELAY2_OFF";
    /** ACTION_RELAY2_PULSE */
    LoraControllerCommand[LoraControllerCommand["ACTION_RELAY2_PULSE"] = 59] = "ACTION_RELAY2_PULSE";
})(LoraControllerCommand || (exports.LoraControllerCommand = LoraControllerCommand = {}));
/**
 * **Contact type**
 *
 * Contact type
 * @member `NONE` - NONE
 * @member `CALL` - CALL
 * @member `PRIORITY_CALL` - PRIORITY_CALL
 * @member `AVAILABILITY` - AVAILABILITY
 * @member `RELEASE` - RELEASE
 * @member `EMERGENCY` - EMERGENCY
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.ContactType.html RoboccDocs} for further information
*/
var ContactType;
(function (ContactType) {
    /** NONE */
    ContactType[ContactType["NONE"] = 0] = "NONE";
    /** CALL */
    ContactType[ContactType["CALL"] = 1] = "CALL";
    /** PRIORITY_CALL */
    ContactType[ContactType["PRIORITY_CALL"] = 2] = "PRIORITY_CALL";
    /** AVAILABILITY */
    ContactType[ContactType["AVAILABILITY"] = 3] = "AVAILABILITY";
    /** RELEASE */
    ContactType[ContactType["RELEASE"] = 4] = "RELEASE";
    /** EMERGENCY */
    ContactType[ContactType["EMERGENCY"] = 5] = "EMERGENCY";
})(ContactType || (exports.ContactType = ContactType = {}));
/**
 * **Contact NO/NC**
 *
 * Contact NO/NC
 * @member `NO` - NO
 * @member `NC` - NC
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.ContactNonc.html RoboccDocs} for further information
*/
var ContactNonc;
(function (ContactNonc) {
    /** NO */
    ContactNonc[ContactNonc["NO"] = 0] = "NO";
    /** NC */
    ContactNonc[ContactNonc["NC"] = 1] = "NC";
})(ContactNonc || (exports.ContactNonc = ContactNonc = {}));
/**
 * **Contact trigger**
 *
 * Contact trigger
 * @member `ON_PULSE` - ON_PULSE
 * @member `ON_HIGH` - ON_HIGH
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.ContactTrigger.html RoboccDocs} for further information
*/
var ContactTrigger;
(function (ContactTrigger) {
    /** ON_PULSE */
    ContactTrigger[ContactTrigger["ON_PULSE"] = 0] = "ON_PULSE";
    /** ON_HIGH */
    ContactTrigger[ContactTrigger["ON_HIGH"] = 1] = "ON_HIGH";
})(ContactTrigger || (exports.ContactTrigger = ContactTrigger = {}));
/**
 * **Relay action**
 *
 * Relay action
 * @member `ON_OFF` - ON_OFF
 * @member `PULSE` - PULSE
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.RelayAction.html RoboccDocs} for further information
*/
var RelayAction;
(function (RelayAction) {
    /** ON_OFF */
    RelayAction[RelayAction["ON_OFF"] = 0] = "ON_OFF";
    /** PULSE */
    RelayAction[RelayAction["PULSE"] = 1] = "PULSE";
})(RelayAction || (exports.RelayAction = RelayAction = {}));
/**
 * **Vehicle status**
 *
 * Vehicle status
 * @member `STATUS_FREE` - STATUS_FREE
 * @member `STATUS_MAINTENANCE` - STATUS_MAINTENANCE
 * @member `STATUS_IN_CHARGE` - STATUS_IN_CHARGE
 * @member `STATUS_IN_CHARGE_REQUIRED` - STATUS_IN_CHARGE_REQUIRED
 * @member `STATUS_GOTO_CHARGE` - STATUS_GOTO_CHARGE
 * @member `STATUS_GOTO_CHARGE_REQUIRED` - STATUS_GOTO_CHARGE_REQUIRED
 * @member `STATUS_HIR` - STATUS_HIR
 * @member `STATUS_MOVE` - STATUS_MOVE
 * @member `STATUS_MOVE_DONE` - STATUS_MOVE_DONE
 * @member `STATUS_MOVE_FAILED` - STATUS_MOVE_FAILED
 * @member `STATUS_CONTINUE_MISSION` - STATUS_CONTINUE_MISSION
 * @member `STATUS_WAITING_RELEASE` - STATUS_WAITING_RELEASE
 * @member `STATUS_DISCONNECTED` - STATUS_DISCONNECTED
 * @member `STATUS_PAUSE` - STATUS_PAUSE
 * @member `STATUS_ROC_ID` - STATUS_ROC_ID
 * @member `STATUS_VEH_DISCONNECTED` - STATUS_VEH_DISCONNECTED
 * @member `STATUS_NOT_CHARGING` - STATUS_NOT_CHARGING
 * @member `STATUS_WAIT_WAITING_POSE` - STATUS_WAIT_WAITING_POSE
 * @member `STATUS_BAD_LIFT_POSITION` - STATUS_BAD_LIFT_POSITION
 * @member `STATUS_WAITING_CONTACT` - STATUS_WAITING_CONTACT
 * @member `STATUS_SLEEPING` - STATUS_SLEEPING
 * @member `STATUS_HIBERNATE` - STATUS_HIBERNATE
 * @member `ACTION_CALL_MISSION` - ACTION_CALL_MISSION
 * @member `ACTION_START_MISSION` - ACTION_START_MISSION
 * @member `ACTION_EXTEND_MISSION` - ACTION_EXTEND_MISSION
 * @member `ACTION_RELEASE_MODULE` - ACTION_RELEASE_MODULE
 * @member `ACTION_RELEASE_POSITION` - ACTION_RELEASE_POSITION
 * @member `STATUS_MESSAGES_START` - STATUS_MESSAGES_START
 * @member `STATUS_MESSAGES_END` - STATUS_MESSAGES_END
 * @member `ACTION_GET_CONTACTS_CONFIG` - ACTION_GET_CONTACTS_CONFIG
 * @member `ACTION_SET_CONTACT_CONFIG` - ACTION_SET_CONTACT_CONFIG
 * @member `STATUS_NOT_POSSIBLE` - STATUS_NOT_POSSIBLE
 * @member `STATUS_NOT_IN_OPERATING_HOURS` - STATUS_NOT_IN_OPERATING_HOURS
 * @member `STATUS_INVALID_TOP` - STATUS_INVALID_TOP
 * @member `STATUS_CANCELED` - STATUS_CANCELED
 * @member `STATUS_ROC_P_BAD_LIFT_POSITION` - STATUS_ROC_P_BAD_LIFT_POSITION
 * @member `STATUS_IN_CONFIG` - STATUS_IN_CONFIG
 * @member `STATUS_AUTOPILOT` - STATUS_AUTOPILOT
 * @member `ACTION_PAIR` - ACTION_PAIR
 * @member `STATUS_PAIRING_OK` - STATUS_PAIRING_OK
 * @member `STATUS_PAIRING_KO` - STATUS_PAIRING_KO
 * @member `ACTION_SYNC_KEYHASH` - ACTION_SYNC_KEYHASH
 * @member `STATUS_KEYHASH` - STATUS_KEYHASH
 * @member `STATUS_UPDATE_KEYS` - STATUS_UPDATE_KEYS
 * @member `SERIAL_ALLOW_PAIR` - SERIAL_ALLOW_PAIR
 * @member `SERIAL_REVOKE` - SERIAL_REVOKE
 * @member `SERIAL_PAIRED_LIST` - SERIAL_PAIRED_LIST
 * @member `SERIAL_AUTO_PAIR` - SERIAL_AUTO_PAIR
 * @member `STATUS_CONTACT` - STATUS_CONTACT
 * @member `STATUS_CONTACT_BATTERY` - STATUS_CONTACT_BATTERY
 * @member `STATUS_CONTACTS_EMERGENCY` - STATUS_CONTACTS_EMERGENCY
 * @member `STATUS_GLOBAL_EMERGENCY_STOP` - STATUS_GLOBAL_EMERGENCY_STOP
 * @member `STATUS_GLOBAL_EMERGENCY_STOP_MOVE` - STATUS_GLOBAL_EMERGENCY_STOP_MOVE
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.VehStatus.html RoboccDocs} for further information
*/
var VehStatus;
(function (VehStatus) {
    /** STATUS_FREE */
    VehStatus[VehStatus["STATUS_FREE"] = 14] = "STATUS_FREE";
    /** STATUS_MAINTENANCE */
    VehStatus[VehStatus["STATUS_MAINTENANCE"] = 15] = "STATUS_MAINTENANCE";
    /** STATUS_IN_CHARGE */
    VehStatus[VehStatus["STATUS_IN_CHARGE"] = 16] = "STATUS_IN_CHARGE";
    /** STATUS_IN_CHARGE_REQUIRED */
    VehStatus[VehStatus["STATUS_IN_CHARGE_REQUIRED"] = 17] = "STATUS_IN_CHARGE_REQUIRED";
    /** STATUS_GOTO_CHARGE */
    VehStatus[VehStatus["STATUS_GOTO_CHARGE"] = 18] = "STATUS_GOTO_CHARGE";
    /** STATUS_GOTO_CHARGE_REQUIRED */
    VehStatus[VehStatus["STATUS_GOTO_CHARGE_REQUIRED"] = 19] = "STATUS_GOTO_CHARGE_REQUIRED";
    /** STATUS_HIR */
    VehStatus[VehStatus["STATUS_HIR"] = 20] = "STATUS_HIR";
    /** STATUS_MOVE */
    VehStatus[VehStatus["STATUS_MOVE"] = 21] = "STATUS_MOVE";
    /** STATUS_MOVE_DONE */
    VehStatus[VehStatus["STATUS_MOVE_DONE"] = 22] = "STATUS_MOVE_DONE";
    /** STATUS_MOVE_FAILED */
    VehStatus[VehStatus["STATUS_MOVE_FAILED"] = 23] = "STATUS_MOVE_FAILED";
    /** STATUS_CONTINUE_MISSION */
    VehStatus[VehStatus["STATUS_CONTINUE_MISSION"] = 24] = "STATUS_CONTINUE_MISSION";
    /** STATUS_WAITING_RELEASE */
    VehStatus[VehStatus["STATUS_WAITING_RELEASE"] = 25] = "STATUS_WAITING_RELEASE";
    /** STATUS_DISCONNECTED */
    VehStatus[VehStatus["STATUS_DISCONNECTED"] = 26] = "STATUS_DISCONNECTED";
    /** STATUS_PAUSE */
    VehStatus[VehStatus["STATUS_PAUSE"] = 45] = "STATUS_PAUSE";
    /** STATUS_ROC_ID */
    VehStatus[VehStatus["STATUS_ROC_ID"] = 47] = "STATUS_ROC_ID";
    /** STATUS_VEH_DISCONNECTED */
    VehStatus[VehStatus["STATUS_VEH_DISCONNECTED"] = 48] = "STATUS_VEH_DISCONNECTED";
    /** STATUS_NOT_CHARGING */
    VehStatus[VehStatus["STATUS_NOT_CHARGING"] = 49] = "STATUS_NOT_CHARGING";
    /** STATUS_WAIT_WAITING_POSE */
    VehStatus[VehStatus["STATUS_WAIT_WAITING_POSE"] = 53] = "STATUS_WAIT_WAITING_POSE";
    /** STATUS_BAD_LIFT_POSITION */
    VehStatus[VehStatus["STATUS_BAD_LIFT_POSITION"] = 63] = "STATUS_BAD_LIFT_POSITION";
    /** STATUS_WAITING_CONTACT */
    VehStatus[VehStatus["STATUS_WAITING_CONTACT"] = 64] = "STATUS_WAITING_CONTACT";
    /** STATUS_SLEEPING */
    VehStatus[VehStatus["STATUS_SLEEPING"] = 65] = "STATUS_SLEEPING";
    /** STATUS_HIBERNATE */
    VehStatus[VehStatus["STATUS_HIBERNATE"] = 66] = "STATUS_HIBERNATE";
    /** ACTION_CALL_MISSION */
    VehStatus[VehStatus["ACTION_CALL_MISSION"] = 67] = "ACTION_CALL_MISSION";
    /** ACTION_START_MISSION */
    VehStatus[VehStatus["ACTION_START_MISSION"] = 68] = "ACTION_START_MISSION";
    /** ACTION_EXTEND_MISSION */
    VehStatus[VehStatus["ACTION_EXTEND_MISSION"] = 69] = "ACTION_EXTEND_MISSION";
    /** ACTION_RELEASE_MODULE */
    VehStatus[VehStatus["ACTION_RELEASE_MODULE"] = 70] = "ACTION_RELEASE_MODULE";
    /** ACTION_RELEASE_POSITION */
    VehStatus[VehStatus["ACTION_RELEASE_POSITION"] = 71] = "ACTION_RELEASE_POSITION";
    /** STATUS_MESSAGES_START */
    VehStatus[VehStatus["STATUS_MESSAGES_START"] = 72] = "STATUS_MESSAGES_START";
    /** STATUS_MESSAGES_END */
    VehStatus[VehStatus["STATUS_MESSAGES_END"] = 73] = "STATUS_MESSAGES_END";
    /** ACTION_GET_CONTACTS_CONFIG */
    VehStatus[VehStatus["ACTION_GET_CONTACTS_CONFIG"] = 74] = "ACTION_GET_CONTACTS_CONFIG";
    /** ACTION_SET_CONTACT_CONFIG */
    VehStatus[VehStatus["ACTION_SET_CONTACT_CONFIG"] = 75] = "ACTION_SET_CONTACT_CONFIG";
    /** STATUS_NOT_POSSIBLE */
    VehStatus[VehStatus["STATUS_NOT_POSSIBLE"] = 76] = "STATUS_NOT_POSSIBLE";
    /** STATUS_NOT_IN_OPERATING_HOURS */
    VehStatus[VehStatus["STATUS_NOT_IN_OPERATING_HOURS"] = 77] = "STATUS_NOT_IN_OPERATING_HOURS";
    /** STATUS_INVALID_TOP */
    VehStatus[VehStatus["STATUS_INVALID_TOP"] = 78] = "STATUS_INVALID_TOP";
    /** STATUS_CANCELED */
    VehStatus[VehStatus["STATUS_CANCELED"] = 79] = "STATUS_CANCELED";
    /** STATUS_ROC_P_BAD_LIFT_POSITION */
    VehStatus[VehStatus["STATUS_ROC_P_BAD_LIFT_POSITION"] = 80] = "STATUS_ROC_P_BAD_LIFT_POSITION";
    /** STATUS_IN_CONFIG */
    VehStatus[VehStatus["STATUS_IN_CONFIG"] = 81] = "STATUS_IN_CONFIG";
    /** STATUS_AUTOPILOT */
    VehStatus[VehStatus["STATUS_AUTOPILOT"] = 83] = "STATUS_AUTOPILOT";
    /** ACTION_PAIR */
    VehStatus[VehStatus["ACTION_PAIR"] = 84] = "ACTION_PAIR";
    /** STATUS_PAIRING_OK */
    VehStatus[VehStatus["STATUS_PAIRING_OK"] = 85] = "STATUS_PAIRING_OK";
    /** STATUS_PAIRING_KO */
    VehStatus[VehStatus["STATUS_PAIRING_KO"] = 86] = "STATUS_PAIRING_KO";
    /** ACTION_SYNC_KEYHASH */
    VehStatus[VehStatus["ACTION_SYNC_KEYHASH"] = 87] = "ACTION_SYNC_KEYHASH";
    /** STATUS_KEYHASH */
    VehStatus[VehStatus["STATUS_KEYHASH"] = 88] = "STATUS_KEYHASH";
    /** STATUS_UPDATE_KEYS */
    VehStatus[VehStatus["STATUS_UPDATE_KEYS"] = 89] = "STATUS_UPDATE_KEYS";
    /** SERIAL_ALLOW_PAIR */
    VehStatus[VehStatus["SERIAL_ALLOW_PAIR"] = 90] = "SERIAL_ALLOW_PAIR";
    /** SERIAL_REVOKE */
    VehStatus[VehStatus["SERIAL_REVOKE"] = 91] = "SERIAL_REVOKE";
    /** SERIAL_PAIRED_LIST */
    VehStatus[VehStatus["SERIAL_PAIRED_LIST"] = 92] = "SERIAL_PAIRED_LIST";
    /** SERIAL_AUTO_PAIR */
    VehStatus[VehStatus["SERIAL_AUTO_PAIR"] = 93] = "SERIAL_AUTO_PAIR";
    /** STATUS_CONTACT */
    VehStatus[VehStatus["STATUS_CONTACT"] = 94] = "STATUS_CONTACT";
    /** STATUS_CONTACT_BATTERY */
    VehStatus[VehStatus["STATUS_CONTACT_BATTERY"] = 95] = "STATUS_CONTACT_BATTERY";
    /** STATUS_CONTACTS_EMERGENCY */
    VehStatus[VehStatus["STATUS_CONTACTS_EMERGENCY"] = 96] = "STATUS_CONTACTS_EMERGENCY";
    /** STATUS_GLOBAL_EMERGENCY_STOP */
    VehStatus[VehStatus["STATUS_GLOBAL_EMERGENCY_STOP"] = 97] = "STATUS_GLOBAL_EMERGENCY_STOP";
    /** STATUS_GLOBAL_EMERGENCY_STOP_MOVE */
    VehStatus[VehStatus["STATUS_GLOBAL_EMERGENCY_STOP_MOVE"] = 98] = "STATUS_GLOBAL_EMERGENCY_STOP_MOVE";
})(VehStatus || (exports.VehStatus = VehStatus = {}));
/**
 * **Module type**
 *
 * Module type
 * @member `NOT_SET` - NOT_SET
 * @member `ROC_E` - ROC_E
 * @member `ROC_EP` - ROC_EP
 * @member `ROC_P` - ROC_P
 * @member `OTHER` - OTHER
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.ModuleType.html RoboccDocs} for further information
*/
var ModuleType;
(function (ModuleType) {
    /** NOT_SET */
    ModuleType[ModuleType["NOT_SET"] = 0] = "NOT_SET";
    /** ROC_E */
    ModuleType[ModuleType["ROC_E"] = 1] = "ROC_E";
    /** ROC_EP */
    ModuleType[ModuleType["ROC_EP"] = 2] = "ROC_EP";
    /** ROC_P */
    ModuleType[ModuleType["ROC_P"] = 3] = "ROC_P";
    /** OTHER */
    ModuleType[ModuleType["OTHER"] = 99] = "OTHER";
})(ModuleType || (exports.ModuleType = ModuleType = {}));
/**
 * **Vehicle direction**
 *
 * Vehicle direction
 * @member `FRONT_OR_BACK` - FRONT_OR_BACK
 * @member `FRONT` - FRONT
 * @member `BACK` - BACK
 * @member `NO_DIRECTION` - NO_DIRECTION
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.VehDirection.html RoboccDocs} for further information
*/
var VehDirection;
(function (VehDirection) {
    /** FRONT_OR_BACK */
    VehDirection[VehDirection["FRONT_OR_BACK"] = 0] = "FRONT_OR_BACK";
    /** FRONT */
    VehDirection[VehDirection["FRONT"] = 1] = "FRONT";
    /** BACK */
    VehDirection[VehDirection["BACK"] = 2] = "BACK";
    /** NO_DIRECTION */
    VehDirection[VehDirection["NO_DIRECTION"] = 3] = "NO_DIRECTION";
})(VehDirection || (exports.VehDirection = VehDirection = {}));
/**
 * **Map element type**
 *
 * Map element type
 * @member `CHARGING_STATION` - CHARGING_STATION
 * @member `SAVED_POSE` - SAVED_POSE
 * @member `DOCKED_POSE` - DOCKED_POSE
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.MapElementType.html RoboccDocs} for further information
*/
var MapElementType;
(function (MapElementType) {
    /** CHARGING_STATION */
    MapElementType[MapElementType["CHARGING_STATION"] = 0] = "CHARGING_STATION";
    /** SAVED_POSE */
    MapElementType[MapElementType["SAVED_POSE"] = 1] = "SAVED_POSE";
    /** DOCKED_POSE */
    MapElementType[MapElementType["DOCKED_POSE"] = 2] = "DOCKED_POSE";
})(MapElementType || (exports.MapElementType = MapElementType = {}));
/**
 * **Authenticated type**
 *
 * Authenticated type
 * @member `NONE` - NONE
 * @member `USER` - USER
 * @member `MODULE` - MODULE
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.AuthenticatedType.html RoboccDocs} for further information
*/
var AuthenticatedType;
(function (AuthenticatedType) {
    /** NONE */
    AuthenticatedType[AuthenticatedType["NONE"] = 0] = "NONE";
    /** USER */
    AuthenticatedType[AuthenticatedType["USER"] = 1] = "USER";
    /** MODULE */
    AuthenticatedType[AuthenticatedType["MODULE"] = 2] = "MODULE";
})(AuthenticatedType || (exports.AuthenticatedType = AuthenticatedType = {}));
/**
 * **Log severity**
 *
 * Log severity
 * @member `INFO` - INFO
 * @member `WARNING` - WARNING
 * @member `ERROR` - ERROR
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.LogSeverity.html RoboccDocs} for further information
*/
var LogSeverity;
(function (LogSeverity) {
    /** INFO */
    LogSeverity[LogSeverity["INFO"] = 0] = "INFO";
    /** WARNING */
    LogSeverity[LogSeverity["WARNING"] = 1] = "WARNING";
    /** ERROR */
    LogSeverity[LogSeverity["ERROR"] = 2] = "ERROR";
})(LogSeverity || (exports.LogSeverity = LogSeverity = {}));
/**
 * **Log type**
 *
 * Log type
 * @member `APP` - APP
 * @member `MISSION` - MISSION
 * @member `VEHICLE` - VEHICLE
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.LogType.html RoboccDocs} for further information
*/
var LogType;
(function (LogType) {
    /** APP */
    LogType[LogType["APP"] = 0] = "APP";
    /** MISSION */
    LogType[LogType["MISSION"] = 1] = "MISSION";
    /** VEHICLE */
    LogType[LogType["VEHICLE"] = 2] = "VEHICLE";
})(LogType || (exports.LogType = LogType = {}));
/**
 * **UpdateStatusStatus**
 *
 * `status` parameter of a `UpdateStatus` type
 * @member `STOPPING` - Device is stopping to install update
 * @member `STARTING` - Device is starting new system update
 * @member `DOWNLOADING` - Device is downloading new system update
 * @member `INSTALLING` - Device is installing new system update
 * @member `IDLE` - No new system update
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.UpdateStatusStatus.html RoboccDocs} for further information
*/
var UpdateStatusStatus;
(function (UpdateStatusStatus) {
    /** Device is stopping to install update */
    UpdateStatusStatus["STOPPING"] = "Stopping";
    /** Device is starting new system update */
    UpdateStatusStatus["STARTING"] = "Starting";
    /** Device is downloading new system update */
    UpdateStatusStatus["DOWNLOADING"] = "Downloading";
    /** Device is installing new system update */
    UpdateStatusStatus["INSTALLING"] = "Installing";
    /** No new system update */
    UpdateStatusStatus["IDLE"] = "Idle";
})(UpdateStatusStatus || (exports.UpdateStatusStatus = UpdateStatusStatus = {}));
/**
 * **SetMapFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `SetMapFeedback` type
 * @member `UNDEFINED` - Step undefined
 * @member `UPDATE_DATABASE` - Step updating database
 * @member `UPDATE_MAPS` - Step updating maps
 * @member `RELOAD_MAPS` - Step reloading maps
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.SetMapFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
var SetMapFeedbackCurrentStepCode;
(function (SetMapFeedbackCurrentStepCode) {
    /** Step undefined */
    SetMapFeedbackCurrentStepCode[SetMapFeedbackCurrentStepCode["UNDEFINED"] = 0] = "UNDEFINED";
    /** Step updating database */
    SetMapFeedbackCurrentStepCode[SetMapFeedbackCurrentStepCode["UPDATE_DATABASE"] = 1] = "UPDATE_DATABASE";
    /** Step updating maps */
    SetMapFeedbackCurrentStepCode[SetMapFeedbackCurrentStepCode["UPDATE_MAPS"] = 2] = "UPDATE_MAPS";
    /** Step reloading maps */
    SetMapFeedbackCurrentStepCode[SetMapFeedbackCurrentStepCode["RELOAD_MAPS"] = 3] = "RELOAD_MAPS";
})(SetMapFeedbackCurrentStepCode || (exports.SetMapFeedbackCurrentStepCode = SetMapFeedbackCurrentStepCode = {}));
/**
 * **SetActiveMapFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `SetActiveMapFeedback` type
 * @member `UNDEFINED` - Undefined
 * @member `UPDATE_DATABASE` - Updating database
 * @member `UPDATE_MAPS` - Updating maps
 * @member `RELOAD_MAPS` - Reloading database
 * @member `RECOVERY` - Perform recovery
 * @member `STOP_NAVIGATION` - Stop navigation due to error on recovery step
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.SetActiveMapFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
var SetActiveMapFeedbackCurrentStepCode;
(function (SetActiveMapFeedbackCurrentStepCode) {
    /** Undefined */
    SetActiveMapFeedbackCurrentStepCode[SetActiveMapFeedbackCurrentStepCode["UNDEFINED"] = 0] = "UNDEFINED";
    /** Updating database */
    SetActiveMapFeedbackCurrentStepCode[SetActiveMapFeedbackCurrentStepCode["UPDATE_DATABASE"] = 1] = "UPDATE_DATABASE";
    /** Updating maps */
    SetActiveMapFeedbackCurrentStepCode[SetActiveMapFeedbackCurrentStepCode["UPDATE_MAPS"] = 2] = "UPDATE_MAPS";
    /** Reloading database */
    SetActiveMapFeedbackCurrentStepCode[SetActiveMapFeedbackCurrentStepCode["RELOAD_MAPS"] = 3] = "RELOAD_MAPS";
    /** Perform recovery */
    SetActiveMapFeedbackCurrentStepCode[SetActiveMapFeedbackCurrentStepCode["RECOVERY"] = 4] = "RECOVERY";
    /** Stop navigation due to error on recovery step */
    SetActiveMapFeedbackCurrentStepCode[SetActiveMapFeedbackCurrentStepCode["STOP_NAVIGATION"] = 5] = "STOP_NAVIGATION";
})(SetActiveMapFeedbackCurrentStepCode || (exports.SetActiveMapFeedbackCurrentStepCode = SetActiveMapFeedbackCurrentStepCode = {}));
/**
 * **InstallModuleFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `InstallModuleFeedback` type
 * @member `UPDATE_DATABASE` - Update database
 * @member `ACTIVATE_MODULE` - Activate module
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.InstallModuleFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
var InstallModuleFeedbackCurrentStepCode;
(function (InstallModuleFeedbackCurrentStepCode) {
    /** Update database */
    InstallModuleFeedbackCurrentStepCode[InstallModuleFeedbackCurrentStepCode["UPDATE_DATABASE"] = 0] = "UPDATE_DATABASE";
    /** Activate module */
    InstallModuleFeedbackCurrentStepCode[InstallModuleFeedbackCurrentStepCode["ACTIVATE_MODULE"] = 1] = "ACTIVATE_MODULE";
})(InstallModuleFeedbackCurrentStepCode || (exports.InstallModuleFeedbackCurrentStepCode = InstallModuleFeedbackCurrentStepCode = {}));
/**
 * **DisableModuleFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `DisableModuleFeedback` type
 * @member `UPDATE_DATABASE` - Update module
 * @member `ACTIVATE_MODULE` - Desactivate module
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.DisableModuleFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
var DisableModuleFeedbackCurrentStepCode;
(function (DisableModuleFeedbackCurrentStepCode) {
    /** Update module */
    DisableModuleFeedbackCurrentStepCode[DisableModuleFeedbackCurrentStepCode["UPDATE_DATABASE"] = 0] = "UPDATE_DATABASE";
    /** Desactivate module */
    DisableModuleFeedbackCurrentStepCode[DisableModuleFeedbackCurrentStepCode["ACTIVATE_MODULE"] = 1] = "ACTIVATE_MODULE";
})(DisableModuleFeedbackCurrentStepCode || (exports.DisableModuleFeedbackCurrentStepCode = DisableModuleFeedbackCurrentStepCode = {}));
/**
 * **ResetDatabaseFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `ResetDatabaseFeedback` type
 * @member `RESET_DATABASE` - Undefined
 * @member `SET_ACTIVE_MODULE` - Stop mapping process
 * @member `SET_ACTIVE_MAP` - Save map in database
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.ResetDatabaseFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
var ResetDatabaseFeedbackCurrentStepCode;
(function (ResetDatabaseFeedbackCurrentStepCode) {
    /** Undefined */
    ResetDatabaseFeedbackCurrentStepCode[ResetDatabaseFeedbackCurrentStepCode["RESET_DATABASE"] = 0] = "RESET_DATABASE";
    /** Stop mapping process */
    ResetDatabaseFeedbackCurrentStepCode[ResetDatabaseFeedbackCurrentStepCode["SET_ACTIVE_MODULE"] = 1] = "SET_ACTIVE_MODULE";
    /** Save map in database */
    ResetDatabaseFeedbackCurrentStepCode[ResetDatabaseFeedbackCurrentStepCode["SET_ACTIVE_MAP"] = 2] = "SET_ACTIVE_MAP";
})(ResetDatabaseFeedbackCurrentStepCode || (exports.ResetDatabaseFeedbackCurrentStepCode = ResetDatabaseFeedbackCurrentStepCode = {}));
/**
 * **MappingStopFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `MappingStopFeedback` type
 * @member `UNDEFINED` - Undefined
 * @member `STOP_MAPPING` - Stop mapping process
 * @member `SAVE_MAP` - Save map in database
 * @member `SET_ACTIVE_MAP` - Set map as active
 * @member `START_NAVIGATION` - Start navigation on new map
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.MappingStopFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
var MappingStopFeedbackCurrentStepCode;
(function (MappingStopFeedbackCurrentStepCode) {
    /** Undefined */
    MappingStopFeedbackCurrentStepCode[MappingStopFeedbackCurrentStepCode["UNDEFINED"] = 0] = "UNDEFINED";
    /** Stop mapping process */
    MappingStopFeedbackCurrentStepCode[MappingStopFeedbackCurrentStepCode["STOP_MAPPING"] = 1] = "STOP_MAPPING";
    /** Save map in database */
    MappingStopFeedbackCurrentStepCode[MappingStopFeedbackCurrentStepCode["SAVE_MAP"] = 2] = "SAVE_MAP";
    /** Set map as active */
    MappingStopFeedbackCurrentStepCode[MappingStopFeedbackCurrentStepCode["SET_ACTIVE_MAP"] = 3] = "SET_ACTIVE_MAP";
    /** Start navigation on new map */
    MappingStopFeedbackCurrentStepCode[MappingStopFeedbackCurrentStepCode["START_NAVIGATION"] = 4] = "START_NAVIGATION";
})(MappingStopFeedbackCurrentStepCode || (exports.MappingStopFeedbackCurrentStepCode = MappingStopFeedbackCurrentStepCode = {}));
/**
 * **EraseActiveMapFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `EraseActiveMapFeedback` type
 * @member `GET_DATA` - Get erasers data
 * @member `GENERATE_MAPS` - Generate maps with erase layer
 * @member `SAVE_MAP` - Save map in database
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.EraseActiveMapFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
var EraseActiveMapFeedbackCurrentStepCode;
(function (EraseActiveMapFeedbackCurrentStepCode) {
    /** Get erasers data */
    EraseActiveMapFeedbackCurrentStepCode[EraseActiveMapFeedbackCurrentStepCode["GET_DATA"] = 0] = "GET_DATA";
    /** Generate maps with erase layer */
    EraseActiveMapFeedbackCurrentStepCode[EraseActiveMapFeedbackCurrentStepCode["GENERATE_MAPS"] = 1] = "GENERATE_MAPS";
    /** Save map in database */
    EraseActiveMapFeedbackCurrentStepCode[EraseActiveMapFeedbackCurrentStepCode["SAVE_MAP"] = 2] = "SAVE_MAP";
})(EraseActiveMapFeedbackCurrentStepCode || (exports.EraseActiveMapFeedbackCurrentStepCode = EraseActiveMapFeedbackCurrentStepCode = {}));
/**
 * **ReloadMapFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `ReloadMapFeedback` type
 * @member `UNDEFINED` - Undefined
 * @member `GET_DATA` - Get data for reloading map
 * @member `UPDATE_MAPS` - Update maps
 * @member `RELOAD_MAPS` - Reload maps
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.ReloadMapFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
var ReloadMapFeedbackCurrentStepCode;
(function (ReloadMapFeedbackCurrentStepCode) {
    /** Undefined */
    ReloadMapFeedbackCurrentStepCode[ReloadMapFeedbackCurrentStepCode["UNDEFINED"] = 0] = "UNDEFINED";
    /** Get data for reloading map */
    ReloadMapFeedbackCurrentStepCode[ReloadMapFeedbackCurrentStepCode["GET_DATA"] = 1] = "GET_DATA";
    /** Update maps */
    ReloadMapFeedbackCurrentStepCode[ReloadMapFeedbackCurrentStepCode["UPDATE_MAPS"] = 2] = "UPDATE_MAPS";
    /** Reload maps */
    ReloadMapFeedbackCurrentStepCode[ReloadMapFeedbackCurrentStepCode["RELOAD_MAPS"] = 3] = "RELOAD_MAPS";
})(ReloadMapFeedbackCurrentStepCode || (exports.ReloadMapFeedbackCurrentStepCode = ReloadMapFeedbackCurrentStepCode = {}));
/**
 * **MergeMapsFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `MergeMapsFeedback` type
 * @member `GET_DATA` - Get data from db
 * @member `CALCULATE_TRANSFORMATION` - Calculate transformation
 * @member `TRANSFORM_DATA` - Transform data
 * @member `SAVE_MAP` - Save map
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.MergeMapsFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
var MergeMapsFeedbackCurrentStepCode;
(function (MergeMapsFeedbackCurrentStepCode) {
    /** Get data from db */
    MergeMapsFeedbackCurrentStepCode[MergeMapsFeedbackCurrentStepCode["GET_DATA"] = 0] = "GET_DATA";
    /** Calculate transformation */
    MergeMapsFeedbackCurrentStepCode[MergeMapsFeedbackCurrentStepCode["CALCULATE_TRANSFORMATION"] = 1] = "CALCULATE_TRANSFORMATION";
    /** Transform data */
    MergeMapsFeedbackCurrentStepCode[MergeMapsFeedbackCurrentStepCode["TRANSFORM_DATA"] = 2] = "TRANSFORM_DATA";
    /** Save map */
    MergeMapsFeedbackCurrentStepCode[MergeMapsFeedbackCurrentStepCode["SAVE_MAP"] = 3] = "SAVE_MAP";
})(MergeMapsFeedbackCurrentStepCode || (exports.MergeMapsFeedbackCurrentStepCode = MergeMapsFeedbackCurrentStepCode = {}));
/**
 * **SystemRestartParamsStage**
 *
 * `stage` parameter of a `SystemRestartParams` type
 * @member `SOFT_RESTART` - Restart software
 * @member `HARD_RESTART` - Restart docker
 * @member `REBOOT` - Restart PC
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.SystemRestartParamsStage.html RoboccDocs} for further information
*/
var SystemRestartParamsStage;
(function (SystemRestartParamsStage) {
    /** Restart software */
    SystemRestartParamsStage[SystemRestartParamsStage["SOFT_RESTART"] = 1] = "SOFT_RESTART";
    /** Restart docker */
    SystemRestartParamsStage[SystemRestartParamsStage["HARD_RESTART"] = 2] = "HARD_RESTART";
    /** Restart PC */
    SystemRestartParamsStage[SystemRestartParamsStage["REBOOT"] = 3] = "REBOOT";
})(SystemRestartParamsStage || (exports.SystemRestartParamsStage = SystemRestartParamsStage = {}));
/**
 * **MappingErrorEventDataOutcome**
 *
 * `outcome` parameter of a `MappingErrorEventData` type
 * @member `NO_ERROR` - No mapping in progress, or no error happened on current mapping
 * @member `ERROR` - An error happened on current mapping
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.MappingErrorEventDataOutcome.html RoboccDocs} for further information
*/
var MappingErrorEventDataOutcome;
(function (MappingErrorEventDataOutcome) {
    /** No mapping in progress, or no error happened on current mapping */
    MappingErrorEventDataOutcome[MappingErrorEventDataOutcome["NO_ERROR"] = 0] = "NO_ERROR";
    /** An error happened on current mapping */
    MappingErrorEventDataOutcome[MappingErrorEventDataOutcome["ERROR"] = 1] = "ERROR";
})(MappingErrorEventDataOutcome || (exports.MappingErrorEventDataOutcome = MappingErrorEventDataOutcome = {}));
/**
 * **AutopilotStepResult event data**
 *
 * Data sent along with the event AutopilotStepResult
 * @member `UNDEFINED` - Undefined autopilot step result
 * @member `SUCCESS` - Autopilot step finished successfully
 * @member `FAILURE` - Autopilot step finished with failure
 * @member `CANCELED` - Autopilot step has been canceled
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.AutopilotStepResultEventData.html RoboccDocs} for further information
*/
var AutopilotStepResultEventData;
(function (AutopilotStepResultEventData) {
    /** Undefined autopilot step result */
    AutopilotStepResultEventData[AutopilotStepResultEventData["UNDEFINED"] = 0] = "UNDEFINED";
    /** Autopilot step finished successfully */
    AutopilotStepResultEventData[AutopilotStepResultEventData["SUCCESS"] = 1] = "SUCCESS";
    /** Autopilot step finished with failure */
    AutopilotStepResultEventData[AutopilotStepResultEventData["FAILURE"] = 2] = "FAILURE";
    /** Autopilot step has been canceled */
    AutopilotStepResultEventData[AutopilotStepResultEventData["CANCELED"] = 3] = "CANCELED";
})(AutopilotStepResultEventData || (exports.AutopilotStepResultEventData = AutopilotStepResultEventData = {}));
/**
 * **AutopilotStatus event data**
 *
 * Data sent along with the event AutopilotStatus
 * @member `NOT_SET` - Autopilot not set for this map
 * @member `STOPPED` - Autopilot is stopped
 * @member `STARTED` - Autopilot is started
 * @member `PAUSED` - Autopilot is paused
 * @member `PAUSED_CHARGING` - Autopilot is paused due to critical battery level reached and vehicle has gone off to recharge itself
 * @member `PAUSED_HIR` - Autopilot is paused due to human intervention required
 * @member `PAUSED_PROHIBITED_MOVE` - Autopilot is paused due to module prohibit move orders
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.AutopilotStatusEventData.html RoboccDocs} for further information
*/
var AutopilotStatusEventData;
(function (AutopilotStatusEventData) {
    /** Autopilot not set for this map */
    AutopilotStatusEventData[AutopilotStatusEventData["NOT_SET"] = 0] = "NOT_SET";
    /** Autopilot is stopped */
    AutopilotStatusEventData[AutopilotStatusEventData["STOPPED"] = 1] = "STOPPED";
    /** Autopilot is started */
    AutopilotStatusEventData[AutopilotStatusEventData["STARTED"] = 2] = "STARTED";
    /** Autopilot is paused */
    AutopilotStatusEventData[AutopilotStatusEventData["PAUSED"] = 3] = "PAUSED";
    /** Autopilot is paused due to critical battery level reached and vehicle has gone off to recharge itself */
    AutopilotStatusEventData[AutopilotStatusEventData["PAUSED_CHARGING"] = 4] = "PAUSED_CHARGING";
    /** Autopilot is paused due to human intervention required */
    AutopilotStatusEventData[AutopilotStatusEventData["PAUSED_HIR"] = 5] = "PAUSED_HIR";
    /** Autopilot is paused due to module prohibit move orders */
    AutopilotStatusEventData[AutopilotStatusEventData["PAUSED_PROHIBITED_MOVE"] = 6] = "PAUSED_PROHIBITED_MOVE";
})(AutopilotStatusEventData || (exports.AutopilotStatusEventData = AutopilotStatusEventData = {}));
/**
 * **UpdateStatusEventDataStatus**
 *
 * `status` parameter of a `UpdateStatusEventData` type
 * @member `STOPPING` - Device is stopping to install update
 * @member `STARTING` - Device is starting new system update
 * @member `DOWNLOADING` - Device is downloading new system update
 * @member `INSTALLING` - Device is installing new system update
 * @member `IDLE` - No new system update
 * @see {@link https://docs.robocc.com/roc-api-ts/9.1.3-athena-3/enums/types.UpdateStatusEventDataStatus.html RoboccDocs} for further information
*/
var UpdateStatusEventDataStatus;
(function (UpdateStatusEventDataStatus) {
    /** Device is stopping to install update */
    UpdateStatusEventDataStatus["STOPPING"] = "Stopping";
    /** Device is starting new system update */
    UpdateStatusEventDataStatus["STARTING"] = "Starting";
    /** Device is downloading new system update */
    UpdateStatusEventDataStatus["DOWNLOADING"] = "Downloading";
    /** Device is installing new system update */
    UpdateStatusEventDataStatus["INSTALLING"] = "Installing";
    /** No new system update */
    UpdateStatusEventDataStatus["IDLE"] = "Idle";
})(UpdateStatusEventDataStatus || (exports.UpdateStatusEventDataStatus = UpdateStatusEventDataStatus = {}));
