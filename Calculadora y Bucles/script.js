var resultado = document.getElementById("resultado");

function getNumber1() {
    return Number(document.getElementById("numero1").value) || 0;
}
function getNumber2() {
    return Number(document.getElementById("numero2").value) || 0;
}

// Función para sumar dos números
function sumar() {
    // Muestra en pantalla la suma de los dos números
    resultado.innerHTML = `El resultado de la suma es: ${getNumber1() + getNumber2()}`;
}

// Función para restar dos números
function restar() {
    // Muestra en pantalla la resta de los dos números
    resultado.innerHTML = `El resultado de la resta es: ${getNumber1() - getNumber2()}`;
}

// Función para dividir dos números
function dividir() {
    // Muestra en pantalla la división del primer número entre el segundo
    resultado.innerHTML = `El resultado de la división es: ${getNumber1() / getNumber2()}`;
}

// Función para multiplicar dos números
function multiplicar() {
    // Muestra en pantalla la multiplicación de los dos números
    resultado.innerHTML = `El resultado de la multiplicación es: ${getNumber1() * getNumber2()}`;
}

// Función para elevar un número a la potencia de otro
function elevar() {
    // Muestra en pantalla el primer número elevado al segundo
    resultado.innerHTML = `El resultado de elevar ${getNumber1()} a ${getNumber2()} es: ${getNumber1() ** getNumber2()}`;
}

// Función para obtener el módulo (resto de la división)
function modulo() {
    // Muestra en pantalla el resto de dividir el primer número entre el segundo
    resultado.innerHTML = `El resto de la división es: ${getNumber1() % getNumber2()}`;
}

// Función para elevar un número a la raiz del otro
function raiz() {
    // Muestra en pantalla la raiz del primer número en base del segundo
    resultado.innerHTML = `El resultado de la raiz ${getNumber2()}ª de ${getNumber1()} es: ${getNumber1() ** 1/getNumber2()}`;
}

// ----------- BUCLES FOR -----------
function forT(numero) {
    // Recorre desde 0 hasta el número dado y muestra los valores en texto
    for (let index = 0; index <= numero; index++) {
        if (index != numero) {
            resultado.innerHTML += ` ${index},<br>`; // Si no es el último, pone coma
        } else {
            resultado.innerHTML += ` ${index}.`; // Último número con punto
        }
    }
}

function forTexto() {
    // Muestra los resultados del bucle FOR con los dos números
    resultado.innerHTML = `<b>Bucle FOR:</b> <br>`;
    forT(getNumber1());
    resultado.innerHTML += `<hr>`;
    resultado.innerHTML += `<b>Bucle FOR Número 2:</b> <br>`;
    forT(getNumber2());
}

function forB(numero) {
    // Muestra los números dentro de badges visuales
    for (let index = 0; index <= numero; index++) {
        resultado.innerHTML += ` <span class="badge text-bg-secondary">#${index}</span>`;
    }
}

function forBadges() {
    resultado.innerHTML = `<b>Bucle FOR:</b> <br>`;
    forB(getNumber1());
    resultado.innerHTML += `<hr>`;
    resultado.innerHTML += `<b>Bucle FOR Número 2:</b> <br>`;
    forB(getNumber2());
}

// ----------- BUCLES WHILE -----------
function whileT(numero) {
    let contador = 0;
    // Recorre mientras el contador sea menor o igual al número
    while (contador <= numero) {
        if (contador != numero) {
            resultado.innerHTML += ` ${contador},<br>`;
        } else {
            resultado.innerHTML += ` ${contador}.`;
        }
        contador++; // Incrementa el contador
    }
}

function whileTexto() {
    resultado.innerHTML = `<b>Bucle WHILE Número 1:</b> <br>`;
    whileT(getNumber1());
    resultado.innerHTML += `<hr>`;
    resultado.innerHTML += `<b>Bucle WHILE Número 2:</b> <br>`;
    whileT(getNumber2());
}

function whileB(numero) {
    let contador = 0;
    // Muestra los números en badges con WHILE
    while (contador <= numero) {
        resultado.innerHTML += ` <span class="badge text-bg-secondary">#${contador}</span>`;
        contador++;
    }
}

function whileBadges() {
    resultado.innerHTML = `<b>Bucle WHILE Número 1:</b> <br>`;
    whileB(getNumber1());
    resultado.innerHTML += `<hr>`;
    resultado.innerHTML += `<b>Bucle WHILE Número 2:</b> <br>`;
    whileB(getNumber2());
}

// ----------- BUCLES DO WHILE -----------
function doT(numero) {
    let contador = 0;
    // Se ejecuta al menos una vez aunque la condición no se cumpla
    do {
        if (contador != numero) {
            resultado.innerHTML += ` ${contador},<br>`;
        } else {
            resultado.innerHTML += ` ${contador}.`;
        }
        contador++;
    } while (contador <= numero);
}

function doTexto() {
    resultado.innerHTML = `<b>Bucle DO WHILE Número 1:</b> <br>`;
    doT(getNumber1());
    resultado.innerHTML += `<hr>`;
    resultado.innerHTML += `<b>Bucle DO WHILE Número 2:</b> <br>`;
    doT(getNumber2());
}

function doB(numero) {
    let contador = 0;
    // Muestra badges usando do...while
    do {
        resultado.innerHTML += ` <span class="badge text-bg-secondary">#${contador}</span>`;
        contador++;
    } while (contador <= numero);
}

function doBadges() {
    resultado.innerHTML = `<b>Bucle DO WHILE Número 1:</b> <br>`;
    doB(getNumber1());
    resultado.innerHTML += `<hr>`;
    resultado.innerHTML += `<b>Bucle DO WHILE Número 2:</b> <br>`;
    doB(getNumber2());
}
