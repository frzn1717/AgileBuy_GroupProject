var express = require('express');
const passport = require('passport');
var router = express.Router();

let productsController = require('../controllers/products.controller')


function requireAuth(req, res, next) {
    // check if the user is logged in

    if (!req.isAuthenticated()) {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();

}

//list
router.get('/list', productsController.displayList);


//edit

router.put('/edit/:id', passport.authenticate('tokencheck', { session: false }), productsController.processEdit);

//add

router.post('/add', passport.authenticate('tokencheck', { session: false }), productsController.processAdd);

//delete
router.delete('/delete/:id', passport.authenticate('tokencheck', { session: false }), productsController.performDelete);

module.exports = router;