---
title: 小米IoT Vela 快应用开发零基础指南
published: 2025-12-18
pinned: true
description: 小米手环 Vela 快应用开发零基础指南
tags: [小米手环9Pro,澎湃3手环端, Vela开发]
category: XiaomiBands
licenseName: "Unlicensed"
author: lladlam
draft: false
---
# 小米IoT Vela 快应用开发零基础指南

**作者：Manus AI查找总结 lladlam编写**

## 零、写给新手的话：什么是Vela快应用？

欢迎来到小米IoT Vela快应用的世界！如果你是零基础，不用担心，我们将用最简单、最直白的方式，带你一步步了解和开发这种应用。

**Vela快应用** 是小米公司为 **智能穿戴设备**（如手表、手环）和 **IoT设备** 开发的一种 **轻量级应用**。你可以把它想象成一个“迷你App”，它体积小、加载快，非常适合在内存和处理能力有限的设备上运行。

| 特点 | 解释（为什么对新手友好） |
| --- | --- |
| **轻量化** | 应用体积小，无需复杂安装，开发和调试速度快。 |
| **跨平台** | 一次开发，可以在多种小米设备上运行（如手表、智能音箱等）。 |
| **前端范式** | 使用 **JavaScript**、**CSS** 和 **类似HTML的模板** 来开发，如果你有任何网页开发基础，上手会非常快。 |
| **高性能** | 框架底层做了优化，应用运行流畅，能达到接近原生App的体验。 |

---

## 一、快速入门：从零开始搭建你的第一个应用

### 1.1 安装环境（AIoT-IDE）

开发Vela快应用，你需要一个官方提供的集成开发环境（IDE）：**AIoT-IDE**。

- **作用：** 它是你编写代码、运行模拟器、调试应用和最终打包发布的一站式工具。

- **如何获取：** 请访问小米IoT开发者平台下载最新版本的AIoT-IDE，并根据你的操作系统（Windows/macOS/Linux）进行安装。

### 1.2 创建你的第一个项目

在AIoT-IDE中，选择“新建项目”，选择“Vela JS 应用”模板。

项目创建后，你会看到一个基本的项目结构：

| 文件/目录 | 作用（新手必知） |
| --- | --- |
| `src/` | 存放你的所有页面代码和组件代码。 |
| `src/app.ux` | **应用入口文件**，定义应用的全局逻辑和生命周期。 |
| `src/pages/` | 存放你的所有页面文件（每个页面一个文件夹）。 |
| `manifest.json` | **项目配置文件**，定义应用的名称、图标、页面路径等重要信息。 |
| `package.json` | Node.js项目配置文件，记录依赖等信息。 |

### 1.3 编写页面UI（`.ux` 文件详解）

Vela快应用的核心是 `.ux` 文件，它是一个单文件组件，将页面的结构、样式和逻辑放在一起。

一个 `.ux` 文件由三部分组成：

#### 1.3.1 `<template>` (页面结构 - 类似HTML)

这部分定义了页面的结构和内容，使用Vela提供的内置组件（如 `<text>`、`<button>`、`<list>` 等）。

**新手示例：一个简单的欢迎页面**

```html
<!-- src/pages/index/index.ux -->
<template>
  <div class="container">
    <!-- <text> 组件用于显示文本 -->
    <text class="title">欢迎使用Vela快应用！</text>
    <!-- <button> 组件用于用户交互 -->
    <button onclick="goToNextPage">开始体验</button>
  </div>
</template>
```

#### 1.3.2 `<style>` (页面样式 - 类似CSS)

这部分定义了页面的外观，使用类似CSS的语法来设置组件的颜色、大小、布局等。

**新手示例：设置居中和颜色**

```css
<style>
  /* 页面根容器，使用 flex 布局实现居中 */
  .container {
    flex-direction: column; /* 垂直排列 */
    justify-content: center; /* 垂直居中 */
    align-items: center; /* 水平居中 */
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
  }
  .title {
    color: #333333;
    font-size: 32px; /* 字体大小 */
    margin-bottom: 40px;
  }
</style>
```

#### 1.3.3 `<script>` (页面逻辑 - JavaScript)

这部分定义了页面的数据、方法和生命周期函数。它是页面的“大脑”。

**新手示例：定义数据和方法**

