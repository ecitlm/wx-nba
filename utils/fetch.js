const Promise = require('./bluebird'); //为了兼容问题
const md5 = require('./md5');
const appkey = 'wxnba201711';

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
    delete params['appkey'];
    return md5(Kstr);
};

/**
 * 验证返回的的code码问题
 * @param {*} resolve 
 * @param {*} res 返回的data
 */
var checkCode = (resolve, res) => {
    if (res.ret == 200) {
        resolve(res);
    } else if (res.ret == 400) { //确实必要字段
        wx.showModal({
            title: '',
            showCancel: false,
            content: res.msg,
        });
    } else if ((res.ret = 406)) { //签名错误
        wx.showModal({
            title: '',
            showCancel: false,
            content: res.msg,
        });
    } else {}
};

/**
 * 网络请求API接口
 * @param  {String} api    api 根地址
 * @param  {String} path   请求路径
 * @param  {Object} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
module.exports = function(api, path, params) {
    wx.showLoading({
        title: '加载中',
    });
    //添加时间戳和签名到请求的参数之中、
    params.timestamp = new Date().valueOf(); //将时间戳加入请求参数data里面
    params.sign = '';
    params.sign = getSign(params); //将签名加入参数里面
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${api}${path}`,
            data: Object.assign({}, params), //如果这里需要合并签名时间戳参数时候可以这么写
            header: { 'Content-Type': 'json' },
            success: function(res) {
                checkCode(resolve, res.data);
                wx.hideLoading();
            },
            fail: function(err) {
                wx.hideLoading();
                reject(err);
            },
        });
    });
};