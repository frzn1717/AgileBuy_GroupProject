var express = require('express');
var router = express.Router();
let usersController = require('../controllers/user');
//var passport = require('passport');
let authController = require('../controllers/auth'); //ACA 12102022

router.post('/signup', usersController.signup);

router.post('/signin', usersController.signin);

router.get('/me', authController.requireAuth, usersController.myprofile); //ACA 12102022


module.exports = router;