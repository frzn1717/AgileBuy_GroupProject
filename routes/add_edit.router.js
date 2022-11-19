//ACA 11092022
var express = require('express');
var router = express.Router();

let productsController = require('../controllers/products.controller')
let authController = require('../controllers/auth');

// add_edit response
router.get('/edit', productsController.addEdit);

<<<<<<< Updated upstream
router.get('/list', productsController.displayList);

=======
//Get list
router.get('/list', productsController.displayList);

//edit
router.put('/edit/:id',productsController.processEditPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add',productsController.processAddPage);

//delete
router.delete('/delete/:id',productsController.performDelete);

>>>>>>> Stashed changes
module.exports = router;