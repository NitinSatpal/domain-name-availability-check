const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const prefixSchema = new Schema ({
	website: Array,
	business: Array,
	shop: Array,
	software: Array,
	app: Array,
	eBook: Array,
	affiliate: Array,
	community: Array,
	training: Array,
	news: Array,
	marketplace: Array,
	video: Array
});

module.exports = mongoose.model('prefix', prefixSchema, 'prefixes');