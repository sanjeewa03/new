const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    passportID: { type: Number, unique: true, required: true },
    name	: { type: String, unique: false, required: true },
	password:  { type: String, unique: false, required: true },
    nationality: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    tpNo: { type: Number, unique: false, required: true },
	
    
    
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Tourist', schema);
