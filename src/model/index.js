const Model = {}
const fs = require('fs')
fs.readdirSync(__dirname).forEach((file) => {
  if (file !== 'index.js') {
    const name = file.slice(6, file.length - 3)
    const path = require(`./${file}`)
    Model[name] = path
  }
})
module.exports = Model
