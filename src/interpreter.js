var Database = require('./engine/storage/Database.js');

var Interpreter = function () {
    var database = null;
    var valid = false;
    this.parseDB = function (db) {
        database = new Database();
        valid = database.validate(db);
    };

    this.checkQuery = function (query) {
        return true;
    }

}

module.exports = Interpreter;
