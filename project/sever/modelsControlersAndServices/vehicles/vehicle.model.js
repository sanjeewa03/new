const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    vehicleID: { type: Int, unique: true, required: true },
    vehicleNo: { type: String, unique: true, required: true },
    vehicleType: { type: String, required: true },
    seats: { type: Int, required }
    
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Vehicle', schema);