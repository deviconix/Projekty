const trainingForm = require('./TrainingForm');

//console.log(trainingForm);



// view
trainingForm.getData();
//console.log(result);

const body = {
    valueTraining: '',
    valuePlace: 'Warszawa',
    valueFullName: 'dd dv',
}

// check valueN and validate
trainingForm.setValidateErr(body).getData();

// check valueN and validate
trainingForm.setValidateOk().getData();
