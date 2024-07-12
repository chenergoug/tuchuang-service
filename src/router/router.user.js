const Router = require('koa-router')
const router = new Router({ prefix: '/user' })
const { user } = require('../controller')
const { foundUser, selectUser, selectUserAll } = user
router.post('/all', selectUserAll)
router.post('/', foundUser)
router.post('/select', selectUser)

module.exports = router
