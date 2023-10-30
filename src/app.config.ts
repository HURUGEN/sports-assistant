export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/map/index'
  ],
  components: [
    'components/MinSPicker/index'
  ],
  requiredPrivateInfos:[ 
    'getLocation'
  ],
  permission: {
    "scope.userLocation": {
      "desc": "用于展示当前所在位置的运动环境"
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
