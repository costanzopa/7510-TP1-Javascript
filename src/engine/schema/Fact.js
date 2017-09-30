var Element = require('./Element.js');
require('../../../src/engine/core/Array.js');

var Fact = function (line) {
      this.classname = "engine.schema.Fact";
      var  fact = line;

      this.getName = function () {
        return fact.substring(0, fact.indexOf('('));
      };

      this.getArguments = function () {
        var arguments = [];
        var betweenParentheses = fact.substring(fact.indexOf('(') + 1,fact.indexOf(')'));
        if (betweenParentheses !== null && betweenParentheses !== "") {
            var splitedArguments = betweenParentheses.split(',');
            arguments = splitedArguments.map(function(x) {
                return x.trim();
            });
        }
        return arguments;
      };

      this.equals = function (fact) {
          return ((this.getName() === fact.getName()) && (this.getArguments()).equals(fact.getArguments()));
      }
};

Fact.prototype = Object.create(Element.prototype);
Fact.prototype.constructor = Fact;

module.exports = Fact;
