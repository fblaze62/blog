import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告内容
	content: "这是用 Astro 重构的博客！访问 https://hexo.fblaze62.top/ 查看旧站点。",

	// 是否允许用户关闭公告
	closable: false,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "访问旧站点",
		// 链接 URL
		url: "https://hexo.fblaze62.top/",
		// 内部链接
		external: false,
	},
};
