function Ejercicio1() {
    var nombreCentro = "Medac";
    var nombreAlumno = "Juan Caballero";
    var edad = 26;
    var matriculado = true;
    var notas = [8.5, 7.2, 9.1, 8.8, 7.5];
    console.log("=== INFORMACIÓN DEL ALUMNO ===");
    console.log("Centro educativo: ".concat(nombreCentro));
    console.log("Nombre: ".concat(nombreAlumno));
    console.log("Edad: ".concat(edad, " a\u00F1os"));
    console.log("Matriculado: ".concat(matriculado ? "Sí" : "No"));
    console.log("Notas: [".concat(notas.join(", "), "]"));
    console.log("Promedio de notas: ".concat((notas.reduce(function (a, b) { return a + b; }) / notas.length).toFixed(2)));
    document.getElementById("outEj1").innerHTML = "";
    document.getElementById("outEj1").innerHTML += "\n  === INFORMACI\u00D3N DEL ALUMNO ===\n\n  Centro educativo: ".concat(nombreCentro, "\n\n  Nombre: ").concat(nombreAlumno, "\n\n  Edad: ").concat(edad, " a\u00F1os\n\n  Matriculado: ").concat(matriculado ? "Sí" : "No", "\n\n  Notas: [").concat(notas.join(", "), "]\n\n  Promedio de notas: ").concat((notas.reduce(function (a, b) { return a + b; }) / notas.length).toFixed(2));
}
