/**
 * title: 基础使用
 * desc: 3000ms后执行一次
 */

import React, { useState } from 'react';
// @ts-ignore
import { useTimeout } from '@pansy/hooks';

export default () => {
  const [state, setState] = useState(1);
  useTimeout(() => {
    setState(state + 1);
  }, 3000);

  return (
    <div>
      <p style={{ marginTop: 16 }}> {state} </p>
    </div>
  );
};
