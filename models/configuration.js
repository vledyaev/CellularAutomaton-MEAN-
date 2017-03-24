var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Configuration = require('./user');

var schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    state: {type: String, required: true}
});

schema.post('remove', function (message) {
    User.findById(message.user, function (err, user) {
        user.messages.pull(message);
        user.save();
    });
});

module.exports = mongoose.model('Configuration', schema);