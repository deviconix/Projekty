module.exports = function (eventEmitter) {
    eventEmitter.on('trainingCreated', (req, res, user) => {
        // Обработка события создания пользователя
        console.log('[ event ] : trainingCreated');
    });

    eventEmitter.on('errorValidate', (req, res) => {
        console.log('[ event ] : errorValidate');
        // Обработка ошибки
    });
};