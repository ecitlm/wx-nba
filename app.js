const wechat = require('./utils/wechat.js')
const api = require('./utils/api.js')

wx.setEnableDebug({
  enableDebug: true
})

App({
  data: {
    version: '0.1.0'
  },
  wechat: wechat,
  api: api,
  onLaunch: function () {
    // 调用API从本地缓存中获取数据
  },
  globalData: {
    userInfo: null
  },

  /**
   * 生命周期函数--监听小程序显示
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow () {},
  /**
   * 生命周期函数--监听小程序隐藏
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide () {}
})
