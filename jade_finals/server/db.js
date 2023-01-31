const mysql = require('mysql2');

const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "password",
    database: "jade_project"
})

module.exports = db;