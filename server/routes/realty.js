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

//gets
  //gets all listings
  router.get( '/', function(req,res){
    Listings.find(function( err, allListings){
      if( err ){
        console.log(err);
        res.sendStatus(500);
      }//ends error
      console.log("I've retrieved allListings from the collection. Sending this:", allListings);
      res.send(allListings);
    });
  });//ends get all rentals

//posts

//puts

//deletes

//exports
module.exports = router;
