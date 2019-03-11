/*
============================================
; Title:  Assignment 3.3
; Author: Griselda Balmacead
; Date:   10 March 2019
; Description: advanced routing
;===========================================
*/
//requiring alll necessary modules
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//creating express app
var app = express();
//setting your views and letting views know it will be found in directory called views
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//type of message morgan will be outputting
app.use(logger("short"));

//will be getting url id and will output the id in the views
app.get("/:productId", function(request, response) {
  var productId = parseInt(request.params.productId, 10);

  response.render("index", {
    productId: productId
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
