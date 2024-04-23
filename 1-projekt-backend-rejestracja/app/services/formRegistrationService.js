// models
const Training = require('../models/Training');
const TrainingForm = require('../components/modelComponents/TrainingForm');

// validatorForm middleware
const { validationResult } = require('express-validator');

// events : { errorValidate, trainingCreated }
const eventEmitter = require('../events/eventEmitters');


//*********************** */
//  private {getDataForm, getDataErr, getDataTable}
// public : {getAllTrainings,  createTraining, deleteTrainingById}

// getAllTrainings use {private:{getDataForm, getDataErr, getDataTable}}
// createTraining use {validatorForm, session, model:{Training}, event:{ errorValidate, trainingCreated }}
// deleteTrainingById use {model:{Training}}
//*********************** */

// public : {getAllTrainings,  createTraining, deleteTrainingById}
const getAllTrainings = async (req, res) => {

    try {

        const componentsData = await getDataForm(TrainingForm);

        const validationData = await getDataErr(req.session);

        const tableData = await getDataTable(Training);

        return { componentsData, validationData, tableData };

    } catch (error) {

        console.log(error)

        throw new Error('Get Training err');

    }

};

const createTraining = async (req, res) => {

    const errors = validationResult(req);
    console.log(req.session);
    // check validate
    if (!errors.isEmpty()) {
        // for view - ?
        req.session.errorsSession = errors;
        req.session.formCurrent = req.body;
        // EVENT ERR
        console.log(req.session);
        eventEmitter.emit('errorValidate', req, res, TrainingForm);
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
                eventEmitter.emit('trainingCreated', req, res, TrainingForm);
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

    try {

        await Training.findByIdAndDelete(req.params.id);

    } catch (err) {

        console.log('err: [formRegistrationService] => deleteTrainingById() ');

        console.log(err);

    }

};

// refactoring
//  private {getDataForm, getDataErr, getDataTable}

const getDataForm = async (modelForm) => {

    try {

        const dataForm = await modelForm.getData();

        return dataForm;

    } catch (err) {

        console.log('err: [formRegistrationService] => getDataForm() ');

        console.log(err);

    }

}

const getDataErr = async (session) => {

    try {

        const dataValidation = await session.errorsSession

        return dataValidation;

    } catch (err) {

        console.log('err: [formRegistrationService] => getDataErr() ');

        console.log(err);

    }

}

const getDataTable = async (Model) => {

    try {

        const data = await Model.find({}).lean();

        return data;

    } catch (err) {

        console.log('err: [formRegistrationService] => getDataTable() ');

        console.log(err);

    }

}

module.exports = {
    getAllTrainings,
    createTraining,
    deleteTrainingById
};