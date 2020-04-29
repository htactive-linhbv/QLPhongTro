const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/checkChuTroLogin.Middleware');
const hoaDonController = require('../controllers/hoadon.Controller')

router.use(checkLogin)
router.get('/',hoaDonController.get)
router.get('/:id/chitiet')
router.post('/')
router.patch('/:id/update')
router.delete('/:id/delete')

module.exports = router;
