var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    var user = new User({
        firstName: 'Vladimir',
        lastName: 'Ledyaev',
        password: 'pass',
        email: 'ledyaev@tut.by'
    });
    user.save();
    User.findOne({}, function(err, doc) {
        if (err) {
            return res.send('Error!');
        }
        res.render('node', {email: doc.email});
    });
});

router.get('/1', function(req, res, next) {
    var user = new User({
        firstName: 'Vladimir',
        lastName: 'Ledyaev',
        password: 'pass',
        email: 'ledyaev@tut.by'
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
