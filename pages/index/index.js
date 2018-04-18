var app = getApp()
Page({
  data: {
    list: [],
    isShow: false
  },
  onLoad: function() {
    this.nab_schedule() // 初始化数据
  },
  // ajax 列表请求
  nab_schedule: function(param) {
    var that = this
    var params = {
      date: param
    }
    app.api
      .nab_schedule(params)
      .then(res => {
        wx.hideNavigationBarLoading()
        wx.stopPullDownRefresh()
        that.setData({
          isShow: true,
          list: res.data.data
        })
      })
      .catch(e => {
        console.error(e)
        wx.hideNavigationBarLoading()
        wx.stopPullDownRefresh()
      })
  },

  // 选择日期
  selectDate: function(e) {
    this.nab_schedule(e.target.dataset.time)
  },

  //  点击日期组件确定事件
  bindDateChange: function(e) {
    this.nab_schedule(e.detail.value)
  },

  loadMore: function(e) {},
  upper: function(e) {
    // console.log(e)
  },
  lower: function(e) {
    // console.log(e)
  },
  scroll: function(e) {
    // console.log(e)
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading()
    this.nab_schedule()
  }
})
