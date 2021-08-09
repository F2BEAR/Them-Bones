const mongoose = require('mongoose')
const { Schema } = mongoose
const uniqueValidator = require('mongoose-unique-validator')

const Users = new Schema({
  name: { type: String, required: true },
  rol: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

Users.plugin(uniqueValidator)

module.exports = mongoose.model('Users', Users, 'Users')
