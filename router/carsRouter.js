const express = require('express');
const router = express.Router();
const carsController = require('../controller/carsController');
const multer = require('multer');
const path = require('path');

router.get('/cars',carsController.getCarsPage)
router.get('/cars/:id',carsController.getDetail)
router.delete('/delete-cars/:id',carsController.gönderi_delete)
module.exports = router;