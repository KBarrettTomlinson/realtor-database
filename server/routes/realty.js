// requires
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

//schema
var ListingsSchema = mongoose.Schema({
  cost: Number,
  rent: Number,
  sqft: Number,
  city: String
});//ends RentSchema

var RentSchema = mongoose.Schema({
  rent: Number,
  sqft: Number,
  city: String
});//ends RentSchema

var CostSchema = mongoose.Schema({
  cost: Number,
  sqft: Number,
  city: String
});//ends CostSchema

//prototype
var Listings = mongoose.model( "listings", ListingsSchema);
var Rentals = mongoose.model( "Rentals", RentSchema, "listings");
var Sales = mongoose.model( "Sales", CostSchema, "listings");

//CRUD
//gets
  //gets all listings
  router.get( '/', function(req,res){
    Listings.find(function( err, allListings){
      if( err ){
        console.log(err);
        res.sendStatus(500);
      }//ends error
      res.send(allListings);
    });
  });//ends get all rentals

//posts
  router.post( '/addRental', function(req,res){
    var rental = new Rentals();
    rental.rent = req.body.rent;
    rental.sqft = req.body.sqft;
    rental.city = req.body.city;
    rental.save(function(err, savedRental){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      res.send(savedRental);
    });//end rental.save
  });//ends router.post to /addRental

  router.post( '/addSale', function(req,res){
    var sale = new Sales();
    sale.cost = req.body.cost;
    sale.sqft = req.body.sqft;
    sale.city = req.body.city;
    sale.save(function(err, savedSale){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      res.send(savedSale);
    });//end rental.save
  });//ends router.post to /addSale

//puts

//deletes

//exports
module.exports = router;
