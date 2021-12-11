const express = require('express');
const { builtinModules } = require('module');
// const connect = require("./connect.js");
const start = require("./start");


//connect.connect();

const app = express();

app.use(express.urlencoded({ extended: false }));



app.use(express.static(__dirname));

app.set('view engine', 'ejs');

app.use('/', start);


// app.post('/register', function(req, res) {
//     console.log("well then");
//     console.log(req.body);
//     console.log(res.body);

//     res.send('POST request to the homepage');
// })

app.get('/', function(req, res) {

    res.render('index');

});

app.listen(3001, () => {
    console.log('Server is running on port 3001...');
});

module.exports = app;