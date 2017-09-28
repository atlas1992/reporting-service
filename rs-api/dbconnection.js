var mysql=require('mysql');
var connection=mysql.createPool({

user:'root',
password:'secret',
socketPath: '/cloudsql/feisty-beacon-180520:us-east1:reportingservice',
database:'rsdb'

});
module.exports=connection;