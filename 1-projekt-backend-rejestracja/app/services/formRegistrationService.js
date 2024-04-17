const Training = require('../models/Training');

const getAllApplications = async () => {
    try {
        return 'model data';
        return await Training.find({});
    } catch (error) {
        throw new Error('Ошибка при получении пользователей');
    }
};

module.exports = {
    getAllApplications
};