var mysql=require('mysql');
var connection=mysql.createPool({

host:'mysql:unix_socket=/cloudsql/feisty-beacon-180520:us-east1:reportingservice',
user:'root',
password:'secret',
database:'rsdb'

});
module.exports=connection;