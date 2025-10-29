/* ===================================
   TEMA 6 - OBJETOS Y ARRAYS
   EJERCICIOS PARA ESTUDIANTES
   ===================================

   INSTRUCCIONES:
   1. Compvara cada función siguiendo los comentarios TODO
   2. No modifiques los nombres de las funciones ni variables principales
   3. Usa solo JavaScript vanilla (sin librerías)
   4. Todas las salidas deben mostrarse en el DOM usando innerHTML
   5. Testea cada ejercicio antes de continuar

   RECORDATORIO DE SINTAXIS:
   - Usar function nombreFuncion() {} (NO arrow functions)
   - Usar var para declarar variables
   - Usar document.getElementById() para seleccionar elementos
   - Usar innerHTML para mostrar resultados en el DOM
*/

// ===================================
// EJERCICIO 1: CREAR OBJETO ESTUDIANTE
// ===================================

function ejercicio1() {
    // TODO: Crear un objeto estudiante con las siguientes propiedades:
    // - nombre: "María"
    // - apellidos: "García López"
    // - edad: 20
    // - curso: "2º DAW"
    // - mostrarInfo: function() que retorne HTML con toda la información

    var estudiante = {
        // TODO: Compvarar las propiedades del objeto
        nombre: "María",
        apellidos: "García López",
        edad: 20,
        curso: "2º DAW",

        mostrarInfo: function () {
            // TODO: Retornar HTML con la información del estudiante
            // Sugerencia: usar template strings o concatenación
            return `
            <div class="">
                <p><b>Estudiante</b></p>
                <p>Nombre: ${this.nombre}</p>
                <p>Apellidos: ${this.apellidos}</p>
                <p>Edad ${this.edad}</p>
                <p>Curso ${this.curso}</p>
            </div>
            `; // Cambiar esta línea
        }
    };

    // TODO: Mostrar el resultado en el DOM
    document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();
}

// ===================================
// EJERCICIO 2: ARRAY DE COLORES
// ===================================

// Variable global para el array de colores
var colores = ["rojo", "azul", "verde"];

function agregarColor() {
    var color=document.getElementById("color-input");
    // TODO: Obtener el valor del input con id "color-input"
    // TODO: Agregar el color al array usando push()
    if (color.value!="") {
        colores.push(color.value);
        color.value="";
        document.getElementById("resultado-ej2").innerHTML=`<div class="alert alert-info">Color añadido</div>`;
    } else {
        document.getElementById("resultado-ej2").innerHTML=`<div class="alert alert-danger text-danger">Texto requerido</div>`;
        color.focus();
    }
    
    // TODO: Limpiar el input
    // TODO: Mostrar mensaje de confirmación
    
    
}

function eliminarUltimoColor() {
    // TODO: Eliminar el último elemento del array usando pop()
    // TODO: Mostrar mensaje indicando qué color se eliminó
    // TODO: Si el array está vacío, mostrar mensaje apropiado
    var ultimo=colores.pop();
   if (colores[0]) {
        document.getElementById("resultado-ej2").innerHTML=`<div class="alert alert-warning text-danger">${ultimo} Eliminado</div>`;
    }else{
        document.getElementById("resultado-ej2").innerHTML=`<div class="alert alert-danger text-danger">No hay colores que borrar</div>`;

    }
    
}

function mostrarColores() {
    // TODO: Mostrar todos los colores del array
    // TODO: Crear HTML con la lista de colores
    // Sugerencia: usar un bucle for para crear la lista

    var html = "<h5>Lista de Colores:</h5><ul>";
    // TODO: Compvarar el bucle para mostrar los colores
    colores.forEach(color => {
        html+=`<li>${color}</li>`;
    });
    html += "</ul>";
    
    document.getElementById("resultado-ej2").innerHTML = html;
}

// ===================================
// EJERCICIO 3: CATÁLOGO DE PRODUCTOS
// ===================================

var productos = []; // Array que contendrá los objetos producto

