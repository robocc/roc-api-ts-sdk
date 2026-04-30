"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomeCodeDescription = exports.OutcomeCode = void 0;
/* Enum for all outcomes */
var OutcomeCode;
(function (OutcomeCode) {
    OutcomeCode[OutcomeCode["NO_ERROR"] = 0] = "NO_ERROR";
    OutcomeCode[OutcomeCode["FORMAT_ERROR_MISSING_PARAM"] = 1] = "FORMAT_ERROR_MISSING_PARAM";
    OutcomeCode[OutcomeCode["FORMAT_ERROR_INVALID_PARAM"] = 2] = "FORMAT_ERROR_INVALID_PARAM";
    OutcomeCode[OutcomeCode["INSUFFICIENT_RIGHTS"] = 3] = "INSUFFICIENT_RIGHTS";
    OutcomeCode[OutcomeCode["COULD_NOT_PARSE_JSON"] = 4] = "COULD_NOT_PARSE_JSON";
    OutcomeCode[OutcomeCode["UNKNOWN_API_OPERATION"] = 5] = "UNKNOWN_API_OPERATION";
    OutcomeCode[OutcomeCode["NOT_YET_IMPLEMENTED"] = 6] = "NOT_YET_IMPLEMENTED";
    OutcomeCode[OutcomeCode["ACTION_ALREADY_STARTED"] = 7] = "ACTION_ALREADY_STARTED";
    OutcomeCode[OutcomeCode["NAVIGATION_IS_NOT_STARTED"] = 8] = "NAVIGATION_IS_NOT_STARTED";
    OutcomeCode[OutcomeCode["SERVICE_UNAVAILABLE"] = 9] = "SERVICE_UNAVAILABLE";
    OutcomeCode[OutcomeCode["NO_ONGOING_ACTION"] = 10] = "NO_ONGOING_ACTION";
    OutcomeCode[OutcomeCode["BATTERY_TOO_LOW"] = 11] = "BATTERY_TOO_LOW";
    OutcomeCode[OutcomeCode["AUTH_NEEDED"] = 12] = "AUTH_NEEDED";
    OutcomeCode[OutcomeCode["MODULE_ACTION_DISABLED"] = 13] = "MODULE_ACTION_DISABLED";
    OutcomeCode[OutcomeCode["INTERNAL_ERROR"] = 14] = "INTERNAL_ERROR";
    OutcomeCode[OutcomeCode["DETAILS_IN_MESSAGE"] = 15] = "DETAILS_IN_MESSAGE";
    OutcomeCode[OutcomeCode["TELEOP_NOT_ACTIVE"] = 16] = "TELEOP_NOT_ACTIVE";
    OutcomeCode[OutcomeCode["MSG_PROCESSING_TIMEOUT"] = 17] = "MSG_PROCESSING_TIMEOUT";
    OutcomeCode[OutcomeCode["INVALID_CREDENTIAL"] = 18] = "INVALID_CREDENTIAL";
    OutcomeCode[OutcomeCode["INVALID_API_KEY"] = 19] = "INVALID_API_KEY";
    OutcomeCode[OutcomeCode["INVALID_SITE_FILE"] = 20] = "INVALID_SITE_FILE";
    OutcomeCode[OutcomeCode["UNDEFINED"] = 21] = "UNDEFINED";
    OutcomeCode[OutcomeCode["ALREADY_DOCKED"] = 22] = "ALREADY_DOCKED";
    OutcomeCode[OutcomeCode["NOT_UNDOCKED"] = 23] = "NOT_UNDOCKED";
    OutcomeCode[OutcomeCode["MARKER_NOT_DETECTED"] = 24] = "MARKER_NOT_DETECTED";
    OutcomeCode[OutcomeCode["ROBOT_NOT_DOCKABLE"] = 25] = "ROBOT_NOT_DOCKABLE";
    OutcomeCode[OutcomeCode["DOCK_SERVOING_FAILED"] = 26] = "DOCK_SERVOING_FAILED";
    OutcomeCode[OutcomeCode["DOCK_TARGET_LOST"] = 27] = "DOCK_TARGET_LOST";
    OutcomeCode[OutcomeCode["NOT_CHARGING"] = 28] = "NOT_CHARGING";
    OutcomeCode[OutcomeCode["DOCK_TIMEOUT"] = 29] = "DOCK_TIMEOUT";
    OutcomeCode[OutcomeCode["DOCK_FAILURE"] = 30] = "DOCK_FAILURE";
    OutcomeCode[OutcomeCode["GOTO_FAILURE"] = 31] = "GOTO_FAILURE";
    OutcomeCode[OutcomeCode["CANCELED"] = 32] = "CANCELED";
    OutcomeCode[OutcomeCode["FAILURE"] = 33] = "FAILURE";
    OutcomeCode[OutcomeCode["NOT_DOCKED"] = 34] = "NOT_DOCKED";
    OutcomeCode[OutcomeCode["SIMPLE_MOVE_FAILED"] = 35] = "SIMPLE_MOVE_FAILED";
    OutcomeCode[OutcomeCode["TIMEOUT"] = 36] = "TIMEOUT";
    OutcomeCode[OutcomeCode["INVALID_FRAME"] = 37] = "INVALID_FRAME";
    OutcomeCode[OutcomeCode["NO_ACTIVE_MODULE"] = 38] = "NO_ACTIVE_MODULE";
    OutcomeCode[OutcomeCode["CANT_START_NAV"] = 39] = "CANT_START_NAV";
    OutcomeCode[OutcomeCode["NO_MARKER_VISIBLE"] = 40] = "NO_MARKER_VISIBLE";
    OutcomeCode[OutcomeCode["COMPUTE_PATH_FAILED"] = 41] = "COMPUTE_PATH_FAILED";
    OutcomeCode[OutcomeCode["START_OUTSIDE_MAP"] = 42] = "START_OUTSIDE_MAP";
    OutcomeCode[OutcomeCode["GOAL_OUTSIDE_MAP"] = 43] = "GOAL_OUTSIDE_MAP";
    OutcomeCode[OutcomeCode["START_OCCUPIED"] = 44] = "START_OCCUPIED";
    OutcomeCode[OutcomeCode["GOAL_OCCUPIED"] = 45] = "GOAL_OCCUPIED";
    OutcomeCode[OutcomeCode["NO_VALID_PATH"] = 46] = "NO_VALID_PATH";
    OutcomeCode[OutcomeCode["MAPPING_IN_PROGRESS"] = 47] = "MAPPING_IN_PROGRESS";
    OutcomeCode[OutcomeCode["NO_MAPPING"] = 48] = "NO_MAPPING";
    OutcomeCode[OutcomeCode["CANT_STOP_NAVIGATION"] = 49] = "CANT_STOP_NAVIGATION";
    OutcomeCode[OutcomeCode["STOP_MAPPING_ERROR"] = 50] = "STOP_MAPPING_ERROR";
    OutcomeCode[OutcomeCode["SAVE_MAP_ERROR"] = 51] = "SAVE_MAP_ERROR";
    OutcomeCode[OutcomeCode["SET_ACTIVE_MAP_ERROR"] = 52] = "SET_ACTIVE_MAP_ERROR";
    OutcomeCode[OutcomeCode["START_NAVIGATION_ERROR"] = 53] = "START_NAVIGATION_ERROR";
    OutcomeCode[OutcomeCode["RECOVERY_FAILED"] = 54] = "RECOVERY_FAILED";
    OutcomeCode[OutcomeCode["SAVE_MAP_FAILED"] = 55] = "SAVE_MAP_FAILED";
    OutcomeCode[OutcomeCode["GET_DATA_FAILED"] = 56] = "GET_DATA_FAILED";
    OutcomeCode[OutcomeCode["UPDATE_DATABASE_FAILED"] = 57] = "UPDATE_DATABASE_FAILED";
    OutcomeCode[OutcomeCode["UPDATE_MAPS_FAILED"] = 58] = "UPDATE_MAPS_FAILED";
    OutcomeCode[OutcomeCode["RELOAD_MAPS_FAILED"] = 59] = "RELOAD_MAPS_FAILED";
    OutcomeCode[OutcomeCode["BATTERY_LEVEL_NOT_ENOUGH"] = 60] = "BATTERY_LEVEL_NOT_ENOUGH";
    OutcomeCode[OutcomeCode["PROHIBITED_MOVEMENT"] = 61] = "PROHIBITED_MOVEMENT";
    OutcomeCode[OutcomeCode["NOT_SET"] = 62] = "NOT_SET";
    OutcomeCode[OutcomeCode["INVALID_START"] = 63] = "INVALID_START";
    OutcomeCode[OutcomeCode["INVALID_GOAL"] = 64] = "INVALID_GOAL";
    OutcomeCode[OutcomeCode["OBSTACLE"] = 65] = "OBSTACLE";
    OutcomeCode[OutcomeCode["UNDOCK_FAILED"] = 66] = "UNDOCK_FAILED";
    OutcomeCode[OutcomeCode["NEED_MAINTENANCE_MODE"] = 67] = "NEED_MAINTENANCE_MODE";
    OutcomeCode[OutcomeCode["SET_ACTIVE_MODULE_ERROR"] = 68] = "SET_ACTIVE_MODULE_ERROR";
    OutcomeCode[OutcomeCode["HIR_STOPPED"] = 69] = "HIR_STOPPED";
    OutcomeCode[OutcomeCode["ONLY_FOR_MODULE"] = 70] = "ONLY_FOR_MODULE";
    OutcomeCode[OutcomeCode["CHECK_BOX_FAILED"] = 71] = "CHECK_BOX_FAILED";
    OutcomeCode[OutcomeCode["INVALID_CHECK_BOX"] = 72] = "INVALID_CHECK_BOX";
    OutcomeCode[OutcomeCode["NO_EXTERNAL_SPEAKER"] = 73] = "NO_EXTERNAL_SPEAKER";
    OutcomeCode[OutcomeCode["CANCELED_ON_VEH"] = 100] = "CANCELED_ON_VEH";
    OutcomeCode[OutcomeCode["MAINTENANCE_MODE_ACTIVATE"] = 101] = "MAINTENANCE_MODE_ACTIVATE";
    OutcomeCode[OutcomeCode["NOT_A_MANAGER"] = 102] = "NOT_A_MANAGER";
    OutcomeCode[OutcomeCode["NOT_A_ROC_P"] = 103] = "NOT_A_ROC_P";
    OutcomeCode[OutcomeCode["INVALID_DATA"] = 104] = "INVALID_DATA";
    OutcomeCode[OutcomeCode["BLOCKED_AUTH"] = 105] = "BLOCKED_AUTH";
})(OutcomeCode || (exports.OutcomeCode = OutcomeCode = {}));
/* String description (TODO: i18n) */
/** @internal */
exports.OutcomeCodeDescription = {
    [OutcomeCode.NO_ERROR]: "NO_ERROR",
    [OutcomeCode.FORMAT_ERROR_MISSING_PARAM]: "FORMAT_ERROR_MISSING_PARAM",
    [OutcomeCode.FORMAT_ERROR_INVALID_PARAM]: "FORMAT_ERROR_INVALID_PARAM",
    [OutcomeCode.INSUFFICIENT_RIGHTS]: "INSUFFICIENT_RIGHTS",
    [OutcomeCode.COULD_NOT_PARSE_JSON]: "COULD_NOT_PARSE_JSON",
    [OutcomeCode.UNKNOWN_API_OPERATION]: "UNKNOWN_API_OPERATION",
    [OutcomeCode.NOT_YET_IMPLEMENTED]: "NOT_YET_IMPLEMENTED",
    [OutcomeCode.ACTION_ALREADY_STARTED]: "ACTION_ALREADY_STARTED",
    [OutcomeCode.NAVIGATION_IS_NOT_STARTED]: "NAVIGATION_IS_NOT_STARTED",
    [OutcomeCode.SERVICE_UNAVAILABLE]: "SERVICE_UNAVAILABLE",
    [OutcomeCode.NO_ONGOING_ACTION]: "NO_ONGOING_ACTION",
    [OutcomeCode.BATTERY_TOO_LOW]: "BATTERY_TOO_LOW",
    [OutcomeCode.AUTH_NEEDED]: "AUTH_NEEDED",
    [OutcomeCode.MODULE_ACTION_DISABLED]: "MODULE_ACTION_DISABLED",
    [OutcomeCode.INTERNAL_ERROR]: "INTERNAL_ERROR",
    [OutcomeCode.DETAILS_IN_MESSAGE]: "DETAILS_IN_MESSAGE",
    [OutcomeCode.TELEOP_NOT_ACTIVE]: "TELEOP_NOT_ACTIVE",
    [OutcomeCode.MSG_PROCESSING_TIMEOUT]: "MSG_PROCESSING_TIMEOUT",
    [OutcomeCode.INVALID_CREDENTIAL]: "INVALID_CREDENTIAL",
    [OutcomeCode.INVALID_API_KEY]: "INVALID_API_KEY",
    [OutcomeCode.INVALID_SITE_FILE]: "INVALID_SITE_FILE",
    [OutcomeCode.UNDEFINED]: "UNDEFINED",
    [OutcomeCode.ALREADY_DOCKED]: "ALREADY_DOCKED",
    [OutcomeCode.NOT_UNDOCKED]: "NOT_UNDOCKED",
    [OutcomeCode.MARKER_NOT_DETECTED]: "MARKER_NOT_DETECTED",
    [OutcomeCode.ROBOT_NOT_DOCKABLE]: "ROBOT_NOT_DOCKABLE",
    [OutcomeCode.DOCK_SERVOING_FAILED]: "DOCK_SERVOING_FAILED",
    [OutcomeCode.DOCK_TARGET_LOST]: "DOCK_TARGET_LOST",
    [OutcomeCode.NOT_CHARGING]: "NOT_CHARGING",
    [OutcomeCode.DOCK_TIMEOUT]: "DOCK_TIMEOUT",
    [OutcomeCode.DOCK_FAILURE]: "DOCK_FAILURE",
    [OutcomeCode.GOTO_FAILURE]: "GOTO_FAILURE",
    [OutcomeCode.CANCELED]: "CANCELED",
    [OutcomeCode.FAILURE]: "FAILURE",
    [OutcomeCode.NOT_DOCKED]: "NOT_DOCKED",
    [OutcomeCode.SIMPLE_MOVE_FAILED]: "SIMPLE_MOVE_FAILED",
    [OutcomeCode.TIMEOUT]: "TIMEOUT",
    [OutcomeCode.INVALID_FRAME]: "INVALID_FRAME",
    [OutcomeCode.NO_ACTIVE_MODULE]: "NO_ACTIVE_MODULE",
    [OutcomeCode.CANT_START_NAV]: "CANT_START_NAV",
    [OutcomeCode.NO_MARKER_VISIBLE]: "NO_MARKER_VISIBLE",
    [OutcomeCode.COMPUTE_PATH_FAILED]: "COMPUTE_PATH_FAILED",
    [OutcomeCode.START_OUTSIDE_MAP]: "START_OUTSIDE_MAP",
    [OutcomeCode.GOAL_OUTSIDE_MAP]: "GOAL_OUTSIDE_MAP",
    [OutcomeCode.START_OCCUPIED]: "START_OCCUPIED",
    [OutcomeCode.GOAL_OCCUPIED]: "GOAL_OCCUPIED",
    [OutcomeCode.NO_VALID_PATH]: "NO_VALID_PATH",
    [OutcomeCode.MAPPING_IN_PROGRESS]: "MAPPING_IN_PROGRESS",
    [OutcomeCode.NO_MAPPING]: "NO_MAPPING",
    [OutcomeCode.CANT_STOP_NAVIGATION]: "CANT_STOP_NAVIGATION",
    [OutcomeCode.STOP_MAPPING_ERROR]: "STOP_MAPPING_ERROR",
    [OutcomeCode.SAVE_MAP_ERROR]: "SAVE_MAP_ERROR",
    [OutcomeCode.SET_ACTIVE_MAP_ERROR]: "SET_ACTIVE_MAP_ERROR",
    [OutcomeCode.START_NAVIGATION_ERROR]: "START_NAVIGATION_ERROR",
    [OutcomeCode.RECOVERY_FAILED]: "RECOVERY_FAILED",
    [OutcomeCode.SAVE_MAP_FAILED]: "SAVE_MAP_FAILED",
    [OutcomeCode.GET_DATA_FAILED]: "GET_DATA_FAILED",
    [OutcomeCode.UPDATE_DATABASE_FAILED]: "UPDATE_DATABASE_FAILED",
    [OutcomeCode.UPDATE_MAPS_FAILED]: "UPDATE_MAPS_FAILED",
    [OutcomeCode.RELOAD_MAPS_FAILED]: "RELOAD_MAPS_FAILED",
    [OutcomeCode.BATTERY_LEVEL_NOT_ENOUGH]: "BATTERY_LEVEL_NOT_ENOUGH",
    [OutcomeCode.PROHIBITED_MOVEMENT]: "PROHIBITED_MOVEMENT",
    [OutcomeCode.NOT_SET]: "NOT_SET",
    [OutcomeCode.INVALID_START]: "INVALID_START",
    [OutcomeCode.INVALID_GOAL]: "INVALID_GOAL",
    [OutcomeCode.OBSTACLE]: "OBSTACLE",
    [OutcomeCode.UNDOCK_FAILED]: "UNDOCK_FAILED",
    [OutcomeCode.NEED_MAINTENANCE_MODE]: "NEED_MAINTENANCE_MODE",
    [OutcomeCode.SET_ACTIVE_MODULE_ERROR]: "SET_ACTIVE_MODULE_ERROR",
    [OutcomeCode.HIR_STOPPED]: "HIR_STOPPED",
    [OutcomeCode.ONLY_FOR_MODULE]: "ONLY_FOR_MODULE",
    [OutcomeCode.CHECK_BOX_FAILED]: "CHECK_BOX_FAILED",
    [OutcomeCode.INVALID_CHECK_BOX]: "INVALID_CHECK_BOX",
    [OutcomeCode.NO_EXTERNAL_SPEAKER]: "NO_EXTERNAL_SPEAKER",
    [OutcomeCode.CANCELED_ON_VEH]: "CANCELED_ON_VEH",
    [OutcomeCode.MAINTENANCE_MODE_ACTIVATE]: "MAINTENANCE_MODE_ACTIVATE",
    [OutcomeCode.NOT_A_MANAGER]: "NOT_A_MANAGER",
    [OutcomeCode.NOT_A_ROC_P]: "NOT_A_ROC_P",
    [OutcomeCode.INVALID_DATA]: "INVALID_DATA",
    [OutcomeCode.BLOCKED_AUTH]: "BLOCKED_AUTH",
};
