const db = require('../db')
const { DataTypes } = require('sequelize')
const Role = db.define('t_role', {
  label: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '角色名称'
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '角色值'
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '角色类型'
  }
})

// Role.sync({ force: true })
module.exports = Role
