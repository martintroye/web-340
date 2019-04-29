/*
============================================
; Title: Assignment 2.4
; Author: Troy Martin
; Date: 04/28/2019
; Modified By: Troy Martin
; Description: EJS Views
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Assignment 2.4"));
console.log("");

/*
; Expected output:
; <Your expected output here>
*/

// variable declaration and assignment
// Declare the view model for the home page
var viewModel = {
  firstName: "Troy",
  lastName: "Martin",
  address: "12345 Main St",
  city: "Omaha",
  state: "NE",
  postalCode: 68127
};

// Declare the http variable and import the http module
var http = require("http");

// Declare the express variable and import the express module
var express = require("express");

var path = require("path");

// Declare the app variable and call the express function to start an Express application instance
var app = express();

// Call the Express set function to tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));

// Call the Express set function to set the view engine to EJS
app.set("view engine", "ejs");

// Call the get function to set the route handler for the home page
app.get("/", function(request, response){
  // Call the render function passing the view name and the view model containing the data for the page
  response.render("index", viewModel);
});

// Call the createServer method passing the application and listen for a request on port 8080 with a listening function
http.createServer(app).listen(8080, function(){
  // Call the console log function to output a message
  console.log("EJS-Views app started on port 8080.");
});


// output

// end program
