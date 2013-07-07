
var userNum = 0;

exports.User = function (username, password) 
{
  var user = {};
  
  user.username = username;
  user.password = password;
  
  user.id = userNum++;
  
  return user;
}