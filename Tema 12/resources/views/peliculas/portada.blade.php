<!doctype html>
<html lang="en">
<head>
    <title>Películas - Portada</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.3.2 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

    <style>
        .pelicula-card {
            transition: transform 0.2s;
        }
        .pelicula-card:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .pelicula-img {
            width: 100%;
            height: 400px;
            object-fit: cover;
        }
        .categoria-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 10;
        }
    </style>
</head>

<body class="bg-light">
<nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
        <a href="" class="navbar-brand">
            <i class="bi bi-film"></i> Catalogo de Películas
        </a>
        <div>
            <a href="" class="btn btn-outline-light btn-sm me-2">
                <i class="bi bi-tags"></i> Categorías
            </a>
            <a href="" class="btn btn-outline-light btn-sm">
                <i class="bi bi-gear"></i> Películas
            </a>
        </div>
    </div>
</nav>

<div class="container my-5">
    <!-- Filtro de Categorías -->
    <div class="row mb-4">
        <div class="col-md-12">
            <div class="card shadow">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-md-3">
                            <h5 class="mb-0">
                                <i class="bi bi-funnel"></i> Filtrar por categorías
                            </h5>
                        </div>
                        <div class="col-md-9">
                            <select id="categoriaSelect" class="form-select form-select-lg" >
                                <option value=""> Todas las categorías </option>
                                @foreach($categorias as $categoria)
                                    <option value="{{ $categoria->id }}">{{ $categoria->nombre }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Área de Películas -->
    <div id="areaPeliculas"></div>

    <!-- Spinner de carga -->
    <div class="text-center py-5 d-none" id="cargandoPeliculas">
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
            <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt-3 text-muted">Cargando películas ...</p>
    </div>
</div>

<footer class="bg-dark text-white text-center py-3">
    <div class="container">
        <p class="mb-0">&copy; 2026 Catalogo de Películas. Todos los derechos reservados.</p>
    </div>
</footer>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    cargarTodasPeliculas();
});
document.getElementById('categoriaSelect').addEventListener('change', function() {
    cargarPeliculasPorCategoria();
});

function mostrarCargando() {
    document.getElementById('cargandoPeliculas').classList.remove('d-none');
    document.getElementById('areaPeliculas').innerHTML = '';
}

function ocultarCargando() {
    document.getElementById('cargandoPeliculas').classList.add('d-none');
}

// Función para cargar todas las películas
async function cargarTodasPeliculas() {
    try {
        mostrarCargando();
        const response = await fetch('/api/peliculas');
        if(!response.ok) throw new Error('Error en la respuesta de la API');
        const peliculas = await response.json();
        mostrarPeliculas(peliculas, 'Todas las Películas');
    } catch(error) {
        console.error('Error al cargar las películas:', error);
        mostrarError('Error al cargar las películas. Por favor, inténtelo de nuevo más tarde.');
    } finally {
        ocultarCargando();
    }
}

// Función para cargar por categoría
async function cargarPeliculasPorCategoria() {
    const categoriaId = document.getElementById('categoriaSelect').value;
    if(!categoriaId) {
        cargarTodasPeliculas();
        return;
    }
    try {
        mostrarCargando();
        const response = await fetch(`/api/categorias/${categoriaId}/peliculas`);
        if(!response.ok) throw new Error('Error al cargar las películas por categoría');
        const peliculas = await response.json();
        const categoriaTexto = document.getElementById('categoriaSelect').selectedOptions[0].text;
        mostrarPeliculas(peliculas, `Películas de la categoría: ${categoriaTexto}`);
    } catch(error) {
        mostrarError('Error al cargar las películas por categoría. Por favor, inténtelo de nuevo más tarde.');
    } finally {
        ocultarCargando();
    }
}

// Función para mostrar las películas en tarjetas
function mostrarPeliculas(peliculas, titulo) {
    const areaPeliculas = document.getElementById('areaPeliculas');
    areaPeliculas.innerHTML = '';

    if (peliculas.length === 0) {
        areaPeliculas.innerHTML = `
            <div class="alert alert-info text-center" role="alert">
                <i class="bi bi-info-circle fs-1"></i>
                <h4 class="mt-3">No hay películas de esta categoría</h4>
                <p>Intente con otra categoría o ver todas las películas.</p>
            </div>`;
        return;
    }

    let html = `
        <div class="mb-4">
            <h2 class="text-center">
                <i class="bi bi-film"></i> ${titulo}
                <span class="badge bg-primary fs-5">${peliculas.length}</span>
            </h2>
        </div>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
    `;

    peliculas.forEach(pelicula => {
        const imagenPelicula = pelicula.imagen || 'https://placehold.co/300x400?text=Sin+Imagen';
        const categoriaNombre = pelicula.categoria ? pelicula.categoria.nombre : 'Sin categoría';

        html += `
            <div class="col">
                <div class="card pelicula-card h-100 shadow-sm">
                    <div class="position-relative">
                        <span class="badge bg-primary categoria-badge">${categoriaNombre}</span>
                        <img src="${imagenPelicula}" alt="${pelicula.nombre}" class="pelicula-img card-img-top"
                            onerror="this.src='https://placehold.co/300x400?text=Error+al+Cargar'">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${pelicula.nombre}</h5>
                        <div class="mt-auto">
                            ${pelicula.url_imdb ? `
                                <a href="${pelicula.url_imdb}" target="_blank" class="btn btn-warning w-100">
                                    <i class="bi bi-link-45deg"></i> Ver en IMDB
                                </a>` : `
                                <button class="btn btn-secondary w-100" disabled>
                                    <i class="bi bi-x-circle"></i> Sin enlace IMDB
                                </button>`}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    areaPeliculas.innerHTML = html;
}

// Función para mostrar errores
function mostrarError(mensaje) {
    const areaPeliculas = document.getElementById('areaPeliculas');
    areaPeliculas.innerHTML = `
        <div class="alert alert-danger text-center" role="alert">
            <i class="bi bi-exclamation-triangle fs-1"></i>
            <h4 class="mt-3">¡Error!</h4>
            <p>${mensaje}</p>
            <button class="btn btn-danger" onclick="cargarTodasPeliculas()">
                <i class="bi bi-arrow-clockwise"></i> Reintentar
            </button>
        </div>
    `;
}
</script>

</body>
</html>
