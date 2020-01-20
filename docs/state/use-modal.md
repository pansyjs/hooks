---
title: useModal
order: 1
group:
  title: State
---

# useModal

## 示例

### 基本使用

<code src="../demos/use-modal/basic.tsx" />

### 设置初始值

<code src="../demos/use-modal/init-value.tsx" />

## API

```
const { visible, initValue, openModal, closeModal } = useControlledValue(params);
```

### 结果

|参数|説明|类型|
|------ |--------------|---------------|
|visible|控制Modal显示隐藏|`boolean`|
|initValue|需要传入的值|`any`|
|openModal|打开Modal的方法|`function`|
|closeModal|关闭Modal的方法|`function`|

### 参数

无

