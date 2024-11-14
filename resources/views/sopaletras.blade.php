<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/sopaletras.css') }}">
    <title>Sopa de Letras</title>
</head>
<body>
    <div class="volver-menu">
        <a href="{{ url('/home') }}" class="btn-volver">Volver al Menú</a>
    </div>
    <section>
    <h2>SOPA DE LETRAS</h2>
    <div id="sopa"></div>
    <h3>Palabras a encontrar:</h3>
    <ul id="palabras"></ul>
    <button id="reiniciar">Reiniciar Juego</button>
    </section>
    
    <script src="{{ asset('js/sopaletras.js') }}"></script>

</body>
</html>