// Developer: Mike Schmoyer
// Created: Aug 08, 2018
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b6b2e19762e21ef0f70f58b11'; //5b6b2e19762e21ef0f70f58b
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid.');
// }

// Recommended when returning more than one result.
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// // Recommended for getting one object in a query
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Recommended for getting one object when you have ID
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found.');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var id = '5b3ab322f3ea4d8c31317530';

if(!ObjectID.isValid(id)) {
  console.log('ID not valid');
} else {
  User.findById(id).then((user) => {
    if(!user) {
      return console.log('ID not found.');
    }
    console.log(JSON.stringify(user, undefined, 2));
  });
}
// User.findById
