module.exports = function (eventEmitter) {
    //eventEmitter.on('trainingCreated', (req, res, user) => {
    eventEmitter.on('trainingCreated', (req, res, formModel) => {

        console.log('[ event ] : trainingCreated');

        formModel.setValidateOk();
    });

    eventEmitter.on('errorValidate', (req, res, formModel) => {

        console.log('[ event ] : errorValidate');

        const { fullname, training, place } = req.body;

        const value = {
            valueTraining: training,
            valuePlace: place,
            valueFullName: fullname,
        };

        formModel.setValidateErr(value);

    });
};