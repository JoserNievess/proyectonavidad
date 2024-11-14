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
}