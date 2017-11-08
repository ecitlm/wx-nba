const fetch = require("./fetch");
const API_DOMAIN = "https://coding.it919.cn/index.php/api";

/**
 * @param  {String} 接口地址   
 * @param  {Objece} params 接口参数参数
 */
function fetchApi(api, params) {
    return fetch(API_DOMAIN, api, params);
}

//NBA比赛直播
function nab_schedule(params) {
    return fetchApi("Nba/schedule", params).then(res => res.data);
}

//直播室信息
function live_detail(params) {
    return fetchApi("Nba/live_detail", params).then(res => res.data);
}

//直播内容
function live_content(params) {
    return fetchApi("Nba/live_content", params).then(res => res.data);
}

//球员技术统计
function technical_statistics(params) {
    return fetchApi("Nba/technical_statistics", params).then(res => res.data);
}

//球员详情
function player_detail(params) {
    return fetchApi("Nba/player_detail", params).then(res => res.data);
}

//联盟排名
function team_rank(params) {
    return fetchApi("Nba/team_rank", params).then(res => res.data);
}

//球队信息
function team_info(params) {
    return fetchApi("Nba/team_info", params).then(res => res.data);
}

//球队赛程
function team_schedule(params) {
  return fetchApi("Nba/team_schedule", params).then(res => res.data);
}

//球队阵容
function Lineup(params) {
    return fetchApi("Nba/Lineup", params).then(res => res.data);
}

//新闻详情
function news_info(params) {
    return fetchApi("Nba/news_info", params).then(res => res.data);
}
//NBA 新闻快讯
function news_list(params) {
    return fetchApi("Nba/new_list", params).then(res => res.data);
}
//NBA新闻评论
function news_comments(params) {
    return fetchApi("Nba/news_comments", params).then(res => res.data);
}


//关于我
function website(params) {
    return fetchApi("Nba/website", params).then(res => res.data);
}
module.exports = {
    nab_schedule,
    live_detail,
    live_content,
    technical_statistics,
    player_detail,
    team_rank,
    team_info,
    Lineup,
    news_info,
    news_comments,
    news_list,
    team_schedule,
    website
};