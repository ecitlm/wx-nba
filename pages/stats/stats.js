var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    item: [],
    stats: [],
    current: 'pt',
    name: '得分'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    app.api
      .player_top({})
      .then(res => {
        that.setData({
          item: res.data,
          stats: res.data.pt
        })
      })
      .catch(e => {
        console.error(e)
      })
  },
  // 点击tab切换
  tabNav: function(e) {
    var that = this
    that.setData({
      stats: that.data.item[e.target.dataset.t],
      current: e.target.dataset.t,
      name: e.target.dataset.name
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
