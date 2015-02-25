var http = require('http');

var getTime = function() {
    "use strict";
    var d = new Date();
    return d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ':' + d.getMilliseconds();
};

var respond = function(res, str) {
    "use strict";
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(str + '\n');
    console.log(str + ' ' + getTime());
};

var handleRequest = function(req, res) {
    "use strict";
    console.log('new request: ' + req.url + '-' + getTime());
    if (req.url === '/immediately') {
        respond(res, 'A');
    } else {
// sync. code...
//        var now = new Date().getTime();
//        while(new Date().getTime() < now + 5000) {
//            respond(res, 'B');
//        }
        // async. code...
        // callback pattern...
        setTimeout(function() {
            respond(res, 'B');
        }, 5000);
        console.log('async...');
    }
};

http.createServer(handleRequest).listen(9000, '127.0.0.1');