const db = require('../db')
const { DataTypes } = require('sequelize')

const User = db.define('t_user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: 'user name'
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: 'password'
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    comment: 'is admin'
  },
  phone: {
    type: DataTypes.STRING(11),
    allowNull: true,
    unique: true,
    comment: 'phone'
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: false,
    comment: '角色 0 admin 1 用户 2 游客'
  },
  role_name: {
    type: DataTypes.STRING,
    defaultValue: false,
    comment: '角色名称'
  }
})

// User.sync({ force: true })
module.exports = User
