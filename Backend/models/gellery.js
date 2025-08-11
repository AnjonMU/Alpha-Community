const mongoose = require('mongoose');

const gellerySchema = new mongoose.Schema({
    title: {
        type: String,
    },
    Image: {
        type: String,
    }
}, { timestamps: true });


module.exports = mongoose.model('Gellery', gellerySchema);