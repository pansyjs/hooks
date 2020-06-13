---
title: usePersistFn
nav:
  title: Hooks
  path: /hooks
group:
  title: Advanced
  path: /advanced
---

# usePersistFn

持久化 function 的 Hook

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx" />

## API

```typescript
type noop = (...args: any[]) => any;

const fn = usePersistFn<T extends noop>(
  fn: T,
);
```

### Result

| 参数 | 说明                      | 类型                      |
|------|---------------------------|---------------------------|
| fn   | 引用地址永远不会变化的 fn | `(...args: any[]) => any` |

### Params

| 参数           | 说明             | 类型                      | 默认值 |
|----------------|------------------|---------------------------|--------|
| fn             | 需要持久化的函数 | `(...args: any[]) => any` | -      |
