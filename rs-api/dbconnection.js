var mysql=require('mysql');
var connection=mysql.createPool({

host:'104.196.209.109',
user:'root',
password:'secret',
database:'rsdb'

});
module.exports=connection;