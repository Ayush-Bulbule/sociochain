const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true

    },

    password: {
        required: true,
        type: String

    },
    role: {
        type: String,
        default: 'user'
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    waddress: {
        type: String,
        required: true,
        unique: true
    },


})


module.exports = User = mongoose.model('user', UserSchema)