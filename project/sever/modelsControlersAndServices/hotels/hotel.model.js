const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    hotelID: { type: Number, unique: true, required: true },
    hotelName: { type: String, unique: true, required: true },
    location: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    fax: { type: String, unique: true, required: true },
    hotelType: { type: String, unique: false, required: true },
	noOfRooms: { type: Number, unique: false, required: true },
    pricePerRoom: { type: Number, unique: false, required: true },
    
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Hotel', schema);