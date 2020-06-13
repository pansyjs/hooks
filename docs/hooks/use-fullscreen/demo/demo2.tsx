/**
 * title: 懒加载
 * desc: 传入 function 来监听任意的 dom 节点
 */
import React from 'react';
import { Button } from 'antd';
// @ts-ignore
import { useFullscreen } from '@pansy/hooks';

export default () => {
  const [, { setFull }] = useFullscreen(() => document.body);
  return (
    <div style={{ background: 'white' }}>
      <Button onClick={setFull}>setFull</Button>
    </div>
  );
};
