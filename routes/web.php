<?php
 
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JuegoController;
use App\Http\Controllers\DashboardController;
 
Route::get('/', function () {
    return view('welcome');
});


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
 
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
 
require __DIR__.'/auth.php';
 
Route::get('/adivinapalabra', [JuegoController::class, 'adivinaPalabra'])->name('adivinapalabra');
Route::get('/sopaletras', [JuegoController::class, 'sopaLetras'])->name('sopaletras');
Route::get('/memoria', [JuegoController::class, 'memoria'])->name('memoria');
Route::get('/tresEnRaya', [JuegoController::class, 'tresEnRaya'])->name('tresEnRaya');
