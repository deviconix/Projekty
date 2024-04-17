const Registration = require('../models/Registration');

const getAllApplications = async () => {
    try {
        return 'model data';
        return await Registration.find({});
    } catch (error) {
        throw new Error('Ошибка при получении пользователей');
    }
};

module.exports = {
    getAllApplications
};