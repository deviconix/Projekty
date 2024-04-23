//data
const componentDataPlace = require('../data/selectPlace');
const componentDataTraining = require('../data/selectTraining');

const consol = {
    show: false,
    show: true,
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
    // publick


    getData: function () {
        consol.log('--- getData');
        const data = {
            componentDataPlace: this.componentDataPlace,
            componentDataTraining: this.componentDataTraining,
            valueTraining: this.valueTraining,
            valuePlace: this.valuePlace,
            valueFullName: this.valueFullName,
            validate: this.validate
        }
        consol.log(data);
        return data;
    },

    _setStateValidate: function (errObj = {}) {
        // if errObj = empty - ok
        consol.log('--- setStateValidate');
        if (Object.keys(errObj).length === 0) {
            consol.log('{null}');
            this.clearForm();
        } else {
            consol.log('{data}');
            this.setValue(errObj);
        }
        consol.log('--- setStateValidate ----');
        return this;
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

