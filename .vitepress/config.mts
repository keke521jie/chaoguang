import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "目光朝朝",
  description: "朝光",
  base: "/chaoguang/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    siteTitle: '目光朝朝',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Blog', link: '/'  },   //activeMatch: '/config/'  自定义匹配的路径就是设置那个高亮
      { text: 'Essay', link: '/markdown-examples',},
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Team', link: '/team' },
        ]
      },
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/keke521jie' }
    ], 
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

  }
})
