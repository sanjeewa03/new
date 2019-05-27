
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    agencyName: { type: String, unique: false, required: true },
    agencyAddress: { type: String, unique: false, required: true },
    agencyWeb: { type: String, unique: true, required: true },
    agencyEmail: { type: String, unique: true, required: true },
	agencyPhone: { type: Number, unique: false, required: true },
	noOfVehicles: { type: Number, unique: false, required: true },
    
    
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Safari', schema);
