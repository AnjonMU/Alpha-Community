//event model
const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: 'https://www.freepik.com/icon/businessman_6997481#fromView=keyword&page=1&position=37&uuid=356f5f34-f9ac-43cc-8aed-3e79a260126a'
    },

}, { timestamps: true });
module.exports = mongoose.model('Event', eventSchema);