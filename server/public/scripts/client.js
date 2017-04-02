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
    if (value){
      $( '#listingForm' ).on( 'submit', function(event){
        event.preventDefault();
        console.log("you've clicked submit");
        clickSumbitNewListing();
        clearForm();
      });
    }
    else{
      $( '#listingForm' ).off( 'submit', function(event){
        event.preventDefault();
        console.log("you've clicked submit");
      });
    }
  }//ends enable

//event handlers
  function clickSumbitNewListing(){
    console.log("inside clickSumbitNewListing");
    console.log("good job! you made it.");
    var newObject = {};

    var price = $( '#price' ).val();
    var sqft  = $( '#sqft' ).val();
    var city  = $( '#city' ).val();

    newObject.sqft = sqft;
    newObject.city = city;

    var rental = $('#rentalRadio:checked').val();
    if (rental === 'on')  {
      newObject.rent = price;
      console.log("I MADE SOMETHING! for a rental", newObject);
      postNewRental(newObject);
    }
    else {
      newObject.cost = price;
      console.log("I MADE SOMETHING! for a sale", newObject);
      postNewSale(newObject);
    }


  }//ends clickSumbitNewListing

//logic

  //sort listings into rental and sale properties
  function sortListings(objectsArray){
    console.log("inside sortListings");
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
  }//ends sortListings

//DOM

  function clearForm(){
    $( '#price' ).val('');
    $( '#sqft' ).val('');
    $( '#city' ).val('');
    $( '#rentalRadio' ).prop('checked', false);

    $( '#price' ).focus();

  }//ends clearForm

  function displayListings(){
    console.log("inside displayListings");
    displayRentals();
    displaySales();

  }//ends displayListings

  function displayRentals(){
    console.log("inside displayRentals");
    $( '#rent' ).empty();

    for (var i = 0; i < rentalArray.length; i++){
      var displayObject = rentalArray[i];

      var rent = displayObject.rent;
      var sqft = displayObject.sqft;
      var city = displayObject.city;

      var $el;

      if (i % 3 ===0 ){
        $('#rent').append('<div class = "row"></div>');
        $el = $('#rent').children().last();
      }

      $el.append('<div class = "col-sm-4"></div>');
      var $el1 = $el.children().last();
      $el1.append('<div class="panel panel-default"></div>');
      var $el2 = $el1.children().last();
      $el2.append('<div class="panel-heading"></div>');
      var $el3 = $el2.children().last();
      $el3.append('<h3 class="panel-title">Rental Unit</h3>');
      $el2 = $el1.children().last();
      $el2.append('<div class="panel-body"></div>');
      $el3 = $el2.children().last();
      $el3.append('<tr><td>Rent:    </td><td> $'+rent+'.00</td></tr>');
      $el3.append('<tr><td>Square Ft.: </td><td> '+sqft+' sqft</td></tr>');
      $el3.append('<tr><td>City:          </td><td> '+city+'</td></tr>');
      $el3.append('<span class="glyphicon glyphicon-picture"></span>');
      $el3.append('<span class="glyphicon glyphicon-map-marker"></span>');
      $el3.append('<span class="glyphicon glyphicon-inbox"></span>');
    }//ends for loop

  }//ends displayRentals

  function displaySales(){
    console.log("inside displaySales");
    $( '#sale' ).empty();

    for (var i = 0; i < salesArray.length; i++){
      var displayObject = salesArray[i];

      var sale = displayObject.cost;
      var sqft = displayObject.sqft;
      var city = displayObject.city;

      var $el;

      if (i % 3 ===0 ){
        $('#sale').append('<div class = "row"></div>');
        $el = $('#sale').children().last();
      }

      $el.append('<div class = "col-sm-4"></div>');
      var $el1 = $el.children().last();
      $el1.append('<div class="panel panel-default"></div>');
      var $el2 = $el1.children().last();
      $el2.append('<div class="panel-heading"></div>');
      var $el3 = $el2.children().last();
      $el3.append('<h3 class="panel-title">Unit for Sale</h3>');
      $el2 = $el1.children().last();
      $el2.append('<div class="panel-body"></div>');
      $el3 = $el2.children().last();
      $el3.append('<tr><td>Sale Price:    </td><td> $'+sale+'.00</td></tr>');
      $el3.append('<tr><td>Square Ft.: </td><td> '+sqft+' sqft</td></tr>');
      $el3.append('<tr><td>City:          </td><td> '+city+'</td></tr>');
      $el3.append('<span class="glyphicon glyphicon-picture"></span>');
      $el3.append('<span class="glyphicon glyphicon-map-marker"></span>');
      $el3.append('<span class="glyphicon glyphicon-inbox"></span>');
    }//ends for loop

  }//ends displaySales


//REST
  //GETS
  function getListings(){
    $.ajax({
      type    : 'GET',
      url     : '/realty',
      success : function(response){
        sortListings(response);
        displayListings();
      }//ends success
    });//ends ajax object
  }//ends getListings

  //POSTS
  function postNewRental(newObject){
    $.ajax({
      type    : 'POST',
      url     : '/realty/addRental',
      data    : newObject,
      success : function(response){
        console.log("I posted something rental and all I got was this lousy t-shirt", response);
        getListings();
      }//ends success
    });//ends ajax object
  }//ends postNewRental

  function postNewSale(newObject){
    $.ajax({
      type    : 'POST',
      url     : '/realty/addSale',
      data    : newObject,
      success : function(response){
        console.log("I posted something sale and all I got was this lousy t-shirt", response);
        getListings();
      }//ends success
    });//ends ajax object
  }//ends postNewSale

  //PUTS

  //DELETES
