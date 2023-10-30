import Taro from "@tarojs/taro";
import type { TLocationInfo } from './type';

/**
 * 获取经纬度
 */
const getLocation = ():Promise<TLocationInfo> =>{
  return new Promise(( resolve )=>{
    Taro.getLocation({
      success: function(res) {
        // 获取经纬度成功
        resolve({...res, success:true});
      },
      fail: function() {
        resolve({
          success: false,
          longitude: 0,
          latitude: 0,
        });
        Taro.showModal({
          title:'提示',
          content: '获取定位失败请检查是否授权定位,前往授权页面',
          success( handleRes ){
            if( handleRes.confirm ){
              // 用户未授权，跳转到授权设置页面
              Taro.openSetting();
            }else{
              Taro.navigateBack();
            }
          }
        })
      }
    });
  });
}

export {
  getLocation,
};