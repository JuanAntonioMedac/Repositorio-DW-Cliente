<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    public function peliculas(){
        return $this->hasMany(Pelicula::class);
    }
}
