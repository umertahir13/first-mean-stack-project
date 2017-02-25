var express=require('express');
var router=express.Router();

var users=require('../models/User');
	

router.get('/',function(req,res){
	getAllUsers(err,users)
	{
		if(err)
			res.send(err);
	
	}
	res.json();
	
});

router.post('/',function(req,res){
	var user=req.body;
	console.log('data :: '+req.body.name);
	users.addUser(user,function(err,user){
		if(err){
			res.send(err);
		}
		console.log(user);
		res.json(user);
	});

});

module.exports = router;