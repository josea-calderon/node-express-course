const express = require('express');
const app = express();

const mockUserData = [
	{name:'Mark'},
	{name:'Jill'}
	]
app.get('/user', function(req,res){
	res.json({
		sucess:true,
		message: 'Successfully got users. Nice!',
		users: mockUserData
	})
})

app.listen(8000,function(){
	console.log("server is running")
})


