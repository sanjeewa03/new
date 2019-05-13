
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    safariID: { type: Number, unique: true, required: true },
    safariName: { type: String, unique: false, required: true },
    location: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    fax: { type: String, unique: true, required: true },
	noOfVehicles: { type: Number, unique: false, required: true },
    
    
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Safari', schema);
