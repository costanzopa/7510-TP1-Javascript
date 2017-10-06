var Parser = require('./util/Parser.js');

var Database = function () {
    var facts = [];
    var rules = [];

    this.validate = function (db) {
        var isValid = true;
        var parser = new Parser();
        db = parser.parse(db);
        if (db.some(isElement)) {
            isValid = false;
        }
        
        facts = db.filter(isFact);
        rules = db.filter(isRule);
        return isValid
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
};


module.exports = Database;