const express = require('express');
const router = express.Router();
const khachThueController = require('../controllers/khachThue.Controller')
const checkLogin = require('../middlewares/checkChuTroLogin.Middleware')
const upload = require('../middlewares/uploadImage.Middleware')

//router.use(checkLogin);
//router.get('/',khachThueController.getAll)
//router.get('/:id/chitiet',khachThueController.getId)
//router.post('/',khachThueController.create)
//router.patch('/:id/update',khachThueController.update)
//router.delete('/:id/delete',khachThueController.delete)

router.post('/image',upload.fields([
    {name :'anhDaiDien'},
    {name : 'anhCMNDTruoc'},
    {name : 'anhCMNDSau'}
]),khachThueController.postImage)

module.exports = router;