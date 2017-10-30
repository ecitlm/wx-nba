var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: [],
    playerList:[],
    currentTab: 0,        // tab切换 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    this.team_info(e.teamId)
    this.Lineup(e.teamId);
    //this.team_info(24);
    
  },

  team_info: function (teamId) {
    var that = this;
    var params = {
      teamId: teamId
    };
    app.api.team_info(params)
      .then(res => {
        console.log(res);
        that.setData({
          item: res.data
        });
        //设置title
        wx.setNavigationBarTitle({
          title: res.data.cnname//页面标题为路由参数
        })
      })
      .catch(e => {
        console.error(e)
      });
  },
  Lineup: function (teamId) {
    var that = this;
    var params = {
      teamId: teamId
    };
    app.api.Lineup(params)
      .then(res => {
        console.log(res);
        that.setData({
          playerList: res.data
        });
      })
      .catch(e => {
        console.error(e)
      });

  }
  ,

  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  // 点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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