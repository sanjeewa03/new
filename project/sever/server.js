require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const multer = require('multer');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
//app.use(jwt());

//app.use( express.static('public'));

var publicDir = require('path').join(__dirname,'/public');
console.log(publicDir);
app.use(express.static(publicDir));


// api routes
app.use('/users', require('./modelsControlersAndServices/users/users.controller'));
app.use('/hotel', require('./modelsControlersAndServices/hotels/hotel.controller'));


app.use('/place', require('./modelsControlersAndServices/places/place.controller.js'));

app.use('/tourist', require('./modelsControlersAndServices/tourist/tourist.controller'));
app.use('/message',require('./modelsControlersAndServices/messages/messages.controller'));

app.use('/safari',require('./modelsControlersAndServices/safari/safari.controller'));
app.use('/package',require('./modelsControlersAndServices/package/package.controller'));

app.use('/book',require('./modelsControlersAndServices/booking/booking.controller.js'));

app.use('/image',require('./modelsControlersAndServices/image/image.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});