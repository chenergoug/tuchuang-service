const Router = require('koa-router')
const router = new Router({ prefix: '/product' })
const { product } = require('../controller')
const { foundProduct, selectProduct, selectProductAll, changeProduct, removeProduct } = product
router.post('/', foundProduct)
router.post('/all', selectProductAll)
router.post('/select', selectProduct)
router.put('/', changeProduct)
router.delete('/', removeProduct)

module.exports = router
