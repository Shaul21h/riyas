/**
 * Created by shaulhameed on 6/10/16.
 */

var Firebase = require("firebase");



var fire = Firebase.initializeApp({
    serviceAccount: "./riyaswedsnamiya.json",
    databaseURL: "https://riyaswedsnamiya.firebaseio.com"
});


function indexController(app){

    function indexHandler(req, res){

        res.render('index');

    }

    function comingSoonHandler(req, res){
        res.render('coming-soon');
    }

    function rsvpHandler(req, res){

        if(req.body.username || req.body.email){
            fire.database().ref('users').push({
                username: req.body.username || "",
                email: req.body.email || "",
                notes: req.body.notes || ""
            });
        }


        res.send({
            message: "Thank you."
        })

    }

    app.get('/', indexHandler);

    app.get('/coming-soon', comingSoonHandler )


    app.post('/rsvpied', rsvpHandler)
}

module.exports = indexController;