const express = require('express');
const router =express.Router();
const checkLogin = require('../middlewares/checkChuTroLogin.Middleware')
const hopDongController = require('../controllers/hopDong.controller')

router.get('/',hopDongController.getAll)

module.exports = router;