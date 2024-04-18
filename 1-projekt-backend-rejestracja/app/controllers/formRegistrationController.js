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
        // return {form,validation<{validationName,validationTrainig,validationPlace}>,table[<Training>]}
        //const applications = 
        await formRegistrationService.createTraining(req);
        // const applications = '<p>Please wait...</p>'
        //res.send(applications);
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
        //const applications = await formRegistrationService.getAllApplications();
        // const applications = '<p>Please wait...</p>'
        //res.send(applications);
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