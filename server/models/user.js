var mongoose 	= require('mongoose');
var validator	= require('validator');
var jwt			= require('jsonwebtoken');
const bcrypt	= require('bcryptjs');
var UserSchema = new mongoose.Schema({
	email: {
		type		: String,
		required	: true,
		minlength	: 1,
		trim		: true,
		minlength	: 1,
		unique		: true,
		validate	:{
			validator 	: validator.isEmail,
			message		: `{value} is not valid email`
		}
	},
	password:{
		type		: String,
		required	: true,
		minlength	: 6,
	},
	tokens: [{
		access:{
			type	: String,
			required: true,
		},
		token:{
			type	: String,
			required: true
		}
	}]
	
});

UserSchema.methods.generateAuthToken = function(){
	var user 	= this;
	var access	= 'auth';
	var token	= jwt.sign({_id: user._id.toHexString(), access},'kopi-manglayang').toString();


		user.tokens = user.tokens.concat([{access, token}]);

		return user.save().then(() => {
			return token;
		});
}


UserSchema.statics.findByToken = function(token){
	var user = this;
	var decode;

	try{
		decode = jwt.verify(token, 'kopi-manglayang');
	} catch(e){
		return  Promise.reject();
	}

	return user.findOne({
		'_id' : decode._id,
		'tokens.access'	: 'auth',
		'tokens.token'	: token
	});
	
};

UserSchema.pre('save', function(next){
	var user = this;

	
	if(user.isModified('password')){
		// user.password 
		// user.password = hash;
		// next();
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash;
				next();
			});
		});
	}else{
		next();
	}
})



var User		= mongoose.model('User', UserSchema); 
module.exports 	= {User};