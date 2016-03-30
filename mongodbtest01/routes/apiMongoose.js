var express = require('express');
var router = express.Router();
var joke = require('../model/jokeMongoose');

/*Create joke*/
router.post('/joke', function(req, res, next){
    var newJoke = new joke(
        {

            joke: req.body.joke,
            type: req.body.type,
            reference: req.body.reference
        }
    );
    newJoke.save(function(err){
        if(err){
            res.send(err);
        }
        else {
            console.log("joke saved");
        }
    });
});

router.get('/Jokes', function(req, res, next){
    joke.find(function(err, jokes){
        if(err){
            res.send(err);
        }
        else{
            res.send(jokes);
        }
    });
});

router.get('/joke/:joke', function(req, res, next){
    var obj = {joke: req.params.joke};
    joke.findOne(obj ,function(err, data){
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    });
});

router.put('/joke/:joke', function(req, res, next){
    var obj = {joke: req.params.joke};
    var jokeObj =
    {
        joke: req.body.joke,
        type: req.body.type,
        reference: req.body.reference
    };

    joke.findOneAndUpdate(obj, jokeObj, function(err, doc){
        if(err){
            res.send(err);
        }
        else{
            res.send(doc);
        }
    });
});

router.delete('/joke/:joke', function(req, res, next){
    var obj = {joke: req.params.joke};

    joke.findOneAndRemove(obj, function(err, doc){
        if(err){
            res.send(err);
        }
        else{
            res.send(doc);
        }
    });
});

///* GET all jokes. */
//router.get('/jokes', function(req, res, next) {
//    facade.allJokes(function(err, data){
//        if(err){
//            res.send(err)
//        }
//        else res.send(data);
//    });
//});
//
///* GET one jokes. */
//router.get('/joke/:joke', function(req, res, next) {
//    var obj = {joke: req.params.joke};
//    console.log(obj.joke);
//    facade.findJoke(obj, function(err, data){
//        if(err){
//            res.send(err)
//        }
//        else res.send(data);
//    });
//});
//
//
///*Update a joke*/
//router.put('/joke/:joke', function(req, res, next){
//    var obj = {joke: req.params.joke};
//
//    facade.findJoke(obj, function(err, data){
//        if(err){
//            res.send(err);
//        }
//        else {
//            facade.editJoke(data[0], req.body, function(err, data){
//                if(err){
//                    res.send(err);
//                }
//                else{
//                    res.send("Joke edited");
//                }
//            });
//        }
//    });
//});
//
///*Delete a joke*/
//router.delete('/joke/:joke',function(req, res, next){
//    var obj = {joke: req.params.joke};
//
//    facade.deleteJoke(obj, function(err){
//        if(err){
//            res.send(err)
//        }
//        else{
//            res.send("deleted");
//        }
//    });
//});


module.exports = router;