//requires
var express = require( 'express' );
var path = require( 'path' );

//globals
var router = express.Router();

//gets
router.get( '/', function ( req, res){
  console.log(" sending back index.html for a / request");
  res.sendFile( path.resolve( 'server/public/views/index.html' ));
});//ends router get for /

//exports
module.exports = router;
