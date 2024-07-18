const request = require('../utils/request')
// 微信登录
function getWeChatAccessToken(data) {
  return request({
    url: 'https://api.weixin.qq.com/sns/jscode2session',
    method: 'GET',
    data
  })
}

module = {
  getWeChatAccessToken
}
