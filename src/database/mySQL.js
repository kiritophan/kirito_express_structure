/* Kích hoạt .env */
import dotenv from 'dotenv'
dotenv.config();

var mysql = require('mysql');
var mySQL = mysql.createConnection({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER_NAME,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DATABASE_NAME,
});

function mysqlConnect() {
    try {
        mySQL.connect(err => {
            if (err) {
                console.log("Loi ve mySql: ", err.sqlMessage)
            } else {
                console.log("Ket noi mySql thanh cong")
            }
        })
    } catch (err) {
        console.log("Loi cu phap: ", err)
    }
}
mysqlConnect()

module.exports = {
    mysqlConnect,
    mySQL
}