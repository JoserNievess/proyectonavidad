//palabras que el jugador tiene que adivinar
let arrayPalabras =["GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA", "RATON", "DAVID"];
//ayudas para las palabras
let ayudas = [
    "Instrumento Musical",
    "Animal de la selva",
    "Es un color",
    "Nombre de mujer",
    "Hardware de computadora",
    "Es un Pais",
    "Animal de alcantarillas",
    "El mejor pofreso"
];

let cantPalabrasJugadas = 0;
let intentosRestantes = 5;
let posActual;
let arrayPalabraActual = [];
let cantidadAcertadas = 0;
let divsPalabraActual = [];
let totalQueDebeAcertar;

// funcion para cargar una palabra y seguir jugando
function cargarNuevaPalabra() {
    cantPalabrasJugadas++;
    if (cantPalabrasJugadas > 6) {
        // se reinician las palabras si se agotaron todas
        arrayPalabras = ["GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA", "RATON", "DAVID"];
        ayudas = [
            "Instrumento Musical",
            "Animal de la selva",
            "Es un color",
            "Nombre de mujer",
            "Hardware de computadora",
            "Es un Pais",
            "El mejor pofreso"
        ];
    }

    posActual = Math.floor(Math.random() * arrayPalabras.length);
    let palabra = arrayPalabras[posActual];
    totalQueDebeAcertar = palabra.length;
    cantidadAcertadas = 0;

    // para guardar la palabra actual en un array
    arrayPalabraActual = palabra.split('');

    // limpia los contenedores que quedaron cargados con la palabra anterior
    document.getElementById("palabra").innerHTML = "";
    document.getElementById("letrasIngresadas").innerHTML = "";

    // Cargamos la cantidad de divs (letras) que tiene la palabra
    for (i = 0; i < palabra.length; i++) {
        var divLetra = document.createElement("div");
        divLetra.className = "letra";
        document.getElementById("palabra").appendChild(divLetra);
    }

    // Selecciono todos los divs de la palabra
    divsPalabraActual = document.getElementsByClassName("letra");

    // Seteamos los intentos
    intentosRestantes = 5;
    document.getElementById("intentos").innerHTML = intentosRestantes;

    // Cargamos la ayuda de la pregunta
    document.getElementById("ayuda").innerHTML = ayudas[posActual];

    // Elimino el elemento ya seleccionado del arreglo.
    arrayPalabras.splice(posActual, 1);
    ayudas.splice(posActual, 1);
}

cargarNuevaPalabra();

document.addEventListener("keydown", event => {
    if (isLetter(event.key)) {
        let letrasIngresadas = document.getElementById("letrasIngresadas").innerHTML;
        letrasIngresadas = letrasIngresadas.split('');

        // Mira si la letra que han metido ya la han metido
        if (letrasIngresadas.lastIndexOf(event.key.toUpperCase()) === -1) {
            let acerto = false;

            for (i = 0; i < arrayPalabraActual.length; i++) {
                if (arrayPalabraActual[i] == event.key.toUpperCase()) {
                    divsPalabraActual[i].innerHTML = event.key.toUpperCase();
                    acerto = true;
                    cantidadAcertadas = cantidadAcertadas + 1;
                }
            }

            if (acerto == true) {
                if (totalQueDebeAcertar == cantidadAcertadas) {
                    // Si acierta todas las letras, cambia el estilo
                    for (i = 0; i < arrayPalabraActual.length; i++) {
                        divsPalabraActual[i].className = "letra pintar";
                    }
                    // Nueva palabra después de acertar
                    setTimeout(() => {
                        cargarNuevaPalabra();
                    }, 1000);  // Tiempo de espera antes de cargar la nueva palabra
                }
            } else {
                intentosRestantes = intentosRestantes - 1;
                document.getElementById("intentos").innerHTML = intentosRestantes;

                if (intentosRestantes <= 0) {
                    // Si se acaban los intentos, muestra un mensaje y carga una nueva palabra
                    Swal.fire({
                        icon: 'error',
                        title: 'No acertaste!',
                        text: 'Prueba con otra palabra!',
                        confirmButtonText: 'De acuerdo!',
                        background: '#FFB6C1',
                        color: '#fff',
                        confirmButtonColor: '#5e35b1',
                        customClass: {
                            title: 'swal-title', 
                            icon: 'swal-icon'
                        }
                    });
                    for (i = 0; i < arrayPalabraActual.length; i++) {
                        divsPalabraActual[i].className = "letra pintarError";
                    }
                    // Nueva palabra después de los intentos fallidos
                    setTimeout(() => {
                        cargarNuevaPalabra();
                    }, 1000);  // Tiempo de espera antes de cargar la nueva palabra
                }
            }

            // Agrega la letra ingresada a las letras ya ingresadas que se visualizan
            document.getElementById("letrasIngresadas").innerHTML += event.key.toLocaleUpperCase() + " - ";
        }
    }
});

// Para saber si es letra o no
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
