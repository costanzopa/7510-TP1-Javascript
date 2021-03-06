var expect = require("chai").expect;
var assert = require('assert');

var Rule = require('../../../src/engine/schema/Rule.js');
var Fact = require('../../../src/engine/schema/Fact.js');

require('../../../src/engine/core/Array.js');

describe("Rule Test Suite", function () {

    var rule = null;

    beforeEach(function() {
        rule = new Rule("hijo(X, Y) :- varon(X), padre(Y, X).");
    });

    var checkAreEquals = function (array1, array2) {
        for(var i=0 ; i< array1.length; i++) {
            if (!array1[i].equals(array2[i])) {
                return false;
            }
        }
        return true;
    };

    describe("Check Rule behavior.", function () {

        it("Create Rule.", function () {
            expect(rule.toString()).to.equal("engine.schema.Rule")
        });

        it("Obtain values of a Rule.", function () {
            expect(rule.getName()).to.equal("hijo");
        });

        it("Obtain arguments of a Rule.", function () {
            var arguments = rule.getArguments();
            assert(arguments.equals(['X','Y']) === true);
        });

        it("Obtain facts of a Rule.", function () {
            var facts = rule.getFacts();
            var varon = new Fact("varon(X)");
            var padre = new Fact("padre(Y, X).");
            var result =facts[0].equals(varon);
            var result2 =facts[1].equals(padre);
            assert(result === true);
            assert(result2 === true);
        });

        it("Check if two rules are equal true.", function () {
            var newRule = new Rule("hijo(X, Y) :- varon(X), padre(Y, X).");
            assert(rule.equals(newRule) === true);
        });

        it("Check if two rules are equal true.", function () {
            var newFact = new Fact("hijo(luis, arturo).");
            var vectorFacts = [new Fact("varon(luis)."), new Fact("padre(arturo, luis).")];
            assert( checkAreEquals(vectorFacts, rule.completeArguments(newFact)) === true);
        });

    });
});
