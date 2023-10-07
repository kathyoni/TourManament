const Tour = require('../models/TourModel')

// create a new tour
const createTour = async(req,res)=>{
    const newTour = new Tour(req.body)
    try {
        const saveTour = await newTour.save()
        res.status(200).json({success:true,message:"Successfully created new tour",
        data:saveTour})
    } catch (e) {
        res.status(500).json({success:false,message:"Failed to create. Try again"});
    }
}
// //update Tour
const updateTour = async(req,res)=>{
    const id = req.params.id
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id,
            {$set: req.body}
            ,{new: true})

        res.status(200).json({success:true,message:"Successfully updated",
        data:updatedTour})
    } catch (e) {
        res.status(500).json({success:false,message:"Failed to update. Try again"});
    }
}
const deleteTour = async(req,res)=>{
    const id = req.params.id
    try {
        const deleteTour = await Tour.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"Successfully deleted"})
    } catch (e) {
        res.status(500).json({success:false,message:"Failed to delete. Try again"});
    }
}
 const getSingleTour = async(req,res)=>{
    
    const id = req.params.id
    try {
        const tour = await Tour.findById(id)

        res.status(200).json({success:true,message:"Successfully",
        data:tour})
    } catch (e) {
        res.status(404).json({success:false,message:"not found"});
    }
}
 const getAllTour = async(req,res)=>{
    const page = parseInt(req.query.page);
    try {
        const tours = await Tour.find().skip(page*8).limit(8)
        res.status(200).json({success:true,count:tours.lenght,message:"Successfully",
        data:tours})
    } catch (e) {
        res.status(404).json({success:false,message:"not found"});
    }
}
//  get tour by search
const getTourBySearch = async(req,res)=>{
    const gatheringPlace = new RegExp(req.query.gatheringPlace)

    try {
        const tours = await Tour.find({gatheringPlace})
        res.status(200).json({success:true,message:"Successfully",
        data:tours})
    } catch (e) {
        res.status(404).json({success:false,message:"not found"});
    }
}
const getTourCount = async(req,res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({success:true,message:"Successfully",
        data:tourCount})
    } catch (error) {
        res.status(500).json({success:false,message:"failed to fetch"});
    }
}


module.exports = {
    createTour,
    updateTour,
    deleteTour,
    getSingleTour,
    getAllTour,
    getTourBySearch,
    getTourCount
}