const psql = require('pg');
const { Pool } = psql;

const db = new Pool({
   user: 'elyasprba',
   host: 'localhost',
   database: 'elyasprba',
   password: 'poerba@2022',
   port: 5432,
});

module.exports = db;
