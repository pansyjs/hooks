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

优雅的使用 Modal、Drawer 的 Hook。

## 代码示例

### 配合弹框组件使用

<code src="./demo/demo-01.tsx" />

### 配合抽屉组件使用

<code src="./demo/demo-02.tsx" />

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
