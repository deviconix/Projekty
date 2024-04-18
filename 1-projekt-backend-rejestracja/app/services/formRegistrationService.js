const Training = require('../models/Training');

const getAllTrainings = async () => {
    try {
        //return 'model data';
        const trainings = await Training.find({});
        const formRegistration = {};
        const validationFormRegistration = {}; // res.flash midleware and value all elements form

        return { formRegistration, validationFormRegistration, trainings };
    } catch (error) {
        throw new Error('Ошибка при получении пользователей');
    }
};

const createTraining = async (trainingData) => { /* Создание нового товара */ };

const deleteTrainingById = async (trainingId) => { /* Удаление товара по ID */ };

module.exports = {
    getAllTrainings,
    createTraining,
    deleteTrainingById
};