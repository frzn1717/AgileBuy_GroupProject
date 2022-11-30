var express = require('express');
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

router.put('/edit/:id', productsController.processEdit);

//add

router.post('/add', productsController.processAdd);

//delete
router.delete('/delete/:id', productsController.performDelete);

module.exports = router;