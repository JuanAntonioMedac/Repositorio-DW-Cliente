var EmpleadoEmpresa = /** @class */ (function () {
    function EmpleadoEmpresa(id, nombre, sueldoMensual) {
        this.id = id;
        this.nombre = nombre;
        this.sueldoMensual = sueldoMensual;
    }
    EmpleadoEmpresa.prototype.sueldoAnual = function () {
        return this.sueldoMensual * 12;
    };
    return EmpleadoEmpresa;
}());
function Ejercicio7() {
    document.getElementById("outEj7").innerText = "";
    var e = new EmpleadoEmpresa(1, "Ana", 2000);
    document.getElementById("outEj7").innerText = "Sueldo anual: " + e.sueldoAnual();
    console.log("Sueldo anual: " + e.sueldoAnual());
}
