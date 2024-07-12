const { menu } = require('../model')

class MenuService {
  // 创建菜单
  async createMenu({ name, component, icon, status, isShow }) {}
  // 查询所有菜单
  async inquireMenuAll({ page, size }) {}
  // 查询菜单
  async inquireMenu({ id, name, component, icon, status, isShow }) {}
  // 更新菜单
  async updateMenu({ id, name, component, icon, status, isShow }) {}
  // 删除菜单
  async deleteMenu({ id }) {}
}
module.exports = new MenuService()
