var typeOfTires;

// direct global object assignment...
exports.init = function(type) {
    "use strict";
    typeOfTires = type;
};

exports.info = function() {
    "use strict";
    console.log("The car uses " + typeOfTires + " tires.");
};