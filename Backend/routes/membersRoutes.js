const express = require('express');
const { verifyRole } = require('../middleware/AuthAdmin');
const { createMember, getMembers, deleteMember, updateMember } = require('../controllers/membersControllers');

const router = express.Router();

router.post('/create-member', verifyRole(['admin']), createMember);
router.get('/members', getMembers);
router.delete('/members/:id', verifyRole(['admin']), deleteMember);
router.put('/members/:id', verifyRole(['admin']), updateMember);

module.exports = router;