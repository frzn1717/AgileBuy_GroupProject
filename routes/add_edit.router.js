//ACA 11092022
var express = require('express');
var router = express.Router();

let productsController = require('../controllers/products.controller')

// Helper function for guard purposes
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
router.get('/edit/:id', requireAuth, productsController.displayEditPage);
router.post('/edit/:id', requireAuth, productsController.processEditPage);

//add
router.get('/add', requireAuth, productsController.displayAddPage);
router.post('/add', requireAuth, productsController.processAddPage);

//delete
router.get('/delete/:id', requireAuth, productsController.performDelete);

module.exports = router;