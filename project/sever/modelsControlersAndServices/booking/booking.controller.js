const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('_helpers/db');
const Booking = db.Booking;
const Hotel = db.BookingHotel;

router.post('/pkg',bookpkg)
router.get('/get/:id',getbooking);
router.get('/gethotel/:id',gethotelbooking);
router.post('/hotel',bookhotelOnly);

module.exports = router;

function bookpkg(req, res, next) {
    
    let hotelbooking = []
    req.body.hotels.forEach(hotel => {
        bookhotel(hotel,req.body.bookingid,req.body.userName);
        hotelbooking.push("ho_"+req.body.bookingid+"_"+hotel[0])
    });
    
    console.log(hotelbooking);
    
    req.body.hotels = hotelbooking;
    const booking = new Booking(req.body)
    booking.save();
    res.status(200).send();
 
}

function bookhotel(hotel,id,user){

    const booking = {
        bookingid: "ho_"+id + "_"+hotel[0], //Generate ID
        userName: user, //Get User Name
        createdDate: getdate(),
        hotelid: hotel[0],
        pax:hotel[1],
        checkin:hotel[2],
        checkout:hotel[3]

    }

    const hotelbook = new Hotel(booking);
    hotelbook.save();
    

    function getdate(){
        var currentDate = new Date(),
        day = currentDate.getDate(),
        month = currentDate.getMonth() + 1,
        year = currentDate.getFullYear(),
        date = month + "-" + day + "-" + year;

        return date;
    }

}

function bookhotelOnly(req,res){
    bookhotel(req.body.hotel,req.body.id,req.body.user);
    res.status(200).send();
}

function getbooking(req,res,next){
    Booking.findOne({bookingid:req.params.id}).then(booking=>res.json(booking))
}

function gethotelbooking(req,res,next){
    Hotel.findOne({bookingid:req.params.id}).then(booking=>res.json(booking))
}
