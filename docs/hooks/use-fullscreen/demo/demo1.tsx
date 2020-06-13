/**
 * title: 基本用法
 * desc: 使用 ref 设置需要全屏的元素
 */
import React, { FC, useRef } from 'react';
// @ts-ignore
import { useFullscreen } from '@pansy/hooks';

const Example: FC = () => {
  const ref = useRef();
  const [isFullscreen, { setFull, exitFull, toggleFull }] = useFullscreen(ref);

  return (
    <div ref={ref} style={{ background: 'white' }}>
      <div style={{ marginBottom: 16 }}>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</div>
      <div>
        <button type="button" onClick={setFull}>setFull</button>
        <button type="button" onClick={exitFull}>exitFull</button>
        <button type="button" onClick={toggleFull}>toggle</button>
      </div>
    </div>
  );
};

export default Example;
