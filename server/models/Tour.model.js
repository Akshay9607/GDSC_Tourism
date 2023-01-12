const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
	englishData: {
		type: {
			destination: {
				type: String,
				required: true,
			},
			price: {
				type: Number,
			},
			duration: {
				type: Number,
				required: true,
			},
			country: {
				type: String,
				required: true,
			},
			city: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
			shortDescription: {
				type: String,
			},
			imageBanner: {
				type: String,
				required: true,
			},
			tourImages: [
				{
					type: String,
				},
			],
			offer: {
				type: Number,
			},
			reviews: [
				{
					type: {
						rating: {
							type: mongoose.Decimal128,
							default: 5,
						},
						review: { type: String, minlength: 3 },
					},
				},
			],

			schedule: [
				{
					hour: { type: Number },
					minute: { type: Number },
					activityTitle: { type: String },
					activityDescription: { type: String },
				},
			],
		},
	},
	arabicData: {
		type: {
			destination: {
				type: String,
				required: true,
			},
			price: {
				type: Number,
			},
			duration: {
				type: Number,
				required: true,
			},
			country: {
				type: String,
				required: true,
			},
			city: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
			shortDescription: {
				type: String,
			},
			imageBanner: {
				type: String,
				required: true,
			},
			tourImages: [
				{
					type: String,
				},
			],
			offer: {
				type: Number,
			},
			reviews: [
				{
					type: {
						rating: {
							type: mongoose.Decimal128,
							default: 5,
						},
						review: { type: String, minlength: 3 },
					},
				},
			],

			schedule: [
				{
					hour: { type: Number },
					minute: { type: Number },
					activityTitle: { type: String },
					activityDescription: { type: String },
				},
			],
		},
	},
});

const Tour = mongoose.model('tour', tourSchema);

module.exports = { Tour };
