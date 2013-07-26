// "fs" = file system
// Used for saving to permanent file
var fs = require("fs");

var userNum = 0;

exports.User = function (username, password) 
{
  var user = {}; // <--- This is what I mean by *this* user.
  
  user.username = username;
  user.password = password;
  
  user.id = userNum++;
  
  user.save = function () {
    // path to database: "../database/user.json"
    
    // First you will need to use require("../database/user.json") to get all existing users
    // from the database, then you'll need to append (use the .push method here) to the database *this* 
    // user. Finally, to persist back to the database, use fs.write(destination, content, callback).
    // Where destination is the path to the database (given on line 17).
    // Callback is a function that executes after the writing is done (successfully or not). I don't know
    // if you need to give it a function to work, but if you do just give it a blank one, like function () {}.
    // Content is the string that gets written back to the database. Say you do: 
    // var allUsers = require("../database/user.json"), after using .push on allUsers to add *this* user, you'll need
    // to do something like JSON.stringify(allUsers) to get the actual string to write out.
    
    // So your last line should look something like fs.write("../database/user.json", JSON.stringify(allUsers), function() {});
    
    
    // CODE GOES HERE
	var allUsers = require("../database/user.json");
	allUsers.push(this);
	fs.writeFile("../solstice/database/user.json", JSON.stringify(allUsers), function(err){
	if(err){throw err};});
  }
  return user;
}

