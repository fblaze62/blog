import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "飞焰服务器",
		imgurl: "https://gcore.jsdelivr.net/gh/fblaze62/blog@main/src/assets/images/fblaze-docs.png",
		desc: "我的 Minecraft 服务器，欢迎加入！",
		siteurl: "https://docs.fblaze62.top",
		tags: ["Minecraft"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "天御千云",
		imgurl: "https://gcore.jsdelivr.net/gh/fblaze62/blog@main/src/assets/images/tyqy.png",
		desc: "一个 Minecraft & 三角洲博主，偶尔也弹弹钢琴。",
		siteurl: "https://space.bilibili.com/3546898069719530",
		tags: ["Friends"],
		weight: 9, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites.",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
		weight: 8,
		enabled: true,
	},
	{
		title: "Firefly",
		imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
		desc: "流萤，清新美观的 Astro 静态博客主题模板，Material Design 3 风格设计",
		siteurl: "https://github.com/CuteLeaf/Firefly",
		tags: ["Framework"],
		weight: 7,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
