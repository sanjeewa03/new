const express = require('express');
const router = express.Router();
const safariService = require('./safari.service');
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');

router.post('/addagency',addagency);

module.exports = router;

function addagency(req, res, next) {
    console.log("inside safari add func");
    safariService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}