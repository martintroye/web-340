/*
============================================
; Title:  Assignment 4.4
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Assignment 4.4"));
console.log("");

// variable declaration and assignment

// Declare the express variable and import the express module
var express = require("express");
// Declare the http variable and import the http module
var http = require("http");

// Declare the app variable and call the express function to start an Express application instance
var app = express();

// Call the get function to set the route handler for the GET http action on the root
app.get("/", function(request, response) {
  // Return the response message
  response.send("API invoked as an HTTP GET request.");
});

// Call the put function to set the route handler the PUT http action on the root
app.put("/", function(request, response) {
  // Return the response message
  response.send("API invoked as an HTTP PUT request.");
});

// Call the post function to set the route handler the POST http action on the root
app.post("/", function(request, response) {
  // Return the response message
  response.send("API invoked as an HTTP POST request");
});

// Call the delete function to set the route handler the DEL http action on the root
app.delete("/", function(request, response) {
  // Return the response message
  response.send("API invoked as an HTTP DELETE request");
});

// Call the createServer method passing the application and listen for a request on port 8080 with a listening function
http.createServer(app).listen(8080, function() {
  // Call the console log function to output a message
  console.log("Application started on port 8080!");
});
