//requiring needed modules
var express=require("express")
var http=require("http");

//creating express app
var app=express();

//creating different routes 
app.get("/",function(request,response){
    response.end("Welcome to the homepage");
});

app.get("/about",function(request,response){
    response.end("Welcome to the about page!");
});

app.get("/contact",function(request,response){
    response.end("Welcome to the contact page!");
});
//if route not found response will be 404 not found
app.use(function(request,response){
    response.statusCode=404;
    response.end("404!");
});

http.createServer(app).listen(8080);
