/*
============================================
; Title: Exercise 4.3
; Author: Troy Martin
; Date: 05/12/2019
; Modified By: Troy Martin
; Description: HTTP Status Codes
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 4.3"));
console.log("");

// variable declaration and assignment

// Declare the express variable and import the express module
var express = require("express");
// Declare the http variable and import the http module
var http = require("http");

// Declare the app variable and call the express function to start an Express application instance
var app = express();

// Call the get function to set the route handler for not found
app.get("/not-found", function(request, response){
  // Set the status code to not found
  response.status(404);

  // Return the json response
  response.json({
    error: "Page not found."
  });
});

// Call the get function to set the route handler for ok
app.get("/ok", function(request, response){
  // Set the status code to Ok
  response.status(200);

  // Return the json response
  response.json({
    error: "Ok."
  });
});

// Call the get function to set the route handler for not implemented
app.get("/not-implemented", function(request, response){
  // set the status code to not implemented
  response.status(501);

  // Return the json response
  response.json({
    error: "Page not implemented."
  });
});

// Call the createServer method passing the application and listen for a request on port 8080 with a listening function
http.createServer(app).listen(8080, function(){
  // Call the console log function to output a message
  console.log("Application started on port 8080.")
});

// end program
