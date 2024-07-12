const db = require('../db')
const { DataTypes } = require('sequelize')
const Role = db.define('t_role', {
  label: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'role name'
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'role value'
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'role type'
  }
})

// Role.sync({ force: true })
module.exports = Role
