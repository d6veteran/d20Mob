var http = require('http');

function start() {
  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("This is d20Mob");
    response.end();
  }

  http.createServer(onRequest).listen(process.env.PORT || 8080);
  console.log("Server has started.");
}

exports.start = start;