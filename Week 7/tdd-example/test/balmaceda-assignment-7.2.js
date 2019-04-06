/*
============================================
; Title:  fruit.js
; Author: Griselda Balmaceda
; Date:   6 April 2019
; Description: Demonstrations how to create a TDD unit test.
;===========================================
*/

var assert = require("assert");

describe("String#split",function(){
it("Should return an array of fruits",function(){
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
})
})