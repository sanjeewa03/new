const express = require('express');
const router = express.Router();
const accomadationService = require('./accomadation.service');
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');
var ObjectId = require('mongoose').Types.ObjectId;

router.post('/addaccomadation',addAccomadation);
router.get('/getall',getAll)

module.exports = router;

function addAccomadation(req, res, next) {
    console.log("inside accomadation add func");
    console.log(req.body);
    accomadationService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
	console.log("accomadation controller get all ");
    accomadationService.getAll()
        .then( accomadation => res.json( accomadation))
        .catch(err => next(err));
}

