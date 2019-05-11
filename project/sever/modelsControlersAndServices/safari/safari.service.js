const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Safari = db.Safari;


module.exports = {
    
    create
};

async function create(safariParam) {
    console.log("inside safari create func");
	
    // validate
    if (await Safari.findOne({safariID: safariParam.safariID })) {
        throw 'Username "' +safariParam.safariID + '" is already taken';
    }

    const safari = new Safari(safariParam);

    

    // save user
    await safari.save();
}