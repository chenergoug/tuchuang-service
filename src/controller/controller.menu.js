const { menu } = require('../service')
const { createMenu, inquireMenuAll, inquireMenu, updateMenu, deleteMenu } = menu
const { UnusualRequest, SucceedRequest } = require('../utils/config')
class MenuController {
  // 创建菜单
  async foundMenu(ctx, next) {
    try {
      const menu = await createMenu(ctx.request.body)
      ctx.body = SucceedRequest(menu)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 查询所有菜单
  async selectMenuAll(ctx, next) {
    const data = ctx.request.body
    try {
      const menu = await inquireMenuAll(data)
      ctx.body = SucceedRequest(menu)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 查询菜单
  async selectMenu(ctx, next) {
    try {
      const menu = await inquireMenu(ctx.request.body)
      ctx.body = SucceedRequest(menu)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 更新菜单
  async changeMenu(ctx, next) {
    try {
      const menu = await updateMenu(ctx.request.body)
      ctx.body = SucceedRequest(menu)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 删除菜单
  async removeMenu(ctx, next) {
    try {
      const menu = await deleteMenu(ctx.request.query)
      ctx.body = SucceedRequest(menu)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }
}
module.exports = new MenuController()
