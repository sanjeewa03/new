const express = require('express');
const router = express.Router();
const messageService = require('./messages.service');
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');

router.post('/addmessage',addMessage);

module.exports = router;

function addMessage(req, res, next) {
    console.log("inside message add func");
	console.log(req.body);
    messageService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}