function cargarProductos() {
    // TODO: Crear array con al menos 5 objetos producto
    // Cada producto debe tener: nombre, precio, categoria
    productos = [
        // TODO: Compvarar con objetos producto
        { nombre: "Laptop", precio: 899, categoria: "Electrónicos" },
        { nombre: "Teclado Mecánico", precio: 39, categoria: "Accesorios" },
        { nombre: "Silla Gamer", precio: 199, categoria: "Muebles" },
        { nombre: "Cámara Web", precio: 149, categoria: "Electrónicos" },
        { nombre: "Mouse Inalámbrico", precio: 49, categoria: "Accesorios" },
        
    ];

    mostrarProductos(productos);
}

function ordenarPorPrecio() {
    // TODO: Ordenar el array productos por precio de menor a mayor
    // Pista: usar el método sort() con función comparadora
   productos= productos.sort(function(a,b){
        return a.precio - b.precio;
   });

    mostrarProductos(productos);
}

function filtrarProductosCaros() {
    // TODO: Filtrar productos con precio mayor a 50€
    // Pista: usar el método filter()
    var productosCaros = [];
    productos= productos.filter(function(a){
        if(a.precio>50){
            productosCaros.push(a);
        }
    });
     // TODO: Implementar el filtro
    mostrarProductos(productosCaros);
}

function mostrarProductos(arrayProductos) {
    // TODO: Mostrar los productos en formato HTML
    // Crear tarjetas o lista con nombre, precio y categoría

    var html = `<div class="row">`;
    // TODO: Recorrer el array y crear HTML para cada producto
    arrayProductos.forEach(producto => {
        html += `<div class="card col-2  m-3">
                    <div>
                        <p class="text-center"><b>${producto.nombre}</b></p>
                        <p class="text-success"><b class="text-dark">Precio:</b> ${producto.precio}€</p>
                        <b >Categoria:</b> <p class="badge text-bg-secondary">${producto.categoria}</p>
                    </div>
                 </div>` ;

    });
    html += `</div>`;
    document.getElementById("resultado-ej3").innerHTML = html;
}

// ===================================
// EJERCICIO 4: ESTUDIANTE CON NOTAS
// ===================================

var estudianteNotas = {
    nombre: "Carlos Ruiz",
    notas: [],

    agregarNota: function (nota) {
        
        // TODO: Validar que la nota esté entre 0 y 10
        // TODO: Agregar la nota al array de notas
        // TODO: Mostrar mensaje de confirmación
        if (nota>=0 && nota<=10){
            this.notas.push(nota);
            document.getElementById("resultado-ej4").innerHTML = `<div class="alert alert-info text-primary"><b>Nota</b> añadida</div>`;
            document.getElementById("resultado-ej4").innerHTML += "<p>Notas: ";
            this.notas.forEach(element => {
                document.getElementById("resultado-ej4").innerHTML += `${element}, `
            });
            document.getElementById("resultado-ej4").innerHTML += "</p>";
        }else{
            document.getElementById("resultado-ej4").innerHTML = `<div class="alert alert-danger text-danger">No es una <b>Nota</b> válida</div>`;
        }
        
       


    },

    calcularPromedio: function () {
        // TODO: Calcular el promedio de todas las notas
        // TODO: Retornar el promedio redondeado a 2 decimales
        // Pista: usar reduce() o un bucle for
        var promedioNotas = this.notas.reduce((acumulador,numero) => acumulador + numero, 0);
        promedioNotas/=this.notas.length;
        if (estudianteNotas.notas[0]) {
            return  `<p> El promedio es: ${ promedioNotas.toFixed(2)}</p>`;
        }else{
            return `<div class="alert alert-warning text-warning">No hay <b>notas</b> para calcular el <b>promedio</b></div>`;
        } 
    },

    mostrarNotas: function () {
        // TODO: Retornar HTML con todas las notas
        // TODO: Incluir el promedio si hay notas
        if (estudianteNotas.notas[0]) {
            var notasMostradas="<p>Notas: ";
            this.notas.forEach(element => {
                notasMostradas+= `${element}, `
            });
               
            notasMostradas+=` </p>${estudianteNotas.calcularPromedio()}`;
            return notasMostradas; // Cambiar esta línea
        
        }else{
            return  `<div class="alert alert-warning text-warning">No hay <b>notas</b> para mostrar</div>`;


        }
       
    }
};

