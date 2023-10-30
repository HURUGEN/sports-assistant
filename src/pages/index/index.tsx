import { View, Image, Input, ScrollView } from '@tarojs/components';
import { selectIcon, resultIcon, changeIcon, inputIcon } from '@/utils/imageUrl';
import MinSPicker from '@/components/MinSPicker';
import './index.less';
import usePage from './usePage';

export default function Index() {
  const { speed, speedKm, type, speedText, speedsInfoList, selectShowIndex, speedOnchange, speedKmOnchange, typeOnchange, clickResultFn } = usePage()

  return (
    <View className='index_main'>
      <View className='title_view'>配速时速转化工具</View>
      <View className='head_view'>
        {
          type === 'speed' && (
            <View className='select_card_view' hoverClass='hover-tap'>
              <View className='select_text'>1km配速</View>
              <View className='input_show'></View>
              <MinSPicker
                className='select_box'
                placeholder='请选择每km配速时长'
                useRange={[ 1, 20 ]}
                value={speed}
                onChange={speedOnchange}
              />
              <Image className='icon_view' src={selectIcon} />
            </View>
          )
        }
        {
          type === 'speedKm' && (
            <View className='select_card_view'>
              <View className='select_text'>时速(km/h)</View>
              <View className='input_show'></View>
              <Input
                className='select_box'
                type='digit'
                placeholder='请输入时速'
                maxlength={5}
                value={speedKm}
                onInput={speedKmOnchange}
              />
              <Image className='icon_view' src={inputIcon} />
            </View>
          )
        }
        
        <View hoverClass='hover-tap' onClick={typeOnchange}>
          <Image className='update_icon' src={changeIcon} ></Image>
        </View>
        {
          type === 'speed' && (
            <View className='select_card_view result_view'>
              <View className='select_text'>时速</View>
              <View className='input_show'>{speedKm}/km</View>
              <Image className='icon_view' src={resultIcon} />
            </View>
          )
        }
        {
          type === 'speedKm' && (
            <View className='select_card_view result_view'>
              <View className='select_text'>1km配速</View>
              <View className='input_show'>{speedText}</View>
              <Image className='icon_view' src={resultIcon} />
            </View>
          )
        }
      </View>
      <View className='two_title'>以下距离配速展示</View>
      {/* 展示内容 */}
      <View className='other_result_view'>
        <ScrollView
          className='content_view'
          scrollY
          enableFlex
          scrollWithAnimation
          showScrollbar={false}
        >
          {
            speedsInfoList.map(({title, content}, index)=>(
              <View className={`other_item_view ${index === selectShowIndex?'cur':''}`} key={title} onClick={()=>clickResultFn(index)}>
                <View className='other_item_title_view'>{title}</View>
                <View className='other_item_text_view'>{content}</View>
              </View>
            ))
          }
          {
            !speedsInfoList.length && <View className='no_data'>暂未计算出配速信息～</View>
          }
        </ScrollView>
      </View>
    </View>
  )
}
