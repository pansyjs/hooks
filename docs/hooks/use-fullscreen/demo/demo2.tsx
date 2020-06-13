/**
 * title: 懒加载
 * desc: 传入 function 来监听任意的 dom 节点
 */
import React from 'react';
import { useFullscreen } from '@pansy/hooks';

export default () => {
  const [, { setFull }] = useFullscreen(() => document.getElementById('fullscreen-img'));
  return (
    <div style={{ background: 'white' }}>
      <div style={{ marginBottom: 16 }}>
        <img id="fullscreen-img" src={img} style={{ width: 320 }} alt="" />
      </div>
      <button type="button" onClick={setFull}>setFull</button>
    </div>
  );
};
