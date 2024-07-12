const User = {}
const fs = require('fs')

fs.readdirSync(__dirname).forEach((file) => {
  if (file !== 'index.js') {
    const name = file.slice(11, file.length - 3)
    const path = require(`./${file}`)
    User[name] = path
  }
})
module.exports = User
