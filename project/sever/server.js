require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./modelsControlersAndServices/users/users.controller'));
app.use('/hotel', require('./modelsControlersAndServices/hotels/hotel.controller'));
<<<<<<< HEAD
app.use('/message',require('./modelsControlersAndServices/messages/messages.controller'));
=======
app.use('/safari',require('./modelsControlersAndServices/safari/safari.model'));
>>>>>>> c92b7a839f7d1cff029ea81d2f6d5a9751a4ed6f
// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});