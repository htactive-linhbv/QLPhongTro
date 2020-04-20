const express = require('express');
const router = express.Router();
const khachThueController = require('../controllers/khachThue.Controller')
const checkLogin = require('../middlewares/checkChuTroLogin.Middleware')

router.use(checkLogin);
router.get('/',khachThueController.getAll)
router.get('/:id/chitiet',khachThueController.getId)
router.post('/',khachThueController.create)
router.patch('/:id/update',khachThueController.update)
router.delete('/:id/delete',khachThueController.delete)

module.exports = router;