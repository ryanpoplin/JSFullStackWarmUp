var util = require('util');

// keep the inheritance chain, modular logic in check...

var EventEmitter = require('events').EventEmitter;

var Class = function() {};

util.inherits(Class, EventEmitter);

Class.prototype.start = function() {
    "use strict";
    this.emit("started", { status: "cold" });
};

// ...
console.log(Class.prototype);

module.exports = Class;