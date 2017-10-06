var Rule = require('../../schema/Rule.js');
var Fact = require('../../schema/Fact.js');
var Element = require('../../schema/Element.js');

var factPattern = /^([^\(\)]*)\(([^\(\)]*)\)\.$/;

var Factory = function() {
    this.createElement = function (line) {
        var element;
        if (this.isFact(line) === true) {
            element = new Fact(line);
        } else if (this.isRule(line) === true) {
            element = new Rule(line);
        } else {
            element = new Element();
        }
        return element;
    }


    this.isFact = function (line) {
        return (factPattern.test(line));
    };

    this.isRule = function (line) {
        return (line.includes(":-"));
    };
};


module.exports = Factory;