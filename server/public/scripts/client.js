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
    if (enable){
      $( '#submitForm' ).on( 'submit', function(event){
        event.preventDefault();
        console.log("you've clicked submit");
      });
    }
    else{


    }
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
  function displayListings(){
    console.log("inside displayListings");
    displayRentals();
    displaySales();

  }//ends displayListings

  function displayRentals(){

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

  //PUTS

  //DELETES
