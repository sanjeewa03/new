const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    placeID: { type: Int, unique: true, required: true },
    placeName: { type: String, unique: true, required: true },
    
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Place', schema);