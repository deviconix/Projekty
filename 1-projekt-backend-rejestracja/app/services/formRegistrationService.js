const Training = require('../models/Training');
const trainingForm = require('../components/modelComponents/TrainingForm');

//
const { validationResult } = require('express-validator');

// events
const eventEmitter = require('../events/eventEmitters');

const getAllTrainings = async (req, res) => {
    try {
        const trainings = await Training.find({}).lean();
        const validationErr = req.session.errorsSession; // res.flash midleware and value all elements form
        const componentsData = trainingForm.getData();
        return { componentsData, validationErr, trainings };
    } catch (error) {
        console.log(error)
        throw new Error('Get Training err');
    }
};

const createTraining = async (req, res) => {

    const errors = validationResult(req);
    // check validate
    if (!errors.isEmpty()) {
        // for view - ?
        req.session.errorsSession = errors;
        req.session.formCurrent = req.body;
        // EVENT ERR
        eventEmitter.emit('errorValidate', req, res, trainingForm);
    } else {
        // view - ?
        req.session.errorsSession = [];
        // check select data
        try {

            // check save
            try {
                const newTraining = await Training(req.body);

                await newTraining.save();
                //res.redirect('/blog');
                // req.session.FormClear = true;
                // EVENT OK
                eventEmitter.emit('trainingCreated', req, res, trainingForm);
            } catch (err) {
                if (err.code === 11000) {
                    res.render('trining/add', { // ??? на root
                        error: true,
                        message: "trining already exist",
                        user: req.body
                    });
                } else {
                    // Обработка других ошибок сохранения
                    console.error(err);
                    res.status(500).send("Internal Server Error");
                }
            }

        } catch (error) {
            throw new Error('Error get training');
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