/**
 * title: 将 state 持久化在 sessionStorage 中
 * desc: 刷新页面后，可以看到输入框中的内容被从 sessionStorage 中恢复了。
 */
import React from 'react';
// @ts-ignore
import { useSessionStorageState } from '@pansy/hooks';

export default function () {
  const [message, setMessage] = useSessionStorageState('user-message', 'Hello~');
  return (
    <>
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="Please enter some words..."
        style={{ width: 200, marginRight: 16 }}
      />
      <button
        type="button"
        onClick={() => {
          setMessage();
        }}
      >
        Reset
      </button>
    </>
  );
}
