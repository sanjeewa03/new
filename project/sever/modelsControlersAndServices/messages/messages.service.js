const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Message = db.Message;


module.exports = {
    
    create
};

async function create(messageParam) {
    console.log("inside message create func");
	
    

    const message = new Message(messageParam);

    

    // save message
    await message.save();
}