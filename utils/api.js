const fetch = require('./fetch');
const API_DOMAIN = "https://coding.it919.cn/index.php/api"

/**
 * @param  {String} 接口地址   
 * @param  {Objece} params 接口参数参数
 */
function fetchApi(api, params) {
  return fetch(API_DOMAIN, api, params);
}


/**
 * @param {object} 接口参数
 * NBA比赛直播
 */
function nab_schedule(params) {
  return fetchApi('Nba/schedule', params)
    .then(res => res.data)
}

//

//直播室信息
function live_detail(params) {
  return fetchApi('Nba/live_detail', params)
    .then(res => res.data)
}

//直播内容
function live_content(params) {
  return fetchApi('Nba/live_content', params)
    .then(res => res.data)
}

//球员技术统计 technical_statistics
function technical_statistics(params) {
  return fetchApi('Nba/technical_statistics', params)
    .then(res => res.data)
}


//球员详情
function player_detail(params) {
  return fetchApi('Nba/player_detail', params)
    .then(res => res.data)
}



module.exports = {
  nab_schedule,
  live_detail,
  live_content,
  technical_statistics,
  player_detail
}
