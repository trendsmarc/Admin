var mysql = require ('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "mbasinas",
  password: "password",
  database: "db_admin"
});


con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM tbl_info", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});