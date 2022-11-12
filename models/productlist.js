/* Filename: db.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, November 9th, 2022 */

let mongoose = require('mongoose');

//Creates the Model Schema:

let inventoryModel = mongoose.Schema(
    {
        
    },
    {
        collection: "inventory"
    }
);