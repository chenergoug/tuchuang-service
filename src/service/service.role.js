const { role } = require('../model')

class RoleService {
  // 创建角色
  async createRole({ label, value, key }) {}
  // 查询所有角色
  async inquireRoleAll({ page, size }) {}
  // 查询角色
  async inquireRole({ id, label, value, key }) {}
  // 更新角色
  async updateRole({ id, label, value, key }) {}
  // 删除角色
  async deleteRole({ id }) {}
}
module.exports = new RoleService()
