// get the client
// import mysql from 'mysql2';
const mysql = require('mysql2/promise');


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic',
    // password: password
})

module.exports = pool;