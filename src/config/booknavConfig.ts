import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

// 书签导航页面配置
export const booknavPageConfig: BooknavPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// favicon 自动获取配置
	favicon: {
		// 书签未填写 icon 时，是否自动获取目标站点的 favicon 图标
		enabled: true,

		// favicon 接口地址，{domain} 为占位符，会被替换成目标站点域名
		// 更换接口只需保证地址里含有 {domain}，例如：
		//   https://a.favicon.im/{domain}
		//   https://favicon.im/{domain}
		api: "https://a.favicon.im/{domain}",
	},
};

// 书签导航配置
// 每个数组项是一个分类组，分类组内的 items 是该分类下的书签
export const booknavConfig: BooknavGroup[] = [
	{
		id: "dev",
		name: "开发",
		icon: "material-symbols:code-rounded",
		desc: "写代码时离不开的站点和软件",
		weight: 100,
		items: [
			{
				title: "GitHub",
				url: "https://github.com",
				desc: "全球最大的代码托管平台",
				// icon 字段可以使用 astro-icon 图标库的图标名称
				// 也可以使用图片 URL 和本地图片路径
				// 不填则会通过接口自动获取目标站点的 favicon 图标（需要在上面配置）
				// icon: "fa7-brands:github",
				weight: 10,
			},
			{
				title: "Visual Studio Code",
				url: "https://code.visualstudio.com",
				desc: "现代化、轻量级的代码编辑器",
				weight: 9,
			},
			{
				title: "Python",
				url: "https://www.python.org",
				desc: "最受欢迎的编程语言之一",
				weight: 8,
			},
			{
				title: "Git",
				url: "https://git-scm.com/",
				desc: "分布式版本控制系统",
				weight: 7,
			},
			{
				title: "Astro",
				url: "https://astro.build",
				desc: "内容驱动型网站的 Web 框架",
				weight: 6,
			},
		],
	},
	{
		id: "minecraft",
		name: "Minecraft",
		icon: "simple-icons:minecraft",
		desc: "Minecraft 相关站点和工具",
		weight: 90,
		items: [
			{
				title: "Minecraft Wiki",
				url: "https://zh.minecraft.wiki",
				desc: "完全公开、可自由编辑的Wiki",
				weight: 10,
			},
			{
				title: "MC百科",
				url: "https://www.mcmod.cn",
				desc: "最大的Minecraft中文MOD百科",
				weight: 9,
			},
			{
				title: "Minecraft插件百科",
				url: "https://mineplugin.org",
				desc: "Minecraft服务端插件使用、配置、编程",
				weight: 8,
			},
		],
	},
	{
		id: "tools",
		name: "工具",
		icon: "material-symbols:build-outline-rounded",
		desc: "顺手的在线小工具",
		weight: 80,
		items: [
			{
				title: "TinyPNG",
				url: "https://tinypng.com",
				desc: "在线压缩 PNG / JPEG 图片",
				weight: 10,
			},
			{
				title: "Iconify",
				url: "https://icon-sets.iconify.design",
				desc: "海量开源图标集合搜索",
				weight: 9,
			},
			{
				title: "iconfont",
				url: "https://www.iconfont.cn",
				desc: "阿里巴巴矢量图标库",
				weight: 8,
			},
		],
	},
];
