const Promise = require("./bluebird"); //为了兼容问题
const md5 = require("./md5");
const appkey = "wxnba201711";

/**
 * 将参数+签名按照字典排序得到签名sign
 * @param {Object} obj   参数集合
 */
var getSign = function(obj) {
        for (var key in obj) {
            if (!obj[key]) {
                delete obj[key]
            };
        }
        obj.appkey = appkey;
        var keyArr = Object.keys(obj).sort();
        var newObj = {};
        var Kstr = "";
        for (var i = 0; i < keyArr.length; i++) {
            newObj[keyArr[i]] = obj[keyArr[i]];
            Kstr += keyArr[i] + obj[keyArr[i]];
        }
        delete obj["appkey"];
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
    var data = {
        timestamp: new Date().valueOf(),
        sign: getSign(params)
    };

    console.log(getSign(params));
    console.log(`${api}/${path}`);
    console.log(Object.assign(data, params));
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${api}/${path}`,
            //data: Object.assign({}, params), //如果这里需要合并签名时间戳参数时候可以这么写
            data: Object.assign(data, params),
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
};