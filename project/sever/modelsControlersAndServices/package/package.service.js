const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Package = db.Package;


module.exports = {
    
    create,
	getAll
};

async function create(packageParam) {
    console.log(packageParam);
    console.log("inside tourist create func");
	
	
    // validate
    if (await Package.findOne({username: packageParam.username })) {
        throw 'Username "' +packageParam.username + '" is already taken';
    }

    const package = new Package(packageParam);


    // save user
    await package.save();
}

async function getAll() {
    return await Package.find();
}
