var Parser = require('./util/Parser.js');
var Factory = require('./util/Factory.js');
var Fact = require('../schema/Fact.js');

var Database = function () {
    var database = [];

    this.validate = function (db) {
        var isValid = true;
        var parser = new Parser();
        database = parser.parse(db);
        if (database.some(isElement)) {
            isValid = false;
        }
        return isValid;
    };

    this.validateQuery = function (query) {
        var isValid = true;
        var factory = new Factory();
        var element = factory.createElement(query);
        if (isElement(element)) {
            isValid = false;
        }
        return isValid;
    };

    var  isElement = function (element) {
        return (element.toString() === "engine.schema.Element");
    };

    var isFact = function (element) {
        return (element.toString() === "engine.schema.Fact");
    };

    var isRule = function (element) {
        return (element.toString() === "engine.schema.Rule");
    };

    this.getFacts = function () {
        return database.filter(isFact);
    };

    this.getRules = function () {
        return  database.filter(isRule);
    };
    
    this.checkFacts = function (query) {
        var queryFact = new Fact(query);
        var facts = this.getFacts();

        for (var i = 0; i < facts.length; i++) {
            if(facts[i].equals(queryFact)) {
                return true;
            }
        }
        return false;
    };

    this.evaluateFacts = function(replaceFacts) {
        var facts = this.getFacts();
        var contains =[];
        for (var i = 0;i < replaceFacts.length; i++) {
            var isIn = false;
            for (var j = 0;j < facts.length; j++) {
                if (facts[j].equals(replaceFacts[i])) {
                    contains.push(true);
                    isIn = true;
                    break;
                }
            }
            if (isIn !== true) {
                contains.push(false);
            }
        }
        if (contains.length === 0)
            contains.push(false);

        return contains;
    };

    var trueFunction = function (element) {
        return (element === true);
    };

    this.checkRules = function (query) {
        var queryFact = new Fact(query);
        var rules = this.getRules();
        for (var i = 0; i < rules.length; i++) {
            if(rules[i].equals(queryFact)) {
                var facts = rules[i].completeArguments(queryFact);
                var contains = this.evaluateFacts(facts);
                return (contains.every(trueFunction));
            }
        }
        return false;
    };

    this.showDatabaseElementError = function () {
        for (var i = 0; i < database.length; i++) {
            if (isElement(database[i])) {
                console.log("Error in element: " + database[i].line);
            }
        }
    }
};

module.exports = Database;