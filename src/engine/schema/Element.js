var Element = function (){
    this.classname = "engine.schema.Element";
};

Element.prototype.toString = function () {
    return this.classname;
};

module.exports = Element;