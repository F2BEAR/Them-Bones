const express = require('express')
const app = express()
const routes = require('./routes/index')
const authRoutes = require('./routes/auth')
const { handleError, ErrorHandler } = require('./middlewares/Error')
const cors = require('cors')
const logger = require('morgan')

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'))
}

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
