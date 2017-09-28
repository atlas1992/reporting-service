var mysql=require('mysql');
var connection=mysql.createPool({

host: 'localhost',
user:'root',
password:'secret',
database:'rsdb'
});
module.exports=connection;