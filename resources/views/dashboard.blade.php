<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bienvenido al Juego</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center min-h-screen">

    <div class="bg-white rounded-xl shadow-xl p-8 max-w-lg w-full text-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Bienvenido al Juego</h1>
        <p class="text-gray-600 mb-6">Elige un juego y empieza a divertirte.</p>
        
        <div class="space-y-4">
            <a href="{{ route('adivinapalabra') }}" class="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out">Adivina la Palabra</a>
            <a href="{{ route('sopaletras') }}" class="block bg-green-500 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out">Sopa de Letras</a>
            <a href="{{ route('memoria') }}" class="block bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out">Juego de Memoria</a>
            <a href="{{ route('tresEnRaya') }}" class="block bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out">Tres En Raya</a>
        </div>
    </div>

</body>
</html>
