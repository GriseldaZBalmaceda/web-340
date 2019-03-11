/*
============================================
; Title:  Assignment 3.4
; Author: Griselda Balmaceda
; Date:   10 March 2019
; Description:Putting it all together
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));// Tell Express the views are in the 'views' directory
app.set("view engine", "ejs");// Tell Express to use the EJS view engine

app.use(logger("short"));//this outputs the type of message you want from morgan


app.get("/", function(request, response) {
  response.render("index", {
    message: "home page"
  });
});


app.get("/about", function(request, response) {
  response.render("about", {
    message: "about page"
  });
});

app.get("/contact", function(request, response) {
  response.render("contact", {
    message: "contact page"
  });
});

app.get("/products", function(request, response) {
  response.render("products", {
    message: "products page"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080.");
});
