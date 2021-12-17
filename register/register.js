//function Register() {};
const connect = require("../connect.js");

(function() {


    module.exports.registerUser = function(username, password) {
        var values = [username, password];
        let sql = `INSERT INTO users(username, password) VALUES (?,?)`;


        connect.query(sql, values, function(err, result) {
            if (err) throw err;
        });

        console.log("sent data to sql server.");
    }


}());