const authController = require('../controller/authController');
const express = require('express');
const router = express.Router();

router.get('/login', authController.login_get); // login sayfasını render et
router.post('/login', authController.login_post); // login işlemi için post isteği


module.exports = router; // router'ı dışa aktar