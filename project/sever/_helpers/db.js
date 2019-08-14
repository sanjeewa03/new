const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../modelsControlersAndServices/users/user.model'),
	Message:require('../modelsControlersAndServices/messages/messages.model'),
    Hotel:require('../modelsControlersAndServices/hotels/hotel.model'),
    Safari:require('../modelsControlersAndServices/safari/safari.model'),
    Tourist:require('../modelsControlersAndServices/tourist/tourist.model'),
    Image:require('../modelsControlersAndServices/image/image.model'),
    Package:require('../modelsControlersAndServices/package/package.model'),
    Place:require('../modelsControlersAndServices/places/place.model'),
    Booking:require('../modelsControlersAndServices/booking/booking.model'),
    BookingHotel:require('../modelsControlersAndServices/booking/bookinghotel.model')
};