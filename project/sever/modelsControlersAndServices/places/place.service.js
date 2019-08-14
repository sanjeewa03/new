const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Place = db.Place;


module.exports = {
    
    create,
    getAll
};

async function create(placeParam) {
    console.log("inside Place create func");
	
    // validate
    if (await Place.findOne({ id: placeParam.username })) {
        throw 'Username "' + placeParam.username + '" is already taken';
    }

    const place = new Place(placeParam);

    

    // save user
    await place.save();
}

async function getAll() {
    return await Place.find();
}