function agregarNota() {
    // TODO: Obtener el valor del input de nota
    // TODO: Convertir a número
    // TODO: Llamar al método agregarNota del objeto
    // TODO: Limpiar el input
    // TODO: Actualizar la visualización
    var nuevaNota=document.getElementById("nota-input");
    var nota= parseFloat(nuevaNota.value);
    estudianteNotas.agregarNota(nota);
    nuevaNota.value="";
    nuevaNota.focus();
}

function calcularPromedio() {
    // TODO: Llamar al método calcularPromedio
    // TODO: Mostrar el resultado en el DOM
    var promedio=estudianteNotas.calcularPromedio();
    document.getElementById("resultado-ej4").innerHTML =promedio;

}

function mostrarNotasEstudiante() {
    // TODO: Llamar al método mostrarNotas
    // TODO: Mostrar el resultado en el DOM
    var html= estudianteNotas.mostrarNotas();
    document.getElementById("resultado-ej4").innerHTML = `<div class="">${html}</div>`
}

// ===================================
// EJERCICIO 5: GESTIÓN DE EMPLEADOS
// ===================================

var empleados = [];

function cargarEmpleados() {
    // TODO: Crear array con al menos 6 objetos empleado
    // Cada empleado: nombre, departamento, salario, antiguedad
    empleados = [
        { nombre: "Ana Pérez", departamento: "Recursos Humanos", salario: 2500, antiguedad: 3 },
        { nombre: "Luis Gómez", departamento: "Desarrollo", salario: 3500, antiguedad: 5 },
        { nombre: "Marta Sánchez", departamento: "Marketing", salario: 2800, antiguedad: 2 },
        { nombre: "Javier Torres", departamento: "Finanzas", salario: 4000, antiguedad: 7 },
        { nombre: "Laura Martínez", departamento: "Ventas", salario: 3000, antiguedad: 4 },
        { nombre: "Carlos Ruiz", departamento: "Soporte", salario: 2200, antiguedad: 1 }
    ];

    mostrarEmpleados(empleados);
}

function buscarPorDepartamento() {
    // TODO: Obtener el departamento del input
    // TODO: Filtrar empleados por departamento
    // TODO: Mostrar los resultados
    if (empleados[0]) {
        
        var departamento = document.getElementById("departamento-input").value; // TODO: Obtener del input
        var empleadosDepto = []; // TODO: Implementar filtro
        empleados.filter(function(a){
            if(a.departamento === departamento){
                empleadosDepto.push(a);
            }else{
                document.getElementById("resultado-ej5").innerHTML =   `<div class="alert alert-warning text-warning">No existe ese <b>departamento</b></div>`
            }
        });
        }else{
                document.getElementById("resultado-ej5").innerHTML =   `<div class="alert alert-danger text-danger">No se han  <b>cargado los empleados</b></div>`

        }

    mostrarEmpleados(empleadosDepto);
}

function filtrarSalarioAlto() {
    // TODO: Filtrar empleados con salario > 3000€
    if (empleados[0]) {
        var empleadosAltoSalario = []; // TODO: Implementar filtro
        empleados.filter(function(a){
            if(a.salario >3000){
                empleadosAltoSalario.push(a);
            }
        });
        mostrarEmpleados(empleadosAltoSalario);
        if (!empleadosAltoSalario[0]) {
            document.getElementById("resultado-ej5").innerHTML =   `<div class="alert alert-warning text-warning">No existe nadie con ese <b>sueldazo</b></div>`
        
        }
    }else{
            document.getElementById("resultado-ej5").innerHTML =   `<div class="alert alert-danger text-danger">No se han  <b>cargado los empleados</b></div>`

    }

    
}

