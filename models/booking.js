const mongoose = require('mongoose');


const bookingShema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    eventName: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
    },
}, { timestamps: true });
module.exports = mongoose.model('Booking', bookingShema);