require('./config/config');

const express		= require('express');
const bodyParser	= require('body-parser');
const _				= require('lodash');

const {ObjectID}	= require('mongodb');
const {mongoose} 	= require('./db/mongoose.js');
const {Todo}		= require('./models/todo');
const {user}		= require('./models/user');

var app 		= express();
var port		= process.env.PORT || 3000; 

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
	//send to variable
	var todo = new Todo({
		text : req.body.text
	});

	//get from variable and send to database
	todo.save().then((doc) =>{
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});

});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(todos);
	});
});

// GET id/123456
app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	//Valid id using isValid
		 //404 - sendback empty send
		 
	// findbyid
		// success
			//if todo - send it back
			// if no todo - send back 404 with empty body
		// error 
			// 404 - and empty body back
	
	if(!ObjectID.isValid(id)){
		
		return res.status(404).send();
	}

	Todo.findById(id).then((todo) => {
		if(!todo){
			
			return res.status(404).send();
		}

		res.send({todo});
	}).catch((e) => {
		return res.status(404).send();
	});
	

});



app.delete('/todos/:id', (req, res) => {
	var id = req.params.id;

	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(id).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}

		res.send(todo);
	}).catch((e) => {
		return res.status(404).send();
	});
});

app.patch('/todos/:id', (req, res) => {
	var id 		= req.params.id;
	var body	= _.pick(req.body, ['text','completed']);

	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	if(_.isBoolean(body.completed) && body.completed){
		body.completedAt	= new Date().getTime();
	}else{
		body.completed		= false;
		body.completedAt	= null;
	}

	Todo.findByIdAndUpdate(id, {$set : body}, {new:true}).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}

		res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	});
});

app.listen(port, () =>{
	console.log(`Started on port ${port}`);
})


	
module.exports = {app};