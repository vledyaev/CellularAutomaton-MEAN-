var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var _ = require('underscore');

var User = require('../models/user');
var Configuration = require('../models/configuration');

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.header("authentication"));
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

router.patch('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.header("authentication"));
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
                error: {message: 'Configuration not found'}
            });
        }
        if (configuration.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        configuration.name = req.body.name;
        configuration.description = req.body.description;
        configuration.state = JSON.stringify(req.body.state);
        configuration.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated configuration',
                obj: result
            });
        });
    });
});

router.use('/', function (req, res, next) {
    jwt.verify(req.header("authentication"), 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    })
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

router.get('/', function (req, res, next) {
    Configuration.find()
        .populate('user', 'firstName lastName')
        .exec(function (err, configurations) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if (!configurations) {
                return res.status(500).json({
                    title: 'No Configurations Found!',
                    error: {message: 'Message not found'}
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: _.map(configurations,function(configuration){
                    return {
                        name: configuration.name,
                        description: configuration.description,
                        author: configuration.user.firstName + ' ' + configuration.user.lastName,
                        authorId: configuration.user._id,
                        id: configuration._id,
                        creationDate: configuration.creationDate
                    }})
            });
        });
});

router.delete('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.header("authentication"));
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
                error: {message: 'Configuration not found'}
            });
        }
        if (configuration.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        try{
            configuration.remove(function (err, result) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Deleted configuration',
                    obj: result
                });
            });
        }catch(err){
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

    });
});


module.exports = router;