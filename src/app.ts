import { PropsWithChildren } from 'react'
import Taro, { useLaunch } from '@tarojs/taro'
import './app.less'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
  })

  Taro.showShareMenu({
    withShareTicket: true,
    showShareItems: [ 'shareAppMessage', 'shareTimeLine' ],
  })
  const page = Taro.getCurrentInstance().page;
  if( page && !page.onShareAppMessage ){
    page.onShareAppMessage = ()=>{
      return { title: '运动助手' };
    }
  }

  // children 是将要会渲染的页面
  return children
}

export default App
