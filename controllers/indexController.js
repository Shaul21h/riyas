/**
 * Created by shaulhameed on 6/10/16.
 */

function indexController(app){

    function indexHandler(req, res){

        res.render('index');

    }

    function comingSoonHandler(req, res){
        res.render('coming-soon');
    }

    app.get('/', indexHandler);

    app.get('/coming-soon', comingSoonHandler )
}

module.exports = indexController;