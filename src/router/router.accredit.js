const Router = require('koa-router')
const router = new Router({ prefix: '/accredit' })
const { accredit } = require('../controller')
const { impowerAccredit, getWechatPhoneNumber } = accredit
router.get('/', impowerAccredit, getWechatPhoneNumber, async (ctx, next) => {
  console.log('03-ctx.state', ctx.state)
  return (ctx.body = {
    code: 200,
    message: '登录成功',
    data: null
  })
})

module.exports = router
