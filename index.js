const express = require('express');
const app = express();
const host = 'http://localhost:';
const port = 3000
var Connection = require('tedious').Connection

var config = {
    server: 'stuurmenbgss.database.windows.net',
    authentication: {
        type: 'default',
        options: {
            userName: 'admin1',
            password: 'stuurmen1.'
        }
    },
    options: {
        encrypt: true,
        database: 'BrandGuideSystem'
    }

};
var connection = new Connection(config);
connection.on('connect', function(err) {
    console.log("Connected");
});

connection.connect();

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App is listening on ${host}:${port}`);
});

