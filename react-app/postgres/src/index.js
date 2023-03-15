const express = require('express');
const bodyParser = require('express')
const routes = require('./routes/user.routes.js')

const app = express();
const port = 3200;
app.use(bodyParser.json())

app.use(routes);

console.log(`server running on http://localhost:${port}`)
app.listen(port);