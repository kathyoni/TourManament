const Booking = require('../models/BookingModel')

const createBooking = async(req,res) =>{
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
module.exports = {
    createBooking,
    getBooking,
    getAllBooking,
    updateBooking,
    deleteBooking
}