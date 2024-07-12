const { dict } = require('../service')
const { createDict, inquireDictAll, inquireDict, updateDict, deleteDict } = dict
const { UnusualRequest, SucceedRequest } = require('../utils/config')
class DictController {
  // 创建字典
  async foundDict(ctx, next) {
    try {
      const dict = await createDict(ctx.request.body)
      ctx.body = SucceedRequest(dict)
      next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 查询所有字典
  async selectDictAll(ctx, next) {
    const data = ctx.request.body
    try {
      const dict = await inquireDictAll(data)
      ctx.body = SucceedRequest(dict)
      next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 查询字典
  async selectDict(ctx, next) {
    try {
      const dict = await inquireDict(ctx.request.body)
      ctx.body = SucceedRequest(dict)
      next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 更新字典
  async changeDict(ctx, next) {
    try {
      const dict = await updateDict(ctx.request.body)
      ctx.body = SucceedRequest(dict)
      next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 删除字典
  async removeDict(ctx, next) {
    try {
      const dict = await deleteDict(ctx.request.query)
      ctx.body = SucceedRequest(dict)
      next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }
}
module.exports = new DictController()
