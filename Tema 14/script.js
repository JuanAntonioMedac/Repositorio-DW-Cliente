window.addEventListener('DOMContentLoaded', () => {
    //EJERCICIO 1: Almacenamiento de preferencias de usuario
    // Se seleccionan los elementos del DOM necesarios
    const nombreUsuario = document.getElementById('nombreUsuario'); 
    const colorFondo = document.getElementById('colorFondo'); 
    
    // Función para cargar las preferencias guardadas al abrir la página
    function cargarPreferenciasAlInicio() {
        const nombre = localStorage.getItem('nombreUsuario'); 
        const color = localStorage.getItem('colorFondo'); 
        if (nombre) {
            nombreUsuario.value = nombre;
        }

        if (color) {
            colorFondo.value = color;
            document.body.style.backgroundColor = color; 
        }
    }
    
    // Se ejecuta la función al cargar la página para restaurar preferencias
    cargarPreferenciasAlInicio();
    
    // Evento al hacer click en "Guardar Preferencias"
    document.getElementById('guardarPreferencias').addEventListener('click', () => {
        const nombre = nombreUsuario.value; 
        const color = colorFondo.value;
        
        if (nombre.trim() !== '') { 
            localStorage.setItem('nombreUsuario', nombre);
            localStorage.setItem('colorFondo', color);
        }  
    });
    
    // Evento al hacer click en "Restablecer Preferencias"
    document.getElementById('restablecerPreferencias').addEventListener('click', () => {
        localStorage.removeItem('nombreUsuario');
        localStorage.removeItem('colorFondo');
        nombreUsuario.value = '';
        colorFondo.value = '#000000';
        document.body.style.backgroundColor = '#ffffff';
        
       
    });
    //EJERCICIO 2: Contador de visitas
    const contadorVisitas = document.getElementById('contadorVisitas');
    const reiniciarContador = document.getElementById('reiniciarContador'); 

    let visitas = localStorage.getItem('visitas') ? parseInt(localStorage.getItem('visitas')) : 0;
    visitas++; 
    localStorage.setItem('visitas', visitas); 
    contadorVisitas.textContent = visitas; 

    // Evento al hacer click en "Reiniciar Contador"
    reiniciarContador.addEventListener('click', () => {
        visitas = 0; 
        localStorage.setItem('visitas', visitas); 
        contadorVisitas.textContent = visitas; 
        document.getElementById('info2').innerHTML = '<div class="alert alert-info" role="alert">Contador reiniciado</div>';
    });


    //EJERCICIO 3: Almacenamiento de formularios
    const formulario = document.getElementById('ej3');
    const nombreInput = document.getElementById('nombreSesion');
    const cursoInput = document.getElementById('cursoSesion');

    function cargarDatosFormulario() {
        const datos = sessionStorage.getItem('datosFormulario');
        if (datos) {
            const datosFormulario = JSON.parse(datos);
            nombreInput.value = datosFormulario.nombre;
            cursoInput.value = datosFormulario.curso;
        }
    }
    
    cargarDatosFormulario();

    function guardarDatosFormulario() {
        const datosFormulario = {  
            nombre: nombreInput.value,
            curso: cursoInput.value
        };
        sessionStorage.setItem('datosFormulario', JSON.stringify(datosFormulario)); 
    }
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); 
        guardarDatosFormulario(); 
        document.getElementById('info3').innerHTML = '<div class="alert alert-success" role="alert">Formulario guardado</div>';
    });


    //EJERCICIO 4: Comparativa localStorage vs sessionStorage
    document.getElementById('guardarLocal').addEventListener('click', () => {
        localStorage.setItem('datoLocal', document.getElementById('datoEnLocal').value);
        document.getElementById('info4').innerHTML = '<div class="alert alert-success" role="alert">Dato guardado en localStorage</div>';
    });
    document.getElementById('guardarSesion2').addEventListener('click', () => { 
        sessionStorage.setItem('datoSesion', document.getElementById('datoEnSesion').value);
        document.getElementById('info4').innerHTML = '<div class="alert alert-success" role="alert">Dato guardado en sessionStorage</div>';
    });
    function mostrarDatos () {
        const datoLocal = localStorage.getItem('datoLocal') ;
        const datoSesion = sessionStorage.getItem('datoSesion') ;
        document.getElementById('datoEnLocal').value = datoLocal ? datoLocal : '';
        document.getElementById('datoEnSesion').value = datoSesion ? datoSesion : '';
    }
    mostrarDatos();



    // EJERCICIO 5: Lista de tareas con localStorage
    const tareaInput = document.getElementById('nuevaTarea');
    const agregarTareaBtn = document.getElementById('agregarTarea');
    const listaTareas = document.getElementById('listaTareas');

    function cargarTareas() {
        const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        listaTareas.innerHTML = '';

        tareas.forEach((tarea) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';

            li.textContent = tarea.texto;

            const eliminarBtn = document.createElement('button');
            eliminarBtn.className = 'btn btn-danger btn-sm';
            eliminarBtn.textContent = 'Eliminar';

            eliminarBtn.addEventListener('click', () => {
                eliminarTarea(tarea.id);
            });

            li.appendChild(eliminarBtn);
            listaTareas.appendChild(li);
        });
    }

    function eliminarTarea(id) {
        const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
        localStorage.setItem('tareas', JSON.stringify(nuevasTareas));
        cargarTareas();
    }

    agregarTareaBtn.addEventListener('click', () => {
        const texto = tareaInput.value.trim();
        if (texto === '') return;

        const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        const nuevaTarea = {            
            texto: texto
        };

        tareas.push(nuevaTarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
        tareaInput.value = '';
        cargarTareas();
    });

    document.getElementById('limpiarTareas').addEventListener('click', () => {
        localStorage.removeItem('tareas');
        cargarTareas();
    });

 

    // Sincronización entre pestañas
    window.addEventListener('storage', (e) => {
        if (e.key === 'tareas') {
            cargarTareas();
        }
    });

    cargarTareas();


});