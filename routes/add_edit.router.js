//ACA 11092022
var express = require('express');
var router = express.Router();

let productsController = require('../controllers/products.controller')

// add_edit response
router.get('/edit', productsController.addEdit);

router.get('/list', productsController.displayList);

module.exports = router;