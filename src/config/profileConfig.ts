import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/avatar.avif",

	// 名字
	name: "FeatherBlaze",

	// 个人签名
	bio: "达成成就：超越生死！",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "QQ",
			icon: "fa7-brands:qq",
			url: "https://qm.qq.com/q/BZygZfIjdu",
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/fblaze62",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:hi@fblaze62.top",
			showName: false,
		},
		{
			name: "哔哩哔哩",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/3493078679686026",
			showName: false,
		},
		{
			name: "抖音",
			icon: "fa7-brands:tiktok",
			url: "https://www.douyin.com/user/MS4wLjABAAAAl5uvfzN213pYEYwH3z0Fg1EW0SXk8-oGHe11MUPSpK_bCYcZoevLky97wDl-siDR",
			showName: false,
		},
		{
			name: "小红书",
			icon: "simple-icons:xiaohongshu",
			url: "https://xhslink.com/m/A2gTxR1Rk4g",
			showName: false,
		},
		{
			name: "知乎",
			icon: "fa7-brands:zhihu",
			url: "https://www.zhihu.com/people/featherblaze",
			showName: false,
		},
		{
			name: "洛谷",
			icon: "simple-icons:luogu",
			url: "https://www.luogu.com.cn/user/1656141",
			showName: false,
		},
		{
			name: "Littleskin",
			icon: "simple-icons:minecraft",
			url: "https://littleskin.cn/skinlib?filter=skin&uploader=3503129",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
