var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        item: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        app.api.website({})
            .then(res => {
                console.log(res);
                that.setData({
                    item: res.data
                });
            })
            .catch(e => {
                console.error(e)
            });

    },

    openMap: function() {
        var that = this;
        wx.getLocation({
            type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
            success: function(res) {
                // success
                wx.openLocation({
                    latitude: 22.549990, // 纬度，范围为-90~90，负数表示南纬
                    longitude: 113.950660, // 经度，范围为-180~180，负数表示西经
                    scale: 28, // 缩放比例          
                })
            }
        })
    },

    previewImage: function(e) {
        var url = e.target.dataset.url
        wx.previewImage({
            current: url, // 当前显示图片的http链接
            urls: [url] // 需要预览的图片http链接列表
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})