const { file } = require('../model')

class FileService {
  // 创建附件
  async createFile({ name, path, size }) {}
  // 查询所有附件
  async inquireFileAll({ page, size }) {}
  // 查询附件
  async inquireFile({ id, name, path, size }) {}
  // 更新附件
  async updateFile({ id, name, path, size }) {}
  // 删除附件
  async deleteFile({ id }) {}
}
module.exports = new FileService()
