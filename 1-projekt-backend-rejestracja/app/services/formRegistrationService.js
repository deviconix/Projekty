const Training = require('../models/Training');

const getAllTrainings = async () => {
    try {
        //return 'model data';
        const trainings = await Training.find({}).lean();
        const formRegistration = {};
        const validationFormRegistration = {}; // res.flash midleware and value all elements form
        console.log(trainings);
        return { formRegistration, validationFormRegistration, trainings };
    } catch (error) {
        throw new Error('Get Training err');
    }
};

const createTraining = async (trainingData) => {
    try {
        //return 'model data';
        const newTraining = Training(trainingData.body);
        try {
            await newTraining.save();
            //res.redirect('/blog');
        } catch (err) {
            if (err.code === 11000) {
                res.render('userViews/signupUser', {
                    error: true,
                    message: "User already exist",
                    user: req.body
                });
            } else {
                // Обработка других ошибок сохранения
                console.error(err);
                res.status(500).send("Internal Server Error");
            }
        }


        const trainings = await Training.find({}).lean();
        const formRegistration = {};
        const validationFormRegistration = {}; // res.flash midleware and value all elements form
        console.log(trainings);
        return { formRegistration, validationFormRegistration, trainings };
    } catch (error) {
        throw new Error('Ошибка при получении пользователей');
    }
};

const deleteTrainingById = async (trainingId) => { /* Удаление товара по ID */ };

module.exports = {
    getAllTrainings,
    createTraining,
    deleteTrainingById
};