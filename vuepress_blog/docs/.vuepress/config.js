const nav = require("./config/nav");
const pluginsConf = require('./plugins/index')

module.exports = {
  base: "/",
  // base: "/blog/",
  title: "后来的我们",
  description: "It takes two to tango.",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", {"language": "javascript","type": "text/javascript","src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"}],
    ["script", {"language": "javascript","type": "text/javascript","src": "/js/mouseClick.js"}],
    ["script", {"language": "javascript","type": "text/javascript","src": "/js/sakura.js"}],
    ["meta", {name: "viewport",content: "width=device-width,initial-scale=1,user-scalable=no"}]
  ],
  theme: "reco",
  markdown: {
    lineNumbers: true
  },
  //背景图片
  back:{
    bgUrls: 'https://zyj_yida.gitee.io/source/img/indexbg/',
    bgNum: 52
  },
  themeConfig: {
    //首页样式
    indexTitle:"人生来来往往，来日并不方长。",
    indexDes:"Life comes and goes, but the future is not long.",
    //是否全屏样式 true，false
    fullscreen: true,
    //全屏模式下才应用 分类图片 不填或者默认为随机
    categoryPic: null,
    tagPic: null,
    timePic: null,
    modePicker: false,
    mode: 'light',
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "文章" // 默认 “分类”Category
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签" // 默认 “标签”Tag
      },
    },
    nav,
    logo: 'https://zyj_yida.gitee.io/source/img/ico/logo.png',
    authorAvatar: "/authorAvatar.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: "auto",
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "dk",
    // 备案号
    record: 'github部署',
    // 项目开始时间
    startYear: "2021",
    /**
     * 密钥 (if your blog is private)
     */
    friendLink: [
      {
        title: "hello-world",
        desc: "Enjoy when you can, and endure when you must.",
        email: "952029579@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
      {
        title: 'ToFutureSelf',
        desc: '花有重开日，人无再少年',
        link: 'https://zhangfish.gitee.io/'
      },
      {
        title: '地球反三体组织',
        desc: '地球反三体组织',
        link: 'https://k-wei.gitee.io/'
      }
    ],
    // vssueConfig: {
    //   platform: "github",
    //   owner: "Saszr",
    //   repo: "blog",
    //   clientId: process.env.VSSUEID,
    //   clientSecret: process.env.VSSUESECRET,
    // },
    //首页格言
    mottos: [{
      "zh": "人生来来往往，来日并不方长。",
      "en": "Life comes and goes, but the future is not long."
      },
      {
        "zh": "他心里的苦越多，一丝甜就能填满。",
        "en": "The more bitterness in his heart, the sweetness can fill it."
      },
      {
        "zh": "梦想不会逃跑，会逃跑的永远都是自己。",
        "en": "Dream will not run away, will always be their own escape."
      },
      {
        "zh": "涉江而过，芙蓉千朵。诗也简单，心也简单。",
        "en": "Crossing the river, there are thousands of Hibiscus. Poetry is simple, heart is simple."
      },
      {
        "zh": "一别两三年，忽然又夏天。",
        "en": "Two or three years later, it was summer again."
      }, {
        "zh": "未成定局的事就不要弄的人尽皆知。",
        "en": "Don't do anything that's not settled but everyone knows it."
      },
      {
        "zh": "也许明天的我会痛恨自己，但今夜的我仍在前行。",
        "en": "I might hate myself tomorrow, but I'm on my way tonight."
      }
    ],
  },
  plugins: pluginsConf
//   plugins: [
//     // require("./plugins/notification/index"),
//     // [
//     //   "meting",
//     //   {
//     //     meting: {
//     //       server: "netease",
//     //       type: "playlist",
//     //       mid: "2385694490",
//     //     },
//     //     aplayer: {
//     //       lrcType: 0,
//     //     },
//     //   },
//     // ],
//     [
//       "vuepress-plugin-container",
//       {
//         type: "locked",
//         before: (info) => `<div class="locked">`,
//         after: "</div>",
//       },
//     ],
//     [
//       "vuepress-plugin-container",
//       {
//         type: "tip",
//         defaultTitle: "Tip",
//       },
//     ],
//     [
//       require("./plugins/meting/index"),
//       {
//         meting: {
//           server: "netease",
//           type: "playlist",
//           mid: "2385694490",
//         },
//         aplayer: {
//           lrcType: 0,
//         },
//       },
//     ],
//     [
//       "vuepress-plugin-nuggets-style-copy",
//       {
//         copyText: "复制代码",
//         tip: {
//             content: "复制成功!"
//         }
//     }
//     ]
//   ],
 };
