var Class = function() {
    "use strict";
    // ...
};

Class.prototype = {
    forward: function() {
        "use strict";
        console.log("Our car is moving forward...");
    },
    backward: function() {
        "use strict";
        console.log("The car is moving backward...");
    }
};

Class.__proto__ = {
    byrdannFox: function() {
        "use strict";
        console.log("...");
    }
};

console.log(Class);
// inheritance logical container...
console.log(Class.__proto__);
console.log(Class.__proto__.__proto__);
console.log(Class.prototype);

module.exports = Class;