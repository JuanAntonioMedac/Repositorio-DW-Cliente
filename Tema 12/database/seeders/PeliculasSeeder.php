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
             // Acción
            ['nombre'=>'The Dark Knight','categoria_id'=>$accion->id,'imagen'=>'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg','url_imdb'=>'https://www.imdb.com/title/tt0468569/'],
            ['nombre'=>'Gladiator','categoria_id'=>$accion->id,'imagen'=>'https://image.tmdb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg','url_imdb'=>'https://www.imdb.com/title/tt0172495/'],
            ['nombre'=>'The Avengers','categoria_id'=>$accion->id,'imagen'=>'https://image.tmdb.org/t/p/original/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg','url_imdb'=>'https://www.imdb.com/title/tt0848228/'],

            // Comedia
            [
                'nombre' => 'Superbad',
                'categoria_id' => $comedia->id,
                'imagen' => 'https://image.tmdb.org/t/p/original/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt0829482/'
            ],
            [
                'nombre' => 'The Hangover',
                'categoria_id' => $comedia->id,
                'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_FMjpg_UX490_.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt1119646/'
            ],
            [
                'nombre' => 'Step Brothers',
                'categoria_id' => $comedia->id,
                'imagen' => 'https://m.media-amazon.com/images/M/MV5BODkxOGRkY2UtOTA4Zi00YjE3LTk4NTItOGY3YWU4MWRlODZmXkEyXkFqcGc@._V1_FMjpg_UX508_.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt0838283/'
            ],
            // Drama
            ['nombre'=>'The Godfather: Part II','categoria_id'=>$drama->id,'imagen'=>'https://image.tmdb.org/t/p/original/amvmeQWheahG3StKwIE1f7jRnkZ.jpg','url_imdb'=>'https://www.imdb.com/title/tt0071562/'],
            ['nombre'=>'Schindler\'s List','categoria_id'=>$drama->id,'imagen'=>'https://image.tmdb.org/t/p/original/c8Ass7acuOe4za6DhSattE359gr.jpg','url_imdb'=>'https://www.imdb.com/title/tt0108052/'],
            ['nombre'=>'Fight Club','categoria_id'=>$drama->id,'imagen'=>'https://image.tmdb.org/t/p/original/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg','url_imdb'=>'https://www.imdb.com/title/tt0137523/'],

            // Terror
             [
                'nombre' => 'It',
                'categoria_id' => $terror->id,
                'imagen' => 'https://m.media-amazon.com/images/M/MV5BMjIzZWM4NjktMjZjZS00ZTA3LWJhODEtNzE1MWFkNDEzODVlXkEyXkFqcGc@._V1_FMjpg_UY4096_.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt1396484/'
            ],
            [
                'nombre' => 'The Ring',
                'categoria_id' => $terror->id,
                'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTg1MjQzNjk2Nl5BMl5BanBnXkFtZTYwMjYwNDk5._V1_FMjpg_UX261_.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt0298130/'
            ],
            ['nombre'=>'A Quiet Place','categoria_id'=>$terror->id,'imagen'=>'https://image.tmdb.org/t/p/original/nAU74GmpUk7t5iklEp3bufwDq4n.jpg','url_imdb'=>'https://www.imdb.com/title/tt6644200/'],

             // Ciencia Ficción
             [
                'nombre' => 'The Matrix',
                'categoria_id' => $ciencia_ficcion->id,
                'imagen' => 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt0133093/'
            ],
            [
                'nombre' => 'Interstellar',
                'categoria_id' => $ciencia_ficcion->id,
                'imagen' => 'https://m.media-amazon.com/images/M/MV5BNTE0MmZiNGEtOGY3NS00NDcyLWFiYTItM2IwMWI4YzBkMzk3XkEyXkFqcGc@._V1_FMjpg_UY4134_.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt0816692/'
            ],
            ['nombre'=>'Inception','categoria_id'=>$ciencia_ficcion->id,'imagen'=>'https://image.tmdb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg','url_imdb'=>'https://www.imdb.com/title/tt1375666/'],

            // Animación
            ['nombre'=>'Spirited Away','categoria_id'=>$animacion->id,'imagen'=>'https://image.tmdb.org/t/p/original/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg','url_imdb'=>'https://www.imdb.com/title/tt0245429/'],
            ['nombre'=>'Coco','categoria_id'=>$animacion->id,'imagen'=>'https://image.tmdb.org/t/p/original/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg','url_imdb'=>'https://www.imdb.com/title/tt2380307/'],
            ['nombre'=>'Moana','categoria_id'=>$animacion->id,'imagen'=>'https://image.tmdb.org/t/p/original/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg','url_imdb'=>'https://www.imdb.com/title/tt3521164/'],
         
        ];
        foreach($peliculas as $pelicula){
            Pelicula::create($pelicula);
        }
        $this->command->info('Películas y categorías creadas con éxito.');
    }
}
