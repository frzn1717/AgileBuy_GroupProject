//ACA 11092022
var express = require('express');
var router = express.Router();

let productsController = require('../controllers/products.controller')


//list
router.get('/list', productsController.displayList);


//edit
router.get('/edit/:id',productsController.displayEditPage);
router.post('/edit/:id',productsController.processEditPage);

//add
router.get('/add',productsController.displayAddPage);
router.post('/add',productsController.processAddPage);

//delete
router.get('/delete/:id',productsController.performDelete);

module.exports = router;