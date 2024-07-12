const path = require('path')
const dotenv = require('dotenv')
// 当前目录
// console.log('***', process.cwd())
dotenv.config({
  path: path.resolve(__dirname, '../../.env'), // 配置文件路径
  encoding: 'utf8', // 编码方式，默认utf8
  debug: false // 是否开启debug，默认false
})
module.exports = process.env
