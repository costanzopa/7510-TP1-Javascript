String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

Object.defineProperty(String.prototype,"replaceAll", {enumerable: false});

module.exports = String;