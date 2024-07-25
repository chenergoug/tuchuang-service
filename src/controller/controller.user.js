const { user } = require('../service')
const { createUser, getUser, updateUser, deleteUser, getUserAll } = user
const { UnusualRequest, SucceedRequest } = require('../utils/config')

class UserController {
  // 创建用户
  async foundUser(ctx, next) {
    try {
      const { user } = ctx.state
      if (user === null) {
        await createUser(ctx.request.body)
        ctx.body = SucceedRequest(null)
        await next()
      } else {
        ctx.body = UnusualRequest(null, '创建失败')
      }
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 查询用户列表所有信息
  async selectUserAll(ctx, next) {
    const data = ctx.request.body
    try {
      const user = await getUserAll(data)
      ctx.body = SucceedRequest(user)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 查询单一用户
  async selectUser(ctx, next) {
    try {
      const user = await getUser(ctx.request.body)
      ctx.state.user = user
      ctx.body = SucceedRequest(user)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 用户登录
  async loginUser(ctx, next) {
    const { user } = ctx.state
    if (user === null) {
      ctx.body = UnusualRequest(null, '账号或密码错误')
    } else {
      ctx.body = SucceedRequest(user, '登录成功')
      await next()
    }
  }

  // 更新用户信息
  async changeUser(ctx, next) {
    try {
      const user = await updateUser(ctx.request.body)
      ctx.body = SucceedRequest(user)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 删除用户信息
  async removeUser(ctx, next) {
    try {
      const user = await deleteUser(ctx.request.query)
      ctx.body = SucceedRequest(user)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }
}

module.exports = new UserController()
