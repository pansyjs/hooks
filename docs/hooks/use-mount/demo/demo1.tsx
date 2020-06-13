/**
 * title: 基本用法
 * desc: 在组件首次渲染时，执行方法。
 */

import React from 'react';
import { Button, message } from 'antd';
import { useToggle, useMount } from '@pansy/hooks';

const MyComponent = () => {
  useMount(
    () => {
      message.info('mount');
    }
  );

  return (<div>Hello World</div>)
}

export default () => {
  const [state, { toggle }] = useToggle(false);

  return (
    <div>
      <Button onClick={() => toggle()}>{state ? 'unmount' : 'mount'}</Button>
      {state && <MyComponent />}
    </div>
  );
};
