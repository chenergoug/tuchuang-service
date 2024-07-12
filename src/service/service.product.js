const { product } = require('../model')

class ProductService {
  // 创建产品信息
  async createProduct({ name, lead, price, desc, stock, type }) {}
  // 查询所有产品信息
  async inquireProductAll({ page, size }) {}
  // 查询产品信息
  async inquireProduct({ id, name, lead, price, desc, stock, type }) {}
  // 更新产品
  async updateProduct({ id, name, lead, price, desc, stock, type }) {}
  // 删除产品
  async deleteProduct({ id }) {}
}
module.exports = new ProductService()
