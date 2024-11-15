<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JuegoController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return view('home');
})->middleware(['auth', 'verified'])->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/adivinapalabra', [JuegoController::class, 'adivinaPalabra'])->name('adivinapalabra');
Route::get('/sopaletras', [JuegoController::class, 'sopaLetras'])->name('sopaletras');
Route::get('/memoria', [JuegoController::class, 'memoria'])->name('memoria');