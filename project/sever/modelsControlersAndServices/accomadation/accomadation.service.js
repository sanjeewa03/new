const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Accomadation = db. Accomadation;


module.exports = {
    
    create,
	getAll
};

async function create(accomadationParam) {
    console.log(accomadationParam);
    console.log("inside acc create func");
	
	
    

    const accomadation = new Accomadation(accomadationParam);


    // save user
    await accomadation.save();
}

async function getAll() {
    return await Accomadation.find();
}
