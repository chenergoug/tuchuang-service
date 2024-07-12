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
    comment: 'phone'
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: false,
    comment: '角色'
  },
  role_name: {
    type: DataTypes.STRING,
    defaultValue: false,
    comment: '角色名称'
  }
})

// User.sync({ force: true })
module.exports = User
