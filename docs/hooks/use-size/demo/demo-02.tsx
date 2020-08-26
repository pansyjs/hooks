/**
 * title: 传入 DOM 元素
 * desc: 传入 function 并返回一个 dom 元素。
 */

import React from 'react';
// @ts-ignore
import { useSize } from '@pansy/hooks';

export default () => {
  const dom = document.querySelector('body');
  const size = useSize(dom);
  return (
    <div>
      try to resize the preview window <br />
      dimensions -- width: {size.width} px, height: {size.height} px
    </div>
  );
};
