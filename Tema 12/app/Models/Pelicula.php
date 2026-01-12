<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pelicula extends Model
{
    public function categoria(){
        return $this->belongsTo(Categoria::class);
    }
}
