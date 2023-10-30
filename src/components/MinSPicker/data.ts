/**
 * 分针数据选项
 */
const timeOptions = (type: 'min' | 's')=> Array.from({length: 60}, (_, i) => `${i.toString()}${type}`);

/**
 * 分钟value值转化为数组
 * 例子 5:0 ==> [6, 1]
 */
const timeToIndexArray = (val: string): number[] | ''=>{
  // 格式不对
  if( val.indexOf(':') === -1 || !val ) return '';
  return val.split(':').map(num => Number(num) );
};


/**
 * 默认值范围选择值
 */
const defaultRange = [timeOptions('min'), timeOptions('s')];

/**
 * 下标转单位
 */
const indexToUnitMap = {
  0: '分',
  1: '秒'
};

export {
  indexToUnitMap,
  defaultRange,
  timeOptions,
  timeToIndexArray,
};