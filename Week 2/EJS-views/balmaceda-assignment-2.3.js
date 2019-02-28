//requiring needed modules
var http = require("http");
var express = require("express");
var path = require("path");
//creating express app
var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function (request, response) {
    response.render("index", { //returns rendered HTML using the object that is the second parameter, this has local variables for the view
        name:"Griselda",
        lastName:"Balmaceda",
        address:"1234 My Address"
    });
});

http.createServer(app).listen(8080, function () { //start server 8080
    console.log("EJS-Views app started on port 8080.");
});