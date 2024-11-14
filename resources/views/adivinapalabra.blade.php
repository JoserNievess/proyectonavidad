<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/adivinapalabra.css') }}">
    <title>Adivina la Palabra</title>
</head>
<body>
    <div class="volver-menu">
        <a href="{{ url('/home') }}" class="btn-volver">Volver al Menú</a>
    </div>
    <section>
        <h2>ADIVINA LA PALABRA</h2>
        <div id="ayuda"></div>
        <div id="palabra"></div>
        <h3>Intentos restantes: <span id="intentos">5</span></h3>
        <h3>Letras ingresadas: <span id="letrasIngresadas"></span></h3>
    </section>
    
    <script src="{{ asset('js/adivinapalabra.js') }}"></script>
</body>
</html>