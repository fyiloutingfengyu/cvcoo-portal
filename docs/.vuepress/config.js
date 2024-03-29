module.exports = {
  title: 'cvcoo', //标题
  lang: 'zh-CN',
  description: 'SpringCloud 全套解决方案', //描述
  base: '/cvcoo-portal/', //基本url
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }], // 增加一个自定义的 favicon
  ],
  // theme: 'reco',
  themeConfig: {
    logo: '/images/logo.png',
    //顶部导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '购买', link: '/buy/' },
      { text: '开发文档', link: '/dev-docs/quick-start' },
      { text: '功能对比', link: '/compare/compare' },
      { text: '演示', link: 'https://fyiloutingfengyu.github.io/cvcoo-portal/' } //外部链接
    ],
    // 多侧边栏设置
    sidebar: {
      '/dev-docs/': [
        {
          title: '开发文档',   // 必要的
          collapsable: false, // 侧边栏是否展开,默认值是 true
          children: [
            {
              title: '快速开始',
              collapsable: false,
              path: 'quick-start',
            },
            {
              title: '前端',
              collapsable: false,
              path: 'function/front',
            },
            {
              title: '后端',
              collapsable: false,
              path: 'function/back',
            },
            {
              title: '生产部署',
              collapsable: false,
              path: 'deploy/aliyun',
            }
          ]
        }
      ],
      '/compare/': [
        {
          title: '功能对比',
          collapsable: false,
          children: [
            {
              title: '功能对比',
              collapsable: false,
              path: 'compare'
            },
            {
              title: '开源版',
              collapsable: false,
              children: [
                {
                  title: '简介',
                  collapsable: false,
                  path: 'free/'
                },
                {
                  title: '更新日志',
                  collapsable: false,
                  path: 'free/update-log'
                }
              ]
            },
            {
              title: '商业版',
              collapsable: false,
              children: [
                {
                  title: '简介',
                  collapsable: false,
                  path: 'business/'
                },
                {
                  title: '更新日志',
                  collapsable: false,
                  path: 'business/update-log'
                }
              ]
            },
          ]
        }
      ]
    }
  },
};
