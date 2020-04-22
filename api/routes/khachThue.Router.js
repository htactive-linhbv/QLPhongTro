const express = require('express');
const router = express.Router();
const khachThueController = require('../controllers/khachThue.Controller')
const checkLogin = require('../middlewares/checkChuTroLogin.Middleware')
const upload = require('../middlewares/uploadImage.Middleware')

router.use(checkLogin);
router.get('/',khachThueController.get)
router.get('/:id/chitiet',khachThueController.getId)
router.post('/create',upload.fields([
    {name :'anhDaiDien'},
    {name : 'anhCMNDTruoc'},
    {name : 'anhCMNDSau'}
]),khachThueController.create)
//router.patch('/:id/update',khachThueController.update)
//router.delete('/:id/delete',khachThueController.delete)



module.exports = router;