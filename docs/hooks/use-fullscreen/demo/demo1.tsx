/**
 * title: 基本用法
 * desc: 使用 ref 设置需要全屏的元素
 */
import React, { FC, useRef } from 'react';
import { Button } from 'antd';
// @ts-ignore
import { useFullscreen } from '@pansy/hooks';

const Example: FC = () => {
  const ref = useRef();
  const [isFullscreen, { setFull, exitFull, toggleFull }] = useFullscreen(ref);

  return (
    <div ref={ref} style={{ background: 'white' }}>
      <div style={{ marginBottom: 16 }}>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</div>
      <div>
        <Button onClick={setFull}>setFull</Button>
        <Button onClick={exitFull} style={{ margin: '0 8px' }}>exitFull</Button>
        <Button onClick={toggleFull}>toggle</Button>
      </div>
    </div>
  );
};

export default Example;
