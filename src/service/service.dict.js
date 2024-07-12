const { dict } = require('../model')

class DictService {
  // 创建字典
  async createDict({ label, value, key }) {}
  // 查询所有字典
  async inquireDictAll({ page, size }) {}
  // 查询字典
  async inquireDict({ id, label, value, key }) {}
  // 更新字典
  async updateDict({ id, label, value, key }) {}
  // 删除字典
  async deleteDict({ id }) {}
}
module.exports = new DictService()
