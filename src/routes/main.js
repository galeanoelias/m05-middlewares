const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController.js')
const adminUser = require('../middlewares/adminUser')

router.get('/', controller.index)
router.get('/admin', adminUser, controller.admin)

module.exports = router