---
title: 将博客从 Hexo 迁移到 Astro
published: 2026-07-06
updated: 2026-07-07
pinned: false
description: 一次把博客从 Hexo 迁移到 Astro 的记录。
tags: [博客, Astro, Hexo]
category: 博客
draft: false
# image: ./images/hexo-to-astro.avif
---

这几天把博客迁移到了 Astro，界面整体焕新了许多，下面就是迁移的过程。

## 为什么决定迁移

其实迁移到 Astro 最主要的原因就是主题比较好看。

前段时间在网上刷到了 Astro 这个博客框架，所以去了解了一下。

去 GitHub 上搜索了一下主题，发现主题外观挺不错，所以便下定决心要迁移了。

## Hexo 的缺点

1. 速度慢

   Hexo 需要手动构建完才能上传，构建时间很久，而且都是在本地进行的。未来文章多了这点就会更加明显。

   也考虑过换 Hugo，但 Hugo 的主题少，而且都是比较简洁的风格，个人觉得不好看。
2. 需要备份源文件

   Hexo 上传到 GitHub 的是构建好的静态文件，如果误删了本地的源文件就要从头开始。

   我就有一次误删了，幸好内容比较少，很快就恢复了。

   并且这也导致不能随时随地写作。

   解决的方法就是再建一个仓库存放源文件，但这导致我每次都要提交两次。这也无法解决第二个问题：必须克隆仓库到本地并配置好 Git，因为写作完需要执行一些部署指令。

## Astro 的其他优点

深入探索后又发现了其他许多优点。

1. **配置方便**：只需要直接克隆主题仓库然后直接安装依赖就可以用了，不需要安装完框架再导入主题。
2. **本地预览**：虽然 Hexo 也有，但 Astro 的是实时更新的，不需要手动构建。（有点类似 VitePress）
3. **不需要手动构建**：构建过程是 Cloudflare Pages 自动执行的，只需要上传就完事。同样也解决了 Hexo 速度慢和需要备份源文件的问题。（同样类似 VitePress）

## 迁移过程

### 安装

找一个想要的主题，将 Code 里的仓库链接复制一下。

找到一个用于存放博客文件夹的位置。右键，Open Git Bash here，`git clone 仓库链接`，等待克隆完成，然后把生成的文件夹重命名一下。

进入该文件夹，先安装依赖，`pnpm install`。

然后启动本地开发服务器以便实时看到预览，`pnpm dev`。

### 配置

找到主题的文档，从头到尾读一遍，按照文档的说明配置。

我还意外了解到了一种图片格式——AVIF。在几乎相同质量下，PNG要几MB，而AVIF仅仅需要几十KB。用比较新的浏览器基本都能加载。

只需要找个网站转换一下格式，然后在配置中引用即可。比较大的图片都可以用这个格式。

### 迁移文章

文章最主要的不同就是 Front-matter 了。

这是 Hexo 的 Front-matter 格式：（作者、置顶和封面取决于主题）

```markdown
---
title: 标题
date: 发布时间 (yyyy-MM-dd HH:mm:ss)
updated: 更新时间 (yyyy-MM-dd HH:mm:ss)
excerpt: 摘要
tags:
  - 标签1
  - 标签2
  - 标签3
categories:
  - 一级分类
  - 二级分类
published: 是否发布
---
```

这是 Astro 的：（Astro 没有内置，我用的是 Firefly 主题）

```markdown
---
title: 标题
author: 作者
published: 发布日期 (yyyy-MM-dd)
updated: 更新日期 (yyyy-MM-dd)
pinned: 是否置顶
description: 摘要
tags: [标签1, 标签2, 标签3]
category: 分类
draft: 是否是草稿
image: 封面路径或URL
---
```

分类只能保留一级，其他只需要替换一下一部分名称和日期的格式就可以了。

#### 文章链接

Hexo 如果没有额外配置的话默认是`:year/:month/:day/:title/`，而 Astro 默认是`posts/标题`。

如果文章链接不同记得做一下重定向。

## 部署

步骤基本和 Hexo 一样

先创建一个 Git 仓库，提交到 GitHub。然后我是用 Cloudflare Pages 部署的，国内访问速度比 GitHub Pages 更快。

和 Hexo 不同的是需要配置一下。把构建命令设为`pnpm  build`，输出目录设为`dist`。这样就只需要用 Git 上传源文件，云端自动构建和部署。

## 结语

Astro 是一个比较新的框架，目前最能感知到的变化就是主题更美观了，同时编写文章也更方便了。
