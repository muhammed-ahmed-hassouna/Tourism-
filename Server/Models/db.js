const { Pool } = require('pg');

const pool = new Pool({
  user: 'MO',
  password: '123',
  host: 'localhost',
  port: 5432, 
  database: 'Tourism '
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};