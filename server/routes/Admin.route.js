// Importing express module
const express = require('express');
const router = express.Router();

const adminController = require('../controllers/Admin.controller');

router.post('/addTour', adminController.addTour);

router.get('/', (req, res, next) => {
	res.render("admin")
});

// Importing the router
module.exports = router;
