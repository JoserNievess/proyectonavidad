<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8"> <!-- Define la codificacion de caracteres como UTF-8. -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Hace que el diseño sea adaptable a dispositivos moviles. -->
    <title>Juego Tres en Raya</title> <!-- Titulo de la página que aparece en la pestaña del navegador. -->
    <link rel="stylesheet" href="{{ asset('css/tresEnRaya.css') }}"> <!-- Enlace al archivo de estilos CSS del juego. -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> <!-- Incluye la libreria SweetAlert2 para alertas personalizadas. -->
</head>
<body>
    <!-- Reproduccion de musica de fondo de forma automatica y en bucle. -->
    <audio autoplay loop>
        <source src="{{ asset('music/portillo1.mp3') }}" type="audio/mpeg"> <!-- Fuente del archivo de audio. -->
    </audio>

    <!-- Contenedor principal del contenido del juego. -->
    <div class="container">
        <!-- Boton para volver al menu principal. -->
        <div class="volver-menu">
            <a href="{{ url('/dashboard') }}" class="btn-volver">Volver al Menú</a> <!-- Enlace con estilo de boton para regresar al menu. -->
        </div>

        <!-- Encabezado del juego. -->
        <h1>Juego Tres en Raya</h1>

        <!-- Tablero del juego con 9 celdas (botones). -->
        <div class="tablero">
            <button class="celda"></button> <!-- Celda 1 del tablero. -->
            <button class="celda"></button> <!-- Celda 2 del tablero. -->
            <button class="celda"></button> <!-- Celda 3 del tablero. -->
            <button class="celda"></button> <!-- Celda 4 del tablero. -->
            <button class="celda"></button> <!-- Celda 5 del tablero. -->
            <button class="celda"></button> <!-- Celda 6 del tablero. -->
            <button class="celda"></button> <!-- Celda 7 del tablero. -->
            <button class="celda"></button> <!-- Celda 8 del tablero. -->
            <button class="celda"></button> <!-- Celda 9 del tablero. -->
        </div>
    </div>

    <!-- Enlace al archivo de JavaScript que contiene la logica del juego. -->
    <script src="{{ asset('js/tresEnRaya.js') }}"></script>
</body>
</html>