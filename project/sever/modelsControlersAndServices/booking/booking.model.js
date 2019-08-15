const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    bookingid: { type:String, unique: true, required: true },
    userName: { type: String, unique: false, required: true },
    createdDate: { type: Date, default: Date.now },
    destinationList: { type: [] },
    accomadationsList: { type: [] },
    checkInDate: { type: Date, required:false},
    checkOutDate: { type: Date, required:false}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Booking', schema);