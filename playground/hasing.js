const {SHA256}  = require('crypto-js');
const jwt       = require('jsonwebtoken');
const bcrypt	= require('bcryptjs');


var password 		= '123abc';
var hashedPassword	= '$2a$10$q0inU.lE9fOuJ0bGs/vaeuPU73p2A5y8m5dxMiqH8EEiEWlLD/4dm';

// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash);
// 	})
// })

bcrypt.compare(password, hashedPassword, (err, res) => {
console.log(res)
})



// var data = {
//     id : 4
// }
// var token   = jwt.sign(data, '123asd');
// var decode  = jwt.verify(token, '123asd');

// console.log(decode)







// var message = 'im number four';
// var hash    = SHA256(message);
// var data = {
//     id :4
// }

// var token = {
//     data,
//     hash : SHA256(JSON.stringify(data) + 'somesecret').toString()
// }


// var resultHasing = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHasing === token.hash){
//     console.log('data was not changed')
// }else{
//     console.log('data was changed. Do not trust!')
// }

