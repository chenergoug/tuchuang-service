const { file } = require('../service')
const { createFile, inquireFileAll, inquireFile, updateFile, deleteFile } = file
const { UnusualRequest, SucceedRequest } = require('../utils/config')
class FileController {
  // 创建附件
  async foundFile(ctx, next) {
    try {
      const file = await createFile(ctx.request.body)
      ctx.body = SucceedRequest(file)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }
  // 查询所有附件
  async selectFileAll(ctx, next) {
    const data = ctx.request.body
    try {
      const file = await inquireFileAll(data)
      ctx.body = SucceedRequest(file)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }
  // 查询附件
  async selectFile(ctx, next) {
    try {
      const file = await inquireFile(ctx.request.body)
      ctx.body = SucceedRequest(file)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }
  // 更新附件
  async changeFile(ctx, next) {
    try {
      const file = await updateFile(ctx.request.body)
      ctx.body = SucceedRequest(file)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }
  // 删除附件
  async removeFile(ctx, next) {
    try {
      const file = await deleteFile(ctx.request.query)
      ctx.body = SucceedRequest(file)
      await next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }
}
module.exports = new FileController()
