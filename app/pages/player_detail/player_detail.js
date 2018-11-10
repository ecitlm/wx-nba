var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    playerFiveGame:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    this.playerGame(e.id)
    var params = {
      playerid: e.id || '5292'
    }
    app.api
      .player_detail(params)
      .then(res => {
        console.log(res)
        this.setData({
          list: res.data
        })
      })
      .catch(e => {
        console.error(e)
      })
  },
  playerGame (id) {
    var params = {
      playerId: +(id || '5292'),
      seasonId:2018
    }
    app.api.playerGame(params).then((res)=>{
     this.setData({
       playerFiveGame: res.data
     })
     console.error(res.data)
    }).catch(e => {
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
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})
