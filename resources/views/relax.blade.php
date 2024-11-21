<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reproductor de Música</title>
    <link rel="stylesheet" href="{{ asset('css/tresEnRaya.css') }}">
    @vite('resources/css/app.css') <!-- Asegúrate de que Tailwind esté configurado -->
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
</head>
<body class="bg-gray-900 text-white min-h-screen flex items-center justify-center">

    <!-- Contenedor principal -->
    <div class="volver-menu">
        <a href="{{ url('/dashboard') }}" class="btn-volver">Volver al Menú</a>
        </div>
    <div class="bg-gray-800 rounded-lg p-6 w-full max-w-lg shadow-lg space-y-6">
        <h2 id="track-title" class="text-3xl font-semibold text-center mb-6 text-gray-100">Selecciona una canción</h2>

        <!-- Elemento de audio -->
        <audio id="audio-player" preload="metadata" class="hidden">
            <source id="audio-source" type="audio/mpeg">
            Tu navegador no soporta la etiqueta de audio.
        </audio>

        <!-- Controles de reproducción -->
        <div class="flex justify-center items-center space-x-6">
            <button onclick="stopAudio()" class="bg-red-500 hover:bg-red-600 p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                <i class="fas fa-stop text-2xl"></i>
            </button>
            <button onclick="pauseAudio()" class="bg-yellow-500 hover:bg-yellow-600 p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                <i class="fas fa-pause text-2xl"></i>
            </button>
            <button onclick="playAudio()" class="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                <i class="fas fa-play text-2xl"></i>
            </button>
        </div>

        <!-- Barra de progreso -->
        <div class="relative w-full h-2 bg-gray-600 rounded overflow-hidden cursor-pointer" onclick="setProgress(event)">
            <div id="progress-bar" class="absolute top-0 left-0 h-full progress-bar"></div>
        </div>

        <!-- Tiempo -->
        <div class="flex justify-between text-sm text-gray-400 mt-2">
            <span id="current-time">0:00</span>
            <span id="duration-time">0:00</span>
        </div>

        <!-- Selector de canción -->
        <div class="mt-6">
            <select id="music-select" onchange="changeTrack()" class="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option value="" disabled selected>Elige una canción</option>
                <option value="{{ asset('music/musica.mp3') }}">Canción 1</option>
                <option value="{{ asset('music/portillo.mp3') }}">Canción 2</option>
                <option value="{{ asset('music/portillo1.mp3') }}">Canción 3</option>
                <option value="{{ asset('music/portillo2.mp3') }}">Canción 4</option>
                <option value="{{ asset('music/musica.mp3') }}">Canción 5</option>
            </select>
        </div>

        <!-- Controles de volumen y velocidad -->
        <div class="mt-4">
            <label for="volume-slider" class="text-gray-400 text-sm">Volumen:</label>
            <input id="volume-slider" type="range" min="0" max="1" step="0.01" class="w-full mt-2 bg-gray-700 rounded-lg" onchange="changeVolume(this.value)">
        </div>
        <div class="mt-4">
            <label for="speed-select" class="text-gray-400 text-sm">Velocidad:</label>
            <select id="speed-select" class="w-full mt-2 p-2 bg-gray-700 rounded-lg" onchange="changeSpeed(this.value)">
                <option value="1">Normal</option>
                <option value="1.25">1.25x</option>
                <option value="1.5">1.5x</option>
                <option value="2">2x</option>
            </select>
        </div>
    </div>

    <!-- Toast para notificaciones -->
    <div id="toast" class="hidden fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded shadow-lg">
        <span id="toast-message"></span>
    </div>

    <script src="{{ asset('js/relax.js') }}"></script>
</body>
</html>
