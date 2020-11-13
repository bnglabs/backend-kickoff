const express = require('express');
const Auth = require('./auth')
const router = express.Router();

// AUTH Routes * /api/auth/*
router.use('/auth', Auth)


module.exports = router;