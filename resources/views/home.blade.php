<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Home</title>
    <link rel="stylesheet" href="{{ asset('css/welcome.css') }}">
</head>
<body>
    <div class="container">
        <h1>Bienvenido al Juego</h1>
        <div class="button-container">
            <a href="{{ route('adivinapalabra') }}" class="btn btn-left">Adivina la Palabra</a>
            <a href="{{ route('sopaletras') }}" class="btn btn-right">Sopa de Letras</a>
            <a href="{{ route('memoria') }}" class="btn btn-right">Juego de memoria</a>
        </div>
    </div>
</body>
</html>

