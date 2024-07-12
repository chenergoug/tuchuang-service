const Router = require('koa-router')
const router = new Router({ prefix: '/user' })
const { user } = require('../controller')
const { foundUser, selectUser, selectUserAll, changeUser, removeUser } = user
router.post('/', foundUser)
router.post('/all', selectUserAll)
router.post('/select', selectUser)
router.put('/', changeUser)
router.delete('/', removeUser)

module.exports = router
