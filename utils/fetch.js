const Promise = require("./bluebird"); //为了兼容问题
const md5 = require("./md5");
const appkey = "d8a318ae8500ca9d9b51376f525989c3";

/**
 * 将参数+签名的值按照字典排序得到签名sign 参数的值按照升序排列
 * @param {Object} obj   参数集合    
 */
var getSign = function(obj) {
        for (var key in obj) {
            if (!obj[key]) {
                delete obj[key]
            };
        }
        obj.appkey = appkey;
        // obj.timestamp = new Date().getTime();//获取时间戳
        var keyArr = Object.keys(obj).sort();
        var newObj = {};
        var Kstr = "";
        for (var i = 0; i < keyArr.length; i++) {
            newObj[keyArr[i]] = obj[keyArr[i]];
            Kstr += obj[keyArr[i]];
        }
        delete obj["appkey"];
        console.log(Kstr)
        return md5(Kstr);
    }
    /**
     * 网络请求API接口
     * @param  {String} api    api 根地址
     * @param  {String} path   请求路径
     * @param  {Object} params 参数
     * @return {Promise}       包含抓取任务的Promise
     */
module.exports = function(api, path, params) {
    wx.showLoading({
        title: "加载中"
    });
    //添加时间戳和签名到请求的参数之中
    params.timestamp = new Date().valueOf(); //将时间戳加入请求参数data里面
    params.sign = "";
    params.sign = getSign(params); //将签名加入参数里面

    console.log(getSign(params));
    console.log(`${api}/${path}`);
    console.log(params)
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${api}/${path}`,
            data: Object.assign({}, params), //如果这里需要合并签名时间戳参数时候可以这么写
            header: { "Content-Type": "json" },
            success: function(res) {
                resolve(res);
                wx.hideLoading();
            },
            fail: function(err) {
                wx.hideLoading();
                reject(err);
            }
        });
    });
};;