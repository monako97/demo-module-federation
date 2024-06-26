import * as React from 'react';

/** API
 * @since 1.0.0
 * @author monako97 <poi.nyaa@qq.com>
 */
export interface CardProps {
  /** 标题
   * @default 默认值
   * @since 1.1.0 <br />表示这个属性在 1.1.0 新增
   */
  title?: React.ReactNode;
  /** 内容 */
  children?: React.ReactNode;
}

function Card(props: CardProps) {
  return (
    <div>
      <h4>{props.title}</h4>
      <div>{props.children}</div>
    </div>
  );
}

export default Card;
