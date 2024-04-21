const databaseService = require('./app/services/databaseService');
const expressService = require('./app/services/expressService');

const initComponents = require('./app/services/componentsService');

const userRouter = require('./app/router/userRouter');
const formRegistrationRouter = require('./app/router/formRegistrationRouter');

require('dotenv').config();

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const APP_PORT = process.env.APP_PORT;

// Connect to the database
databaseService(MONGO_DB_URL);

// Configure Express and handlebars
const app = expressService();


// components
// initComponents(); in  expressService

// Route root
app.get('/', function (req, res) {
    res.send('Hello world :-)');
});



// Middleware для логирования
// const userMiddleware = (req, res, next) => {
//     console.log('Запрос к маршрутам пользователя 2');
//     next(); // Передаем управление следующему middleware или обработчику маршрута
// };

// Routes
// user - demo 
app.use("/user", userRouter);
//app.use("/user", userMiddleware, userRouter);
// app.get("/user", function () {
//     console.log('index user');
// });

app.use("/form-registration", formRegistrationRouter);

// form action
//app.use("/training", trainingRouter)

// Run server
app.listen(APP_PORT, function () {
    console.log('Listen port :', APP_PORT);
    console.log('Server Run ...');
});
