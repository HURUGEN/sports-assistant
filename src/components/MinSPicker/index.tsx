/**
 * 分秒选择器组件
 */
import { Picker, View } from "@tarojs/components";
import { TMinSPickerProps } from './type';
import useComponent from "./useComponent";
import './index.less';

export default (props: TMinSPickerProps)=>{
  const { 
    range,
    value,
    placeholder,
    className,
    placeholderClassName,
    pickerText,
    onChange,
  } = useComponent(props);

  return (
    <Picker range={range} value={value} onChange={onChange} mode='multiSelector'>
      <View className={`__minSPicker ${className} ${placeholderClassName}`}>{value.length?pickerText:placeholder}</View>
    </Picker>
  )
};