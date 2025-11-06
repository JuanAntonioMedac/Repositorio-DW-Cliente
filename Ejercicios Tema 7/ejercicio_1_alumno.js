// Plantilla para alumnos - Tema07 Ejercicio 1
// Completa las funciones marcadas con TODO y ejecuta desde el navegador.

// Ejercicio 1 - raizCuadrada (plantilla)
document.getElementById('run-e1').addEventListener('click', function () {
  const v = parseFloat(document.getElementById('a-e1').value);
  const out = document.getElementById('out-e1');
  // TODO: implementar raizCuadrada(numero) 
  if (isNaN(v)) {
    out.textContent = `No es un valor válido`;
  } else {


    const raizCuadrada = (numero) => Math.sqrt(numero);
    let res = raizCuadrada(v);

    out.textContent = `Resultado: ${res}`;
  }



});

// Ejercicio 2 - alerta (plantilla)
document.getElementById('run-e2').addEventListener('click', function () {
  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo';
  const alerta = (mensaje) => alert(mensaje);
  document.getElementById('out-e2').textContent = alerta(msg);

});

// Ejercicio 3 - new Function (plantilla)
document.getElementById('run-e3').addEventListener('click', function () {
  // TODO: usa new Function para construir y ejecutar una función que sume a y b
  const a = parseFloat(document.getElementById("a-e3a").value);
  const b = parseFloat(document.getElementById("a-e3b").value);
  const suma = new Function('a', 'b', 'return a + b');
  let res = suma(a, b);
  document.getElementById("out-e3").textContent = `Suma total = ${res}`

});

// Ejercicio 4 - Hoisting con var (plantilla)
document.getElementById('run-e4').addEventListener('click', function () {
  // TODO: reproduce el ejemplo en el código editando esta función.
  mostrar(msg);
  let contenido = `El resultado es que en consola el mensaje aparece primero como: ${msg} y luego como:`;
  let msg = "texto-prueba";

  function mostrar(texto) {
    console.log(texto)
  }
  mostrar(msg);
  contenido += ` ${msg}`;
  document.getElementById("out-e4").textContent = `${contenido}`

});

// Ejercicio 5 - IIFE (plantilla)
document.getElementById('run-e5').addEventListener('click', function () {

  // TODO: crea una IIFE que haga console.log y devuelva un valor. Luego muestra el resultado aquí.
  const resultado = (function () {
    console.log('...')
    return 27;
  })();
  document.getElementById("out-e5").textContent = `La IIFE devuelve: ${resultado} `
});

// Ejercicio 6 - Función anónima dividir (plantilla)
document.getElementById('run-e6').addEventListener('click', function () {

  // TODO: define y usa esa función para devolver el resultado
  const dividir = function (a, b) {

    return b === 0 ? "No puedes dividir entre 0" : "La el resultado de la división es: " + (a / b);
  };
  const a = parseFloat(document.getElementById("a-e6a").value);
  const b = parseFloat(document.getElementById("a-e6b").value);


  document.getElementById("out-e6").textContent = ` ${dividir(a, b)}`;


});

// Ejercicio 7 - Función flecha multiplicar (plantilla)
document.getElementById('run-e7').addEventListener('click', function () {

  // TODO: implementa una función flecha multiplicar = 
  const multiplicar = (a, b) => a * b;
  const a = parseFloat(document.getElementById("a-e7a").value);
  const b = parseFloat(document.getElementById("a-e7b").value);


  document.getElementById("out-e7").textContent = `La el resultado de la multiplicación es ${multiplicar(a, b)}`;
});

// Ejercicio 8 - Parámetros por defecto (plantilla)
document.getElementById('run-e8').addEventListener('click', function () {

  // TODO: implementar function saludar
  const nombre = document.getElementById("a-e8").value;
  let saludar = function (nombre = 'Invitado') {
    return `Hola, ${nombre}`
  }
  if (nombre === "") {
    document.getElementById("out-e8").textContent = `${saludar()}`
  } else {
    document.getElementById("out-e8").textContent = `${saludar(nombre)}`
  }


});
let contador = 0;
// Ejercicio 9 - Funciones anidadas (plantilla)
document.getElementById('run-e9').addEventListener('click', function () {

  // TODO: implementar función externa e interna
  function externa() {

    contador++;
    function interna() {
      document.getElementById("out-e9").textContent = `${contador} funcion interna`;

    }
    interna();
  }
  externa();

});

// Ejercicio 10 - Métodos nativos (plantilla)
document.getElementById('run-e10').addEventListener('click', function () {

  // TODO: usa los métodos nativos vistos (length, toUpperCase, trim, indexOf, Math.random, Date.now)
  const frase = document.getElementById("a-e10").value;

  let html = `Length: ${frase.length} <br>
              toUpperCase: ${frase.toUpperCase()}<br>
              trim: "${frase.trim()}" <br>
              indexOf 'Mundo': ${frase.indexOf('Mundo')}<br>
              Math.random(): ${Math.random().toFixed(4)} <br>
              Date.now(): ${Date(Date.now()).toLocaleString()} `;

  document.getElementById("out-e10").innerHTML = html;


});