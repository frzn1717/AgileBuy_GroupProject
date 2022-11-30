var express = require('express');
var router = express.Router();
let usersController = require('../controllers/user');
var passport = require('passport');

router.post('/signup', usersController.signup);

router.post('/signin', usersController.signin);


module.exports = router;