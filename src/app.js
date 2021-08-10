const express = require('express')
const app = express()
const routes = require('./routes/index')
const authRoutes = require('./routes/auth')
const { handleError, ErrorHandler } = require('./middlewares/Error')
const cors = require('cors')
const morgan = require('morgan')
const { logger } = require('./config/logger')

logger.stream = {
  write: function (message) {
    logger.http(message)
  }
}

app.get('/logger', (_, res) => {
  logger.error('This is an error log')
  logger.warn('This is a warn log')
  logger.info('This is a info log')
  logger.http('This is a http log')
  logger.verbose('This is a verbose log')
  logger.debug('This is a debug log')

  res.send('logged')
})

app.use(
  morgan(':method :url :status - :response-time ms - from :remote-addr', {
    stream: logger.stream
  })
)

app.use(express.json(), express.text())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(cors())

app.use('/', routes)
app.use('/auth', authRoutes)

app.all('*', (req, res) => {
  throw new ErrorHandler(404, `Sorry, cant find ${req.originalUrl}!`)
})

app.use((err, req, res, next) => {
  handleError(err, res)
})

module.exports = app
