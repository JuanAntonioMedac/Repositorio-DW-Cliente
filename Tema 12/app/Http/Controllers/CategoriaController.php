<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class CategoriaController extends Controller
{
    public function peliculas($categoriaId){
    $categoria=Categoria::with('peliculas')->findOrFail($categoriaId);
    return response()->json($categoria->peliculas);
    }
}
