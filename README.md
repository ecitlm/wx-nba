## wx-nba

wechat app for nba live
NBA 赛事直播、使用小程序实现的一个 NBA 球赛直播新闻小程序

## 如何使用

```shell
git clone https://github.com/ecitlm/wx-nba.git
//将clone的项目文件包导入 微信web开发者工具 设置自己注册的appid、即可运行
```

## 已完成功能模块

* [x] 每日赛事直播列表、以及赛事预告
* [x] NBA 赛事最新新闻资讯列表、新闻详情以及新闻评论
* [x] wxParse(富文本解析, 支持 HTML 和 Markdown) 实现富文本资讯详情
* [x] NBA 球队东西部球队战绩排名
* [x] NBA30 支球队信息详情战绩、队内得分王、篮板王、助攻王
* [x] 球队球员阵容、82 场比赛赛程数据
* [x] 球员数据排名统计、得分、篮板、助攻、抢断、盖帽等联盟前 50 强
* [x] 球员详情数据(出生、基本信息、选秀、位置、赛季数据)
* [x] 直播数据、直播详情、实时比赛详情、球员比赛数据统计
* [ ]视频集锦、赛事集锦

## 关于接口 API

> 接口来源于 3G QQ 数据爬虫接口，使用 php 对接口进行数据抓取以及数据清洗、切对接口进行了签名校验，整理的接口有以下、通过以下接口数据完成一个简单的大气的 NBA 小程序的开发。

* [x] Login, regist and logou
* [x] 球赛直播实时详情接口
* [x] 实时数据统计接口
* [x] 球队进本信息接口
* [x] 球队球员阵容名单接口
* [x] 球员基本信息赛季数据接口
* [x] 球队 82 场比赛每月赛程
* [x] 30 只球队排名数据接口
* [x] 篮球快讯新闻列表接口
* [x] 新闻详情接口
* [x] 新闻评论数据接口

最新在线接口系统列表
https://wxapp.it919.cn/wx/listAllApis.php

**接口系统源码地址**
https://github.com/ecitlm/wx-nba-api.git

![图片](https://dn-coding-net-production-pp.qbox.me/5a026a63-69e1-448d-a73b-597385139efa.png)

## 小程序 UI 界面截图

> 界面整体有十几个、包含以上接口对应的 UI 界面、以下界面属于应用的截图界面
>
> ![preview](https://user-gold-cdn.xitu.io/2017/11/3/d4d8e33f8bb69d74a618f57bbb3f07d8)
> ![preview](https://user-gold-cdn.xitu.io/2017/11/3/1e78f1707b1518d311f8630a8dbac160)
> ![preview](https://user-gold-cdn.xitu.io/2017/11/3/12646461f61d7f8e9f938f1b998d24cc)
> ![preview](https://user-gold-cdn.xitu.io/2017/11/3/45db5be8620ced658e35a4adc4bd65c3)
> ![preview](https://user-gold-cdn.xitu.io/2017/11/3/d264a8aafcccc8266d9d55f2a1fb54aa)
> ![preview](https://user-gold-cdn.xitu.io/2017/11/3/0ff0aea2847dc1b0a41ce0d22341ff36)
> ![preview](https://user-gold-cdn.xitu.io/2017/11/3/703963b267cbb71871a4ee936dc47a75)
> ![preview](https://user-gold-cdn.xitu.io/2017/11/3/2fe5707340136c88a82c0f17b032e0b8)
> ![preview](https://user-gold-cdn.xitu.io/2017/11/3/455fceb7966e6aed5b6b85638da18fab)
> ![preview](https://user-gold-cdn.xitu.io/2017/11/3/07a43e2416a473d3312409add56588a4)

### 关于接口签名 sign 生成问题

* 接口请求签名，首先客户端与服务端约定好一个`appkey`
* 排除签名参数（sign 和接口的 service）
* 将剩下的全部参数和 appkey，按参数名字进行字典升序排序
* 将排序好的参数，全部用字符串拼接起来
* 进行 md5 运算，生成签名`sign`

`js签名方法生成sign`

```javascript
/**
 * 将参数+签名的值按照字典排序得到签名sign 参数的值按照升序排列
 * @param {Object} params   参数集合
 */
const getSign = params => {
  for (let key in params) {
    if (!params[key]) {
      delete params[key]
    }
  }
  params.appkey = appkey
  let keyArr = Object.keys(params).sort()
  let newObj = {}
  let tmpStr = ''
  for (let i in keyArr) {
    newObj[keyArr[i]] = params[keyArr[i]]
    tmpStr += params[keyArr[i]]
  }
  delete params['appkey'] //从参数集合中剔除appkey参数传递
  return md5(tmpStr)
}
```

> 如果对您有帮助，请给个 Star 支持一下哈～
