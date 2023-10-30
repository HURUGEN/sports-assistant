/**
 * 分秒组件接受属性
 */
type TMinSPickerProps = {
  /** 绑定值 */
  value: number[],
  /** 切换事件 */
  onChange: (val: number[], timeValue: number[])=> void,
  /** 没有选择时，展示提示内容 */
  placeholder?: string,
  /** 样式类名称 */
  className?: string,
  /** 可使用选择范围 */
  useRange?: [ number, number ],
  
};

export {
  TMinSPickerProps,
};
