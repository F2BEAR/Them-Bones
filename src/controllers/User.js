const User = require('../Models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { ErrorHandler } = require('../middlewares/Error')

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    User.findOne({ name: req.body.name })
      .then((user) => {
        if (user) {
          throw new ErrorHandler(409, 'That user already exists!')
        } else {
          const newUser = new User()
          newUser.name = req.body.name
          newUser.rol = req.body.rol
          newUser.email = req.body.name
          newUser.password = hash
          newUser.save((err, data) => {
            if (err) {
              throw new ErrorHandler(500, err)
            }
            if (data) {
              res.status(201).json({
                message: 'User added successfully!'
              })
            }
          })
        }
      })
      .catch((error) => {
        next(error)
      })
  })
}

exports.login = (req, res, next) => {
  User.findOne({ name: req.body.name })
    .then((user) => {
      if (!user) {
        throw new ErrorHandler(401, 'User not found!')
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            throw new ErrorHandler(401, 'Incorrect password!')
          }
          const secret = process.env.TOKENSECRET
          const token = jwt.sign({ userId: user._id }, secret, {
            expiresIn: '12h'
          })
          res.status(200).json({
            userId: user._id,
            rol: user.rol,
            token: token
          })
        })
        .catch((error) => {
          next(error)
        })
    })
    .catch((error) => {
      next(error)
    })
}

exmports.userUpdate = (req, res, next) => {
  User.findOne({ name: req.body.name })
    .then((user) => {
      if (!user) {
        throw new ErrorHandler(401, 'User not found!')
      } else {
        user.name = req.body.name
        user.rol = req.body.rol
        user.email = req.body.name
        user.password = hash
        user.save((err, data) => {
          if (err) {
            throw new ErrorHandler(500, err)
          }
          if (data) {
            res.status(201).json({
              message: 'User added successfully!'
            })
          }
        })
      }
    })
    .catch((error) => {
      next(error)
    })
}
