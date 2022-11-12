/* Filename: product.model.js
Student Name: Natoya Maynard
Student ID: 822704060
Date: Thursday, November 10th, 2022 */
const { Double } = require('mongodb');
let mongoose = require('mongoose');

let productlistModel = mongoose.Schema({
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
        default: Date.now
    }
}, {
    collection: "inventory"
});
module.exports = mongoose.model('inventory', productlistModel);