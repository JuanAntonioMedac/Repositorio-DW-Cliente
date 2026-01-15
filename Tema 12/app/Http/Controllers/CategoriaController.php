<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class CategoriaController extends Controller
{
    public function peliculas($categoriaId){
    $categoria=Categoria::with('peliculas')->findOrFail($categoriaId);
    $peliculas = $categoria->peliculas()->with('categoria')->get();
    return response()->json($peliculas);
    }
}
