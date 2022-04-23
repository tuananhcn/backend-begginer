const db = require('../config/db');

const getBooksFromServer = () => {
   return new Promise((resolve, reject) => {
      //   let err = false;
      //   if (err)
      //      return reject({
      //         err: new Error(err),
      //         status: 500,
      //      });
      //   return resolve(books);
      db.query('SELECT * FROM books')
         .then((result) => {
            const response = {
               total: result.rowCount,
               data: result.rows,
            };
            resolve(response);
         })
         .catch((err) => {
            reject({
               status: 500,
               err,
            });
         });
   });
};

const getSingleBookFromServer = (id) => {
   return new Promise((resolve, reject) => {
      const sqlQuery = 'select * from books where id = $1';
      db.query(sqlQuery, [id])
         .then((result) => {
            if (result.rows.length === 0) {
               return reject({
                  status: 404,
                  err: 'Book Not Found',
               });
            }
            const response = {
               data: result.rows,
            };
            resolve(response);
         })
         .catch((err) => {
            reject({
               status: 500,
               err,
            });
         });
   });
};

const findBook = (query) => {
   return new Promise((resolve, reject) => {
      const { title } = query;
      const sqlQuery = 'select * from books where title like $1';
      db.query(sqlQuery, [title])
         .then((result) => {
            if (result.rows.length === 0) {
               return reject({
                  status: 404,
                  err: 'Book',
               });
            }
            const response = {
               total: result.rowCount,
               data: result.rows,
            };
            resolve(response);
         })
         .catch((err) => {
            reject({
               status: 500,
               err,
            });
         });
   });
};

module.exports = {
   getBooksFromServer,
   getSingleBookFromServer,
   findBook,
};
