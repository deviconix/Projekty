const Training = require('../models/Training');
//data
const componentDataPlace = require('../components/data/selectPlace');
const componentDataTraining = require('../components/data/selectTraining');
//
const { validationResult } = require('express-validator');

// events
const eventEmitter = require('../events/eventEmitters');

const getAllTrainings = async (req, res) => {
    try {
        //console.log(req);
        //return 'model data';
        const trainings = await Training.find({}).lean();
        const formRegistration = req.session.formCurrent;// serviceFormBuild.RegistrationTraining()
        const validationErr = req.session.errorsSession; // res.flash midleware and value all elements form


        const componentsData = {
            componentDataTraining,
            componentDataPlace,
            valueTraining: (typeof formRegistration === 'object') ? formRegistration.training : '',
            valuePlace: (typeof formRegistration === 'object') ? formRegistration.place : '',
            valueFullName: (typeof formRegistration === 'object') ? formRegistration.fullname : ''
        }

        if (isFormClear) {
            console.log(isFormClear, ' clear')


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
        eventEmitter.emit('errorValidate', req, res);
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
                eventEmitter.emit('trainingCreated', req, res);
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

// decorators

const formRecovery = async (req) => {
    try {
        // modificate req.session.formData
    } catch (err) {
        console.log('service:formRecovery err');
    }
}

const formClear = async (req) => {
    try {
        // req.session...
        componentsData['valueTraining'] = '';
        componentsData['valuePlace'] = '';
        componentsData['valueFullName'] = '';

    } catch (err) {
        console.log('service:formClear err');
    }
}

const getFormData = async () => {
    const componentsData = {
        componentDataTraining,
        componentDataPlace,
        valueTraining: '',
        valuePlace: '',
        valueFullName: ''
        // valueTraining: (typeof formRegistration === 'object') ? formRegistration.training : '',
        // valuePlace: (typeof formRegistration === 'object') ? formRegistration.place : '',
        // valueFullName: (typeof formRegistration === 'object') ? formRegistration.fullname : ''
    }
    return componentsData;
}

module.exports = {
    getAllTrainings,
    createTraining,
    deleteTrainingById
};