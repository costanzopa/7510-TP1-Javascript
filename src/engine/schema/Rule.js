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
    
    this.completeArguments = function (queryFact) {
        var facts = this.getFacts();
        var replaceFacts = [];
        for (var i = 0; i < facts.length; i++) {
            var name = facts[i].getName();
            var replaceFact = null;
            var arguments = facts[i].getArguments();
            var replaceArguments = [];
            for (var j = 0; j < arguments.length; j++) {
                var value = foundMatch(arguments[j],this.getArguments(),queryFact.getArguments());
                replaceArguments.push(value);
            }
            replaceFact = new Fact(name + "(" +replaceArguments.join(", ") +").");
            replaceFacts.push(replaceFact);
        }
       return replaceFacts;
    };


    var foundMatch = function (element, keys, values) {
        var value = "";
        for(var i=0; i < keys.length; i++) {
            if (element === keys[i]) {
                value = values[i];
            }
        }
        return value;
    };

    this.equals = function (rule) {
        return (this.getName() === rule.getName());
    }
};

Rule.prototype = Object.create(Element.prototype);
Rule.prototype.constructor = Rule;

module.exports = Rule;
