const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const ejs = require('ejs');
dotenv.config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const tourRoute = require('./routes/Tour.route');
const adminRoute = require('./routes/Admin.route');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// database connection
const port = process.env.PORT || 8050;
const dbURI = process.env.MONGODB_CONNECTION_URI;
app.use('/api/tour', tourRoute);
app.use('/api/admin', adminRoute);

// app.get('/', (req, res) => {
// 	res.render('admin');
// });
// app.post('/test', (req, res) => {
// 	const englishData = {};
// 	const arabicData = {};

// 	// English Data Mapping
// 	englishData.title = req.body.titleEn;
// 	englishData.destination = req.body.destinationEn;
// 	englishData.country = req.body.countryEn;
// 	englishData.city = req.body.cityEn;
// 	englishData.description = req.body.descriptionEn;
// 	// General
// 	englishData.price = req.body.price;
// 	englishData.duration = req.body.duration;
// 	englishData.imageBanner = req.body.imageBanner;
// 	englishData.tourImages = req.body.tourImages.split(',');
// 	englishData.offer = req.body.offer;
// 	englishData.booking = {
// 		facebookUrl: req.body.facebookUrl,
// 		phoneNumber: req.body.phoneNumber,
// 		twitterUrl: req.body.twitterUrl,
// 		mailId: req.body.mailId,
// 		instagramUrl: req.body.instagramUrl,
// 		discordUrl: req.body.discordUrl,
// 	};

// 	// Aarabic data Mapping
// 	arabicData.title = req.body.titleAr;
// 	arabicData.destination = req.body.destinationAr;
// 	arabicData.country = req.body.countryAr;
// 	arabicData.city = req.body.cityAr;
// 	arabicData.description = req.body.descriptionAr;
// 	// General
// 	arabicData.price = req.body.price;
// 	arabicData.duration = req.body.duration;
// 	arabicData.imageBanner = req.body.imageBanner;
// 	arabicData.tourImages = req.body.tourImages.split(',');
// 	arabicData.offer = req.body.offer;
// 	arabicData.booking = {
// 		facebookUrl: req.body.facebookUrl,
// 		phoneNumber: req.body.phoneNumber,
// 		twitterUrl: req.body.twitterUrl,
// 		mailId: req.body.mailId,
// 		instagramUrl: req.body.instagramUrl,
// 		discordUrl: req.body.discordUrl,
// 	};

// 	// const data = {...req.body}
// 	res.send({ englishData, arabicData });
// });

mongoose.set('strictQuery', true);
mongoose
	.connect(dbURI)
	.then(() => app.listen(port, () => console.log(`Listening on port ${port}...`)))
	.catch((err) => console.log(err.message));
