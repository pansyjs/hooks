/**
 * title: 基本用法
 * desc: 切换状态
 */
import React from 'react';
import { Button, Switch } from 'antd';
import { useBoolean } from '@pansy/hooks';

export default () => {
  const { state, toggle } = useBoolean();

  return (
    <div>
      <p>
        <Switch checked={state} onChange={toggle} />
      </p>
      <p>
        <Button type="default" onClick={() => toggle()}>
          Toggle
        </Button>
        <Button type="danger" onClick={() => toggle(false)} style={{ margin: '0 16px' }}>
          Toggle False
        </Button>
        <Button type="primary" onClick={() => toggle(true)}>
          Toggle True
        </Button>
      </p>
    </div>
  );
};
