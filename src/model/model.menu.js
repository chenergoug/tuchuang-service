const db = require('../db')
const { DataTypes } = require('sequelize')
const Menu = db.define('t_menu', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'menu name'
  },
  component: {
    type: DataTypes.STRING,
    comment: 'menu url'
  },
  icon: {
    type: DataTypes.STRING,
    comment: 'icon'
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: 'status'
  },
  isShow: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: 'is show'
  }
})

// Menu.sync({ force: true })
module.exports = Menu
