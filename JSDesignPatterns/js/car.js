/* a composition architecture... */

var wheels = require("./wheels");
// ./engine.js && ./engine are interchangeable...
// var Engine = require("./engine");
var Control = require("./control");
// instance of the Class...
// var e = new Engine();
// e.forward();
// e.backward();
// example of keeping functionality encapsulated...
// subjective...
var AirConditioning = require("./air");
var air = new AirConditioning();
// observation...
air.on("started", function(data) {
    "use strict";
    console.log("Status: " + data.status);
});

air.start();

var c = new Control();

c.forward();
c.left();

wheels.init("dirt");
wheels.info();
// wheels.init("snow");
// ...
// console.log(wheels.info() + " now...");