const jwt = require('jsonwebtoken')
const { ErrorHandler } = require('./Error')
const User = require('../Models/User')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization
    const secret = process.env.TOKENSECRET
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        throw new ErrorHandler(401, err)
      }
      const userId = decoded.userId
      if (req.body.userId && req.body.userId !== userId) {
        throw new ErrorHandler(401, 'Invalid user ID')
      } else {
        User.findOne({ _id: userId })
          .then((user) => {
            if (user.rol !== 'admin') {
              throw new ErrorHandler(403, 'Sorry, you are not allowed')
            } else {
              next()
            }
          })
          .catch((error) => {
            next(error)
          })
      }
    })
  } catch (error) {
    next(error)
  }
}
