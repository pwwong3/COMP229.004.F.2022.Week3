let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connnect to our book model
let Book = require('../model/books');
// GET ROUTE for the book list page - READ OPERATION
router.get('/', function(req, res, next) {
    Book.find((err, bookList) => {
        if(err) return console.error(err);
        res.render('book', { title: 'Books', BookList: bookList });
    });
});

/* GET Route for displaying the Add Page - CREATE operation */

/* POST route for processing the Add Page - CREATE operation */

/* GET ROUTE for displaying the Edit page - UPDATE operation */

/* POST ROUTE for processing the Edit page - UPDATE operation */

/* GET ROUTE for perform Deletion - DELETE operation */

module.exports = router;