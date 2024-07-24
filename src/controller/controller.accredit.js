// const { UnusualRequest, SucceedRequest } = require('../utils/config')
const { WECHAT_APPID, WECHAT_SECRET } = require('../config')
const { getWeChatAccessToken, getWeChatUserphone } = require('../api')
const { M_AccreditSuccess, M_AccreditFailure, M_ServerError } = require('../utils/conditions')
// 第三方登录
class AccreditController {
  // 获取微信token
  async impowerAccredit(ctx, next) {
    const { code } = ctx.query
    try {
      const res = await getWeChatAccessToken({
        appid: WECHAT_APPID,
        secret: WECHAT_SECRET
      })
      ctx.state.access_token = res.access_token
      ctx.state.code = code
    } catch (error) {
      ctx.body = M_ServerError(error.message)
    }
    await next()
  }
  // 获取用户手机号码
  async getWechatPhoneNumber(ctx, next) {
    const { access_token, code } = ctx.state
    try {
      const res = await getWeChatUserphone(access_token, { code })
      if (res.errcode) {
        ctx.body = M_AccreditFailure
      } else {
        ctx.body = M_AccreditSuccess
        const phone = res.phone_info.phoneNumber
        await next()
      }
    } catch (error) {
      ctx.body = M_AccreditFailure(error.message)
    }
  }
  // 获取用户信息
  async getWechatUserInfo(ctx, next) {}
}
module.exports = new AccreditController()
