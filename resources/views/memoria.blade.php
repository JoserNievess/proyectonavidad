<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="{{ asset('css/memoria.css') }}">
  <title>Juego de Memoria</title>
</head>
<body>
  <main>
    <section class="section1">
      <h1>Juego de Memoria</h1>
    <table>
      <tr>
        <td><button id="0" onclick='girar(0)'></button></td>
        <td><button id="1" onclick='girar(1)'></button></td>
        <td><button id="2" onclick='girar(2)'></button></td>
        <td><button id="3" onclick='girar(3)'></button></td>
      </tr>
      <tr>
        <td><button id="4" onclick='girar(4)'></button></td>
        <td><button id="5" onclick='girar(5)'></button></td>
        <td><button id="6" onclick='girar(6)'></button></td>
        <td><button id="7" onclick='girar(7)'></button></td>
      </tr>
      <tr>
        <td><button id="8" onclick='girar(8)'></button></td>
        <td><button id="9" onclick='girar(9)'></button></td>
        <td><button id="10" onclick='girar(10)'></button></td>
        <td><button id="11" onclick='girar(11)'></button></td>
      </tr>
      <tr>
        <td><button id="12" onclick='girar(12)'></button></td>
        <td><button id="13" onclick='girar(13)'></button></td>
        <td><button id="14" onclick='girar(14)'></button></td>
        <td><button id="15" onclick='girar(15)'></button></td>
      </tr>
    </table>
    </section>
    <section class="section2">
      <h2 id="puntaje" class="estadisticas">Puntaje: 0</h2>
      <h2 id="restante"class="estadisticas">Tiempo restante: 40 segundos</h2>
      <h2 id="movimientos"class="estadisticas">Movimientos: 0</h2>
    </section>
  </main>
 
  <script src="{{ asset('js/memoria.js') }}"></script>
</body>
</html>