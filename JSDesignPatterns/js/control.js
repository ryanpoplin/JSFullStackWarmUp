var util = require("util");
var Engine = require("./engine");
var Class = function() {};

// util native module...
util.inherits(Class, Engine);

Class.prototype.left = function() {
    "use strict";
    console.log("The car is moving to the left...");
};

Class.prototype.right = function() {
    "use strict";
    console.log("The car is moving to the right...");
};

module.exports = Class;