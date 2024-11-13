<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Proyecto Navidad</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('css/welcome.css') }}">
</head>
<body>
    <div class="container">
        <h1>Inicia sesion o registrate!</h1>
        <a href="{{ route('login') }}" class="btn btn-login">Iniciar sesión</a>
        <a href="{{ route('register') }}" class="btn btn-register">Registrarse</a>
    </div>
</body>
</html>
