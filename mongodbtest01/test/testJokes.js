var expect = require("chai").expect;
var jokes = require("../model/jokeFacade");
var connection = require("../db/db");


var testJokes = [

    {
        "joke" : " aaa",
        "type" : ["short", "alcohol", "quote"],
        "reference": { "author" : "Someone", "link" : ""},
        "lastEdited" : new Date()
    },
    {
        "joke" : " Reality is an illusion created by a lack of alcohol",
        "type" : ["short", "alcohol", "quote"],
        "reference": { "author" : "Someone", "link" : ""},
        "lastEdited" : new Date()
    }

];

describe("The Jokes Factory", function(){

    before(function(done){
        connection.connect("mongodb://localhost:27017/test", function(){
            done();
        });
    });

    beforeEach(function(done){
        var db = connection.get();
        db.collection("jokes").deleteMany({},function(err,data){
            if(err){
                throw new Error(err);
            }
            else{
                db.collection("jokes").insertMany(testJokes, function(err, data){
                    if(err){
                        throw new Error(err);
                    }
                    else{
                       done();
                    }
                });
            }
        });
    });

    it("should find two jokes", function(done){
       jokes.allJokes(function(err,data){
           expect(data.length).to.be.equal(2);
           done();
       })
    });

});