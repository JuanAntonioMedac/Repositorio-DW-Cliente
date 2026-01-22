var productos = [
    { id: 1, nombre: "KTM 690", precio: 10000 },
    { id: 2, nombre: "BMW GS", precio: 15000 },
    { id: 3, nombre: "Ducati Monster", precio: 12000 }
];
function Ejercicio5() {
    document.getElementById("outEj5").innerHTML = "";
    var total = 0;
    productos.forEach(function (producto) {
        console.log("Nombre: ".concat(producto.nombre, " - Precio: ").concat(producto.precio, "\u20AC\n"));
        total += producto.precio;
    });
    document.getElementById("outEj5").innerHTML += "Precio total: ".concat(total, "\u20AC");
}
