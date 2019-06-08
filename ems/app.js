/*
============================================
; Title:  EMS
; Author: Troy Martin
; Date:   05/18/2019
; Description: EMS
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "EMS"));
console.log("");

// variable declaration and assignment

// Declare the express variable and import the express module
var express = require("express");
// Declare the http variable and import the http module
var http = require("http");
// Declare the path variable and import the path module
var path = require("path");
// Declare the logger variable and import the Morgan module
var logger = require("morgan");
// Declare the mongoose variable and import the mongoose module
var mongoose = require("mongoose");
// Declare and helmet variable and import the module
var helmet = require("helmet");

// Declare the Employee variable and import the employee model
// Because we did not specify a schema collection the mongodb collection will be employees
var Employee = require("./models/employee")

// mLab connection to the ems database
var mongoDB = "mongodb+srv://sa:b0nehead@buwebdev-cluster-1-opi0o.mongodb.net/ems?retryWrites=true";

// Call Mongoose connect function passing the connection string
mongoose.connect(mongoDB, {
  // Error The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it.
  // useMongoClient: true
});

// Set the promise the global promise
mongoose.Promise = global.Promise;

// Get the default connection
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

// Set the open event on the db
db.on("open", function(){
  // Call the log function to output the message
  console.log("Application connected to mLab MongoDB instance.");
});

// Declare and employee variable and set it to a instance of the Employee model, doc is optional so I left it out
var employee = new Employee();

// Declare the app variable and call the express function to start an Express application instance
var app = express();

// Call the Express set function to tell Express the views are in the 'views' directory
app.set("views",path.resolve(__dirname,"views"));
// Call the Express set function to set the view engine to EJS
app.set("view engine","ejs");
// Call the Express use function to setup the logger using the short format
app.use(logger("short"));
// Call the Express use function to setup the helmet XSS filter
app.use(helmet.xssFilter());
// Call the Express use function to setup static resource use
app.use(express.static('./'));

// Call the get function to set the route handler for the root
app.get("/", function(request, response) {
  // Render the index page setting the view model title
  response.render("index", {
    title: "Home page",
    page: "home"
  });
});

// Call the Express get function to setup the route for the list page
app.get("/list", function(request, response) {
  // Render the list page setting the view model title
  response.render("list", {
    title: "List page",
    page: "list"
  });
});

// Call the Express get function to setup the route for the new page
app.get("/new", function(request, response) {
  // Render the new page setting the view model title
  response.render("new", {
    title: "New employee page",
    page: "new"
  });
});

// Call the Express get function to setup the route for the view page with an optional id route parameter
app.get("/view/:id?", function(request, response) {
  // Declare the employee id and get the value off the url if it exists
  var employeeId = request.params && request.params.id ? parseInt(request.params.id, 10) : null;

  // Render the view page setting the view model title, page and employee id from the route
  response.render("view", {
    title: "View employee page",
    page: "view",
    employeeId: employeeId
  });
});

// Call the createServer method passing the application and listen for a request on port 8080 with a listening function
http.createServer(app).listen(8080, function() {
  // Call the console log function to output a message
  console.log("Application started on port 8080!");
});
