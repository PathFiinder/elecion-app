
const dbConfig = require("../config/db_config");
let mysql = require('mysql');
let tags = require('../models/tags_model.js')


let connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});
  
const changeDbToElection_1 = () =>  { 
      connection.query('USE election_db', function (err, rows, fields) {
        if (err) {
          connection.end()
          throw err;
        }
     })
  }


const executeQueryCountIds = (databse_name) => {
  return  new Promise((resolve, reject) => {
    changeDbToElection_1();
  
    connection.query(`SELECT count(id) as count from ${databse_name}`, function (err, rows, fields) {
        if (err) {
          connection.end()
          throw err;
          }
          resolve(rows[0].count);
      });
  

})
};

module.exports = {
    executeQueryCountIds
}