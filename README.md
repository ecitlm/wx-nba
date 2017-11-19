# wx-nba
wechat app for nba

仿3g腾讯体育NBA、使用小程序实现的一个NBA球赛直播新闻小程序

### 关于接口API
>接口来源是分析腾*体育H5端 的接口，使用php对接口进行抓取整理、切对接口进行了签名校验，已经实现，但没有用上小程序之中通过，接口整理一开始使用的是`ThinkPHP5`对接口统一整理的、后面使用`PhalAPi`对接口文档进行了再次的整理，整理的接口有以下、通过以下接口数据完成一个简单的大气的NBA小程序的开发、原想项目完全上线了再开源的，方便大家看效果，但疲于过审核，算了。

* 每日赛事直播列表接口
* 球赛直播实时详情接口
* 实时数据统计接口
* 球队进本信息接口
* 球队球员阵容名单接口
* 球员基本信息赛季数据接口
* 球队82场比赛每月赛程
* 30只球队排名数据接口
* 篮球快讯新闻列表接口
* 新闻详情接口
* 新闻评论数据接口

最新在线接口系统列表 https://wxapp.it919.cn/wx/listAllApis.php

__接口系统源码地址__
https://github.com/ecitlm/wx-nba-api.git

![图片](https://dn-coding-net-production-pp.qbox.me/5a026a63-69e1-448d-a73b-597385139efa.png)

### 关于功能
* 每天赛事直播列表(文字直播详情)
* wxParse(富文本解析, 支持HTML和Markdown) 实现富文本资讯详情

### 关于接口签名sign 生成问题
* 接口请求签名，首先客户端与服务端约定好一个`appkey`
* 排除签名参数（sign和接口的service）
* 将剩下的全部参数和appkey，按参数名字进行字典升序排序
* 将排序好的参数，全部用字符串拼接起来
* 进行md5运算，生成签名`sign`

`js签名方法生成sign`
```javascript
/**
 * 将参数+签名的值按照字典排序得到签名sign 参数的值按照升序排列
 * @param {Object} params   参数集合    
 */
var getSign = (params) => {
    for (var key in params) {
        if (!params[key]) {
            delete params[key];
        }
    }
    params.appkey = appkey;
    var keyArr = Object.keys(params).sort();
    var newObj = {};
    var Kstr = '';
    for (var i in keyArr) {
        newObj[keyArr[i]] = params[keyArr[i]];
        Kstr += params[keyArr[i]];
    }
    delete params['appkey']; //从参数集合中剔除appkey参数传递
    return md5(Kstr);
};

```




  ### 小程序界面
  > 界面整体有十几个、包含以上接口对应的UI界面、以下界面属于应用的截图界面
  
<center>
<img src="https://user-gold-cdn.xitu.io/2017/11/3/d4d8e33f8bb69d74a618f57bbb3f07d8" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/1e78f1707b1518d311f8630a8dbac160" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/12646461f61d7f8e9f938f1b998d24cc" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/45db5be8620ced658e35a4adc4bd65c3" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/d264a8aafcccc8266d9d55f2a1fb54aa" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/0ff0aea2847dc1b0a41ce0d22341ff36" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/703963b267cbb71871a4ee936dc47a75" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/2fe5707340136c88a82c0f17b032e0b8" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/455fceb7966e6aed5b6b85638da18fab" width=300 /><img src="https://user-gold-cdn.xitu.io/2017/11/3/07a43e2416a473d3312409add56588a4" width=300 />
</center>
