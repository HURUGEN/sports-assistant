
/**
 * 将每公里几分几秒的配速转换为每小时公里配速
 */
const convertPaceToSpeed = ( values )=> {
  const [ minutes, seconds ] = values;
  const totalSeconds = (minutes * 60) + seconds;
  const secondsPerHour = 3600;
  const speed = secondsPerHour / totalSeconds;
  return speed.toFixed(2); // 保留两位小数
}

// 将每小时几公里速度转换为1公里的配速（秒速）
function convertSpeedToPace(speed) {
  const minutesPerHour = 60;
  const secondsPerMinute = 60;
  const minutesPerKilometer = minutesPerHour / speed;
  const secondsPerKilometer = secondsPerMinute * minutesPerKilometer;
  return secondsPerKilometer.toFixed(0); // 保留两位小数
}

// 将秒转换为几分几秒
function convertSecondsToMinutesAndSeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}分${remainingSeconds}秒`;
}

// 将秒转换为几小时几分钟几秒
function convertSecondsToHoursMinutesAndSeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}时${remainingMinutes}分${remainingSeconds}秒`;
}

// 计算用时（秒）
function calculateTimeInSeconds(distance, speedPerKilometer) {
  const timeInSeconds = (distance / speedPerKilometer) * 3600;
  return convertSecondsToHoursMinutesAndSeconds(timeInSeconds.toFixed(0));
}

// 计算跑了多少米
function calculateDistanceInMeters(timeInSeconds, speedPerKilometer) {
  const metersPerSecond = (speedPerKilometer / 3600) * 1000;
  const distanceInMeters = timeInSeconds * metersPerSecond;
  return distanceInMeters.toFixed(0)+'米';
}

/**
 * 当前配速下的展示数据
 */
const speedsInfoListFn = (speedKm)=>{
  return [
    {
      title: '100M',
      content: `100M距离用时${calculateTimeInSeconds(0.1, speedKm)}`,
    },
    {
      title: '200M',
      content: `200M距离用时${calculateTimeInSeconds(0.2, speedKm)}`,
    },
    {
      title: '400M',
      content: `400M距离用时${calculateTimeInSeconds(0.4, speedKm)}`,
    },
    {
      title: '800M',
      content: `800M距离用时${calculateTimeInSeconds(0.8, speedKm)}`,
    },
    {
      title: '1KM',
      content: `1KM距离用时${calculateTimeInSeconds(1, speedKm)}`,
    },
    {
      title: '5KM',
      content: `5KM距离用时${calculateTimeInSeconds(5, speedKm)}`,
    },
    {
      title: '10KM',
      content: `10KM距离用时${calculateTimeInSeconds(10, speedKm)}`,
    },
    {
      title: '半马（21.1KM）',
      content: `半马距离用时${calculateTimeInSeconds(21.1, speedKm)}`,
    },
    {
      title: '全马（42.19KM）',
      content: `全马距离用时${calculateTimeInSeconds(42.19, speedKm)}`,
    },
    {
      title: '用时1分钟',
      content: `用时1分钟可以跑距离${calculateDistanceInMeters(60, speedKm)}`,
    },
    {
      title: '用时2分钟',
      content: `用时2分钟可以跑距离${calculateDistanceInMeters(120, speedKm)}`,
    },
    {
      title: '用时5分钟',
      content: `用时5分钟可以跑距离${calculateDistanceInMeters(300, speedKm)}`,
    },
    {
      title: '用时10分钟',
      content: `用时10分钟可以跑距离${calculateDistanceInMeters(600, speedKm)}`,
    },
    {
      title: '用时15分钟',
      content: `用时15分钟可以跑距离${calculateDistanceInMeters(900, speedKm)}`,
    },
    {
      title: '用时20分钟',
      content: `用时20分钟可以跑距离${calculateDistanceInMeters(1200, speedKm)}`,
    },
    {
      title: '用时30分钟',
      content: `用时30分钟可以跑距离${calculateDistanceInMeters(1800, speedKm)}`,
    },
    {
      title: '用时1小时',
      content: `用时1小时可以跑距离${calculateDistanceInMeters(3600, speedKm)}`,
    },
    {
      title: '用时2小时',
      content: `用时2小时可以跑距离${calculateDistanceInMeters(7200, speedKm)}`,
    },
  ];
};

export {
  convertPaceToSpeed,
  convertSpeedToPace,
  convertSecondsToMinutesAndSeconds,
  convertSecondsToHoursMinutesAndSeconds,
  speedsInfoListFn,
};
