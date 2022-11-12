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