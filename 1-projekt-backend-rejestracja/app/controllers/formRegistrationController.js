const formRegistrationService = require('../services/formRegistrationService');

// INDEX
const index = async (req, res) => {
    try {
        const data = await formRegistrationService.getAllTrainings();
        const { formRegistration, validationFormRegistration, trainings } = data;

        res.render('formRegistration', { formRegistration, validationFormRegistration, trainings });

    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

// INSERT
const add = async (req, res) => {
    try {
        await formRegistrationService.createTraining(req);
        console.log('controller add');
        res.redirect('/form-registration');
        // render hbs
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

// DELETE
const drop = async (req, res) => {
    try {
        await formRegistrationService.deleteTrainingById(req);
        console.log('controller delete');
        res.redirect('/form-registration');
        // render hbs
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    index,
    add,
    drop
};