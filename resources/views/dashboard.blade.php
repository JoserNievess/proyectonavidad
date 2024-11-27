<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bienvenido al Juego</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center min-h-screen">

    <!-- Audio -->
    <audio id="audio" autoplay loop>
        <source src="{{ asset('music/musica.mp3') }}" type="audio/mpeg">
    </audio>

    <!-- Controles de volumen -->
    <div class="absolute top-4 right-4 flex items-center">
        <!-- Icono de volumen -->
        <button id="volumeIcon" class="bg-gray-800 text-white p-2 rounded-full mr-2">
            🔊
        </button>
        <!-- Barra de volumen -->
        <input id="volumeControl" type="range" min="0" max="1" step="0.01" value="1" class="w-32 mt-2">
    </div>

    <!-- Contenido Principal -->
    <div class="bg-white rounded-xl shadow-xl p-8 max-w-lg w-full text-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Bienvenido al Juego</h1>
        <p class="text-gray-600 mb-6">Elige un juego y empieza a divertirte.</p>
        
        <div class="space-y-4">
            <a href="{{ route('adivinapalabra') }}" class="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out">Adivina la Palabra</a>
            <a href="{{ route('sopaletras') }}" class="block bg-green-500 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out">Sopa de Letras</a>
            <a href="{{ route('tresEnRaya') }}" class="block bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out">Tres En Raya</a>
            <a href="{{ route('relax') }}" class="block bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out">Relax</a>
            <a href="{{ route('laberinto') }}" class="block bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out">Laberinto</a>
        </div>
    </div>

    <script src="{{ asset('js/volumen.js') }}"></script>

</body>
</html>
