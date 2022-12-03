/* Filename: db.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, November 8th, 2022 */

//I will need to take care of my DB access password in the following weeks.

//let atlasDB = "mongodb+srv://agilebuy:iyaXBETNQNxVcHlD@cluster007.bgz8ml0.mongodb.net/products?retryWrites=true&w=majority"; //ACA 12022022

let config = require('./config'); //ACA 12022022

let mongoose = require('mongoose');

module.exports = function() {
    //Connects the application to MongoDB database:
    //mongoose.connect(atlasDB); //ACA 12022022

    mongoose.connect(config.ATLASDB); //ACA 12022022

    let mongoDB = mongoose.connection;
    mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
    mongoDB.once('open', () => {
        console.log("==== Connected to MongoDB Successfully ====");
    });

    return mongoDB;
}