var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    item: [],
    isPlay: false,
    playState: null,
    currentPosition: 0,
    duration: 0,
    musicTime: '00:00',
    timer: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.api
      .website({})
      .then(res => {
        console.log(res)
        this.setData({
          item: res.data
        })
      })
      .catch(e => {
        console.error(e)
      })
  },

  openMap: function () {
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: res => {
        wx.openLocation({
          latitude: 22.54999, // 纬度，范围为-90~90，负数表示南纬
          longitude: 113.95066, // 经度，范围为-180~180，负数表示西经
          scale: 28 // 缩放比例
        })
      }
    })
  },

  previewImage: function (e) {
    var url = e.target.dataset.url
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: [url] // 需要预览的图片http链接列表
    })
  },
  playMusic () {
    clearInterval(this.data.timer)
    this.setData({
      timer: null
    })
    this.setData({
      isPlay: !this.data.isPlay
    })
    if (this.data.isPlay) {
      wx.playBackgroundAudio({
        dataUrl: this.data.item.music.src,
        title: this.data.item.music.name,
        coverImgUrl: this.data.item.music.poster
      })
      this.getTime()
    } else {
      wx.pauseBackgroundAudio()
    }
  },
  getTime () {
    var timer = setInterval(() => {
      wx.getBackgroundAudioPlayerState({
        success: res => {
          this.setData({
            playState: res,
            musicTime: this.secondToDate(res.duration)
          })
        }
      })
    }, 300)

    this.setData({
      timer: timer
    })
  },

  secondToDate (result) {
    var m = Math.floor((result / 60) % 60)
    var s = Math.floor(result % 60)
    if (s < 10) {
      s = '0' + s
    }
    return (result = m + ':' + s)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.onBackgroundAudioPlay(function () {
      console.log(1)
    })

    wx.onBackgroundAudioStop(res => {
      this.setData({
        isPlay: false
      })
      clearInterval(this.data.timer)
      this.setData({
        timer: null
      })
    })

    wx.onBackgroundAudioPause(res => {
      this.setData({
        isPlay: false
      })
      clearInterval(this.data.timer)
      this.setData({
        timer: null
      })
    })
  },

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
