/*
============================================
; Title:  balmaceda-fruits.js
; Author: Griselda Balmaceda
; Date:   6 Apriil 2019
; Description: Demonstrates how to create a Chai test.
;===========================================
*/

var fruits = require("../balmaceda-fruits");
var chai=require("chai");
var assert=chai.assert;

describe("fruits",function(){
    it("should return an array of fruits",function(){
        var f=fruits("Apple,Orange,Mango");
        assert(Array.isArray(f))
    })
})