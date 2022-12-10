let inventory = require('../models/product.model')

function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.error[errName].message;
        }
    }
    if (err.message) {
        return err.message;
    } else {
        return 'Unknown server error';
    }
};

// ACA 12102022
exports.displayList = async function(req, res, next) {

    try{
        let displayList = await inventory.find().populate({
            path: 'owner',
            select: 'firstName lastName email username admin created'
        });

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


exports.processEdit = (req, res, next) => {
    let id = req.params.id

    let updatedItem = inventory({
        _id: id,
        name: req.body.name,
        brand: req.body.brand,
        category: req.body.category,
        quantity: req.body.quantity,
        price: req.body.price,
        description: req.body.description,

        owner: (req.body.owner == null || req.body.owner == "")? req.payload.id : req.body.owner
    });

    inventory.updateOne({ _id: id }, updatedItem, (err, result) => {
        if (err || result.modifiedCount == 0) {
            console.log(err);
            return res.status(400).json({
                success: false,
                message: err ? getErrorMessage(err) : 'itemnotfound'
            });
        } else {
            console.log(req.body);
            res.status(200).json({
                success: true,
                message: 'Updated successfully'
            })
        }
    });
}


exports.processAdd = (req, res, next) => {

    let newItem = inventory({
        _id: req.body.id,
        name: req.body.name,
        brand: req.body.brand,
        category: req.body.category,
        quantity: req.body.quantity,
        price: req.body.price,
        description: req.body.description,
        
        owner: (req.body.owner == null || req.body.owner == "")? req.payload.id : req.body.owner //ACA 12102022

    });

    inventory.create(newItem, (err, item) => {
        if (err) {
            console.log(err);
            return res.status(400).json({
                success: false,
                message: getErrorMessage(err)
            });
        } else {
            console.log(item);
            res.status(200).json(item);
        }
    });
}




exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    inventory.remove({ _id: id }, (err, result) => { 
        if (err) {
            console.log(err);
            res.status(400).json({
                success: false,
                message: getErrorMessage(err)
            })
        } else {
            // message to frontend
            res.status(200).json({
                success: true,
                message: 'Item removed'
            });
        }
    });
}