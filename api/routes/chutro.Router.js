const express = require('express');
const router = express.Router();
const chutroController = require('../controllers/chutro.Controller')


router.get('/',chutroController.get)
router.get('/:page/page',chutroController.getPage)
router.get('/:id/chitiet', chutroController.getId)
router.post('/', chutroController.create)
router.patch('/:id/update',chutroController.update)
router.delete('/:id/delete',chutroController.delete)

module.exports = router;    