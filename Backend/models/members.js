const express = require('express');

const mongoose = require('mongoose');
const membersSchema = new mongoose.Schema({
    image: {
        type: String,
        default: 'https://www.freepik.com/icon/businessman_6997481#fromView=keyword&page=1&position=37&uuid=356f5f34-f9ac-43cc-8aed-3e79a260126a'
    },
    name: {
        type: String,
    },

    degisnation: {
        type: String,
    }
}, { timestamps: true });
module.exports = mongoose.model('Member', membersSchema);