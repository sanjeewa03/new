const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    packageID: { type: Int, unique: true, required: true },
    packageName: { type: String, unique: true, required: true },
    createdDate: { type: Date, default: Date.now },
    places: { type: [] },
    hotels: { type: [] },
    safari: { type: [] },
    vahical: { type: [] },
    charge: { type: Int }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Package', schema);