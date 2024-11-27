document.addEventListener("DOMContentLoaded", () => {
    const laberinto = document.getElementById("laberinto");
    const filas = 15; // Tamaño del laberinto (15x15)
    const columnas = 15;
    let jugadorPos = { x: 1, y: 1 }; // Posición inicial del jugador
    let grid;
    let movimientos = 0;

    // Generar el laberinto
    function generarLaberinto() {
        grid = Array.from({ length: filas }, () => Array(columnas).fill(1)); // 1 = muro

        // Generar el camino con backtracking
        crearCamino(1, 1);

        // Definir inicio y meta
        grid[1][1] = "inicio";
        grid[filas - 2][columnas - 2] = "meta";

        // Renderizar celdas
        laberinto.innerHTML = "";
        for (let y = 0; y < filas; y++) {
            for (let x = 0; x < columnas; x++) {
                const celda = document.createElement("div");
                celda.classList.add("celda");
                if (grid[y][x] === "inicio") celda.classList.add("inicio");
                if (grid[y][x] === "meta") celda.classList.add("meta");
                if (grid[y][x] === 1) celda.classList.add("muro");
                laberinto.appendChild(celda);
            }
        }

        // Colocar al jugador
        actualizarJugador();
    }

    // Algoritmo de backtracking
    function crearCamino(x, y) {
        grid[y][x] = 0;
        const direcciones = [
            { dx: 0, dy: -1 },
            { dx: 1, dy: 0 },
            { dx: 0, dy: 1 },
            { dx: -1, dy: 0 },
        ];
        direcciones.sort(() => Math.random() - 0.5);

        for (const { dx, dy } of direcciones) {
            const nx = x + dx * 2;
            const ny = y + dy * 2;

            if (nx > 0 && ny > 0 && nx < columnas && ny < filas && grid[ny][nx] === 1) {
                grid[ny][nx] = 0;
                grid[y + dy][x + dx] = 0;
                crearCamino(nx, ny);
            }
        }
    }

    // Mover jugador
    function moverJugador(dx, dy) {
        const nuevasCoordenadas = { x: jugadorPos.x + dx, y: jugadorPos.y + dy };
        if (
            nuevasCoordenadas.x >= 0 &&
            nuevasCoordenadas.y >= 0 &&
            nuevasCoordenadas.x < columnas &&
            nuevasCoordenadas.y < filas &&
            grid[nuevasCoordenadas.y][nuevasCoordenadas.x] !== 1
        ) {
            jugadorPos = nuevasCoordenadas;
            movimientos++;
            actualizarJugador();

            // Comprobar si llegó a la meta
            if (grid[jugadorPos.y][jugadorPos.x] === "meta") {
                Swal.fire({
                    icon: "success",
                    title: "¡Felicidades!",
                    text: `Has llegado a la meta en ${movimientos} movimientos.`,
                    confirmButtonText: "Reiniciar",
                }).then(reiniciarJuego);
            }
        }
    }

    // Actualizar posición del jugador
    function actualizarJugador() {
        document.querySelectorAll(".jugador").forEach((celda) => celda.classList.remove("jugador"));
        const index = jugadorPos.y * columnas + jugadorPos.x;
        laberinto.children[index].classList.add("jugador");
    }

    // Reiniciar el juego
    function reiniciarJuego() {
        jugadorPos = { x: 1, y: 1 };
        movimientos = 0;
        generarLaberinto();
    }

    // Eventos de teclas
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") moverJugador(0, -1);
        if (e.key === "ArrowDown") moverJugador(0, 1);
        if (e.key === "ArrowLeft") moverJugador(-1, 0);
        if (e.key === "ArrowRight") moverJugador(1, 0);
    });

    // Botón reiniciar
    document.getElementById("reiniciar").addEventListener("click", reiniciarJuego);

    // Iniciar juego
    generarLaberinto();
});
function crearLaberintoAvanzado(x, y) {
    grid[y][x] = 0;
    const direcciones = [
        { dx: 0, dy: -1 },
        { dx: 1, dy: 0 },
        { dx: 0, dy: 1 },
        { dx: -1, dy: 0 },
    ];
    direcciones.sort(() => Math.random() - 0.5);

    for (const { dx, dy } of direcciones) {
        const nx = x + dx * 2;
        const ny = y + dy * 2;

        if (nx > 0 && ny > 0 && nx < columnas && ny < filas && grid[ny][nx] === 1) {
            grid[ny][nx] = 0;
            grid[y + dy][x + dx] = 0;
            crearLaberintoAvanzado(nx, ny);

            // Añadir bifurcaciones falsas con probabilidad del 30%
            if (Math.random() < 0.3) {
                const fx = nx + dx;
                const fy = ny + dy;
                if (fx > 0 && fy > 0 && fx < columnas && fy < filas) {
                    grid[fy][fx] = 0;
                }
            }
        }
    }
}
