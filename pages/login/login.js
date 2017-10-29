// pages/login/login.js
const sha1 = require('../../utils/sha1');
const util = require('../../utils/util.js')
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        merchantNo: "310440300005163",
        name: "yikafu",
        pwd: "123456"
    },

    //监听商户号的变化
    merNoInput: function(e) {
        this.setData({
            merchantNo: e.detail.value
        })
    },

    //监听用户名的变化
    nameInput: function(e) {
        this.setData({
            name: e.detail.value
        })
    },

    //监听密码的变化
    pwdInput: function(e) {
        this.setData({
            pwd: e.detail.value
        })
    },

    toLogin: function(event) {
        this.loginHttp();
    },

    loginHttp: function(event) {
        console.log(1);
        var _this = this;
        this.setData({
            "merchantNo": _this.data.merchantNo,
            "name": _this.data.name,
            "pwd": _this.data.pwd

        });
        var data = {
            merchantNo: _this.data.merchantNo,
            name: _this.data.name,
            pwd: sha1.hex_sha1(_this.data.pwd + _this.data.name)
        };
        console.log(data)
        app.api.Login(data)
            .then(res => {
                console.log(res.result);
                //存储登录成功的信息
                util.storeData(res.result);
                //登录成功跳转到首页
                wx.navigateTo({
                    url: '../index/index',
                })
            })
            .catch(e => {
                console.error(e)
            });
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
      wx.showToast({
        title: '测试数据',
        icon:"none",
        duration: 2000
      })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },
})