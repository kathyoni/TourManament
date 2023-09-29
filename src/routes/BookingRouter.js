const express = require('express');
const router = express.Router();
const bookingController = require('../controller/BookingController');

router.post('/create', bookingController.createBooking);
router.get('/get/:id', bookingController.getBooking);
router.put('/update/:id', bookingController.updateBooking);
router.delete('/delete/:id', bookingController.deleteBooking);
module.exports = router;