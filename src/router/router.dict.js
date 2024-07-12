const Router = require('koa-router')
const router = new Router({ prefix: '/dict' })
const { dict } = require('../controller')
const { foundDict, selectDict, selectDictAll, changeDict, removeDict } = dict
router.post('/', foundDict)
router.post('/all', selectDictAll)
router.post('/select', selectDict)
router.put('/', changeDict)
router.delete('/', removeDict)

module.exports = router
