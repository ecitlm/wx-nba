var app = getApp()
var month = new Date().getMonth() + 1 //获取当前月份当角标、0开始;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: [
      {
        value: '1',
        text: '1月份'
      },
      {
        value: '2',
        text: '2月份'
      },
      {
        value: '3',
        text: '3月份'
      },
      {
        value: '4',
        text: '4月份'
      },
      {
        value: '5',
        text: '5月份'
      },
      {
        value: '6',
        text: '6月份'
      },
      {
        value: '7',
        text: '7月份'
      },
      {
        value: '8',
        text: '8月份'
      },
      {
        value: '9',
        text: '9月份'
      },
      {
        value: '10',
        text: '10月份'
      },
      {
        value: '11',
        text: '11月份'
      },
      {
        value: '12',
        text: '12月份'
      }
    ],
    index: month,
    monthText: '',
    item: [],
    teamId: 24,
    schedule: [],
    playerList: [],
    currentTab: 0 // tab切换
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {
    this.team_info(e.teamId)
    this.Lineup(e.teamId)
    this.setData({
      teamId: e.teamId,
      monthText: this.data.array[month - 1]['text']
    })

    this.team_schedule(this.data.index)
  },

  team_info: function(teamId) {
    var that = this
    var params = {
      teamId: teamId
    }
    app.api
      .team_info(params)
      .then(res => {
        console.log(res)
        that.setData({
          item: res.data
        })
        //设置title
        wx.setNavigationBarTitle({
          title: res.data.cnname //页面标题为路由参数
        })
      })
      .catch(e => {
        console.error(e)
      })
  },
  Lineup: function(teamId) {
    var that = this
    var params = {
      teamId: teamId
    }
    app.api
      .Lineup(params)
      .then(res => {
        console.log(res)
        that.setData({
          playerList: res.data
        })
      })
      .catch(e => {
        console.error(e)
      })
  },
  team_schedule: function(mouth) {
    var that = this
    var params = {
      teamId: parseInt(this.data.teamId),
      mouth: mouth
    }
    app.api
      .team_schedule(params)
      .then(res => {
        that.setData({
          schedule: res.data
        })
      })
      .catch(e => {
        console.error(e)
      })
  },

  // 滑动切换tab
  bindChange: function(e) {
    var that = this
    that.setData({ currentTab: e.detail.current })
  },
  // 点击tab切换
  swichNav: function(e) {
    var that = this
    if (this.data.currentTab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  //月份赛程选择
  bindPickerChange: function(e) {
    this.setData({
      index: this.data.array[e.detail.value]['value'],
      monthText: this.data.array[e.detail.value]['text']
    })
    this.team_schedule(parseInt(this.data.array[e.detail.value]['value']))
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
