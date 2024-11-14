document.addEventListener("DOMContentLoaded", function() {
    const palabras = ["GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA"];
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
    
    function reiniciarJuego() {
        // Limpiar la sopa de letras y las palabras encontradas
        document.getElementById('sopa').innerHTML = '';
        document.getElementById('palabras').innerHTML = '';
        // Generar una nueva sopa de letras
        sopa = generarSopaDeLetras(palabras);
        mostrarSopa(sopa);
        mostrarPalabras(palabras);
    }
});

function generarSopaDeLetras(palabras) {
    const tamaño = 10;
    const sopa = Array.from({ length: tamaño }, () => Array(tamaño).fill(''));

    palabras.forEach(palabra => {
        let colocada = false;
        while (!colocada) {
            const direccion = Math.random() < 0.5 ? 'H' : 'V';
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
    if (direccion === 'H') {
        if (columna + palabra.length > sopa.length) return false;
        for (let i = 0; i < palabra.length; i++) {
            if (sopa[fila][columna + i] !== '') return false;
        }
    } else {
        if (fila + palabra.length > sopa.length) return false;
        for (let i = 0; i < palabra.length; i++) {
            if (sopa[fila + i][columna] !== '') return false;
        }
    }
    return true;
}

function colocarPalabra(sopa, palabra, fila, columna, direccion) {
    if (direccion === 'H') {
        for (let i = 0; i < palabra.length; i++) {
            sopa[fila][columna + i] = palabra[i];
        }
    } else {
        for (let i = 0; i < palabra.length; i++) {
            sopa[fila + i][columna] = palabra[i];
        }
    }
}

function mostrarSopa(sopa) {
    const sopaDiv = document.getElementById('sopa');
    sopa.forEach((fila, filaIndex) => {
        const filaDiv = document.createElement('div');
        fila.forEach((letra, colIndex) => {
            const letraDiv = document.createElement('span');
            letraDiv.textContent = letra;
            letraDiv.dataset.fila = filaIndex;
            letraDiv.dataset.columna = colIndex;
            filaDiv.appendChild(letraDiv);
        });
        sopaDiv.appendChild(filaDiv);
    });
}

function mostrarPalabras(palabras) {
    const palabrasUl = document.getElementById('palabras');
    palabras.forEach(palabra => {
        const palabraLi = document.createElement('li');
        palabraLi.textContent = palabra;
        palabraLi.dataset.palabra = palabra;
        palabrasUl.appendChild(palabraLi);
    });
}

function iniciarSeleccion(event) {
    seleccion = [];
    seleccionando = true;
    agregarSeleccion(event);
}

function agregarSeleccion(event) {
    if (seleccionando && event.target.tagName === 'SPAN') {
        event.target.classList.add('seleccionada');
        seleccion.push({
            letra: event.target.textContent,
            fila: event.target.dataset.fila,
            columna: event.target.dataset.columna
        });
    }
}

function finalizarSeleccion(event) {
    seleccionando = false;
    const palabraSeleccionada = seleccion.map(item => item.letra).join('');
    const palabraEncontrada = document.querySelector(`[data-palabra="${palabraSeleccionada}"]`);

    if (palabraEncontrada) {
        palabraEncontrada.classList.add('tachada');
        seleccion.forEach(item => {
            const letraDiv = document.querySelector(`span[data-fila="${item.fila}"][data-columna="${item.columna}"]`);
            letraDiv.classList.add('encontrada');
        });
    }

    // Limpia la selección
    document.querySelectorAll('.seleccionada').forEach(el => el.classList.remove('seleccionada'));
    seleccion = [];
}
