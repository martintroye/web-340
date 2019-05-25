/*
============================================
; Title:  Exercise 6.3
; Author: Troy Martin
; Date:   05/24/2019
; Description: Mongoose
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 6.3"));
console.log("");

// Declare the express variable and import the express module
var express = require("express");
// Declare the http variable and import the http module
var http = require("http");
// Declare the logger variable and import the Morgan module
var logger = require("morgan");
// Declare the mongoose variable and import the Mongoose module
var mongoose = require("mongoose");

// mLab connection
var mongoDB = "mongodb+srv://sa:b0nehead@buwebdev-cluster-1-opi0o.mongodb.net/test?retryWrites=true";
// Call Mongoose connect function passing the connection string
mongoose.connect(mongoDB, {
  // Error The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it.
  // useMongoClient: true
});

// Set the promise the global promise
mongoose.Promise = global.Promise;
// Get the default connection
var db = mongoose.connection;
// Set the open event on the db
db.on("open", function(){
  // Call the log function to output the message
  console.log("Application connected to mLab MongoDB instance.");
});

// Declare the app variable and call the express function to start an Express application instance
var app = express();
// Call the Express use function to inject the Morgan logger using the short message format
app.use(logger("short"));

// Call the createServer method passing the application and listen for a request on port 8080 with a listening function
http.createServer(app).listen(8080, function(){
  // Call the console log function to output a message
  console.log("Application started on port 8080!")
});
