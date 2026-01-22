var AlumnoApp = /** @class */ (function () {
    function AlumnoApp(id, nombre, notas) {
        this.id = id;
        this.nombre = nombre;
        this.notas = notas;
    }
    AlumnoApp.prototype.notaMedia = function () {
        var suma = this.notas.reduce(function (a, b) { return a + b; }, 0);
        return suma / this.notas.length;
    };
    AlumnoApp.prototype.resumen = function () {
        var output = "".concat(this.nombre, " ||Notas:");
        this.notas.forEach(function (nota) {
            output += " ".concat(nota);
        });
        output += "||Media: ".concat(this.notaMedia().toFixed(2));
        return output;
    };
    return AlumnoApp;
}());
function Ejercicio10() {
    document.getElementById("outEj10").innerText = "";
    var alumnos = [
        new AlumnoApp(1, "María", [8, 9, 7]),
        new AlumnoApp(2, "Pedro", [6, 7, 5]),
        new AlumnoApp(3, "Lucía", [9, 10, 8])
    ];
    var output = "";
    alumnos.forEach(function (a) { return output += a.resumen() + "\n"; });
    var mediaGlobal = alumnos.reduce(function (acc, media) { return acc + media.notaMedia(); }, 0) / alumnos.length;
    output += "\nMedia global: " + mediaGlobal.toFixed(2);
    document.getElementById("outEj10").innerText = output;
}
