# wx-nba
wechat app for nba

仿3g腾讯体育NBA、使用小程序实现的一个NBA球赛直播新闻小程序

### 关于接口API
>接口来源是分析腾*体育H5端 的接口，使用php对接口进行抓取整理、切对接口进行了签名校验，已经实现，但没有用上小程序之中通过，接口整理一开始使用的是`ThinkPHP5`对接口统一整理的、后面使用`PhalAPi`对接口文档进行了再次的整理，整理的接口有以下、通过以下接口数据完成一个简单的大气的NBA小程序的开发、目前小程序正处于上架申请中。

* 每日赛事直播列表接口
* 球赛直播实时详情接口
* 实时数据统计接口
* 球队进本信息接口
* 球队球员阵容名单接口
* 球员基本信息赛季数据接口
* 30只球队排名数据接口
* 篮球快讯新闻列表接口
* 新闻详情接口
* 新闻评论数据接口

最新在线接口系统地址(目前使用的是是基于TP的第一版的接口),这一版更好一些 https://wxapp.it919.cn/wx/listAllApis.php


![图片](https://user-gold-cdn.xitu.io/2017/11/3/80f7e486ab3c0dce0e936cb8b9e8e05e)

  ### 小程序界面
  > 界面整体有十几个、包含以上接口对应的UI界面、以下界面属于应用的截图界面
  
<center>
<img src="https://user-gold-cdn.xitu.io/2017/11/3/d4d8e33f8bb69d74a618f57bbb3f07d8" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/1e78f1707b1518d311f8630a8dbac160" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/12646461f61d7f8e9f938f1b998d24cc" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/45db5be8620ced658e35a4adc4bd65c3" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/d264a8aafcccc8266d9d55f2a1fb54aa" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/0ff0aea2847dc1b0a41ce0d22341ff36" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/703963b267cbb71871a4ee936dc47a75" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/2fe5707340136c88a82c0f17b032e0b8" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/455fceb7966e6aed5b6b85638da18fab" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/07a43e2416a473d3312409add56588a4" width=300 />
</center>
