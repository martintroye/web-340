/*
============================================
; Title: Exercise 3.2
; Author: Troy Martin
; Date: 05/03/2019
; Modified By: Troy Martin
; Description: Logging
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 3.2"));
console.log("");

// variable declaration and assignment

// Declare the express variable and import the express module
var express = require("express");
// Declare the http variable and import the http module
var http = require("http");
// Declare the path variable and import the path module
var path = require("path");
// Declare the logger variable and import the Morgan Logging module
var logger = require("morgan");

// Declare the app variable and call the express function to start an Express application instance
var app = express();

// Call the Express set function to tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname,"views"));
// Call the Express set function to set the view engine to EJS
app.set("view engine","ejs");
// Call the Express use function to inject the Morgan logger using the short message format
app.use(logger("short"));

// Declare the view model for the home page
var viewModel = {
  message:"Welcome to the Home Page!"
};

// Call the get function to set the route handler for the home page
app.get("/", function(request, response){
  // Call the render function passing the view name and the view model containing the data for the page
  response.render("index", viewModel);
});

// Call the createServer method passing the application and listen for a request on port 8080 with a listening function
http.createServer(app).listen(8080, function(){
  // Call the console log function to output a message
  console.log("Application started on port 8080.")
});

// end program
