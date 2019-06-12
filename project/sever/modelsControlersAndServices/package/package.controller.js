const express = require('express');
const router = express.Router();
const packageService = require('./package.service');
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');
var ObjectId = require('mongoose').Types.ObjectId;

router.post('/addpackage',addPackage);
router.get('/getall',getAll)

module.exports = router;

function addPackage(req, res, next) {
    console.log("inside package add func");
    packageService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
	console.log("package controller get all ");
    packageService.getAll()
        .then(package => res.json(package))
        .catch(err => next(err));
}

