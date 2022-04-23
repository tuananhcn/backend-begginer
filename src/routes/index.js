const express = require('express');
const Router = express.Router();

const bookRouter = require('./book');

Router.use('/book', bookRouter);

module.exports = Router;
