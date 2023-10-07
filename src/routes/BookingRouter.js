const express = require('express');
const router = express.Router();
const bookingController = require('../controller/BookingController');

router.post('/create', bookingController.createBooking);
router.get('/get/:id', bookingController.getBooking);
router.get('/getall',bookingController.getAllBooking);
router.put('/update/:id', bookingController.updateBooking);
router.delete('/delete/:id', bookingController.deleteBooking);
router.get('/count',bookingController.bookingCount);
module.exports = router;