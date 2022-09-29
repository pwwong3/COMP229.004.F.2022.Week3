let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connnect to our book model
let Book = require('../model/books');
// GET ROUTE for the book list page - READ OPERATION
Book.find((err, BookList) => {
    if(err) return console.error(err);
    console.log(BookList);
});

module.exports = router;