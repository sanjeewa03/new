const express = require('express');
const router = express.Router();
const touristService = require('./tourist.service');
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');

router.post('/addtourist',addTourist);

module.exports = router;

function addTourist(req, res, next) {
    console.log("inside tourist add func");
    touristService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}