const { user } = require('../service')
const { createUser, getUser, updateUser, deleteUser, getUserAll } = user
function err_bodt(err) {
  return {
    code: 500,
    success: false,
    message: err.message
  }
}
class UserController {
  // 创建用户
  async foundUser(ctx, next) {
    try {
      const user = await createUser(ctx.request.body)
      ctx.body = {
        code: 200,
        message: '创建成功',
        data: user
      }
      next()
    } catch (err) {
      ctx.body = err_bodt(err)
    }
  }
  // 查询单一用户
  async selectUser(ctx, next) {
    try {
      const user = await getUser(ctx.request.body)
      ctx.body = {
        code: 200,
        message: '查询成功',
        data: user
      }
      next()
    } catch (err) {
      ctx.body = err_bodt(err)
    }
  }
  // 查询用户列表所有信息
  async selectUserAll(ctx, next) {
    const data = ctx.request.body
    try {
      const user = await getUserAll(data)
      ctx.body = {
        code: 200,
        message: '查询成功',
        data: user
      }
      next()
    } catch (err) {
      ctx.body = err_bodt(err)
    }
  }
  // 更新用户信息
  async changeUser(ctx, next) {
    try {
      const user = await updateUser(ctx.request.body)
      ctx.body = {
        code: 200,
        message: '修改成功',
        data: user
      }
      next()
    } catch (err) {
      ctx.body = err_bodt(err)
    }
  }

  // 删除用户信息
  async deleteUser(ctx, next) {
    try {
      const user = await deleteUser(ctx.request.query)
      ctx.body = {
        code: 200,
        message: '删除成功',
        data: user
      }
      next()
    } catch (err) {
      ctx.body = err_bodt(err)
    }
  }
}

module.exports = new UserController()
