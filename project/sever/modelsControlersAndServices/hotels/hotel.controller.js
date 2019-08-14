const express = require('express');
const router = express.Router();
const hotelService = require('./hotel.service');
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');
const db = require('_helpers/db');
const Hotel = db.BookingHotel;

router.post('/addhotel',addHotel);
router.get('/getall',getAll)
router.get('/bookings/:id',getBookings)
// router.get('/image',image)

module.exports = router;

function addHotel(req, res, next) {
    console.log("inside hotel add func");
    hotelService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
	console.log("hotel controller ");
    hotelService.getAll()
        .then(hotel => res.json(hotel))
        .catch(err => next(err));
}

function getBookings(req,res){
    Hotel.find({hotelid:req.params.id}).then(booking=>res.json(booking))
}

function getImage(){

}