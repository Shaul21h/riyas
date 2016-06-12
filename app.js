//@author - Shaul Hameed
//@description - Server code.

(function(){

    var express = require("express");

    var fs = require("fs");

    var app = express();

    app.set('views', './views');

    app.set('view engine', 'ejs');

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