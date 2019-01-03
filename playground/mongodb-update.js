const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable Connect to mongodb server');
	}

	console.log('Connected to MongoDB server');

	db.collection('users').findOneAndUpdate({
		_id : new ObjectID('5c2d7032c2bbc213d87d6994')
		}, {
			$set : {
					name : "sarahs"
			},
			$inc : {
				age:-40
			}
		},{
			returnOriginal : false
		}).then( (res) => {
			console.log(JSON.stringify(res.lastErrorObject.updatedExisting, undefined, 2));
		});

	db.close();
});