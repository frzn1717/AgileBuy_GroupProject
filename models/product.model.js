<<<<<<< Updated upstream
const { Double } = require('mongodb');
=======

/* Filename: product.model.js
Student Name: Natoya Maynard
Student ID: 822704060
Date: Thursday, November 10th, 2022 */


>>>>>>> Stashed changes
let mongoose = require('mongoose');

// Create a model class
let productlistModel = mongoose.Schema(
{
    name: String,
    brand: String,
    model: String,
    category: String,
    quantity: Number,
    price: Double,
    dimensions: {
        h: Number,
        w: Number,
        uom: String
    },
    weight: String,
    description: String,
    date_added: {
        type: Date,
        default: Date.now}, 

        // Adds relationship with User
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"}
    },

{
    collection: "inventory"
<<<<<<< Updated upstream
});
module.exports = mongoose.model('inventory', productlistModel);
=======
}
);
module.exports = mongoose.model('products', productlistModel);
>>>>>>> Stashed changes