```javascript
<script>
  export default {
    // 页面数据，任何改变都会自动更新到 <template>
    data: {
      message: '点击按钮，进入下一页'
    },
    // 页面方法，用于响应用户操作
    goToNextPage() {
      // 页面切换逻辑，使用 router.push()
      this.$router.push({
        uri: '/pages/detail/detail' // 假设有 detail 页面
      });
    },
    // 页面生命周期：页面创建时执行
    onInit() {
      console.log('Index 页面已创建');
    }
  }
</script>
```

---

## 二、核心功能：让应用动起来

### 2.1 模板语法：数据绑定与控制流

Vela快应用使用 **MVVM（Model-View-ViewModel）** 模式，核心是 **数据绑定**。

#### 2.1.1 数据绑定（`{{ }}`）

使用双大括号 `{{ }}` 将 `<script>` 中的 `data` 绑定到 `<template>` 中。

**新手示例：实时显示时间**

```html
<template>
  <div>
    <text>当前时间：{{ currentTime }}</text>
  </div>
</template>
<script>
  export default {
    data: {
      currentTime: new Date().toLocaleTimeString()
    },
    onInit() {
      // 每秒更新一次数据，页面会自动刷新
      setInterval(() => {
        this.currentTime = new Date().toLocaleTimeString();
      }, 1000);
    }
  }
</script>
```

#### 2.1.2 列表渲染（`for`）

使用 `for` 属性来循环渲染一个列表。

**新手示例：渲染一个待办事项列表**

```html
<template>
  <list>
    <!-- item 是当前循环项，index 是索引 -->
    <list-item for="{{ (item, index) in todos }}">
      <text>{{ index + 1 }}. {{ item.text }}</text>
    </list-item>
  </list>
</template>
<script>
  export default {
    data: {
      todos: [
        { text: '学习Vela基础' },
        { text: '尝试运行模拟器' },
        { text: '完成第一个App' }
      ]
    }
  }
</script>
```

#### 2.1.3 条件渲染（`if` / `elif` / `else`）

使用 `if` 属性来根据条件显示或隐藏组件。

**新手示例：根据状态显示不同内容**

```html
<template>
  <div>
    <text if="{{ isLoading }}">数据加载中...</text>
    <text elif="{{ hasError }}">加载失败，请重试。</text>
    <text else>数据加载完成！</text>
  </div>
</template>
<script>
  export default {
    data: {
      isLoading: true,
      hasError: false
    },
    onInit() {
      // 模拟数据加载
      setTimeout(() => {
        this.isLoading = false;
        // this.hasError = true; // 模拟失败
      }, 2000);
    }
  }
</script>
```

### 2.2 添加交互：事件处理

通过在组件上添加 `on...` 属性来监听用户操作，并调用 `<script>` 中的方法。

**新手示例：计数器应用（实战案例）**

这是最经典的入门案例，演示了数据绑定和事件处理的配合。

```html
<template>
  <div class="container">
    <!-- 1. 显示数据：使用 {{ count }} 绑定数据 -->
    <text class="count-text">{{ count }}</text>
    
    <!-- 2. 绑定事件：点击按钮时调用 increase 方法 -->
    <button onclick="increase" class="btn">增加</button>
    
    <!-- 3. 绑定事件：点击按钮时调用 decrease 方法 -->
    <button onclick="decrease" class="btn">减少</button>
  </div>
</template>

<script>
  export default {
    data: {
      count: 0 // 定义初始数据
    },
    increase() {
      // 修改数据，页面会自动更新
      this.count++;
    },
    decrease() {
      this.count--;
    }
  }
</script>

<style>
  .container { flex-direction: column; align-items: center; justify-content: center; }
  .count-text { font-size: 60px; margin-bottom: 30px; }
  .btn { width: 200px; margin-bottom: 10px; }
</style>
```

### 2.3 页面切换与生命周期

#### 2.3.1 页面切换（路由）

Vela使用 `$router` 对象进行页面导航。

| 方法 | 作用 | 类似网页开发中的... |
| --- | --- | --- |
| `$router.push(options)` | 跳转到新页面，并把当前页面压入栈中（可以返回）。 | `window.location.href` |
| `$router.replace(options)` | 跳转到新页面，并替换掉当前页面（不能返回）。 | `window.location.replace` |
| `$router.back()` | 返回上一个页面。 | 浏览器后退按钮 |

**新手示例：跳转到设置页面**

```javascript
// 在某个方法中调用
goToSettings() {
  this.$router.push({
    uri: '/pages/settings/settings'
  });
}
```

#### 2.3.2 页面生命周期

页面从创建到销毁会经历一系列阶段，你可以通过定义特定的方法来在这些阶段执行代码。

