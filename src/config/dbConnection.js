const mongoose = require('mongoose')
const config = require('.')
const mongoURI = config.MONGOURI
const mongoPort = config.MONGOPORT
const mongoDB = config.MONGODB
mongoose
  .connect(`mongodb://${mongoURI}:${mongoPort}/${mongoDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then((connection) => {
    console.log('Successfully connected to MongoDB!')
    return connection
  })
  .catch((err) => {
    console.error('Unable to connect to MongoDB :(')
    console.error(err)
    return err
  })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

module.exports = db
