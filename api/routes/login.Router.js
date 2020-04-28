const express = require('express')
const router = express.Router();
const userLoginController = require('../controllers/userLogin.Controller');
const chuTroLoginController = require('../controllers/chuTroLogin.Controller');
const checkLoginChuTro = require('../middlewares/checkChuTroLogin.Middleware')

router.post('/user',userLoginController.login)
router.post('/chutro',chuTroLoginController.login)
router.post('/chutro/changepassword',checkLoginChuTro,chuTroLoginController.changePassword)
router.post('/admin')

module.exports = router;