function mostrarEmpleados(arrayEmpleados) {
    // TODO: Mostrar empleados en formato HTML
    // Incluir nombre, departamento, salario

    var html = "";
    // TODO: Crear HTML para cada empleado
    arrayEmpleados.forEach(empleado => {
        html += `<div class="card m-2">
                    <div class="card-body">
                        <h5 class="card-title">${empleado.nombre}</h5>
                        <p class="card-text"><b>Departamento:</b> ${empleado.departamento}</p>
                        <p class="card-text"><b>Salario:</b> ${empleado.salario}€</p>
                        <p class="card-text"><b>Antigüedad:</b> ${empleado.antiguedad} años</p>
                    </div>
                 </div>`;
    });

    document.getElementById("resultado-ej5").innerHTML = html;
}

// ===================================
// EJERCICIO 6: MÉTODOS AVANZADOS DE ARRAYS
// ===================================

var ciudades = [];

function crearArrayCiudades() {
    // TODO: Crear array con ciudades españolas
    ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga"];

    // TODO: Mostrar el array original
    var html = "<h5>Ciudades originales:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function eliminarDelMedio() {
    // TODO: Usar splice para eliminar elementos del medio
    // TODO: Mostrar qué elementos se eliminaron
    // TODO: Mostrar el array resultante
    var eliminadas= ciudades.splice(2,2);
    var html = "<h5>Ciudades restantes:</h5>" + ciudades.join(", ");
        html += "<br><h5>Ciudades eliminadas:</h5>" + eliminadas.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;

}

