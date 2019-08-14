const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    bookingid: { type:String, unique: true, required: true },
    userName: { type: String, unique: false, required: true },
    createdDate: { type: Date, default: Date.now },
    places: { type: [] },
    hotels: { type: [] },
    checkin: { type: Date, required:true},
    checkout: { type: Date, required:true}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Booking', schema);