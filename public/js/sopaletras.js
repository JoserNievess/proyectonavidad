document.addEventListener("DOMContentLoaded", function() {
    // Conjunto completo de palabras posibles
    const conjuntoDePalabras = [
        "GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA", 
        "ORDENADOR", "ZAPATO", "VIAJE", "AMISTAD", "ESTUDIO", "CIELO", "MONTAÑA", 
        "PROGRAMAR", "CASCADA", "PEZ", "FUTBOL", "TORO", "LEON", "ESTRELLA"
    ];

    // Generar palabras aleatorias y sopa
    let palabras = obtenerPalabrasAleatorias(conjuntoDePalabras, 5); // Seleccionar 5 palabras aleatorias
    let sopa = generarSopaDeLetras(palabras);
    mostrarSopa(sopa);
    mostrarPalabras(palabras);

    let seleccion = [];
    let seleccionando = false;
    document.getElementById('sopa').addEventListener('mousedown', iniciarSeleccion);
    document.getElementById('sopa').addEventListener('mouseover', agregarSeleccion);
    document.getElementById('sopa').addEventListener('mouseup', finalizarSeleccion);
    document.getElementById('reiniciar').addEventListener('click', reiniciarJuego);

    // Evitar la selección de texto al arrastrar
    document.getElementById('sopa').addEventListener('dragstart', function(event) {
        event.preventDefault();
    });

    // Función para reiniciar el juego
    function reiniciarJuego() {
        // Limpiar la sopa de letras y las palabras encontradas
        document.getElementById('sopa').innerHTML = '';
        document.getElementById('palabras').innerHTML = '';
        
        // Seleccionar nuevas palabras aleatorias (5 palabras de un conjunto más grande)
        palabras = obtenerPalabrasAleatorias(conjuntoDePalabras, 5);
        
        // Generar una nueva sopa de letras con las nuevas palabras
        sopa = generarSopaDeLetras(palabras);
        mostrarSopa(sopa);
        mostrarPalabras(palabras);
    }
});

// Función para seleccionar palabras aleatorias del conjunto
function obtenerPalabrasAleatorias(conjunto, cantidad) {
    const seleccionadas = [];
    const conjuntoCopia = [...conjunto]; // Crear una copia del conjunto para no modificar el original
    for (let i = 0; i < cantidad; i++) {
        const indice = Math.floor(Math.random() * conjuntoCopia.length);
        seleccionadas.push(conjuntoCopia.splice(indice, 1)[0]); // Eliminar la palabra seleccionada del conjunto
    }
    return seleccionadas;
}

