<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JuegoController extends Controller
{
    public function adivinaPalabra()
    {
        return view('adivinapalabra');
    }

    public function sopaLetras()
    {
        return view('sopaletras');
    }
    
    public function tresEnRaya()
    {
        return view('tresEnRaya');
    }
    public function laberinto()
    {
        return view('laberinto');
    }
}