const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    profilePicture: {
        type: String,
        default: 'https://www.freepik.com/icon/businessman_6997481#fromView=keyword&page=1&position=37&uuid=356f5f34-f9ac-43cc-8aed-3e79a260126a'
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);