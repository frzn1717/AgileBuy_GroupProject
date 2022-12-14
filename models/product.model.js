
/* Filename: product.model.js
Student Name: Natoya Maynard
Student ID: 822704060
Date: Thursday, November 10th, 2022 */




let mongoose = require('mongoose');

let productlistModel = mongoose.Schema({
    name: String,
    brand: String,
    //model: String,
    category: String,
    quantity: Number,
    price: Number, //changed to number from double
    description: String,
    date_added: {
        type: Date,
        default: Date.now
    },

    //adds relationship with the User //ACA 12022022 12102022
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    collection: "inventory"
});

module.exports = mongoose.model('products', productlistModel);
