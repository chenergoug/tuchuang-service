const db = require('../db')
const { DataTypes } = require('sequelize')
const DictList = db.define('t_dict_list', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'dict name'
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'dict value'
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'dict type'
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: 'status'
  },
  remark: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'remark'
  }
})

// DictList.sync({ force: true })
module.exports = DictList
