const Router = require('koa-router')
const router = new Router({ prefix: '/accredit' })
const { accredit } = require('../controller')
const { impowerAccredit, getWechatPhoneNumber, getCreateWechatUser } = accredit
router.get('/', impowerAccredit, getWechatPhoneNumber, getCreateWechatUser)

module.exports = router
