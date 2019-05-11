/*
============================================
; Title: Exercise 4.2
; Author: Troy Martin
; Date: 05/10/2019
; Modified By: Troy Martin
; Description: JSON Apis
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 4.2"));
console.log("");

// variable declaration and assignment
// define the tractor to return
let tractor = {
  id: 1,
  type: "Tractor",
  make: "John Deere"
};

// Declare the express variable and import the express module
var express = require("express");
// Declare the http variable and import the http module
var http = require("http");

// Declare the app variable and call the express function to start an Express application instance
var app = express();

// Call the get function to set the route handler for the home page
app.get("/vehicles/:id", function(request, response){
  // Declare the vehicle id and get the value off the url
  var vehicleId = parseInt(request.params.id, 10);
  // Set the id on the tractor
  tractor.id = vehicleId;
  // Return the json response
  response.json(tractor);
});

// Call the createServer method passing the application and listen for a request on port 8080 with a listening function
http.createServer(app).listen(8080, function(){
  // Call the console log function to output a message
  console.log("Application started on port 8080.")
});

// end program
