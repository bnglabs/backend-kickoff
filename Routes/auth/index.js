const express = require('express');
const router = express.Router();
const login = require('./login')
const signUp = require('./signUp')
const updatePassword = require('./updatePassword')
const verifyPassword = require('./verifyPassword')
const forgetPassword = require('./forgetPassword')
const { TokenVerification } = require('../../Middleware')

// ROUTES * /api/auth/

router.post('/login', login)
router.post('/register', signUp)
router.put('/', updatePassword)
router.post('/', verifyPassword)



module.exports = router