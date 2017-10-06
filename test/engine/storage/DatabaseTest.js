var assert = require('assert');

var Database = require('../../../src/engine/storage/Database.js');
var Fact = require('../../../src/engine/schema/Fact.js');

var db = [
    "varon(juan).",
    "varon(pepe).",
    "varon(hector).",
    "varon(roberto).",
    "varon(alejandro).",
    "mujer(maria).",
    "mujer(cecilia).",
    "padre(juan, pepe).",
    "padre(juan, pepa).",
    "padre(hector, maria).",
    "padre(roberto, alejandro).",
    "padre(roberto, cecilia).",
    "hijo(X, Y) :- varon(X), padre(Y, X).",
    "hija(X, Y) :- mujer(X), padre(Y, X)."
];


var incomplete_database = [
    "varon(juan).",
    "varon"];

var number_database = [
    "add(zero, zero, zero).",
    "add(zero, one, one).",
    "add(zero, two, two).",
    "add(one, zero, one).",
    "add(one, one, two).",
    "add(one, two, zero).",
    "add(two, zero, two).",
    "add(two, one, zero).",
    "add(two, two, one).",
    "subtract(X, Y, Z) :- add(Y, Z, X)."];


var facts_number_database = [
    new Fact("add(zero, zero, zero)."),
    new Fact("add(zero, one, one)."),
    new Fact("add(zero, two, two)."),
    new Fact("add(one, zero, one)."),
    new Fact( "add(one, one, two)."),
    new Fact( "add(one, two, zero)."),
    new Fact( "add(two, zero, two)."),
    new Fact( "add(two, one, zero)."),
    new Fact( "add(two, two, one).")
];

describe("Database Test Suite", function () {

    var database = null;
    var checkAreEquals = function (array1, array2) {
        for(var i=0 ; i< array1.length; i++) {
            if (!array1[i].equals(array2[i])) {
                return false;
            }
        }
        return true;
    };

    beforeEach(function() {
        database = new Database();
    });

    describe("Check Database Behavior.", function () {
        it("Check valid database", function () {
            assert(database.validate(db) === true);
        });

        it("Check invalid database", function () {
            assert(database.validate(incomplete_database) === false);
        });

        it("Check get facts number database", function () {
            var isValid = database.validate(number_database);
            var facts = database.getFacts();
            assert(checkAreEquals(facts, facts_number_database) === true);
            assert( isValid === true);
        });

        it("Check get rules number database", function () {
            var isValid = database.validate(number_database);
            var rules = database.getRules();
            assert(rules[0].getName() === "subtract");
            assert( isValid === true);
        });


        it("Check query is a fact true.", function () {
            var isValid = database.validate(number_database);
            assert( isValid === true);
            assert(database.checkFacts("add(zero, zero, zero).") === true);
        });

        it("Check query is a fact false.", function () {
            var isValid = database.validate(number_database);
            assert( isValid === true);
            assert(database.checkFacts("add(zero, two, zero).") === false);
        });

        it("Check query is a rule true.", function () {
            var isValid = database.validate(number_database);
            assert( isValid === true);
            assert(database.checkRules("subtract(one, two, two).") === true);
        });

        it("Check query is a rule false.", function () {
            var isValid = database.validate(number_database);
            assert( isValid === true);
            assert(database.checkRules("subtract(zero, three, zero).") === false);
        });
    });
});