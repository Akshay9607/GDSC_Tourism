const { Tour } = require('../models/Tour.model');

const addTour = async (req, res, next) => {
    const englishData = {};
	const arabicData = {};

	// English Data Mapping
	englishData.title = req.body.titleEn;
	englishData.destination = req.body.destinationEn;
	englishData.country = req.body.countryEn;
	englishData.city = req.body.cityEn;
	englishData.description = req.body.descriptionEn;
	// General
	englishData.price = req.body.price;
	englishData.duration = req.body.duration;
	englishData.imageBanner = req.body.imageBanner;
	englishData.tourImages = req.body.tourImages.split(',');
	englishData.offer = req.body.offer;
	englishData.booking = {
		facebookUrl: req.body.facebookUrl,
		phoneNumber: req.body.phoneNumber,
		twitterUrl: req.body.twitterUrl,
		mailId: req.body.mailId,
		instagramUrl: req.body.instagramUrl,
		discordUrl: req.body.discordUrl,
	};

	// Aarabic data Mapping
	arabicData.title = req.body.titleAr;
	arabicData.destination = req.body.destinationAr;
	arabicData.country = req.body.countryAr;
	arabicData.city = req.body.cityAr;
	arabicData.description = req.body.descriptionAr;
	// General
	arabicData.price = req.body.price;
	arabicData.duration = req.body.duration;
	arabicData.imageBanner = req.body.imageBanner;
	arabicData.tourImages = req.body.tourImages.split(',');
	arabicData.offer = req.body.offer;
	arabicData.booking = {
		facebookUrl: req.body.facebookUrl,
		phoneNumber: req.body.phoneNumber,
		twitterUrl: req.body.twitterUrl,
		mailId: req.body.mailId,
		instagramUrl: req.body.instagramUrl,
		discordUrl: req.body.discordUrl,
	};

	Tour.init().then(async () => {
		var new_tour = new Tour({
			englishData,
			arabicData
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


module.exports = {
    addTour
}