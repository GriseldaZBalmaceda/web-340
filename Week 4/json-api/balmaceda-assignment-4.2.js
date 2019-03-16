/*
============================================
; Title:  Assignment 4.2
; Author: Griselda Balmaceda
; Date:   15 March 2019
; Description:JSON API
;===========================================
*/

//adding modules
var express = require("express");
var http = require("http");
var app = express();
//getting information from url
app.get("/customer/:id", function (request, response) {
//setting id and response 
    var id = parseInt(request.params.id, 10);
    response.json({
        firstName: "John",
        lastName: "Tolstoy",
        emplyeeId: id
    });
});

http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080")
})