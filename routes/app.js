var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var today = new Date();
    var year = today.getFullYear();
    res.render('index',{year: year});
});

module.exports = router;
