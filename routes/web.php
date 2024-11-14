<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JuegoController;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/adivinapalabra', [JuegoController::class, 'adivinaPalabra'])->name('adivinapalabra');
Route::get('/sopaletras', [JuegoController::class, 'sopaLetras'])->name('sopaletras');