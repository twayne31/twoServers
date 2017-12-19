var http = require("http");

var PORT = 7500;
var PORT2 = 7000;

function handleGoodRequest(request, response){
	response.end("You're doing great" + request.url);
}

var goodServer = http.createServer(handleGoodRequest);

goodServer.listen(PORT, function(){
console.log("We listening on: http://localhost:" + PORT);
})



function handleBadRequest(request, response){

	response.end("You're a disgrace and need to improve " + request.url);
}


var server = http.createServer(handleBadRequest);

server.listen(PORT2, function(){
	console.log("We listening on: http://localhost:" + PORT2);
})