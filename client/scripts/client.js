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
  getListings();
});

//init
  function init(){
    console.log("inside init");
    enable(enabled);
  }//ends init

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
  function displayRentals(){
    console.log("inside displayRentals");
  }//ends displayRentals

  function displaySales(){
    console.log("inside displaySales");
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
        displayRentals();
        displaySales();
      }//ends success
    });//ends ajax object
  }//ends getListings

  //POSTS

  //PUTS

  //DELETES
