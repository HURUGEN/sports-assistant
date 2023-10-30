import { useDidShow } from '@tarojs/taro';
import { useState } from 'react';
import { getLocation } from '@/utils/tools';

export default ()=>{
  const [ location, setLocation ] = useState({ latitude: 0, longitude: 0 });

  useDidShow(async ()=>{
    console.log( 11 );
    const { success, latitude, longitude } = await getLocation();
    if( success ){
      setLocation({ latitude, longitude });
    }
  });

  return {
    location,
  };

};