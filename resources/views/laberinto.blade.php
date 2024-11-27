<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego de Laberinto</title>
    <link rel="stylesheet" href="{{ asset('css/base.css') }}">
    <link rel="stylesheet" href="{{ asset('css/laberinto.css') }}">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>
    <audio autoplay loop>
        <source src="{{ asset('music/portillo2.mp3') }}" type="audio/mpeg">
    </audio>
    <div class="volver-menu">
        <a href="{{ url('/dashboard') }}" class="btn-volver">Volver al Menú</a>
    </div>
    <section>
        <h2>LABERINTO</h2>
        <p>Guía al jugador desde el punto verde (inicio) hasta el punto rojo (meta).</p>
        <div id="laberinto"></div>
        <button id="reiniciar" class="btn-reiniciar">Reiniciar Juego</button>
    </section>
    <script src="{{ asset('js/laberinto.js') }}"></script>
</body>
</html>
