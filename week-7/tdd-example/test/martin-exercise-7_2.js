/*
============================================
; Title:  Exercise 7.2
; Author: Troy Martin
; Date:   06/01/2019
; Description: TDD in Action
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../../../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 7.2"));
console.log("");

// variable declaration and assignment

// Declare the assert variable and import the assert module
var assert = require("assert");

// describe the group of tests
describe("String#split", function(){
  // define a test case
  it("should return an array of fruits", function(){
    // assert the value returned by split function on the string is an array
    assert(Array.isArray('Apple,Orange,Mango'.split(',')));
  })
})
