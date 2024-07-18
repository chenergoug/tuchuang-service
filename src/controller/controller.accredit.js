// const { UnusualRequest, SucceedRequest } = require('../utils/config')
const { accredit } = require('../service')
const { getWeChatAccessToken } = require('../api')
// 第三方登录
class AccreditController {
  async impowerAccredit(ctx, next) {
    const { body } = ctx.request
    // const data = {
    //   appid: 'wx7e7a1713d121b53d',
    //   secret: '352f658477adf688f571907ff1158324',
    //   js_code: '45f3e6e3ca17570285efaf7277bd8a4c881560e0d0f2f5952b46d883d79ddf59',
    //   grant_type: 'authorization_code'
    // }
    getWeChatAccessToken(body)
      .then((res) => {
        console.log('res', res)
      })
      .catch((error) => {
        console.log('err', error)
      })
  }
}
module.exports = new AccreditController()
