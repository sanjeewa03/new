const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../modelsControlersAndServices/users/user.model'),

    Hotel:require('../modelsControlersAndServices/hotels/hotel.model'),
    Safari:require('../modelsControlersAndServices/safari/safari.model')

};