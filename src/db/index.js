const { Sequelize } = require('sequelize')
const { MYSQL_DB, MYSQL_USER, MYSQL_PAW, MYSQL_HOST, MYSQL_PORT } = require('../config')

const DB = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PAW, {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  dialect: 'mysql',
  timestamps: true,
  timezone: '+08:00', //中国时间
  dialectOptions: {
    dateStrings: true, //查询数据时间戳格式化
    typeCast: true
  }
})

// 测试链接是否成功
// async function testDb() {
//   try {
//     await DB.authenticate()
//     console.log('Connection has been established successfully.')
//   } catch (error) {
//     console.error('Unable to connect to the database:', error)
//   }
// }

// testDb()

module.exports = DB
