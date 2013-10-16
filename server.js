var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world!  Welcome to Node.js running on Azure.');
    
}).listen(process.env.PORT || 8080);