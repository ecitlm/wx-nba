## wx-nba
wechat app for nba live 
NBA赛事直播、使用小程序实现的一个NBA球赛直播新闻小程序


##  如何使用
```shell
git clone https://github.com/ecitlm/wx-nba.git
//将clone的项目文件包导入 微信web开发者工具 设置自己注册的appid、即可运行
```
## 已完成功能模块

- [x] 每日赛事直播列表、以及赛事预告
- [x] NBA赛事最新新闻资讯列表、新闻详情以及新闻评论
- [x] wxParse(富文本解析, 支持HTML和Markdown) 实现富文本资讯详情
- [x] NBA球队东西部球队战绩排名
- [x] NBA30支球队信息详情战绩、队内得分王、篮板王、助攻王
- [x] 球队球员阵容、82场比赛赛程数据
- [x] 球员数据排名统计、得分、篮板、助攻、抢断、盖帽等联盟前50强
- [x] 球员详情数据(出生、基本信息、选秀、位置、赛季数据)
- [x] 直播数据、直播详情、实时比赛详情、球员比赛数据统计
- [ ]视频集锦、赛事集锦


## 关于接口API
>接口来源于3G QQ 数据爬虫接口，使用php对接口进行数据抓取以及数据清洗、切对接口进行了签名校验，整理的接口有以下、通过以下接口数据完成一个简单的大气的NBA小程序的开发。



- [x] Login, regist and logou
- [x] 球赛直播实时详情接口
- [x] 实时数据统计接口
- [x] 球队进本信息接口
- [x] 球队球员阵容名单接口
- [x] 球员基本信息赛季数据接口
- [x] 球队82场比赛每月赛程
- [x] 30只球队排名数据接口
- [x] 篮球快讯新闻列表接口
- [x] 新闻详情接口
- [x]  新闻评论数据接口

最新在线接口系统列表
 https://wxapp.it919.cn/wx/listAllApis.php

__接口系统源码地址__
https://github.com/ecitlm/wx-nba-api.git

![图片](https://dn-coding-net-production-pp.qbox.me/5a026a63-69e1-448d-a73b-597385139efa.png)


## 小程序 UI 界面截图
  > 界面整体有十几个、包含以上接口对应的UI界面、以下界面属于应用的截图界面
  > 
 

![preview](http://cdn.it919.cn/1.jpg )![preview](http://cdn.it919.cn/2.jpg)
![preview](http://cdn.it919.cn/3.jpg)![preview](http://cdn.it919.cn/4.jpg)
![preview](http://cdn.it919.cn/5.jpg)![preview](http://cdn.it919.cn/6.jpg)
![preview](http://cdn.it919.cn/7.jpg)![preview](http://cdn.it919.cn/8.jpg)
![preview](http://cdn.it919.cn/9.jpg)![preview](http://cdn.it919.cn/10.jpg)
![preview](http://cdn.it919.cn/11.jpg)![preview](http://cdn.it919.cn/12.jpg)
![preview](http://cdn.it919.cn/13.jpg)




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
const getSign = (params) => {
    for (let key in params) {
        if (!params[key]) {
            delete params[key];
        }
    }
    params.appkey = appkey;
    let keyArr = Object.keys(params).sort();
    let newObj = {};
    let  tmpStr = '';
    for (let i in keyArr) {
        newObj[keyArr[i]] = params[keyArr[i]];
        tmpStr += params[keyArr[i]];
    }
    delete params['appkey']; //从参数集合中剔除appkey参数传递
    return md5(tmpStr);
};

```


>如果对您有帮助，请给个Star支持一下哈～