import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "目光朝朝",
  description: "朝光",
  base: "/chaoguang/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    siteTitle: "目光朝朝",

    search: {
      provider: "local",
    },

    nav: [
      { text: "Blog", link: "/blog/Component的本质" }, //activeMatch: '/config/'  自定义匹配的路径就是设置那个高亮
      { text: "Essay", link: "/essay/markdown-examples" },
    ],

    sidebar: {
      "/blog/": [
        {
          text: "目录",
          items: [
            { text: "Component的本质", link: "/blog/Component的本质" },
            // { text: "Markdown Examples", link: "/blog/markdown-examples" },
            // { text: "Runtime API Examples", link: "/blog/api-examples" },
            { text: "框架设计因素", link: "/blog/框架设计因素" },
            { text: "Clash 终端代理", link: "/blog/Clash 终端代理" },
          ],
        },
      ],
      "/essay/": [
        {
          text: "文章",
          items: [
            { text: "Markdown Examples", link: "/blog/markdown-examples" },
            { text: "Runtime API Examples", link: "/blog/api-examples" },
            { text: "Team", link: "/team" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/keke521jie" }],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Yuan Jie",
    },

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
  },
});
