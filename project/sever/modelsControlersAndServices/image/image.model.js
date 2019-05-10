const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    img: 
      { data: Buffer, contentType: String }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Image', schema);