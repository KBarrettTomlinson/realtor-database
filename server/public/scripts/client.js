//doc ready
$(document).ready(function(){
  console.log("I'm here for you.");
  console.log("good work buddy, grunt is grunting!");
  getListings();

});

//REST
  //GETS
  function getListings(){
    $.ajax({
      type    : 'GET',
      url     : '/realty',
      success : function(response){
        console.log( "I've returned, and I've brought you this getListings:",response);
      }//ends success
    });//ends ajax object
  }//ends getListings

  //POSTS

  //PUTS

  //DELETES
