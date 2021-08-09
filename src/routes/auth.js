const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/Authentication')

// controllers
const userCtrl = require('../controllers/usersController')

// "auth" routes
router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)
router.post('/userUpdate', authenticate, userCtrl.userUpdate)

module.exports = router
