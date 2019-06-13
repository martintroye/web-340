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
// Declare helmet variable and import the module
var helmet = require("helmet");
// Declare bodyParser variable and import the module
var bodyParser = require("body-parser");
// Declare cookieParser variable and import the module
var cookieParser = require("cookie-parser");
// Declare csrf variable and import the module
var csrf = require("csurf");

// create cross site request forgery object setting that the token will be stored in a cookie
var csrfProtection = csrf({cookie: true});

// Declare the Employee variable and import the employee model
// Because we did not specify a schema collection the mongodb collection will be employees
var Employee = require("./models/employee")

// Declare ObjectId and import the module
var ObjectId = require('mongoose').Types.ObjectId;

// mLab connection to the ems database
var mongoDB = "mongodb+srv://sa:qWVNk4b7XRPE611Q@buwebdev-cluster-1-opi0o.mongodb.net/ems?retryWrites=true";

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

// Call the Expres use function to apply the body-parser middleware parsing url encoded bodies only
app.use(bodyParser.urlencoded({
  extended: true
}));

// Call the Expres use function to apply the cookie-parser middleware
app.use(cookieParser());

// Call the Expres use function to apply the CSRF middleware
app.use(csrfProtection);

// Call the Expres use function to apply a function that will generate a new token and apply it to a cookie and the local variables
app.use(function(request, response, next){
  // Generate the token
  var token = request.csrfToken();
  // Set the cookie on the response
  response.cookie('XSRF-TOKEN', token);
  // Set the variable to be used on the page for a hidden input
  response.locals.csrfToken = token;

  // Call the next piece of middleware
  next();
});

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
  // Call the find function on the Employee schema to retrieve all employees
  Employee.find({}, function(error, employees){
    // if an error exists throw it
    if(error){
      throw error;
    }

    // Render the list page setting the view model title
    response.render("list", {
      title: "Employee list",
      page: "list",
      employees
    })
  });
});

// Call the Express get function to setup the route for the new page
app.get("/new", function(request, response) {
  // Render the new page setting the view model title
  response.render("new", {
    title: "New employee",
    page: "new"
  });
});

// Call the Express post function to setup the route to handle the new employee form
app.post("/process", function(request, response){
  //console.log(request.body.txtName);
  // Validate that the first name was set
  if(!request.body.txtFirstName){
    // Return a bad request response with a message
    response.status(400).send("Entries must have a first name.");
    return;
  }

  // Validate that the last name was set
  if(!request.body.txtLastName){
    // Return a bad request response with a message
    response.status(400).send("Entries must have a last name.");
    return;
  }

  // Declare and set variables to hold the form values
  var firstName = request.body.txtFirstName;
  var lastName = request.body.txtLastName;

  // Call the console log function to output the values
  console.log(firstName, lastName);
  // Declare a new Employee setting the required first and last name
  var employee = new Employee({
    firstName,
    lastName
  });

  // Call the save function on the employee schema to save the document
  employee.save(function(error){
    // if there was an error throw it
    if(error){
      throw error;
    }

    // Call the console log function to output a message that the save worked
    console.log(`Employee ${firstName} ${lastName} save successfully!`);
  })

  // redirect to the home page
  response.redirect("/");
});

// Call the Express get function to setup the route for the view page with an optional id route parameter
app.get("/view/:id?", function(request, response) {
  // Declare the employee id and get the value off the url if it exists
  var employeeId = request.params && request.params.id ? request.params.id : null;
  // Convert the employeeId to a mongo object id
  var objId = ObjectId(employeeId);

  // Call the find function on the Employee schema to retrieve the employee with the matching id
  Employee.find({_id: objId}, function(error, employees){
    // if an error exists throw it
    if(error){
      throw error;
    }

    // Render the list page setting the view model title
    response.render("view", {
      title: "Employee details",
      page: "view",
      employees
    })
  });
});

// Call the createServer method passing the application and listen for a request on port 8080 with a listening function
http.createServer(app).listen(8080, function() {
  // Call the console log function to output a message
  console.log("Application started on port 8080!");
});
