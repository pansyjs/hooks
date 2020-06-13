---
order: 1
nav:
  title: 指南
  order: 1
---

# 快速上手

@pansy/hooks 是一个 React Hooks 库，致力提供常用且高质量的 Hooks

## 安装

```
# npm 安装
npm install @pansy/hooks --save

# yarn 安装
yarn add @pansy/hooks
```

## 使用

```
import React from "react";
import { useToggle } from "ahooks";

export default () => {
  const [ state, { toggle } ] = useToggle();
  return (
    <div>
      <p>Current Boolean: {String(state)}</p>
      <p>
        <button onClick={() => toggle()}>Toggle</button>
      </p>
    </div>
  );
};
```

## 按需加载

可以通过以下的写法来按需加载 Hooks。

```ts
import useToggle from '@pansy/hooks/es/useToggle';
```

如果你使用了 babel，那么可以使用 babel-plugin-import 来进行按需加载，加入这个插件后。

```ts
import { useToggle } from '@pansy/hooks';
```

插件会帮你转换成 `@pansy/hooks/es/useToggle` 的写法。
