var db=require('../dbconnection'); //reference of dbconnection.js

var User={

getAllUsers:function(callback){
    return db.query("Select * from User",callback);
},

getUserByUsername:function(Username,callback){
    return db.query("select * from User where Username=?",[Username],callback);
},
addUser:function(User,callback){
    return db.query("insert into User values(?,?,?)",[User.Id, User.Username, User.Password],callback);
},
deleteUser:function(Username,callback){
    return db.query("delete from User where Username=?",[Username],callback);
},
updateUser:function(Username,User,callback){
    return db.query("update User set Username=?,Password=? where Username=?",[User.Username, User.Password, User.Username],callback);
}

};
module.exports=User;