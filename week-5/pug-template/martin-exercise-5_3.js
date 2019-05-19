/*
============================================
; Title:  Exercise 5.3
; Author: Troy Martin
; Date:   05/18/2019
; Description: Pug Templates
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 5.3"));
console.log("");

// variable declaration and assignment

// Declare the express variable and import the express module
var express = require("express");
// Declare the http variable and import the http module
var http = require("http");
// Declare the pug variable and import the pug module
var pug = require("pug");
// Declare the path variable and import the path module
var path = require("path");

// Declare the app variable and call the express function to start an Express application instance
var app = express();

// Call the Express set function to tell Express the views are in the 'views' directory
app.set("views",path.resolve(__dirname,"views"));
// Call the Express set function to set the view engine to Pug
app.set("view engine","pug");

// Call the get function to set the route handler for the root
app.get("/", function(request, response) {
  // Render the index page setting the view model with the message to output
  response.render("index", {
    message: "Welcome to my first page using Pug"
  });
});

// Call the createServer method passing the application and listen for a request on port 8080 with a listening function
http.createServer(app).listen(8080, function() {
  // Call the console log function to output a message
  console.log("Application started on port 8080!");
});
