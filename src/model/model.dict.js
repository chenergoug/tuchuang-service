const db = require('../db')
const { DataTypes } = require('sequelize')
const Dict = db.define('t_dict', {
  label: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'dict name'
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'dict value'
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'dict type'
  }
})

// Dict.sync({ force: true })
module.exports = Dict
