const {ObjectID}	= require('mongodb');
const {mongoose}	= require('./../server/db/mongoose');
const {Todo}		= require('./../server/models/todo');

var id	= '5c681a69a64b9d5e65b0a57ba';

if(!ObjectID.isValid(id)){
	console.log('Is not Object ID');
}

// Todo.find({
// 	_id:id
// }).then( (res) =>{
// 	console.log(`Todos ${res}`);
// });

// Todo.findOne({
// 	_id:id
// }).then( (res) =>{
// 	console.log(`Todos ${res}`);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('id not found');
// 	}
// 	console.log(todo)
// })