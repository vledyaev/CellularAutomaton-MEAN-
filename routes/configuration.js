var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var User = require('../models/user');
var Configuration = require('../models/configuration');

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function (err, user) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        var configuration = new Configuration({
            name: req.body.name,
            description: req.body.description,
            state: JSON.stringify(req.body.state),
            user: user
        });

        configuration.save(function (err, result) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            user.configurations.push(result);
            user.save();
            res.status(201).json({
                message: 'Saved configuration',
                obj: result
            });
        });
    });
});


router.get('/:id', function (req, res, next) {
    Configuration.findById(req.params.id, function (err, configuration) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!configuration) {
            return res.status(500).json({
                title: 'No Configuration Found!',
                error: {message: 'Message not found'}
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: configuration
        });
    });
});


module.exports = router;