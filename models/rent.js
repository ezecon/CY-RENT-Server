const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
    Rent: {
        type: Number,
        required: true
    },
    Hour: {
        type: Number,
        required: true
    },
    RenterID: {
        type: String,
        required: true
    },
    OwnerID: {
        type: String,
        required: true
    },
    PostID: {
        type: String,
        required: true
    },
    RenterNum: {
        type: String,
        required: true
    },
    OwnerNum: {
        type: String,
        required: true
    },
        status:{
        type: String,
        default: 'Pending',

    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('rent', rentSchema);
