---
title: Simple Guides for Mizuki
published: 2024-04-01
description: "How to use this blog template."
image: "./cover.png"
tags: ["Mizuki", "Blogging", "Customization"]
category: Guides
draft: false
---



本博客模板使用 [Astro](https://astro.build/) 构建。本指南中未提及的内容，您可以在 [Astro 文档](https://docs.astro.build/) 中找到答案。

## 文章前置信息

```yaml
---

title: 我的第一篇博客文章

published: 2023-09-09

description: 这是我新 Astro 博客的第一篇文章。

image: ./cover.jpg

tags: [Foo, Bar]

category: 前端

draft: false

---

```

| 属性 | 描述 |

|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

| `title` | 文章标题。 |

| `published` | 文章发布日期。 |

| `pinned` | 此文章是否置顶。 |

| `description` | 文章的简短描述。显示在首页。 |

| `image` | 文章封面图片的路径。<br/>1. 以 `http://` 或 `https://` 开头：使用网页图片<br/>2. 以 `/` 开头：使用 `public` 目录中的图片<br/>3. 不使用任何前缀：相对于 Markdown 文件 |

| `tags` | 文章的标签。 |

| `category` | 文章的分类。 |

| `licenseName` | 文章内容的许可名称。 |

| `author` | 文章的作者。 |

| `sourceLink` | 文章内容的来源链接或参考资料。 |

| `draft` | 如果这篇文章仍是草稿，则不会显示。 |

## 文章文件存放位置

您的文章文件应放置在 `src/content/posts/` 目录中。您还可以创建子目录，以便更好地组织您的文章和资源。

```
src/content/posts/

├── post-1.md
└── post-2/
  ├── cover.png
  └── index.md

```