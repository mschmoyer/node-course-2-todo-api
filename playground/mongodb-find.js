// Developer: Mike Schmoyer
// Created: June 11, 2018

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if( err ) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').find({
  //     _id: new ObjectID('5b213b3ff20f435b478ec2aa')
  //   }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Error fetching Todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Error fetching Todos', err);
  // });

  db.collection('Users').find({name: 'Mike'}).toArray().then((docs) => {
    console.log('The mikes are: ');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Error fetching Mikes.', err);
  });

  // db.close();
});
