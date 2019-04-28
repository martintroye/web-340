/*
============================================
; Title: Exercise 2.2
; Author: Troy Martin
; Date: 04/28/2019
; Modified By: Troy Martin
; Description: Hello World with Express
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 2.2"));
console.log("");

/*
; Expected output:
; Hello World
*/

// variable declaration and assignment

// Declare the express variable and import the express module
var express = require("express");
// Declare the http variable and import the http module
var http = require("http");
// Declare the app variable and call the express function to start an Express application instance
var app = express();

// Call the Express passing a function to handle the request and response
// Will respond with Hello World for any URL
app.use(function(request, response){
  // Call the console log function to output the requested path
  console.log(`In comes a request to: ${request.url}`);
  // Close the response and return Hello World
  response.end("Hello World");
});

// Call the createServer method passing the application and listen for a request on port 8080
http.createServer(app).listen(8080);

// output

// end program
