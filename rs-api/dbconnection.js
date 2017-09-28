var mysql=require('mysql');
var connection=mysql.createPool({

host:'/cloudsql/feisty-beacon-180520:us-east1:reportingservice',
user:'root',
password:'secret',
database:'reportingservice'

});
module.exports=connection;