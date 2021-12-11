const express = require('express');
const { builtinModules } = require('module');
// const connect = require("./connect.js");
const start = require("./start");

/*
CREATE DATABASE ON SQL FIRST:
------------------------
CREATE DATABASE IF NOT EXISTS website;
USE website;
CREATE TABLE users ( 
	id int AUTO_INCREMENT,
	username varchar(20),
	password varchar(20),
);
-------------------

*/
//connect.connect();

const app = express();

app.use(express.urlencoded({ extended: false })); //Sets parser as express



app.use(express.static(__dirname));

app.set('view engine', 'ejs'); //Sets ejs as views

app.use('/', start); //Uses start.js

app.get('/', function(req, res) {

    res.render('index'); //Render index.ejs

});

app.listen(3001, () => { //Start server
    console.log('Server is running on port 3001...');
});

module.exports = app;