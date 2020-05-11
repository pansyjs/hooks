---
title: usePosition
nav:
  title: Hooks
  path: /hooks
group:
  title: State
  path: /state
  order: 11
---

# usePosition

用于获取浏览器地理位置

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
} = usePosition(
  watch?: boolean,
  options?: {
    enableHighAccuracy?: boolean;
    maximumAge?: number;
    timeout?: number;
  }
);
```

### Result

|参数|説明|类型|
|------ |--------------|---------------|
|longitude|经度|number|
|latitude|纬度|number|
|accuracy|纬经度的精度|number|
|timestamp|获取地理位置信息的时间|number|
|error|异常信息|string \| null|

### Params

| 参数    | 说明                                         | 类型                   | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| watch | 是否开启监听  | boolean \| undefined | false      |
| options | 配置参数  | object | `{ enableHighAccuracy: false, timeout: Infinity, maximumAge: 0 }`   |

#### options

| 参数    | 说明                                         | 类型                   |
|---------|----------------------------------------------|------------------------
| enableHighAccuracy | 是否要求高精度的地理信息  | boolean |
| timeout | 获取信息的超时限制  | number |
| maximumAge | 对地理信息进行缓存的时间  | number |
