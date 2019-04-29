/*
============================================
; Title: Exercise 2.3
; Author: Troy Martin
; Date: 04/28/2019
; Modified By: Troy Martin
; Description: Routes
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 2.3"));
console.log("");

/*
; Expected output:
; <Your expected output here>
*/

// variable declaration and assignment

// Declare the express variable and import the express module
var express = require("express");
// Declare the http variable and import the http module
var http = require("http");
// Declare the app variable and call the express function to start an Express application instance
var app = express();

// Call the Express get function to create a route to the home page passing the path and a function to handle the request and response
app.get("/", function(request, response){
  // Call the end function on the response and return the output
  response.end("Welcome to the homepage!");
});

// Call the Express get function to create a route to the about page passing the path and a function to handle the request and response
app.get("/about", function(request, response){
  // Call the end function on the response and return the output
  response.end("Welcome to the about page!");
});

// Call the Express get function to create a route to the contact page passing the path and a function to handle the request and response
app.get("/contact", function(request, response){
  // Call the end function on the response and return the output
  response.end("Welcome to the contact page!");
});

// Call the Express use function to create a default request and response handler
app.use(function(request, response){
  // Set the http status code on the response to 404 (not found)
  response.statusCode = 404;
  // Call the end function on the response and return the output
  response.end("404!");
});

// Call the createServer method passing the application and listen for a request on port 8080
http.createServer(app).listen(8080);


// output

// end program
