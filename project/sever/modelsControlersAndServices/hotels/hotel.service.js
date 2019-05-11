const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Hotel = db.Hotel;


module.exports = {
    
    create
};

async function create(hotelParam) {
    console.log("inside hotel create func");
	
    // validate
    if (await Hotel.findOne({ hotelID: hotelParam.hotelID })) {
        throw 'Username "' + hotelParam.hotelID + '" is already taken';
    }

    const hotel = new Hotel(hotelParam);

    

    // save user
    await hotel.save();
}