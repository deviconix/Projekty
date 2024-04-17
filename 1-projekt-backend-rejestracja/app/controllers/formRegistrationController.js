const formRegistrationService = require('../services/formRegistrationService');

// INDEX
const index = async (req, res) => {
    try {
        //const applications = await formRegistrationService.getAllApplications();
        // const applications = '<p>Please wait...</p>'
        //res.send(applications);
        res.render('formRegistration');

        // render hbs
    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка сервера');
    }
};

// INSERT
const add = async (req, res) => {
    try {
        //const applications = await formRegistrationService.getAllApplications();
        // const applications = '<p>Please wait...</p>'
        //res.send(applications);
        res.redirect('/form-registration');
        // render hbs
    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка сервера');
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
        res.status(500).send('Ошибка сервера');
    }
};

module.exports = {
    index,
    add,
    drop
};