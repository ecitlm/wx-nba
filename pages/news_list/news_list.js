var app = getApp()
// pages/news_list/news_list.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    page: 0,
    isShow: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.news_list(0)
  },
  news_list: function (page) {
    var data = {
      page: page
    }
    app.api
      .news_list(data)
      .then(res => {
        this.setData({
          isShow: true,
          list: this.data.list.concat(res.data)
        })
      })
      .catch(e => {
        console.error(e)
      })
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
  onReachBottom: function () {
    this.setData({
      page: this.data.page + 1
    })
    this.news_list(this.data.page)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})
