<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PeliculaController;

//poprtada Pública
Route::get('/',[PeliculaController::class,'portada'] )->name('portada');
Route::prefix('api')->group(function(){
    //Rutas API Películas
    Route::get('/peliculas',[PeliculaController::class,'list'])->name('api.peliculas.list');

});

