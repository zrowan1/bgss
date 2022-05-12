const { request } = require('express');
const express = require('express');
const app = express();
const host = 'http://localhost:';
const port = 3000
var Connection = require('tedious').Connection
var sql = require('mssql');
const { connect } = require('tedious');

var config = {
    server: "stuurmenbgss.database.windows.net",
    authentication: {
        type: "default",
        options: {
            userName: "admin1",
            password: "stuurmen1."
        }
    },
    options: {
        encrypt: true,
        database: "StuurmenBGSS"
    }

};
var connection = new Connection(config);
connection.on("connect", err => {
    if (err) {
      console.error(err.message);
    } else {
      //queryDatabase();
    }
  });

connection.connect();

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App is listening on ${host}:${port}`);
});


function queryDatabase()
{
    var conn = new sql.ConnectionPool(config);

    conn.connect()
    .then(function () {
        var req = new sql.Request(conn);

        req.query("INSERT INTO Users (userID, userName, password) VALUES ('1', 'testuser1', 'testww')")
        .then(function (recordset) {
            console.log(recordset);
            connection.close();
        })
        .catch(function (err) {
            console.log(err);
            connection.close();
        })
    })
    .catch(function (err) {
        console.log(err);
        conn.close();
      });


}

