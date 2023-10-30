
/**
 * 定位返回值
 */
type TLocationInfo = {
  /** 位置的精确度 */
  accuracy: number
  /** 高度，单位 m */
  altitude: number
  /** 水平精度，单位 m */
  horizontalAccuracy: number
  /** 纬度，范围为 -90~90，负数表示南纬 */
  latitude: number
  /** 经度，范围为 -180~180，负数表示西经 */
  longitude: number
  /** 速度，单位 m/s */
  speed: number
  /** 垂直精度，单位 m（Android 无法获取，返回 0） */
  verticalAccuracy: number
  /** 调用结果 */
  errMsg: string
  success: true,
} | {
    /** 是否返回成功 */
    success: false, 
    latitude: 0,
    longitude: 0,
};

export type {
  TLocationInfo,
};
