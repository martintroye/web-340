/*
============================================
; Title: Exercise 7.3
; Author: Troy Martin
; Date: 06/02/2019
; Modified By: Troy Martin
; Description: Mocha and Chai
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../../../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 7.3"));
console.log("");

// variable declaration and assignment
// Declare the fruits variable and import the martin-fruits module
var fruits = require("../martin-fruits");
// Declare the chai variable and import the chai module
var chai = require("chai")
// Declare the assert variable and set it to the chai assert function
var assert = chai.assert;

// describe the group of tests
describe("fruits", function(){
  // define a test case
  it("should return an array of fruits", function(){
    // Call the fruits function and split the string into an array
    var f = fruits('Apple,Orange,Mango');
    // assert the value returned by fruits on the string is an array
    assert(Array.isArray(f));
  })
})


// end program
