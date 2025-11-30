---
title: Markdown 扩展功能
published: 2025-12-01
updated: 2025-12-01
description: '在 Mizuki 中了解更多关于 Markdown 的功能'
image: ''
tags: [演示, 例子, Markdown, mizuki]
category: 'Examples'
draft: false 
---

## GitHub 仓库卡片
你可以添加动态卡片，链接到 GitHub 仓库，在页面加载时，仓库信息会从 GitHub API 获取。

::github{repo="matsuzaka-yuki/Mizuki"}

使用代码创建一个 GitHub 仓库卡片 `::github{repo="matsuzaka-yuki/Mizuki"}`.

```markdown
::github{repo="matsuzaka-yuki/Mizuki"}
```

## 提示

支持以下类型的提示：`note` `tip` `important` `warning` `caution`

:::note
突出显示用户即使快速浏览也应注意的信息。
:::

:::tip
帮助用户更高效地完成任务的可选信息。
:::

:::important
用户成功所需的关键信息。
:::

:::warning
由于潜在风险，需要用户立即关注的关键内容。
:::

:::caution
操作可能带来的负面后果。
:::

### 基本语法

```markdown
:::note
突出显示用户即使快速浏览也应注意的信息。
:::

:::tip
帮助用户更高效学习的可选信息。
:::
```

### 自定义标题

提示的标题可以自定义。
:::note[我的自定义标题]
这是一个带有自定义标题的提示。
:::

```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的提示。
:::
```

### GitHub 语法

> [!TIP]
> [GitHub 语法](https://github.com/orgs/community/discussions/16925) 也受支持。

```
> [!NOTE]
> GitHub 语法也受支持。

> [!TIP]
> GitHub 语法也受支持。

```

### 剧透

您可以在文本中添加剧透内容。文本也支持 **Markdown** 语法。

内容：剧透[已隐藏 **ayyy**]！

```markdown
内容：剧透[已隐藏 **ayyy**]！
