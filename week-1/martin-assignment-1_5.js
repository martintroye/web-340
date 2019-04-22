/*
============================================
; Title: Assignment 1.5
; Author: Troy Martin
; Date: 04/22/2019
; Modified By: Troy Martin
; Description: Hello World
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");

/*
; Expected output:
; Troy Martin
; Assignment 1.5
; Date: 4/22/2019
*/

// variable declaration and assignment
// Import the required http module
const http = require("http");
// Declare the server assigning the processRequest function to handle the request and response
var server = http.createServer(processRequest)

// function declaration

/*
; Params: request: http.IncomingMessage, response: http.ServerResponse
; Response: undefined.
; Description: Function used by Node http server to process incoming requests.
*/
function processRequest(request, response){
  // Declare the body and assign it to the output of the header module display method
  let body = header.display("Troy", "Martin", "Assignment 1.5")
  // Declare the content length for the response
  let contentLength = body.length;
  // Declare the headers to be returned on the response
  let headers = {
    // Set the content length
    "Content-Length": contentLength,
    // Set the content type
    "Content-Type": "text/plain"
  };
  // Call the response writeHead method to assign the http status code and the headers for the response
  response.writeHead(200, headers)
  // Call the response end method and pass the body for the response
  response.end(body);
}

// Call the server listen function specifying the server listen on port 8080
server.listen(8080);

// end program
