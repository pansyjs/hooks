/**
 * title: 基本用法
 * desc: 在组件卸载时，执行方法。
 */
import React from 'react';
import { Button, message } from 'antd';
// @ts-ignore
import { useToggle, useUnmount } from '@pansy/hooks';

const MyComponent = () => {
  useUnmount(
    () => {
      message.info('unmount');
    }
  );

  return (<div>Hello World</div>)
}

export default () => {
  const [state, { toggle }] = useToggle(true);

  return (
    <div>
      <Button onClick={() => toggle()}>{state ? 'unmount' : 'mount'}</Button>
      {state && <MyComponent />}
    </div>
  );
};
