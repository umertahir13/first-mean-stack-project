var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var PORT=process.env.PORT || 3000;
var ejs=require('ejs');
var app=express();

mongoose.connect('mongodb://umer:stdafx.h@ds161049.mlab.com:61049/attrixproject');
var db= mongoose.connection;
if(db){
	console.log('connected to mongodb');
}

// Routes 
var users=require('./routes/users');

// client-side
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/user', users );


app.get('/',function(req,res){
	res.render('index');
});







app.listen(PORT);
console.log('started on PORT>>'+PORT);	