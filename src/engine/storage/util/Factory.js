var Rule = require('../../schema/Rule.js');
var Fact = require('../../schema/Fact.js');
var Element = require('../../schema/Element.js');


var Factory = function() {
    this.createElement = function (type, line) {
        var element;
        if (type === "Fact") {
            element = new Fact(line);
        } else if (type === "Rule") {
            element = new Rule(line);
        } else {
            element = new Element(line);
        }
        return element;
    }
};