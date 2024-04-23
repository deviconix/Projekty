const formRegistrationService = require('../services/formRegistrationService');

const index = async (req, res) => {

    try {

        const data = await formRegistrationService.getAllTrainings(req, res);// ? req and res

        const { componentsData, validationData, tableData } = data;

        res.render('pageRegistration', { componentsData, validationData, tableData });

    } catch (error) {

        console.error(error);

        res.status(500).send('Server error');

    }

};

// INSERT
const add = async (req, res) => {

    try {

        await formRegistrationService.createTraining(req);

        res.redirect('/form-registration');

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

    } catch (error) {

        console.error(error);

        res.status(500).send('Server error');
    }
};

// CANCEL
const cancel = async (req, res) => {

    try {

        await formRegistrationService.cancelTraining(req);

        res.redirect('/form-registration');

    } catch (error) {

        console.error(error);

        res.status(500).send('Server error');
    }

};

module.exports = {
    index,
    add,
    drop,
    cancel
};