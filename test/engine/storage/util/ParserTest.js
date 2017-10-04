var assert = require('assert');

describe("Parser Test Suite", function () {

    var parser = null;

    beforeEach(function() {
        parser = new Parser([]);
    });

    describe("Check Parser Behavior on facts.", function () {

        it("Check if its fact.", function () {
            var fact = "varon(juan).";
            assert(parser.isFact(fact) === true);
        });

        it("Check if its fact when rule.", function () {
            var rule = "hijo(X, Y) :- varon(X), padre(Y, X).";
            assert(parser.isFact(rule) === false);
        });

        it("Check if its fact when invalid.", function () {
            var invalid = "varon(";
            assert(parser.isFact(invalid) === false);
        });
    });

    describe("Check Parser Behavior on rules.", function () {

        it("Check if its rule.", function () {
            var rule = "hijo(X, Y) :- varon(X), padre(Y, X).";
            assert(parser.isRule(rule) === true);
        });

        it("Check if its rule when fact.", function () {
            var fact = "mujer(maria).";
            assert(parser.isRule(fact) === false);
        });

        it("Check if its rule when invalid.", function () {
            var invalid = "hijo(X, Y) : varon";
            assert(parser.isRule(invalid) === false);
        });
    });
});