/*
============================================
; Title: Exercise 7.3
; Author: Troy Martin
; Date: 06/02/2019
; Modified By: Troy Martin
; Description: Mocha and Chai
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 7.3"));
console.log("");

/*
; Expected output:
; Export the fruits function
*/

// variable declaration and assignment


// function declaration

/*
; Params: list: string
; Response: []: array
; Description: Split the string into an array
*/
function fruits(list){
  // split the list based on a comma delimiter
  return list.split(',');
}

// Export the fruits function
module.exports = fruits;

// output
// no output

// end program
