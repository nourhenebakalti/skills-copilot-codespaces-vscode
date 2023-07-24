// Create web server 
// 1. Load the http module
var http = require('http');

// 2. Create http server
var server = http.createServer(function(req, res) {
    // 3. Set content type to text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // 4. Send response body as "Hello World"
    res.end('Hello World\n');
});

// 5. Listen on port 3000
server.listen(3000, '
