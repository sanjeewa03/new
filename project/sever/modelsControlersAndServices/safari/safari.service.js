const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Safari = db.Safari;


module.exports = {
    
    create,
    getAll
};

async function create(safariParam) {
    console.log(safariParam);
    console.log("inside safari create func");
	
	
    // validate
    if (await Safari.findOne({safariID: safariParam.username })) {
        throw 'Username "' +safariParam.username + '" is already taken';
    }

    const safari = new Safari(safariParam);

    

    // save user
    await safari.save();
}
async function getAll() {
    return await Safari.find();
}