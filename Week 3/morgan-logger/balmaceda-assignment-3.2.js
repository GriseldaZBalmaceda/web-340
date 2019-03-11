/*
============================================
; Title:  Assignment 3.2
; Author: Griselda Balmaceda
; Date:   10 March 2019
; Description:Morgan Logger
;===========================================
*/
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short")); //this outputs the type of message you want from morgan

app.get("/", function(request, response) {
  response.render("index", {
    message: "How cute is this pink navbar??" // this message will be rendered in your view 
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});