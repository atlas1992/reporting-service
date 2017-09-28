var db=require('../dbconnection'); //reference of dbconnection.js

var Report={

getAllReports:function(callback){

return db.query("Select * from report",callback);

},
getReportById:function(id,callback){

return db.query("select * from report where ReportId=?",[id],callback);
},
addReport:function(Report,callback){
return db.query("insert into report values(?,?,?,?)",[Report.ReportId,Report.Title,Report.Time,Report.Content],callback);
},
deleteReport:function(id,callback){
 return db.query("delete from Report where ReportId=?",[id],callback);
},
updateReport:function(id,Report,callback){
 return db.query("update Report set Title=?,Time=?,Content=? where ReportId=?",[Report.Title,Report.Time,Report.Content,id],callback);
}

};
module.exports=Report;