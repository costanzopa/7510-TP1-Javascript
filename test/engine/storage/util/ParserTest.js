var assert = require('assert');

var Parser = require('../../../../src/engine/storage/util/Parser.js');
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

describe("Parser Test Suite", function () {

    var parser = null;
    var database = null;

    beforeEach(function() {
        parser = new Parser();
        database = parser.parse(db);
    });

    describe("Check Parser Behavior.", function () {
        it("Check length", function () {

            assert(database.length === db.length);
        });
    });
});