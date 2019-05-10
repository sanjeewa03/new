const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    safariID: { type: Int, unique: true, required: true },
    safariName: { type: String, unique: true, required: true },
    
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Safari', schema);