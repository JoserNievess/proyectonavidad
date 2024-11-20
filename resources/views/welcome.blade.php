<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bienvenido al Juego</title>

    <!-- Vite -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <style>
        /* Fondo dinámico */
        body {
            background: linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb);
            min-height: 100vh;
            margin: 0;
            font-family: 'Inter', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        /* Contenedor principal */
        .container {
            text-align: center;
            color: white;
            z-index: 10;
            width: 100%;
            max-width: 400px;
            padding: 20px;
        }

        /* Fondo de la sección */
        .background {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        h1 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 15px;
            color: #ffffff;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
        }

        p {
            font-size: 1.25rem;
            margin-bottom: 30px;
            color: #ffffff;
            text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
        }

        .btn {
            padding: 16px 32px;
            margin-top: 20px;
            background-color: #ff007f;
            border-radius: 25px;
            color: white;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
            transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
            display: inline-block;
            width: 100%;
            text-align: center;
        }

        .btn:hover {
            transform: translateY(-5px);
            background-color: #ff4c9f;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        /* Animación flotante para los mandos */
        .falling-controller {
            position: absolute;
            animation: float 6s ease-in-out infinite, move 10s ease-in-out infinite;
            will-change: transform;
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
        }

        @keyframes move {
            0% {
                transform: translate(0, 0);
            }
            25% {
                transform: translate(50px, 30px);
            }
            50% {
                transform: translate(-50px, -40px);
            }
            75% {
                transform: translate(-30px, 50px);
            }
            100% {
                transform: translate(0, 0);
            }
        }

        /* Diferentes posiciones iniciales para los mandos */
        .falling-controller:nth-child(1) {
            left: 5%;
            top: 10%;
            animation-duration: 8s;
        }
        .falling-controller:nth-child(2) {
            left: 20%;
            top: 50%;
            animation-duration: 10s;
            animation-delay: 1s;
        }
        .falling-controller:nth-child(3) {
            left: 60%;
            top: 30%;
            animation-duration: 12s;
            animation-delay: 2s;
        }
        .falling-controller:nth-child(4) {
            left: 80%;
            top: 70%;
            animation-duration: 9s;
            animation-delay: 3s;
        }
    </style>
</head>
<body>
    <!-- Música de fondo -->
    <audio autoplay loop>
        <source src="{{ asset('music/musica.mp3') }}" type="audio/mpeg">
        
    </audio>

    <!-- Mandos animados -->
    <div class="falling-controller">
        <img src="{{ asset('img/mando.png') }}" alt="Mando PlayStation" width="80">
    </div>
    <div class="falling-controller">
        <img src="{{ asset('img/apple.png') }}" alt="Control Apple" width="80">
    </div>
    <div class="falling-controller">
        <img src="{{ asset('img/pajaro.png') }}" alt="Control Pájaro" width="80">
    </div>
    <div class="falling-controller">
        <img src="{{ asset('img/prueba.png') }}" alt="Control Prueba" width="80">
    </div>

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

