let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connnect to our book model
let Book = require('../model/books');
// GET ROUTE for the book list page - READ OPERATION
router.get('/', function(req, res, next) {
    Book.find((err, bookList) => {
        if (err) return console.error(err);
        res.render('book/list', { title: 'Books', BookList: bookList });
    });
});

/* GET Route for displaying the Add Page - CREATE operation */
router.get('/add', (req, res) => {
    res.render('book/add', { title: 'Add book' });
});

/* POST route for processing the Add Page - CREATE operation */
router.post('/add', (req, res) => {
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price,
    });
    Book.create(newBook, (err, Book) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/BookList');
        }
    });
});

/* GET ROUTE for displaying the Edit page - UPDATE operation */
router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    Book.findById(id, (err, bookToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else{
            res.render('book/edit', { title: 'Edit book', book: bookToEdit });
        }
    });
});

/* POST ROUTE for processing the Edit page - UPDATE operation */
router.post('/edit/:id', (req, res) => {
    let id = req.params.id;
    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price,
    });
    Book.updateOne({_id:id}, updatedBook, err => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/BookList');
        }
    });
});

/* GET ROUTE for perform Deletion - DELETE operation */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;
    Book.remove({_id:id}, err => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/BookList');
        }
    });
});
module.exports = router;