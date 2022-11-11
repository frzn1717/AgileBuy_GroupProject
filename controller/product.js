
// Connect to our model
let product = require('../models/product');

// Gets all todo from the Database and renders the page to list them all.
module.exports.productList = function (req, res, next) {

    Product.find((err, productList) => {
        //console.log(productList);
        if (err) {
            return console.error(err);
        }
        else 
        {
            res.render('product/list', { 
                title: 'Used Product List', 
                ProductList: productList, 
                userName: req.user ? req.user.username : '' 
            })
        }
    });
}

// Gets a business by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Business.findById(id, (err, businessToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('business/add_edit', {
                title: 'Edit Contact', 
                business: businessToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });

}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    //console.log(req.body);

    let updatedBusiness = Business({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email

    });

    // console.log(updatedItem);

    Business.updateOne({_id: id}, updatedBusiness, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the business list
            res.redirect('/business/list');
        }
    });
}

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
    
    let newBusiness = Business();

    res.render('business/add_edit', {
        title: 'Add New Contact',
        business: newBusiness,
        userName: req.user ? req.user.username : ''
        
    })          
}

// Processes the data submitted from the Add form to create a new todo
module.exports.processAddPage = (req, res, next) => {

    //console.log(req.body);

    let newBusiness = Business({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
    });

    Business.create(newBusiness, (err, business) =>{
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the business list
            console.log(business);
            res.redirect('/business/list');
        }
    });

}

// Deletes a business based on its id.
module.exports.performDelete = (req, res, next) => {
    
    let id = req.params.id;

    Business.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the list
            res.redirect('/business/list');
        }
    });
}