function extraerConSlice() {
    // TODO: Usar slice para extraer una porción del array
    // TODO: Mostrar la porción extraída
    // TODO: Mostrar que el array original no se modifica
    var extraidas= ciudades.slice(2,4);
    var html = "<h5>Ciudades restantes:</h5>" + ciudades.join(", ");
        html += "<br><h5>Ciudades extraidas:</h5>" + extraidas.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function buscarMadrid() {
    // TODO: Usar find() para buscar "Madrid"
    // TODO: Usar indexOf() para encontrar su posición
    // TODO: Mostrar los resultados
    var html = "Madrid esta en la posición " + ciudades.indexOf(ciudades.find(ciudad => ciudad=="Madrid"));
    document.getElementById("resultado-ej6").innerHTML = html;
}

// ===================================
// EJERCICIO 7: CONSTRUCTOR DE VEHÍCULOS
// ===================================

// TODO: Crear función constructora Vehiculo
var Vehiculo = {
    marca: "",
    modelo: "",
    año: 0,
    velocidad: 0,

    crearVehiculo: function (marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.velocidad = 0;
    },

    acelerar: function () {
        this.velocidad += 10;
    },

    mostrarInfo: function () {
        return `<div class="card m-2">
                    <div class="card-body">
                        <h5 class="card-title">${this.marca}</h5>
                        <p class="card-text"><b>Modelo:</b> ${this.modelo}</p>
                        <p class="card-text"><b>Año:</b> ${this.año}</p>
                        <p class="card-text"><b>Velocidad:</b> ${this.velocidad} km/h</p>
                    </div>
                 </div>`;
    }
};


var vehiculos = [];

function crearVehiculos() {
    // TODO: Crear varios objetos usando el constructor
    // TODO: Agregar al array vehiculos
    var v1 = Object.create(Vehiculo);
    v1.crearVehiculo("Tesla", "Model S", 2023);

    var v2 = Object.create(Vehiculo);
    v2.crearVehiculo("Nissan", "Altima", 2021);

    var v3 = Object.create(Vehiculo);
    v3.crearVehiculo("Hyundai", "Elantra", 2022);

    var v4 = Object.create(Vehiculo);
    v4.crearVehiculo("Volkswagen", "Golf", 2020);

    var v5 = Object.create(Vehiculo);
    v5.crearVehiculo("Mazda", "CX-5", 2021);

    var v6 = Object.create(Vehiculo);
    v6.crearVehiculo("Kia", "Sportage", 2023);

    vehiculos.push(v1, v2, v3, v4, v5, v6);



    mostrarInfoVehiculos();
}

function acelerarTodos() {
    // TODO: Llamar al método acelerar() de todos los vehículos
    // TODO: Actualizar la visualización
    
    vehiculos.forEach(element => {
       element.acelerar();
    });

   mostrarInfoVehiculos();
}

function mostrarInfoVehiculos() {
    // TODO: Mostrar información de todos los vehículos
    var html = "";
    // TODO: Recorrer array y mostrar info de cada vehículo
    vehiculos.forEach(element => {
      html+=  element.mostrarInfo();
    });

    document.getElementById("resultado-ej7").innerHTML = html;
}

// ===================================
// EJERCICIO 8: MATRIZ DE NÚMEROS
// ===================================

var matriz = [];

function crearMatriz() {
    // TODO: Crear matriz 3x3 con números aleatorios
    // Pista: usar bucles anidados y Math.random()
    matriz = [];
    for (let index = 0; index < 3; index++) {
       var random1 =Math.floor(Math.random() * 10) + 1;
       var random2 =Math.floor(Math.random() * 10) + 1;
       var random3 =Math.floor(Math.random() * 10) + 1;
       matriz.push([random1,random2,random3])
        
    }

    mostrarMatriz();
}

function sumarDiagonal() {
    // TODO: Calcular la suma de la diagonal principal
    // TODO: Mostrar el resultado
    var diagonal=0;
    
    for (let index = 0; index < matriz.length; index++) {
        diagonal+=matriz[index][index];
        
    }


    document.getElementById("resultado-ej8").innerHTML = `<div class="alert alert-info">La suma de la diagonal es: <b>${diagonal}</b></div>`;
}

function mostrarMatriz() {
    // TODO: Mostrar la matriz en formato tabla HTML
    var html = "<h5>Matriz 3x3:</h5><table class='table table-bordered text-center'>";

    // TODO: Crear filas y celdas de la tabla
    matriz.forEach(element => {
       html+= "<tr>";
       element.forEach(numero =>  {
            html+= `<td> ${numero}</td>`;
       });
            
       html+= "</tr>";
    });



    html += "</table>";
    document.getElementById("resultado-ej8").innerHTML = html;
}

// ===================================
// EJERCICIO 9: MÉTODOS FUNCIONALES
// ===================================

var numeros = [];

function crearArrayNumeros() {
    // TODO: Crear array con números del 1 al 10
    numeros = [1,2,3,4,5,6,7,8,9,10]; // TODO: Comparar

    mostrarArray("Array original", numeros);
}

function duplicarConMap() {
    // TODO: Usar map() para duplicar todos los números
    var duplicados = []; // TODO: Implementar map
    
    duplicados=numeros.map(numeros=>numeros*2);
    mostrarArray("Números duplicados", duplicados);
}

function filtrarPares() {
    // TODO: Usar filter() para obtener solo números pares
    var pares = []; // TODO: Implementar filter
    pares=numeros.filter(numeros=>numeros%2==0);

    mostrarArray("Números pares", pares);
}

function sumarConReduce() {
    // TODO: Usar reduce() para sumar todos los números
    var suma = 0; // TODO: Implementar reduce
    suma=numeros.reduce((acumulado,numero)=>acumulado+numero,0);

    document.getElementById("resultado-ej9").innerHTML +=
        "<div class='alert alert-success'>Suma total: " + suma + "</div>";
}

function mostrarArray(titulo, array) {
    var html = "<h6>" + titulo + ":</h6>" + array.join(", ") + "<br>";
    document.getElementById("resultado-ej9").innerHTML = html;
}

// ===================================
// EJERCICIO 10: BIBLIOTECA DE LIBROS
// ===================================

var biblioteca = [];

function agregarLibro() {
    // TODO: Obtener valores de los inputs
    var titulo = document.getElementById("libro-titulo").value; // TODO: Obtener del input
    var autor = document.getElementById("libro-autor").value;  // TODO: Obtener del input
    var año = parseFloat(document.getElementById("libro-year").value);  // TODO: Obtener y convertir a número
    var genero = document.getElementById("libro-genero");
    var generoSeleccionado = genero.options[genero.selectedIndex].text;
    

    var errores=[];
    // TODO: Validar que todos los campos estén compvaros
    if (titulo == "") {
        errores.push("Título");
    }
    if (autor == "") {
        errores.push("Autor");
    }
    if (isNaN(año)) {
        errores.push("Año");
    }
    if (generoSeleccionado == "" || generoSeleccionado == "Género") {
        errores.push("Género");
    }

    if (errores[0]) {
        if(errores.length>1){
            var html = "<div class='alert alert-danger text-danger'><b>" + errores.join(", ") + "</b> no son valores válidos</div>";
            document.getElementById("resultado-ej10").innerHTML = html;
        }else{
            var html = "<div class='alert alert-danger text-danger'><b>" + errores.join(", ") + "</b> no es un valor válido</div>";
            document.getElementById("resultado-ej10").innerHTML = html;
        }
    } else {
        // Crear objeto libro y agregarlo a la biblioteca
        var libro = {
            titulo: titulo,
            autor: autor,
            año: año,
            genero: generoSeleccionado
        };

        biblioteca.push(libro);

        // Limpiar los inputs
        document.getElementById("libro-titulo").value = "";
        document.getElementById("libro-autor").value = "";
        document.getElementById("libro-year").value = "";
        if (genero) genero.selectedIndex = 0;

        // Mostrar mensaje de confirmación y actualizar visualización
        document.getElementById("resultado-ej10msj").innerHTML = "<div class='alert alert-success'>Libro añadido correctamente</div>";
        mostrarBiblioteca();
    }
}
function filtrarPorGenero() {
    // TODO: Obtener género seleccionado
    // TODO: Filtrar libros por género
    document.getElementById("resultado-ej10msj").innerHTML="";
    var librosFiltrados = []; // TODO: Implementar filter
    var genero = document.getElementById("libro-genero");
    var generoSeleccionado = genero.options[genero.selectedIndex].text;
    biblioteca.filter(function(a){
            if(a.genero == generoSeleccionado){
                librosFiltrados.push(a);
            }
            
    });

    mostrarLibros(librosFiltrados);
}

function librosRecientes() {
    document.getElementById("resultado-ej10msj").innerHTML="";
    // TODO: Filtrar libros publicados después del 2020
    var recientes = []; // TODO: Implementar filter
    biblioteca.filter(function(a){
            if(a.año > 2020){
                recientes.push(a);
            }
            
    });
    mostrarLibros(recientes);
}

function ordenarPorTitulo() {
    document.getElementById("resultado-ej10msj").innerHTML="";
    // TODO: Ordenar libros por título alfabéticamente
    
    var librosOrdenados = []; // TODO: Implementar sort
    librosOrdenados = [...biblioteca].sort(function(a,b){
        return a.titulo.toLowerCase().localeCompare(b.titulo.toLowerCase());
   });
   
    mostrarLibros(librosOrdenados);
}

function mostrarBiblioteca() {
    
    // TODO: Mostrar todos los libros de la biblioteca
    mostrarLibros(biblioteca);
}

function mostrarLibros(arrayLibros) {
    // Mostrar libros en formato de tarjetas HTML
    var html = "";

    if (arrayLibros.length === 0) {
        html = "<div class='alert alert-warning'>No hay libros para mostrar</div>";
    } else {
        html = `<div class="container row">`;
        arrayLibros.forEach(libro => {
            
            html += `<div class="card m-1 col-3">
                        <div class="card-body">
                            <h5 class="card-title text-center">${libro.titulo}</h5>
                            <p class="card-text"><b>Autor:</b> ${libro.autor}</p>
                            <p class="card-text"><b>Año:</b> ${libro.año}</p>
                            <p class="card-text"><b>Género:</b> ${libro.genero}</p>
                        </div>
                    </div>`;
        });
        html +="</div>";
    }

    document.getElementById("resultado-ej10").innerHTML = html;
}
    

// ===================================
// EVENT LISTENERS - SOLO FALTAN LOS DEL EJERCICIO 10
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    // Ejercicio 1
    document.getElementById("btn-ej1").addEventListener("click", ejercicio1);

    // Ejercicio 2
    document.getElementById("btn-agregar-color").addEventListener("click", agregarColor);
    document.getElementById("btn-eliminar-ultimo").addEventListener("click", eliminarUltimoColor);
    document.getElementById("btn-mostrar-colores").addEventListener("click", mostrarColores);

    // Ejercicio 3
    document.getElementById("btn-cargar-productos").addEventListener("click", cargarProductos);
    document.getElementById("btn-ordenar-precio").addEventListener("click", ordenarPorPrecio);
    document.getElementById("btn-filtrar-caros").addEventListener("click", filtrarProductosCaros);

    // Ejercicio 4
    document.getElementById("btn-agregar-nota").addEventListener("click", agregarNota);
    document.getElementById("btn-calcular-promedio").addEventListener("click", calcularPromedio);
    document.getElementById("btn-mostrar-notas").addEventListener("click", mostrarNotasEstudiante);

    // Ejercicio 5
    document.getElementById("btn-cargar-empleados").addEventListener("click", cargarEmpleados);
    document.getElementById("btn-buscar-depto").addEventListener("click", buscarPorDepartamento);
    document.getElementById("btn-salario-alto").addEventListener("click", filtrarSalarioAlto);

    // Ejercicio 6
    document.getElementById("btn-crear-ciudades").addEventListener("click", crearArrayCiudades);
    document.getElementById("btn-eliminar-medio").addEventListener("click", eliminarDelMedio);
    document.getElementById("btn-extraer-slice").addEventListener("click", extraerConSlice);
    document.getElementById("btn-buscar-ciudad").addEventListener("click", buscarMadrid);

    // Ejercicio 7
    document.getElementById("btn-crear-vehiculos").addEventListener("click", crearVehiculos);
    document.getElementById("btn-acelerar-todos").addEventListener("click", acelerarTodos);
    document.getElementById("btn-info-vehiculos").addEventListener("click", mostrarInfoVehiculos);

    // Ejercicio 8
    document.getElementById("btn-crear-matriz").addEventListener("click", crearMatriz);
    document.getElementById("btn-sumar-diagonal").addEventListener("click", sumarDiagonal);
    document.getElementById("btn-mostrar-matriz").addEventListener("click", mostrarMatriz);

    // Ejercicio 9
    document.getElementById("btn-crear-numeros").addEventListener("click", crearArrayNumeros);
    document.getElementById("btn-duplicar-map").addEventListener("click", duplicarConMap);
    document.getElementById("btn-filtrar-pares").addEventListener("click", filtrarPares);
    document.getElementById("btn-sumar-reduce").addEventListener("click", sumarConReduce);

    // Ejercicio 10
    // TODO: Añadir event listeners para los botones del ejercicio 10
    document.getElementById("btn-mostrar-biblioteca").addEventListener("click",mostrarBiblioteca);
    document.getElementById("btn-ordenar-titulo").addEventListener("click",ordenarPorTitulo);
    document.getElementById("btn-filtrar-genero").addEventListener("click",filtrarPorGenero);
    document.getElementById("btn-libros-recientes").addEventListener("click",librosRecientes);
    document.getElementById("btn-agregar-libro").addEventListener("click",agregarLibro);
    

});

/* ===================================
   FIN DEL ARCHIVO
   
   RECORDATORIO FINAL:
   - Compvara cada TODO siguiendo las instrucciones
   - Usa sintaxis tradicional de JavaScript (no ES6+)
   - Testea cada función antes de continuar
   - Todas las salidas deben ir al DOM, no a la consola
   - ¡Practica y diviértete programando!
   ===================================
*/