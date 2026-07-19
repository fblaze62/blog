---
title: 破解极域，解放你的电脑！
published: 2026-05-29
updated: 2026-07-07
pinned: false
description: 用多种方法解除极域教师端的控制，拯救你的电脑！
tags: [教程, 软件, 极域]
category: 教程
draft: true
# image: ./images/crack-mythware.avif
---

相信大家都被极域的控制困扰过，这篇文章就是来拯救你的！破解上网限制、防截屏……一应俱全。其中的命令不用记，在[破解网络/U盘限制](https://fbblog.pages.dev/posts/crack-mythware/#%E7%A0%B4%E8%A7%A3%E7%BD%91%E7%BB%9Cu%E7%9B%98%E9%99%90%E5%88%B6)部分有可以无视极域网络限制访问的链接。

## 破解网络/U盘限制

极域的网络和文件限制是通过服务和 MasterHelper.exe 进程实现的，因此我们只需结束进程和服务即可破解。

首先打开 cmd 或 PowerShell（通过搜索或 Win+R）,然后输入下面的指令：

```cmd
taskkill /im MasterHelper.exe /f
sc stop TDNetFilter
sc stop TDFileFilter
```

其中`taskkill /im MasterHelper.exe /f`结束 MasterHelper.exe 进程，`sc stop TDNetFilter`解除网络过滤服务，`sc stop TDFileFilter`解除文件过滤服务（U盘/光盘/文件锁）。

如果已经被限制网络，可以访问 [fbblog.pages.dev](https://fbblog.pages.dev/)（本博客的另一个域名），可能可以无视网络限制正常访问。打开后搜索该文章或直接访问[本文链接](https://fbblog.pages.dev/posts/crack-mythware/)。

## 结束极域

首先打开 cmd 或 PowerShell（通过搜索或 Win+R）,然后输入下面的指令：

```cmd
taskkill /im StudentMain.exe /f
```

这样就可以结束极域了，但教师端可以看到你没有连接上。

如果不生效，可尝试用管理员运行 cmd 或 PowerShell。

## 屏幕广播

### 结束任务

在教师开启屏幕广播前，打开任务管理器（通过搜索、右键任务栏、Ctrl+Shift+Esc 或 Win+R>`taskmgr`），确保 选项>置于顶层 已被开启，然后拖动标题栏将任务管理器放到任务栏区域，边缘不超出任务栏。

教师开启屏幕广播后，拖出任务管理器，找到“Windows 进程”中的“桌面窗口管理器”，右键结束进程。

等待一段时间（桌面可能会黑屏，几乎所有非系统进程都会被结束），极域就被结束了，但教师端可以看到你没有连接上。

### 卡退

教师开启屏幕广播后，移动鼠标到屏幕顶部，先开启录屏，然后反复点击“↺”或“↻”按钮，不要停止，大约5~10分钟屏幕广播就会卡退。

如果没有成功，请耐心等待，具体时间取决于设备性能，也有可能无法卡退。

### 禁用全屏广播

你可以借助[极域工具包](https://blog.csdn.net/weixin_42112038/article/details/127480471)窗口化屏幕广播，下载链接：[蓝奏云(提取码:bbzl)](https://wwt.lanzoub.com/b00pu06li)/[GitHub Releases](https://github.com/BengbuGuards/MythwareToolkit/releases)。

你可以当场下载或提前下载，存在U盘中（可能需要先破解上网/U盘限制）。

## 防截屏

可以使用[这个工具](https://www.cnblogs.com/petyr/articles/19001342)让老师查看你的屏幕时看不到你设定的窗口，下载链接：[GUI版(推荐)](https://wwzk.lanzouo.com/igG7a31kn7kf)/[命令行](https://wwzk.lanzouo.com/iTQDY31j84zg)(提取码:114514)。

可能会被杀毒软件或浏览器误报，选择保留即可。

GUI版：输入对应进程名称然后点击“开启防护”即可。进程名称可在任务管理器（通过搜索、右键任务栏、Ctrl+Shift+Esc 或 Win+R>taskmgr）中右键选择“打开文件所在的位置”或“详细信息”查看。

命令行版：在主程序所在的目录的文件路径栏输入`cmd`或`PowerShell`，或打开 cmd 或 PowerShell（通过搜索或Win+R）后使用`cd`命令进入文件夹。输入`injector.exe 进程名称 -notopmost`即可。进程名称可在任务管理器（通过搜索、右键任务栏、Ctrl+Shift+Esc 或 Win+R>`taskmgr`）中右键选择“打开文件所在的位置”或“详细信息”查看。

## 卸载极域

卸载极域一般需要密码，可以使用这个万能密码：`mythware_super_password`。

不推荐，因为教师端可以看到你没有连接上。

## 其他

对于其他方法，可以参考B站UP主 [爱玩电脑的cmd](https://space.bilibili.com/1037857042) 的这两期视频：[《论关闭极域的n种方法（卡Bug篇）》](https://www.bilibili.com/video/BV1B2tQe6Etv)、[《论关闭极域的n种方法（进阶版）》](https://www.bilibili.com/video/BV1B2tQe6Etv)。
