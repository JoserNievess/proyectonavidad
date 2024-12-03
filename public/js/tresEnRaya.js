// Variable que lleva el conteo de turnos del juego (empieza en 0).
let turno = 0;

// Array que representa el estado del tablero, inicializado con 9 posiciones vacías.
const tablero = Array(9).fill(null);

// Funcion que se ejecuta cuando un boton del tablero es pulsado.
const botonPulsado = (e, pos) => {
    const boton = e.target; 

    // Verificar si la celda ya esta ocupada.
    if (tablero[pos] !== null) {
        Swal.fire({
            icon: 'error', // Icono de error.
            title: '¡Ups!', // Título del mensaje.
            text: 'Este espacio ya está ocupado', // Texto explicativo.
            confirmButtonText: 'De acuerdo', // Texto del boton de confirmacion.
            background: '#FFB6C1', // Color de fondo del cuadro de diálogo.
            color: '#fff', // Color del texto.
            confirmButtonColor: '#5e35b1', // Color del boton de confirmacion.
            customClass: { // Clases CSS personalizadas.
                title: 'swal-title',
                icon: 'swal-icon'
            }
        });
        return; // Termina la ejecucion si la celda esta ocupada.
    }

    turno++; // Incrementa el numero de turno.
    const color = turno % 2 === 0 ? 'palegreen' : 'salmon'; // Determina el color segun el turno (jugador 1 o 2).

    boton.style.backgroundColor = color; // Cambia el color de fondo de la celda pulsada.
    tablero[pos] = color; // Actualiza el estado del tablero en la posición correspondiente.

    // Verificar si hay un ganador despues del movimiento.
    if (victoria()) {
        setTimeout(() => { // Retraso para mostrar el mensaje despues del movimiento.
            Swal.fire({
                icon: 'success', // Icono de victoria.
                title: `¡Jugador ${color === 'palegreen' ? '2' : '1'} gana!`, // Mensaje indicando quien gana.
                confirmButtonText: 'Reiniciar', // Texto del boton para reiniciar.
                background: '#81c784', // Color de fondo del cuadro de diálogo.
                color: '#fff', // Color del texto.
                confirmButtonColor: '#5e35b1', // Color del boton de confirmacion.
                customClass: { // Clases CSS personalizadas.
                    title: 'swal-title',
                    icon: 'swal-icon',
                    confirmButton: 'swal-confirm-btn'
                }
            }).then(resetGame); // Reinicia el juego cuando se confirma el mensaje.
        }, 100); // 100 ms de retraso para asegurar que el jugador vea el cambio en la interfaz.
    } else if (turno === 9) { // Si se han jugado los 9 turnos y no hay ganador.
        setTimeout(() => { // Retraso para mostrar el mensaje despues del movimiento.
            Swal.fire({
                icon: 'info', // Icono de informacion.
                title: '¡Empate!', // Mensaje indicando que hay un empate.
                confirmButtonText: 'Reiniciar', // Texto del botón para reiniciar.
                background: '#c5cae9', // Color de fondo del cuadro de dialogo.
                color: '#333', // Color del texto.
                confirmButtonColor: '#5e35b1', // Color del boton de confirmacion.
                customClass: { // Clases CSS personalizadas.
                    title: 'swal-title',
                    icon: 'swal-icon',
                    confirmButton: 'swal-confirm-btn'
                }
            }).then(resetGame); // Reinicia el juego cuando se confirma el mensaje.
        }, 100); // 100 ms de retraso.
    }
};

// Función que verifica si hay una combinacion ganadora en el tablero.
const victoria = () => {
    // Combinaciones posibles para ganar (filas, columnas, diagonales).
    const combinaciones = [
        [0, 1, 2], // Fila superior.
        [3, 4, 5], // Fila central.
        [6, 7, 8], // Fila inferior.
        [0, 3, 6], // Columna izquierda.
        [1, 4, 7], // Columna central.
        [2, 5, 8], // Columna derecha.
        [0, 4, 8], // Diagonal principal.
        [2, 4, 6]  // Diagonal secundaria.
    ];

    // Comprueba si alguna combinacion ganadora se cumple.
    return combinaciones.some(
        ([a, b, c]) => tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]
    );
};

// Funcion que reinicia el estado del juego.
const resetGame = () => {
    tablero.fill(null); // Limpia el tablero.
    turno = 0; // Reinicia el contador de turnos.
    document.querySelectorAll('.celda').forEach((boton) => {
        boton.style.backgroundColor = ''; // Restablece el color de todas las celdas.
    });
};

// Asigna un evento "click" a cada celda del tablero.
document.querySelectorAll('.celda').forEach((obj, i) =>
    obj.addEventListener('click', (e) => botonPulsado(e, i)) // Llama a botonPulsado al pulsar la celda.
);