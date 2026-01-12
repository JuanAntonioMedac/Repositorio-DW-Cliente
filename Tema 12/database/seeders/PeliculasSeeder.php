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
        ['nombre'=>'Mad Max: Fury Road','categoria_id'=>$accion->id,'imagen'=>'https://image.tmdb.org/t/p/w300/kqjL17yufvn9OVLyXYpvtyrFfak.jpg','url_imdb'=>'https://www.imdb.com/title/tt1392190/'],
        ['nombre'=>'John Wick','categoria_id'=>$accion->id,'imagen'=>'https://image.tmdb.org/t/p/w300/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg','url_imdb'=>'https://www.imdb.com/title/tt2911666/'],
        ['nombre'=>'Die Hard','categoria_id'=>$accion->id,'imagen'=>'https://image.tmdb.org/t/p/w300/zkXsAJ7X43WkYl4YJ9O7h3TfT0a.jpg','url_imdb'=>'https://www.imdb.com/title/tt0095016/'],

        // Comedia
        ['nombre'=>'Superbad','categoria_id'=>$comedia->id,'imagen'=>'https://image.tmdb.org/t/p/w300/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg','url_imdb'=>'https://www.imdb.com/title/tt0829482/'],
        ['nombre'=>'The Hangover','categoria_id'=>$comedia->id,'imagen'=>'https://image.tmdb.org/t/p/w300/uluhlXubGu2Qfz0IA8MbGxWqx7a.jpg','url_imdb'=>'https://www.imdb.com/title/tt1119646/'],
        ['nombre'=>'Step Brothers','categoria_id'=>$comedia->id,'imagen'=>'https://image.tmdb.org/t/p/w300/4Hod7gwLTZy3U9UHnm2cCz8xxQ2.jpg','url_imdb'=>'https://www.imdb.com/title/tt0838283/'],

        // Drama
        ['nombre'=>'The Shawshank Redemption','categoria_id'=>$drama->id,'imagen'=>'https://image.tmdb.org/t/p/w300/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg','url_imdb'=>'https://www.imdb.com/title/tt0111161/'],
        ['nombre'=>'Forrest Gump','categoria_id'=>$drama->id,'imagen'=>'https://image.tmdb.org/t/p/w300/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg','url_imdb'=>'https://www.imdb.com/title/tt0109830/'],
        ['nombre'=>'The Godfather','categoria_id'=>$drama->id,'imagen'=>'https://image.tmdb.org/t/p/w300/3bhkrj58Vtu7enYsRolD1fZdja1.jpg','url_imdb'=>'https://www.imdb.com/title/tt0068646/'],

        // Terror
        ['nombre'=>'The Conjuring','categoria_id'=>$terror->id,'imagen'=>'https://image.tmdb.org/t/p/w300/l56Jf7TOyRkW5h4C0p4kucL9rjC.jpg','url_imdb'=>'https://www.imdb.com/title/tt1457767/'],
        ['nombre'=>'Get Out','categoria_id'=>$terror->id,'imagen'=>'https://image.tmdb.org/t/p/w300/yT1S7I8jJ5sH8Qe7Wb1jJX9sV3j.jpg','url_imdb'=>'https://www.imdb.com/title/tt5052448/'],
        ['nombre'=>'A Nightmare on Elm Street','categoria_id'=>$terror->id,'imagen'=>'https://image.tmdb.org/t/p/w300/q7H7tKpBzHZ9TXgAoXqy9qQK4cZ.jpg','url_imdb'=>'https://www.imdb.com/title/tt0087800/'],

        // Ciencia Ficción
        ['nombre'=>'Inception','categoria_id'=>$ciencia_ficcion->id,'imagen'=>'https://image.tmdb.org/t/p/w300/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg','url_imdb'=>'https://www.imdb.com/title/tt1375666/'],
        ['nombre'=>'The Matrix','categoria_id'=>$ciencia_ficcion->id,'imagen'=>'https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg','url_imdb'=>'https://www.imdb.com/title/tt0133093/'],
        ['nombre'=>'Interstellar','categoria_id'=>$ciencia_ficcion->id,'imagen'=>'https://image.tmdb.org/t/p/w300/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg','url_imdb'=>'https://www.imdb.com/title/tt0816692/'],

        // Animación
        ['nombre'=>'Toy Story','categoria_id'=>$animacion->id,'imagen'=>'https://image.tmdb.org/t/p/w300/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg','url_imdb'=>'https://www.imdb.com/title/tt0114709/'],
        ['nombre'=>'Finding Nemo','categoria_id'=>$animacion->id,'imagen'=>'https://image.tmdb.org/t/p/w300/2zL0AB2edQH2agQ4Y3a2yL2x3jr.jpg','url_imdb'=>'https://www.imdb.com/title/tt0266543/'],
        ['nombre'=>'The Lion King','categoria_id'=>$animacion->id,'imagen'=>'https://image.tmdb.org/t/p/w300/2bXbqYdUdNVa8VIWXVfclP2ICtc.jpg','url_imdb'=>'https://www.imdb.com/title/tt0110357/'],

        ];
        foreach($peliculas as $pelicula){
            Pelicula::create($pelicula);
        }
        $this->command->info('Películas y categorías creadas con éxito.');
    }
}
