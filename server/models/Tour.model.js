const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
	englishData: {
		type: {
			title: {
				type: String,
				required: true,
			},
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
					type: [
						{
							type: {
								hour: { type: Number },
								minute: { type: Number },
								activityTitle: { type: String },
								activityDescription: { type: String },
							},
						},
					],
				},
			],

			booking: {
				type: {
					facebookUrl: { type: String },
					phoneNumber: { type: String },
					twitterUrl: { type: String },
					mailId: { type: String },
					instagramUrl: { type: String },
					discordUrl: { type: String },
				},
			},
		},
	},
	arabicData: {
		type: {
			title: {
				type: String,
				required: true,
			},
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
					type: [
						{
							type: {
								hour: { type: Number },
								minute: { type: Number },
								activityTitle: { type: String },
								activityDescription: { type: String },
							},
						},
					],
				},
			],

			booking: {
				type: {
					facebookUrl: { type: String },
					phoneNumber: { type: String },
					twitterUrl: { type: String },
					mailId: { type: String },
					instagramUrl: { type: String },
					discordUrl: { type: String },
				},
			},
		},
	},
});

const Tour = mongoose.model('tour', tourSchema);

module.exports = { Tour };