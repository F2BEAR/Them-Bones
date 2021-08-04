const routes = require('express').Router()
const mail = require('../mail/Mail')

routes.get('/', (req, res) => {
  console.log('Someone is watching')
  res.send("Yes, I'm alive ~")
})

routes.post('/sendMail', mail.SendMail)

module.exports = routes
