const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
	rating: {
		type: mongoose.Decimal128,
		default: 5,
	},
	review: { type: String, minlength: 3 },
});

const Review = mongoose.model('review', ReviewSchema);

module.exports = { Review };
