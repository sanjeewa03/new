const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    bokkingID: { type: Int, unique: true, required: true },
    userName: { type: String, unique: true, required: true },
    createdDate: { type: Date, default: Date.now },
    places: { type: [] },
    hotels: { type: [] },
    safari: { type: [] },
    vahical: { type: [] },
    packages: { type: [] },
    checkin: { type: Date, required:true},
    checkout: { type: Date, required:true}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Booking', schema);