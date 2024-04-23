const formRegistrationService = require('../services/formRegistrationService');
//not work const { validationResult } = require('express-validator');
// INDEX
const { validationResult } = require('express-validator');

const index = async (req, res) => {
    try {

        const data = await formRegistrationService.getAllTrainings(req, res);// ? req and res

        const { componentsData, validationErr, trainings } = data;

        res.render('pageRegistration', { componentsData, validationErr, trainings });

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