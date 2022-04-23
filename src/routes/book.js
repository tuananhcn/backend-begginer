const express = require('express');

const Router = express.Router();

const bookController = require('../controllers/book');

Router.get('/all', bookController.getAllbook);

Router.get('/1', bookController.getBookById);

// Router.post('/', () => {
//    //memasukan buku baru
// });

module.exports = Router;
