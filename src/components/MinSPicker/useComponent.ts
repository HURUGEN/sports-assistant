import { useEffect, useState } from 'react';
import { defaultRange, indexToUnitMap } from './data';
import type { TMinSPickerProps } from './type';

export default (props: TMinSPickerProps)=>{
  const { value, placeholder, className, useRange, onChange } = props;
  
  /** 初始化选择内容 */
  const [ range, setRange ] = useState(defaultRange);

  /**
   * 过滤差值
   */
  const rangeDiffValue = useRange? useRange[0]: 0;

  /**
   * 过滤选择范围
   */
  useEffect(()=>{
    if( useRange ){
      const filterRange = defaultRange.map( ( item, index )=> item.filter(( _, idx ) => index || ( idx >= useRange[0] && idx<useRange[1] )) );
      setRange(filterRange);
    }
  },[ useRange ]);

  /** 未选中时状态置灰效果样式名 */
  const placeholderClassName = ( !value.length && placeholder )? '__placeholder': '';

  /** 使用value */

  /** 渲染内容 */
  const pickerText = !!value.length && `每km配速${value.map( ( num, index ) => `${num + ( !index?rangeDiffValue:0 )}${indexToUnitMap[index]}` ).join('')}`;

  /** 切换数据 */
  const onChangeFn = event =>{
    const { detail: { value: val } } = event;
    const timeValue = [ val[0]+rangeDiffValue, val[1] ];
    onChange( val, timeValue );
  };

  return {
    range,
    value,
    placeholder,
    placeholderClassName,
    className,
    pickerText,
    onChange:onChangeFn,
  }
};