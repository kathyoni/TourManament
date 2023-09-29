const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        sex: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        passengerType: {
            type: String,
            required: true
        },
        note: {
            type: String,
            required: true
        },
        tour: {
            type: String,
            required: true
        },
        startDate: {
            type: String,
            required: true
        },
        endDate: {
            type: String,
            required: true
        },
        numberOfTravelers: {
            type: Number,
            required: true
        },
        numberOfAult: {
            type: Number,
            required: true
        },
        numberOfChildren: {
            type: Number,
            required: true
        },
        numberOfBaby: {
            type: Number,
            required: true
        },
        payment: {
            type: String,
            required: true
        },
        sale: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        total: {
            type: String,
            required: true
        },
    }
)

const booking = mongoose.model('Booking', bookingSchema, 'Booking'); 

module.exports = booking; 

