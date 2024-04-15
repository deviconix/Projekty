const express = require('express');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const userRouter = require('./app/router/userRouter');
// CONST
// app
const APP_PORT = 8080;
// db
const MONGO_DB_HOST = 'mongodb://127.0.0.1';
const MONGO_DB_PORT = 27017;
const MONGO_DB_NAME = 'express01';
const PATH_DB = `${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_NAME}`;

// create app
const app = express();

// init handlebars
app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

// connect to base
mongoose.connect(PATH_DB);
const db = mongoose.connection;
db.on('error', function (err) {
    console.error('Error connect :', err);
});

// route root
app.get('/', function (req, res) {
    res.send('Hello world :-)');
});

/* Routes */
app.use("user", userRouter);

// run server
app.listen(APP_PORT, function () {
    console.log('Listen port :', APP_PORT);
    console.log('Server Run ...');
});
