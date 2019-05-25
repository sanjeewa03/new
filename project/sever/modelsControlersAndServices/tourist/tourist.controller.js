const express = require('express');
const router = express.Router();
const touristService = require('./tourist.service');
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');

router.post('/addtourist',addTourist);
router.get('/getall',getAll)

module.exports = router;

function addTourist(req, res) {
    console.log("inside tourist add func");
    touristService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
	console.log("tourist controller ");
    touristService.getAll()
        .then(tourist => res.json(tourist))
        .catch(err => next(err));
}