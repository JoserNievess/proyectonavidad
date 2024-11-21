<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bienvenido al Juego</title>

    <!-- Cargar el CSS desde la carpeta public -->
    <link rel="stylesheet" href="{{ asset('css/portada.css') }}">
</head>
<body>
    <!-- Música de fondo -->
    <audio autoplay loop>
        <source src="{{ asset('music/musica.mp3') }}" type="audio/mpeg">
        Tu navegador no soporta audio en HTML5.
    </audio>

    <!-- Video de fondo -->
    <video autoplay loop muted>
        <source src="{{ asset('video/fondo.mp4') }}" type="video/mp4">
        Tu navegador no soporta videos en HTML5.
    </video>

    <!-- Contenedor centrado -->
    <div class="container">
        <div class="background">
            <h1>Bienvenido a la web</h1>
            <p>Inicia sesión o registrate para comenzar:</p>
            <div class="space-y-4">
                <a href="{{ route('login') }}" class="btn">Iniciar sesión</a>
                <a href="{{ route('register') }}" class="btn">Registrarse</a>
            </div>
        </div>
    </div>
</body>
</html>
