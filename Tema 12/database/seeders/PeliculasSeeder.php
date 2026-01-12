<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pelicula;
use App\Models\Categoria;

class PeliculasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //crear categorias accion comedia drama terror ciencia ficcion animacion
        $accion=Categoria::create(['nombre'=>'Acción']);
        $comedia=Categoria::create(['nombre'=>'Comedia']);
        $drama=Categoria::create(['nombre'=>'Drama']);
        $terror=Categoria::create(['nombre'=>'Terror']);
        $ciencia_ficcion=Categoria::create(['nombre'=>'Ciencia Ficción']);
        $animacion=Categoria::create(['nombre'=>'Animación']);
        //crear peliculas ejemplo
        $peliculas=[
            //3peliculas por categoria
            //Ación
            ['nombre'=>'Mad Max: Fury Road','categoria_id'=>$accion->id,'imagen'=>'mad_max.jpg','url_imdb'=>'https://www.imdb.com/title/tt1392190/'],
            ['nombre'=>'John Wick','categoria_id'=>$accion->id,'imagen'=>'john_wick.jpg','url_imdb'=>'https://www.imdb.com/title/tt2911666/'],
            ['nombre'=>'Die Hard','categoria_id'=>$accion->id,'imagen'=>'die_hard.jpg','url_imdb'=>'https://www.imdb.com/title/tt0095016/'],
            //Comedia
            ['nombre'=>'Superbad','categoria_id'=>$comedia->id,'imagen'=>'superbad.jpg','url_imdb'=>'https://www.imdb.com/title/tt0829482/'],
            ['nombre'=>'The Hangover','categoria_id'=>$comedia->id,'imagen'=>'the_hangover.jpg','url_imdb'=>'https://www.imdb.com/title/tt1119646/'],
            ['nombre'=>'Step Brothers','categoria_id'=>$comedia->id,'imagen'=>'step_brothers.jpg','url_imdb'=>'https://www.imdb.com/title/tt0838283/'],
            //Drama
            ['nombre'=>'The Shawshank Redemption','categoria_id'=>$drama->id,'imagen'=>'shawshank.jpg','url_imdb'=>'https://www.imdb.com/title/tt0111161/'],
            ['nombre'=>'Forrest Gump','categoria_id'=>$drama->id,'imagen'=>'forrest_gump.jpg','url_imdb'=>'https://www.imdb.com/title/tt0109830/'],
            ['nombre'=>'The Godfather','categoria_id'=>$drama->id,'imagen'=>'godfather.jpg','url_imdb'=>'https://www.imdb.com/title/tt0068646/'],
            //Terror
            ['nombre'=>'The Conjuring','categoria_id'=>$terror->id,'imagen'=>'conjuring.jpg','url_imdb'=>'https://www.imdb.com/title/tt1457767/'],
            ['nombre'=>'Get Out','categoria_id'=>$terror->id,'imagen'=>'get_out.jpg','url_imdb'=>'https://www.imdb.com/title/tt5052448/'],
            ['nombre'=>'A Nightmare on Elm Street','categoria_id'=>$terror->id,'imagen'=>'nightmare_elm_street.jpg','url_imdb'=>'https://www.imdb.com/title/tt0087800/'],
            //Ciencia Ficción
            ['nombre'=>'Inception','categoria_id'=>$ciencia_ficcion->id,'imagen'=>'inception.jpg','url_imdb'=>'https://www.imdb.com/title/tt1375666/'],
            ['nombre'=>'The Matrix','categoria_id'=>$ciencia_ficcion->id,'imagen'=>'matrix.jpg','url_imdb'=>'https://www.imdb.com/title/tt0133093/'],
            ['nombre'=>'Interstellar','categoria_id'=>$ciencia_ficcion->id,'imagen'=>'interstellar.jpg','url_imdb'=>'https://www.imdb.com/title/tt0816692/'],
            //Animación
            ['nombre'=>'Toy Story','categoria_id'=>$animacion->id,'imagen'=>'toy_story.jpg','url_imdb'=>'https://www.imdb.com/title/tt0114709/'],
            ['nombre'=>'Finding Nemo','categoria_id'=>$animacion->id,'imagen'=>'finding_nemo.jpg','url_imdb'=>'https://www.imdb.com/title/tt0266543/'],
            ['nombre'=>'The Lion King','categoria_id'=>$animacion->id,'imagen'=>'lion_king.jpg','url_imdb'=>'https://www.imdb.com/title/tt0110357/'],
        ];
        foreach($peliculas as $pelicula){
            Pelicula::create($pelicula);
        }
        $this->command->info('Películas y categorías creadas con éxito.');
    }
}
