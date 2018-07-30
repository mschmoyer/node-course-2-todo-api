// Developer: Mike Schmoyer
// Created: July 30, 2018

var mongoose = require('mongoose');

// User model
var User = mongoose.model('User', {
  email: {
    type: String,
    minlength: 3,
    required: true,
    trim: true
  }
});

module.exports = {User};
