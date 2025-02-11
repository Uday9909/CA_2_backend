const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be empty'],
    },
    email: {
        type: String,
        required: [true, 'Email cannot be empty'],
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password length should be greater than 8'],
        maxlength: [16, 'Password length should be less than or equal to 16'],
    },
    dateOfBirth: {
        type: Date,
        required: false,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
