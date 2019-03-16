/*
============================================
; Title:  Assignment 4.2
; Author: Griselda Balmaceda
; Date:   15 March 2019
; Description:CRUD Operations
;===========================================
*/

var express=require("express");
var http=require("http");

var app=express();

//creating GET,POST,PUT,DELETE requests

app.get('/',function(req,res){
    res.send("sending GET request");
});

app.post('/',function(req,res){
    res.send("A post request");
});

app.put("/",function(req,res){
    res.send("A put request");
});
app.delete("/",function(req,res){
    res.send("A Delete request *gasp*");
});
app.listen(8080,function(){
    console.log("App is listening on port 8080")
})