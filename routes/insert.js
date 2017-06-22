var mysql = require ('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "mbasinas",
  password: "password",
  database: "db_admin"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO tbl_info (id_person, name, job) VALUES ('4', 'Melanie Ngitngit', 'Web Developer')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});