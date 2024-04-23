const formRegistrationService = require('../services/formRegistrationService');
//not work const { validationResult } = require('express-validator');
// INDEX
const { validationResult } = require('express-validator');

const index = async (req, res) => {
    try {
        const data = await formRegistrationService.getAllTrainings(req, res);// ? req and res
        const { formRegistration, validationErr, trainings, componentsData, valueFullName } = data;
        // console.log('******************* formRegistration');
        // console.log(formRegistration);
        // console.log('******************* validationErr');
        // console.log(validationErr);
        // console.log('******************* trainings - mongoDB');
        // //+  console.log(trainings);
        // console.log('******************* componentsData');
        // console.log(componentsData);
        // console.log('******************* valueFullName');
        // console.log(valueFullName);
        // console.log('*******************');


        // //const validationErr = req.session.errorsSession;
        // //console.log(errors2);
        // console.log('validationErr');
        // console.log(validationErr);
        // console.log(formRegistration);


        res.render('pageRegistration', { formRegistration, validationErr, trainings, componentsData, valueFullName });

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