const Router = require('koa-router')
const router = new Router({ prefix: '/accredit' })
const { accredit } = require('../controller')
const { impowerAccredit } = accredit
router.post('/', impowerAccredit)

module.exports = router
