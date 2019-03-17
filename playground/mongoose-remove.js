const {ObjectID}	= require('mongodb');
const {mongoose}	= require('../server/db/mongoose');
const {Todo}		= require('../server/models/todo');
const {User}        = require('../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res)
// });


Todo.findByIdAndRemove('5c8e282dc2bbc2127d55fe0d').then((res) => {
    console.log(res);
});