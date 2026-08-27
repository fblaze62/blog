---
title: 破解极域，解放你的电脑！
published: 2026-05-29
updated: 2026-08-09
description: 用多种方法解除极域教师端的控制，拯救你的电脑！
tags: [教程, 软件, 极域]
category: 教程
---

相信大家都被极域的控制困扰过，这篇文章就是来拯救你的！[[#破解网络/U盘限制|解除上网限制]]、[[#防截屏]]……一应俱全。其中的命令不用记，在 [[#已被限制网络]] 部分有可以无视极域网络限制访问的链接。

## 破解网络/U盘限制

极域的网络和文件限制是通过服务和 MasterHelper.exe 进程实现的，因此我们只需结束进程和服务即可解除限制。

首先打开 cmd 或 PowerShell（通过搜索或 Win+R）,然后输入下面的指令：

```cmd
taskkill /im MasterHelper.exe /f
sc stop TDNetFilter
sc stop TDFileFilter
```

其中`taskkill /im MasterHelper.exe /f`结束 MasterHelper.exe 进程，`sc stop TDNetFilter`解除网络过滤服务，`sc stop TDFileFilter`解除文件过滤服务（U盘/光盘/文件锁）。

### 已被限制网络

如果已经被限制网络，可以访问 [fbblog.pages.dev](https://fbblog.pages.dev/)（本博客的另一个域名），可能可以无视网络限制正常访问。打开后搜索该文章或直接访问[本文链接](https://fbblog.pages.dev/posts/crack-mythware/)。

> [!TIP]
> 如果无法成功访问 [fbblog.pages.dev](https://fbblog.pages.dev/)，请先[[#结束极域|结束极域进程]]，然后再打开[本文链接](https://blog.fblaze62.top/posts/crack-mythware/)。破解完成后记得重新开启极域，防止教师端发现你没有连接上。

## 结束极域

首先打开 cmd 或 PowerShell（通过搜索或 Win+R），然后输入下面的指令：

```cmd
taskkill /im StudentMain.exe /f
```

这样就可以结束极域了。如果不生效，可尝试用管理员运行 cmd 或 PowerShell。

> [!CAUTION]
> 该方法仅适用于 [[#已被限制网络]] 部分的域名无法访问时临时破解上网限制，结束后请立刻打开[本文链接](https://blog.fblaze62.top/posts/crack-mythware/)，按照 [[#破解网络/U盘限制]] 部分的方法解除网络限制并开启极域，防止教师端发现你没有连接上。

## 屏幕广播

### 结束任务

在教师开启屏幕广播前，打开任务管理器（通过搜索、右键任务栏、Ctrl+Shift+Esc 或 Win+R>`taskmgr`），确保 选项>置于顶层 已被开启，然后拖动标题栏将任务管理器放到任务栏区域，边缘不超出任务栏。

教师开启屏幕广播后，拖出任务管理器，找到“Windows 进程”中的“桌面窗口管理器”，右键结束进程。

等待一段时间（桌面可能会黑屏，几乎所有非系统进程都会被结束），极域就被结束了，但教师端可以看到你没有连接上。

> [!CAUTION]
> 结束后请立刻[[#禁用全屏广播]]并开启极域，防止教师端发现你没有连接上。

### 卡退

教师开启屏幕广播后，移动鼠标到屏幕顶部，会出现一个横条。先开启录屏，然后反复点击“↺”或“↻”按钮，中途不要停止，大约5~10分钟屏幕广播就会卡退。

如果没有成功，请耐心等待，具体时间取决于设备性能，也有可能无法卡退。:spoiler[（虽然学校电脑的性能基本不好）]

> [!CAUTION]
> 该方法仅适用于教师开启屏幕广播后临时使用，因为其时间漫长（甚至可能无法成功）且教师端可以看到你没有连接上。

### 禁用全屏广播

> [!TIP]
> 进行本部分的操作前请先[[#破解网络/U盘限制|解除网络限制]]，或将所需的文件存储在U盘中。

你可以借助 [极域工具包](https://blog.csdn.net/weixin_42112038/article/details/127480471) 窗口化屏幕广播，下载链接：[蓝奏云](https://wwt.lanzoub.com/b00pu06li)(提取码:bbzl)/[GitHub Releases](https://github.com/BengbuGuards/MythwareToolkit/releases)。

> [!TIP]
> 该工具可能会被杀毒软件或浏览器误报。
>
> > [!NOTE]- 解决方法
> > - 如果被 Windows 安全中心 误报，请打开 Windows 安全中心，点击“病毒和威胁防护”，然后点击“保护历史记录”（你可能也可以通过单击右下角弹出的通知打开此界面）。找到被误报的文件，点击其右侧的的倒三角图标展开，然后点击“操作”，在弹出的菜单中选择“还原”。
> >
> > - 如果被 Edge 浏览器误报，请在“下载”页面点击文件右侧的“...”图标，选择保留。如果弹出提示窗口，请点击“依然保留”（如果没有看到该选项，请先点击“详细信息”）。

## 防截屏

> [!TIP]
> 进行本部分的操作前请先[[#破解网络/U盘限制|解除网络限制]]，或将所需的文件存储在U盘中。

可以使用[这个工具](https://www.cnblogs.com/petyr/articles/19001342)让老师查看你的屏幕时看不到你设定的窗口，下载链接：[GUI版(推荐)](https://wwzk.lanzouo.com/igG7a31kn7kf)/[命令行版](https://wwzk.lanzouo.com/iTQDY31j84zg)(提取码:114514)。

> [!TIP]
> 该工具可能会被杀毒软件或浏览器误报。
>
> > [!NOTE]- 解决方法
> > - 如果被 Windows 安全中心 误报，请打开 Windows 安全中心，点击“病毒和威胁防护”，然后点击“保护历史记录”（你可能也可以通过单击右下角弹出的通知打开此界面）。找到被误报的文件，点击其右侧的的倒三角图标展开，然后点击“操作”，在弹出的菜单中选择“还原”。
> >
> > - 如果被 Edge 浏览器误报，请在“下载”页面点击文件右侧的“...”图标，选择保留。如果弹出提示窗口，请点击“依然保留”（如果没有看到该选项，请先点击“详细信息”）。

GUI版：输入对应进程名称然后点击“开启防护”即可。进程名称可在任务管理器（通过搜索、右键任务栏、Ctrl+Shift+Esc 或 Win+R>taskmgr）中右键选择“打开文件所在的位置”或“详细信息”查看。

命令行版：在主程序所在的目录的文件路径栏输入`cmd`或`PowerShell`，或打开 cmd 或 PowerShell（通过搜索或Win+R）后使用`cd`命令进入文件夹。输入`injector.exe 进程名称 -notopmost`即可。进程名称可在任务管理器（通过搜索、右键任务栏、Ctrl+Shift+Esc 或 Win+R>`taskmgr`）中右键选择“打开文件所在的位置”或“详细信息”查看。

## 卸载极域

卸载极域一般需要密码，可以使用这个万能密码：`mythware_super_password`。

> [!WARNING]
> 极其不推荐该方法，因为教师端可以看到你没有连接上，甚至可能让你面临较为严重的后果。
>
> 如果不小心卸载了极域，可以重启系统，因为学校的电脑一般有系统还原功能。

## 其他

对于其他方法，可以参考B站UP主 [爱玩电脑的cmd](https://space.bilibili.com/1037857042) 的这两期视频：[《论关闭极域的n种方法（卡Bug篇）》](https://www.bilibili.com/video/BV1B2tQe6Etv)、[《论关闭极域的n种方法（进阶版）》](https://www.bilibili.com/video/BV1B2tQe6Etv)。
