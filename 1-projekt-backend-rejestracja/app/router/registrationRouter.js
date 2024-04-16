const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Router index tset');
});

module.exports = router;