// "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe" dentro de c para iniciar el cli de mongo en consola
require('dotenv').config()
require('./config/dbConnection')
const config = require('./config')
const port = config.PORT
const url = config.URL
const app = require('./app.js')
const { logger } = require('./config/logger')

app.listen(port, () => {
  logger.info(config.NODE_ENV)
  logger.info(`Express escuchando en el puerto ${port}`)
  console.log(`${url}:${port}`)
})
