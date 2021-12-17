const express = require('express');
const { builtinModules } = require('module');
// const connect = require("./connect.js");
const startLogin = require("./login/start");
const startRegister = require("./register/start");

/*
CREATE DATABASE ON SQL FIRST:
------------------------
CREATE DATABASE IF NOT EXISTS website;
USE website;
CREATE TABLE users ( 
	username varchar(20),
	password varchar(20),
    liked int DEFAULT 0
);
-------------------

*/
//connect.connect();

const app = express();

app.use(express.urlencoded({ extended: false })); //Sets parser as express



app.use(express.static(__dirname));

app.set('view engine', 'ejs'); //Sets ejs as views

app.use('/', startLogin); //Uses start.js
app.use('/', startRegister); //Uses start.js

app.get('/login', function(req, res) {
    res.render('login'); //Render index.ejs

});

app.get('/register', function(req, res) {
    res.render('register'); //Render index.ejs
});

app.get('/', function(req, res) {
    res.render('home'); //Render home.ejs
});

app.listen(3001, () => { //Start server
    console.log('Server is running on port 3001...');
});

module.exports = app;