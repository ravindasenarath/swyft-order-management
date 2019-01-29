'use strict';
const AWS = require('aws-sdk');
var stepfunctions = new AWS.StepFunctions();

module.exports.initial = async (event, context) => {
  // DO initial processing ( calculate sum etc)
};

module.exports.processTax = async (event, context) => {
  // Calculate tax according to the customer
};

module.exports.processApproval = async (event, context) => {
  // Send emails for approval
};
