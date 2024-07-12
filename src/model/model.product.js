const db = require('../db')
const { DataTypes } = require('sequelize')

const Product = db.define('t_product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '商品名称'
  },
  lead: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: '是否为主打产品'
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    comment: '商品价格'
  },
  desc: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '商品描述'
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '商品数量'
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '商品类型'
  }
})

// Product.sync({ force: true })
module.exports = Product
