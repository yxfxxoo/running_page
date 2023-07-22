// const
const MAPBOX_TOKEN =
  'pk.eyJ1Ijoic3VyZ2U3IiwiYSI6ImNsa2U1MzM5bjEyMW8zcm54eGZ1MW5iZTYifQ.Q0jup5RZRXqe4gd8hJi-uA';
const MUNICIPALITY_CITIES_ARR = [
  '北京市',
  '上海市',
  '天津市',
  '重庆市',
  '香港特别行政区',
  '澳门特别行政区',
];
const MAP_LAYER_LIST = [
  'road-label',
  'waterway-label',
  'natural-line-label',
  'natural-point-label',
  'water-line-label',
  'water-point-label',
  'poi-label',
  'airport-label',
  'settlement-subdivision-label',
  'settlement-label',
  'state-label',
  'country-label',
];

// styling: set to `true` if you want dash-line route
const USE_DASH_LINE = true;
// styling: route line opacity: [0, 1]
const LINE_OPACITY = 0.4;
// styling: map height
const MAP_HEIGHT = 600;
//set to `false` if you want to hide the road label characters
const ROAD_LABEL_DISPLAY = true;

// IF you outside China please make sure IS_CHINESE = false
const IS_CHINESE = true;
const USE_ANIMATION_FOR_GRID = false;
const CHINESE_INFO_MESSAGE = (yearLength, year) =>
  `户外运动 ${yearLength} 年 ` + ( year === 'Total' ? '' : `，地图展示的是 ${year} 年的轨迹`);

const ENGLISH_INFO_MESSAGE = (yearLength, year) =>
  `Logged ${yearLength} Years of Outdoor Journey` +  ( year === 'Total' ? '' : `, the map show routes in ${year}`);

// not support English for now
const CHINESE_LOCATION_INFO_MESSAGE_FIRST =
  '我跑过了一些地方，希望随着时间推移，地图点亮的地方越来越多';
const CHINESE_LOCATION_INFO_MESSAGE_SECOND = '不要停下来，不要停下奔跑的脚步';

const INFO_MESSAGE = IS_CHINESE ? CHINESE_INFO_MESSAGE : ENGLISH_INFO_MESSAGE;
const FULL_MARATHON_RUN_TITLE = IS_CHINESE ? '全程马拉松' : 'Full Marathon';
const HALF_MARATHON_RUN_TITLE = IS_CHINESE ? '半程马拉松' : 'Half Marathon';
const RUN_TITLE = IS_CHINESE ? '跑步' : 'Run';
const RIDE_TITLE = IS_CHINESE ? '骑行' : 'Ride';
const HIKE_TITLE = IS_CHINESE ? '徒步' : 'Hike';

const RUN_TITLES = {
  FULL_MARATHON_RUN_TITLE,
  HALF_MARATHON_RUN_TITLE,
  RUN_TITLE,
  RIDE_TITLE,
  HIKE_TITLE,
};

export {
  CHINESE_LOCATION_INFO_MESSAGE_FIRST,
  CHINESE_LOCATION_INFO_MESSAGE_SECOND,
  MAPBOX_TOKEN,
  MUNICIPALITY_CITIES_ARR,
  MAP_LAYER_LIST,
  IS_CHINESE,
  ROAD_LABEL_DISPLAY,
  INFO_MESSAGE,
  RUN_TITLES,
  USE_ANIMATION_FOR_GRID,
  USE_DASH_LINE,
  LINE_OPACITY,
  MAP_HEIGHT,
};

const nike = 'rgb(224,237,94)'; // if you want change the main color change here src/styles/variables.scss
const yellow = 'rgb(224,237,94)';
const green = 'rgb(0,237,94)';
const pink = 'rgb(237,85,219)';
const cyan = 'rgb(112,243,255)';
const IKB = 'rgb(0,47,167)';
const wpink = 'rgb(228,212,220)';
const gold = 'rgb(242,190,69)';
const purple = 'rgb(154,118,252)';
const veryPeri = 'rgb(105,106,173)';//长春花蓝
const red = 'rgb(255,0,0)';//大红色

// If your map has an offset please change this line
// issues #92 and #198
export const NEED_FIX_MAP = false;
export const MAIN_COLOR = nike;
export const RUN_COLOR = yellow;
export const RIDE_COLOR = green;
export const HIKE_COLOR = pink;
export const PROVINCE_FILL_COLOR = '#47b8e0';
