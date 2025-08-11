const express = require('express');
const { verifyRole } = require('../middleware/AuthAdmin');
const { gelleryController, getGellery, deleteGellery, updateGellery } = require('../controllers/Gellery');


const router = express.Router();

router.post('create-gellery', verifyRole(['admin']), gelleryController);
router.get('/gellery', getGellery);
router.delete('/gellery/:id', verifyRole(['admin']), deleteGellery);
router.put('/gellery/:id', verifyRole(['admin']), updateGellery);

module.exports = router;