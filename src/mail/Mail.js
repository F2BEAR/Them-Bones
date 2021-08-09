'use strict'
const nodemailer = require('nodemailer')
const config = require('../config')
const serverMail = config.SERVERMAIL
const userMail = config.USERMAIL
const passwordMail = config.PASSWORDMAIL
const portMail = config.PORTMAIL

exports.SendMail = (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    text: req.body.message
  }

  const transporter = nodemailer.createTransport({
    host: serverMail,
    port: portMail,
    secure: false,
    auth: {
      user: userMail,
      pass: passwordMail
    }
  })

  transporter.sendMail(
    {
      from: `${data.name} at Facu.DEV <${data.email}>`,
      replyTo: data.email,
      to: userMail,
      subject: `New Web-Site Inquiry from: ${data.name}`,
      text: data.text
    },
    (err, info) => {
      if (err) {
        console.error(err)
      } else {
        console.log(
          `Message sent: \n response: ${info.response} \n From: ${info.envelope.from} \n Message ID: ${info.messageId}`
        )
        res.sendStatus(res.statusCode)
      }
    }
  )

  transporter.sendMail(
    {
      from: `Auto-Reply facu.dev <${userMail}>`,
      replyTo: userMail,
      to: data.email,
      subject: 'Auto-Reply: Facundo Carbonel',
      text: "Thanks for getting in touch! I'll answer to you as soon as posible \n\nRegards, \nFacundo Carbonel \nhttps://facu.dev"
    },
    (err, info) => {
      if (err) {
        console.error(err)
      } else {
        console.log(
          `Auto-Reply sent: \n response: ${info.response} \n From: ${info.envelope.from} \n Message ID: ${info.messageId}`
        )
        res.sendStatus(res.statusCode)
      }
    }
  )
}