function generarSopaDeLetras(palabras) {
    const tamaño = 10;
    const sopa = Array.from({ length: tamaño }, () => Array(tamaño).fill(''));

    palabras.forEach(palabra => {
        let colocada = false;
        while (!colocada) {
            const direccion = Math.floor(Math.random() * 8);  // 8 posibles direcciones
            const fila = Math.floor(Math.random() * tamaño);
            const columna = Math.floor(Math.random() * tamaño);
            if (puedeColocarPalabra(sopa, palabra, fila, columna, direccion)) {
                colocarPalabra(sopa, palabra, fila, columna, direccion);
                colocada = true;
            }
        }
    });

    // Rellenar espacios vacíos con letras aleatorias
    for (let i = 0; i < tamaño; i++) {
        for (let j = 0; j < tamaño; j++) {
            if (sopa[i][j] === '') {
                sopa[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }
        }
    }

    return sopa;
}

function puedeColocarPalabra(sopa, palabra, fila, columna, direccion) {
    const tamaño = sopa.length;
    const longPalabra = palabra.length;

    switch (direccion) {
        case 0: // Horizontal (izquierda a derecha)
            if (columna + longPalabra > tamaño) return false;
            for (let i = 0; i < longPalabra; i++) {
                if (sopa[fila][columna + i] !== '') return false;
            }
            break;
        case 1: // Horizontal (derecha a izquierda)
            if (columna - longPalabra < -1) return false;
            for (let i = 0; i < longPalabra; i++) {
                if (sopa[fila][columna - i] !== '') return false;
            }
            break;
        case 2: // Vertical (arriba hacia abajo)
            if (fila + longPalabra > tamaño) return false;
            for (let i = 0; i < longPalabra; i++) {
                if (sopa[fila + i][columna] !== '') return false;
            }
            break;
        case 3: // Vertical (abajo hacia arriba)
            if (fila - longPalabra < -1) return false;
            for (let i = 0; i < longPalabra; i++) {
                if (sopa[fila - i][columna] !== '') return false;
            }
            break;
        case 4: // Diagonal (arriba a la derecha)
            if (fila - longPalabra < -1 || columna + longPalabra > tamaño) return false;
            for (let i = 0; i < longPalabra; i++) {
                if (sopa[fila - i][columna + i] !== '') return false;
            }
            break;
        case 5: // Diagonal (arriba a la izquierda)
            if (fila - longPalabra < -1 || columna - longPalabra < -1) return false;
            for (let i = 0; i < longPalabra; i++) {
                if (sopa[fila - i][columna - i] !== '') return false;
            }
            break;
        case 6: // Diagonal (abajo a la derecha)
            if (fila + longPalabra > tamaño || columna + longPalabra > tamaño) return false;
            for (let i = 0; i < longPalabra; i++) {
                if (sopa[fila + i][columna + i] !== '') return false;
            }
            break;
        case 7: // Diagonal (abajo a la izquierda)
            if (fila + longPalabra > tamaño || columna - longPalabra < -1) return false;
            for (let i = 0; i < longPalabra; i++) {
                if (sopa[fila + i][columna - i] !== '') return false;
            }
            break;
        default:
            return false;
    }

    return true;
}

function colocarPalabra(sopa, palabra, fila, columna, direccion) {
    const tamaño = sopa.length;
    const longPalabra = palabra.length;

    switch (direccion) {
        case 0: // Horizontal (izquierda a derecha)
            for (let i = 0; i < longPalabra; i++) {
                sopa[fila][columna + i] = palabra[i];
            }
            break;
        case 1: // Horizontal (derecha a izquierda)
            for (let i = 0; i < longPalabra; i++) {
                sopa[fila][columna - i] = palabra[i];
            }
            break;
        case 2: // Vertical (arriba hacia abajo)
            for (let i = 0; i < longPalabra; i++) {
                sopa[fila + i][columna] = palabra[i];
            }
            break;
        case 3: // Vertical (abajo hacia arriba)
            for (let i = 0; i < longPalabra; i++) {
                sopa[fila - i][columna] = palabra[i];
            }
            break;
        case 4: // Diagonal (arriba a la derecha)
            for (let i = 0; i < longPalabra; i++) {
                sopa[fila - i][columna + i] = palabra[i];
            }
            break;
        case 5: // Diagonal (arriba a la izquierda)
            for (let i = 0; i < longPalabra; i++) {
                sopa[fila - i][columna - i] = palabra[i];
            }
            break;
        case 6: // Diagonal (abajo a la derecha)
            for (let i = 0; i < longPalabra; i++) {
                sopa[fila + i][columna + i] = palabra[i];
            }
            break;
        case 7: // Diagonal (abajo a la izquierda)
            for (let i = 0; i < longPalabra; i++) {
                sopa[fila + i][columna - i] = palabra[i];
            }
            break;
    }
}

// Función para mostrar la sopa de letras en el DOM.
function mostrarSopa(sopa) {
    const sopaDiv = document.getElementById('sopa'); // Contenedor HTML donde se mostrará la sopa.

    // Iterar por cada fila de la sopa de letras.
    sopa.forEach((fila, filaIndex) => {
        const filaDiv = document.createElement('div'); // Crear un contenedor para cada fila.

        // Iterar por cada letra de la fila.
        fila.forEach((letra, colIndex) => {
            const letraDiv = document.createElement('span'); // Crear un elemento para cada letra.
            letraDiv.textContent = letra; // Asignar la letra al contenido del span.

            // Guardar los índices de fila y columna como atributos de datos.
            letraDiv.dataset.fila = filaIndex; 
            letraDiv.dataset.columna = colIndex;

            filaDiv.appendChild(letraDiv); // Agregar la letra al contenedor de la fila.
        });

        sopaDiv.appendChild(filaDiv); // Agregar la fila al contenedor principal de la sopa.
    });
}

// Función para mostrar la lista de palabras en el DOM.
function mostrarPalabras(palabras) {
    const palabrasUl = document.getElementById('palabras'); // Contenedor HTML donde se mostrará la lista de palabras.

    // Iterar por cada palabra de la lista.
    palabras.forEach(palabra => {
        const palabraLi = document.createElement('li'); // Crear un elemento de lista para cada palabra.
        palabraLi.textContent = palabra; // Asignar la palabra al contenido del elemento.
        palabraLi.dataset.palabra = palabra; // Guardar la palabra como un atributo de datos.
        palabrasUl.appendChild(palabraLi); // Agregar la palabra a la lista en el DOM.
    });
}

// Función que inicia el proceso de selección de letras.
function iniciarSeleccion(event) {
    seleccion = []; // Vacía la lista de selección inicial.
    seleccionando = true; // Marca que se está seleccionando.
    agregarSeleccion(event); // Agrega la primera letra seleccionada.
}

// Función para agregar letras a la selección mientras se arrastra.
function agregarSeleccion(event) {
    // Verifica que se está seleccionando y que el objetivo sea un elemento 'SPAN'.
    if (seleccionando && event.target.tagName === 'SPAN') {
        event.target.classList.add('seleccionada'); // Marca la letra como seleccionada visualmente.

        // Agregar la letra y su posición (fila y columna) a la selección.
        seleccion.push({
            letra: event.target.textContent, // Contenido de la letra seleccionada.
            fila: event.target.dataset.fila, // Fila de la letra seleccionada.
            columna: event.target.dataset.columna // Columna de la letra seleccionada.
        });
    }
}

// Función para finalizar la selección de letras.
function finalizarSeleccion(event) {
    seleccionando = false; // Marca que ya no se está seleccionando.
    
    // Combina las letras seleccionadas en una palabra.
    const palabraSeleccionada = seleccion.map(item => item.letra).join('');

    // Busca en el DOM si la palabra seleccionada coincide con una de las palabras de la lista.
    const palabraEncontrada = document.querySelector(`[data-palabra="${palabraSeleccionada}"]`);

    if (palabraEncontrada) {
        palabraEncontrada.classList.add('tachada'); // Marca la palabra en la lista como encontrada.

        // Marca las letras seleccionadas en la sopa como encontradas.
        seleccion.forEach(item => {
            const letraDiv = document.querySelector(`span[data-fila="${item.fila}"][data-columna="${item.columna}"]`);
            letraDiv.classList.add('encontrada');
        });
    }

    // Limpia la selección visual.
    document.querySelectorAll('.seleccionada').forEach(el => el.classList.remove('seleccionada'));

    // Reinicia la lista de selección.
    seleccion = [];
}