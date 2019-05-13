const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Tourist = db.Tourist;


module.exports = {
    
    create
};

async function create(touristParam) {
    console.log(touristParam);
    console.log("inside tourist create func");
	
	
    // validate
    if (await Tourist.findOne({passportID: touristParam.passportID })) {
        throw 'Username "' +touristParam.passportID + '" is already taken';
    }

    const tourist = new Tourist(touristParam);

    

    // save user
    await tourist.save();
}