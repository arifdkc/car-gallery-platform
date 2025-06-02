const jwt = require('jsonwebtoken');
const env = require('dotenv').config();

const checkAdmin = (req, res, next) => {
    const token = req.cookies.jwt; // JWT token'ı cookie'den al
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/'); // Token geçersizse login sayfasına yönlendir
            } else {
                next(); // Token geçerliyse bir sonraki middleware'e geç
            }
        });
    } else {
        res.redirect('/login'); // Token yoksa login sayfasına yönlendir
    }
}

module.exports = checkAdmin; // Middleware'i dışa aktar