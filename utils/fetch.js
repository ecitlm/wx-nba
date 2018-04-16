import { Promise } from './bluebird'
import MD5 from './md5'
const APPKEY = '6fc18957ce391f84a7ce34ce13cd99c4'

/**
 * 将参数+签名的值按照字典排序得到签名sign 参数的值按照升序排列
 * @param {Object} params   参数集合
 */
const getSign = params => {
  for (let key in params) {
    if (!params[key]) {
      delete params[key]
    }
  }
  params.appkey = APPKEY
  let keyArr = Object.keys(params).sort()
  let newObj = {}
  let Kstr = ''
  for (let i in keyArr) {
    newObj[keyArr[i]] = params[keyArr[i]]
    Kstr += params[keyArr[i]]
  }
  delete params['appkey']
  return MD5(Kstr)
}

/**
 * 验证返回的的code码问题
 * @param {*} resolve
 * @param {*} res 返回的data
 */
const checkCode = (resolve, res) => {
  if (+res.ret === 200) {
    resolve(res)
  } else if (+res.ret === 400) {
    wx.showToast({
      title: res.msg,
      icon: 'none',
      duration: 2000,
      mask: true
    })
  } else if (+res.ret === 406) {
    wx.showToast({
      title: res.msg,
      icon: 'none',
      duration: 2000,
      mask: true
    })
  } else {
  }
}

/**
 * 网络请求API接口
 * @param  {String} api    api 根地址
 * @param  {String} path   请求路径
 * @param  {Object} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
module.exports = function (api, path, params) {
  wx.showLoading({
    title: '加载中'
  })
  console.log(`${api}${path}`)
  params.timestamp = new Date().valueOf()
  console.log(params)
  params.sign = ''
  params.sign = getSign(params)
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${api}${path}`,
      data: Object.assign({}, params),
      header: { 'Content-Type': 'json' },
      success: function (res) {
        console.log(res)
        checkCode(resolve, res.data)
        wx.hideLoading()
      },
      fail: function (err) {
        wx.hideLoading()
        reject(err)
      }
    })
  })
}
