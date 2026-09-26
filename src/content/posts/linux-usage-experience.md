---
title: 「操作系统的版本答案？」Linux 系统初体验
published: 2026-09-26
dated: 2026-09-26
description: 初次使用 Linux 操作系统的体验。
tags: [操作系统, Linux, deepin, 教程, 双系统, 开源]
category: 操作系统
---

这几天用了用 Linux，感觉已经能够在一些方面替代 Windows 了，在这里分享一下使用体验。

## 为何更换

更换到 Linux 最主要的原因其实仅仅就只是因为新奇。真正开始使用后才发现了其他优点。

在 Windows 日渐臃肿、Bug 繁多、使用卡顿（尤其是 Windows 11 引入的 WinUI 3）的今天，Linux 依然保持着轻量化。

Windows 的市场占有率日渐下降，Linux 却在不断攀升，可见 Linux 的优秀。

## 安装

Linux 本身只是个内核，真正能使用的是 **Linux 发行版**。Linux 发行版基本都是基于 Debian、Arch Linux 或者 Red Hat 的。流行的 Linux 发行版有许多，如家喻户晓的 Ubuntu 等等。

个人选择的是 deepin。尽管网上有许多人评价 deepin 比 Ubuntu 卡等缺点，但我毕竟只是一个 Linux 小白，综合其配置简单、符合国内用户使用习惯、美观的桌面环境等，还是选择了 deepin。

