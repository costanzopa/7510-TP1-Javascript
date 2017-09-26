var expect = require("chai").expect;

var Fact = require('../../../src/engine/schema/Fact');

describe("Fact Test Suite", function () {

    var fact = null;

    beforeEach(function () {
        fact = new Fact("add(zero, zero, zero).");
    });

    describe("Check fact behavior.", function () {

        it("Create Fact.", function () {
            expect(fact.toString()).to.equal("engine.schema.Fact")
        });

        it("Obtain values of a Fact.", function () {
            expect(fact.getName()).to.equal("add");
        });
    });
});
