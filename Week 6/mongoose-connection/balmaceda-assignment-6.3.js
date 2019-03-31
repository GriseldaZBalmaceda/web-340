/*
============================================
; Title:  Assignment 6.3
; Author: Griselda Balmaceda
; Date:   20 March 2019
; Description: Demonstrates how to setup a MongoDB
;              connection.
;===========================================
*/
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");


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

var app = express();
app.use(logger("short"));

http.createServer(app).listen(8080, function () {
    console.log("Application connected to port 8080!")
})