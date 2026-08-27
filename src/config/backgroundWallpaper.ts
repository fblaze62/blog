import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	// 壁纸模式："banner" 横幅壁纸，"fullscreen" 全屏壁纸，"overlay" 覆盖透明，"none" 纯色背景无壁纸
	mode: "banner",
	// 是否启用背景视频播放，配置后将在导航栏显示视频播放按钮
	playerEnable: false,
	/**
	 * 背景图片配置
	 * 图片路径支持三种格式：
	 * 1. public 目录（以 "/" 开头，不优化）："/assets/images/banner.avif"
	 * 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/banner.avif"
	 * 3. 远程 URL："https://example.com/banner.jpg"
	 * 注意：远程URL和public目录的图片不会被优化，请确保图片体积足够小以免影响加载速度
	 *
	 * 建议不要替换d1-d6，m1-m6这些默认示例图片，但你可以删除掉节省空间
	 * 因为以后可能会更换示例图片，导致你自定义的图片被覆盖
	 * 所以建议使用自己的图片的时候命名为其他名称，不要使用d1-d6，m1-m6这些名称
	 *
	 * 如果只使用一张图片或者使用随机图API，推荐直接使用字符串格式：
	 * desktop: "https://t.alcy.cc/pc",   // 随机图API
	 * desktop: "assets/images/DesktopWallpaper/d1.avif", // 单张图片
	 *
	 * mobile: "https://t.alcy.cc/mp", // 随机图API
	 * mobile: "assets/images/MobileWallpaper/m1.avif", // 单张图片
	 *
	 * 支持配置多张图片（数组），每次刷新页面随机显示一张：
	 * desktop: [
	 * "assets/images/DesktopWallpaper/d1.avif",
	 * "assets/images/DesktopWallpaper/d2.avif",
	 * ],
	 *
	 * mobile:[
	 *   "assets/images/MobileWallpaper/m1.avif",
	 *   "assets/images/MobileWallpaper/m2.avif",
	 * ],
	 */
	src: {
		// 桌面背景图片（支持单张或多张随机）
		// desktop: "assets/images/DesktopWallpaper/d1.avif",
		desktop: [
			"assets/images/DesktopWallpaper/wallpaper_minecraft_pc_bundle_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_java_edition_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_bedrock_edition_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_winter_celebration_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_mineshaft_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_island_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_ocean_monument_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_world_color_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_cats_pandas_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_ocean_monument_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_village_pillage_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_buzzybees_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_nether_update_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_caves_cliffs(part1)_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_caves_cliffs(part2)_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_wild_update_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_warden_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_mangroves_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_adventure_1920x1080.avif",
			"assets/images/DesktopWallpaper/Minecraft_Trails&Tales_.Net_2058x1440.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_trickytrials_1920x1080.avif",
			"assets/images/DesktopWallpaper/MCV_FallDrop_NetDownloadableWallpaper_1920x1080.avif",
			"assets/images/DesktopWallpaper/Minecraft_TheGardenAwakens_DotNet_1920x1080.avif",
			"assets/images/DesktopWallpaper/MCV_SpringDrop_DotNet_Downloadable_Wallpaper_1920x1080.avif",
			"assets/images/DesktopWallpaper/MCV_SummerDrop_Hero_DotNet_Downloadable_Wallpaper_r1920x1080.avif",
			"assets/images/DesktopWallpaper/Minecraft_Fall_Drop_Campaign_Key_Art_DotNet_Downloadable_Wallpaper_1920x1080.avif",
			"assets/images/DesktopWallpaper/MCV_HOL25Drop_MoM_DotNet_Wallpaper_1920x1080.avif",
			"assets/images/DesktopWallpaper/MCV_SPR26Drop_TT_DotNet_Wallpaper_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_tiny_takeover_bee_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_tiny_takeover_axo_1920x1080.avif",
			"assets/images/DesktopWallpaper/MCV_SummerDropKeyArt_NetDownloadableWallpaper_1920x1080.avif",
			"assets/images/DesktopWallpaper/wallpaper_minecraft_15th-anniversary_1920x1080.avif",
		],
		// 移动背景图片（支持单张或多张随机）
		// mobile: "assets/images/MobileWallpaper/m1.avif",
		mobile: [
			"assets/images/MobileWallpaper/wallpaper_minecraft_pc_bundle_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_java_edition_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_bedrock_edition_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_winter_celebration_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_mineshaft_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_island_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_ocean_monument_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_world_color_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_cats_pandas_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_ocean_monument_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_village_pillage_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_buzzybees_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_nether_update_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_caves_cliffs(part1)_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_caves_cliffs(part2)_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_wild_update_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_warden_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_mangroves_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_adventure_1080x1920.avif",
			"assets/images/MobileWallpaper/Minecraft_Trails&Tales_.Net_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_trickytrials_1080x1920.avif",
			"assets/images/MobileWallpaper/MCV_FallDrop_NetDownloadableWallpaper_1080x1920.avif",
			"assets/images/MobileWallpaper/Minecraft_TheGardenAwakens_DotNet_1080x1920.avif",
			"assets/images/MobileWallpaper/MCV_SpringDrop_DotNet_Downloadable_Wallpaper_1080x1920.avif",
			"assets/images/MobileWallpaper/MCV_SummerDrop_Hero_DotNet_Downloadable_Wallpaper_r1080x1920.avif",
			"assets/images/MobileWallpaper/Minecraft_Fall_Drop_Campaign_Key_Art_DotNet_Downloadable_Wallpaper_1080x1920.avif",
			"assets/images/MobileWallpaper/MCV_HOL25Drop_MoM_DotNet_Wallpaper_1080x1920.avif",
			"assets/images/MobileWallpaper/MCV_SPR26Drop_TT_DotNet_Wallpaper_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_tiny_takeover_bee_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_tiny_takeover_axo_1080x1920.avif",
			"assets/images/MobileWallpaper/MCV_SummerDropKeyArt_NetDownloadableWallpaper_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_15th-anniversary-left_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_15th-anniversary-center_1080x1920.avif",
			"assets/images/MobileWallpaper/wallpaper_minecraft_15th-anniversary-right_1080x1920.avif",
		],
		// 背景视频播放地址
		// 支持单个视频路径（字符串）或多个视频循环（数组，参考上面壁纸配置）
		// 支持远程视频URL，本地视频请放在 public/assets/videos/ 目录下
		// playerUrl: "/assets/videos/firefly.mp4",
		playerUrl: "https://bed.twoleaf.cn/file/1785658612716_firefly.mp4",
	},
	// 横幅壁纸和全屏壁纸共享配置
	common: {
		// 壁纸遮罩暗度，让横幅文字显示更清晰，0-1之间，值越大越暗
		dimOpacity: 0.2,
		// 多视频播放模式："order" 顺序循环，"random" 随机切换（仅当 playerUrl 为数组时生效）
		playerMode: "random",
		// 主页横幅文字
		homeText: {
			// 是否启用主页横幅文字
			enable: true,
			// 主页横幅主标题
			title: "FeatherBlaze",
			// 主页横幅主标题字体大小
			titleSize: "4.5rem",
			// 主页横幅副标题
			subtitle: [
				"达成成就：超越生死！",
				"等风来，不如追风去。",
				"Creeper?",
				'print("Hello world!")',
			],
			// 主页横幅副标题字体大小
			subtitleSize: "1.5rem",
			typewriter: {
				// 是否启用打字机效果
				// 打字机开启 → 循环显示所有副标题
				// 打字机关闭 → 每次刷新随机显示一条副标题
				enable: true,
				// 打字速度（毫秒）
				speed: 100,
				// 删除速度（毫秒）
				deleteSpeed: 50,
				// 完全显示后的暂停时间（毫秒）
				pauseTime: 2000,
			},
			// 是否显示标题下方的链接图标
			linksEnable: true,
			// 首页横幅标题下方的链接图标（可选，支持 showName 显示文字）
			// 图标支持 Iconify 格式：fa7-brands:github、fa7-solid:envelope、mdi:rss 等
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
					name: "RSS",
					icon: "fa7-solid:rss",
					url: "/rss/",
					showName: false,
				},
			],
		},
		// 壁纸轮播配置，横幅壁纸和全屏壁纸共享，仅在配置多张图片时生效
		carousel: {
			// 是否启用壁纸轮播；关闭时保持每次刷新随机显示一张
			enable: false,
			// 轮播切换间隔（毫秒）
			interval: 5000,
			// 过渡效果: 'fade' 渐变 | 'zoom' 缩放 | 'slide' 滑动 | 'kenburns' 旋转木马
			transitionEffect: "zoom",
		},
	},
	// Banner模式特有配置
	banner: {
		// 图片位置
		// 支持所有CSS object-position值，如: 'top', 'center', 'bottom', 'left top', 'right bottom', '25% 75%', '10px 20px'..
		// 如果不知道怎么配置百分百之类的配置，推荐直接使用：'center'居中，'top'顶部居中，'bottom' 底部居中，'left'左侧居中，'right'右侧居中
		position: "0% 20%",
		// 文章横幅信息："description" 显示描述，"meta" 显示日期、字数和阅读时长
		postInfo: {
			mode: "description",
		},
		// 导航栏配置
		navbar: {
			// 导航栏透明模式："semi" 半透明，"full" 完全透明，"semifull" 动态透明
			transparentMode: "semi",
			// 毛玻璃模糊度，0 即关闭导航栏的毛玻璃
			// 注意：导航栏子菜单与浮动面板始终保留毛玻璃，模糊度跟随此项但有最小值
			blur: 5,
		},
		// 水波纹动画效果配置，开启会影响页面性能，增加内存占用，请根据自己的喜好开启
		waves: {
			enable: {
				// 桌面端是否启用水波纹动画效果
				desktop: true,
				// 移动端是否启用水波纹动画效果
				mobile: true,
			},
		},
		// 渐变过渡效果配置，当水波纹关闭时自动启用，提供壁纸底部到背景色的平滑过渡
		gradient: {
			enable: {
				// 桌面端是否启用渐变过渡
				desktop: true,
				// 移动端是否启用渐变过渡
				mobile: true,
			},
			// 渐变高度
			height: "10%",
		},
	},
	// 覆盖透明覆盖模式特有配置
	overlay: {
		// 层级，确保壁纸在背景层
		zIndex: -1,
		// 壁纸透明度
		opacity: 0.8,
		// 背景模糊度
		blur: 10,
		// 卡片透明度，0-1之间，值越小越透明
		cardOpacity: 0.6,
	},
	// 全屏壁纸模式特有配置
	// 全屏模式下壁纸固定全屏显示，首屏居中标题，内容区在首屏之下、下滑时覆盖壁纸
	// 壁纸模糊度(blur)、卡片透明度(cardOpacity)、层级(zIndex) 复用上方 overlay 模式的配置；
	// 背景透明度(opacity)不适用（全屏壁纸不透明）；导航栏透明模式由卡片透明度控制，脱离 banner 的 navbar 配置
	fullscreen: {
		// 图片位置
		position: "center",
		// 全屏壁纸模式的导航栏配置
		navbar: {
			// 是否开启动态透明：开启后首页顶部导航栏透明，下滑后变不透明（仅首页生效）
			dynamicTransparent: false,
		},
		// 首页下滑时壁纸模糊渐变开关（从 0 渐变为 overlay.blur 的最大模糊）
		// 关闭后该设备上全屏壁纸保持清晰（首页与非首页都不模糊），设置面板的模糊度滑块也会隐藏
		blurRamp: {
			enable: {
				// 桌面端是否启用模糊渐变
				desktop: true,
				// 移动端是否启用模糊渐变
				mobile: true,
			},
		},
	},
};
