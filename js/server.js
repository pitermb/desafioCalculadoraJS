var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    fs.readFile(__dirname + "/html/index.html", function(err, data){
        response.end(data);
    });
});

server.listen(3000, function () {
    console.log('Servidor Calculadora rodando na porta 3000');
});