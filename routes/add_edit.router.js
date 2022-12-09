var express = require('express');
// const passport = require('passport'); //ACA 12022022
var router = express.Router();

let passport = require('passport'); //ACA 12022022
let productsController = require('../controllers/products.controller')
//let authController = require('../controllers/auth'); //ACA 12032022


//list
router.get('/list', passport.authenticate('tokencheck', {session: false}), productsController.displayList);


//edit
//router.put('/edit/:id', authController.requireAuth, authController.isAllowed, productsController.processEdit);
router.put('/edit/:id', productsController.processEdit);

//add
//router.post('/add', authController.requireAuth, productsController.processAdd);
router.post('/add', passport.authenticate('tokencheck', {session: false}), productsController.processAdd);

//delete
//router.delete('/delete/:id', authController.requireAuth, authController.isAllowed, productsController.performDelete);
router.delete('/delete/:id', passport.authenticate('tokencheck', {session: false}), passport.authenticate('tokencheck', {session: false}), productsController.performDelete);
module.exports = router;