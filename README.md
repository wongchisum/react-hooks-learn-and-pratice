# React Hooks学习实践

## 项目说明

使用vite脚手架创建项目，主要使用React Hooks与Typescript。

- 通过简单脚本实现约定式路由的创建（不支持嵌套，不支持监听更新，仅在prestart生命周期进行解析，解析src/pages表层并生成路由配置和pages文件夹的模块导出）。

- 通过简单脚本实现命令行创建页面组件（简单逻辑判断和参数处理，生成相应页面结构）。

应用TS和React Hooks进行一些自定义Hooks的学习和实现。hooks主要来源于**usehooks**以及**ahooks**

## 项目运行

```
yarn // 安装依赖

yarn start // 安装项目
```

## 清单记录

目前在学习和实现的Hooks：

- [x] **useToggle**
- [x] **useAsync**
- [x] **useEventListener**
- [ ] useMount
- [ ] useUnmount
  
  

路由:**/use-toggle-demo**，对应**useToggle**

功能：实现两个状态的来回切换，适用于开关、显隐的状态管理。



路由：**/use-async-demo**,对应**useAsync**

功能：用于控制异步请求的状态展示，包含加载状态控制(loading),请求结果控制(data),异常控制(error)

待办：手动触发请求的处理，类型定义的优化



路由：**/use-event-listener-demo**,对应**UseEventListener**

功能：用于处理dom元素的事件绑定



路由：**/use-mount-demo**,对应**useMount**

功能：用于在组件挂载之后进行初始化操作



路由：**/use-unmount-demo**,对应**useUnmount**

功能：用于在组件卸载时进行初始化操作
