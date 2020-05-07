const express = require('express');
const router = express.Router();
const baiDangController = require('../controllers/baidang.Controller');
const upload = require('../middlewares/uploadImageBaiDang.Middleware');
const checkLogin = require('../middlewares/checkChuTroLogin.Middleware');

router.get('/',checkLogin,baiDangController.getAll);
router.get(':id/chitiet',baiDangController.getId);
router.post('/',checkLogin,upload.array('photos',5),baiDangController.create);

module.exports = router;