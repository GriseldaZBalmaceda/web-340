/*
============================================
; Title:  Assignment 1.5
; Author: Griselda Balmaceda
; Date:   21 February 2019
; Description: Learning the HTTP module
;===========================================
*/

const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 1.5"));

console.log('\n')

//requiring http module
var http=require("http");
//creating processRequest function that takes two parameter request and response
function processRequest(req,res){

    var body ="Hello everyone!"
    var contentLength=body.length;
    res.writeHead(200,{
        'Content-Length':contentLength,
        'Content-Type':'text/plain'
        
    });
    res.end(body);
}
//creating server and sending the processrequest 
var s=http.createServer(processRequest)

//show the server in port 8080
s.listen(8080);