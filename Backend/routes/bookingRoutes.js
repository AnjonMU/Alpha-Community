const express = require('express');
const { verifyRole } = require('../middleware/AuthAdmin');
const { createBooking, getBookings, deleteBooking, updateBooking } = require('../controllers/bookingControllers');


const router = express.Router();
router.post('/create-booking', verifyRole(['user', 'admin']), createBooking);
router.get('/bookings', verifyRole(['user', 'admin']), getBookings);
router.delete('/bookings/:id', verifyRole(['admin']), deleteBooking);
router.put('/bookings/:id', verifyRole(['admin']), updateBooking);
module.exports = router;