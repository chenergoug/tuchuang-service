const Router = require('koa-router')
const router = new Router({ prefix: '/accredit' })
const { accredit } = require('../controller')
const { impowerAccredit, getWechatPhoneNumber } = accredit
router.get('/', impowerAccredit, getWechatPhoneNumber)

module.exports = router
