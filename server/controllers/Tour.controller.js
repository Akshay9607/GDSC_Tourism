const { Tour } = require('../models/Tour.model');
const twilio = require('twilio');

const sendBookTourMessage = (req, res, next) => {
	const TWILIO_ACCOUNT_SID = 'AC2971ddc5bd7ce83af63d029e700175fd';
	const TWILIO_AUTH_TOKEN = 'a645b051fb072004b56537607c11caec';
	const { body, mediaUrl } = req.body;
	const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
	client.messages
		.create({
			from: 'whatsapp:+14155238886',
			to: 'whatsapp:+919657248532',
			body,
			mediaUrl,
		})
		.then((message) => console.log(message.sid))
		.catch((err) => console.log(err.message));
};

const addTour = async (req, res, next) => {
	Tour.init().then(async () => {
		var new_tour = new Tour({
			englishData: req.body.englishData,
			arabicData: req.body.arabicData,
		});
		try {
			const tour = await new_tour.save();
			res.status(201).send(tour);
		} catch (err) {
			console.log(err.message);
			res.status(500).json({ error: err.message });
		}
	});
};

const getAllTours = async (req, res, next) => {
	try {
		let tours = await Tour.find();
		res.status(200).json(tours);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

const getAllToursEnglish = async (req, res, next) => {
	try {
		let tours = await Tour.find();
		tours = tours.map((tour) => tour.englishData);
		res.status(200).json(tours);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

const getAllToursArabic = async (req, res, next) => {
	try {
		let tours = await Tour.find();
		tours = tours.map((tour) => tour.arabicData);
		res.status(200).json(tours);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

const getTourByIDEnglish = async (req, res, next) => {
	const tourID = req.params.id;
	try {
		const tour = await Tour.findById(tourID);
		if (!tour) {
			res.status(404).json({ error: 'No Tour Found' });
			return;
		}
		res.status(200).json(tour.englishData);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

const getTourByIDArabic = async (req, res, next) => {
	const tourID = req.params.id;
	try {
		const tour = await Tour.findById(tourID);
		if (!tour) {
			res.status(404).json({ error: 'No Tour Found' });
			return;
		}
		res.status(200).json(tour.arabicData);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

module.exports = {
	addTour,
	getAllTours,
	getAllToursEnglish,
	getAllToursArabic,
	getTourByIDEnglish,
	getTourByIDArabic,
	sendBookTourMessage,
};
