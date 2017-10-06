var Factory = require('./Factory.js');

var Parser = function () {

    this.parse = function (db) {
        var database = [];
       if (db !== null) {
           var factory = new Factory();
           for (var i = 0; i < db.length; i++) {
               database.push(factory.createElement(db[i]));
           }
       }
       return database;
    };
};

module.exports = Parser;