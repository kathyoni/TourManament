const Booking = require('../models/BookingModel')

const bookingCreate = async(req,res) =>{
        const newBooking = new Booking(req.body)
    try{
        const saveBooking = await newBooking.save();
        res.status(200).json({success:true,message:"Your tour is booked",
        data:saveBooking})
    }catch(e){
        res.status(500).json({success:false,message:"internal server error"});
    }
}
//get single tour
const getBooking = async(req,res) =>{
    const id = req.params.id
    try {
        const book = await Booking.findById(id)
        res.status(200).json({success:true,message:"Successful",
        data:book})
    } catch (error) {
        res.status(404).json({success:false,message:"not found"});
    }
}
//get all tour
const getAllBooking = async(req,res) =>{
    const id = req.params.id
    try {
        const book = await Booking.findById(id)
        res.status(200).json({success:true,message:"Successful",
        data:book})
    } catch (error) {
        res.status(500).json({success:false,message:"internal server error"});
    }
}
module.exports = {
    bookingCreate,
    getBooking,
    getAllBooking
}