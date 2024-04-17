const express = require('express');
const router = express.Router();
const formRegistrationController = require('../controllers/formRegistrationController');
// router.get('/', function (req, res) {
//     res.send('Router index tset');
// });

router.get('/', formRegistrationController.index);
router.post('/add', formRegistrationController.index);
router.get('/delete', formRegistrationController.index);// ?

module.exports = router;