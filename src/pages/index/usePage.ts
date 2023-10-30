import { useEffect, useState } from "react";
import { convertPaceToSpeed, convertSpeedToPace, convertSecondsToMinutesAndSeconds, speedsInfoListFn } from './data';
import type { TSpeedsInfoList } from './type';

export default ()=>{
  // 配速
  const [ speed, setSpeed ] = useState([]);
  // 时速
  const [ speedKm, setSpeedKm ] = useState('');
  // 展示配速文案
  const [ speedText, setSpeedText ] = useState('');
  // 当前类型
  const [ type, setType ] = useState('speed');
  // 展示信息
  const [ speedsInfoList, setSpeedsInfoList ] = useState<TSpeedsInfoList>([]);
  // 选中展示信息
  const [ selectShowIndex, setSelectShowIndex ] = useState(0);

  /**
   * 配速切换
   */
  const speedOnchange = ( val, timeValue )=> {
    setSpeed( val );
    setSpeedKm( convertPaceToSpeed(timeValue) );
  };

  /**
   * 时速输入
   */
  const speedKmOnchange = event=>{
    const { detail: { value } } = event;
    setSpeedKm( value );
    const numReg = /^(\d+|\d+\.\d{1,2})$/;
    // 不通过
    if( value === '0' || !numReg.test( value ) ){
      setSpeedText('');
      setSelectShowIndex(0);
      return;
    }
    setSpeedText(`每km配速为${convertSecondsToMinutesAndSeconds(convertSpeedToPace(value))}`)
  };

  /**
   * 切换输入转化
   */
  const typeOnchange = ()=>{
    setSpeed([]);
    setSpeedKm('');
    setSelectShowIndex(0);
    setType( type === 'speedKm'?'speed':'speedKm' );
  };

  useEffect(()=>{
    const numReg = /^(\d+|\d+\.\d{1,2})$/;
    // 不通过
    if( speedKm === '0' || !numReg.test( speedKm ) ){
      setSpeedsInfoList([]);
      return;
    }
    setSpeedsInfoList(speedsInfoListFn(speedKm));
  },[speedKm]);

  /**
   * 点击切换选中
   */
  const clickResultFn = (index)=>{
    if( index !== selectShowIndex ){
      setSelectShowIndex(index);
    }
  }

  return {
    speed,
    speedKm,
    type,
    speedText,
    speedsInfoList,
    selectShowIndex,
    speedOnchange,
    speedKmOnchange,
    typeOnchange,
    clickResultFn,
  }
};