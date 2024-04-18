const express = require('express');
const router = express.Router();
const formRegistrationController = require('../controllers/formRegistrationController');

const validateMiddleware = require('../middlewares/formRegistrationValidateMiddleware');

router.get('/', formRegistrationController.index);
router.post('/add', validateMiddleware, formRegistrationController.add);
router.get('/delete/:id', formRegistrationController.drop);// current
//router.delete('/delete/:id', formRegistrationController.drop);// release

module.exports = router;