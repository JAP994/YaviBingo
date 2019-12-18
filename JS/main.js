var http = require("http");
http.createServer(function(request, response) {
    //Envia el http al encabezado
    //es estado del http 200 es ok es decir que esta todo bien
    //el tipo de contenido es un texto plano
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    //Envia la respuesta al cuerpo como hola mundo
    response.end("Hello World\n");
}).listen(8080);
//Imprime el mensaje
console.log('Server running at http://127.0.0.1:8080/');