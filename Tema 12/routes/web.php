<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PeliculaController;
use App\Http\Controllers\CategoriaController;

//poprtada Pública
Route::get('/',[PeliculaController::class,'portada'] )->name('portada');
Route::prefix('api')->group(function(){
    //Rutas API Películas
    Route::get('/peliculas',[PeliculaController::class,'list'])->name('api.peliculas.list');

    Route::get('/categorias/{categoriaId}/peliculas',[CategoriaController::class,'peliculas'])->name('api.categorias.');

});

