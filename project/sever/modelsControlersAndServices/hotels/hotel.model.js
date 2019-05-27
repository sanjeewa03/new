const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hotelName: { type: String, unique: false, required: true },
    hoteladdress: { type: String, unique: false, required: true },
    hotelWeb: { type: String, unique: true, required: true },
    hotelEmail: { type: String, unique: true, required: true },
    phone: { type: Number, unique: false, required: true },
	category: { type: String, unique: false, required: true },
    noOfRooms: { type: Number, unique: false, required: true },
    
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Hotel', schema);