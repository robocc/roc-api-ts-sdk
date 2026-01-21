import { ActionFeedbackType, ActionOperationCode, ActionParamsType, ActionResultType } from "./actions";
import { EventCallback } from "./events";
import { ServiceOperationCode, ServiceParamsType, ServiceResultType } from "./services";

/** Enforce all properties are defined in the parametrized type */
export type DeepRequired<T> = {[P in keyof T]-?: DeepRequired<T[P]>};

/** @internal */
export abstract class BaseAPI {
  abstract callService<T extends ServiceOperationCode>(
    operation: T,
    params: ServiceParamsType[T]
  ) : Promise<ServiceResultType[T]>
  
  abstract callAction<T extends ActionOperationCode>(
    operation: T,
    params: ActionParamsType[T],
    feedback_cb?: EventCallback<ActionFeedbackType[T]>
  ) : Promise<{
    promise: Promise<ActionResultType[T]>;
  }>
};


/* Interfaces */
/** 
 * **Security**
 *
 * Security configuration event
 * @property `enable_no_ssl` - *Enable no SSL*
 * @property `enable_ssh` - *Enable SSH*
 * @property `connection_max_try` - *Number of max try with invalid password or API key*
 * @property `connection_timeout` - *IP Blocking Duration*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Security.html RoboccDocs} for further information
*/
export interface Security {
  /** Enable no SSL */
  enable_no_ssl: boolean
  /** Enable SSH */
  enable_ssh: boolean
  /** Number of max try with invalid password or API key */
  connection_max_try: number
  /** IP Blocking Duration */
  connection_timeout: number
}
/** 
 * **Human intervention required**
 *
 * Human intervention required event, human_intervention_required field is set to true if human assistance needed to unlock robot, the others boolean defines which kind of intervention is required 👨🏽‍🔧
 * @property `human_intervention_required` - *Aggregate human intervention required*
 * @property `release_emergency_button` - *Emergency button operated, release it*
 * @property `hold_freewheel_button` - *Motors error, hold freewheel button to reset error*
 * @property `click_freewheel_button` - *Auto move locked, click on freewheel button to unlock*
 * @property `move_vehicle` - *Obstacle, move vehicle*
 * @property `relocate_vehicle` - *Vehicle lost, relocate it*
 * @property `reboot` - *Internal error, need to reboot vehicle*
 * @property `clear_sensor` - *A sensor field of view is obstructed, clear it*
 * @property `push_battery_reset` - *Battery in deep discharge, push battery reset*
 * @property `contact_support` - *Need to contact support*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.HumanInterventionRequired.html RoboccDocs} for further information
*/
export interface HumanInterventionRequired {
  /** Aggregate human intervention required */
  human_intervention_required: boolean
  /** Emergency button operated, release it */
  release_emergency_button: boolean
  /** Motors error, hold freewheel button to reset error */
  hold_freewheel_button: boolean
  /** Auto move locked, click on freewheel button to unlock */
  click_freewheel_button: boolean
  /** Obstacle, move vehicle */
  move_vehicle: boolean
  /** Vehicle lost, relocate it */
  relocate_vehicle: boolean
  /** Internal error, need to reboot vehicle */
  reboot: boolean
  /** A sensor field of view is obstructed, clear it */
  clear_sensor: boolean
  /** Battery in deep discharge, push battery reset */
  push_battery_reset: boolean
  /** Need to contact support */
  contact_support: boolean
}
/** 
 * **LED command**
 *
 * LED displayed on the vehicle with animation, color, corner animation, etc. 🚥
 * @property `animation` - *LED global animation*
 * @property `color` - *LED global Hex color*
 * @property `corner_animation` - *LED corners animation*
 * @property `corner_color` - *LED corners Hex color*
 * @property `display_charge_level` - *LED overlayer displaying charge level*
 * @property `display_charging` - *LED overlayer displaying charging animation on front and back LED segments*
 * @property `point_freewheel_button` - *LED overlayer displaying location of freewheel button*
 * @property `point_e_stop_button` - *LED overlayer displaying location of e stop button*
 * @property `point_bms_reset_button` - *LED overlayer displaying location of BMS reset button*
 * @property `point_power_button` - *LED overlayer displaying location of power button*
 * @property `point_lidar_r2000_center` - *LED overlayer displaying location of lidar r2000 center*
 * @property `point_camera_front` - *LED overlayer displaying location of camera front*
 * @property `point_camera_back` - *LED overlayer displaying location of camera back*
 * @property `point_us_sensor_01_h` - *LED overlayer displaying location of US sensor 01h*
 * @property `point_us_sensor_02_h` - *LED overlayer displaying location of US sensor 02h*
 * @property `point_us_sensor_04_h` - *LED overlayer displaying location of US sensor 04h*
 * @property `point_us_sensor_05_h` - *LED overlayer displaying location of US sensor 05h*
 * @property `point_us_sensor_07_h` - *LED overlayer displaying location of US sensor 07h*
 * @property `point_us_sensor_08_h` - *LED overlayer displaying location of US sensor 08h*
 * @property `point_us_sensor_10_h` - *LED overlayer displaying location of US sensor 10h*
 * @property `point_us_sensor_11_h` - *LED overlayer displaying location of US sensor 11h*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.LedCommand.html RoboccDocs} for further information
*/
export interface LedCommand {
  /** LED global animation */
  animation: LedAnim
  /** LED global Hex color */
  color: string
  /** LED corners animation */
  corner_animation: LedCornerAnim
  /** LED corners Hex color */
  corner_color: string
  /** LED overlayer displaying charge level */
  display_charge_level: boolean
  /** LED overlayer displaying charging animation on front and back LED segments */
  display_charging: boolean
  /** LED overlayer displaying location of freewheel button */
  point_freewheel_button: boolean
  /** LED overlayer displaying location of e stop button */
  point_e_stop_button: boolean
  /** LED overlayer displaying location of BMS reset button */
  point_bms_reset_button: boolean
  /** LED overlayer displaying location of power button */
  point_power_button: boolean
  /** LED overlayer displaying location of lidar r2000 center */
  point_lidar_r2000_center: boolean
  /** LED overlayer displaying location of camera front */
  point_camera_front: boolean
  /** LED overlayer displaying location of camera back */
  point_camera_back: boolean
  /** LED overlayer displaying location of US sensor 01h */
  point_us_sensor_01_h: boolean
  /** LED overlayer displaying location of US sensor 02h */
  point_us_sensor_02_h: boolean
  /** LED overlayer displaying location of US sensor 04h */
  point_us_sensor_04_h: boolean
  /** LED overlayer displaying location of US sensor 05h */
  point_us_sensor_05_h: boolean
  /** LED overlayer displaying location of US sensor 07h */
  point_us_sensor_07_h: boolean
  /** LED overlayer displaying location of US sensor 08h */
  point_us_sensor_08_h: boolean
  /** LED overlayer displaying location of US sensor 10h */
  point_us_sensor_10_h: boolean
  /** LED overlayer displaying location of US sensor 11h */
  point_us_sensor_11_h: boolean
}
/** 
 * **Site**
 *
 * Describe a site with its infos and maps in full format
 * @property `id` - *Id*
 * @property `name` - *Name*
 * @property `description` - *Description*
 * @property `maps` - *List of maps*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Site.html RoboccDocs} for further information
*/
export interface Site {
  /** Id */
  id?: number
  /** Name */
  name: string
  /** Description */
  description: string
  /** List of maps */
  maps?: Map[]
}
/** 
 * **OngoingAction**
 *
 * Current ongoing action, false if no current action
 * @property `operation_code` - *Current action operation code*
 * @property `restart_map_allowed` - *Restart map is allowed*
 * @property `vehicle_moving` - *Vehicle is moving*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.OngoingAction.html RoboccDocs} for further information
*/
export interface OngoingAction {
  /** Current action operation code */
  operation_code?: number
  /** Restart map is allowed */
  restart_map_allowed?: boolean
  /** Vehicle is moving */
  vehicle_moving?: boolean
}
/** 
 * **Site light**
 *
 * Describe a site with its infos and maps in a light format
 * @property `id` - *Id*
 * @property `name` - *Name*
 * @property `description` - *Description*
 * @property `maps` - *List of maps,*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SiteLight.html RoboccDocs} for further information
*/
export interface SiteLight {
  /** Id */
  id?: number
  /** Name */
  name: string
  /** Description */
  description: string
  /** List of maps, */
  maps?: MapLight[]
}
/** 
 * **Site raw**
 *
 * Describe a site with only its infos
 * @property `id` - *id*
 * @property `name` - *Name*
 * @property `description` - *Description*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SiteRaw.html RoboccDocs} for further information
*/
export interface SiteRaw {
  /** id */
  id: number
  /** Name */
  name: string
  /** Description */
  description: string
}
/** 
 * **Map**
 *
 * Describe a map with its infos, images, and map elements 🗺
 * @property `id` - *Id*
 * @property `id_site` - *Id of parent site*
 * @property `uuid` - *Uuid, unique identifier on the current site*
 * @property `name` - *Name*
 * @property `description` - *Description*
 * @property `critical_battery_threshold` - *Critical battery threshold*
 * @property `operational_battery_threshold` - *Operational battery threshold*
 * @property `behaviour` - *General behaviour*
 * @property `uuid_preferred_charging_station` - *Uuid of preferred charging station*
 * @property `width` - *Map's width in pixel*
 * @property `height` - *Map's height in pixel*
 * @property `surface` - *Mapped surface of the map*
 * @property `resolution` - *Map's resolution in cm/pixel*
 * @property `threshold_low` - *Threshold low*
 * @property `threshold_high` - *Threshold high*
 * @property `img_original` - *Original image in base 64*
 * @property `img_erase_layer` - *Erase layer image in base 64*
 * @property `img_trinary` - *Trinary image in base 64*
 * @property `img_final` - *Final image in base 64*
 * @property `forbidden_areas` - *List of forbidden areas*
 * @property `custom_areas` - *List of custom areas*
 * @property `saved_poses` - *List of saved poses*
 * @property `fiducials` - *List of fiducials*
 * @property `charging_stations` - *List of charging stations*
 * @property `docked_poses` - *List of docked poses*
 * @property `autopilots` - *List of autopilot configurations*
 * @property `routes` - *Routes graph*
 * @property `last_update` - *Timestamp of map's last update*
 * @property `orientation_angle` - *Map's orientation angle in trigonometric direction, reverse clockwise*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Map.html RoboccDocs} for further information
*/
export interface Map {
  /** Id */
  id?: number
  /** Id of parent site */
  id_site?: number
  /** Uuid, unique identifier on the current site */
  uuid?: number
  /** Name */
  name: string
  /** Description */
  description: string
  /** Critical battery threshold */
  critical_battery_threshold?: number
  /** Operational battery threshold */
  operational_battery_threshold?: number
  /** General behaviour */
  behaviour?: Behaviour
  /** Uuid of preferred charging station */
  uuid_preferred_charging_station?: number
  /** Map's width in pixel */
  width: number
  /** Map's height in pixel */
  height: number
  /** Mapped surface of the map */
  surface?: number
  /** Map's resolution in cm/pixel */
  resolution?: number
  /** Threshold low */
  threshold_low?: number
  /** Threshold high */
  threshold_high?: number
  /** Original image in base 64 */
  img_original?: string
  /** Erase layer image in base 64 */
  img_erase_layer?: string
  /** Trinary image in base 64 */
  img_trinary?: string
  /** Final image in base 64 */
  img_final?: string
  /** List of forbidden areas */
  forbidden_areas?: ForbiddenArea[]
  /** List of custom areas */
  custom_areas?: CustomArea[]
  /** List of saved poses */
  saved_poses?: SavedPose[]
  /** List of fiducials */
  fiducials?: Fiducial[]
  /** List of charging stations */
  charging_stations?: ChargingStation[]
  /** List of docked poses */
  docked_poses?: DockedPose[]
  /** List of autopilot configurations */
  autopilots?: AutopilotConfig[]
  /** Routes graph */
  routes?: RoutesGraph
  /** Timestamp of map's last update */
  last_update?: number
  /** Map's orientation angle in trigonometric direction, reverse clockwise */
  orientation_angle?: number
}
/** 
 * **Map Raw**
 *
 * Describe a map with its infos, images, but without map elements 🗺
 * @property `id` - *Id*
 * @property `id_site` - *Id of parent site*
 * @property `uuid` - *Uuid, unique identifier on the current site*
 * @property `name` - *Name*
 * @property `description` - *Description*
 * @property `critical_battery_threshold` - *Critical battery threshold*
 * @property `operational_battery_threshold` - *Operational battery threshold*
 * @property `behaviour` - *General behaviour*
 * @property `uuid_preferred_charging_station` - *Uuid of preferred charging station*
 * @property `width` - *Map's width in pixel*
 * @property `height` - *Map's height in pixel*
 * @property `surface` - *Mapped surface of the map*
 * @property `resolution` - *Map's resolution in cm/pixel*
 * @property `threshold_low` - *Threshold low*
 * @property `threshold_high` - *Threshold high*
 * @property `img_original` - *Original image in base 64*
 * @property `img_erase_layer` - *Erase layer image in base 64*
 * @property `img_trinary` - *Trinary image in base 64*
 * @property `img_final` - *Final image in base 64*
 * @property `routes` - *Routes graph*
 * @property `orientation_angle` - *Map's orientation angle in trigonometric direction, reverse clockwise*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MapRaw.html RoboccDocs} for further information
*/
export interface MapRaw {
  /** Id */
  id?: number
  /** Id of parent site */
  id_site?: number
  /** Uuid, unique identifier on the current site */
  uuid?: number
  /** Name */
  name: string
  /** Description */
  description: string
  /** Critical battery threshold */
  critical_battery_threshold?: number
  /** Operational battery threshold */
  operational_battery_threshold?: number
  /** General behaviour */
  behaviour?: Behaviour
  /** Uuid of preferred charging station */
  uuid_preferred_charging_station?: number
  /** Map's width in pixel */
  width: number
  /** Map's height in pixel */
  height: number
  /** Mapped surface of the map */
  surface?: number
  /** Map's resolution in cm/pixel */
  resolution?: number
  /** Threshold low */
  threshold_low?: number
  /** Threshold high */
  threshold_high?: number
  /** Original image in base 64 */
  img_original?: string
  /** Erase layer image in base 64 */
  img_erase_layer?: string
  /** Trinary image in base 64 */
  img_trinary?: string
  /** Final image in base 64 */
  img_final?: string
  /** Routes graph */
  routes?: RoutesGraph
  /** Map's orientation angle in trigonometric direction, reverse clockwise */
  orientation_angle?: number
}
/** 
 * **Map elements**
 *
 * List all map elements of a map
 * @property `forbidden_areas` - *List of forbidden areas*
 * @property `custom_areas` - *List of custom areas*
 * @property `saved_poses` - *List of saved poses*
 * @property `fiducials` - *List of fiducials*
 * @property `charging_stations` - *List of charging stations*
 * @property `docked_poses` - *List of docked poses*
 * @property `behaviour` - *General behaviour*
 * @property `uuid_preferred_charging_station` - *Uuid of preferred charging station*
 * @property `routes` - *Routes graph*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MapElements.html RoboccDocs} for further information
*/
export interface MapElements {
  /** List of forbidden areas */
  forbidden_areas?: ForbiddenArea[]
  /** List of custom areas */
  custom_areas?: CustomArea[]
  /** List of saved poses */
  saved_poses?: SavedPose[]
  /** List of fiducials */
  fiducials?: Fiducial[]
  /** List of charging stations */
  charging_stations?: ChargingStation[]
  /** List of docked poses */
  docked_poses?: DockedPose[]
  /** General behaviour */
  behaviour?: Behaviour
  /** Uuid of preferred charging station */
  uuid_preferred_charging_station?: number
  /** Routes graph */
  routes?: RoutesGraph
}
/** 
 * **Map without images**
 *
 * Describe a map with its infos, and map elements 🗺
 * @property `id` - *Id*
 * @property `id_site` - *Id of parent site*
 * @property `uuid` - *Uuid, unique identifier on the current site*
 * @property `name` - *Name*
 * @property `description` - *Description*
 * @property `critical_battery_threshold` - *Critical battery threshold*
 * @property `operational_battery_threshold` - *Operational battery threshold*
 * @property `behaviour` - *General behaviour*
 * @property `uuid_preferred_charging_station` - *Uuid of preferred charging station*
 * @property `width` - *Map's width in pixel*
 * @property `height` - *Map's height in pixel*
 * @property `surface` - *Mapped surface of the map*
 * @property `resolution` - *Map's resolution in cm/pixel*
 * @property `threshold_low` - *Threshold low*
 * @property `threshold_high` - *Threshold high*
 * @property `forbidden_areas` - *List of forbidden areas*
 * @property `custom_areas` - *List of custom areas*
 * @property `saved_poses` - *List of saved poses*
 * @property `fiducials` - *List of fiducials*
 * @property `charging_stations` - *List of charging stations*
 * @property `docked_poses` - *List of docked poses*
 * @property `autopilots` - *List of autopilot configurations*
 * @property `routes` - *Routes graph*
 * @property `orientation_angle` - *Map's orientation angle in trigonometric direction, reverse clockwise*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MapWithoutImages.html RoboccDocs} for further information
*/
export interface MapWithoutImages {
  /** Id */
  id?: number
  /** Id of parent site */
  id_site?: number
  /** Uuid, unique identifier on the current site */
  uuid?: number
  /** Name */
  name: string
  /** Description */
  description: string
  /** Critical battery threshold */
  critical_battery_threshold?: number
  /** Operational battery threshold */
  operational_battery_threshold?: number
  /** General behaviour */
  behaviour?: Behaviour
  /** Uuid of preferred charging station */
  uuid_preferred_charging_station?: number
  /** Map's width in pixel */
  width: number
  /** Map's height in pixel */
  height: number
  /** Mapped surface of the map */
  surface?: number
  /** Map's resolution in cm/pixel */
  resolution?: number
  /** Threshold low */
  threshold_low?: number
  /** Threshold high */
  threshold_high?: number
  /** List of forbidden areas */
  forbidden_areas?: ForbiddenArea[]
  /** List of custom areas */
  custom_areas?: CustomArea[]
  /** List of saved poses */
  saved_poses?: SavedPose[]
  /** List of fiducials */
  fiducials?: Fiducial[]
  /** List of charging stations */
  charging_stations?: ChargingStation[]
  /** List of docked poses */
  docked_poses?: DockedPose[]
  /** List of autopilot configurations */
  autopilots?: AutopilotConfig[]
  /** Routes graph */
  routes?: RoutesGraph
  /** Map's orientation angle in trigonometric direction, reverse clockwise */
  orientation_angle?: number
}
/** 
 * **Routes graph**
 *
 * Routes graph 🛣
 * @property `vertices` - *Vertices*
 * @property `edges` - *Edges*
 * @property `settings` - *Settings for routes path planning*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.RoutesGraph.html RoboccDocs} for further information
*/
export interface RoutesGraph {
  /** Vertices */
  vertices: RoutesVertex[]
  /** Edges */
  edges: RoutesEdge[]
  /** Settings for routes path planning */
  settings?: RoutesSettings
}
/** 
 * **Routes vertex**
 *
 * Routes vertex ↔️
 * @property `id` - *Vertex index*
 * @property `position` - *Vertex position*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.RoutesVertex.html RoboccDocs} for further information
*/
export interface RoutesVertex {
  /** Vertex index */
  id: number
  /** Vertex position */
  position: Position
}
/** 
 * **Routes edge**
 *
 * Routes edge 🟠
 * @property `id` - *Edge index*
 * @property `start_vertex_id` - *Start vertex ID*
 * @property `end_vertex_id` - *End vertex ID*
 * @property `bidirectional` - *True if edge is bidirectionnal*
 * @property `path` - *End vertex ID*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.RoutesEdge.html RoboccDocs} for further information
*/
export interface RoutesEdge {
  /** Edge index */
  id: number
  /** Start vertex ID */
  start_vertex_id: number
  /** End vertex ID */
  end_vertex_id: number
  /** True if edge is bidirectionnal */
  bidirectional: boolean
  /** End vertex ID */
  path?: Path
}
/** 
 * **Routes settings**
 *
 * Routes settings ⚙️
 * @property `min_search_radius` - *distance(m) between start and goal to compute routes instead of natural path*
 * @property `max_search_radius` - *radius(m) around start or goal to find a vertex*
 * @property `forward_planning_steps` - *Number of steps (10cm) removed from routes path to smooth navigation*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.RoutesSettings.html RoboccDocs} for further information
*/
export interface RoutesSettings {
  /** distance(m) between start and goal to compute routes instead of natural path */
  min_search_radius?: number
  /** radius(m) around start or goal to find a vertex */
  max_search_radius?: number
  /** Number of steps (10cm) removed from routes path to smooth navigation */
  forward_planning_steps?: number
}
/** 
 * **Module**
 *
 * Describe a module with its ID, name and module description
 * @property `id` - *Id*
 * @property `name` - *Name*
 * @property `module_description` - *Module description*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Module.html RoboccDocs} for further information
*/
export interface Module {
  /** Id */
  id: number
  /** Name */
  name: string
  /** Module description */
  module_description: ModuleDescription
}
/** 
 * **Module description**
 *
 * All module's attributes 🪪
 * @property `allow_auto_veh_to_charge` - *Does the module allow the vehicle to perform itself the move to its charging station when battery reach critical threshold*
 * @property `image` - *Module base64 encoded image*
 * @property `manufacturer` - *Module manufacturer*
 * @property `max_length` - *Module maximum length in meters*
 * @property `max_width` - *Module maximum width in meters*
 * @property `max_height` - *Module maximum height in meters*
 * @property `max_speed` - *Module maximum speed in meters / second*
 * @property `max_weight` - *Module maximum weight in kg*
 * @property `footprint` - *Footprint polygon*
 * @property `name` - *Module name*
 * @property `uuid` - *Module uuid*
 * @property `ports_redirection` - *Module ports redirection*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ModuleDescription.html RoboccDocs} for further information
*/
export interface ModuleDescription {
  /** Does the module allow the vehicle to perform itself the move to its charging station when battery reach critical threshold */
  allow_auto_veh_to_charge?: boolean
  /** Module base64 encoded image */
  image?: string
  /** Module manufacturer */
  manufacturer?: string
  /** Module maximum length in meters */
  max_length?: number
  /** Module maximum width in meters */
  max_width?: number
  /** Module maximum height in meters */
  max_height?: number
  /** Module maximum speed in meters / second */
  max_speed?: number
  /** Module maximum weight in kg */
  max_weight?: number
  /** Footprint polygon */
  footprint?: Position[]
  /** Module name */
  name?: string
  /** Module uuid */
  uuid?: string
  /** Module ports redirection */
  ports_redirection?: PortRedirection[]
}
/** 
 * **Port redirection**
 *
 * Redirect port form noeme to module
 * @property `noeme_port` - *Noeme port*
 * @property `module_port` - *Module port*
 * @property `protocol` - *Protocol*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.PortRedirection.html RoboccDocs} for further information
*/
export interface PortRedirection {
  /** Noeme port */
  noeme_port: number
  /** Module port */
  module_port: number
  /** Protocol */
  protocol: NetworkProtocol
}
/** 
 * **Module configuration**
 *
 * Current module configuration
 * @property `length` - *Module length in meters (Deprecated, use footprint instead)*
 * @property `width` - *Module width in meters (Deprecated, use footprint instead)*
 * @property `footprint` - *Module footprint polygon*
 * @property `height` - *Module height in meters*
 * @property `max_speed` - *Module maximum speed in meters / second*
 * @property `weight` - *Module weight in kg*
 * @property `allow_auto_veh_to_charge` - *Module allow auto veh to charge*
 * @property `urdf` - *Module URDF*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ModuleConfiguration.html RoboccDocs} for further information
*/
export interface ModuleConfiguration {
  /** Module length in meters (Deprecated, use footprint instead) */
  length?: number
  /** Module width in meters (Deprecated, use footprint instead) */
  width?: number
  /** Module footprint polygon */
  footprint?: Position[]
  /** Module height in meters */
  height?: number
  /** Module maximum speed in meters / second */
  max_speed?: number
  /** Module weight in kg */
  weight?: number
  /** Module allow auto veh to charge */
  allow_auto_veh_to_charge?: boolean
  /** Module URDF */
  urdf?: string
}
/** 
 * **Map light**
 *
 * Describe a map with its information and only a preview of its image in a PNG 100x100 pixels base64 encoded format 🗺️
 * @property `id` - *Id*
 * @property `uuid` - *Uuid, unique identifier on the current site*
 * @property `name` - *Name*
 * @property `description` - *Description*
 * @property `img_preview` - *Preview of final image in base 64*
 * @property `surface` - *Mapped surface of the map*
 * @property `width` - *Map width*
 * @property `height` - *Map height*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MapLight.html RoboccDocs} for further information
*/
export interface MapLight {
  /** Id */
  id: number
  /** Uuid, unique identifier on the current site */
  uuid?: number
  /** Name */
  name: string
  /** Description */
  description: string
  /** Preview of final image in base 64 */
  img_preview?: string
  /** Mapped surface of the map */
  surface?: number
  /** Map width */
  width?: number
  /** Map height */
  height?: number
}
/** 
 * **Forbidden area**
 *
 * Describe a forbidden area element with its infos and geometry ⛔
 * @property `id` - *Id*
 * @property `uuid` - *Uuid, unique identifier on the current map*
 * @property `name` - *Name*
 * @property `description` - *Description*
 * @property `geometry` - *Geometry*
 * @property `id_map` - *Id of the map*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ForbiddenArea.html RoboccDocs} for further information
*/
export interface ForbiddenArea {
  /** Id */
  id?: number
  /** Uuid, unique identifier on the current map */
  uuid: number
  /** Name */
  name?: string
  /** Description */
  description?: string
  /** Geometry */
  geometry: Position[]
  /** Id of the map */
  id_map?: number
}
/** 
 * **Custom area**
 *
 * Describe a custom area element with its infos, geometry and behaviour associated ⚙️
 * @property `id` - *Id*
 * @property `uuid` - *Uuid, unique identifier on the current map*
 * @property `name` - *Name*
 * @property `description` - *Description*
 * @property `geometry` - *Geometry*
 * @property `id_map` - *Id of the map*
 * @property `behaviour` - *Behaviour*
 * @property `color` - *Area's color*
 * @property `zindex` - *Z-index of area, the higher is upper most*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.CustomArea.html RoboccDocs} for further information
*/
export interface CustomArea {
  /** Id */
  id?: number
  /** Uuid, unique identifier on the current map */
  uuid: number
  /** Name */
  name?: string
  /** Description */
  description?: string
  /** Geometry */
  geometry: Position[]
  /** Id of the map */
  id_map?: number
  /** Behaviour */
  behaviour: Behaviour
  /** Area's color */
  color?: string
  /** Z-index of area, the higher is upper most */
  zindex: number
}
/** 
 * **Saved pose**
 *
 * Describe a saved pose element with its infos 🔻
 * @property `id` - *Id*
 * @property `uuid` - *Uuid, unique identifier on the current map*
 * @property `name` - *Name*
 * @property `description` - *Description*
 * @property `pose` - *Position*
 * @property `id_map` - *Id of the map*
 * @property `icon` - *Id of the map*
 * @property `color` - *Id of the map*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SavedPose.html RoboccDocs} for further information
*/
export interface SavedPose {
  /** Id */
  id?: number
  /** Uuid, unique identifier on the current map */
  uuid: number
  /** Name */
  name: string
  /** Description */
  description: string
  /** Position */
  pose: Pose
  /** Id of the map */
  id_map?: number
  /** Id of the map */
  icon?: string
  /** Id of the map */
  color?: string
}
/** 
 * **Fiducial**
 *
 * Describe a fiducial element with its infos, marker and pose on map 🏷️
 * @property `id` - *Id*
 * @property `uuid` - *Uuid, unique identifier on the current map*
 * @property `name` - *Name*
 * @property `description` - *Description*
 * @property `pose` - *Marker's position*
 * @property `id_map` - *Id of the map*
 * @property `marker` - *Marker*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Fiducial.html RoboccDocs} for further information
*/
export interface Fiducial {
  /** Id */
  id?: number
  /** Uuid, unique identifier on the current map */
  uuid?: number
  /** Name */
  name: string
  /** Description */
  description: string
  /** Marker's position */
  pose: Pose
  /** Id of the map */
  id_map?: number
  /** Marker */
  marker: string
}
/** 
 * **Charging station**
 *
 * Describe a charging station element with its infos and poses needed to perfom the docking 🔌
 * @property `id` - *Id*
 * @property `uuid` - *Uuid, unique identifier on the current map*
 * @property `name` - *Name*
 * @property `description` - *Description*
 * @property `pose` - *Marker's position,*
 * @property `approach_pose` - *Approach position,*
 * @property `docked_pose` - *Docked position,*
 * @property `disable_safety_distance` - *Distance from which safety is disabled*
 * @property `id_map` - *Id of the map*
 * @property `marker` - *Marker*
 * @property `undock_sequence` - *Undock sequence*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ChargingStation.html RoboccDocs} for further information
*/
export interface ChargingStation {
  /** Id */
  id?: number
  /** Uuid, unique identifier on the current map */
  uuid?: number
  /** Name */
  name: string
  /** Description */
  description: string
  /** Marker's position, */
  pose: Pose
  /** Approach position, */
  approach_pose: Pose
  /** Docked position, */
  docked_pose: Pose
  /** Distance from which safety is disabled */
  disable_safety_distance?: number
  /** Id of the map */
  id_map?: number
  /** Marker */
  marker: string
  /** Undock sequence */
  undock_sequence: MoveSequence
}
/** 
 * **Docked pose**
 *
 * Describe a docked pose element with its infos and poses needed to perfom the docking 🔻
 * @property `id` - *Id*
 * @property `uuid` - *Uuid, unique identifier on the current map*
 * @property `name` - *Name*
 * @property `description` - *Description*
 * @property `pose` - *Marker's position,*
 * @property `approach_pose` - *Approach position*
 * @property `docked_pose` - *Docked position,*
 * @property `id_map` - *Id of the map*
 * @property `marker` - *Marker*
 * @property `undock_sequence` - *Undock sequence*
 * @property `disable_safety_distance` - *Distance from which safety is disabled*
 * @property `icon` - *Icon*
 * @property `color` - *Color*
 * @property `guided_distance` - *Distance from which robot only move front*
 * @property `max_speed` - *Max speed*
 * @property `pushing_allowed` - *Allow robot to push an obstacle*
 * @property `pushing_success_tolerance` - *Distance between the robot and the docked pose from which the action is considered a success*
 * @property `motors_amps_threshold` - *Max amps allowed on motors*
 * @property `motors_amps_time_threshold` - *Length of time the max amps can be exceeded*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.DockedPose.html RoboccDocs} for further information
*/
export interface DockedPose {
  /** Id */
  id?: number
  /** Uuid, unique identifier on the current map */
  uuid?: number
  /** Name */
  name: string
  /** Description */
  description: string
  /** Marker's position, */
  pose: Pose
  /** Approach position */
  approach_pose: Pose
  /** Docked position, */
  docked_pose: Pose
  /** Id of the map */
  id_map?: number
  /** Marker */
  marker: string
  /** Undock sequence */
  undock_sequence: MoveSequence
  /** Distance from which safety is disabled */
  disable_safety_distance?: number
  /** Icon */
  icon?: string
  /** Color */
  color?: string
  /** Distance from which robot only move front */
  guided_distance?: number
  /** Max speed */
  max_speed?: number
  /** Allow robot to push an obstacle */
  pushing_allowed?: boolean
  /** Distance between the robot and the docked pose from which the action is considered a success */
  pushing_success_tolerance?: number
  /** Max amps allowed on motors */
  motors_amps_threshold?: number
  /** Length of time the max amps can be exceeded */
  motors_amps_time_threshold?: number
}
/** 
 * **Marker**
 *
 * Describe a marker with its ID and pose associated in map
 * @property `id` - *Id*
 * @property `pose` - *Pose*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Marker.html RoboccDocs} for further information
*/
export interface Marker {
  /** Id */
  id: number
  /** Pose */
  pose: Pose
}
/** 
 * **Teleop command**
 *
 * Command to teleop vehicle 🕹️
 * @property `linear_speed` - *Linear speed*
 * @property `angular_speed` - *Angular speed*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.TeleopCmd.html RoboccDocs} for further information
*/
export interface TeleopCmd {
  /** Linear speed */
  linear_speed: number
  /** Angular speed */
  angular_speed: number
}
/** 
 * **Pose 2D**
 *
 * Describe a pose in two dimensions on map x and y coordinates in meters and a t value in rad for angle
 * @property `x` - *Pose X*
 * @property `y` - *Pose Y*
 * @property `t` - *Orientation*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Pose.html RoboccDocs} for further information
*/
export interface Pose {
  /** Pose X */
  x: number
  /** Pose Y */
  y: number
  /** Orientation */
  t: number
}
/** 
 * **Position X,Y**
 *
 * Describe a pose in two dimensions on map x and y coordinates in meters
 * @property `x` - *Pose X*
 * @property `y` - *Pose Y*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Position.html RoboccDocs} for further information
*/
export interface Position {
  /** Pose X */
  x: number
  /** Pose Y */
  y: number
}
/** 
 * **Battery state**
 *
 * Describe the battery state with the current, the state of charge, the battery capacity, the power supply status and wether battery is powered or not 🔋
 * @property `current` - *Negative when discharging (A)*
 * @property `is_powered` - *Is powered*
 * @property `SOC` - *State Of Charge in %*
 * @property `capacity` - *Capacity in Ah (last full capacity)*
 * @property `power_supply_status` - *The charging status as reported. Values defined above
0: UNKNOWN
1: CHARGING
2: DISCHARGING
3: NOT_CHARGING
4: FULL
*
 * @property `charge_max_error` - *Max possible error of State of charge in %*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.BatteryState.html RoboccDocs} for further information
*/
export interface BatteryState {
  /** Negative when discharging (A) */
  current: number
  /** Is powered */
  is_powered: boolean
  /** State Of Charge in % */
  SOC: number
  /** Capacity in Ah (last full capacity) */
  capacity: number
  /** The charging status as reported. Values defined above
0: UNKNOWN
1: CHARGING
2: DISCHARGING
3: NOT_CHARGING
4: FULL
 */
  power_supply_status: number
  /** Max possible error of State of charge in % */
  charge_max_error: number
}
/** 
 * **User**
 *
 * Describe an user with their id, login, last connection date, active status, wether they are admin or not and wether they need to change password 👨🏽‍🦱
 * @property `id` - *id*
 * @property `login` - *Login*
 * @property `need_change_password` - *Need change password (default password)*
 * @property `is_api_admin` - *Is admin*
 * @property `active` - *Is active*
 * @property `last_connection` - *Last connection date*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.User.html RoboccDocs} for further information
*/
export interface User {
  /** id */
  id: number
  /** Login */
  login: string
  /** Need change password (default password) */
  need_change_password: boolean
  /** Is admin */
  is_api_admin: boolean
  /** Is active */
  active: boolean
  /** Last connection date */
  last_connection: number
}
/** 
 * **Move step**
 *
 * Describe a simple move order linear move or angular move
 * @property `distance` - *Distance*
 * @property `move_type`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MoveStep.html RoboccDocs} for further information
*/
export interface MoveStep {
  /** Distance */
  distance: number
  /**  */
  move_type: MoveStepMoveType
}
/** 
 * **Vehicle diagnostic element**
 *
 * Describe a vehicle hardware element with its ID, name and type 🛠
 * @property `id` - *Id*
 * @property `name` - *Name*
 * @property `type` - *Element type*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.DiagnosticElement.html RoboccDocs} for further information
*/
export interface DiagnosticElement {
  /** Id */
  id: number
  /** Name */
  name: string
  /** Element type */
  type: DiagnosticElementType
}
/** 
 * **Diagnostic error**
 *
 * Diagnostic error for a vehicle hardware element with timestamp, criticity and error type ‼
 * @property `stamp` - *Timestamp*
 * @property `element_id` - *Element id*
 * @property `element_type` - *Element type*
 * @property `error_type` - *Error*
 * @property `critical_level` - *Critical level*
 * @property `description` - *Description*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.DiagnosticError.html RoboccDocs} for further information
*/
export interface DiagnosticError {
  /** Timestamp */
  stamp: number
  /** Element id */
  element_id: number
  /** Element type */
  element_type: DiagnosticElementType
  /** Error */
  error_type: DiagnosticElementError
  /** Critical level */
  critical_level: DiagnosticCriticalLevel
  /** Description */
  description?: string
}
/** 
 * **Autopilot**
 *
 * An autopilot sequence with an ID and the map ID for which is it set
 * @property `id` - *Id*
 * @property `id_map` - *Id of parent map*
 * @property `data`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.AutopilotConfig.html RoboccDocs} for further information
*/
export interface AutopilotConfig {
  /** Id */
  id?: number
  /** Id of parent map */
  id_map?: number
  /**  */
  data?: AutopilotSequence
}
/** 
 * **Autopilot indexed step**
 *
 * Autopilot step with its index in autopilot config
 * @property `step_index` - *Step index*
 * @property `data` - *JSON data*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.AutopilotIndexedStep.html RoboccDocs} for further information
*/
export interface AutopilotIndexedStep {
  /** Step index */
  step_index?: number
  /** JSON data */
  data: AutopilotStep
}
/** 
 * **AutopilotStepMoveParams**
 *
 * Option 1 for parameter Step params
 * @property `target_type`
 * @property `target_name` - *Optional target name*
 * @property `uuid` - *Uuid of element*
 * @property `target_tolerance` - *Distance between robot and destination to consider success*
 * @property `on_error`
 * @property `error_timeout` - *Wait time in seconds before retry or next*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.AutopilotStepMoveParams.html RoboccDocs} for further information
*/
export interface AutopilotStepMoveParams {
  /**  */
  target_type: AutopilotStepMoveParamsTargetType
  /** Optional target name */
  target_name?: string
  /** Uuid of element */
  uuid: number
  /** Distance between robot and destination to consider success */
  target_tolerance?: number
  /**  */
  on_error?: AutopilotStepMoveParamsOnError
  /** Wait time in seconds before retry or next */
  error_timeout?: number
}
/** 
 * **Autopilot step**
 *
 * Describe an autopilot step which can be a timer where the robot wait for X seconds, a move order to a map element or a behaviour step where vehicle play some sound or display some LEDs
 * @property `step_type`
 * @property `index` - *Optional index for autopilot step*
 * @property `name` - *Optional name for autopilot step*
 * @property `params` - *Step params*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.AutopilotStep.html RoboccDocs} for further information
*/
export interface AutopilotStep {
  /**  */
  step_type: AutopilotStepType
  /** Optional index for autopilot step */
  index?: number
  /** Optional name for autopilot step */
  name?: string
  /** Step params */
  params: AutopilotStepMoveParams | LedSoundAnimBehaviour | number
}
/** 
 * **Led and sound anim behaviour**
 *
 * Describe a LED and sound behaviour with LED color, anim, duration and sound sample, volume, loop_number, loop_delay ⚙️
 * @property `led_anim` - *LED animation*
 * @property `led_color` - *LED color (Hex format)*
 * @property `led_duration` - *LED duration in seconds*
 * @property `sound_sample` - *Sound sample*
 * @property `sound_volume` - *Sound volume*
 * @property `sound_loop_number` - *Number of play of the sound sample*
 * @property `sound_loop_delay` - *Delay between each sound loop, in seconds*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.LedSoundAnimBehaviour.html RoboccDocs} for further information
*/
export interface LedSoundAnimBehaviour {
  /** LED animation */
  led_anim?: LedAnim
  /** LED color (Hex format) */
  led_color?: string
  /** LED duration in seconds */
  led_duration?: number
  /** Sound sample */
  sound_sample?: string
  /** Sound volume */
  sound_volume?: number
  /** Number of play of the sound sample */
  sound_loop_number?: SoundLoopNumber
  /** Delay between each sound loop, in seconds */
  sound_loop_delay?: number
}
/** 
 * **Areas**
 *
 * Current areas where the robot is
 * @property `id` - *ID*
 * @property `uuids` - *Areas's uuid*
 * @property `led_anim` - *LED animation*
 * @property `led_color` - *LED color (Hex format)*
 * @property `sound_sample` - *Sound sample*
 * @property `sound_volume` - *Sound volume*
 * @property `sound_loop_delay` - *Delay between each sound loop, in seconds*
 * @property `max_speed` - *Max speed*
 * @property `safety_margin_override` - *Safety margin override*
 * @property `airplane_zone` - *Safety margin override*
 * @property `cam3d_filtering` - *Cam3D Filtering*
 * @property `min_obstacle_height` - *Min obstacle height from ground*
 * @property `on_enter` - *On enter behaviour*
 * @property `on_exit` - *On exit behaviour*
 * @property `agv_mode` - *AGV mode*
 * @property `replanning_timeout` - *Time in second before replanning*
 * @property `disable_self_relocation` - *Disable vehicle's ability to automatically relocate itself during navigation*
 * @property `disable_us_sensors` - *Disable US sensors*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Areas.html RoboccDocs} for further information
*/
export interface Areas {
  /** ID */
  id: number
  /** Areas's uuid */
  uuids: number[]
  /** LED animation */
  led_anim: LedAnim
  /** LED color (Hex format) */
  led_color: string
  /** Sound sample */
  sound_sample: string
  /** Sound volume */
  sound_volume: number
  /** Delay between each sound loop, in seconds */
  sound_loop_delay: number
  /** Max speed */
  max_speed: number
  /** Safety margin override */
  safety_margin_override: number
  /** Safety margin override */
  airplane_zone: OnOff
  /** Cam3D Filtering */
  cam3d_filtering: number
  /** Min obstacle height from ground */
  min_obstacle_height: number
  /** On enter behaviour */
  on_enter: LedSoundAnimBehaviour
  /** On exit behaviour */
  on_exit: LedSoundAnimBehaviour
  /** AGV mode */
  agv_mode: OnOff
  /** Time in second before replanning */
  replanning_timeout: number
  /** Disable vehicle's ability to automatically relocate itself during navigation */
  disable_self_relocation: OnOff
  /** Disable US sensors */
  disable_us_sensors: OnOff
}
/** 
 * **Behaviour**
 *
 * Behaviour with sound, LED, settings like max speed, safety margin and events like onEnter onExit area to apply specific behaviour on custom area, on the entire map or an autopilot step ⚙️
 * @property `led_anim` - *LED animation*
 * @property `led_color` - *LED color (Hex format)*
 * @property `sound_sample` - *Sound sample*
 * @property `sound_volume` - *Sound volume*
 * @property `sound_loop_delay` - *Delay between each sound loop, in seconds*
 * @property `max_speed` - *Maximum speed in meters / second. Set to -1 to use default value. Otherwise, value must be between 0.2 and 1.0.*
 * @property `safety_margin_override` - *Safety margin override*
 * @property `airplane_zone` - *Safety margin override*
 * @property `cam3d_filtering` - *Cam3D Filtering*
 * @property `min_obstacle_height` - *Min obstacle height from ground. Set to -1 to use default value. Otherwise, value must be between 0.0 and 0.10.*
 * @property `on_enter` - *On enter behaviour*
 * @property `on_exit` - *On exit behaviour*
 * @property `agv_mode` - *AGV mode*
 * @property `replanning_timeout` - *Time in seconds before replanning. Set to -1 to use default value. Otherwise, value must be between 1 and 300.*
 * @property `disable_self_relocation` - *Disable vehicle's ability to automatically relocate itself during navigation*
 * @property `disable_us_sensors` - *Disable US sensors*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Behaviour.html RoboccDocs} for further information
*/
export interface Behaviour {
  /** LED animation */
  led_anim?: LedAnim
  /** LED color (Hex format) */
  led_color?: string
  /** Sound sample */
  sound_sample?: string
  /** Sound volume */
  sound_volume?: number
  /** Delay between each sound loop, in seconds */
  sound_loop_delay?: number
  /** Maximum speed in meters / second. Set to -1 to use default value. Otherwise, value must be between 0.2 and 1.0. */
  max_speed?: number
  /** Safety margin override */
  safety_margin_override?: number
  /** Safety margin override */
  airplane_zone?: OnOff
  /** Cam3D Filtering */
  cam3d_filtering?: number
  /** Min obstacle height from ground. Set to -1 to use default value. Otherwise, value must be between 0.0 and 0.10. */
  min_obstacle_height?: number
  /** On enter behaviour */
  on_enter?: LedSoundAnimBehaviour
  /** On exit behaviour */
  on_exit?: LedSoundAnimBehaviour
  /** AGV mode */
  agv_mode?: OnOff
  /** Time in seconds before replanning. Set to -1 to use default value. Otherwise, value must be between 1 and 300. */
  replanning_timeout?: number
  /** Disable vehicle's ability to automatically relocate itself during navigation */
  disable_self_relocation?: OnOff
  /** Disable US sensors */
  disable_us_sensors?: OnOff
}
/** 
 * **Docking state**
 *
 * Docking state including docking type and docking status 🔌
 * @property `type`
 * @property `status`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.DockingState.html RoboccDocs} for further information
*/
export interface DockingState {
  /**  */
  type?: DockingType
  /**  */
  status?: DockingStatus
}
/** 
 * **Sound scenario volume**
 *
 * Volume associated with a sound scenario 🔉
 * @property `scenario` - *Scenario*
 * @property `volume` - *Volume*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SoundScenarioVolume.html RoboccDocs} for further information
*/
export interface SoundScenarioVolume {
  /** Scenario */
  scenario: SoundScenario
  /** Volume */
  volume: number
}
/** 
 * **Sound scenario sample**
 *
 * Sample associated with a sound scenario 🔉
 * @property `scenario` - *Scenario*
 * @property `sample` - *Sample*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SoundScenarioSample.html RoboccDocs} for further information
*/
export interface SoundScenarioSample {
  /** Scenario */
  scenario: SoundScenario
  /** Sample */
  sample: string
}
/** 
 * **Wifi access point**
 *
 * Wi-Fi access point details 🛜
 * @property `ssid` - *ssid*
 * @property `strength` - *strength*
 * @property `secured` - *secured*
 * @property `frequency` - *frequency*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.WifiAp.html RoboccDocs} for further information
*/
export interface WifiAp {
  /** ssid */
  ssid: string
  /** strength */
  strength: number
  /** secured */
  secured: boolean
  /** frequency */
  frequency: number
}
/** 
 * **WAN state of network**
 *
 * WAN state of network, including current IP configuration and wifi access point state 🌐
 * @property `state`
 * @property `network_type`
 * @property `dhcp` - *DHCP enabled*
 * @property `ipv4_address` - *IPv4 address*
 * @property `ipv4_prefix` - *IPv4 prefix*
 * @property `ipv4_gateway` - *IPv4 gateway*
 * @property `dns1` - *DNS 1*
 * @property `dns2` - *DNS 2*
 * @property `wifi_ap` - *WiFi access point*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.NetworkWanState.html RoboccDocs} for further information
*/
export interface NetworkWanState {
  /**  */
  state: NetworkStatus
  /**  */
  network_type: NetworkType
  /** DHCP enabled */
  dhcp: boolean
  /** IPv4 address */
  ipv4_address: string
  /** IPv4 prefix */
  ipv4_prefix: number
  /** IPv4 gateway */
  ipv4_gateway: string
  /** DNS 1 */
  dns1: string
  /** DNS 2 */
  dns2: string
  /** WiFi access point */
  wifi_ap?: WifiAp
}
/** 
 * **System info message**
 *
 * All system information
 * @property `computer_type` - *Computer type*
 * @property `mcu_type` - *MCU type*
 * @property `motor_type` - *Motor type*
 * @property `mac_addresses` - *List of mac addresses*
 * @property `os_version` - *OS Version*
 * @property `memory_usage` - *Memory usage*
 * @property `memory_total` - *Memory total*
 * @property `storage_usage` - *Storage usage*
 * @property `storage_total` - *Storage total*
 * @property `cpu_usage` - *CPU Usage in %*
 * @property `cpu_temp` - *CPU Temperature in °C*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SystemInfo.html RoboccDocs} for further information
*/
export interface SystemInfo {
  /** Computer type */
  computer_type: ComputerType
  /** MCU type */
  mcu_type: McuType
  /** Motor type */
  motor_type: MotorType
  /** List of mac addresses */
  mac_addresses: string[]
  /** OS Version */
  os_version: string
  /** Memory usage */
  memory_usage: number
  /** Memory total */
  memory_total: number
  /** Storage usage */
  storage_usage: number
  /** Storage total */
  storage_total: number
  /** CPU Usage in % */
  cpu_usage: number
  /** CPU Temperature in °C */
  cpu_temp: number
}
/** 
 * **ROC Security**
 *
 * ROC Security
 * @property `enable_no_ssl` - *Enable no SSL (http and ws)*
 * @property `enable_ssh` - *Enable SSH*
 * @property `enable_modbus` - *Enable modbus IP*
 * @property `enable_secure_lora` - *Enable secure LoRa*
 * @property `connection_max_try` - *Number of max try on bad connection*
 * @property `connection_timeout` - *Number of minutes where connection is blocked*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.RocSecurity.html RoboccDocs} for further information
*/
export interface RocSecurity {
  /** Enable no SSL (http and ws) */
  enable_no_ssl: boolean
  /** Enable SSH */
  enable_ssh: boolean
  /** Enable modbus IP */
  enable_modbus: boolean
  /** Enable secure LoRa */
  enable_secure_lora: boolean
  /** Number of max try on bad connection */
  connection_max_try: number
  /** Number of minutes where connection is blocked */
  connection_timeout: number
}
/** 
 * **Invalid data list by section**
 *
 * Invalid data list by section
 * @property `section` - *Section*
 * @property `list` - *Invalid data list*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.InvalidDataBySection.html RoboccDocs} for further information
*/
export interface InvalidDataBySection {
  /** Section */
  section: string
  /** Invalid data list */
  list: InvalidData[]
}
/** 
 * **Invalid data**
 *
 * Invalid data
 * @property `uuid` - *Uuid*
 * @property `details` - *Invalid data list*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.InvalidData.html RoboccDocs} for further information
*/
export interface InvalidData {
  /** Uuid */
  uuid: number
  /** Invalid data list */
  details: string
}
/** 
 * **Waiting sound**
 *
 * Waiting sound
 * @property `uuid` - *Uuid*
 * @property `sample` - *Sample name*
 * @property `volume` - *Sound's volume*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.WaitingSound.html RoboccDocs} for further information
*/
export interface WaitingSound {
  /** Uuid */
  uuid: number
  /** Sample name */
  sample: string
  /** Sound's volume */
  volume: number
}
/** 
 * **Event sound**
 *
 * Event sound
 * @property `event` - *Uuid*
 * @property `sample` - *Sample name*
 * @property `volume` - *Sound's volume*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.EventSound.html RoboccDocs} for further information
*/
export interface EventSound {
  /** Uuid */
  event: RocEvent
  /** Sample name */
  sample: string
  /** Sound's volume */
  volume: number
}
/** 
 * **External port redirection**
 *
 * External port redirection
 * @property `enabled` - *Enabled*
 * @property `port_src` - *Source port*
 * @property `port_dest` - *Destination port*
 * @property `ip` - *IP*
 * @property `protocol` - *Protocol*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ExternalPortRedirection.html RoboccDocs} for further information
*/
export interface ExternalPortRedirection {
  /** Enabled */
  enabled: boolean
  /** Source port */
  port_src: number
  /** Destination port */
  port_dest: number
  /** IP */
  ip: string
  /** Protocol */
  protocol: NetworkProtocol
}
/** 
 * **Lift status**
 *
 * Lift status
 * @property `is_up` - *Is up*
 * @property `is_down` - *Is down*
 * @property `moving_up` - *Moving up*
 * @property `moving_down` - *Moving down*
 * @property `height` - *Height*
 * @property `tare_height` - *Tare height*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.LiftStatus.html RoboccDocs} for further information
*/
export interface LiftStatus {
  /** Is up */
  is_up: boolean
  /** Is down */
  is_down: boolean
  /** Moving up */
  moving_up: boolean
  /** Moving down */
  moving_down: boolean
  /** Height */
  height: number
  /** Tare height */
  tare_height: number
}
/** 
 * **Group**
 *
 * Group of positions
 * @property `main_uuid` - *Main position uuid*
 * @property `uuids` - *List of positions uuid in group*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Group.html RoboccDocs} for further information
*/
export interface Group {
  /** Main position uuid */
  main_uuid: number
  /** List of positions uuid in group */
  uuids: number[]
}
/** 
 * **ROC and vehicle software versions**
 *
 * ROC and vehicle software versions
 * @property `veh_version` - *Vehicle software version*
 * @property `roc_version` - *ROC software version*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SoftVersions.html RoboccDocs} for further information
*/
export interface SoftVersions {
  /** Vehicle software version */
  veh_version: string
  /** ROC software version */
  roc_version: string
}
/** 
 * **Button destination config**
 *
 * Configuration of destination for a button
 * @property `id_controller` - *Controller ID*
 * @property `index_contact` - *Iµndex of the controller's contact*
 * @property `required_state` - *Required state*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ControllerConstraint.html RoboccDocs} for further information
*/
export interface ControllerConstraint {
  /** Controller ID */
  id_controller: number
  /** Iµndex of the controller's contact */
  index_contact: number
  /** Required state */
  required_state: ContactState
}
/** 
 * **Mission destination config**
 *
 * Configuration of destination for a mission
 * @property `uuid` - *Destination Uuid*
 * @property `constraints` - *Controller contraints*
 * @property `message` - *Message to display*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MissionConfigDestination.html RoboccDocs} for further information
*/
export interface MissionConfigDestination {
  /** Destination Uuid */
  uuid: number
  /** Controller contraints */
  constraints: ControllerConstraint[]
  /** Message to display */
  message?: string
}
/** 
 * **Mission configuration**
 *
 * Configuration of a mission
 * @property `title` - *Controller contraints*
 * @property `destinations` - *Destinations*
 * @property `ordered` - *Ordered list*
 * @property `end_fixed` - *Last destination is fix*
 * @property `end_only_release` - *Force last step to end mission*
 * @property `allowed_modules` - *Allowed modules*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MissionConfig.html RoboccDocs} for further information
*/
export interface MissionConfig {
  /** Controller contraints */
  title: string
  /** Destinations */
  destinations: number[] | MissionConfigDestination[]
  /** Ordered list */
  ordered: boolean
  /** Last destination is fix */
  end_fixed: boolean
  /** Force last step to end mission */
  end_only_release: boolean
  /** Allowed modules */
  allowed_modules: ModuleType[]
}
/** 
 * **Button configuration**
 *
 * Configuration of button
 * @property `id_button` - *Button LoRa ID*
 * @property `mission` - *Mission configuration*
 * @property `response_deadline` - *Response deadline in ms*
 * @property `big_response_deadline` - *Response deadline with big message in ms*
 * @property `optimised` - *Response deadline optimised*
 * @property `is_virtual` - *Is a virtual button*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ButtonConfig.html RoboccDocs} for further information
*/
export interface ButtonConfig {
  /** Button LoRa ID */
  id_button: number
  /** Mission configuration */
  mission: MissionConfig
  /** Response deadline in ms */
  response_deadline: number
  /** Response deadline with big message in ms */
  big_response_deadline?: number
  /** Response deadline optimised */
  optimised: boolean
  /** Is a virtual button */
  is_virtual: boolean
}
/** 
 * **Waiting pose**
 *
 * Waiting pose
 * @property `saved_pose_uuid` - *Saved pose uuid*
 * @property `waiting_pose_uuid` - *Waiting pose uuid*
 * @property `area_uuid` - *Area uuid*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.WaitingPose.html RoboccDocs} for further information
*/
export interface WaitingPose {
  /** Saved pose uuid */
  saved_pose_uuid: number
  /** Waiting pose uuid */
  waiting_pose_uuid: number
  /** Area uuid */
  area_uuid: number
}
/** 
 * **LoRa Message**
 *
 * LoRa Message
 * @property `id_sender` - *Sender ID*
 * @property `id_recipient` - *Recipient ID*
 * @property `code` - *Code*
 * @property `data` - *Data*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.LoraMessage.html RoboccDocs} for further information
*/
export interface LoraMessage {
  /** Sender ID */
  id_sender: number
  /** Recipient ID */
  id_recipient: number
  /** Code */
  code: number
  /** Data */
  data: number[]
}
/** 
 * **Custom command**
 *
 * Custom command
 * @property `uuid` - *Uuid*
 * @property `title` - *Title*
 * @property `area_uuid` - *Area uuid*
 * @property `destination_uuids` - *Destination uuids*
 * @property `all_except` - *All expect selected*
 * @property `call_on_enter` - *Call on enter*
 * @property `call_on_exit` - *Call on exit*
 * @property `call_on_move_error` - *Call on move error*
 * @property `call_in_area` - *Call in area*
 * @property `id_equipment_dest` - *Equipment LoRa ID*
 * @property `command` - *Equipment LoRa ID*
 * @property `index_contact` - *Contact index*
 * @property `required_state` - *Required state*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.CustomCommand.html RoboccDocs} for further information
*/
export interface CustomCommand {
  /** Uuid */
  uuid: number
  /** Title */
  title: string
  /** Area uuid */
  area_uuid: number
  /** Destination uuids */
  destination_uuids: number[]
  /** All expect selected */
  all_except: boolean
  /** Call on enter */
  call_on_enter: boolean
  /** Call on exit */
  call_on_exit: boolean
  /** Call on move error */
  call_on_move_error: boolean
  /** Call in area */
  call_in_area: boolean
  /** Equipment LoRa ID */
  id_equipment_dest: number
  /** Equipment LoRa ID */
  command: LoraControllerCommand
  /** Contact index */
  index_contact: number
  /** Required state */
  required_state: ContactState
}
/** 
 * **Controller LoRa - Contact**
 *
 * Controller LoRa - Contact
 * @property `name` - *Name*
 * @property `state` - *State*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ControllerLoraContact.html RoboccDocs} for further information
*/
export interface ControllerLoraContact {
  /** Name */
  name: string
  /** State */
  state: boolean
}
/** 
 * **Controller LoRa**
 *
 * Controller LoRa
 * @property `id_controller` - *Controller ID*
 * @property `name` - *Name*
 * @property `contacts` - *Contacts*
 * @property `response_deadline` - *Response deadline in ms*
 * @property `optimised` - *Response deadline optimised*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ControllerLora.html RoboccDocs} for further information
*/
export interface ControllerLora {
  /** Controller ID */
  id_controller: number
  /** Name */
  name: string
  /** Contacts */
  contacts: ControllerLoraContact[]
  /** Response deadline in ms */
  response_deadline?: number
  /** Response deadline optimised */
  optimised?: boolean
}
/** 
 * **Map element restriction**
 *
 * Map element restriction
 * @property `uuid` - *Uuid*
 * @property `allowed_modules` - *Allowed modules*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MapElementRestriction.html RoboccDocs} for further information
*/
export interface MapElementRestriction {
  /** Uuid */
  uuid: number
  /** Allowed modules */
  allowed_modules: ModuleType[]
}
/** 
 * **Docked pose configuration**
 *
 * Docked pose configuration
 * @property `uuid` - *Uuid*
 * @property `station_type` - *Station type*
 * @property `id_controller_lora_front` - *Controller LoRa ID - Front*
 * @property `index_contact_front` - *Controller contact index - Front*
 * @property `contact_front` - *Controller contact state - Front*
 * @property `id_controller_lora_back` - *Controller LoRa ID - Back*
 * @property `index_contact_back` - *Controller contact index - Back*
 * @property `contact_back` - *Controller contact state - Back*
 * @property `should_empty` - *Should empty*
 * @property `width` - *Width*
 * @property `depth` - *Depth*
 * @property `height` - *Height*
 * @property `weight` - *Weight*
 * @property `lift_height` - *Lift height*
 * @property `delay_lift_continue_up_after_contact` - *Delay lift continue up after contact*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.DockedPoseConfig.html RoboccDocs} for further information
*/
export interface DockedPoseConfig {
  /** Uuid */
  uuid: number
  /** Station type */
  station_type: DockedPoseStationType
  /** Controller LoRa ID - Front */
  id_controller_lora_front: number
  /** Controller contact index - Front */
  index_contact_front: number
  /** Controller contact state - Front */
  contact_front: ContactState
  /** Controller LoRa ID - Back */
  id_controller_lora_back: number
  /** Controller contact index - Back */
  index_contact_back: number
  /** Controller contact state - Back */
  contact_back: ContactState
  /** Should empty */
  should_empty: boolean
  /** Width */
  width: number
  /** Depth */
  depth: number
  /** Height */
  height: number
  /** Weight */
  weight: number
  /** Lift height */
  lift_height: number
  /** Delay lift continue up after contact */
  delay_lift_continue_up_after_contact: number
}
/** 
 * **Map element configuration**
 *
 * Map element configuration
 * @property `uuid` - *Uuid*
 * @property `id_controller_lora` - *Controller LoRa ID*
 * @property `relay_num` - *Controller relay number*
 * @property `action` - *Controller LoRa ID - Back*
 * @property `is_shelf_unload` - *Automatic unload of shelf on this position*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.RocMapElementConfig.html RoboccDocs} for further information
*/
export interface RocMapElementConfig {
  /** Uuid */
  uuid: number
  /** Controller LoRa ID */
  id_controller_lora: number
  /** Controller relay number */
  relay_num: number
  /** Controller LoRa ID - Back */
  action: RelayAction
  /** Automatic unload of shelf on this position */
  is_shelf_unload: boolean
}
/** 
 * **Controller LoRa contact configuration**
 *
 * Controller LoRa contact configuration
 * @property `type` - *Contact type*
 * @property `no_nc` - *Contact NO/NC*
 * @property `trigger` - *Contact trugger*
 * @property `id_button` - *Id button*
 * @property `uuid` - *Uuid*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ControllerLoraContactConfig.html RoboccDocs} for further information
*/
export interface ControllerLoraContactConfig {
  /** Contact type */
  type: ContactType
  /** Contact NO/NC */
  no_nc: ContactNonc
  /** Contact trugger */
  trigger: ContactTrigger
  /** Id button */
  id_button: number
  /** Uuid */
  uuid: number
}
/** 
 * **Vehicle configuration**
 *
 * Vehicle configuration
 * @property `id_module` - *Module LoRa ID*
 * @property `module_type` - *Module type*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehConfig.html RoboccDocs} for further information
*/
export interface VehConfig {
  /** Module LoRa ID */
  id_module: number
  /** Module type */
  module_type: ModuleType
}
/** 
 * **VehInfosStats**
 *
 * `stats` parameter of a `VehInfos` type
 * @property `nb_hir` - *Number of HIR*
 * @property `nb_mission` - *Number of mission*
 * @property `nb_move_failed` - *Number of move failed*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehInfosStats.html RoboccDocs} for further information
*/
export interface VehInfosStats {
  /** Number of HIR */
  nb_hir: number
  /** Number of mission */
  nb_mission: number
  /** Number of move failed */
  nb_move_failed: number
}
/** 
 * **Vehicle informations**
 *
 * Vehicle informations
 * @property `id_module` - *Module LoRa ID*
 * @property `status` - *Vehicle status*
 * @property `position` - *Vehicle position*
 * @property `battery_percentage` - *Vehicle battery percentage*
 * @property `odometer` - *Vehicle odometer*
 * @property `is_powered` - *Vehicle is powered*
 * @property `module_type` - *Vehicle module type*
 * @property `stats`
 * @property `roc_id` - *ROC ID*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehInfos.html RoboccDocs} for further information
*/
export interface VehInfos {
  /** Module LoRa ID */
  id_module: number
  /** Vehicle status */
  status: VehStatus
  /** Vehicle position */
  position: Position
  /** Vehicle battery percentage */
  battery_percentage: number
  /** Vehicle odometer */
  odometer: number
  /** Vehicle is powered */
  is_powered: boolean
  /** Vehicle module type */
  module_type: ModuleType
  /**  */
  stats: VehInfosStats
  /** ROC ID */
  roc_id?: number
}
/** 
 * **Vehicle delay configuration**
 *
 * Vehicle delay configuration
 * @property `delay_auto_release_multidest` - *Delay auto release multidest*
 * @property `delay_auto_release` - *Delay auto release*
 * @property `delay_between_sound_release` - *Delay between sound release*
 * @property `delay_between_retry_failed` - *Delay between retry on move failed*
 * @property `nb_retry_first_step` - *Number of retry for first step*
 * @property `nb_retry_other_step` - *Number of retry for other step*
 * @property `nb_retry_multidest` - *Number of retry in multidest*
 * @property `veh_to_xy_goal_tolerance` - *Vehicle to, xy goaltolerance*
 * @property `veh_to_yaw_goal_tolerance` - *Vehicle to, yaw goaltolerance*
 * @property `delay_retry_waiting_pose` - *Delay retry wiating pose*
 * @property `delay_before_sleep_mode` - *Delay before sleep mode*
 * @property `delay_between_retry_pause` - *Delay between retry on pause*
 * @property `delay_lift_continue_up_after_contact` - *Delay between retry on pause*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehDelayConfig.html RoboccDocs} for further information
*/
export interface VehDelayConfig {
  /** Delay auto release multidest */
  delay_auto_release_multidest: number
  /** Delay auto release */
  delay_auto_release: number
  /** Delay between sound release */
  delay_between_sound_release: number
  /** Delay between retry on move failed */
  delay_between_retry_failed: number
  /** Number of retry for first step */
  nb_retry_first_step: number
  /** Number of retry for other step */
  nb_retry_other_step: number
  /** Number of retry in multidest */
  nb_retry_multidest: number
  /** Vehicle to, xy goaltolerance */
  veh_to_xy_goal_tolerance: number
  /** Vehicle to, yaw goaltolerance */
  veh_to_yaw_goal_tolerance: number
  /** Delay retry wiating pose */
  delay_retry_waiting_pose: number
  /** Delay before sleep mode */
  delay_before_sleep_mode: number
  /** Delay between retry on pause */
  delay_between_retry_pause: number
  /** Delay between retry on pause */
  delay_lift_continue_up_after_contact: number
}
/** 
 * **Button informations**
 *
 * Button informations
 * @property `id_button` - *Button LoRa ID*
 * @property `battery_percentage` - *Battery percentage*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ButtonInfos.html RoboccDocs} for further information
*/
export interface ButtonInfos {
  /** Button LoRa ID */
  id_button: number
  /** Battery percentage */
  battery_percentage: number
}
/** 
 * **Missions**
 *
 * List of active missions
 * @property `priority` - *Priority missions list*
 * @property `regular` - *Regular missions list*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ManagerMissions.html RoboccDocs} for further information
*/
export interface ManagerMissions {
  /** Priority missions list */
  priority: Mission[]
  /** Regular missions list */
  regular: Mission[]
}
/** 
 * **Mission**
 *
 * Mission
 * @property `id_mission` - *Mission ID*
 * @property `id_button` - *Button LoRa ID*
 * @property `id_module` - *Module LoRa ID*
 * @property `mission_config` - *Mission configuration*
 * @property `call_time` - *Call time*
 * @property `move_start_time` - *Move start time*
 * @property `cancel_time` - *Cancel time*
 * @property `end_time` - *End time*
 * @property `steps` - *Mission's steps*
 * @property `last_id_module` - *Last module LoRa ID*
 * @property `waiting_distance` - *Waiting distance*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Mission.html RoboccDocs} for further information
*/
export interface Mission {
  /** Mission ID */
  id_mission: number
  /** Button LoRa ID */
  id_button: number
  /** Module LoRa ID */
  id_module: number
  /** Mission configuration */
  mission_config: MissionConfig
  /** Call time */
  call_time: number
  /** Move start time */
  move_start_time: number
  /** Cancel time */
  cancel_time: number
  /** End time */
  end_time: number
  /** Mission's steps */
  steps: MissionStep[]
  /** Last module LoRa ID */
  last_id_module: number
  /** Waiting distance */
  waiting_distance: boolean
}
/** 
 * **Daily stats**
 *
 * Daily stats
 * @property `distance_m` - *Distance in meter*
 * @property `distance_time` - *Distance time*
 * @property `nb_call` - *Number of call*
 * @property `nb_move_failed` - *Number of move failed*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.DailyStats.html RoboccDocs} for further information
*/
export interface DailyStats {
  /** Distance in meter */
  distance_m: number
  /** Distance time */
  distance_time: number
  /** Number of call */
  nb_call: number
  /** Number of move failed */
  nb_move_failed: number
}
/** 
 * **Mission step**
 *
 * Mission step
 * @property `arrival_time` - *Arrval time*
 * @property `error_outcome` - *Error Outcome*
 * @property `error_pose` - *Error pose*
 * @property `error_time` - *Error time*
 * @property `move_start_time` - *Move start time*
 * @property `released_time` - *Release time*
 * @property `uuid` - *Uuid*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MissionStep.html RoboccDocs} for further information
*/
export interface MissionStep {
  /** Arrval time */
  arrival_time: number
  /** Error Outcome */
  error_outcome: number
  /** Error pose */
  error_pose: Position
  /** Error time */
  error_time: number
  /** Move start time */
  move_start_time: number
  /** Release time */
  released_time: number
  /** Uuid */
  uuid: number
}
/** 
 * **Install config done**
 *
 * Install config done
 * @property `error` - *Error*
 * @property `message` - *Message*
 * @property `need_change_map` - *Need change map*
 * @property `id_map` - *Map ID*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.InstallConfigDone.html RoboccDocs} for further information
*/
export interface InstallConfigDone {
  /** Error */
  error: boolean
  /** Message */
  message: string
  /** Need change map */
  need_change_map: boolean
  /** Map ID */
  id_map: number
}
/** 
 * **Response deadline config**
 *
 * Response deadline config
 * @property `default_response_deadline` - *Default response deadline*
 * @property `veh_response_deadline` - *Vehicle response deadline*
 * @property `veh_response_optimised` - *Vehicle response deadline optimised*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ResponseDeadlineConfig.html RoboccDocs} for further information
*/
export interface ResponseDeadlineConfig {
  /** Default response deadline */
  default_response_deadline: number
  /** Vehicle response deadline */
  veh_response_deadline: number
  /** Vehicle response deadline optimised */
  veh_response_optimised: boolean
}
/** 
 * **Log**
 *
 * Log
 * @property `id_log` - *Log ID*
 * @property `id_equipment` - *Equipment ID*
 * @property `severity` - *Log severity*
 * @property `type` - *Log type*
 * @property `title` - *Title*
 * @property `time` - *Time*
 * @property `position` - *Position*
 * @property `battery_level` - *Battery level*
 * @property `outcome` - *Outcome*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Log.html RoboccDocs} for further information
*/
export interface Log {
  /** Log ID */
  id_log: number
  /** Equipment ID */
  id_equipment: number
  /** Log severity */
  severity: LogSeverity
  /** Log type */
  type: LogType
  /** Title */
  title: string
  /** Time */
  time: number
  /** Position */
  position: Position
  /** Battery level */
  battery_level: number
  /** Outcome */
  outcome: number
}
/** 
 * **Complete stats data**
 *
 * Complete stats data
 * @property `by_hour` - *Data by hour*
 * @property `by_day_in_month` - *Data by hour*
 * @property `by_day_in_week` - *Data by hour*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.CompleteData.html RoboccDocs} for further information
*/
export interface CompleteData {
  /** Data by hour */
  by_hour: number[]
  /** Data by hour */
  by_day_in_month: number[]
  /** Data by hour */
  by_day_in_week: number[]
}
/** 
 * **Stats data**
 *
 * Stats data
 * @property `nb_call` - *Number of call*
 * @property `nb_call_by_button` - *Number of call by button*
 * @property `nb_dest_by_uuid` - *Number of destination by uuid*
 * @property `support_times` - *Support times*
 * @property `initial_travel_times` - *Initial travel times*
 * @property `release_durations` - *Release durations*
 * @property `release_durations_by_uuid` - *Release durations bu uuid*
 * @property `move_failed` - *Number of move failed*
 * @property `move_failed_details` - *Move failed details*
 * @property `nb_move_failed_by_outcome` - *Number of move failed by outcome*
 * @property `HIR` - *HIR*
 * @property `HIR_details` - *HIR details*
 * @property `HIR_times` - *HIR times*
 * @property `HIR_type` - *HIR by type*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.StatsData.html RoboccDocs} for further information
*/
export interface StatsData {
  /** Number of call */
  nb_call: CompleteData
  /** Number of call by button */
  nb_call_by_button: CallByButton[]
  /** Number of destination by uuid */
  nb_dest_by_uuid: DestByUuid[]
  /** Support times */
  support_times: StandardStats
  /** Initial travel times */
  initial_travel_times: StandardStats
  /** Release durations */
  release_durations: StandardStats
  /** Release durations bu uuid */
  release_durations_by_uuid: StandardStatsByUuid[]
  /** Number of move failed */
  move_failed: CompleteData
  /** Move failed details */
  move_failed_details: HeatMapData[]
  /** Number of move failed by outcome */
  nb_move_failed_by_outcome: NbByOutcome[]
  /** HIR */
  HIR: CompleteData
  /** HIR details */
  HIR_details: HeatMapData[]
  /** HIR times */
  HIR_times: StandardStats
  /** HIR by type */
  HIR_type: HirByType[]
}
/** 
 * **Exported stats**
 *
 * Exported stats
 * @property `missions` - *Missions in CSV format*
 * @property `logs` - *Logs in CSV format*
 * @property `daily` - *Daily stats in CSV format*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ExportedStats.html RoboccDocs} for further information
*/
export interface ExportedStats {
  /** Missions in CSV format */
  missions: string
  /** Logs in CSV format */
  logs: string
  /** Daily stats in CSV format */
  daily: string
}
/** 
 * **ROC user**
 *
 * ROC user
 * @property `id_user` - *User ID*
 * @property `login` - *Login*
 * @property `is_admin` - *Is admin*
 * @property `password` - *Password (set to update)*
 * @property `password_updated` - *Default password updated*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.RocUser.html RoboccDocs} for further information
*/
export interface RocUser {
  /** User ID */
  id_user: number
  /** Login */
  login: string
  /** Is admin */
  is_admin: boolean
  /** Password (set to update) */
  password?: string
  /** Default password updated */
  password_updated: boolean
}
/** 
 * **Time line step**
 *
 * Time line step
 * @property `start` - *Start time*
 * @property `end` - *End time*
 * @property `status` - *Status*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.TimelineStep.html RoboccDocs} for further information
*/
export interface TimelineStep {
  /** Start time */
  start: number
  /** End time */
  end: number
  /** Status */
  status: string
}
/** 
 * **Vehicle timeline data**
 *
 * Vehicle timeline data
 * @property `id_module` - *Module LoRa ID*
 * @property `data` - *Timeline data*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehTimelineData.html RoboccDocs} for further information
*/
export interface VehTimelineData {
  /** Module LoRa ID */
  id_module: number
  /** Timeline data */
  data: TimelineStep[]
}
/** 
 * **Stats call by button**
 *
 * Stats call by button
 * @property `id_button` - *Button LoRa ID*
 * @property `nb` - *Number of calls*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.CallByButton.html RoboccDocs} for further information
*/
export interface CallByButton {
  /** Button LoRa ID */
  id_button: number
  /** Number of calls */
  nb: number
}
/** 
 * **HIR by type**
 *
 * HIR by type
 * @property `type` - *Type*
 * @property `nb` - *Number of HIR*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.HirByType.html RoboccDocs} for further information
*/
export interface HirByType {
  /** Type */
  type: string
  /** Number of HIR */
  nb: number
}
/** 
 * **Destination by uuid**
 *
 * Destination by uuid
 * @property `uuid` - *Uuid*
 * @property `nb` - *Number*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.DestByUuid.html RoboccDocs} for further information
*/
export interface DestByUuid {
  /** Uuid */
  uuid: number
  /** Number */
  nb: number
}
/** 
 * **Number by outcome**
 *
 * Number by outcome
 * @property `outcome` - *Outcome*
 * @property `nb` - *Number*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.NbByOutcome.html RoboccDocs} for further information
*/
export interface NbByOutcome {
  /** Outcome */
  outcome: number
  /** Number */
  nb: number
}
/** 
 * **Standard stats**
 *
 * Standard stats
 * @property `min` - *Minimum*
 * @property `max` - *Maximum*
 * @property `avg` - *Average*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.StandardStats.html RoboccDocs} for further information
*/
export interface StandardStats {
  /** Minimum */
  min: number
  /** Maximum */
  max: number
  /** Average */
  avg: number
}
/** 
 * **Standard stats by uuid**
 *
 * Standard stats by uuid
 * @property `uuid` - *Uuid*
 * @property `stats` - *Stats*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.StandardStatsByUuid.html RoboccDocs} for further information
*/
export interface StandardStatsByUuid {
  /** Uuid */
  uuid: number
  /** Stats */
  stats: StandardStats
}
/** 
 * **Heat map Data**
 *
 * Heat map Data
 * @property `x` - *Position X*
 * @property `y` - *Position Y*
 * @property `weight` - *Weight*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.HeatMapData.html RoboccDocs} for further information
*/
export interface HeatMapData {
  /** Position X */
  x: number
  /** Position Y */
  y: number
  /** Weight */
  weight: number
}
/** 
 * **Slot hours**
 *
 * Slot hours
 * @property `start` - *Start time*
 * @property `end` - *End time*
 * @property `operating` - *Operating*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SlotHours.html RoboccDocs} for further information
*/
export interface SlotHours {
  /** Start time */
  start: number
  /** End time */
  end: number
  /** Operating */
  operating: boolean
}
/** 
 * **Module params**
 *
 * Module params
 * @property `max_speed` - *Max speed*
 * @property `height` - *Height*
 * @property `width` - *Width*
 * @property `length` - *Length*
 * @property `weight` - *Weight*
 * @property `footprint` - *Module footprint polygon*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ModuleParams.html RoboccDocs} for further information
*/
export interface ModuleParams {
  /** Max speed */
  max_speed: number
  /** Height */
  height: number
  /** Width */
  width: number
  /** Length */
  length: number
  /** Weight */
  weight: number
  /** Module footprint polygon */
  footprint: Position[]
}
/** 
 * **Manager map**
 *
 * Manager map
 * @property `uuid` - *Map uuid*
 * @property `name` - *Map name*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ManagerMap.html RoboccDocs} for further information
*/
export interface ManagerMap {
  /** Map uuid */
  uuid?: number
  /** Map name */
  name: string
}
/** 
 * **Update status**
 *
 * Update status
 * @property `commit` - *Release commit id*
 * @property `status` - *Current update status*
 * @property `download_progress` - *Current download progress of update (in %)*
 * @property `update_pending` - *A system update is available for this device*
 * @property `update_downloaded` - *A system update is available and ready to be applied*
 * @property `update_failed` - *A system update is waiting for application*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.UpdateStatus.html RoboccDocs} for further information
*/
export interface UpdateStatus {
  /** Release commit id */
  commit?: string
  /** Current update status */
  status?: UpdateStatusStatus
  /** Current download progress of update (in %) */
  download_progress?: number
  /** A system update is available for this device */
  update_pending?: boolean
  /** A system update is available and ready to be applied */
  update_downloaded?: boolean
  /** A system update is waiting for application */
  update_failed?: boolean
}
/** 
 * **SubscribeResult**
 *
 * Service result data of Subscribe
 * @property `event_code` - *Event code*
 * @property `data` - *Last event's data*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SubscribeResult.html RoboccDocs} for further information
*/
export interface SubscribeResult {
  /** Event code */
  event_code?: number
  /** Last event's data */
  data?: any
}
/** 
 * **FollowMeParams**
 *
 * Parameters of FollowMe OpTypeEnum.service
 * @property `enable` - *Start follow me*
 * @property `direction` - *Direction of person to follow*
 * @property `mode` - *Follow mode*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.FollowMeParams.html RoboccDocs} for further information
*/
export interface FollowMeParams {
  /** Start follow me */
  enable: boolean
  /** Direction of person to follow */
  direction?: Direction
  /** Follow mode */
  mode?: FollowMode
}
/** 
 * **AuthUserResult**
 *
 * Service result data of AuthUser
 * @property `id_user` - *User ID*
 * @property `is_api_admin` - *Is API admin*
 * @property `need_change_password` - *User must change password*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.AuthUserResult.html RoboccDocs} for further information
*/
export interface AuthUserResult {
  /** User ID */
  id_user: number
  /** Is API admin */
  is_api_admin: boolean
  /** User must change password */
  need_change_password: boolean
}
/** 
 * **LoginParams**
 *
 * Parameters of Login OpTypeEnum.service
 * @property `login` - *Login*
 * @property `pwd` - *Password*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.LoginParams.html RoboccDocs} for further information
*/
export interface LoginParams {
  /** Login */
  login: string
  /** Password */
  pwd: string
}
/** 
 * **LoginResult**
 *
 * Service result data of Login
 * @property `id` - *User id*
 * @property `api_key` - *API Key*
 * @property `need_change_password` - *User must change password*
 * @property `is_api_admin` - *Is admin*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.LoginResult.html RoboccDocs} for further information
*/
export interface LoginResult {
  /** User id */
  id: number
  /** API Key */
  api_key: string
  /** User must change password */
  need_change_password: boolean
  /** Is admin */
  is_api_admin: boolean
}
/** 
 * **ImportSiteResult**
 *
 * Service result data of ImportSite
 * @property `id_site` - *Id site*
 * @property `warnings` - *Warnings*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ImportSiteResult.html RoboccDocs} for further information
*/
export interface ImportSiteResult {
  /** Id site */
  id_site: number
  /** Warnings */
  warnings?: string[]
}
/** 
 * **ImportSoundsConfigResult**
 *
 * Service result data of ImportSoundsConfig
 * @property `warnings` - *Warnings*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ImportSoundsConfigResult.html RoboccDocs} for further information
*/
export interface ImportSoundsConfigResult {
  /** Warnings */
  warnings?: string[]
}
/** 
 * **ExportSiteParams2**
 *
 * Option 2 for parameter ExportSiteParams
 * @property `id_site` - *Id site*
 * @property `export_sounds` - *Export sound*
 * @property `add_sounds` - *Array of sounds to add to export*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ExportSiteParams2.html RoboccDocs} for further information
*/
export interface ExportSiteParams2 {
  /** Id site */
  id_site: number
  /** Export sound */
  export_sounds?: boolean
  /** Array of sounds to add to export */
  add_sounds?: string[]
}
/** 
 * **ExportSitesParams1 item**
 *
 * Single item of `ExportSitesParams1`
 * @property `id_site` - *Id site*
 * @property `maps` - *Id map list*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ExportSitesParams1Item.html RoboccDocs} for further information
*/
export interface ExportSitesParams1Item {
  /** Id site */
  id_site: number
  /** Id map list */
  maps?: number[]
}
/** 
 * **ExportSitesParams2Sites item**
 *
 * Single item of `ExportSitesParams2Sites`
 * @property `id_site` - *Id site*
 * @property `maps` - *Id map list*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ExportSitesParams2SitesItem.html RoboccDocs} for further information
*/
export interface ExportSitesParams2SitesItem {
  /** Id site */
  id_site: number
  /** Id map list */
  maps?: number[]
}
/** 
 * **ExportSitesParams2**
 *
 * Option 2 for parameter ExportSitesParams
 * @property `sites`
 * @property `export_sounds` - *Export sound*
 * @property `add_sounds` - *Array of sounds to add to export*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ExportSitesParams2.html RoboccDocs} for further information
*/
export interface ExportSitesParams2 {
  /**  */
  sites?: ExportSitesParams2SitesItem[]
  /** Export sound */
  export_sounds?: boolean
  /** Array of sounds to add to export */
  add_sounds?: string[]
}
/** 
 * **ExportSitesResult item**
 *
 * Single item of `ExportSitesResult`
 * @property `id_site` - *Id site*
 * @property `file` - *File content*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ExportSitesResultItem.html RoboccDocs} for further information
*/
export interface ExportSitesResultItem {
  /** Id site */
  id_site: number
  /** File content */
  file: string
}
/** 
 * **UpdateChargingStationConfigParams**
 *
 * Parameters of UpdateChargingStationConfig OpTypeEnum.service
 * @property `charging_station` - *Charging station to update*
 * @property `distance_approach` - *Distance between marker and approach pose*
 * @property `distance_undock` - *Distance between docked pose and undocked pose*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.UpdateChargingStationConfigParams.html RoboccDocs} for further information
*/
export interface UpdateChargingStationConfigParams {
  /** Charging station to update */
  charging_station: ChargingStation
  /** Distance between marker and approach pose */
  distance_approach: number
  /** Distance between docked pose and undocked pose */
  distance_undock: number
}
/** 
 * **UpdateDockedPoseConfigParams**
 *
 * Parameters of UpdateDockedPoseConfig OpTypeEnum.service
 * @property `docked_pose` - *Docked pose to update*
 * @property `distance_approach` - *Distance between marker and approach pose*
 * @property `distance_undock` - *Distance between docked pose and undocked pose*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.UpdateDockedPoseConfigParams.html RoboccDocs} for further information
*/
export interface UpdateDockedPoseConfigParams {
  /** Docked pose to update */
  docked_pose: DockedPose
  /** Distance between marker and approach pose */
  distance_approach: number
  /** Distance between docked pose and undocked pose */
  distance_undock: number
}
/** 
 * **SetUserParams**
 *
 * Parameters of SetUser OpTypeEnum.service
 * @property `id` - *id*
 * @property `login` - *Login*
 * @property `password` - *Password (Leave empty or not send to not modify it)*
 * @property `is_api_admin` - *Is admin, can only set by admin*
 * @property `active` - *Active*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetUserParams.html RoboccDocs} for further information
*/
export interface SetUserParams {
  /** id */
  id: number
  /** Login */
  login: string
  /** Password (Leave empty or not send to not modify it) */
  password?: string
  /** Is admin, can only set by admin */
  is_api_admin?: boolean
  /** Active */
  active: boolean
}
/** 
 * **SetObtCbtParams**
 *
 * Parameters of SetObtCbt OpTypeEnum.service
 * @property `OBT` - *Operationnal battery threshold*
 * @property `CBT` - *Critical battery threshold*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetObtCbtParams.html RoboccDocs} for further information
*/
export interface SetObtCbtParams {
  /** Operationnal battery threshold */
  OBT: number
  /** Critical battery threshold */
  CBT: number
}
/** 
 * **SetChargingStationResult**
 *
 * Service result data of SetChargingStation
 * @property `id` - *Id charging station*
 * @property `uuid` - *Uuid charging station*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetChargingStationResult.html RoboccDocs} for further information
*/
export interface SetChargingStationResult {
  /** Id charging station */
  id: number
  /** Uuid charging station */
  uuid: number
}
/** 
 * **SetSavedPoseResult**
 *
 * Service result data of SetSavedPose
 * @property `id` - *Id saved pose*
 * @property `uuid` - *Uuid saved pose*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetSavedPoseResult.html RoboccDocs} for further information
*/
export interface SetSavedPoseResult {
  /** Id saved pose */
  id: number
  /** Uuid saved pose */
  uuid: number
}
/** 
 * **SetDockedPoseResult**
 *
 * Service result data of SetDockedPose
 * @property `id` - *Id docked pose*
 * @property `uuid` - *Uuid docked pose*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetDockedPoseResult.html RoboccDocs} for further information
*/
export interface SetDockedPoseResult {
  /** Id docked pose */
  id: number
  /** Uuid docked pose */
  uuid: number
}
/** 
 * **SetForbiddenAreaResult**
 *
 * Service result data of SetForbiddenArea
 * @property `id` - *Id forbidden area*
 * @property `uuid` - *Uuid forbidden area*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetForbiddenAreaResult.html RoboccDocs} for further information
*/
export interface SetForbiddenAreaResult {
  /** Id forbidden area */
  id: number
  /** Uuid forbidden area */
  uuid: number
}
/** 
 * **SetCustomAreaResult**
 *
 * Service result data of SetCustomArea
 * @property `id` - *Id custom area*
 * @property `uuid` - *Uuid custom area*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetCustomAreaResult.html RoboccDocs} for further information
*/
export interface SetCustomAreaResult {
  /** Id custom area */
  id: number
  /** Uuid custom area */
  uuid: number
}
/** 
 * **CheckPoseParams**
 *
 * Parameters of CheckPose OpTypeEnum.service
 * @property `x` - *Destination pose X on map*
 * @property `y` - *Destination pose Y on map*
 * @property `t` - *Orientation on map*
 * @property `with_dynamic_obstacles` - *Whether to check pose using dynamic obstacles currently detected by vehicle optional and false by default*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.CheckPoseParams.html RoboccDocs} for further information
*/
export interface CheckPoseParams {
  /** Destination pose X on map */
  x: number
  /** Destination pose Y on map */
  y: number
  /** Orientation on map */
  t: number
  /** Whether to check pose using dynamic obstacles currently detected by vehicle optional and false by default */
  with_dynamic_obstacles?: boolean
}
/** 
 * **Check3dBoxParamsPoint**
 *
 * `point` parameter of a `Check3dBoxParams` type
 * @property `x` - *Center box point X on map*
 * @property `y` - *Center box point Y on map*
 * @property `z` - *Center box point Z on map*
 * @property `t` - *Orientation of the box in the map*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Check3dBoxParamsPoint.html RoboccDocs} for further information
*/
export interface Check3dBoxParamsPoint {
  /** Center box point X on map */
  x: number
  /** Center box point Y on map */
  y: number
  /** Center box point Z on map */
  z: number
  /** Orientation of the box in the map */
  t: number
}
/** 
 * **Check3dBoxParamsMarker**
 *
 * `marker` parameter of a `Check3dBoxParams` type
 * @property `pose` - *Marker pose in map*
 * @property `id` - *Marker ID*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Check3dBoxParamsMarker.html RoboccDocs} for further information
*/
export interface Check3dBoxParamsMarker {
  /** Marker pose in map */
  pose: Pose
  /** Marker ID */
  id: number
}
/** 
 * **Check3dBoxParams**
 *
 * Parameters of Check3dBox OpTypeEnum.service
 * @property `point` - *Center point of the box*
 * @property `width` - *Box's width*
 * @property `length` - *Box's length*
 * @property `height` - *Box's height*
 * @property `poses_reference`
 * @property `marker`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Check3dBoxParams.html RoboccDocs} for further information
*/
export interface Check3dBoxParams {
  /** Center point of the box */
  point: Check3dBoxParamsPoint
  /** Box's width */
  width: number
  /** Box's length */
  length: number
  /** Box's height */
  height: number
  /**  */
  poses_reference?: PoseReference
  /**  */
  marker?: Check3dBoxParamsMarker
}
/** 
 * **Check3dBoxActionParamsPoint**
 *
 * `point` parameter of a `Check3dBoxActionParams` type
 * @property `x` - *Center box point X on map*
 * @property `y` - *Center box point Y on map*
 * @property `z` - *Center box point Z on map*
 * @property `t` - *Orientation of the box in the map*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Check3dBoxActionParamsPoint.html RoboccDocs} for further information
*/
export interface Check3dBoxActionParamsPoint {
  /** Center box point X on map */
  x: number
  /** Center box point Y on map */
  y: number
  /** Center box point Z on map */
  z: number
  /** Orientation of the box in the map */
  t: number
}
/** 
 * **Check3dBoxActionParamsMarker**
 *
 * `marker` parameter of a `Check3dBoxActionParams` type
 * @property `pose` - *Marker pose in map*
 * @property `id` - *Marker ID*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Check3dBoxActionParamsMarker.html RoboccDocs} for further information
*/
export interface Check3dBoxActionParamsMarker {
  /** Marker pose in map */
  pose: Pose
  /** Marker ID */
  id: number
}
/** 
 * **Check3dBoxActionParams**
 *
 * Parameters of Check3dBoxAction OpTypeEnum.action
 * @property `point` - *Center point of the box*
 * @property `width` - *Box's width*
 * @property `length` - *Box's length*
 * @property `height` - *Box's height*
 * @property `poses_reference`
 * @property `marker`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Check3dBoxActionParams.html RoboccDocs} for further information
*/
export interface Check3dBoxActionParams {
  /** Center point of the box */
  point: Check3dBoxActionParamsPoint
  /** Box's width */
  width: number
  /** Box's length */
  length: number
  /** Box's height */
  height: number
  /**  */
  poses_reference?: PoseReference
  /**  */
  marker?: Check3dBoxActionParamsMarker
}
/** 
 * **Check3dBoxActionFeedback**
 *
 * Feedback data of Check3dBoxAction
 * @property `current_step` - *Current step*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.Check3dBoxActionFeedback.html RoboccDocs} for further information
*/
export interface Check3dBoxActionFeedback {
  /** Current step */
  current_step: string
}
/** 
 * **SimAddShelfParams**
 *
 * Parameters of SimAddShelf OpTypeEnum.service
 * @property `pose` - *Shelf pose*
 * @property `length` - *Shelf length*
 * @property `width` - *Shelf width*
 * @property `height` - *Shelf height*
 * @property `feet_height` - *Feet height*
 * @property `feet_size` - *Feet size*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SimAddShelfParams.html RoboccDocs} for further information
*/
export interface SimAddShelfParams {
  /** Shelf pose */
  pose: Pose
  /** Shelf length */
  length?: number
  /** Shelf width */
  width?: number
  /** Shelf height */
  height?: number
  /** Feet height */
  feet_height?: number
  /** Feet size */
  feet_size?: number
}
/** 
 * **SetCustomLedParams**
 *
 * Parameters of SetCustomLed OpTypeEnum.service
 * @property `animation` - *Led anim*
 * @property `color` - *Hex color*
 * @property `duration` - *Duration in seconds, if set to 0, LED command will be applied continuously*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetCustomLedParams.html RoboccDocs} for further information
*/
export interface SetCustomLedParams {
  /** Led anim */
  animation: LedAnim
  /** Hex color */
  color?: string
  /** Duration in seconds, if set to 0, LED command will be applied continuously */
  duration?: number
}
/** 
 * **SetCustomSoundParams**
 *
 * Parameters of SetCustomSound OpTypeEnum.service
 * @property `sample` - *Sound sample*
 * @property `volume` - *Volume*
 * @property `loop_number` - *Number of play of the sound sample*
 * @property `loop_delay` - *Delay between each sound loop, in seconds*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetCustomSoundParams.html RoboccDocs} for further information
*/
export interface SetCustomSoundParams {
  /** Sound sample */
  sample: number | string
  /** Volume */
  volume?: number
  /** Number of play of the sound sample */
  loop_number?: SoundLoopNumber
  /** Delay between each sound loop, in seconds */
  loop_delay?: number
}
/** 
 * **SimSetDiffDriveStateParams**
 *
 * Parameters of SimSetDiffDriveState OpTypeEnum.service
 * @property `freewheel_operated` - *Freewheel operated*
 * @property `sto` - *STO*
 * @property `brakes` - *Brakes*
 * @property `e_stop_operated` - *E stop operated*
 * @property `error_motor_left` - *Error on motor left*
 * @property `error_motor_right` - *Error on motor right*
 * @property `error_config` - *Error config*
 * @property `error_hardware` - *Error hardware*
 * @property `error_connection` - *Error connection*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SimSetDiffDriveStateParams.html RoboccDocs} for further information
*/
export interface SimSetDiffDriveStateParams {
  /** Freewheel operated */
  freewheel_operated?: boolean
  /** STO */
  sto?: boolean
  /** Brakes */
  brakes?: boolean
  /** E stop operated */
  e_stop_operated?: boolean
  /** Error on motor left */
  error_motor_left?: boolean
  /** Error on motor right */
  error_motor_right?: boolean
  /** Error config */
  error_config?: boolean
  /** Error hardware */
  error_hardware?: boolean
  /** Error connection */
  error_connection?: boolean
}
/** 
 * **SetModuleParamsParams**
 *
 * Parameters of SetModuleParams OpTypeEnum.service
 * @property `max_speed` - *Module maximum speed in meters / second. Set to -1 to use default value. Otherwise, value must be between 0.2 and 1.0.*
 * @property `height` - *Module maximum height in meters*
 * @property `weight` - *Module maximum weight in kg*
 * @property `footprint` - *Module footprint polygon*
 * @property `width` - *Module maximum width in meters if no footprint set*
 * @property `length` - *Module maximum length in meters if no footprint set*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetModuleParamsParams.html RoboccDocs} for further information
*/
export interface SetModuleParamsParams {
  /** Module maximum speed in meters / second. Set to -1 to use default value. Otherwise, value must be between 0.2 and 1.0. */
  max_speed?: number
  /** Module maximum height in meters */
  height?: number
  /** Module maximum weight in kg */
  weight?: number
  /** Module footprint polygon */
  footprint?: Position[]
  /** Module maximum width in meters if no footprint set */
  width?: number
  /** Module maximum length in meters if no footprint set */
  length?: number
}
/** 
 * **VehToPoseParamsProgressChecker**
 *
 * `progress_checker` parameter of a `VehToPoseParams` type
 * @property `distance` - *Minimum distance the vehicle must travel in the allowed time*
 * @property `rotation` - *Minimum rotation that the vehicle must make in the allowed time*
 * @property `allowed_time` - *Allowed time in seconds*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToPoseParamsProgressChecker.html RoboccDocs} for further information
*/
export interface VehToPoseParamsProgressChecker {
  /** Minimum distance the vehicle must travel in the allowed time */
  distance: number
  /** Minimum rotation that the vehicle must make in the allowed time */
  rotation: number
  /** Allowed time in seconds */
  allowed_time: number
}
/** 
 * **VehToPoseParams**
 *
 * Parameters of VehToPose OpTypeEnum.action
 * @property `goal` - *Destination*
 * @property `direction` - *Default NO_DIRECTION*
 * @property `progress_checker` - *Check that the vehicle moves a minimum for a given time (distance or rotation), fails otherwise.*
 * @property `override_battery_threshold` - *Override battery safety*
 * @property `ignore_routes` - *Ignore routes*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToPoseParams.html RoboccDocs} for further information
*/
export interface VehToPoseParams {
  /** Destination */
  goal: Pose
  /** Default NO_DIRECTION */
  direction?: Direction
  /** Check that the vehicle moves a minimum for a given time (distance or rotation), fails otherwise. */
  progress_checker?: VehToPoseParamsProgressChecker
  /** Override battery safety */
  override_battery_threshold?: boolean
  /** Ignore routes */
  ignore_routes?: boolean
}
/** 
 * **VehToPoseFeedback**
 *
 * Feedback data of VehToPose
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @property `current_path` - *Current path on change*
 * @property `distance_remaining` - *Distance remaining*
 * @property `distance_full` - *Length of the current path*
 * @property `estimated_time_remaining` - *Estimated time remaining in seconds*
 * @property `navigation_time` - *Navigation time in seconds*
 * @property `number_of_recoveries` - *Number of recoveries*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToPoseFeedback.html RoboccDocs} for further information
*/
export interface VehToPoseFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: VehToStepCode
  /** Current path on change */
  current_path: Path
  /** Distance remaining */
  distance_remaining: number
  /** Length of the current path */
  distance_full: number
  /** Estimated time remaining in seconds */
  estimated_time_remaining: number
  /** Navigation time in seconds */
  navigation_time: number
  /** Number of recoveries */
  number_of_recoveries: number
}
/** 
 * **VehToChargingStationParams**
 *
 * Parameters of VehToChargingStation OpTypeEnum.action
 * @property `uuid` - *Charging station uuid, -1 for preferred charging station*
 * @property `direction` - *Default FRONT_OR_BACK*
 * @property `override_battery_threshold` - *Override battery safety*
 * @property `ignore_routes` - *Ignore routes*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToChargingStationParams.html RoboccDocs} for further information
*/
export interface VehToChargingStationParams {
  /** Charging station uuid, -1 for preferred charging station */
  uuid: number
  /** Default FRONT_OR_BACK */
  direction?: DirectionStrict
  /** Override battery safety */
  override_battery_threshold?: boolean
  /** Ignore routes */
  ignore_routes?: boolean
}
/** 
 * **VehToChargingStationFeedback**
 *
 * Feedback data of VehToChargingStation
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @property `current_path` - *Current path on change*
 * @property `distance_remaining` - *Distance remaining*
 * @property `distance_full` - *Length of the current path*
 * @property `estimated_time_remaining` - *Estimated time remaining in seconds*
 * @property `navigation_time` - *Navigation time in seconds*
 * @property `number_of_recoveries` - *Number of recoveries*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToChargingStationFeedback.html RoboccDocs} for further information
*/
export interface VehToChargingStationFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: VehToDockedStepCode
  /** Current path on change */
  current_path: Path
  /** Distance remaining */
  distance_remaining: number
  /** Length of the current path */
  distance_full: number
  /** Estimated time remaining in seconds */
  estimated_time_remaining: number
  /** Navigation time in seconds */
  navigation_time: number
  /** Number of recoveries */
  number_of_recoveries: number
}
/** 
 * **VehToChargingStationApproachParams**
 *
 * Parameters of VehToChargingStationApproach OpTypeEnum.action
 * @property `uuid` - *Charging station uuid, -1 for preferred charging station*
 * @property `direction` - *Default FRONT_OR_BACK*
 * @property `override_battery_threshold` - *Override battery safety*
 * @property `ignore_routes` - *Ignore routes*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToChargingStationApproachParams.html RoboccDocs} for further information
*/
export interface VehToChargingStationApproachParams {
  /** Charging station uuid, -1 for preferred charging station */
  uuid: number
  /** Default FRONT_OR_BACK */
  direction?: DirectionStrict
  /** Override battery safety */
  override_battery_threshold?: boolean
  /** Ignore routes */
  ignore_routes?: boolean
}
/** 
 * **VehToChargingStationApproachFeedback**
 *
 * Feedback data of VehToChargingStationApproach
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @property `current_path` - *Current path on change*
 * @property `distance_remaining` - *Distance remaining*
 * @property `distance_full` - *Length of the current path*
 * @property `estimated_time_remaining` - *Estimated time remaining in seconds*
 * @property `navigation_time` - *Navigation time in seconds*
 * @property `number_of_recoveries` - *Number of recoveries*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToChargingStationApproachFeedback.html RoboccDocs} for further information
*/
export interface VehToChargingStationApproachFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: VehToDockedStepCode
  /** Current path on change */
  current_path: Path
  /** Distance remaining */
  distance_remaining: number
  /** Length of the current path */
  distance_full: number
  /** Estimated time remaining in seconds */
  estimated_time_remaining: number
  /** Navigation time in seconds */
  navigation_time: number
  /** Number of recoveries */
  number_of_recoveries: number
}
/** 
 * **VehToDockedPoseParamsShelfParameters**
 *
 * `shelf_parameters` parameter of a `VehToDockedPoseParams` type
 * @property `shelf_width` - *Shelf width*
 * @property `shelf_length` - *Shelf length*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToDockedPoseParamsShelfParameters.html RoboccDocs} for further information
*/
export interface VehToDockedPoseParamsShelfParameters {
  /** Shelf width */
  shelf_width: number
  /** Shelf length */
  shelf_length: number
}
/** 
 * **VehToDockedPoseParams**
 *
 * Parameters of VehToDockedPose OpTypeEnum.action
 * @property `uuid` - *Docked pose uuid*
 * @property `direction` - *Default FRONT_OR_BACK*
 * @property `override_battery_threshold` - *Override battery safety*
 * @property `ignore_routes` - *Ignore routes*
 * @property `shelf_parameters` - *Shelf parameters*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToDockedPoseParams.html RoboccDocs} for further information
*/
export interface VehToDockedPoseParams {
  /** Docked pose uuid */
  uuid: number
  /** Default FRONT_OR_BACK */
  direction?: DirectionStrict
  /** Override battery safety */
  override_battery_threshold?: boolean
  /** Ignore routes */
  ignore_routes?: boolean
  /** Shelf parameters */
  shelf_parameters?: VehToDockedPoseParamsShelfParameters
}
/** 
 * **VehToDockedPoseFeedback**
 *
 * Feedback data of VehToDockedPose
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @property `current_path` - *Current path on change*
 * @property `distance_remaining` - *Distance remaining*
 * @property `distance_full` - *Length of the current path*
 * @property `estimated_time_remaining` - *Estimated time remaining in seconds*
 * @property `navigation_time` - *Navigation time in seconds*
 * @property `number_of_recoveries` - *Number of recoveries*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToDockedPoseFeedback.html RoboccDocs} for further information
*/
export interface VehToDockedPoseFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: VehToDockedStepCode
  /** Current path on change */
  current_path: Path
  /** Distance remaining */
  distance_remaining: number
  /** Length of the current path */
  distance_full: number
  /** Estimated time remaining in seconds */
  estimated_time_remaining: number
  /** Navigation time in seconds */
  navigation_time: number
  /** Number of recoveries */
  number_of_recoveries: number
}
/** 
 * **VehToDockedPoseApproachParams**
 *
 * Parameters of VehToDockedPoseApproach OpTypeEnum.action
 * @property `uuid` - *Docked pose uuid*
 * @property `direction` - *Default FRONT_OR_BACK*
 * @property `override_battery_threshold` - *Override battery safety*
 * @property `ignore_routes` - *Ignore routes*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToDockedPoseApproachParams.html RoboccDocs} for further information
*/
export interface VehToDockedPoseApproachParams {
  /** Docked pose uuid */
  uuid: number
  /** Default FRONT_OR_BACK */
  direction?: DirectionStrict
  /** Override battery safety */
  override_battery_threshold?: boolean
  /** Ignore routes */
  ignore_routes?: boolean
}
/** 
 * **VehToDockedPoseApproachFeedback**
 *
 * Feedback data of VehToDockedPoseApproach
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @property `current_path` - *Current path on change*
 * @property `distance_remaining` - *Distance remaining*
 * @property `distance_full` - *Length of the current path*
 * @property `estimated_time_remaining` - *Estimated time remaining in seconds*
 * @property `navigation_time` - *Navigation time in seconds*
 * @property `number_of_recoveries` - *Number of recoveries*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToDockedPoseApproachFeedback.html RoboccDocs} for further information
*/
export interface VehToDockedPoseApproachFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: VehToDockedStepCode
  /** Current path on change */
  current_path: Path
  /** Distance remaining */
  distance_remaining: number
  /** Length of the current path */
  distance_full: number
  /** Estimated time remaining in seconds */
  estimated_time_remaining: number
  /** Navigation time in seconds */
  navigation_time: number
  /** Number of recoveries */
  number_of_recoveries: number
}
/** 
 * **VehToSavedPoseParamsSuccessParams**
 *
 * `success_params` parameter of a `VehToSavedPoseParams` type
 * @property `succeed_only_when_stopped` - *If true, the vehicle will attempt to get as close as possible to its destination. If false, the vehicle will stop as soon as it is close to the destination*
 * @property `xy_goal_tolerance` - *Distance tolerance in meter*
 * @property `yaw_goal_tolerance` - *Angle tolerance in radian*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToSavedPoseParamsSuccessParams.html RoboccDocs} for further information
*/
export interface VehToSavedPoseParamsSuccessParams {
  /** If true, the vehicle will attempt to get as close as possible to its destination. If false, the vehicle will stop as soon as it is close to the destination */
  succeed_only_when_stopped: boolean
  /** Distance tolerance in meter */
  xy_goal_tolerance: number
  /** Angle tolerance in radian */
  yaw_goal_tolerance: number
}
/** 
 * **VehToSavedPoseParams**
 *
 * Parameters of VehToSavedPose OpTypeEnum.action
 * @property `uuid` - *Saved pose uuid*
 * @property `direction` - *Default NO_DIRECTION*
 * @property `override_battery_threshold` - *Override battery safety*
 * @property `ignore_routes` - *Ignore routes*
 * @property `success_params` - *Defined when action succeed*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToSavedPoseParams.html RoboccDocs} for further information
*/
export interface VehToSavedPoseParams {
  /** Saved pose uuid */
  uuid: number
  /** Default NO_DIRECTION */
  direction?: Direction
  /** Override battery safety */
  override_battery_threshold?: boolean
  /** Ignore routes */
  ignore_routes?: boolean
  /** Defined when action succeed */
  success_params?: VehToSavedPoseParamsSuccessParams
}
/** 
 * **VehToSavedPoseFeedback**
 *
 * Feedback data of VehToSavedPose
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @property `current_path` - *Current path on change*
 * @property `distance_remaining` - *Distance remaining*
 * @property `distance_full` - *Length of the current path*
 * @property `estimated_time_remaining` - *Estimated time remaining in seconds*
 * @property `navigation_time` - *Navigation time in seconds*
 * @property `number_of_recoveries` - *Number of recoveries*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToSavedPoseFeedback.html RoboccDocs} for further information
*/
export interface VehToSavedPoseFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: VehToStepCode
  /** Current path on change */
  current_path: Path
  /** Distance remaining */
  distance_remaining: number
  /** Length of the current path */
  distance_full: number
  /** Estimated time remaining in seconds */
  estimated_time_remaining: number
  /** Navigation time in seconds */
  navigation_time: number
  /** Number of recoveries */
  number_of_recoveries: number
}
/** 
 * **VehToSegmentParams**
 *
 * Parameters of VehToSegment OpTypeEnum.action
 * @property `start` - *Start pose*
 * @property `goal` - *Destination pose*
 * @property `poses_reference`
 * @property `direction` - *Default FRONT_OR_BACK*
 * @property `override_battery_threshold` - *Override battery safety*
 * @property `ignore_routes` - *Ignore routes*
 * @property `distance_tolerance` - *Goal checker distance tolerance in meter*
 * @property `angle_tolerance` - *Goal checker angle tolerance in rad*
 * @property `max_vel` - *Max velocity used when executing segment in m/s*
 * @property `timeout` - *Timeout of the segment progress checker in seconds*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToSegmentParams.html RoboccDocs} for further information
*/
export interface VehToSegmentParams {
  /** Start pose */
  start: Position
  /** Destination pose */
  goal: Position
  /**  */
  poses_reference?: PoseReference
  /** Default FRONT_OR_BACK */
  direction?: DirectionStrict
  /** Override battery safety */
  override_battery_threshold?: boolean
  /** Ignore routes */
  ignore_routes?: boolean
  /** Goal checker distance tolerance in meter */
  distance_tolerance?: number
  /** Goal checker angle tolerance in rad */
  angle_tolerance?: number
  /** Max velocity used when executing segment in m/s */
  max_vel?: number
  /** Timeout of the segment progress checker in seconds */
  timeout?: number
}
/** 
 * **VehToSegmentFeedback**
 *
 * Feedback data of VehToSegment
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @property `current_path` - *Current path on change*
 * @property `distance_remaining` - *Distance remaining*
 * @property `distance_full` - *Length of the current path*
 * @property `estimated_time_remaining` - *Estimated time remaining in seconds*
 * @property `navigation_time` - *Navigation time in seconds*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToSegmentFeedback.html RoboccDocs} for further information
*/
export interface VehToSegmentFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: VehToStepCode
  /** Current path on change */
  current_path: Path
  /** Distance remaining */
  distance_remaining: number
  /** Length of the current path */
  distance_full: number
  /** Estimated time remaining in seconds */
  estimated_time_remaining: number
  /** Navigation time in seconds */
  navigation_time: number
}
/** 
 * **SetVehiclePoseParams**
 *
 * Parameters of SetVehiclePose OpTypeEnum.action
 * @property `goal` - *New vehicle pose on map*
 * @property `linear_accuracy` - *Linear accuracy in meters*
 * @property `angular_accuracy` - *Angular accuracy in rad*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetVehiclePoseParams.html RoboccDocs} for further information
*/
export interface SetVehiclePoseParams {
  /** New vehicle pose on map */
  goal: Pose
  /** Linear accuracy in meters */
  linear_accuracy?: number
  /** Angular accuracy in rad */
  angular_accuracy?: number
}
/** 
 * **SetVehiclePoseFeedback**
 *
 * Feedback data of SetVehiclePose
 * @property `current_step` - *Current step*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetVehiclePoseFeedback.html RoboccDocs} for further information
*/
export interface SetVehiclePoseFeedback {
  /** Current step */
  current_step: string
}
/** 
 * **SetMapFeedback**
 *
 * Feedback data of SetMap
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetMapFeedback.html RoboccDocs} for further information
*/
export interface SetMapFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: SetMapFeedbackCurrentStepCode
}
/** 
 * **SetActiveMapFeedback**
 *
 * Feedback data of SetActiveMap
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetActiveMapFeedback.html RoboccDocs} for further information
*/
export interface SetActiveMapFeedback {
  /** Current step */
  current_step?: string
  /**  */
  current_step_code: SetActiveMapFeedbackCurrentStepCode
}
/** 
 * **GetMarkersFeedback**
 *
 * Feedback data of GetMarkers
 * @property `current_step` - *Current step*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.GetMarkersFeedback.html RoboccDocs} for further information
*/
export interface GetMarkersFeedback {
  /** Current step */
  current_step: string
}
/** 
 * **InstallModuleParams**
 *
 * Parameters of InstallModule OpTypeEnum.action
 * @property `api_key` - *API key*
 * @property `crypted_module_file` - *Crypted module file*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.InstallModuleParams.html RoboccDocs} for further information
*/
export interface InstallModuleParams {
  /** API key */
  api_key: string
  /** Crypted module file */
  crypted_module_file: string
}
/** 
 * **InstallModuleFeedback**
 *
 * Feedback data of InstallModule
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.InstallModuleFeedback.html RoboccDocs} for further information
*/
export interface InstallModuleFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: InstallModuleFeedbackCurrentStepCode
}
/** 
 * **DisableModuleFeedback**
 *
 * Feedback data of DisableModule
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.DisableModuleFeedback.html RoboccDocs} for further information
*/
export interface DisableModuleFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: DisableModuleFeedbackCurrentStepCode
}
/** 
 * **RecoveryFeedback**
 *
 * Feedback data of Recovery
 * @property `current_step` - *Current step*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.RecoveryFeedback.html RoboccDocs} for further information
*/
export interface RecoveryFeedback {
  /** Current step */
  current_step: string
}
/** 
 * **ResetDatabaseFeedback**
 *
 * Feedback data of ResetDatabase
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ResetDatabaseFeedback.html RoboccDocs} for further information
*/
export interface ResetDatabaseFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: ResetDatabaseFeedbackCurrentStepCode
}
/** 
 * **GetPathParams**
 *
 * Parameters of GetPath OpTypeEnum.action
 * @property `goal` - *Destination*
 * @property `start` - *Start pose, if not set, use vehicle pose*
 * @property `planner_tolerance` - *Planner distance tolerance*
 * @property `direction` - *Default FRONT*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.GetPathParams.html RoboccDocs} for further information
*/
export interface GetPathParams {
  /** Destination */
  goal: Pose
  /** Start pose, if not set, use vehicle pose */
  start?: Pose
  /** Planner distance tolerance */
  planner_tolerance?: number
  /** Default FRONT */
  direction?: Direction
}
/** 
 * **GetPathResult**
 *
 * Action result data of GetPath
 * @property `path` - *Path*
 * @property `distance` - *Distance*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.GetPathResult.html RoboccDocs} for further information
*/
export interface GetPathResult {
  /** Path */
  path?: Path
  /** Distance */
  distance?: number
}
/** 
 * **GetPathFeedback**
 *
 * Feedback data of GetPath
 * @property `current_step` - *Current step*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.GetPathFeedback.html RoboccDocs} for further information
*/
export interface GetPathFeedback {
  /** Current step */
  current_step: string
}
/** 
 * **MappingStartParams**
 *
 * Parameters of MappingStart OpTypeEnum.action
 * @property `id_site` - *id site to add new map*
 * @property `map_name` - *Name of new map*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MappingStartParams.html RoboccDocs} for further information
*/
export interface MappingStartParams {
  /** id site to add new map */
  id_site: number
  /** Name of new map */
  map_name: string
}
/** 
 * **MappingStartFeedback**
 *
 * Feedback data of MappingStart
 * @property `current_step` - *Current step*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MappingStartFeedback.html RoboccDocs} for further information
*/
export interface MappingStartFeedback {
  /** Current step */
  current_step: string
}
/** 
 * **MappingStopResult**
 *
 * Action result data of MappingStop
 * @property `id_map` - *id of new map*
 * @property `map_not_optimized` - *True if the map final optimization failed*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MappingStopResult.html RoboccDocs} for further information
*/
export interface MappingStopResult {
  /** id of new map */
  id_map?: number
  /** True if the map final optimization failed */
  map_not_optimized?: boolean
}
/** 
 * **MappingStopFeedback**
 *
 * Feedback data of MappingStop
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MappingStopFeedback.html RoboccDocs} for further information
*/
export interface MappingStopFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: MappingStopFeedbackCurrentStepCode
}
/** 
 * **EraseActiveMapParams**
 *
 * Parameters of EraseActiveMap OpTypeEnum.action
 * @property `clear_before` - *Start by clear erase layer*
 * @property `polygons` - *List of polygons*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.EraseActiveMapParams.html RoboccDocs} for further information
*/
export interface EraseActiveMapParams {
  /** Start by clear erase layer */
  clear_before?: boolean
  /** List of polygons */
  polygons?: Position[][][]
}
/** 
 * **EraseActiveMapFeedback**
 *
 * Feedback data of EraseActiveMap
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.EraseActiveMapFeedback.html RoboccDocs} for further information
*/
export interface EraseActiveMapFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: EraseActiveMapFeedbackCurrentStepCode
}
/** 
 * **ReloadMapFeedback**
 *
 * Feedback data of ReloadMap
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ReloadMapFeedback.html RoboccDocs} for further information
*/
export interface ReloadMapFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: ReloadMapFeedbackCurrentStepCode
}
/** 
 * **MergeMapsParams**
 *
 * Parameters of MergeMaps OpTypeEnum.action
 * @property `id_map_with_data` - *ID map of map with data*
 * @property `id_map_to_merge` - *ID map of map to add data*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MergeMapsParams.html RoboccDocs} for further information
*/
export interface MergeMapsParams {
  /** ID map of map with data */
  id_map_with_data: number
  /** ID map of map to add data */
  id_map_to_merge: number
}
/** 
 * **MergeMapsFeedback**
 *
 * Feedback data of MergeMaps
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MergeMapsFeedback.html RoboccDocs} for further information
*/
export interface MergeMapsFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: MergeMapsFeedbackCurrentStepCode
}
/** 
 * **NetworkWanConfigParams**
 *
 * Parameters of NetworkWanConfig OpTypeEnum.action
 * @property `network_type`
 * @property `dhcp` - *Use DHCP*
 * @property `ipv4_address` - *IPv4 address*
 * @property `ipv4_prefix` - *IPv4 prefix*
 * @property `ipv4_gateway` - *IPv4 gateway*
 * @property `dns1` - *DNS 1*
 * @property `dns2` - *DNS 2*
 * @property `wifi_ssid` - *Wifi ssid*
 * @property `wifi_psk` - *Wifi password*
 * @property `wifi_hidden` - *Wifi is hidden*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.NetworkWanConfigParams.html RoboccDocs} for further information
*/
export interface NetworkWanConfigParams {
  /**  */
  network_type: NetworkType
  /** Use DHCP */
  dhcp: boolean
  /** IPv4 address */
  ipv4_address?: string
  /** IPv4 prefix */
  ipv4_prefix?: number
  /** IPv4 gateway */
  ipv4_gateway?: string
  /** DNS 1 */
  dns1?: string
  /** DNS 2 */
  dns2?: string
  /** Wifi ssid */
  wifi_ssid?: string
  /** Wifi password */
  wifi_psk?: string
  /** Wifi is hidden */
  wifi_hidden?: boolean
}
/** 
 * **NetworkRedirectPortParams**
 *
 * Parameters of NetworkRedirectPort OpTypeEnum.service
 * @property `ip` - *Destination IP*
 * @property `src_port` - *Source port*
 * @property `dest_port` - *Destination port*
 * @property `protocol` - *Network protocol*
 * @property `enable` - *Save and use after restart vehicle pose*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.NetworkRedirectPortParams.html RoboccDocs} for further information
*/
export interface NetworkRedirectPortParams {
  /** Destination IP */
  ip: string
  /** Source port */
  src_port: number
  /** Destination port */
  dest_port: number
  /** Network protocol */
  protocol: NetworkProtocol
  /** Save and use after restart vehicle pose */
  enable: boolean
}
/** 
 * **SystemRestartParams**
 *
 * Parameters of SystemRestart OpTypeEnum.service
 * @property `stage`
 * @property `save_pose` - *Save and use after restart vehicle pose*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SystemRestartParams.html RoboccDocs} for further information
*/
export interface SystemRestartParams {
  /**  */
  stage: SystemRestartParamsStage
  /** Save and use after restart vehicle pose */
  save_pose: boolean
}
/** 
 * **GenerateForbiddenAreasParams**
 *
 * Parameters of GenerateForbiddenAreas OpTypeEnum.action
 * @property `confidence` - *Threshold above which an area is classified as forbidden([0-100], higher confidence = fewer forbidden areas)*
 * @property `simplification` - *Simplification value for ai generated forbidden areas ([0-100], higher simplification = fewer vertices)*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.GenerateForbiddenAreasParams.html RoboccDocs} for further information
*/
export interface GenerateForbiddenAreasParams {
  /** Threshold above which an area is classified as forbidden([0-100], higher confidence = fewer forbidden areas) */
  confidence: number
  /** Simplification value for ai generated forbidden areas ([0-100], higher simplification = fewer vertices) */
  simplification: number
}
/** 
 * **GetShelvesParams**
 *
 * Parameters of GetShelves OpTypeEnum.service
 * @property `width` - *Shelf width*
 * @property `length` - *Shelf length*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.GetShelvesParams.html RoboccDocs} for further information
*/
export interface GetShelvesParams {
  /** Shelf width */
  width: number
  /** Shelf length */
  length: number
}
/** 
 * **AddSoundParams**
 *
 * Parameters of AddSound OpTypeEnum.action
 * @property `filename` - *Filename with extension*
 * @property `data` - *Base64 encoded file content*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.AddSoundParams.html RoboccDocs} for further information
*/
export interface AddSoundParams {
  /** Filename with extension */
  filename: string
  /** Base64 encoded file content */
  data: string
}
/** 
 * **AddSoundFeedback**
 *
 * Feedback data of AddSound
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.AddSoundFeedback.html RoboccDocs} for further information
*/
export interface AddSoundFeedback {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: VehToDockedStepCode
}
/** 
 * **AddCallButtonParams**
 *
 * Parameters of AddCallButton OpTypeEnum.service
 * @property `id_button` - *Button LoRa ID*
 * @property `destination` - *Destination*
 * @property `is_virtual` - *Is virtual button*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.AddCallButtonParams.html RoboccDocs} for further information
*/
export interface AddCallButtonParams {
  /** Button LoRa ID */
  id_button: number
  /** Destination */
  destination: MissionConfigDestination
  /** Is virtual button */
  is_virtual: boolean
}
/** 
 * **AddRestockingButtonParams**
 *
 * Parameters of AddRestockingButton OpTypeEnum.service
 * @property `id_button` - *Button LoRa ID*
 * @property `title` - *Title*
 * @property `destination_from` - *First destination*
 * @property `destination_to` - *Last destination*
 * @property `is_virtual` - *Is virtual button*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.AddRestockingButtonParams.html RoboccDocs} for further information
*/
export interface AddRestockingButtonParams {
  /** Button LoRa ID */
  id_button: number
  /** Title */
  title: string
  /** First destination */
  destination_from: MissionConfigDestination
  /** Last destination */
  destination_to: MissionConfigDestination
  /** Is virtual button */
  is_virtual: boolean
}
/** 
 * **AddMultidestinationButtonParams**
 *
 * Parameters of AddMultidestinationButton OpTypeEnum.service
 * @property `id_button` - *Button LoRa ID*
 * @property `destinations` - *Destinations*
 * @property `title` - *Title*
 * @property `end_fixed` - *Last destination is fix*
 * @property `is_virtual` - *Is virtual button*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.AddMultidestinationButtonParams.html RoboccDocs} for further information
*/
export interface AddMultidestinationButtonParams {
  /** Button LoRa ID */
  id_button: number
  /** Destinations */
  destinations: MissionConfigDestination[]
  /** Title */
  title: string
  /** Last destination is fix */
  end_fixed: boolean
  /** Is virtual button */
  is_virtual: boolean
}
/** 
 * **AddOrderedMultidestinationButtonParams**
 *
 * Parameters of AddOrderedMultidestinationButton OpTypeEnum.service
 * @property `id_button` - *Button LoRa ID*
 * @property `destinations` - *Destinations*
 * @property `title` - *Title*
 * @property `is_virtual` - *Is virtual button*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.AddOrderedMultidestinationButtonParams.html RoboccDocs} for further information
*/
export interface AddOrderedMultidestinationButtonParams {
  /** Button LoRa ID */
  id_button: number
  /** Destinations */
  destinations: MissionConfigDestination[]
  /** Title */
  title: string
  /** Is virtual button */
  is_virtual: boolean
}
/** 
 * **AddVehParams**
 *
 * Parameters of AddVeh OpTypeEnum.service
 * @property `id_module` - *Veh LoRa ID*
 * @property `module_type` - *Module type*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.AddVehParams.html RoboccDocs} for further information
*/
export interface AddVehParams {
  /** Veh LoRa ID */
  id_module: number
  /** Module type */
  module_type: ModuleType
}
/** 
 * **AddPortRedirectionParams**
 *
 * Parameters of AddPortRedirection OpTypeEnum.service
 * @property `enabled` - *Enable redirection*
 * @property `port_src` - *Source port*
 * @property `port_dest` - *Destination port*
 * @property `ip` - *IP*
 * @property `protocol` - *Protocol*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.AddPortRedirectionParams.html RoboccDocs} for further information
*/
export interface AddPortRedirectionParams {
  /** Enable redirection */
  enabled: boolean
  /** Source port */
  port_src: number
  /** Destination port */
  port_dest: number
  /** IP */
  ip: string
  /** Protocol */
  protocol: NetworkProtocol
}
/** 
 * **UpdatePortRedirectionParams**
 *
 * Parameters of UpdatePortRedirection OpTypeEnum.service
 * @property `port_src_to_update` - *Source port to update*
 * @property `protocol_to_update` - *Protocol to update*
 * @property `enabled` - *Enable redirection*
 * @property `port_src` - *Source port*
 * @property `port_dest` - *Destination port*
 * @property `ip` - *IP*
 * @property `protocol` - *Protocol*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.UpdatePortRedirectionParams.html RoboccDocs} for further information
*/
export interface UpdatePortRedirectionParams {
  /** Source port to update */
  port_src_to_update: number
  /** Protocol to update */
  protocol_to_update: NetworkProtocol
  /** Enable redirection */
  enabled: boolean
  /** Source port */
  port_src: number
  /** Destination port */
  port_dest: number
  /** IP */
  ip: string
  /** Protocol */
  protocol: NetworkProtocol
}
/** 
 * **DeletePortRedirectionParams**
 *
 * Parameters of DeletePortRedirection OpTypeEnum.service
 * @property `port_src` - *Source port to delete*
 * @property `protocol` - *Protocol to delete*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.DeletePortRedirectionParams.html RoboccDocs} for further information
*/
export interface DeletePortRedirectionParams {
  /** Source port to delete */
  port_src: number
  /** Protocol to delete */
  protocol: NetworkProtocol
}
/** 
 * **ControllerLoraSetContactConfigParams**
 *
 * Parameters of ControllerLoraSetContactConfig OpTypeEnum.service
 * @property `id_controller` - *Controller id*
 * @property `index_contact` - *Contact index*
 * @property `config` - *Contact configuration*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ControllerLoraSetContactConfigParams.html RoboccDocs} for further information
*/
export interface ControllerLoraSetContactConfigParams {
  /** Controller id */
  id_controller: number
  /** Contact index */
  index_contact: number
  /** Contact configuration */
  config: ControllerLoraContactConfig
}
/** 
 * **NextStepMissionWithMessageParams**
 *
 * Parameters of NextStepMissionWithMessage OpTypeEnum.service
 * @property `uuid` - *Uuid of next step*
 * @property `message` - *Message to display*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.NextStepMissionWithMessageParams.html RoboccDocs} for further information
*/
export interface NextStepMissionWithMessageParams {
  /** Uuid of next step */
  uuid: number
  /** Message to display */
  message: string
}
/** 
 * **SetMultidestinationParams**
 *
 * Parameters of SetMultidestination OpTypeEnum.service
 * @property `uuids` - *Uuid of steps*
 * @property `ordered` - *Ordered list*
 * @property `end_fixed` - *Last step is fix*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetMultidestinationParams.html RoboccDocs} for further information
*/
export interface SetMultidestinationParams {
  /** Uuid of steps */
  uuids: number[]
  /** Ordered list */
  ordered: boolean
  /** Last step is fix */
  end_fixed: boolean
}
/** 
 * **SetMultidestinationWithMessagesParamsUuids item**
 *
 * Single item of `SetMultidestinationWithMessagesParamsUuids`
 * @property `uuid` - *Uuid of step*
 * @property `message` - *Message to display*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetMultidestinationWithMessagesParamsUuidsItem.html RoboccDocs} for further information
*/
export interface SetMultidestinationWithMessagesParamsUuidsItem {
  /** Uuid of step */
  uuid: number
  /** Message to display */
  message: string
}
/** 
 * **SetMultidestinationWithMessagesParams**
 *
 * Parameters of SetMultidestinationWithMessages OpTypeEnum.service
 * @property `uuids` - *Uuid of steps*
 * @property `ordered` - *Ordered list*
 * @property `end_fixed` - *Last step is fix*
 * @property `message` - *Global message*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SetMultidestinationWithMessagesParams.html RoboccDocs} for further information
*/
export interface SetMultidestinationWithMessagesParams {
  /** Uuid of steps */
  uuids: SetMultidestinationWithMessagesParamsUuidsItem[]
  /** Ordered list */
  ordered: boolean
  /** Last step is fix */
  end_fixed: boolean
  /** Global message */
  message: string
}
/** 
 * **GetStatsParams**
 *
 * Parameters of GetStats OpTypeEnum.service
 * @property `uuid_map` - *Map uuid*
 * @property `from` - *From date in timestamp*
 * @property `to` - *To date in timestamp*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.GetStatsParams.html RoboccDocs} for further information
*/
export interface GetStatsParams {
  /** Map uuid */
  uuid_map: number
  /** From date in timestamp */
  from: number
  /** To date in timestamp */
  to: number
}
/** 
 * **GetLightStatsParams**
 *
 * Parameters of GetLightStats OpTypeEnum.service
 * @property `from` - *Start time*
 * @property `to` - *End time*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.GetLightStatsParams.html RoboccDocs} for further information
*/
export interface GetLightStatsParams {
  /** Start time */
  from: number
  /** End time */
  to: number
}
/** 
 * **ExportStatsParams**
 *
 * Parameters of ExportStats OpTypeEnum.service
 * @property `uuid_map` - *Map uuid*
 * @property `from` - *Start time*
 * @property `to` - *End time*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ExportStatsParams.html RoboccDocs} for further information
*/
export interface ExportStatsParams {
  /** Map uuid */
  uuid_map: number
  /** Start time */
  from?: number
  /** End time */
  to?: number
}
/** 
 * **GetVehsTimelineParams**
 *
 * Parameters of GetVehsTimeline OpTypeEnum.service
 * @property `ids_module` - *Destination Uuid*
 * @property `from` - *Start time*
 * @property `to` - *End time*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.GetVehsTimelineParams.html RoboccDocs} for further information
*/
export interface GetVehsTimelineParams {
  /** Destination Uuid */
  ids_module: number[]
  /** Start time */
  from: number
  /** End time */
  to: number
}
/** 
 * **AddRocUserParams**
 *
 * Parameters of AddRocUser OpTypeEnum.service
 * @property `login` - *Login*
 * @property `password` - *Password*
 * @property `is_admin` - *Is admin*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.AddRocUserParams.html RoboccDocs} for further information
*/
export interface AddRocUserParams {
  /** Login */
  login: string
  /** Password */
  password: string
  /** Is admin */
  is_admin: boolean
}
/** 
 * **UpdateRocUserParams**
 *
 * Parameters of UpdateRocUser OpTypeEnum.service
 * @property `id_user` - *ID User*
 * @property `login` - *Login*
 * @property `password` - *Password*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.UpdateRocUserParams.html RoboccDocs} for further information
*/
export interface UpdateRocUserParams {
  /** ID User */
  id_user: number
  /** Login */
  login: string
  /** Password */
  password: string
}
/** 
 * **CreateMissionParams**
 *
 * Parameters of CreateMission OpTypeEnum.service
 * @property `mission` - *Mission details*
 * @property `modules` - *Modules id LoRa restrictions*
 * @property `specific_data` - *Modules id LoRa restrictions*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.CreateMissionParams.html RoboccDocs} for further information
*/
export interface CreateMissionParams {
  /** Mission details */
  mission: MissionConfig
  /** Modules id LoRa restrictions */
  modules?: number[]
  /** Modules id LoRa restrictions */
  specific_data?: number
}
/** 
 * **ExtendMissionParams**
 *
 * Parameters of ExtendMission OpTypeEnum.service
 * @property `id_mission` - *Mission ID*
 * @property `next_steps` - *Mission details*
 * @property `auto_release` - *Auto release the robot to start move immediatly*
 * @property `specific_data` - *Specific data*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.ExtendMissionParams.html RoboccDocs} for further information
*/
export interface ExtendMissionParams {
  /** Mission ID */
  id_mission: number
  /** Mission details */
  next_steps: MissionConfig
  /** Auto release the robot to start move immediatly */
  auto_release?: boolean
  /** Specific data */
  specific_data?: number
}
/** 
 * **StartButtonMissionParams**
 *
 * Parameters of StartButtonMission OpTypeEnum.service
 * @property `id_button` - *Button ID*
 * @property `modules` - *Modules id LoRa restrictions*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.StartButtonMissionParams.html RoboccDocs} for further information
*/
export interface StartButtonMissionParams {
  /** Button ID */
  id_button: number
  /** Modules id LoRa restrictions */
  modules?: number[]
}
/** 
 * **FollowMeStatus event data**
 *
 * Data sent along with the event FollowMeStatus
 * @property `status`
 * @property `mode`
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.FollowMeStatusEventData.html RoboccDocs} for further information
*/
export interface FollowMeStatusEventData {
  /**  */
  status?: FollowMeStatus
  /**  */
  mode?: FollowMode
}
/** 
 * **SoundCommand event data**
 *
 * Data sent along with the event SoundCommand
 * @property `sample` - *Sound sample*
 * @property `volume` - *Volume*
 * @property `loop_number` - *Number of play of the sound sample*
 * @property `loop_delay` - *Delay between each sound loop, in seconds*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SoundCommandEventData.html RoboccDocs} for further information
*/
export interface SoundCommandEventData {
  /** Sound sample */
  sample?: string
  /** Volume */
  volume?: number
  /** Number of play of the sound sample */
  loop_number?: SoundLoopNumber
  /** Delay between each sound loop, in seconds */
  loop_delay?: number
}
/** 
 * **VehicleDirection event data**
 *
 * Data sent along with the event VehicleDirection
 * @property `move_front` - *Move front*
 * @property `move_back` - *Move back*
 * @property `move_left` - *Move left*
 * @property `move_right` - *Move right*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehicleDirectionEventData.html RoboccDocs} for further information
*/
export interface VehicleDirectionEventData {
  /** Move front */
  move_front: boolean
  /** Move back */
  move_back: boolean
  /** Move left */
  move_left: boolean
  /** Move right */
  move_right: boolean
}
/** 
 * **MappingError event data**
 *
 * Data sent along with the event MappingError
 * @property `outcome` - *Outcome*
 * @property `message` - *Message*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.MappingErrorEventData.html RoboccDocs} for further information
*/
export interface MappingErrorEventData {
  /** Outcome */
  outcome?: MappingErrorEventDataOutcome
  /** Message */
  message?: string
}
/** 
 * **SafetyDiagnostic event data**
 *
 * Data sent along with the event SafetyDiagnostic
 * @property `diagnostic_error` - *Diagnostic error*
 * @property `diagnostic_critical_level` - *Diagnostic critical level*
 * @property `error_array` - *Erros*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.SafetyDiagnosticEventData.html RoboccDocs} for further information
*/
export interface SafetyDiagnosticEventData {
  /** Diagnostic error */
  diagnostic_error?: boolean
  /** Diagnostic critical level */
  diagnostic_critical_level?: number
  /** Erros */
  error_array?: DiagnosticError[]
}
/** 
 * **Velocity event data**
 *
 * Data sent along with the event Velocity
 * @property `linear` - *Linear speed*
 * @property `angular` - *Angular speed*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VelocityEventData.html RoboccDocs} for further information
*/
export interface VelocityEventData {
  /** Linear speed */
  linear: number
  /** Angular speed */
  angular: number
}
/** 
 * **VehToFeedback event data**
 *
 * Data sent along with the event VehToFeedback
 * @property `current_step` - *Current step*
 * @property `current_step_code`
 * @property `current_path` - *Current path on change*
 * @property `distance_remaining` - *Distance remaining*
 * @property `distance_full` - *Length of the current path*
 * @property `estimated_time_remaining` - *Estimated time remaining in seconds*
 * @property `navigation_time` - *Navigation time in seconds*
 * @property `number_of_recoveries` - *Number of recoveries*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.VehToFeedbackEventData.html RoboccDocs} for further information
*/
export interface VehToFeedbackEventData {
  /** Current step */
  current_step: string
  /**  */
  current_step_code: VehToDockedStepCode
  /** Current path on change */
  current_path: Path
  /** Distance remaining */
  distance_remaining: number
  /** Length of the current path */
  distance_full: number
  /** Estimated time remaining in seconds */
  estimated_time_remaining: number
  /** Navigation time in seconds */
  navigation_time: number
  /** Number of recoveries */
  number_of_recoveries: number
}
/** 
 * **UpdateStatus event data**
 *
 * Data sent along with the event UpdateStatus
 * @property `commit` - *Release commit id*
 * @property `status` - *Current update status*
 * @property `download_progress` - *Current download progress of update (in %)*
 * @property `update_pending` - *A system update is available for this device*
 * @property `update_downloaded` - *A system update is available and ready to be applied*
 * @property `update_failed` - *A system update is waiting for application*
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/interfaces/types.UpdateStatusEventData.html RoboccDocs} for further information
*/
export interface UpdateStatusEventData {
  /** Release commit id */
  commit?: string
  /** Current update status */
  status?: UpdateStatusEventDataStatus
  /** Current download progress of update (in %) */
  download_progress?: number
  /** A system update is available for this device */
  update_pending?: boolean
  /** A system update is available and ready to be applied */
  update_downloaded?: boolean
  /** A system update is waiting for application */
  update_failed?: boolean
}

