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

// ACA 12032022
exports.displayList = async function(req, res, next) {

    // try{
    //     let displayList = await inventory.find().populate({
    //         path: 'owner',
    //         select: 'firstName lastName email username admin created'
    //     });
    // }

    inventory.find((err, displayList) => {
        if (err) {

            console.error(err);

            res.status(400).json({
                success: false,
                message: getErrorMessage(err)
            })

        } else {
            res.status(200).json(displayList);
        }
    });
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

        owner: (req.body.owner == null || req.body.owner == "")? req.payload.id : req.body.owner //ACA 12032022
    });

    inventory.updateOne({ _id: id }, updatedItem, (err) => {
        if (err) {
            console.log(err);
            res.status(400).json({
                success: false,
                message: getErrorMessage(err)
            })
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
        
        owner: (req.body.owner == null || req.body.owner == "")? req.payload.id : req.body.owner //ACA 12032022

    });

    inventory.create(newItem, (err, item) => {
        if (err) {
            console.log(err);
            res.status(400).json({
                success: false,
                message: getErrorMessage(err)
            })
        } else {
            console.log(item);
            res.status(200).json(displayList);
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