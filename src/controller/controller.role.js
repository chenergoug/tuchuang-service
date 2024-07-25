const { role } = require('../service')
const { createRole, inquireRoleAll, inquireRole, updateRole, deleteRole } = role
const { UnusualRequest, SucceedRequest } = require('../utils/config')
class RoleController {
  // 创建角色
  async foundRole(ctx, next) {
    try {
      const role = await createRole(ctx.request.body)
      ctx.body = SucceedRequest(role)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 查询所有角色
  async selectRoleAll(ctx, next) {
    const data = ctx.request.body
    try {
      const role = await inquireRoleAll(data)
      ctx.body = SucceedRequest(role)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 查询角色
  async selectRole(ctx, next) {
    try {
      const role = await inquireRole(ctx.request.body)
      ctx.body = SucceedRequest(role)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 更新角色
  async changeRole(ctx, next) {
    try {
      const role = await updateRole(ctx.request.body)
      ctx.body = SucceedRequest(role)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 删除角色
  async removeRole(ctx, next) {
    try {
      const role = await deleteRole(ctx.request.query)
      ctx.body = SucceedRequest(role)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }
}
module.exports = new RoleController()
