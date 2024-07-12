const Router = require('koa-router')
const router = new Router({ prefix: '/file' })
const { file } = require('../controller')
const { foundFile, selectFile, selectFileAll, changeFile, removeFile } = file
router.post('/', foundFile)
router.post('/all', selectFileAll)
router.post('/select', selectFile)
router.put('/', changeFile)
router.delete('/', removeFile)

module.exports = router
