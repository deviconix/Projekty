const Training = require('../models/Training');
//data
const dataPlace = require('../components/data/selectPlace');
const dataTraining = require('../components/data/selectTraining');
//
const { validationResult } = require('express-validator');

const getAllTrainings = async (req, res) => {
    try {
        //console.log(req);
        //return 'model data';
        const trainings = await Training.find({}).lean();
        const formRegistration = req.session.formCurrent;// serviceFormBuild.RegistrationTraining()
        const validationErr = req.session.errorsSession; // res.flash midleware and value all elements form
        //  isFormClear not let or const      console.info('isFormClear=', isFormClear);
        let isFormClear = req.session.FormClear || false;
        // session - ?
        console.info('isFormClear=', isFormClear);

        const componentsData = {
            dataTraining,
            dataPlace,
            valueTraining: (typeof formRegistration === 'object') ? formRegistration.training : '',
            valuePlace: (typeof formRegistration === 'object') ? formRegistration.place : '',
            valueFullName: (typeof formRegistration === 'object') ? formRegistration.fullname : ''
        }

        // decorator
        if (isFormClear) {
            console.log(isFormClear, ' clear')
            componentsData['valueTraining'] = '';
            componentsData['valuePlace'] = '';
            componentsData['valueFullName'] = '';

            formClear = false;
        }

        //+console.log(trainings);
        return { formRegistration, validationErr, trainings, componentsData };
    } catch (error) {
        console.log(error)
        throw new Error('Get Training err');
    }
};

const createTraining = async (req, res) => {

    const errors = validationResult(req);
    //console.log(errors);
    // check validate
    if (!errors.isEmpty()) {
        req.session.errorsSession = errors;
        req.session.formCurrent = req.body;
    } else {
        req.session.errorsSession = [];
        // check select data
        try {

            // check save
            try {
                const newTraining = await Training(req.body);

                await newTraining.save();
                //res.redirect('/blog');
                req.session.FormClear = true;
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