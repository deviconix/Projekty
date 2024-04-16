const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// Middleware для логирования
router.use((req, res, next) => {
    console.log('Получен запрос к маршрутам пользователя');
    next(); // Передаем управление следующему middleware или обработчику маршрута
});
router.get('/', userController.index);

// router.get('/', function () {
//     console.log('index user');
// });

module.exports = router