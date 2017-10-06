var assert = require('assert');

var Factory = require('../../../../src/engine/storage/util/Factory.js');
var Rule = require('../../../../src/engine/schema/Rule.js');
var Fact = require('../../../../src/engine/schema/Fact.js');
var Element = require('../../../../src/engine/schema/Element.js');

describe("Factory Test Suite", function () {

    var factory = null;

    beforeEach(function() {
        factory = new Factory();
    });

    describe("Check Factory Behavior on facts.", function () {

        it("Check if its fact.", function () {
            var fact = "varon(juan).";
            assert(factory.isFact(fact) === true);
        });

        it("Check if its fact when rule.", function () {
            var rule = "hijo(X, Y) :- varon(X), padre(Y, X).";
            assert(factory.isFact(rule) === false);
        });

        it("Check if its fact when invalid.", function () {
            var invalid = "varon(";
            assert(factory.isFact(invalid) === false);
        });
    });

    describe("Check Factory Behavior on rules.", function () {

        it("Check if its rule.", function () {
            var rule = "hijo(X, Y) :- varon(X), padre(Y, X).";
            assert(factory.isRule(rule) === true);
        });

        it("Check if its rule when fact.", function () {
            var fact = "mujer(maria).";
            assert(factory.isRule(fact) === false);
        });

        it("Check if its rule when invalid.", function () {
            var invalid = "hijo(X, Y) : varon";
            assert(factory.isRule(invalid) === false);
        });
    });

    describe("Check creation function.", function () {
        it("Check fact creation", function () {
            var fact = "varon(juan).";
            assert(factory.createElement(fact).equals(new Fact(fact)));
        });
        it("Check rule creation", function () {
            var rule = "hijo(X, Y) :- varon(X), padre(Y, X).";
            assert(factory.createElement(rule).toString() === (new Rule(rule)).toString());
        });
        it("Check element creation", function () {
            var invalid = "hijo(X, Y) : varon";
            assert(factory.createElement(invalid).toString() === (new Element(invalid)).toString());
        });
    });

});