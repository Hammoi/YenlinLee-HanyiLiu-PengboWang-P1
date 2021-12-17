const express = require('express');
const register = require("./register.js");

const router = express.Router();

console.log("HELLO BRO WHAT");



router.post('/registerNew', function(req, res) { //Is called when data is sent to /register via POST

    var password = req.body.password;
    var username = req.body.username;

    console.log(password);
    console.log(username);

    register.registerUser(username, password);


});

module.exports = router;