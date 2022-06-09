const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'blog_schema',
    user: 'root',
    password: 'Golanisheli51!'
});

module.exports = pool;