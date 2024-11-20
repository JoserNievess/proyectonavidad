<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <!-- Custom Styles -->
    <style>
        body {
            background: linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb);
            min-height: 100vh;
            margin: 0;
            font-family: 'Figtree', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        .container {
            text-align: center;
            color: white;
            z-index: 10;
            width: 100%;
            max-width: 400px;
            padding: 20px;
        }

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
    </style>
</head>
<body>
    <div class="container">
        <div class="background">
            {{ $slot }}
        </div>
    </div>
</body>
</html>
