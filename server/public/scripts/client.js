//globals
  //arrays of rental and sales listings
  var enabled = true;
  var rentalArray = [];
  var salesArray = [];

//doc ready
$(document).ready(function(){
  console.log("I'm here for you.");
  console.log("good work buddy, grunt is grunting!");
  init();
});

//init
  function init(){
    console.log("inside init");
    enable(enabled);
    getListings();
  }//ends init

//FOR SUBMIT NEW LISTING

//enable
  function enable(value){
    console.log("inside enable");
    clickSumbitNewListing();
  }//ends enable

//event handlers
  function clickSumbitNewListing(){
    console.log("inside clickSumbitNewListing");
  }//ends clickSumbitNewListing

//logic

  //sort listings into rental and sale properties
  function sortListings(objectsArray){
    console.log("inside sortListings");
    console.log("guess what everyone! we have some sorting to do", objectsArray);
    for ( var i = 0; i < objectsArray.length; i++){
      var listing = objectsArray[i];
      var rent = parseInt(listing.rent);
      var cost = parseInt(listing.cost);

      if (!isNaN(rent)){
        rentalArray.push(listing);
      }//adds to rentalArray

      else if (!isNaN(cost)){
        salesArray.push(listing);
      }//adds to salesArray

    }//ends sorting for loop
    console.log("rentalArray", rentalArray);
    console.log("salesArray", salesArray);
  }//ends sortListings

//DOM
  function displayListings(){
    console.log("inside displayListings");
    displayRentals();
    displaySales();

  }//ends displayListings

  function displayRentals(){
    $('#rent').append('<div class = "row"></div>');
    var $el = $('#rent').children().last();

    for (var i = 0; i < rentalArray.length; i++){
      var displayObject = rentalArray[i];

      var rent = displayObject.rent;
      var sqft = displayObject.sqft;
      var city = displayObject.city;



      $el.append('<div class = "col-md-3"></div>');
      var $el1 = $el.children().last();
      $el1.append('<div class="panel panel-default"></div>');
      var $el2 = $el1.children().last();
      $el2.append('<div class="panel-heading"></div>');
      var $el3 = $el2.children().last();
      $el3.append('<h3 class="panel-title">Rental Unit</h3>');
      $el2 = $el1.children().last();
      $el2.append('<div class="panel-body"></div>');
      $el3 = $el2.children().last();
      $el3.append('<p>Rent: '+rent+' /year.</p>');
      $el3.append('<p>Sqare Footage: '+sqft+' sqft</p>');
      $el3.append('<p>City: '+city+'</p>');
    }//ends for loop

  }//ends displayRentals

  function displaySales(){
    console.log("inside displaySales");
    console.log("inside displaySales, this is the array I have:",salesArray);
  }//ends displaySales


//REST
  //GETS
  function getListings(){
    $.ajax({
      type    : 'GET',
      url     : '/realty',
      success : function(response){
        console.log( "I've returned, and I've brought you this getListings:",response);
        sortListings(response);
        displayListings();
      }//ends success
    });//ends ajax object
  }//ends getListings

  //POSTS

  //PUTS

  //DELETES
