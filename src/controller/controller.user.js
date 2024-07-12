const { user } = require('../service')
const { createUser, getUser, updateUser, deleteUser, getUserAll } = user
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
      ctx.body = {
        code: 500,
        success: false,
        message: err
      }
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
      ctx.body = {
        code: 500,
        success: false,
        message: err.message
      }
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
      return (ctx.body = {
        code: 500,
        success: false,
        message: err.message
      })
    }
  }
}

module.exports = new UserController()
