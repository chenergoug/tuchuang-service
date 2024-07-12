const koa = require('koa')
const app = new koa()
const { koaBody } = require('koa-body')
const router = require('../router')

app.use(koaBody())
app.use(router.routes()).use(router.allowedMethods())

module.exports = app
