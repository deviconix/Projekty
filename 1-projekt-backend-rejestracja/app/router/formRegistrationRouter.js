const express = require('express');
const router = express.Router();
const formRegistrationController = require('../controllers/formRegistrationController');
// router.get('/', function (req, res) {
//     res.send('Router index tset');
// });

router.get('/', formRegistrationController.index);
router.post('/add', formRegistrationController.add);
router.get('/delete/:id', formRegistrationController.drop);// current
//router.delete('/delete/:id', formRegistrationController.drop);// release

module.exports = router;