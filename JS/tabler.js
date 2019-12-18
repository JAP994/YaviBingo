var contenedores = document.getElementById("contenedor");

var numTablero = [];
var nJugados = []
var valor = 1;
dibujar(0);
document.getElementById("boton")
    .addEventListener("click", function() {
        jugar();

    });

function dibujar(num) {
    numTablero = [];
    for (var i = 1; i < 91; i++) {
        numTablero.push(i);
        var celda = document.createElement('div');
        //  console.log(numTablero);
        // console.log(nJugados);
        celda.className = 'celdas';
        celda.id = i;
        //console.log(typeof(num));
        //console.log(typeof(nJugados.length));
        for (var x = 0; x < nJugados.length; x++) {
            if (nJugados[x] == i) {
                //console.log("si es igual");
                celda.style.backgroundColor = "#EA0606";
            }
        }
        celda.appendChild(document.createTextNode(i));
        contenedores.appendChild(celda);
    }
    document.getElementById("mostrarNumero").innerHTML = num;
}

function jugar() {
    contenedores.innerHTML = "";
    var num = generarNumero(1, 90);
    if (nJugados.includes(num) && nJugados.length < 90) {
        //  console.log("ya existe el numero : " + num);
        jugar();
    } else if (nJugados.length < 90) {
        nJugados.push(num);
        //    console.log("numero Guardado");
        dibujar(num);
        console.log(nJugados[nJugados.length - 1]);
    } else {
        alert("Todos los numeros se han jugado");
        dibujar(nJugados[nJugados.length - 1]);
    }

}

function generarNumero(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}