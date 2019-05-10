const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    hotelID: { type: Int, unique: true, required: true },
    hotelName: { type: String, unique: true, required: true },
    rooms: { type: Int, unique: true, required: true },
    availableRomms: { type: Int, unique: true, required: true },
    
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Hotel', schema);