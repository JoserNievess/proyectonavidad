<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        // Aquí puedes agregar la lógica que desees para el dashboard
        return view('dashboard.blade.php'); // Asegúrate de tener una vista dashboard.blade.php
    }
}
