---
title: Markdown教程
published: 2025-12-01
pinned: true
description: 一个简单的 Markdown 博客文章示例。
tags: [Markdown, 博客]
category: Examples
licenseName: "Unlicensed"
author: emn178
sourceLink: "https://github.com/emn178/markdown"
draft: false
---

# Markdown 教程

本 Markdown 示例演示了如何编写 Markdown 文件。本文档整合了核心语法和扩展（GMF）。

- [块元素](#block-elements)
	- [段落和换行符](#paragraphs-and-line-breaks)
	- [标题](#headers)
	- [引用块](#blockquotes)
	- [列表](#lists)
	- [代码块](#code-blocks)
	- [水平线](#horizo​​ntal-rules)
	- [表格](#table)
- [跨度元素](#span-elements)
	- [链接](#links)
	- [强调](#emphasis)
	- [代码](#code)
	- [图像](#images)
	- [删除线](#strikethrough)
	- [其他](#miscellaneous)
	- [自动链接](#automatic-links)
	- [反斜杠转义](#backslash-escapes)
	- [内联 HTML](#inline-html)

## 块级元素

### 段落和换行符

#### 段落

HTML 标签：`<p>`

一个或多个空行。（空行是指只包含**空格**或**制表符**的行。）

代码：

这将是

行内显示。

这是第二个段落。

预览：

---

这将是
行内显示。

这是第二个段落。

---

#### 换行符

HTML 标签：`<br />`

以**两个或多个空格**结束一行。

代码：

这将不会
以行内方式显示。

预览：

---

这将不会
以行内方式显示。

---

### 标题

Markdown 支持两种标题样式：Setext 和 atx。

#### Setext

HTML 标签：`<h1>`、`<h2>`

使用**等号 (=)**作为 `<h1>`，使用**短横线 (-)**作为 `<h2>`，可以添加下划线，数量不限。

代码：

这是一个 H1 标题

=============

这是一个 H2 标题

-------------

预览：

---

# 这是一个 H1 标题

## 这是 H2 标签

---

#### atx

HTML 标签：`<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`

在行首使用 1-6 个井号 (#)，分别对应 `<h1>` 到 `<h6>`。

代码：

# 这是 H1 标签

## 这是 H2 标签

###### 这是 H6 标签

预览：

---

# 这是 H1 标签

## 这是 H2 标签

###### 这是 H6 标签

---

您可以选择“关闭”atx 样式的标题。关闭标题的井号数量无需与打开标题的井号数量相同。

代码：

 #这是H1#
 ## 这是 H2 ##
 ### 这是 H3 ######

预览：

---

# 这是一个 H1

## 这是一个 H2

### 这是一个 H3

---

### 大引号

HTML 标签：`<块引用>`

Markdown 使用电子邮件样式 **>** 字符进行块引用。如果您对文本进行硬换行并在每行之前添加 >，则效果最好。

代码：

 > 这是一个包含两个段落的块引用。 Lorem ipsum dolor 坐 amet，
 > 连接脂肪精英。 Aliquam hendrerit mi posuere lectus。 
> 前庭 enim wisi、viverra nec、fringilla in、laoreet vitae、risus。 
>
 > Donec 坐 amet nisl。 Aliquam semper ipsum sat amet velit。暂停
 > id SEM consectetuer libero luctus adipiscing。

预览：

---

> 这是一个包含两个段落的块引用。 Lorem ipsum dolor 坐 amet，
> 连接脂肪精英。 Aliquam hendrerit mi posuere lectus。
> 前庭 enim wisi、viverra nec、fringilla in、laoreet vitae、risus。
>
> Donec 坐 amet nisl。 Aliquam semper ipsum sat amet velit。暂停
> id SEM consectetuer libero luctus adipiscing。

---
Markdown 允许你偷懒，只将 > 放在硬包装段落的第一行之前。

代码：

> 这是一个包含两个段落的块引用。 Lorem ipsum dolor 坐 amet，
连接脂肪精英。 Aliquam hendrerit mi posuere lectus。
前庭 enim wisi、viverra nec、fringilla in、laoreet vitae、risus。

> Donec 坐 amet nisl。 Aliquam semper ipsum sat amet velit。暂停
id sem consectetuer libero luctus adipiscing。

预览：

---

> 这是一个包含两个段落的块引用。 Lorem ipsum dolor 坐 amet，
> 连接脂肪精英。 Aliquam hendrerit mi posuere lectus。

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse

> id sem consectetuer libero luctus adipiscing.

---

引用块可以嵌套（即引用块嵌套引用），只需添加额外的 > 即可。

代码：

> 这是第一层引用。

>

>> 这是一个嵌套的引用块。

>
> 返回第一层。

预览：

---

> 这是第一层引用。

>
>> 这是一个嵌套的引用块。

>
> 返回第一层。

---

引用块可以包含其他 Markdown 元素，包括标题、列表和代码块。

代码：

> ## 这是一个标题。

>

> 1. 这是第一个列表项。
> 2. 这是第二个列表项。

>
> 以下是一些示例代码：

>
> return shell_exec("echo $input | $markdown_script");

预览：

---

> ## 这是一个标题。

>
> 1. 这是第一个列表项。
> 2. 这是第二个列表项。

>
> 以下是一些示例代码：

>
> return shell_exec("echo $input | $markdown_script");

---

### 列表

Markdown 支持有序列表（编号列表）和无序列表（项目符号列表）。

#### 无序列表

HTML 标签：`<ul>`

无序列表使用星号 (*)、加号 (+) 和连字符 (-)。

代码：

* 红色

* 绿色

* 蓝色

预览：

---

- 红色

- 绿色

- 蓝色

---

等价于：

代码：

+ 红色

+ 绿色

+ 蓝色

以及：

代码：

- 红色

- 绿色

- 蓝色

#### 有序列表

HTML 标签：`<ol>`

有序列表使用数字后跟句点：

代码：

1. Bird

2. McHale

3. Parish

预览：

---

1. Bird

2. McHale

3. Parish

---

可能会意外触发有序列表，例如：

代码：

1986. What a great season.

预览：

---

1986. What a great season.

---

您可以使用反斜杠 (\\) 转义句点：

代码：

1986 年。多么精彩的赛季。

预览：

---

1986 年。多么精彩的赛季。

---

#### 缩进

##### 引用块

要在列表项中插入引用块，引用块的 > 分隔符需要缩进：

代码：

* 包含引用块的列表项：

> 这是一个引用块

> 位于列表项内。

预览：

---

- 包含引用块的列表项：

> 这是一个引用块

> 位于列表项内。

---
##### 代码块

要在列表项中插入代码块，代码块需要缩进两次——**8 个空格** 或 **两个制表符**：

代码：

* 包含代码块的列表项：

<代码在此处>

预览：

---

- 包含代码块的列表项：

<代码在此处>

---

##### 嵌套列表

代码：

* A

* A1

* A2

* B

* C

预览：

---

- A

- A1

- A2

- B

- C

---

### 代码块

HTML 标签：`<pre>`

代码块的每一行至少缩进 **4 个空格** 或 **1 个制表符**。

代码：

这是一个普通段落：

这是一个代码块。

预览：

---

这是一个普通段落：

这是一个代码块。

---

代码块会一直持续到遇到未缩进的行（或文章末尾）。

在代码块中，**& 符号 (_)** 和尖括号 (< 和 >)** 会自动转换为 HTML 实体。

代码：

<div class="footer">

© 2004 Foo Corporation

</div>

预览：

---

<div class="footer">

© 2004 Foo Corporation

</div>

---

以下“代码块围栏”和“语法高亮”部分是扩展功能，您可以使用其他方式编写代码块。

#### 代码块围栏

只需将代码用 ```` 包裹起来（如下所示），就不需要缩进四个空格了。

代码：

以下是一个示例：

```

function test() {

console.log("注意这个函数前面的空行吗？");

}

```

预览：

---

以下是一个示例：

```

function test() {

console.log("注意这个函数前面的空行吗？");

}
```

---

#### 语法高亮

在您的代码块中，添加一个可选的语言标识符，我们将对其进行语法高亮显示（[支持的语言](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)）。

代码：

```ruby

require 'redcarpet'

markdown = Redcarpet.new("Hello World!")

puts markdown.to_html

```

预览：

---

```ruby
require 'redcarpet'

markdown = Redcarpet.new("Hello World!")

puts markdown.to_html

```

---

### 水平线

HTML 标签：`<hr />`

在一行中放置**三个或更多连字符 (-)、星号 (*) 或下划线 (\_)**。连字符或星号之间可以使用空格。

代码：

* * *

***

*****

- - -

---------------------------------------

___

预览：

---

---

---

---

---

---

---

---

---

### 表格

HTML 标签：`<table>`

这是一个扩展。

使用竖线 (|) 分隔列，使用短横线 (-) 分隔表头，并使用冒号 (:) 进行对齐。

外层的竖线 (|) 和对齐方式是可选的。每个单元格至少有 3 个分隔符，用于分隔表头。

代码：

```
| 左 | 中 | 右 |

|:-----|:------:|------:|

|aaa |bbb |ccc |

|ddd |eee |fff |

A | B

---|---

123|456

A |B

--|--

12|45

```

预览：

---

| 左 | 中 | 右 |

| :--- | :----: | ----: |

| aaa | bbb | ccc |

| ddd | eee | fff |

| A | B |

| --- | --- |

| 123 | 456 |

| A | B |

| --- | --- |

| 12 | 45 |

---

## Span 元素

### 链接

HTML 标签：`<a>`

Markdown 支持两种链接样式：行内链接和引用链接。

#### 行内链接

行内链接格式如下：`[链接文本](URL "标题")`

标题是可选的。

代码：

这是一个[示例](http://example.com/ "标题") 行内链接。

[此链接](http://example.net/) 没有 title 属性。

预览：

---

这是一个[示例](http://example.com/ "标题") 行内链接。

[此链接](http://example.net/) 没有 title 属性。

---

如果您引用的是同一服务器上的本地资源，则可以使用相对路径：

代码：

详情请参阅我的[关于](/about/)页面。

预览：

---

详情请参阅我的[关于](/about/)页面。

---

#### 参考

您可以预定义链接引用。格式如下：`[id]: URL "标题"`

标题也是可选的。引用链接时，格式如下：`[链接文本][id]`

代码：

[id]: http://example.com/ "此处填写可选标题"

这​​是一个[示例][id]引用式链接。

预览：

---

[id]: http://example.com/ "此处填写可选标题"

这​​是一个[示例][id]引用式链接。

---

具体如下：

- 包含链接标识符的方括号（**不区分大小写**，可选择从左侧缩进最多三个空格）；

- 后跟一个冒号；

- 后跟一个或多个空格（或制表符）；

- 后跟链接的 URL；

- 链接 URL 可以（可选）用尖括号括起来。 - （可选）链接的标题属性，标题可以用双引号或单引号括起来，也可以用圆括号括起来。

以下三种链接定义等效：

代码：

[foo]: http://example.com/ "此处填写可选标题"

[foo]: http://example.com/ '此处填写可选标题'

[foo]: http://example.com/ (此处填写可选标题)

[foo]: <http://example.com/> "此处填写可选标题"

使用空方括号，链接文本本身用作名称。

代码：

[Google]: http://google.com/

[Google][]

预览：

---

[Google]: http://google.com/

[Google][]

---

### 强调

HTML 标签：`<em>`、`<strong>`

Markdown 将**星号 (*)**和**下划线 (\_)**视为强调标记。 **单个分隔符**为 `<em>`；*双分隔符为 `<strong>`。

代码：

*单个星号*

_单个下划线_

**双星号**

__双下划线__

预览：

---

_单个星号_

_单个下划线_

**双星号**

**双下划线**

---

但是，如果用空格将 \* 或 \_ 括起来，它将被视为字面意义上的星号或下划线。

您可以使用反斜杠转义：

代码：

\*此文本被星号包围\*

预览：

---

\*此文本被星号包围\*

---

### 代码

HTML 标签：`<code>`

用反引号 (`) 将其包裹起来。

代码：

使用 `printf()` 函数。

预览：

---

使用 `printf()` 函数。

---

要在代码块内包含一个实际的反引号字符，可以使用**多个反引号**作为开始和结束分隔符：

代码：

``这里有一个实际的反引号 (`)。``

预览：

---

``这里有一个实际的反引号 (`)。``

---

代码块周围的反引号分隔符可以包含空格——开始和结束反引号之间各一个空格。这允许您在代码块的开头或结尾放置反引号字符：

代码：

代码块中的单个反引号：`` ` ``

代码块中以反引号分隔的字符串：`` `foo` ``

预览：

---

代码块中的单个反引号：`` ` ``

代码块中以反引号分隔的字符串：`` `foo` ``

---

### 图片

HTML 标签：`<img />`

Markdown 使用的图片语法旨在模仿链接的语法，允许两种样式：内联和引用。

#### 内联

内联图片语法如下：`![替代文本](URL "标题")`

标题是可选的。

代码：

![Alt text](/path/to/img.jpg)

![Alt text](/path/to/img.jpg "可选标题")

预览：

---

![Alt text](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp)

![Alt text](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "可选标题")

---
即：

- 一个感叹号：!；

- 后面跟着一对方括号，其中包含图像的 alt 属性文本；

- 后面跟着一对圆括号，其中包含图像的 URL 或路径，以及可选的 title 属性（用双引号或单引号括起来）。

#### 参考

参考风格的图片语法如下：`![Alt text][id]`

代码：

[img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "可选的 title 属性"

![Alt text][img id]

预览：

---

[img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "可选的 title 属性"

![Alt text][img id]

---

### 删除线

HTML 标签：`<del>`

这是一个扩展。

GFM 为删除线文本添加了语法。

代码：

```

~~文本错误。~~

```

预览：

---

~~文本错误。~~

---

## 其他

### 自动链接

Markdown 支持一种快捷方式，可以为 URL 和电子邮件地址创建“自动”链接：只需用尖括号将 URL 或电子邮件地址括起来即可。

代码：

<http://example.com/>

<address@example.com>

预览：

---

<http://example.com/>

<address@example.com>

---

GFM 将自动链接标准 URL。

代码：

```

https://github.com/emn178/markdown

```

预览：

---

https://github.com/emn178/markdown

---

### 反斜杠转义

Markdown 允许您使用反斜杠转义来生成字面字符，这些字符在 Markdown 的格式化语法中通常具有特殊含义。

代码：

*字面星号*

预览：

---

*字面星号*

---

Markdown 为以下字符提供了反斜杠转义：

代码：

\ 反斜杠

` 反引号

* 星号

_ 下划线

{} 花括号

[] 方括号

() 圆括号

# 井号

+ 加号

- 减号（连字符）

. 点

! 感叹号

## 内联 HTML

对于任何 Markdown 语法未涵盖的标记，您只需使用 HTML 本身即可。无需添加前缀或分隔符来表明您正在从 Markdown 切换到 HTML；只需使用标签即可。

代码：

这是一个普通段落。

<table>

<tr>

<td>Foo</td>

</tr>

</table>

这是另一个普通段落。

预览：

---

这是一个普通段落。

<table>

<tr>

<td>Foo</td>

</tr>

</table>

这是另一个普通段落。

---

请注意，Markdown 格式语法**不会在块级 HTML 标签内处理**。

与块级 HTML 标签不同，Markdown 语法**会在 span 标签内处理**。

代码：

<span>**有效**</span>

<div>

**无效**

</div>

预览：

---

<span>**有效**</span>

<div>

**无效**

</div>

***