/* Custom types */
/** 
 * **Path**
 *
 * A path, i.e. of a list of pose ⤴ 
*/
export type Path = Pose[];
/** 
 * **Move sequence**
 *
 * Array of move step, used to describe how a vehicle can undock from a docked pose or charging station 
*/
export type MoveSequence = MoveStep[];
/** 
 * **Autopilot sequence**
 *
 * Array of autopilot step that describe a mission to execute automatically in loop 
*/
export type AutopilotSequence = AutopilotStep[];
/** 
 * **Enum sound loop number**
 *
 * List of presets for number of play of the sound sample 🔉 
*/
export type SoundLoopNumber = -1 | 0 | number;
/** 
 * **Operating hours**
 *
 * Operating hours 
*/
export type OperatingHours = SlotHours[][];

/* Enums */
/** 
 * **Network protocol**
 *
 * List network protocol
 * @member `UDP` - UDP
 * @member `TCP` - TCP
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.NetworkProtocol.html RoboccDocs} for further information
*/
export enum NetworkProtocol {
  /** UDP */
  UDP = 0,
  /** TCP */
  TCP = 1,
}
/** 
 * **MoveStepMoveType**
 *
 * `move_type` parameter of a `MoveStep` type
 * @member `LINEAR` - Linear distance in meters
 * @member `ANGULAR` - Angular distance in radians
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.MoveStepMoveType.html RoboccDocs} for further information
*/
export enum MoveStepMoveType {
  /** Linear distance in meters */
  LINEAR = 1,
  /** Angular distance in radians */
  ANGULAR = 2,
}
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
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.DiagnosticElementType.html RoboccDocs} for further information
*/
export enum DiagnosticElementType {
  /** Unknown element type */
  UNKNOWN_TYPE = 0,
  /** Motor element */
  MOTOR_TYPE = 1,
  /** Motor controller element */
  DIFF_DRIVE_MOTOR_CONTROLLER_TYPE = 2,
  /** LiDAR element */
  LIDAR_TYPE = 3,
  /** 3D camera element */
  STEREO_CAMERA_TYPE = 4,
  /** Sonar element */
  US_SENSOR_TYPE = 5,
  /** Battery element */
  BATTERY_TYPE = 6,
  /** Software ROS node */
  ROS_NODE_TYPE = 7,
}
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
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.DiagnosticElementError.html RoboccDocs} for further information
*/
export enum DiagnosticElementError {
  /** Unknown error on element */
  UNKNOWN_ERROR = 0,
  /** No error on element */
  NO_ERROR = 1,
  /** Data received is invalid */
  INVALID_DATA_ERROR = 2,
  /** Frequency error, no data received or abnormal frequency */
  FREQUENCY_ERROR = 3,
  /** Hardware error on element */
  HARDWARE_ERROR = 4,
  /** Connection error on element, element might be disconnected */
  CONNECTION_ERROR = 5,
  /** Node crash error on element can occur only on SOFTWARE_MODULE element */
  NODE_CRASH_ERROR = 6,
  /** Configuration is not correctly applied on some elements */
  UNAPPLIED_CONFIG_ERROR = 7,
}
/** 
 * **Enum diagnostic element critical level**
 *
 * List all vehicle hardware element error levels 🛠
 * @member `UNKNOWN_CRITICALITY` - Unknown criticality
 * @member `NOT_CRITICAL` - Error is not critical
 * @member `WARN_CRITICAL` - Error should be seen as warning
 * @member `ERROR_CRITICAL` - Error should be seen as critical
 * @member `FATAL_CRITICAL` - Error should be seen as fatal
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.DiagnosticCriticalLevel.html RoboccDocs} for further information
*/
export enum DiagnosticCriticalLevel {
  /** Unknown criticality */
  UNKNOWN_CRITICALITY = 0,
  /** Error is not critical */
  NOT_CRITICAL = 1,
  /** Error should be seen as warning */
  WARN_CRITICAL = 2,
  /** Error should be seen as critical */
  ERROR_CRITICAL = 3,
  /** Error should be seen as fatal */
  FATAL_CRITICAL = 4,
}
/** 
 * **AutopilotStepMoveParamsTargetType**
 *
 * `target_type` parameter of a `AutopilotStepMoveParams` type
 * @member `CHARGING_STATION` - Step move is aiming a charging station element
 * @member `SAVED_POSE` - Step move is aiming a saved pose element
 * @member `DOCKED_POSE` - Step move is aiming a docked pose element
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.AutopilotStepMoveParamsTargetType.html RoboccDocs} for further information
*/
export enum AutopilotStepMoveParamsTargetType {
  /** Step move is aiming a charging station element */
  CHARGING_STATION = 0,
  /** Step move is aiming a saved pose element */
  SAVED_POSE = 1,
  /** Step move is aiming a docked pose element */
  DOCKED_POSE = 2,
}
/** 
 * **AutopilotStepMoveParamsOnError**
 *
 * `on_error` parameter of a `AutopilotStepMoveParams` type
 * @member `NEXT_STEP` - On error, proceed next step
 * @member `RETRY` - On error, retry
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.AutopilotStepMoveParamsOnError.html RoboccDocs} for further information
*/
export enum AutopilotStepMoveParamsOnError {
  /** On error, proceed next step */
  NEXT_STEP = 0,
  /** On error, retry */
  RETRY = 1,
}
/** 
 * **Enum autopilot step type**
 *
 * List all autopilot step types, Move, Anim or Wait
 * @member `NOT_SET` - Step type is not set
 * @member `MOVE` - Step is a move order
 * @member `WAIT` - Step is a pause for X seconds order
 * @member `BEHAVIOUR` - Step is a behaviour order to toggle on or off sound and LED on veh
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.AutopilotStepType.html RoboccDocs} for further information
*/
export enum AutopilotStepType {
  /** Step type is not set */
  NOT_SET = 0,
  /** Step is a move order */
  MOVE = 1,
  /** Step is a pause for X seconds order */
  WAIT = 2,
  /** Step is a behaviour order to toggle on or off sound and LED on veh */
  BEHAVIOUR = 3,
}
/** 
 * **Enum direction**
 *
 * List all direction supported by vehicle ↔️
 * @member `FRONT_OR_BACK` - The vehicle must be oriented in the same way as the goal, regardless the condition of the front or rear of the vehicle
 * @member `FRONT` - The vehicle must be oriented in the same way as the goal and forward
 * @member `BACK` - The vehicle must be oriented in the same way as the goal and backward
 * @member `NO_DIRECTION` - The vehicle has no constraint on orientation
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.Direction.html RoboccDocs} for further information
*/
export enum Direction {
  /** The vehicle must be oriented in the same way as the goal, regardless the condition of the front or rear of the vehicle */
  FRONT_OR_BACK = 0,
  /** The vehicle must be oriented in the same way as the goal and forward */
  FRONT = 1,
  /** The vehicle must be oriented in the same way as the goal and backward */
  BACK = 2,
  /** The vehicle has no constraint on orientation */
  NO_DIRECTION = 3,
}
/** 
 * **Enum on off**
 *
 * List all state for on off
 * @member `NOT_SET` - Param not set, use parent or default value
 * @member `ON` - On
 * @member `OFF` - Off
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.OnOff.html RoboccDocs} for further information
*/
export enum OnOff {
  /** Param not set, use parent or default value */
  NOT_SET = 0,
  /** On */
  ON = 1,
  /** Off */
  OFF = 2,
}
/** 
 * **Enum direction**
 *
 * List all strict direction supported by vehicle ↔️
 * @member `FRONT_OR_BACK` - The vehicle must be oriented in the same way as the goal, regardless the condition of the front or rear of the vehicle
 * @member `FRONT` - The vehicle must be oriented in the same way as the goal and forward
 * @member `BACK` - The vehicle must be oriented in the same way as the goal and backward
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.DirectionStrict.html RoboccDocs} for further information
*/
export enum DirectionStrict {
  /** The vehicle must be oriented in the same way as the goal, regardless the condition of the front or rear of the vehicle */
  FRONT_OR_BACK = 0,
  /** The vehicle must be oriented in the same way as the goal and forward */
  FRONT = 1,
  /** The vehicle must be oriented in the same way as the goal and backward */
  BACK = 2,
}
/** 
 * **Enum follow mode**
 *
 * List all mode supported by follow me
 * @member `MODE_FREE` - Free move
 * @member `MODE_ASSISTED` - The vehicle follow walls
 * @member `MODE_GUIDED` - The vehicle can't go on forbidden area
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.FollowMode.html RoboccDocs} for further information
*/
export enum FollowMode {
  /** Free move */
  MODE_FREE = 0,
  /** The vehicle follow walls */
  MODE_ASSISTED = 1,
  /** The vehicle can't go on forbidden area */
  MODE_GUIDED = 2,
}
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
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.VehToDockedStepCode.html RoboccDocs} for further information
*/
export enum VehToDockedStepCode {
  /** Undefined */
  UNDEFINED = 0,
  /** Get data before starting go to */
  GET_DATA = 1,
  /** Retrieve goal of move order */
  INIT_GOAL = 2,
  /** Calculate the path to goal */
  GET_PATH = 3,
  /** Undock if needed */
  UNDOCK = 4,
  /** Currently following path */
  FOLLOW_PATH = 5,
  /** Recalculating a path due to obstacle */
  GET_NEW_PATH = 6,
  /** Docking to goal */
  DOCK = 7,
  /** Currently following segment */
  SEGMENT = 8,
  /** Move order finished */
  FINISHED = 100,
}
/** 
 * **Enum docking status**
 *
 * List all docking status the vehicle can be 🔌
 * @member `UNKNOWN` - Unknown docking status
 * @member `DOCKED` - Vehicle is docked
 * @member `DOCKING` - Vehicle is currently docking
 * @member `UNDOCKING` - Vehicle is currently undocking
 * @member `UNDOCKED` - Vehicle is currently undocked
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.DockingStatus.html RoboccDocs} for further information
*/
export enum DockingStatus {
  /** Unknown docking status */
  UNKNOWN = 0,
  /** Vehicle is docked */
  DOCKED = 1,
  /** Vehicle is currently docking */
  DOCKING = 2,
  /** Vehicle is currently undocking */
  UNDOCKING = 3,
  /** Vehicle is currently undocked */
  UNDOCKED = 4,
}
/** 
 * **Enum follow me status**
 *
 * List all follow me status 👣
 * @member `NOT_SET` - Unknown follow me status
 * @member `STOPPED` - Follow me is stopped
 * @member `FOLLOWING` - Vehicle is currently following a target
 * @member `TARGET_LOST` - Vehicle as lost its target
 * @member `RESETED` - Vehicle is waiting for target
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.FollowMeStatus.html RoboccDocs} for further information
*/
export enum FollowMeStatus {
  /** Unknown follow me status */
  NOT_SET = 0,
  /** Follow me is stopped */
  STOPPED = 1,
  /** Vehicle is currently following a target */
  FOLLOWING = 2,
  /** Vehicle as lost its target */
  TARGET_LOST = 3,
  /** Vehicle is waiting for target */
  RESETED = 4,
}
/** 
 * **Enum docking type**
 *
 * List all docking type
 * @member `CHARGING_STATION` - CHARGING_STATION
 * @member `DOCKED_POSE` - DOCKED_POSE
 * @member `SHELF_PICKING` - SHELF_PICKING
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.DockingType.html RoboccDocs} for further information
*/
export enum DockingType {
  /** CHARGING_STATION */
  CHARGING_STATION = 0,
  /** DOCKED_POSE */
  DOCKED_POSE = 1,
  /** SHELF_PICKING */
  SHELF_PICKING = 2,
}
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
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.VehToStepCode.html RoboccDocs} for further information
*/
export enum VehToStepCode {
  /** Undefined */
  UNDEFINED = 0,
  /** Get data before starting go to */
  GET_DATA = 1,
  /** Retrieve goal of move order */
  INIT_GOAL = 2,
  /** Calculate the path to goal */
  GET_PATH = 3,
  /** Undock if needed */
  UNDOCK = 4,
  /** Currently following path */
  FOLLOW_PATH = 5,
  /** Recalculating a path due to obstacle */
  GET_NEW_PATH = 6,
  /** Dock if needed */
  DOCK = 7,
  /** Currently following segment */
  SEGMENT = 8,
  /** Move order finished */
  FINISHED = 100,
}
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
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.LedAnim.html RoboccDocs} for further information
*/
export enum LedAnim {
  /** Auto animation used to modify color but still use the animation vehicle should use */
  AUTO = -1,
  /** Void LED animation */
  NOT_SET = 0,
  /** No animation used to display a fixed color */
  NO_ANIMATION = 1,
  /** Blink animation like blinker's car */
  BLINK = 2,
  /** Two-state cutted in half blink animation */
  BLINK_HALF = 3,
  /** Two-state cutted in half blink animation with battery indicator */
  BLINK_HALF_WB = 4,
  /** Fade animation like breathing */
  FADE = 5,
  /** Progressing animation beginning at middle rear and gradually turning on LED */
  PROGRESSING = 6,
  /** Progressing animation beginning at each corner and gradually turning on LED */
  PROGRESSING_FROM_CENTER = 7,
  /** All LED turn to white with max power */
  HEAD_LIGHT = 8,
  /** Multiple evenly-dispatched batches of LED turned on that move along the strip */
  SPINNING = 9,
  /** Multiple symmetrically-dispatched batches of LED turned on that move along the strip from middle side to merge in middle rear and front */
  CONVERGE = 10,
  /** Multiple symmetrically-dispatched batches of LED turned on that move along the strip from middle rear and front to merge in middle side */
  DIVERGE = 11,
  /** French flag fading with empty corners, no color needed */
  FR_FLAG = 12,
  /** Rainbow animation, no color needed */
  RAINBOW = 13,
  /** KITT LED strip animation from TV show Knight Rider */
  K2000 = 14,
  /** PROGRESSING_FROM_CENTER_CHARGING */
  PROGRESSING_FROM_CENTER_CHARGING = 15,
  /** PROGRESSING_FROM_CENTER_CHARGING_ALT */
  PROGRESSING_FROM_CENTER_CHARGING_ALT = 16,
  /** MOVE */
  MOVE = 17,
  /** MOVE_FRONT */
  MOVE_FRONT = 18,
  /** MOVE_BACK */
  MOVE_BACK = 19,
  /** MOVE_LEFT */
  MOVE_LEFT = 20,
  /** MOVE_RIGHT */
  MOVE_RIGHT = 21,
  /** MOVE_STOP */
  MOVE_STOP = 22,
  /** FADE_1_LED */
  FADE_1_LED = 23,
  /** FADE_2_LEDS */
  FADE_2_LEDS = 24,
}
/** 
 * **Enum LED animations**
 *
 * List of all animations supported of Noeme 🚥
 * @member `CORNER_NOT_SET` - No corner animation set
 * @member `CORNER_NO_ANIMATION` - Corners are currently in no animation mode
 * @member `CORNER_BLINK` - Corners are currently in blink animation
 * @member `CORNER_FADE` - Corners are currently in fade animation
 * @member `CORNER_CAR_MODE` - Corners are currently in car mode
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.LedCornerAnim.html RoboccDocs} for further information
*/
export enum LedCornerAnim {
  /** No corner animation set */
  CORNER_NOT_SET = 0,
  /** Corners are currently in no animation mode */
  CORNER_NO_ANIMATION = 1,
  /** Corners are currently in blink animation */
  CORNER_BLINK = 2,
  /** Corners are currently in fade animation */
  CORNER_FADE = 3,
  /** Corners are currently in car mode */
  CORNER_CAR_MODE = 4,
}
/** 
 * **Enum pose reference**
 *
 * List all pose reference
 * @member `MAP` - Pose reference is map
 * @member `VEHICLE` - Pose reference is vehicle
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.PoseReference.html RoboccDocs} for further information
*/
export enum PoseReference {
  /** Pose reference is map */
  MAP = 0,
  /** Pose reference is vehicle */
  VEHICLE = 1,
}
/** 
 * **Enum network type**
 *
 * List all network type available on vehicle 🌐
 * @member `ETHERNET` - Ethernet connection
 * @member `WIFI` - Wi-Fi connection
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.NetworkType.html RoboccDocs} for further information
*/
export enum NetworkType {
  /** Ethernet connection */
  ETHERNET = 0,
  /** Wi-Fi connection */
  WIFI = 1,
}
/** 
 * **Enum network status**
 *
 * List all status WAN and Hotspot 🌐
 * @member `UNKNOWN` - Unknown network state
 * @member `DISCONNECTED` - Network is disconnected
 * @member `CONNECTED` - Network is connected
 * @member `CONNECTING` - Network is connecting
 * @member `DISABLED` - Network is disabled
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.NetworkStatus.html RoboccDocs} for further information
*/
export enum NetworkStatus {
  /** Unknown network state */
  UNKNOWN = 0,
  /** Network is disconnected */
  DISCONNECTED = 1,
  /** Network is connected */
  CONNECTED = 2,
  /** Network is connecting */
  CONNECTING = 3,
  /** Network is disabled */
  DISABLED = 254,
}
/** 
 * **Enum global status of network**
 *
 * List all status global network 🌐
 * @member `UNKNOWN` - Unknown network global state
 * @member `DISCONNECTED` - Network is disconnected
 * @member `CONNECTED` - Network is connected
 * @member `CONNECTING` - Network is connecting
 * @member `CONNECTED_NOINTERNET` - Network is connected without internet connection
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.NetworkGlobalStatus.html RoboccDocs} for further information
*/
export enum NetworkGlobalStatus {
  /** Unknown network global state */
  UNKNOWN = 0,
  /** Network is disconnected */
  DISCONNECTED = 1,
  /** Network is connected */
  CONNECTED = 2,
  /** Network is connecting */
  CONNECTING = 3,
  /** Network is connected without internet connection */
  CONNECTED_NOINTERNET = 4,
}
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
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.SoundScenario.html RoboccDocs} for further information
*/
export enum SoundScenario {
  /** Sound played at vehicle initialization at each boot */
  VEH_INIT = 0,
  /** Sound played at each connection on vehicle hotspot */
  HOTSPOT_CONNECTION = 1,
  /** Sound played when vehicle needs human intervention */
  HIR = 2,
  /** Sound played when vehicle detects an obstacle */
  OBSTACLE = 3,
  /** Sound played on special behaviour */
  SPECIAL_BEHAVIOUR_SCENARIO = 4,
  /** Sound played on behaviour steps of autopilot sequence */
  AUTOPILOT_SCENARIO = 5,
  /** Sound played by API calls */
  API_SCENARIO = 6,
  /** Sound defined in area behaviour and played when veh is in, enters, or exits area */
  AREA_SCENARIO = 7,
  /** Sound played when veh is IDLE, anytime vehicle do nothing */
  IDLE = 8,
  /** Sound played when veh has its safety disabled */
  SAFETY_DISABLED = 9,
}
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
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.StopSource.html RoboccDocs} for further information
*/
export enum StopSource {
  /** Stop source is unknown */
  UNKNOWN = 0,
  /** Vehicle stopped because of an obstacle detected by the LiDAR R2000 center */
  LIDAR_R2000_CENTER = 1,
  /** Vehicle stopped because of an obstacle detected by the camera front */
  CAMERA_FRONT = 2,
  /** Vehicle stopped because of an obstacle detected by the camera back */
  CAMERA_BACK = 3,
  /** Vehicle stopped because of an obstacle detected by the US sensor 01h */
  US_SENSOR_01_H = 4,
  /** Vehicle stopped because of an obstacle detected by the US sensor 02h */
  US_SENSOR_02_H = 5,
  /** Vehicle stopped because of an obstacle detected by the US sensor 04h */
  US_SENSOR_04_H = 6,
  /** Vehicle stopped because of an obstacle detected by the US sensor 05h */
  US_SENSOR_05_H = 7,
  /** Vehicle stopped because of an obstacle detected by the US sensor 07h */
  US_SENSOR_07_H = 8,
  /** Vehicle stopped because of an obstacle detected by the US sensor 08h */
  US_SENSOR_08_H = 9,
  /** Vehicle stopped because of an obstacle detected by the US sensor 10h */
  US_SENSOR_10_H = 10,
  /** Vehicle stopped because of an obstacle detected by the US sensor 11h */
  US_SENSOR_11_H = 11,
  /** Vehicle stopped because of a navigation algorithm */
  NAVIGATION = 12,
}
/** 
 * **Enum of computer types**
 *
 * List all computer types
 * @member `COMPUTER_UNKNOWN` - Unknown computer
 * @member `COMPUTER_NUC13` - NUC 13
 * @member `COMPUTER_LATTEPANDA` - LattePanda
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.ComputerType.html RoboccDocs} for further information
*/
export enum ComputerType {
  /** Unknown computer */
  COMPUTER_UNKNOWN = 0,
  /** NUC 13 */
  COMPUTER_NUC13 = 1,
  /** LattePanda */
  COMPUTER_LATTEPANDA = 2,
}
/** 
 * **Enum of MCU types**
 *
 * List all MCU types
 * @member `MCU_UNKNOWN` - Unknown MCU
 * @member `MCU_TEENSY` - Pico
 * @member `MCU_PICO` - Pico
 * @member `MCU_LEONARDO` - Leonardo
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.McuType.html RoboccDocs} for further information
*/
export enum McuType {
  /** Unknown MCU */
  MCU_UNKNOWN = 0,
  /** Pico */
  MCU_TEENSY = 1,
  /** Pico */
  MCU_PICO = 2,
  /** Leonardo */
  MCU_LEONARDO = 3,
}
/** 
 * **Enum of motor types**
 *
 * List all motor types
 * @member `MOTOR_UNKNOWN` - Unknown motor
 * @member `MOTOR_100` - Motor 100kg
 * @member `MOTOR_200` - Motor 200kg
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.MotorType.html RoboccDocs} for further information
*/
export enum MotorType {
  /** Unknown motor */
  MOTOR_UNKNOWN = 0,
  /** Motor 100kg */
  MOTOR_100 = 1,
  /** Motor 200kg */
  MOTOR_200 = 2,
}
/** 
 * **Roc event**
 *
 * Roc event for sound
 * @member `ON_PAUSE` - ON_PAUSE
 * @member `RETRY_MOVE` - RETRY_MOVE
 * @member `ROC_L_BAD_LIFT_POSITION` - ROC_L_BAD_LIFT_POSITION
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.RocEvent.html RoboccDocs} for further information
*/
export enum RocEvent {
  /** ON_PAUSE */
  ON_PAUSE = 5,
  /** RETRY_MOVE */
  RETRY_MOVE = 7,
  /** ROC_L_BAD_LIFT_POSITION */
  ROC_L_BAD_LIFT_POSITION = 8,
}
/** 
 * **Contact state**
 *
 * Contact state
 * @member `OFF` - OFF
 * @member `ON` - ON
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.ContactState.html RoboccDocs} for further information
*/
export enum ContactState {
  /** OFF */
  OFF = 0,
  /** ON */
  ON = 1,
}
/** 
 * **Docked pose station type**
 *
 * Docked pose station type
 * @member `NONE` - NONE
 * @member `LOAD` - LOAD
 * @member `UNLOAD` - UNLOAD
 * @member `PICKING` - PICKING
 * @member `SHELF` - SHELF
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.DockedPoseStationType.html RoboccDocs} for further information
*/
export enum DockedPoseStationType {
  /** NONE */
  NONE = 0,
  /** LOAD */
  LOAD = 1,
  /** UNLOAD */
  UNLOAD = 2,
  /** PICKING */
  PICKING = 3,
  /** SHELF */
  SHELF = 4,
}
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
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.LoraControllerCommand.html RoboccDocs} for further information
*/
export enum LoraControllerCommand {
  /** UNDEFINED */
  UNDEFINED = 0,
  /** ACTION_RELAY1_ON */
  ACTION_RELAY1_ON = 54,
  /** ACTION_RELAY1_OFF */
  ACTION_RELAY1_OFF = 55,
  /** ACTION_RELAY1_PULSE */
  ACTION_RELAY1_PULSE = 56,
  /** ACTION_RELAY2_ON */
  ACTION_RELAY2_ON = 57,
  /** ACTION_RELAY2_OFF */
  ACTION_RELAY2_OFF = 58,
  /** ACTION_RELAY2_PULSE */
  ACTION_RELAY2_PULSE = 59,
}
/** 
 * **Contact type**
 *
 * Contact type
 * @member `NONE` - NONE
 * @member `CALL` - CALL
 * @member `PRIORITY_CALL` - PRIORITY_CALL
 * @member `AVAILABILITY` - AVAILABILITY
 * @member `RELEASE` - RELEASE
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.ContactType.html RoboccDocs} for further information
*/
export enum ContactType {
  /** NONE */
  NONE = 0,
  /** CALL */
  CALL = 1,
  /** PRIORITY_CALL */
  PRIORITY_CALL = 2,
  /** AVAILABILITY */
  AVAILABILITY = 3,
  /** RELEASE */
  RELEASE = 4,
}
/** 
 * **Contact NO/NC**
 *
 * Contact NO/NC
 * @member `NO` - NO
 * @member `NC` - NC
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.ContactNonc.html RoboccDocs} for further information
*/
export enum ContactNonc {
  /** NO */
  NO = 0,
  /** NC */
  NC = 1,
}
/** 
 * **Contact trigger**
 *
 * Contact trigger
 * @member `ON_PULSE` - ON_PULSE
 * @member `ON_HIGH` - ON_HIGH
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.ContactTrigger.html RoboccDocs} for further information
*/
export enum ContactTrigger {
  /** ON_PULSE */
  ON_PULSE = 0,
  /** ON_HIGH */
  ON_HIGH = 1,
}
/** 
 * **Relay action**
 *
 * Relay action
 * @member `ON_OFF` - ON_OFF
 * @member `PULSE` - PULSE
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.RelayAction.html RoboccDocs} for further information
*/
export enum RelayAction {
  /** ON_OFF */
  ON_OFF = 0,
  /** PULSE */
  PULSE = 1,
}
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
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.VehStatus.html RoboccDocs} for further information
*/
export enum VehStatus {
  /** STATUS_FREE */
  STATUS_FREE = 14,
  /** STATUS_MAINTENANCE */
  STATUS_MAINTENANCE = 15,
  /** STATUS_IN_CHARGE */
  STATUS_IN_CHARGE = 16,
  /** STATUS_IN_CHARGE_REQUIRED */
  STATUS_IN_CHARGE_REQUIRED = 17,
  /** STATUS_GOTO_CHARGE */
  STATUS_GOTO_CHARGE = 18,
  /** STATUS_GOTO_CHARGE_REQUIRED */
  STATUS_GOTO_CHARGE_REQUIRED = 19,
  /** STATUS_HIR */
  STATUS_HIR = 20,
  /** STATUS_MOVE */
  STATUS_MOVE = 21,
  /** STATUS_MOVE_DONE */
  STATUS_MOVE_DONE = 22,
  /** STATUS_MOVE_FAILED */
  STATUS_MOVE_FAILED = 23,
  /** STATUS_CONTINUE_MISSION */
  STATUS_CONTINUE_MISSION = 24,
  /** STATUS_WAITING_RELEASE */
  STATUS_WAITING_RELEASE = 25,
  /** STATUS_DISCONNECTED */
  STATUS_DISCONNECTED = 26,
  /** STATUS_PAUSE */
  STATUS_PAUSE = 45,
  /** STATUS_ROC_ID */
  STATUS_ROC_ID = 47,
  /** STATUS_VEH_DISCONNECTED */
  STATUS_VEH_DISCONNECTED = 48,
  /** STATUS_NOT_CHARGING */
  STATUS_NOT_CHARGING = 49,
  /** STATUS_WAIT_WAITING_POSE */
  STATUS_WAIT_WAITING_POSE = 53,
  /** STATUS_BAD_LIFT_POSITION */
  STATUS_BAD_LIFT_POSITION = 63,
  /** STATUS_WAITING_CONTACT */
  STATUS_WAITING_CONTACT = 64,
  /** STATUS_SLEEPING */
  STATUS_SLEEPING = 65,
  /** STATUS_HIBERNATE */
  STATUS_HIBERNATE = 66,
  /** ACTION_CALL_MISSION */
  ACTION_CALL_MISSION = 67,
  /** ACTION_START_MISSION */
  ACTION_START_MISSION = 68,
  /** ACTION_EXTEND_MISSION */
  ACTION_EXTEND_MISSION = 69,
  /** ACTION_RELEASE_MODULE */
  ACTION_RELEASE_MODULE = 70,
  /** ACTION_RELEASE_POSITION */
  ACTION_RELEASE_POSITION = 71,
  /** STATUS_MESSAGES_START */
  STATUS_MESSAGES_START = 72,
  /** STATUS_MESSAGES_END */
  STATUS_MESSAGES_END = 73,
  /** ACTION_GET_CONTACTS_CONFIG */
  ACTION_GET_CONTACTS_CONFIG = 74,
  /** ACTION_SET_CONTACT_CONFIG */
  ACTION_SET_CONTACT_CONFIG = 75,
  /** STATUS_NOT_POSSIBLE */
  STATUS_NOT_POSSIBLE = 76,
  /** STATUS_NOT_IN_OPERATING_HOURS */
  STATUS_NOT_IN_OPERATING_HOURS = 77,
  /** STATUS_INVALID_TOP */
  STATUS_INVALID_TOP = 78,
  /** STATUS_CANCELED */
  STATUS_CANCELED = 79,
  /** STATUS_ROC_P_BAD_LIFT_POSITION */
  STATUS_ROC_P_BAD_LIFT_POSITION = 80,
  /** STATUS_IN_CONFIG */
  STATUS_IN_CONFIG = 81,
}
/** 
 * **Module type**
 *
 * Module type
 * @member `NOT_SET` - NOT_SET
 * @member `ROC_E` - ROC_E
 * @member `ROC_EP` - ROC_EP
 * @member `ROC_P` - ROC_P
 * @member `OTHER` - OTHER
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.ModuleType.html RoboccDocs} for further information
*/
export enum ModuleType {
  /** NOT_SET */
  NOT_SET = 0,
  /** ROC_E */
  ROC_E = 1,
  /** ROC_EP */
  ROC_EP = 2,
  /** ROC_P */
  ROC_P = 3,
  /** OTHER */
  OTHER = 99,
}
/** 
 * **Vehicle direction**
 *
 * Vehicle direction
 * @member `FRONT_OR_BACK` - FRONT_OR_BACK
 * @member `FRONT` - FRONT
 * @member `BACK` - BACK
 * @member `NO_DIRECTION` - NO_DIRECTION
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.VehDirection.html RoboccDocs} for further information
*/
export enum VehDirection {
  /** FRONT_OR_BACK */
  FRONT_OR_BACK = 0,
  /** FRONT */
  FRONT = 1,
  /** BACK */
  BACK = 2,
  /** NO_DIRECTION */
  NO_DIRECTION = 3,
}
/** 
 * **Map element type**
 *
 * Map element type
 * @member `CHARGING_STATION` - CHARGING_STATION
 * @member `SAVED_POSE` - SAVED_POSE
 * @member `DOCKED_POSE` - DOCKED_POSE
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.MapElementType.html RoboccDocs} for further information
*/
export enum MapElementType {
  /** CHARGING_STATION */
  CHARGING_STATION = 0,
  /** SAVED_POSE */
  SAVED_POSE = 1,
  /** DOCKED_POSE */
  DOCKED_POSE = 2,
}
/** 
 * **Authenticated type**
 *
 * Authenticated type
 * @member `NONE` - NONE
 * @member `USER` - USER
 * @member `MODULE` - MODULE
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.AuthenticatedType.html RoboccDocs} for further information
*/
export enum AuthenticatedType {
  /** NONE */
  NONE = 0,
  /** USER */
  USER = 1,
  /** MODULE */
  MODULE = 2,
}
/** 
 * **Log severity**
 *
 * Log severity
 * @member `INFO` - INFO
 * @member `WARNING` - WARNING
 * @member `ERROR` - ERROR
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.LogSeverity.html RoboccDocs} for further information
*/
export enum LogSeverity {
  /** INFO */
  INFO = 0,
  /** WARNING */
  WARNING = 1,
  /** ERROR */
  ERROR = 2,
}
/** 
 * **Log type**
 *
 * Log type
 * @member `APP` - APP
 * @member `MISSION` - MISSION
 * @member `VEHICLE` - VEHICLE
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.LogType.html RoboccDocs} for further information
*/
export enum LogType {
  /** APP */
  APP = 0,
  /** MISSION */
  MISSION = 1,
  /** VEHICLE */
  VEHICLE = 2,
}
/** 
 * **UpdateStatusStatus**
 *
 * `status` parameter of a `UpdateStatus` type
 * @member `STOPPING` - Device is stopping to install update
 * @member `STARTING` - Device is starting new system update
 * @member `DOWNLOADING` - Device is downloading new system update
 * @member `INSTALLING` - Device is installing new system update
 * @member `IDLE` - No new system update
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.UpdateStatusStatus.html RoboccDocs} for further information
*/
export enum UpdateStatusStatus {
  /** Device is stopping to install update */
  STOPPING = "Stopping",
  /** Device is starting new system update */
  STARTING = "Starting",
  /** Device is downloading new system update */
  DOWNLOADING = "Downloading",
  /** Device is installing new system update */
  INSTALLING = "Installing",
  /** No new system update */
  IDLE = "Idle",
}
/** 
 * **SetMapFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `SetMapFeedback` type
 * @member `UNDEFINED` - Step undefined
 * @member `UPDATE_DATABASE` - Step updating database
 * @member `UPDATE_MAPS` - Step updating maps
 * @member `RELOAD_MAPS` - Step reloading maps
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.SetMapFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
export enum SetMapFeedbackCurrentStepCode {
  /** Step undefined */
  UNDEFINED = 0,
  /** Step updating database */
  UPDATE_DATABASE = 1,
  /** Step updating maps */
  UPDATE_MAPS = 2,
  /** Step reloading maps */
  RELOAD_MAPS = 3,
}
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
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.SetActiveMapFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
export enum SetActiveMapFeedbackCurrentStepCode {
  /** Undefined */
  UNDEFINED = 0,
  /** Updating database */
  UPDATE_DATABASE = 1,
  /** Updating maps */
  UPDATE_MAPS = 2,
  /** Reloading database */
  RELOAD_MAPS = 3,
  /** Perform recovery */
  RECOVERY = 4,
  /** Stop navigation due to error on recovery step */
  STOP_NAVIGATION = 5,
}
/** 
 * **InstallModuleFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `InstallModuleFeedback` type
 * @member `UPDATE_DATABASE` - Update database
 * @member `ACTIVATE_MODULE` - Activate module
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.InstallModuleFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
export enum InstallModuleFeedbackCurrentStepCode {
  /** Update database */
  UPDATE_DATABASE = 0,
  /** Activate module */
  ACTIVATE_MODULE = 1,
}
/** 
 * **DisableModuleFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `DisableModuleFeedback` type
 * @member `UPDATE_DATABASE` - Update module
 * @member `ACTIVATE_MODULE` - Desactivate module
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.DisableModuleFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
export enum DisableModuleFeedbackCurrentStepCode {
  /** Update module */
  UPDATE_DATABASE = 0,
  /** Desactivate module */
  ACTIVATE_MODULE = 1,
}
/** 
 * **ResetDatabaseFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `ResetDatabaseFeedback` type
 * @member `RESET_DATABASE` - Undefined
 * @member `SET_ACTIVE_MODULE` - Stop mapping process
 * @member `SET_ACTIVE_MAP` - Save map in database
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.ResetDatabaseFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
export enum ResetDatabaseFeedbackCurrentStepCode {
  /** Undefined */
  RESET_DATABASE = 0,
  /** Stop mapping process */
  SET_ACTIVE_MODULE = 1,
  /** Save map in database */
  SET_ACTIVE_MAP = 2,
}
/** 
 * **MappingStopFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `MappingStopFeedback` type
 * @member `UNDEFINED` - Undefined
 * @member `STOP_MAPPING` - Stop mapping process
 * @member `SAVE_MAP` - Save map in database
 * @member `SET_ACTIVE_MAP` - Set map as active
 * @member `START_NAVIGATION` - Start navigation on new map
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.MappingStopFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
export enum MappingStopFeedbackCurrentStepCode {
  /** Undefined */
  UNDEFINED = 0,
  /** Stop mapping process */
  STOP_MAPPING = 1,
  /** Save map in database */
  SAVE_MAP = 2,
  /** Set map as active */
  SET_ACTIVE_MAP = 3,
  /** Start navigation on new map */
  START_NAVIGATION = 4,
}
/** 
 * **EraseActiveMapFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `EraseActiveMapFeedback` type
 * @member `GET_DATA` - Get erasers data
 * @member `GENERATE_MAPS` - Generate maps with erase layer
 * @member `SAVE_MAP` - Save map in database
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.EraseActiveMapFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
export enum EraseActiveMapFeedbackCurrentStepCode {
  /** Get erasers data */
  GET_DATA = 0,
  /** Generate maps with erase layer */
  GENERATE_MAPS = 1,
  /** Save map in database */
  SAVE_MAP = 2,
}
/** 
 * **ReloadMapFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `ReloadMapFeedback` type
 * @member `UNDEFINED` - Undefined
 * @member `GET_DATA` - Get data for reloading map
 * @member `UPDATE_MAPS` - Update maps
 * @member `RELOAD_MAPS` - Reload maps
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.ReloadMapFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
export enum ReloadMapFeedbackCurrentStepCode {
  /** Undefined */
  UNDEFINED = 0,
  /** Get data for reloading map */
  GET_DATA = 1,
  /** Update maps */
  UPDATE_MAPS = 2,
  /** Reload maps */
  RELOAD_MAPS = 3,
}
/** 
 * **MergeMapsFeedbackCurrentStepCode**
 *
 * `current_step_code` parameter of a `MergeMapsFeedback` type
 * @member `GET_DATA` - Get data from db
 * @member `CALCULATE_TRANSFORMATION` - Calculate transformation
 * @member `TRANSFORM_DATA` - Transform data
 * @member `SAVE_MAP` - Save map
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.MergeMapsFeedbackCurrentStepCode.html RoboccDocs} for further information
*/
export enum MergeMapsFeedbackCurrentStepCode {
  /** Get data from db */
  GET_DATA = 0,
  /** Calculate transformation */
  CALCULATE_TRANSFORMATION = 1,
  /** Transform data */
  TRANSFORM_DATA = 2,
  /** Save map */
  SAVE_MAP = 3,
}
/** 
 * **SystemRestartParamsStage**
 *
 * `stage` parameter of a `SystemRestartParams` type
 * @member `SOFT_RESTART` - Restart software
 * @member `HARD_RESTART` - Restart docker
 * @member `REBOOT` - Restart PC
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.SystemRestartParamsStage.html RoboccDocs} for further information
*/
export enum SystemRestartParamsStage {
  /** Restart software */
  SOFT_RESTART = 1,
  /** Restart docker */
  HARD_RESTART = 2,
  /** Restart PC */
  REBOOT = 3,
}
/** 
 * **MappingErrorEventDataOutcome**
 *
 * `outcome` parameter of a `MappingErrorEventData` type
 * @member `NO_ERROR` - No mapping in progress, or no error happened on current mapping
 * @member `ERROR` - An error happened on current mapping
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.MappingErrorEventDataOutcome.html RoboccDocs} for further information
*/
export enum MappingErrorEventDataOutcome {
  /** No mapping in progress, or no error happened on current mapping */
  NO_ERROR = 0,
  /** An error happened on current mapping */
  ERROR = 1,
}
/** 
 * **AutopilotStepResult event data**
 *
 * Data sent along with the event AutopilotStepResult
 * @member `UNDEFINED` - Undefined autopilot step result
 * @member `SUCCESS` - Autopilot step finished successfully
 * @member `FAILURE` - Autopilot step finished with failure
 * @member `CANCELED` - Autopilot step has been canceled
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.AutopilotStepResultEventData.html RoboccDocs} for further information
*/
export enum AutopilotStepResultEventData {
  /** Undefined autopilot step result */
  UNDEFINED = 0,
  /** Autopilot step finished successfully */
  SUCCESS = 1,
  /** Autopilot step finished with failure */
  FAILURE = 2,
  /** Autopilot step has been canceled */
  CANCELED = 3,
}
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
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.AutopilotStatusEventData.html RoboccDocs} for further information
*/
export enum AutopilotStatusEventData {
  /** Autopilot not set for this map */
  NOT_SET = 0,
  /** Autopilot is stopped */
  STOPPED = 1,
  /** Autopilot is started */
  STARTED = 2,
  /** Autopilot is paused */
  PAUSED = 3,
  /** Autopilot is paused due to critical battery level reached and vehicle has gone off to recharge itself */
  PAUSED_CHARGING = 4,
  /** Autopilot is paused due to human intervention required */
  PAUSED_HIR = 5,
  /** Autopilot is paused due to module prohibit move orders */
  PAUSED_PROHIBITED_MOVE = 6,
}
/** 
 * **UpdateStatusEventDataStatus**
 *
 * `status` parameter of a `UpdateStatusEventData` type
 * @member `STOPPING` - Device is stopping to install update
 * @member `STARTING` - Device is starting new system update
 * @member `DOWNLOADING` - Device is downloading new system update
 * @member `INSTALLING` - Device is installing new system update
 * @member `IDLE` - No new system update
 * @see {@link https://docs.robocc.com/roc-api-ts/8.26.5-zeus-5/enums/types.UpdateStatusEventDataStatus.html RoboccDocs} for further information
*/
export enum UpdateStatusEventDataStatus {
  /** Device is stopping to install update */
  STOPPING = "Stopping",
  /** Device is starting new system update */
  STARTING = "Starting",
  /** Device is downloading new system update */
  DOWNLOADING = "Downloading",
  /** Device is installing new system update */
  INSTALLING = "Installing",
  /** No new system update */
  IDLE = "Idle",
}