/*
============================================
; Title:  EMS Application
; Author: Griselda Balmaceda
; Date:   28 February 2019
; Description: Demonstrates EJS layouts.
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var Employee = require("./models/employee");
var app = express();
var mongoose = require('mongoose')

//establish database connections
var mongoDB = "mongodb+srv://user1001:WFd0DjcMnvQGv52v@ems-merh9.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function () {
    console.log("Application connected to mLab MongoDB")
});


//setting view engine
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use(logger("short"));

//employee model 
var employee=new Employee({
    firstName:'Griselda',
    lastName:'Balmaceda'
})

//creating node web server
http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080!")
});