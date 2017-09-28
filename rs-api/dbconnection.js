var mysql=require('mysql');
var connection=mysql.createPool({

host: '104.196.209.109',
user:'root',
password:'secret',
database:'rsdb',
stream: function(opts) {
    var socket = net.connect(opts.config.port, opts.config.host);
    socket.setKeepAlive(true);
    return socket;
  }
});
module.exports=connection;