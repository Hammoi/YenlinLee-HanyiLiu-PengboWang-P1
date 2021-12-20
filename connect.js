const mysql = require('mysql');
/**
 * Connects to database.
 *  */

console.log("Establishing connection with mySQL...");

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'admin', // use your mysql username.
    password: 'admin', // user your mysql password.
    database: 'website'
});

pool.getConnection((err, connection) => {
    // if (err) {
    //     console.error("Something went wrong connecting to the database ...");
    //     console.log(err);
    // }
    if (connection) {
        console.log("Successfully connected to mySQL.");
        connection.release();
    }
    return;
});

//pool.query = util.promisify(pool.query);

module.exports = pool;