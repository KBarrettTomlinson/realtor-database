//general modules
var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );

//route variables
var index = require('./routes/index.js');
var realty = require('./routes/realty.js');

//database variables
var mongoose = require( 'mongoose' );
var mongoURI = "mongodb://localhost:27017/realestate";
var MongoDB = mongoose.connect(mongoURI).connection;

//conneciton error
MongoDB.on("error", function(err){
  console.log("Mongo Connection Error :" + err);
});

//connection success
MongoDB.once("open", function(){
  console.log("Mongo and I had a long coffee, we feel good about each other now");
});

//set port
app.set("port", (process.env.PORT || 5000));

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("./server/public/"));

//uses
app.use('/',index);
app.use('/realty',realty);

//listens
app.listen(app.get("port"), function(){
    console.log("I'm listening for you: " + app.get("port"));
});
