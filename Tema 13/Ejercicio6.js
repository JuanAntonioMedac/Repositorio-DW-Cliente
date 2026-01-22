var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.presentarse = function () {
        return "".concat(this.nombre, " tiene ").concat(this.edad, " a\u00F1os");
    };
    return Persona;
}());
function Ejercicio6() {
    document.getElementById("outEj6").innerHTML = "";
    var p = new Persona("Juan", 25);
    var out = p.presentarse();
    document.getElementById("outEj6").innerHTML = out;
    // console.log(p.edad); // Error: La propiedad 'edad' es privada y solo es accesible dentro de la clase 'Persona'.
}
