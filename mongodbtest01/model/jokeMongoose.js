var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;

var jokeSchema = new Schema({
    joke: {type: String, required: true},
    type: [String],
    reference: {
        author: {type: String},
        link: {type: String}
    },
    lastEdited: Date
});

jokeSchema.methods.dudify = function(){
    this.name = this.name + '-dude'

    return this.name;
};

jokeSchema.pre('save', function(next){
    var currentDate = new Date();

    this.lastEdited = currentDate;

    if(!this.lastEdited){
        this.lastEdited = currentDate;
    }

    next();
});

jokeSchema.post('save', function(doc, next){
    console.log("Schema saved");
    next();
});

jokeSchema.get = function(key){
    return this.options[key];
};

var Joke = mongoose.model('joke', jokeSchema);

module.exports = Joke;
