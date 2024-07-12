const Router = require('koa-router')
const router = new Router({ prefix: '/menu' })
const { menu } = require('../controller')
const { foundMenu, selectMenu, selectMenuAll, changeMenu, removeMenu } = menu
router.post('/', foundMenu)
router.post('/all', selectMenuAll)
router.post('/select', selectMenu)
router.put('/', changeMenu)
router.delete('/', removeMenu)

module.exports = router
