const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: false},
  tag: { type: Array, required:false },
  imgName:{ type: String, required:false},
  productImage: { type: String, required: true },
  
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Image', schema);