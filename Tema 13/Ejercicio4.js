var productoValido = {
    id: 1,
    nombre: "KTM 690",
    precio: 10000
};
function Ejercicio4() {
    document.getElementById("outEj4").innerHTML = "";
    document.getElementById("outEj4").innerHTML += "Nombre: ".concat(productoValido.nombre, " - Precio: ").concat(productoValido.precio, "\u20AC");
}
//Dara error por que id no es un numero
// let productoNoValido: Producto={
//     id: "UNO",
//     nombre: "Producto A",
//     precio: 100
// }
