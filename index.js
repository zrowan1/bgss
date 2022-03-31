const express = require('express');
const app = express();
const host = http://localhost
const port = 3000

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App is listening on ${host}:${port}`);
});

