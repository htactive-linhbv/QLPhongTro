const express = require('express')
const router = express.Router();
const userLoginController = require('../controllers/userLogin.Controller');
const chuTroLoginController = require('../controllers/chuTroLogin.Controller');

router.post('/user',userLoginController.login)
router.post('/chutro',chuTroLoginController.login)
router.post('/admin')

module.exports = router;