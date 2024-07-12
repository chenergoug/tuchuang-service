const Router = require('koa-router')
const router = new Router({ prefix: '/role' })
const { role } = require('../controller')
const { foundRole, selectRole, selectRoleAll, changeRole, removeRole } = role
router.post('/', foundRole)
router.post('/all', selectRoleAll)
router.post('/select', selectRole)
router.put('/', changeRole)
router.delete('/', removeRole)

module.exports = router
