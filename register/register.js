//function Register() {};
const connect = require("../connect.js");

(function() {


    module.exports.registerUser = function(username, password, callback) {


        let check = `SELECT username FROM users WHERE username = ?;`;

        connect.query(check, username, function(err, result) {
            if (err) throw err;

            try {
                result[0].username;
                console.log("Username already exists.");
                callback(false);
                return;
            } catch (err) {
                console.log("Username does not exist.");

                let sql = `INSERT INTO users(username, password) VALUES (?,?)`;


                var values = [username, password];

                connect.query(sql, values, function(err, result) {
                    if (err) throw err;

                    console.log("sent data to sql server.");
                    callback(true, values[0]);

                });


            }

        })

    }


}());