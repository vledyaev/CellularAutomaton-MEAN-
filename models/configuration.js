var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    state: {type: String, required: true},
    creationDate: {type: Date,default: Date.now}
});

schema.post('remove', function (configuration) {
    User.findById(configuration.user, function (err, user) {
        user.configurations.pull(configuration);
        user.save();
    });
});

module.exports = mongoose.model('Configuration', schema);