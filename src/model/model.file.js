const db = require('../db')
const { DataTypes } = require('sequelize')

const File = db.define('t_file', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'file name'
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'file path'
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'file size'
  }
})

// File.sync({ force: true })
module.exports = File
