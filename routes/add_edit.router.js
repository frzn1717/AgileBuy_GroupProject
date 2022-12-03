var express = require('express');
// const passport = require('passport'); //ACA 12022022
var router = express.Router();

//let passport = require('passport'); //ACA 12022022
let productsController = require('../controllers/products.controller')
let authController = require('../controllers/auth'); //ACA 12032022


// function requireAuth(req, res, next) {
//     // check if the user is logged in

//     if (!req.isAuthenticated()) {
//         req.session.url = req.originalUrl;
//         return res.redirect('/users/signin');
//     }
//     next();

// }

//list
router.get('/list', productsController.displayList);


//edit
router.put('/edit/:id', authController.requireAuth, authController.isAllowed, productsController.processEdit);

//add
router.post('/add', authController.requireAuth, productsController.processAdd);

//delete
router.delete('/delete/:id', authController.requireAuth, authController.isAllowed, productsController.performDelete);

module.exports = router;