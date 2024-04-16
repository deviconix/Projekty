const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');
// router.get('/', function (req, res) {
//     res.send('Router index tset');
// });

router.get('/', registrationController.index);

module.exports = router;