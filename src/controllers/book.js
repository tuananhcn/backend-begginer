const bookModel = require('../models/book');
const { getBooksFromServer, getSingleBookFromServer, findBook } = bookModel;

const getAllbook = (_, res) => {
   getBooksFromServer()
      .then((result) => {
         const { total, data } = result;
         res.status(200).json({
            data,
            total,
            err: null,
         });
      })
      .catch((error) => {
         const { err, status } = error;
         res.status(status).json({
            err,
            data: [],
         });
      });
};

const getBookById = (req, res) => {
   const id = req.params.id;
   getSingleBookFromServer(id)
      .then(({ data }) => {
         res.status(200).json({
            data,
            err: null,
         });
      })
      .catch((error) => {
         const { err, status } = error;
         res.status(status).json({
            data: [],
            err,
         });
      });
};

const findBookByQuery = (req, res) => {
   findBook(req.query)
      .then(({ data, total }) => {
         res.status(200).json({
            err: null,
            data,
            total,
         });
      })
      .catch(({ status, err }) => {
         res.status(status).json({
            data: [],
            err,
         });
      });
};

module.exports = {
   getAllbook,
   getBookById,
   findBookByQuery,
};
