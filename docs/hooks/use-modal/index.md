---
title: useModal
nav:
  title: Hooks
  path: /hooks
group:
  title: State
  path: /state
  order: 11
---

# useModal

优雅的使用 Modal 的 Hook。

## 代码示例

### 基本用法

<code src="./demo/simple.tsx" />

## API

```javascript
const {
  visible,
  initValue,
  openModal,
  closeModal
} = useModal();
```

### Result

|参数|説明|类型|
|------ |--------------|---------------|
|visible|控制Modal显示隐藏|boolean|
|initValue|需要传入Modal的值|any|
|openModal|打开Modal的方法|(initValue: any) => void|
|closeModal|关闭Modal的方法|() => void|

### Params

无
