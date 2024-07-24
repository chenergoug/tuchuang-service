// const { UnusualRequest, SucceedRequest } = require('../utils/config')
const { WECHAT_APPID, WECHAT_SECRET } = require('../config')
const { getWeChatAccessToken, getWeChatUserphone } = require('../api')
// 第三方登录
class AccreditController {
  // 获取微信token
  async impowerAccredit(ctx, next) {
    const { code } = ctx.query
    getWeChatAccessToken({
      appid: WECHAT_APPID,
      secret: WECHAT_SECRET
    })
      .then((res) => {
        ctx.state.access_token = res.access_token
        ctx.state.code = code
        console.log('01-ctx.state', ctx.state)
        next()
      })
      .catch((error) => {
        console.log('01-err', error)
      })
  }
  // 获取用户手机号码
  async getWechatPhoneNumber(ctx, next) {
    console.log('02-ctx.state', ctx.state)
    const { access_token, code } = ctx.state
    getWeChatUserphone(access_token, { code })
      .then((res) => {
        console.log('02-res', res)
      })
      .catch((error) => {
        console.log('02-err', error)
      })
  }
  // 获取用户信息
  async getWechatUserInfo(ctx, next) {}
}
module.exports = new AccreditController()
