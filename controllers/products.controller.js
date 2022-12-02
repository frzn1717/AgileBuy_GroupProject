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

exports.displayList = function(req, res, next) {
    inventory.find((err, displayList) => {
        if (err) {

            console.error(err);

            res.status(400).json({
                success: false,
                message: getErrorMessage(err)
            })

        } else {
            // res.render('product/edit', {
            //     title: 'List Page',
            //     product: displayList,
            //     userName: req.user ? req.user.username : ''
            // })
            res.status(200).json(displayList);
        }
    });
}

// exports.displayEditPage = (req, res, next) => {
//     let id = req.params.id;

//     inventory.findById(id, (err, itemToEdit) => {
//         if (err) {
//             console.log(err);
//             res.end(err);
//         } else {
//             //show the edit view
//             res.render('product/add_edit', {
//                 title: 'Edit Item',
//                 item: itemToEdit,
//                 userName: req.user ? req.user.username : ''
//             })
//         }
//     });
// }


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
        //userName: req.user ? req.user.username : ''
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


// exports.displayAddPage = (req, res, next) => {
//     let newItem = inventory();

//     res.render('product/add_edit', {
//         title: 'Add new Item',
//         item: newItem,
//         userName: req.user ? req.user.username : ''
//     })
// }

exports.processAdd = (req, res, next) => {
    let newItem = inventory({
        _id: req.body.id,
        name: req.body.name,
        brand: req.body.brand,
        category: req.body.category,
        quantity: req.body.quantity,
        price: req.body.price,
        description: req.body.description,
        //userName: req.user ? req.user.username : ''
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

    inventory.remove({ _id: id }, (err) => {
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