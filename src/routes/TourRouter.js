const express = require('express');
const router = express.Router();
const TourController = require('../controller/TourController');

//create new tour
router.post('/create', TourController.createTour);
//update tour
router.put('/update/:id', TourController.updateTour);
//delete tour
router.delete('/delete/:id', TourController.deleteTour);
//get single tour
router.get('/getsingle/:id', TourController.getSingleTour);
//get all tour
router.get('/getall', TourController.getAllTour);
//getBySearch
router.get('/getTourBySearch',TourController.getTourBySearch)
//getTourCount
router.get('/getTourCount',TourController.getTourCount)
module.exports = router;