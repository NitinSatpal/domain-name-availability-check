const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const moreExtensionSchema = new Schema ({
	id: String,
	itemName: String,
	name: String,
	value: Boolean
});

module.exports = mongoose.model('moreExtension', moreExtensionSchema, 'moreExtensions');