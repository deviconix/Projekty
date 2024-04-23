module.exports = function (eventEmitter) {
    //eventEmitter.on('trainingCreated', (req, res, user) => {
    eventEmitter.on('trainingCreated', (req, res) => {
        // Обработка события создания пользователя
        console.log('[ event ] : trainingCreated');
        console.log(req.session);
    });

    eventEmitter.on('errorValidate', (req, res) => {
        console.log('[ event ] : errorValidate');
        console.log(req.session);
        // Обработка ошибки
    });
};