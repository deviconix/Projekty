const express = require('express');
const databaseService = require('./app/services/databaseService');

const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const userRouter = require('./app/router/userRouter');

require('dotenv').config();

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const APP_PORT = process.env.APP_PORT;
console.log(MONGO_DB_URL);
// create app
const app = express();

// init handlebars
app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

// Connect to the database
databaseService(MONGO_DB_URL);

// connect to base
// mongoose.connect(MONGO_DB_URL);
// const db = mongoose.connection;
// db.on('error', function (err) {
//     console.error('Error connect :', err);
// });
// db.once('open', () => {
//     console.log('Connect to db - OK');
//     // Здесь можно добавить дополнительные действия после успешного подключения
// });



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
