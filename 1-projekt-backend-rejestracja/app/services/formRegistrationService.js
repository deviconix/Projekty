const Training = require('../models/Training');
const { validationResult } = require('express-validator');

const getAllTrainings = async () => {
    try {
        //return 'model data';
        const trainings = await Training.find({}).lean();
        const formRegistration = {};// serviceFormBuild.RegistrationTraining()
        const validationFormRegistration = {}; // res.flash midleware and value all elements form
        console.log(trainings);
        return { formRegistration, validationFormRegistration, trainings };
    } catch (error) {
        throw new Error('Get Training err');
    }
};

const createTraining = async (req, res) => {
    // check err
    const errors = validationResult(req);
    //console.log(errors);
    // check validate
    if (!errors.isEmpty()) {
        // err
        // flash
        //req.flash('error', errors);
        res.locals.err = errors;
    } else {
        // next()
        // check select data
        try {

            // check save
            try {
                const newTraining = await Training(req.body);

                await newTraining.save();
                //res.redirect('/blog');
            } catch (err) {
                if (err.code === 11000) {
                    res.render('userViews/signupUser', { // ??? на root
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
    }
};

const deleteTrainingById = async (req) => {
    /* Удаление товара по ID */
    try {
        await Training.findByIdAndDelete(req.params.id);
        //res.redirect('/blog');
    } catch (err) {
        console.log('service:registrarion delete');
    }
};

module.exports = {
    getAllTrainings,
    createTraining,
    deleteTrainingById
};