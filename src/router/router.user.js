const Router = require('koa-router')
const router = new Router({ prefix: '/user' })
const { user } = require('../controller')
const { foundUser, selectUser, selectUserAll, changeUser, deleteUser } = user
router.post('/all', selectUserAll)
router.post('/', foundUser)
router.post('/select', selectUser)
router.put('/', changeUser)
router.delete('/', deleteUser)

module.exports = router
