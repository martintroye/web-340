/*
============================================
; Title: Exercise 1.3
; Author: Troy Martin
; Date: 04/21/2019
; Modified By: Troy Martin
; Description: Modules
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 1.3"));
console.log("");

/*
; Expected output:
; https:
; martintroye.github.io
; test=value
*/

// variable declaration and assignment
// import the url module
var url = require("url");
// Call the url parse function
var parsedURL = url.parse("https://martintroye.github.io/biosite/?test=value");


// output
// Call the console log function to output the parts of the url
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

// end program
