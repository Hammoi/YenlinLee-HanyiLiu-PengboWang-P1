const express = require('express');
const login = require("./login.js");

const router = express.Router();

console.log("HELLO BRO WHAT");



router.post('/login', function(req, res) { //Is called when data is sent to /login via POST

    var password = req.body.password;
    var username = req.body.username;

    console.log("checking login");

    console.log(login.getPassword(username, function(result) {
        if (password == result) {
            console.log("Logged in.");
            res.render('home');
        }
    }));




});

router.post('success', function(req, res) {

});
module.exports = router;