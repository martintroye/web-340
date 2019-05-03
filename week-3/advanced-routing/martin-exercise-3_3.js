/*
============================================
; Title: Exercise 3.3
; Author: Troy Martin
; Date: 05/03/2019
; Modified By: Troy Martin
; Description: Advanced routing
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 3.3"));
console.log("");

// variable declaration and assignment

// Declare the express variable and import the express module
var express = require("express")
// Declare the http variable and import the http module
var http = require("http");
// Declare the path variable and import the path module
var path = require("path");
// Declare the logger variable and import the Morgan Logging module
var logger = require("morgan");

// Declare the app variable and call the express function to start an Express application instance
var app = express();

// Call the Express set function to tell Express the views are in the 'views' directory
app.set("views",path.resolve(__dirname,"views"));
// Call the Express set function to set the view engine to EJS
app.set("view engine","ejs");
// Call the Express use function to inject the Morgan logger using the short message format
app.use(logger("short"));

// Call the get function to set the route handler for the home page with a required parameter for employee id
app.get("/:employeeId",function(request, response){
  // Declare an initial value for the employee id that will be used on the view model
  let employeeId = "Invalid employee id";

  // So that we do not get a NaN response from parseInt make sure that we have a valid value for the employee id
  if(request.params
    && request.params.employeeId
    && !isNaN(request.params.employeeId)){
    // Call the parseInt function to convert the employee id to a number
    employeeId = parseInt(request.params.employeeId, 10);
  }

  // Call the render function passing the view name and the view model containing the data for the page
  response.render("index", {
    employeeId: employeeId
  });
});

// Call the createServer method passing the application and listen for a request on port 8080 with a listening function
http.createServer(app).listen(8080, function(){
  // Call the console log function to output a message
  console.log("Application started on port 8080.");
})
// end program
