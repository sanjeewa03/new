const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Hotel = db.Hotel;


module.exports = {
    
    create,
    getAll
};

async function create(hotelParam) {
    console.log("inside hotel create func");
	
    // validate
    if (await Hotel.findOne({ hotelID: hotelParam.username })) {
        throw 'Username "' + hotelParam.username + '" is already taken';
    }

    const hotel = new Hotel(hotelParam);

    

    // save user
    await hotel.save();
}

async function getAll() {
    return await Hotel.find();
}