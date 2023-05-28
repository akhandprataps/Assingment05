var http = require("http");

const httpServer = http.createServer(handleServer).listen(8081)
// module.exports = httpServer;

function handleServer(req, res) {
    if(req.url = "/"){
        res.write("this is home");
        res.end();
    }
    else if(req.url == "/welcome"){
        res.writeHead(200, {"content-type": "text/plain"});
        res.write("Welcome to Dominos");
        res.end();
    }
    else if(req.url =="/contect"){
        res.writeHead(200, {"content-type": "application/json"});
        res.write(JSON.stringify({
                phone: '18602100000', 
                email: 'guestcaredominos@jublfood.com' 
        }));
        res.end();
    }else{
        res.writeHead(404, {"content-type":text/html});
        res.end("<h1>404 error.Page doesn't exist</h1>");
    }
}

console.log('Listening on port 8081...');

module.exports = httpServer;