const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
	if(err){
		return console.log('Unable connect to database', err);
	}

	console.log('Connection success to database');
	// find AND fetch
	// db.collection('Todos').find({_id : new ObjectID('5c249f2bc2bbc2099b5f2436') }).toArray().then( (docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable get database');
	// });

	//find and Count
	// db.collection('Todos').find({completed: false}).count().then( (count) => {
	// 	console.log(`Todos count : ${count}`);
	// }, (err) => {
	// 	console.log('Unable get database');
	// });

	db.collection('users').find().toArray().then( (docs) => {
		console.log(JSON.stringify(docs, undefined, 2))
	});


	// db.close();
});