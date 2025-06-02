const mongoose = require('mongoose');
require('dotenv').config();

const conn = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('MongoDB bağlantısı başarılı!');
        })
        .catch((err) => {
            console.error('MongoDB bağlantısı başarısız!');
            console.error(err);
        });
};

module.exports = conn;
