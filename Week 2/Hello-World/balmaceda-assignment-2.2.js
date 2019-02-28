//requiring needed modules

var express=require("express");
var http=require("http");

//creating express app
var app=express()

app.use(function(request,response){
    console.log("In comes a request to: "+ request.url);
    response.end("Hello World!");
});
//creating server
http.createServer(app).listen(8080);