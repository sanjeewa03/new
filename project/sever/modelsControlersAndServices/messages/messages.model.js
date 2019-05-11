const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: false, required: true },
    email: { type: String, unique: false, required: true },
    telNo: { type: Number, unique: false, required: false },
	message:{ type: String, unique: false, required: false },
	read:{ type: Boolean, unique: false, required: true, default:false }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Message', schema);