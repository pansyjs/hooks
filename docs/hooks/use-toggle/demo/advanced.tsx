/**
 * title: 进阶使用
 * desc: 接受两个参数，在参数间进行切换。
 */
import React from 'react';
import { Button } from 'antd';
import { useToggle } from '@pansy/hooks';

export default () => {
  const { state, toggle, setLeft, setRight } = useToggle('Hello', 'World');

  return (
    <div>
      <p>{state}</p>
      <p>
        <Button type="default" onClick={() => toggle()}>
          Toggle
        </Button>
        <Button type="danger" onClick={() => toggle('Hello')} style={{ margin: '0 16px' }}>
          Toggle Hello
        </Button>
        <Button type="primary" onClick={() => toggle('World')}>
          Toggle World
        </Button>
        <Button type="danger" onClick={setLeft} style={{ margin: '0 16px' }}>
          Set Hello
        </Button>
        <Button type="primary" onClick={setRight}>
          Set World
        </Button>
      </p>
    </div>
  );
};
