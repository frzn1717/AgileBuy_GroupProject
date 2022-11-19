<<<<<<< Updated upstream
exports.addEdit = function(req, res, next) {
    res.render(

      'product/add_edit', 
      { 
        title: 'Add Edit page',
        fullName: 'Arvin Almario',
        contactNumber: '09193033871',
        itemName: 'Iphone14',
        brand:'Phones',
        category: 'Electronics',
        quantity: '5',
        price: '1000',
        addDate: 'Nov. 09 2022', 
        location: 'Ontario',
        description: 'for sale, 9 months used, need to go, broken',
      }
    );
  };

  exports.displayList = function(req, res, next) {
    res.render(
      'product/edit', 
      { 
        title: 'List of Products',
        fullName: 'Arvin Almario',
        contactNumber: '09193033871',
        itemName: 'Iphone14',
        brand:'Phones',
        category: 'Electronics',
        quantity: '5',
        price: '1000',
        addDate: 'Nov. 09 2022', 
        location: 'Ontario',
        description: 'for sale, 9 months used, need to go, broken',
      }
    );
  };




/*
  exports.displayList = function(req, res, next) {  

   

    displayList.find((err, displayList) => {



        if(err)

        {

            return console.error(err);

        }

        else

        {

            res.render('product/edit', {

                //title: 'Product List',

                //product: displayList,

                //userName: req.user ? req.user.username : ''

            })            

        }

    });

}

*/



=======
/* Filename: products.controller.js
Student Name: Farzana Alam
Student ID: 301180910
Date: 19t hNovember, 2022 */

let inventory = require('../models/product.model')

function getErrorMessage(err) {    
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } 
    if (err.message) {
        return err.message;
    } else {
        return 'Unknown server error';
    }
};

exports.displayList = async function(req, res, next) {
    try {
   let displayList = await inventory.find().populate({
    path: 'owner',
    select: 'firstName lastName email username admin created'
   })
   
   res.status(200).json(displayList);
} catch (error) {
    return res.status(400).json(
        { 
            success: false, 
            message: getErrorMessage(error)
        }
    );
}
}

exports.processEditPage = (req, res, next) => {

    try {
        let id = req.params.id;

        let updatedItem = inventaroy({
            _id: id,
            name: req.body.name,
            brand: req.body.brand,
            category: req.body.category,
            quantity: req.body.quantity,
            price: req.body.price,
            description: req.body.description,
        });
    
inventory.updateOne({_id: id}, updatedItem, (err) => {
            if(err)
            {
                console.log(err);
 
                return res.status(400).json(
                    { 
                        success: false, 
                        message: getErrorMessage(err)
                    }
                );
            }
            else
            {
                res.status(200).json(
                    {
                        success: true,
                        message: 'Item updated successfully.'
                    }
                )
            }
        });
    } catch (error) {
        return res.status(400).json(
            { 
                success: false, 
                message: getErrorMessage(error)
            }
        );
    }
}

exports.processAddPage = (req, res, next) => {

try {
        let newItem = inventory({
            _id: req.body.id,
            name: req.body.name,
            brand: req.body.brand,
            category: req.body.category,
            quantity: req.body.quantity,
            price: req.body.price,
            description: req.body.description,
    });

    inventory.create(newItem, (err, item) =>{
            if(err)
            {
                console.log(err);

                return res.status(400).json(
                    { 
                        success: false, 
                        message: getErrorMessage(err)
                    }
                );
            }
            else
            {
                console.log(item);
                res.status(200).json(item);
            }
        });
    } catch (error) {
        return res.status(400).json(
            { 
                success: false, 
                message: getErrorMessage(error)
            }
        );
    }       
}

exports.performDelete = (req, res, next) => {

    try {
        let id = req.params.id;

        inventory.remove({_id: id}, (err) => {
            if(err)
            {
                console.log(err);
 
                return res.status(400).json(
                    { 
                        success: false, 
                        message: getErrorMessage(err)
                    }
                );
            }
            else
            {
                res.status(200).json(
                    {
                        success: true,
                        message: 'Item deleted successfully.'
                    }
                )
            }
        });
    } catch (error) {
        return res.status(400).json(
            { 
                success: false, 
                message: getErrorMessage(error)
            }
        );
    }   
}

>>>>>>> Stashed changes
