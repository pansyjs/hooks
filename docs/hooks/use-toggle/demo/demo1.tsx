/**
 * title: 默认用法
 * desc: 默认切换布尔值状态，也可以接收一个参数作为新的值
 */
import React from 'react';
import { Button, Switch } from 'antd';
// @ts-ignore
import { useToggle } from '@pansy/hooks';

export default () => {
  const [state, { toggle }] = useToggle();

  return (
    <div>
      <p>
        <Switch checked={state} onChange={toggle} />
      </p>
      <p>
        <Button type="default" onClick={() => toggle()}>
          Toggle
        </Button>
        <Button type="dashed" onClick={() => toggle(false)} style={{ margin: '0 16px' }}>
          Toggle False
        </Button>
        <Button type="primary" onClick={() => toggle(true)}>
          Toggle True
        </Button>
      </p>
    </div>
  );
};
