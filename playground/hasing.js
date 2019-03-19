const {SHA256}  = require('crypto-js');
const jwt       = require('jsonwebtoken');


var data = {
    id : 4
}
var token   = jwt.sign(data, '123asd');
var decode  = jwt.verify(token, '123asd');

console.log(decode)







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

