const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema(
    {
        tour: {
            type: String,
            required: true
        },
        payment: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        user: {
            type: String,
            required: true
        },
    }
)

const booking = mongoose.model('Booking', bookingSchema, 'Booking'); 

module.exports = booking; 

