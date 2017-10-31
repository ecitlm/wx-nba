var app = getApp();
var WxParse = require('../wxParse/wxParse.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    item: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var data = {
      docid: "D231F33T0005877U"
    }
    var that = this;
    app.api.news_info(data)
      .then(res => {
        console.log(res);
        that.setData({
          item: res.data
        });

        console.log(res)
        for (var i = 0; i <= res.data.img.length; i++) {
          var str = "<!--IMG#" + i + "-->";
          var replaceStr = "<img src="+(res.data.img[0])['src']+">";
          res.data.body = res.data.body.replace(str, replaceStr);
        }
        WxParse.wxParse('article', 'html', res.data.body, that, 5);
      })
      .catch(e => {
        console.error(e)
      });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})