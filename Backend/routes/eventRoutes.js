const express = require('express');
const { verifyRole } = require('../middleware/AuthAdmin');
const { createEvent, getEvents } = require('../controllers/eventController');
const router = express.Router();


router.post('/create-event', verifyRole(['admin']), createEvent);
router.get('/events', verifyRole(['admin']), getEvents);



module.exports = router;