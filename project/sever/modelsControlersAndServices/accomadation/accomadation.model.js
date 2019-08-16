const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    category	: { type: String, unique: true, required: true },
    title	: { type: String, unique: false, required: false },
    caption	: { type: String, unique: false, required: false },
	birthDate   : {type: String, unique: false , required: false},
	gender   : {type: String, unique: false , required: false},
	phoneNumber : {type: Number, unique: false ,required : false},
    nationality: { type: String, unique: false, required: false },
    email: { type: String, unique: true, required: false },
	
    
    
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Accomadation', schema);
