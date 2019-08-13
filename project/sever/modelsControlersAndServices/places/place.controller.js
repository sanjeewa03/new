const express = require('express');
const router = express.Router();
const placeService = require('./place.service.js');
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');

router.post('/addplace',addPlace);
router.get('/getall',getAll)

module.exports = router;

function addPlace(req, res, next) {
    console.log("inside hotel add func");
    placeService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
	console.log("hotel controller ");
    placeService.getAll()
        .then(hotel => res.json(hotel))
        .catch(err => next(err));
}