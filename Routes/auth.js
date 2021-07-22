const express = require('express')
const authController = require('../controllers/auth')

const router = express.Router()



// get pages routers

// GET :: /auth/login
router.get('/login', authController.getLoginPage)
// GET :: /auth/signup
router.get('/signup', authController.getSignupPage)


// POST :: /auth/login
router.post('/login', authController.loginUser)
// POST :: /auth/signup
router.post('/signup', authController.addUser)


module.exports = router