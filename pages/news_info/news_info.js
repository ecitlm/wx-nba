var app = getApp()
var WxParse = require('../wxParse/wxParse.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    item: [],
    comments: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var data = {
      docid: e.docid || 'D230QPOC0005877U'
    }
    var that = this
    app.api
      .news_info(data)
      .then(res => {
        console.log(res)
        that.setData({
          item: res.data
        })
        that.news_comments(data)
        if (res.data && res.data.img.length !== 0) {
          var replaceStr = '<img src=' + res.data.img[0]['src'] + '>'
          res.data.body = res.data.body.replace('<!--IMG#0-->', replaceStr)
        }
        WxParse.wxParse('article', 'html', res.data.body, that, 5)
      })
      .catch(e => {
        console.error(e)
        var article = '文章已经删除'
        WxParse.wxParse('article', 'html', article, that, 5)
      })
  },

  // 获取评论
  news_comments: function (data) {
    var that = this
    app.api
      .news_comments(data)
      .then(res => {
        console.log(res)
        that.setData({
          comments: res.data.reverse()
        })
      })
      .catch(e => {
        console.error(e)
      })
    wx.hideLoading()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})
