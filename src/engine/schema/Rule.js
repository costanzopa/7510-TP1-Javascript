var Element = require('./Element.js');
require('../core/Array.js');
require('../core/String.js');
var Fact = require('./Fact.js');

var Rule = function (line) {
    this.classname = "engine.schema.Rule";
    this.line = line;
    var facts = [];


    var createFacts = function (element) {
        var fact = new Fact(element);
        facts.push(fact);
    };

    var createRule = function() {
        var splitRule = line.split(":-");
        if (splitRule.length === 2) {
            splitRule[1] = (splitRule[1]).replaceAll("),", "):");
            var factVector = (splitRule[1]).split(":");
            trimFacts = factVector.map(function(x) {
                return x.trim();
            });
            trimFacts.forEach(createFacts);
        }
    };



    this.getFacts = function () {
      createRule();
      return facts;
    };

};

Rule.prototype = Object.create(Element.prototype);
Rule.prototype.constructor = Rule;

module.exports = Rule;
