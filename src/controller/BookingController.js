const Booking = require('../models/BookingModel')
const Tour = require('../models/TourModel')


const createBooking = async(req,res) =>{
        
    try{
        const tourId = req.body.Tour
        console.log(tourId)
        const tourInfo = await Tour.findById(tourId)//.populate('Tour')
        if (!tourInfo) {
            return res.status(404).json({ success: false, message: 'Tour not found' });

        }
        const newBooking = new Booking ({...req.body,Tour: tourInfo});
       
        await newBooking.save()
        res.status(200).json({ success: true, message: 'Booking created', data: newBooking });
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
    try {
        const books = await Booking.find();
        res.status(200).json({success:true,message:"Successful",
        data:books})
    } catch (error) {
        res.status(500).json({success:false,message:"internal server error"});
    }
}
// update booking
const updateBooking = async(req,res)=>{
    const id = req.params.id
    try {
        const updateBooking = await Booking.findByIdAndUpdate(id,req.body,{new:true})
        if(!updateBooking){
            return res.status(404).json({ success: false, message: 'Không tìm thấy tour' });
        }
        res.status(200).json({
        success: true,
        message: 'Cập nhật đặt tour thành công',
        data: updateBooking,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Lỗi máy chủ nội bộ' });
    }
}
// Delete booking
const deleteBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedBooking = await Booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy đặt tour để xóa' });
    }

    res.status(200).json({
      success: true,
      message: 'Đặt tour đã bị xóa thành công',
      data: deletedBooking,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Lỗi máy chủ nội bộ' });
  }
};
//Booking Count
const bookingCount = async(req,res) =>{
    try {
        const bookingCount = await Booking.countDocuments();
        const books = await Booking.find();
        let travelerCount = 0;
        let adultCount = 0;
        let childCount = 0;
        let babyCount = 0;
        books.forEach((booking) => {
            travelerCount += booking.numberOfTravelers;
            adultCount += booking.numberOfAdult;
            childCount += booking.numberOfChildren;
            babyCount += booking.numberOfBaby;
        });
        res.json({bookingCount,travelerCount,adultCount,childCount,babyCount})
    } catch (error) {
        res.status(500).json({ success: false, message: 'Lỗi máy chủ nội bộ' });
    }
}
module.exports = {
    createBooking,
    getBooking,
    getAllBooking,
    updateBooking,
    deleteBooking,
    bookingCount
}