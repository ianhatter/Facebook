var database =[
	{
		username:"Ian",
	password:"2248"
},
	{
		username:"Sally",
	password:"123"

},
	{
		username:"Ivan",
	password:"Secret"
}
];


var newsfeed = [
	{
	username:"Bobby33",
	timeline:"So tired from all that learning."
	},

	{
username:"sally122",
timeline:"Bobby33 is so cool"
	}
];

var usernameprompt= prompt ("Please enter your username");
var passwordprompt= prompt ("Please enter your password");

function isuservalid(username,password) {
	 for (var i=0; i< database.length;i++ )
	 	if(database[i].username	 === username && 
	 		database[i].password === password){
	 		return true;
	 	}
	 	return false;
}

function signIn(username, password) {
	 	if(isuservalid(username,password)){
	 		console.log(newsfeed);
	 	} else {
	 		alert ("sorry, wrong username or password");
	 	}
	 }

signIn(usernameprompt,passwordprompt);