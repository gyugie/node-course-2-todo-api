const {ObjectId}	= require('mongodb');
const {Todo}		= require('./../../models/todo');
const {User}		= require('./../../models/user');
const jwt			= require('jsonwebtoken');

const userOneId		= new ObjectId();
const twoTwoId		= new ObjectId();
const users			= [{
	_id		: userOneId,
	email	: 'mugypleci@gmail.com',
	password: 'pass123',
	tokens	:[{
		access	:'auth',
		token	: jwt.sign({_id: userOneId, access: 'auth'}, 'kopi-manglayang').toString()
	}]
},{
	_id : twoTwoId,
	email: 'test@gmail.com',
	password: 'userpasstwo'
}];

const todos	= [{
	_id		: new ObjectId(),
	"text" 	: "First test todo"
},{
	_id				: new ObjectId(),
	"text"			:"Secon test todo",
	"completedAt"	: 123
}];


const populateTodos = (done) => {
	Todo.remove({}).then(() => {
		return Todo.insertMany(todos);
	}).then(() => done());
}


const populateUsers = (done) => {
	User.remove({}).then(() => {
		var userOne = new User(users[0]).save();
		var userTwo = new User(users[1]).save();

		return Promise.all([userOne, userTwo])
	}).then(()=> done());
};

module.exports = {todos, populateTodos, users, populateUsers};
