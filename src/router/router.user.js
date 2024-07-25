const Router = require('koa-router')
const router = new Router({ prefix: '/user' })
const { user } = require('../controller')
const { foundUser, selectUser, selectUserAll, changeUser, removeUser, loginUser } = user
router.post('/create', selectUser, foundUser)
router.post('/login', selectUser, loginUser)
// router.post('/login', selectUserAll)
// router.post('/select', selectUser)
// router.put('/', changeUser)
// router.delete('/', removeUser)

module.exports = router
