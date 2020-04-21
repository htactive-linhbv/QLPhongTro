const express = require('express');
const router = express.Router();
const phongTroController = require('../controllers/phongtro.Controller')
const checkLogin = require('../middlewares/checkChuTroLogin.Middleware');

// router.use(checkLogin);
// router.get('/');
// router.get('/:id/chitiet')
// router.get('/:id/getkhutro')
// router.post('/')
// router.patch('/:id/update')
// router.delete('/:id/delete')

module.exports = router;