var Database = require('./engine/storage/Database.js');

var Interpreter = function () {
    var database = null;
    var valid = false;
    this.parseDB = function (db) {
        database = new Database();
        valid = database.validate(db);
    };

    this.checkQuery = function (query) {
        var result = false;
        if ((valid === true) && (database.validateQuery(query) === true)) {
            if ((database.checkFacts(query) === true) || (database.checkRules(query) === true)) {
                result = true;
            }
        }
        return result;
    }

};

module.exports = Interpreter;
