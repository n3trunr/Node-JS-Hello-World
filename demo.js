var http = require('http');

//http module creates http server that listens to the server ports and gives response back to the client

http.createServer(function(req,res){
    res.write("Hello World! Welcome to this tutorial");
    res.end();
}).listen(8080);