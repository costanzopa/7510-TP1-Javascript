var Element = require('./Element');

var Fact = function(line) {
    this.class = "engine.schema.Fact";
    var fact = line;
    
    this.getName = function () {
        return fact.substring(0, fact.indexOf('('));
    }
    
};

Fact.prototype = new Element();
Fact.prototype.constructor = Fact;

module.exports = Fact;