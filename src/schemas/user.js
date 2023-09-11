const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    lastname: {type: String, required: true, minlength: 2},
    username: {type: String, required: true, minlength: 3, /* unique: true */},
    password: {type: String, required: true, minlength: 6}
}, { timestamps: true }
);

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;