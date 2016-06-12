//@author - Shaul Hameed
//@description - Server code.

(function(){

    var express = require("express");
    var bodyParser = require('body-parser');


    var fs = require("fs");

    var app = express();

    app.set('views', './views');

    app.set('view engine', 'ejs');


    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())

    app.use(express.static(__dirname+'/public'));

    //@description - requiring all the Controllers.

    fs.readdir('./controllers', function(err, files){

        if(files && files.length>0){

            files.forEach(function(file, index){


                require("./controllers/"+file)(app);

            });

        }

    });





    app.listen(process.env.PORT || 4000, function(){

        console.log("Server started @ 4000");

    });


})()