
/*
============================================
; Title:  Assignment 1.3
; Author: Griselda Balmaceda
; Date:   21 February 2019
; Description: Module Example
;===========================================
*/

const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 1.3"));

console.log('\n')

//requiring the url module
var url = require("url");
//parsing our url with the url module parse function
var parsedURL=url.parse("https://www.WelcomeToNode.com/hello?name=griselda")
//outputting url information
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);