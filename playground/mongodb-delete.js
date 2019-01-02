const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	//deleteMany
	// db.collection('Todos').deleteMany({text: 'test delete'}).then( (res) => {
	// 	console.log(res);
	// });


	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Add new Data'}).then( (res) => {
	// 	console.log(res);
	// });

	//findOneandDelete
	// db.collection('Todos').findOneAndDelete({completed: true}).then( (res) => {
	// 	console.log(res);
	// });

	// db.collection('users').deleteMany({name:'Gyugie'}).then( (res) => {
	// 	console.log(res.deletedCount)
	// });

	db.collection('users').findOneAndDelete({_id : new ObjectID("5c2493b24b0d761116662248")}).then( (res) => {
		console.log(res);
	});


	db.close();
});