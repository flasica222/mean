'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Schema de abonati
 */
var AbonatSchema = new Schema({
	numeMare: {
		type: String,
		trim: true,
        required: 'Please fill in your first name'
	},
	numeMic: {
		type: String,
		trim: true,
        required: 'Please fill in your last name'
	},
	adresa: {
		type: String,
		trim: true,
        required: 'Please fill in the address'

	},
	email: {
		type: String,
		trim: true,
//		required: 'Please fill in your email',
		match: [/.+\@.+\..+/, 'Please fill a valid email address']
	},

	created: {
		type: Date,
		default: Date.now
	}

});


mongoose.model('Abonat', AbonatSchema);
