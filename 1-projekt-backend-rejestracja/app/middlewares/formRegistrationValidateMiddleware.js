//const { body, validationResult } = require('express-validator');
const { body } = require('express-validator');

// Middleware для валидации формы
const validateForm = [
    // Определение правил валидации для каждого поля формы
    body('fullname')
        .notEmpty().withMessage('The "Full name" field must not be empty')
        .trim()
        .escape(),
    body('training')
        .notEmpty().withMessage('The "Training" field must not be empty')
        .trim()
        .escape(),
    body('place')
        .notEmpty().withMessage('The "Place" field must not be empty')
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