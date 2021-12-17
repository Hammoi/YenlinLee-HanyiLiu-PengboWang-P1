//function Register() {};
const connect = require("../connect.js");

(function() {


    module.exports.getPassword = function(username, callback) {
        console.log(username);
        let sql = `SELECT password FROM users WHERE username LIKE ?`;

        connect.query(sql, username, function(err, result) {
            if (err) {
                console.log("User does not exist.");
                console.log(err);
            } else {
                if (result.length == 0) {
                    console.log("User does not exist.");
                } else {
                    console.log("Found password.");
                    console.log(result[0].password);
                    callback(result[0].password);
                    return;
                }
            }
        });

        callback(null);
    }
}());