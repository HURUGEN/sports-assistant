import { View, Map } from '@tarojs/components';
import './index.less';
import usePage from './usePage';

export default ()=>{
  const { location } = usePage();

  return (
    <View className='map_main'>
      <Map
        className='map_ele'
        showLocation
        {...location}
      ></Map>
    </View>
  )
};