<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego Tres en Raya</title>
    <link rel="stylesheet" href="{{ asset('css/tresEnRaya.css') }}">
</head>
<body>
    <audio autoplay loop>
        <source src="{{ asset('music/portillo1.mp3') }}" type="audio/mpeg">  
    </audio>
    <div class="container">
        <div class="volver-menu">
        <a href="{{ url('/dashboard') }}" class="btn-volver">Volver al Menú</a>
        </div>
        <h1>Juego Tres en Raya</h1>
        <div class="tablero">
            <button class="celda"></button>
            <button class="celda"></button>
            <button class="celda"></button>
            <button class="celda"></button>
            <button class="celda"></button>
            <button class="celda"></button>
            <button class="celda"></button>
            <button class="celda"></button>
            <button class="celda"></button>
        </div>
    </div>

    <script src="{{ asset('js/tresEnRaya.js') }}"></script>
</body>
</html>
