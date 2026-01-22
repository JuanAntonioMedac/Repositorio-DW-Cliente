// Define la estructura de un producto
interface Producto{
    id: number;
    nombre: string;
    precio: number;
}
let productoValido: Producto={
    id: 1,
    nombre: "KTM 690",
    precio: 10000
}
// Muestra información del producto
function Ejercicio4(){
    (document.getElementById("outEj4") as HTMLElement).innerHTML ="";
    (document.getElementById("outEj4") as HTMLElement).innerHTML += `Nombre: ${productoValido.nombre} - Precio: ${productoValido.precio}€`;
}


//Dara error por que id no es un numero
// let productoNoValido: Producto={
//     id: "UNO",
//     nombre: "Producto A",
//     precio: 100
// }