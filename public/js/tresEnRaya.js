let turno = 0;
const tablero = Array(9).fill(null); 

const botonPulsado = (e, pos) => {
    const boton = e.target;

    
    if (tablero[pos] !== null) {
        alert("Este espacio ya está ocupado");
        return;
    }

   
    turno++;
    const color = turno % 2 ? 'salmon' : 'palegreen';
    console.log(`Turno: ${turno}, Color: ${color}, Posición: ${pos}`);
    boton.style.backgroundColor = color;
    tablero[pos] = color;

    
    if (victoria()) {
        setTimeout(() => alert(`¡Jugador ${color === 'salmon' ? '1' : '2'} gana!`), 100);
        resetGame();
    } else if (turno === 9) {
        setTimeout(() => alert("¡Empate!"), 100);
        resetGame();
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
    document.querySelectorAll('button').forEach((boton) => {
        boton.style.backgroundColor = '';
    });
};


document.querySelectorAll('button').forEach((obj, i) =>
    obj.addEventListener('click', (e) => botonPulsado(e, i))
);