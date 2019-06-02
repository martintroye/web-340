/*
============================================
; Title: Assignment 7.4
; Author: Troy Martin
; Date: 06/02/2019
; Modified By: Troy Martin
; Description: EMS Mongoose Schema and Model development
;===========================================
*/
// start program

// Declare the mongoose variable and import the mongoose module
var mongoose = require("mongoose");
// Declare the schema
const Schema = mongoose.Schema;

// Define the employee schema with a first and last name
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
});

// Export the employee model set to the employee schema
module.exports = mongoose.model('Employee', EmployeeSchema);

// end program
