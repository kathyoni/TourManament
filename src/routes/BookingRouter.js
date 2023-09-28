const express = require('express');
const router = express.Router();
const bookingController = require('../controller/BookingController');

router.post('/', bookingController.bookingCreate);
router.get('/:id', bookingController.getBooking);
router.post('/', bookingController.getBooking);
module.exports = router;