//palbras que el jugador tiene que adivianr
let arrayPalabras =["GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA"];
//ayudas pa las palabras
let ayudas = [
    "Instrumento Musical",
    "Animal de la selva",
    "Es un color",
    "Nombre de mujer",
    "Hardware de computadora",
    "Es un Pais"
]
 
let cantPalabrasJugadas = 0;
 
let intentosRestantes = 5;
 
let posActual;
 
let arrayPalabraActual = [];
 
let cantidadAcertadas = 0;
 
let divsPalabraActual = [];
 
let totalQueDebeAcertar;
 
// funcion para cargar una palabra y seguir jugando
function cargarNuevaPalabra(){
   
    cantPalabrasJugadas++;
    if(cantPalabrasJugadas>6){
       
        arrayPalabras =["GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA"];
        ayudas = [
            "Instrumento Musical",
            "Animal de la selva",
            "Es un color",
            "Nombre de mujer",
            "Hardware de computadora",
            "Es un Pais"
        ]
    }
 
 
    posActual = Math.floor(Math.random()*arrayPalabras.length);
 
    let palabra = arrayPalabras[posActual];
 
    totalQueDebeAcertar = palabra.length;
    cantidadAcertadas = 0;
 
// para guardar la palabra actual en un array
    arrayPalabraActual = palabra.split('');
 
    //limpia los contenedores que quedaron cargadas con la palabra anterior
    document.getElementById("palabra").innerHTML = "";
    document.getElementById("letrasIngresadas").innerHTML = "";
 
    //Cargamos la cantidad de divs (letras) que tiene la palabra
    for(i=0;i<palabra.length;i++){
        var divLetra = document.createElement("div");
        divLetra.className = "letra";
        document.getElementById("palabra").appendChild(divLetra);
    }
 
    //Selecciono todos los divs de la palabra
    divsPalabraActual = document.getElementsByClassName("letra");
 
    //setemos los intentos
    intentosRestantes = 5;
    document.getElementById("intentos").innerHTML = intentosRestantes;
 
    //Cargamos la ayuda de la pregunta
    document.getElementById("ayuda").innerHTML = ayudas[posActual];
 
   //elimino el elemento ya seleccionado del arreglo.
    //splice(posActual,1): A partir de la posicon posActual elimino 1 elemento
    arrayPalabras.splice(posActual,1);
    ayudas.splice(posActual,1);
 
}
 
cargarNuevaPalabra();
 
 
document.addEventListener("keydown", event => {
 
    if(isLetter(event.key)){
 
        let letrasIngresadas = document.getElementById("letrasIngresadas").innerHTML;
        letrasIngresadas = letrasIngresadas.split('');
       
        //mira si la letra que han metido ya la han metido
        if(letrasIngresadas.lastIndexOf(event.key.toUpperCase()) === -1){
            let acerto = false;
 
            for(i=0;i<arrayPalabraActual.length;i++){
                if(arrayPalabraActual[i] == event.key.toUpperCase()){
                    divsPalabraActual[i].innerHTML = event.key.toUpperCase();
                    acerto = true;
                    cantidadAcertadas = cantidadAcertadas + 1;
                }
            }
       
            if(acerto==true){
                if(totalQueDebeAcertar == cantidadAcertadas){
                    for(i=0;i<arrayPalabraActual.length;i++){
                        divsPalabraActual[i].className="letra pintar";
                    }
                }
            }else{
               
                intentosRestantes = intentosRestantes - 1;
                document.getElementById("intentos").innerHTML = intentosRestantes;
 
                if(intentosRestantes<=0){
                    for(i=0;i<arrayPalabraActual.length;i++){
                        divsPalabraActual[i].className="letra pintarError";
                    }
                }
            }
 
            //agrega la letra ingresada a las letras ya ingresadas que se visualizan
            document.getElementById("letrasIngresadas").innerHTML += event.key.toLocaleUpperCase() + " - ";
        }
    }
});
 
//para saber si es letra o no
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}