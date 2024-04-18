//const { body, validationResult } = require('express-validator');
const { body } = require('express-validator');

// Middleware для валидации формы
const validateForm = [
    // Определение правил валидации для каждого поля формы
    body('fullname')
        .notEmpty().withMessage('Поле "Имя пользователя" не должно быть пустым')
        .trim()
        .escape(),
    body('training')
        .notEmpty().withMessage('Поле "Имя пользователя 2 " не должно быть пустым')
        .trim()
        .escape(),
    body('place')
        .notEmpty().withMessage('Поле "Имя пользователя 3" не должно быть пустым')
        .trim()
        .escape(),
    // Другие правила валидации...
    (req, res, next) => {
        // Проверка наличия ошибок валидации
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }
        // Если ошибок нет, переходим к следующему middleware
        next();
    }

];

module.exports = validateForm;