const formRegistrationService = require('../services/formRegistrationService');
//not work const { validationResult } = require('express-validator');
// INDEX
const { validationResult } = require('express-validator');

const index = async (req, res) => {
    try {
        const data = await formRegistrationService.getAllTrainings(req, res);// ? req and res
        const { formRegistration, validationErr, trainings } = data;


        //const validationErr = req.session.errorsSession;
        //console.log(errors2);
        console.log('validationErr');
        console.log(validationErr);
        console.log(formRegistration);


        res.render('formRegistration', { formRegistration, validationErr, trainings });

    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

// INSERT
const add = async (req, res) => {
    try {

        await formRegistrationService.createTraining(req);

        // const errors = validationResult(req);

        // req.session.errorsSession = errors;
        // req.session.formCurrent = req.body;

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