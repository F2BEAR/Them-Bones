const dotenv = require('dotenv')
const path = require('path')
const dir = path.join(__dirname, '/env')

dotenv.config({
  path: path.join(dir, `${process.env.NODE_ENV}.env`)
})

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8000,
  URL: process.env.URL || 'http://127.0.0.1',
  MONGOUSER: process.env.MONGOUSER,
  MONGOPASS: process.env.MONGOPASS,
  MONGOURI: process.env.MONGOURI,
  MONGOPORT: process.env.MONGOPORT,
  MONGODB: process.env.MONGODB,
  SERVERMAIL: process.env.SERVERMAIL,
  USERMAIL: process.env.USERMAIL,
  PASSWORDMAIL: process.env.PASSWORDMAIL,
  PORTMAIL: process.env.PORTMAIL
}
