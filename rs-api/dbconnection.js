var mysql=require('mysql');
var connection=mysql.createConnection({
user:'root',
password:'secret',
database:'rsdb',
host: 'localhost',
dialect: 'mysql',
socketPath:'/cloudsql/feisty-beacon-180520:us-east1:reportingservice'
});
module.exports=connection;