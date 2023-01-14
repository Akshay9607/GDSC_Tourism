// Importing express module
const express = require('express');
const router = express.Router();

const tourController = require('../controllers/Tour.controller');

router.post('/add', tourController.addTour);
router.get('/get/en', tourController.getAllToursEnglish);
router.get('/get/ar', tourController.getAllToursArabic);
router.get('/get/en/:id', tourController.getTourByIDEnglish);
router.get('/get/ar/:id', tourController.getTourByIDArabic);
router.get('/get/all', tourController.getAllTours) 

router.get('/', (req, res, next) => {
	res.send('Tour Route');
});

// Importing the router
module.exports = router;
