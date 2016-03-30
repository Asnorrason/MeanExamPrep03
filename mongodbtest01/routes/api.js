var express = require('express');
var router = express.Router();
var facade = require('../model/jokeFacade');

/*Create joke*/
router.post('/joke', function(req, res, next){
   facade.addJoke(req.body, function(err, data){
        if(err){
            res.send(err);
        }
        else res.send("Joke stored");
    });
});


/* GET all jokes. */
router.get('/jokes', function(req, res, next) {
    facade.allJokes(function(err, data){
        if(err){
            res.send(err)
        }
        else res.send(data);
    });
});

/* GET one jokes. */
router.get('/joke/:joke', function(req, res, next) {
    var obj = {joke: req.params.joke};
    console.log(obj.joke);
    facade.findJoke(obj, function(err, data){
        if(err){
            res.send(err)
        }
        else res.send(data);
    });
});


/*Update a joke*/
router.put('/joke/:joke', function(req, res, next){
    var obj = {joke: req.params.joke};

    facade.findJoke(obj, function(err, data){
        if(err){
            res.send(err);
        }
        else {
            facade.editJoke(data[0], req.body, function(err, data){
                if(err){
                    res.send(err);
                }
                else{
                    res.send("Joke edited");
                }
            });
        }
    });
});

/*Delete a joke*/
router.delete('/joke/:joke',function(req, res, next){
    var obj = {joke: req.params.joke};

    facade.deleteJoke(obj, function(err){
       if(err){
           res.send(err)
       }
        else{
           res.send("deleted");
       }
    });
});



module.exports = router;