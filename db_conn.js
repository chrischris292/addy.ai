var mysql = require('mysql');

// connection to MySQL server
// var db = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'Abc123!@#',
//   database : 'addy_ai'
// });

// connection to production server (temp)
var db = mysql.createConnection({
  host     : 'aaisgro0tar6bz.ctibdyidax0w.us-west-2.rds.amazonaws.com',
  port 	   : '3306',
  user     : 'addyaiadmin',
  password : 'addyaipassword',
  database : 'addy_ai'
});

module.exports = db;