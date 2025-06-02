const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Kullanıcı Şeması
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    }
});



const admin = mongoose.model('admin', adminSchema);
module.exports = admin;
