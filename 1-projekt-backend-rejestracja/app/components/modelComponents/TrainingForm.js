//data
const componentDataPlace = require('../data/selectPlace');
const componentDataTraining = require('../data/selectTraining');

// debugger console (helper)
const consol = {
    show: false,
    //show: true,
    log: function (mess) {
        if (this.show) { console.log(mess); }
    }
}

const TrainingForm = {
    componentDataPlace,
    componentDataTraining,
    valueTraining: '',
    valuePlace: '',
    valueFullName: '',
    validate: false,
    test: true,

    // privat

    setValue: function (values = {}) {
        consol.log('--- setValue');
        consol.log(values);
        const { valueTraining = '', valuePlace = '', valueFullName = '' } = values;
        //const { valueTraining, valuePlace = '', valueFullName = '' } = values;
        this.valueTraining = valueTraining;
        this.valuePlace = valuePlace;
        this.valueFullName = valueFullName;

        //return this;
    },

    clearForm: function () {
        consol.log('--- clearForm');
        this.setValue();
        consol.log('--- clearForm ----');
        //return this;
    },

    recoveryForm: function (errObj) {
        consol.log('--- recoveryForm');
        // parsing err
        consol.log(errObj);
        const value = this.parsingErrObj(errObj);
        this.setValue(value);
        // return this;
    },

    parsingErrObj: function (errObj) {
        // structure ?
        const value = {
            valueTraining: errObj.valueTraining,
            valuePlace: errObj.valuePlace,
            valueFullName: errObj.valueFullName,
        };
        return value;

    },


    // public
    getData: function () {
        consol.log('--- getData');

        // rename property for you (protocol)
        const data = {
            dataPlace: this.componentDataPlace,
            dataTraining: this.componentDataTraining,
            valueTraining: this.valueTraining,
            valuePlace: this.valuePlace,
            valueFullName: this.valueFullName,
            validate: this.validate
        }
        consol.log(data);
        return data;
    },

    setValidateOk: function () {
        this.validate = true;
        this.clearForm();
        return this;
    },

    setValidateErr: function (errObj) {
        this.validate = false;
        this.recoveryForm(errObj);
        return this;
    },
}


module.exports = TrainingForm;

