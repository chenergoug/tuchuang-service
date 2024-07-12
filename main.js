const app = require('./src/app')
const { APP_PORT } = require('./src/config')
app.listen(APP_PORT, () => {
  console.log('running in open http://localhost:' + APP_PORT)
})
