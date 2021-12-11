const express = require('express');

const router = express.Router();

console.log("HELLO BRO WHAT");



router.post('/register', function(req, res) {

    console.log(req.body);
    console.log()

});

module.exports = router;