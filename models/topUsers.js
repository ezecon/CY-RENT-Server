const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    city: {
        type: String,
        default: ''
    },
    district: {
        type: String,
        default: ''
    },
    nidImage: {
        type: String,
        default: ''
    },
    numberOfRent: {
        type: Number,
        default: 0
    },
    numberOfRentTaken: {
        type: Number,
        default: 0
    },
    nidCheck: {
        type: Number,
        default: 0
    },
    number:{
        type: Number,
        default: ''
    },
    image: {
        type: String,
        default: 'https://wallpapers.com/images/hd/oggy-and-the-cockroaches-suspicious-smile-ykp282hxp5r6m8gp.jpg'
    },
});

module.exports = mongoose.model('user', userSchema);
