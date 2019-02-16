let express		= require('express');
let bodyParser	= require('body-parser');

var {mongoose} 	= require('./db/mongoose.js');
var {Todo}		= require('./models/todo');
var {user}		= require('./models/user');

var app 		= express();
var port		= 3000; 

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


app.listen(port, () =>{
	console.log(`Started on port ${port}`);
})


	
module.exports = {app};