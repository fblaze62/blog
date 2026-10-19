---
title: 万用搜索框：Flow Launcher
published: 2026-10-18
dated: 2026-10-19
description: Windows 端效率神器 Flow Launcher 的下载、安装和使用教程，以及与同类软件的对比。
image: ./images/flow-launcher.avif
tags: [软件, 效率, 教程, Windows, 开源]
category: 软件
---

日常打开软件时，我们一般都会选择在开始菜单中翻找、搜索软件名称，又或者固定在任务栏。可这些方法都并不够高效：开始菜单需要**漫长的翻找**才能找到软件；Windows 默认的搜索非常不智能——**功能少**、**模糊搜索难用**、文件搜索**慢得像乌龟**；任务栏只能固定常用的，偶尔用到不常用的软件依然要使用前面两种方法。

难道就没有完美的解决方法吗？当然有，这就是今天要介绍的软件——**Flow Launcher**。

## 下载安装

这款软件**仅支持 Windows**，其他平台的用户可以看看[[#同类软件]]，但这些软件与 Flow Launcher 有一些**不同之处**，在下文有提到。

目前可以通过[官网](https://flowlauncher.com/)或 [GitHub Releases](https://github.com/Flow-Launcher/Flow.Launcher/releases) 下载，但两种渠道本质都是从 GitHub Releases 获取，个人一般使用后者。

先打开 [GitHub Releases](https://github.com/Flow-Launcher/Flow.Launcher/releases) 链接（打不开安装 [Watt Toolkit](https://steampp.net/) 加速），在“Asset”中找到`Flow-Launcher-Setup.exe`（安装版，推荐）或`Flow-Launcher-Portable.zip`（便捷版）。

你也可以直接通过直链下载：[安装版](https://github.com/Flow-Launcher/Flow.Launcher/releases/latest/download/Flow-Launcher-Setup.exe) | [便捷版](https://github.com/Flow-Launcher/Flow.Launcher/releases/latest/download/Flow-Launcher-Portable.zip)。

如果遇到下载速度慢的问题可以使用这个多线程下载器下载：[AB Download Manager](https://abdownloadmanager.com/)。

## 基础配置

安装后打开软件，但打开后不会有任何反应。不用慌，我们点击任务栏的 ▲（显示隐藏的图标，即托盘图标）按钮，找到 Flow Launcher 的蓝色图标，右键，选择设置，就打开了它的设置界面。

### 开机自启

为了让软件在开机后自动运行，我们需要打开“常规”页面启用“开机自启”。同时推荐展开该选项，启用“使用登录任务代替启动条目来更快地启动体验”。

### 搜索引擎

如需修改默认搜索引擎，可以在“插件”页面找到“网页搜索”插件并展开。选中默认的“Google”搜索引擎，点击下方的“编辑”，“触发关键词”改成别的；然后把自己习惯使用的搜索引擎的“触发关键词”改成`*`。这样就可以直接输入要搜索的内容了。

### 文件搜索

如果要使用文件搜索功能，需要安装一个名为 [Everything](https://www.voidtools.com/zh-cn/) 的文件搜索工具。

打开这个工具的[下载页](https://www.voidtools.com/zh-cn/downloads/)，根据自己的情况选择对应版本安装。

安装完成后，启动软件。在“工具”菜单中选择“选项”，打开“常规”页面，勾选“Everything 服务”并根据提示操作，取消勾选“以管理员身份运行”，并勾选“随系统自启动”，最后点击确定。

至此，你就可以正常使用文件搜索功能了。

## 安装插件

在设置中打开“插件商店”页面，就可以在其中浏览插件了。里面有许多实用的插件，可以自行浏览，找到想要的插件单击并选择“安装”即可。

下载完成后可以在“插件”中对所有插件进行配置。

## 开始使用

在任何时候，都可以通过 **Alt+Space(空格)** 快捷键来启动 Flow Launcher 来启动主窗口。按下这个快捷键后，屏幕中央会出现一个搜索框，你可以在里面输入内容。

例如，你可以直接输入文本来查找软件、使用搜索引擎搜索或搜索电脑中的文件。Flow Launcher 支持用**首字母**、**声母**、**拼音**等来进行模糊搜索，甚至可以在设置里启用**双拼**搜索！这可比 Windows 自带的搜索智能多了！

除了这些基本功能，你还可以输入如`关机`、`重启`等指令，以及使用各种插件的功能。

## 同类软件

### uTools / ZTools

[**uTools**](https://www.u-tools.cn/) 比 Flow Launcher 更加知名，但其是一款商业软件，并且与 Flow Launcher 定位不同。如果说 Flow Launcher 是“快速启动器”，那 uTools 就是“效率工具箱”。

uTools 的许多插件激活后都会打开新的窗口，需要在其中进一步操作，且大多需要用到鼠标，但个人认为这就违背了软件作为“搜索框”的初衷——只需使用键盘操作以保证高效。uTools 插件功能侧重于多而非简洁，不像 Flow Launcher 一样所有插件的功能都在1个搜索框内进行。

[**ZTools**](https://github.com/ZToolsCenter/ZTools) 是 uTools 的开源实现。它虽然解决了 uTools 商业化的问题，但软件的定位并没有改变，上述情况依然存在。

这两款软件的功能也不够完善，例如根据使用频率排序结果等重要功能。

总之，如果你更看重插件功能，也可以尝试。

### 命令面板 / PowerToys Run

[**命令面板**](https://learn.microsoft.com/zh-cn/windows/powertoys/command-palette/overview)由微软开发，内置于 [PowerToys](https://learn.microsoft.com/zh-cn/windows/powertoys/)。它最大的特点就是采用 WinUI 3 界面设计，与 Windows 11 的界面契合。它虽与 Flow Launcher 定位相同，同样有插件市场、以“搜索框”为中心等，没有 uTools/ZTools 的问题，但完成度相比 Flow Launcher 和 uTools/ZTools 较低，许多功能都不完善，插件市场国内访问速度堪忧，并不是很推荐。

[**PowerToys Run**](https://learn.microsoft.com/zh-cn/windows/powertoys/run) 作为命令面板的旧版，同样是 [PowerToys](https://learn.microsoft.com/zh-cn/windows/powertoys/) 的一部分。由于目前命令面板的功能已经更加完善，目前推荐使用前者。

如果你追求与系统的高度契合，只需[安装 PowerToys](https://learn.microsoft.com/zh-cn/windows/powertoys/install) 即可使用上述软件。

## 总结

Flow Launcher 是一款**由社区驱动**、**以“搜索框”为中心**的软件，它能完美替代 Windows 自带的搜索，极大地提升平时打开软件的效率，是一款非常不错的工具。

虽然市面上有许多同类软件，但 Flow Launcher 依然是个人认为最好用的一款。
