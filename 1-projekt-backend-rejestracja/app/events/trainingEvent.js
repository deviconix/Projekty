module.exports = function (eventEmitter) {
    //eventEmitter.on('trainingCreated', (req, res, user) => {
    eventEmitter.on('trainingCreated', (req, res, formModel) => {
        // Обработка события создания пользователя
        console.log('[ event ] : trainingCreated');
        // console.log(req.session);
        // console.log(formModel);
        formModel.setValidateOk();
    });

    eventEmitter.on('errorValidate', (req, res, formModel) => {
        console.log('[ event ] : errorValidate');
        // console.log(formModel);
        // console.log(req.body);
        const { fullname, training, place } = req.body;
        const value = {
            valueTraining: training,
            valuePlace: place,
            valueFullName: fullname,
        };

        formModel.setValidateErr(value);
        // Обработка ошибки
    });
};