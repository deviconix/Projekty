const registrationService = require('../services/registrationService');

const index = async (req, res) => {
    try {
        const applications = await registrationService.getAllApplications();
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