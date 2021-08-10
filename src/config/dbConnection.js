const mongoose = require('mongoose')
const config = require('.')
const mongoURI = config.MONGOURI
const mongoPort = config.MONGOPORT
const mongoDB = config.MONGODB
const { logger } = require('./logger')

mongoose
  .connect(`mongodb://${mongoURI}:${mongoPort}/${mongoDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then((connection) => {
    logger.info('Successfully connected to MongoDB!')
    return connection
  })
  .catch((err) => {
    logger.error('Unable to connect to MongoDB :(')
    logger.error(err)
    return err
  })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

module.exports = db
