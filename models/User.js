var mongoose=require('mongoose');

var userSchema=mongoose.Schema({
	name:String,
	email:String,
	phone:Number
});

var User=module.exports=mongoose.model('User',userSchema);

module.exports.getAllUsers=function(callback,limit){

	User.find(callback).limit(limit);
}

module.exports.addUser=function(user,callback){
	var data={
		name:user.name,
		email:user.email,
		phone:user.phone
	}
	User.create(data,callback);
};

