const Service = {}
const fs = require('fs')

fs.readdirSync(__dirname).forEach((file) => {
  if (file !== 'index.js') {
    const name = file.slice(8, file.length - 3)
    const path = require(`./${file}`)
    Service[name] = path
  }
})
module.exports = Service
