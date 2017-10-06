var expect = require("chai").expect;
var assert = require('assert');

var Fact = require('../../../src/engine/schema/Fact.js');
require('../../../src/engine/core/Array.js');

describe("Fact Test Suite", function () {

    var fact = null;

    beforeEach(function() {
        fact = new Fact("add(zero, zero, zero).");
    });

    describe("Check fact behavior.", function () {

        it("Create Fact.", function () {
            expect(fact.toString()).to.equal("engine.schema.Fact")
        });

        it("Obtain values of a Fact.", function () {
            expect(fact.getName()).to.equal("add");
        });

        it("Obtain arguments of a Fact.", function () {
            var arguments = fact.getArguments();
            assert(arguments.equals(["zero","zero","zero"]) === true);
        });

        it("Check if facts are equals.", function () {
            factDuplicate = new Fact("add(zero, zero, zero).");
            assert(factDuplicate.equals(fact) === true);
        });
    });
});
