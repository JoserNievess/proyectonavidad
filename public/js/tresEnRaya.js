let turno = 0; 
const tablero = Array(9).fill(null); 

const botonPulsado = (e, pos) => {
    const boton = e.target;

    if (tablero[pos] !== null) {
        Swal.fire({
            icon: 'error',
            title: '¡Ups!',
            text: 'Este espacio ya está ocupado',
            confirmButtonText: 'De acuerdo',
            background: '#FFB6C1',
            color: '#fff',
            confirmButtonColor: '#5e35b1',
            customClass: {
                title: 'swal-title', 
                icon: 'swal-icon'
            }
        });
        return;
    }

    turno++;
    const color = turno % 2 === 0 ? 'palegreen' : 'salmon'; 

    boton.style.backgroundColor = color;
    tablero[pos] = color;

    if (victoria()) {
        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: `¡Jugador ${color === 'palegreen' ? '2' : '1'} gana!`,
                confirmButtonText: 'Reiniciar',
                background: '#81c784',
                color: '#fff',
                confirmButtonColor: '#5e35b1',
                customClass: {
                    title: 'swal-title',
                    icon: 'swal-icon',
                    confirmButton: 'swal-confirm-btn'
                }
            }).then(resetGame);
        }, 100);
    } else if (turno === 9) {
        setTimeout(() => {
            Swal.fire({
                icon: 'info',
                title: '¡Empate!',
                confirmButtonText: 'Reiniciar',
                background: '#c5cae9',
                color: '#333',
                confirmButtonColor: '#5e35b1',
                customClass: {
                    title: 'swal-title',
                    icon: 'swal-icon',
                    confirmButton: 'swal-confirm-btn'
                }
            }).then(resetGame);
        }, 100);
    }
};

const victoria = () => {
    const combinaciones = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return combinaciones.some(
        ([a, b, c]) => tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]
    );
};

const resetGame = () => {
    tablero.fill(null);
    turno = 0;
    document.querySelectorAll('.celda').forEach((boton) => {
        boton.style.backgroundColor = '';
    });
};

document.querySelectorAll('.celda').forEach((obj, i) =>
    obj.addEventListener('click', (e) => botonPulsado(e, i))
);
