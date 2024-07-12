const { user } = require('../model')

class UserService {
  // 创建用户
  async createUser(name, password, is_admin, phone, role, role_name) {
    const item = await user.create({ name, password, is_admin, phone, role, role_name })
    return item.dataValues
  }
  // 查询用户信息
  async getUser({ id, name, password, is_admin, phone, role }) {
    const whereOpt = {}
    id && Object.assign(whereOpt, { id })
    name && Object.assign(whereOpt, { name })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { is_admin })
    phone && Object.assign(whereOpt, { phone })
    role && Object.assign(whereOpt, { role })

    const item = await user.findOne({
      attributes: ['id', 'name', 'password', 'is_admin', 'phone', 'role'],
      where: whereOpt
    })
    return item ? item.dataValues : null
  }

  // 查询用户列表所有信息
  async getUserAll({ page, size }) {
    const offset = (page - 1) * size
    const list = await user.findAndCountAll({
      attributes: ['id', 'name', 'password', 'is_admin', 'phone', 'role'],
      limit: size,
      offset
    })
    return {
      list: list.rows.map((item) => item.dataValues),
      total: list.count
    }
  }

  // 修改用户信息
  async updateUser({ id, name, password, is_admin, phone, role, role_name }) {
    const where = { id }
    const User = {}
    name && Object.assign(User, { name })
    password && Object.assign(User, { password })
    is_admin && Object.assign(User, { is_admin })
    phone && Object.assign(User, { phone })
    role && Object.assign(User, { role })
    role_name && Object.assign(User, { role_name })

    const item = await user.update(User, { where })
    return item[0] > 0 ? true : false
  }
  // 删除用户信息
  async deleteUser(id) {
    const item = await user.destroy({ where: { id } })
    return item > 0 ? true : false
  }
}
module.exports = new UserService()
