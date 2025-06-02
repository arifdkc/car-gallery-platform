const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');
const upload = require('../middleware/upolad');
const path = require('path');
const adminMiddleware = require('../middleware/adminMiddleware'); // admin kontrolü için middleware


// Admin paneline giden route
router.get('/admin', adminMiddleware, adminController.getAdminPage);

// Yeni araba eklemek için route

router.post('/admin/add-car',  adminMiddleware,upload.array('image', 5),adminController.addCar); 
module.exports = router;
