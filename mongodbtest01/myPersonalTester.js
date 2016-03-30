var jokes = require("./model/jokeFacade");
var connection = require("./db/db");

connection.connect("mongodb://localhost:27017/test", function(){

    jokes.allJokes(function(err,data){
      if(err){
          console.log("You fucked up!");
      }
        else{
          console.log(data);
      }
    })

});
