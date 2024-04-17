const formRegistrationService = require('../services/formRegistrationService');

const index = async (req, res) => {
    try {
        const applications = await formRegistrationService.getAllApplications();
        // const applications = '<p>Please wait...</p>'
        res.send(applications);

        // render hbs
    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка сервера');
    }
};

module.exports = {
    index
};