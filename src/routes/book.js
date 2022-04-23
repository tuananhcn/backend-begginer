const express = require('express');

const Router = express.Router();

const bookController = require('../controllers/book');

Router.get('/all', bookController.getAllbook);
Router.get('/:id', bookController.getBookById);
Router.get('/', bookController.findBookByQuery);

// Router.post('/', () => {
//    //memasukan buku baru
// });

module.exports = Router;
