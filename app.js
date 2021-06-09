const express = require('express')
const app = express()
const port = 3000
const db = require('./queries')

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

let users = [];

app.route('/users')
    .get(db.getUsers)
    .post(db.createUser)
    .put(db.updateUser)
    .delete(db.deleteUser)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))