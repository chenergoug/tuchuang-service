const { product } = require('../service')
const { createProduct, inquireProductAll, inquireProduct, updateProduct, deleteProduct } = product
const { UnusualRequest, SucceedRequest } = require('../utils/config')
class ProductController {
  // 创建商品
  async foundProduct(ctx, next) {
    try {
      const product = await createProduct(ctx.request.body)
      ctx.body = SucceedRequest(product)
      next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 查询所有商品
  async selectProductAll(ctx, next) {
    const data = ctx.request.body
    try {
      const product = await inquireProductAll(data)
      ctx.body = SucceedRequest(product)
      next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 查询商品
  async selectProduct(ctx, next) {
    try {
      const product = await inquireProduct(ctx.request.body)
      ctx.body = SucceedRequest(product)
      next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 更新商品
  async changeProduct(ctx, next) {
    try {
      const product = await updateProduct(ctx.request.body)
      ctx.body = SucceedRequest(product)
      next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }

  // 删除商品
  async removeProduct(ctx, next) {
    try {
      const product = await deleteProduct(ctx.request.query)
      ctx.body = SucceedRequest(product)
      next()
    } catch (err) {
      ctx.body = UnusualRequest(err)
    }
  }
}
module.exports = new ProductController()
