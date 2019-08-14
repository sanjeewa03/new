const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id:{ type: Number, unique: true, required: true },
    category:{ type: String, unique: true, required: true },
    header:{ type: String, unique: true, required: true },
    title:{ type: String, unique: true, required: true },
    caption:{ type: String, unique: true, required: true },
    url:{ type: String, unique: true, required: true },
    url1:{ type: String, unique: true, required: true },
    url2:{ type: String, unique: true, required: true },
    url3:{ type: String, unique: true, required: true },
    url4:{ type: String, unique: true, required: true },
    url5:{ type: String, unique: true, required: true },
    url6:{ type: String, unique: true, required: true },
    url7:{ type: String, unique: true, required: true },
    url8:{ type: String, unique: true, required: true },
    
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Place', schema);