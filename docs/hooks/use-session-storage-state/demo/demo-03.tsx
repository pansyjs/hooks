/**
 * title: 使用 function updater 存储
 * desc: useSessionStorageState 里也可以用 function updater，就像 useState 那样。
 */

import React from 'react';
// @ts-ignore
import { useSessionStorageState } from '@pansy/hooks';

interface User {
  id: number;
  name: string;
  age: number;
}

export default function () {
  const [user, setUser] = useSessionStorageState('user', {
    id: 9234634791,
    name: 'Zhangsan',
    age: 33,
  } as User);

  return (
    <>
      <input
        style={{ width: 200 }}
        defaultValue={user.name}
        placeholder="input user name"
        onChange={(e) => {
          setUser((u: User) => ({ ...u, name: e.target.value }));
        }}
      />
    </>
  );
}
