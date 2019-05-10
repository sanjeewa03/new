const express = require('express');
const router = express.Router();
var fs = require('fs');
const db = require('_helpers/db');
const Image = db.Image;

const multer  = require('multer');
// routes
router.post('/save', save);     // public route
   // all authenticated users

module.exports = router;

function save(req, res, next) {
	console.log("inside save func");
	//const img=fs.readFileSync(req.body.p);
	const buf = Buffer.alloc([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
	console.log("dsd");
	var newItem = new Image();
	
	newItem.img.data = fs.readFileSync(req.body.photo);
	newItem.img.contentType = 'image/png';
	newItem.save();
}
