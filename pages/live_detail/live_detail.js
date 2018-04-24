var app = getApp()
Page({
  data: {
    list: [],
    content: [],
    schid: '',
    currentTab: 0, // tab切换
    technical: []
  },
  onLoad: function (e) {
    this.live_content(e.schid) // 获取直播内容
    this.live_detail(e.schid, e.liveid) // 获取直播室详情信息
    this.technical_statistics(e.schid)
    this.setData({
      schid: e.schid,
      liveid: e.liveid
    })
  },

  // 获取直播内容数据
  live_content: function (schid) {
    var params = {
      schid: schid
    }
    app.api
      .live_content(params)
      .then(res => {
        console.log(res)
        this.setData({
          content: res.data
        })
      })
      .catch(e => {
        console.error(e)
      })
  },
  // 获取比赛详情信息
  live_detail: function (schid, liveid) {
    var params = {
      schid: schid,
      liveid: liveid
    }
    app.api
      .live_detail(params)
      .then(res => {
        this.setData({
          list: res.data
        })
        wx.setNavigationBarTitle({
          title: res.data.t1_name + ' VS ' + res.data.t2_name // 页面标题为路由参数
        })
      })
      .catch(e => {
        console.error(e)
      })
  },
  // 获取球员技术统计
  technical_statistics: function (schid) {
    var params = {
      schid: schid
    }
    app.api
      .technical_statistics(params)
      .then(res => {
        this.setData({
          technical: res.data
        })
      })
      .catch(e => {
        console.error(e)
      })
  },

  previewImage: function (e) {
    var url = e.target.dataset.url
    console.log(e.target)
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: [url] // 需要预览的图片http链接列表
    })
  },

  // 滑动切换tab
  bindChange: function (e) {
    this.setData({ currentTab: e.detail.current })
  },
  // 点击tab切换
  swichNav: function (e) {
    this.technical_statistics(this.data.schid)
    if (e.target.dataset.current === 0) {
      this.live_content(this.data.schid)
    }
    if (this.data.currentTab === e.target.dataset.current) {
      return false
    } else {
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  loadMore: function (e) {
    console.log(1)
  },
  upper: function (e) {
    // console.log(e)
  },
  lower: function (e) {
    // console.log(e)
  },
  scroll: function (e) {
    // console.log(e)
  }
})
