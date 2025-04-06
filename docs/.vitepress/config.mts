import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Katex Vue",
  description: "LaTeX expression rendering on Vue3",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Usage', link: '/get-started' }
    ],

    sidebar: [
      {
        text: 'Usage',
        items: [
          { text: 'Get Started', link: '/get-started' },
          { text: 'Configuration', link: '/configuration' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/INFO-studio/katex-vue' }
    ],
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: "简体中文",
      lang: 'zh',
      themeConfig: {

        nav: [
          { text: '主页', link: '/zh' },
          { text: '用法', link: '/zh/get-started' }
        ],

        sidebar: [
          {
            text: '用法',
            items: [
              { text: '快速开始', link: '/zh/get-started' },
              { text: '配置项', link: '/zh/configuration' },
            ]
          }
        ],
      }
    }
  }
})