| 生命周期方法 | 触发时机 | 作用（新手必知） |
| --- | --- | --- |
| `onInit()` | 页面实例创建后（只执行一次）。 | **初始化数据、设置定时器**。 |
| `onReady()` | 页面初次渲染完成。 | **获取组件尺寸、执行复杂操作**。 |
| `onShow()` | 页面显示时（包括从后台切换到前台）。 | **刷新页面数据、恢复动画**。 |
| `onHide()` | 页面隐藏时（切换到后台或跳转到其他页面）。 | **暂停动画、清除定时器**。 |
| `onDestroy()` | 页面实例被销毁时。 | **释放资源、避免内存泄漏**。 |

---

## 三、进阶功能与最佳实践

### 3.1 项目配置（`manifest.json`）

`manifest.json` 是应用的“身份证”，它定义了应用的全局配置。

| 字段 | 作用 | 新手注意事项 |
| --- | --- | --- |
| `package` | 应用的唯一标识符（如 `com.mi.example`）。 | 必须唯一，用于发布。 |
| `name` | 应用的名称。 | 显示在设备上的应用名称。 |
| `versionName` | 版本名称（如 `1.0.0`）。 | 给用户看的版本号。 |
| `versionCode` | 版本号（整数，如 `100`）。 | 用于版本更新判断，每次发布必须递增。 |
| `minAPIVersion` | 兼容的最低API版本。 | 决定你的应用能在哪些设备上运行。 |
| `pages` | 页面路径列表。 | 必须在这里注册所有页面。 |

### 3.2 多屏适配（为手表、手环设计）

Vela快应用主要运行在不同尺寸的屏幕上，因此 **多屏适配** 至关重要。

- **原理：** 框架支持不同形状（圆形、方形）、不同分辨率的屏幕自适应。

- **核心：** 开发者应使用 **相对单位**（如百分比 `%`）和 **Flex布局** 来设计界面，而不是写死像素值。

- **工具：** AIoT-IDE提供 **多屏UI模拟器**，让你能实时预览应用在不同设备上的效果。

**新手建议：** 始终将内容放在屏幕中央，并确保关键信息不会被圆形屏幕的角落遮挡。

### 3.3 性能优化（让应用更快更省）

由于设备资源有限，优化是必须的。

#### 3.3.1 内存优化

- **及时释放资源：** 在 `onDestroy()` 或 `onHide()` 中，清除不再使用的定时器、监听器等。

- **避免大数据量：** 尽量不要在 `data` 中存放巨大的数组或图片数据。

- **图片优化：** 使用合适尺寸的图片，避免在代码中进行大量的图片缩放操作。

#### 3.3.2 启动时延优化

- **减少首屏数据量：** 确保应用启动时加载的数据和组件尽可能少。

- **异步加载：** 将非必要的组件或数据请求延迟到页面加载完成后再进行。

- **代码分割：** 仅加载当前页面需要的代码，而不是整个应用的代码。

### 3.4 发布流程（让你的应用上线）

应用开发完成后，需要经过以下步骤才能发布：

1. **打包项目：** 在AIoT-IDE中，使用打包功能生成应用安装包。

1. **验收标准：** 提交应用前，必须满足一系列技术和内容要求（如功能完整性、界面美观度、性能指标等）。

1. **版本说明：** 每次提交新版本时，需要清晰地说明版本更新的内容，特别是API Level的兼容性。

---

## 四、总结：你的Vela开发路线图

作为零基础新手，你的学习路线可以总结为：

| 步骤 | 目标 | 关键知识点 |
| --- | --- | --- |
| **第一步：环境准备** | 拥有一个可运行的开发环境。 | 安装AIoT-IDE，创建项目。 |
| **第二步：页面骨架** | 掌握 `.ux` 文件的三部分结构。 | `<template>`、`<style>`、`<script>` 的作用。 |
| **第三步：数据驱动** | 掌握如何显示和修改数据。 | `data` 定义、`{{ }}` 绑定、`for` 循环、`if` 条件。 |
| **第四步：用户交互** | 掌握如何响应用户操作。 | `onclick` 事件绑定、方法调用。 |
| **第五步：页面跳转** | 掌握应用的多页面结构。 | `$router.push`、`onInit` / `onShow` 生命周期。 |
| **第六步：优化与发布** | 了解如何让应用更稳定、更流畅。 | 内存优化、多屏适配、`manifest.json` 配置。 |

现在，你已经掌握了小米IoT Vela快应用开发的所有核心知识点。从最简单的计数器开始，不断尝试，你很快就能开发出自己的智能穿戴应用！