先打开 deepin 的[下载页面](https://www.deepin.org/zh/download/)，选择一个下载方式。如果不使用 BitTorrent（即 BT 种子）下载，建议安装一个多线程下载器下载。这里推荐一个多线程下载器：[AB Download Manager](https://abdownloadmanager.com/)。

剩下的安装教程可参阅 deepin 官网的[安装指南](https://www.deepin.org.cn/zh/deepin-25-installation/)。

## 桌面环境

我安装的 deepin 使用的深度桌面环境（DDE）比较接近 Windows，可以很容易地适应。Ubuntu 等发行版使用的 GNOME 桌面环境就可能会使 Windows 用户需要一段时间适应。

不过无论哪个桌面环境，其使用起来都会比 Windows 流畅不少。使用 Windows 11 时，我打开“快速设置”面板时就经常会出现卡顿；Windows 11 新增的 WinUI 3 导致任务管理器打开慢，使用还及其卡顿……如此的问题在一味追求“现代”的 Windows 11 中数不胜数。Linux 的内存占用也明显比 Windows 低很多。

总之，Linux 的桌面环境短期内需要适应一下，但随着使用的熟练，与 Windows 相比的优势很快就能显现出来。

## 软件生态

Linux 的软件数量虽然远不及 Windows / macOS，但日常基本使用需求还是能够满足。上手体验后就能发现其实也有许多软件对 Linux 做了适配，并没有想象中那么匮乏。部分软件的 Linux 可能更新比较慢或者长期不更新，不过还算能够使用。

## 软件安装&卸载

Linux 的软件安装在某些时候会比 Windows 复杂不少，下面就介绍几种常见的情况。

### 1. 应用商店

不少国产操作系统会自带应用商店，可以像使用手机一样快速安装/更新/卸载软件。如果使用的 Linux 发行版不自带应用商店，可以手动安装一个应用商店。

#### 星火应用商店

先打开星火应用商店（只支持基于 Debian 的 Linux 发行版）的[下载页](https://www.spark-app.store/download)，根据自己电脑的情况选择计算机架构（大部分用户选择 Intel/AMD架构（amd64）即可），然后选择第一个“下载最新版本”按钮。

> [!TIP] 不知道怎么安装下载下来的`.deb`文件？
> 参阅 [[#2. DEB / RPM 软件包|DEB / RPM 软件包安装方法]]。

#### Flathub

Flathub 也是一个不错的应用商店，其支持所有 Linux 发行版。它其实比较类似 DEB / RPM 软件包，只是提供了一个页面浏览应用且全 Linux 发行版通用。只需使用[[#4. 包管理器|包管理器]]安装 Flathub，然后就可以运行在 [flathub.org](https://flathub.org/zh-Hans) 下载的`.flatpakref`文件来安装软件。

如果你想使用这个应用商店，请参阅[官网的说明](https://flathub.org/zh-Hans/setup)。

### 2. DEB / RPM 软件包

DEB / RPM 软件包指以`.deb`/`.rpm`结尾的文件，分别是基于 Debian / Red Hat 的 Linux 发行版上的默认软件包格式，大多数应用商店的本质也是下载 DEB / RPM 软件包安装。

下载 DEB / RPM 软件包时请参考网站提示，选择合适的系统架构。如果没有明确说明，文件名中含有`amd64`或`x86_64`即为 Intel/AMD 架构，含有`arm64`的即为 ARM 架构。

安装 DEB / RPM 软件包的方法与 Windows 类似，只需双击打开，按照提示安装即可，安装过程中需要输入用户密码（类似 Windows 中的用户账户控制（UAC））。

与 Windows 不同的是，DEB / RPM 软件包是一个统一的标准，安装完全由系统执行，软件无法自定义安装界面。尽管 Windows 也有类似的 MSI 文件，但由于不是强制要求，大多数软件更倾向与使用自定义的安装文件，已经没有什么软件在使用了。

另外说个题外话，Linux 软件的卸载也是完全由系统执行的，软件无法自行塞入各种流氓卸载界面。

想要卸载用 DEB / RPM 软件包安装的软件，只需在启动台中右键软件图标，选择“卸载”。

更新用 DEB / RPM 软件包安装的软件，通常由软件自动执行，有时也需要手动下载新版本的 DEB / RPM 软件包更新。

### 3. TAR.GZ 压缩包 / AppImage 软件包

用这两种文件打包的软件安装就比较复杂了，如果应用商店能搜到或者软件有提供 DEB / RPM 软件包建议优先使用。

TAR.GZ 是一种以 `.tar.gz` 结尾的压缩包，意思是将一些文件/文件夹整合成一个 TAR 文件（即归档），然后用算法压缩成一个 GZ 文件。以这种格式打包分发的软件有点类似 Windows 的绿色版软件。

安装以这种格式打包的软件需要先解压。解压后复制压缩包里全部的文件，在`/opt`目录下创建一个文件夹，把所有文件粘贴到其中（需要 Root 权限，文件管理器中右键选择“以管理员身份打开”）。在文件夹中寻找与软件名称相同且没有扩展名（也有可能是以`.sh`结尾）的文件，大多数情况这就是主程序，双击运行即可。如果无法运行，请右键该文件，选择“属性”，并在“权限管理”中勾选“允许程序执行”。

另外还需要创建启动器（类似 Windows 中的“开始”菜单）和桌面快捷方式。我们先来制作快捷方式文件。创建一个以`.desktop`结尾的文件（名称可以随意，尽量不要有空格，制作完成后会覆盖原本的文件名），用文本编辑器打开，填入以下内容：

```desktop
[Desktop Entry]
Name=软件名称
Comment=说明（选填）
GenericName=软件类型（选填，英文）
Exec=主程序路径
Icon=图标路径
Type=Application
Terminal=false
Categories=分类1;分类2;（选填，英文）
Keywords=关键词1;关键词2;（选填）
```

完成后保存，复制到`/usr/share/applications`（系统级，每个用户都生效）或`~/.local/share/applications`（用户级）目录以添加到启动器，放到`~/Desktop`目录以添加到桌面。创建完成后可能要重启系统才能生效。

AppImage 软件包是一种所有 Linux 发行版通用的软件打包格式。AppImage 软件包的安装过程类似，可以放到任意目录，用前面说的方法创建快捷方式即可。

想要卸载以这两种方式安装的软件，只需删除软件安装目录的文件和快捷方式。

### 4. 包管理器

部分软件可能会让你使用包管理器安装，这些软件通常会提示你在终端执行一行或几行命令，只需按照软件的说明操作。命令通常以`sudo apt install`（Debian）、`sudo pacman -S`（Arch Linux）或`sudo dnf install`（Red Hat）开头，执行时会提示你输入密码，注意输入时是没有预览的。

包管理器可以很方便的安装/更新/卸载软件，主要的命令如下：

```bash
# 安装
sudo apt install 包名 # Debian
sudo pacman -S 包名 # Arch Linux
sudo dnf install 包名 # Red Hat

# 更新
sudo apt-get upgrade # Debian
sudo pacman -Syu # Arch Linux
sudo dnf upgrade # Red Hat

# 删除
sudo apt remove 包名 # Debian
sudo pacman -R 包名 # Arch Linux
sudo dnf remove 包名 # Red Hat
```

关于软件包管理器的更多信息，可以自行在网上搜索自己的操作系统对应的软件包管理器。

## 总结

使用了一段时间 Linux 后，已经逐渐习惯了。相比 Windows，Linux **开源免费**、**使用流畅**，各方面都优于 Windows，或许这就是操作系统的版本答案？

至于网上说的入门难，其实在各种 Linux 发行版的努力下，入门门槛已经低了许多。

总之，如果你也对一个流畅的操作系统感兴趣，欢迎试试 Linux！
