<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;
use App\Models\Pelicula;

class PeliculaController extends Controller
{
    public function portada(){
        $categorias=Categoria::all();
        return view('peliculas.portada',compact('categorias'));
    }
    public function list(){
        $peliculas=Pelicula::with('categoria')->get();
        return response()->json($peliculas);
    }
}
