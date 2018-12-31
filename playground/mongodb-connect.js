// const MongoClient = require('mongodb').MongoClient;

// var user = {name:'Gyugie', age:24};
// var {age} = user;
// console.log(age);

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

	if(err){
		return console.log('unable to conect to mongodb');
	}
	console.log('Connected to mongodb server');
	// const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: "Something to do",
	// 	completed: false
	// }, (err, result) =>{
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	//add new doc and insert collection
	// db.collection('users').insertOne({
	// 	name: "Gyugie",
	// 	age: 24,
	// 	address: "jl.naggrog 3 no 144"
	// }, (err, result) =>{
	// 	if(err){
	// 		return console.log('Unable insert data to user', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
	// });


	db.close();
});