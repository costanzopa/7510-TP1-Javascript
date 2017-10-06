var Element = function (line){
    this.classname = "engine.schema.Element";
    this.line = line;
};

Element.prototype.toString = function () {
    return this.classname;
};

Element.prototype.getName = function () {
    return this.line.substring(0, this.line.indexOf('('));
};

Element.prototype.getArguments = function () {
    var arguments = [];
    var betweenParentheses = this.line.substring(this.line.indexOf('(') + 1,this.line.indexOf(')'));
    if (betweenParentheses !== null && betweenParentheses !== "") {
        var splitedArguments = betweenParentheses.split(',');
        arguments = splitedArguments.map(function(x) {
            return x.trim();
        });
    }
    return arguments;
};

module.exports = Element;