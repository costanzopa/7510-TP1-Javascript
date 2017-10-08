var Database = require('./engine/storage/Database.js');

var Interpreter = function () {
    var database = null;
    this.valid = false;
    this.parseDB = function (db) {
        database = new Database();
        valid = database.validate(db);
        if (valid === false) {
            console.log( "Invalid database: ");
            database.showDatabaseElementError();
        }
    };

    this.checkQuery = function (query) {
        var result = false;
        if (valid === true) {
            if (database.validateQuery(query) === true) {
                if ((database.checkFacts(query) === true) || (database.checkRules(query) === true)) {
                    result = true;
                }
            } else {
                throw new Error( "Invalid query: " + query);
            }
        } else {
            console.log("Invalid database, please check input.");
        }
        return result;
    }

};

module.exports = Interpreter;
