var Element = require('./Element.js');
require('../../../src/engine/core/Array.js');

var Fact = function (line) {
      this.classname = "engine.schema.Fact";
      this.line = line;

      this.equals = function (fact) {
          return ((this.getName() === fact.getName()) && (this.getArguments()).equals(fact.getArguments()));
      }
};

Fact.prototype = Object.create(Element.prototype);
Fact.prototype.constructor = Fact;

module.exports = Fact;
