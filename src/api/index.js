const request = require('../utils/request')
// 微信授权

class WechatController {
  async getWeChatAccessToken(data) {
    return request({
      url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${data.appid}&secret=${data.secret}`,
      method: 'get'
    })
  }
  // 获取微信用户手机号
  async getWeChatUserphone(token, data) {
    return request({
      url: 'https://api.weixin.qq.com/wxa/business/getuserphonenumber?access_token=' + token,
      method: 'post',
      data
    })
  }
}

module.exports = new WechatController()
